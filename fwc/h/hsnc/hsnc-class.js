/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import { HsncConfig } from "./hsnc-config.js";
import { HsncTool } from "./hsnc-tool.js";
import {
  BodyConfig,
  DpmacConfig
} from "../../fwc-hub.js";
/*  */
class HsncAccessor {
  static itemCloseAll() {
    HsncLogic.itemCloseAll();
  }
}
class HsncController {
  static init() {
    HsncManager.init();
  }
  static load() {
    HsncManager.load();
  }
  static resizeDisplay() {
    HsncManager.resizeDisplay();
  }
  static resizeSensor() {
    HsncManager.resizeSensor();
  }
}
class HsncManager {
  static init() {
    HsncConfig.generate();
    if (BodyConfig.pageType === 3) {
      HsncConfig.createTocForDpm();
      const items = document.querySelectorAll(".hsnc-item");
      items[0].isToc = true;
    }
    /*  */
    const items = document.querySelectorAll(".hsnc-item");
    items.forEach((item, index) => {
      item.index = index;
      item.isOpen = false;
      const subItems = item.querySelectorAll(".hsnc-sub-item");
      subItems.forEach((subItem, subIndex) => {
        subItem.index = subIndex;
      });
      const subItemContainers = item.querySelectorAll(".hsnc-sub-item-container");
      subItemContainers.forEach(subContainer => {
        subContainer.isHover = false;
      });
    });
  }
  /* ============================== */
  static load() {
    HsncManager.loadEvent();
  }
  /* ============================== */
  static resizeDisplay() {
    
  }
  /* ============================== */
  static resizeSensor() {
    const items = document.querySelectorAll(".hsnc-item");
    items.forEach(item => {
      if (item.isOpen && !item.isToc) {
        HsncLogic.subItemContainerTools(item);
        if (BodyConfig.isTouchDevice) {
          const subItemBrs = item.querySelectorAll(".hsnc-sub-item-br");
          subItemBrs.forEach(subItemBr => {
            subItemBr.style.width = `${subItemBr.width}px`;
          });
        }
      }
    });
    HsncHandler.scroll();
  }
  /* ============================== */
  static loadEvent() {
    const items = document.querySelectorAll(".hsnc-item");
    const itemContainers = document.querySelectorAll(".hsnc-item-container");
    const subLists = document.querySelectorAll(".hsnc-sub-list");
    itemContainers.forEach(container => {
      container.addEventListener("click", HsncHandler.itemContainerClick);
    });
    subLists.forEach(list => {
      list.addEventListener("transitionend", HsncHandler.subListTransitionEnd);
    });
    if (items[0].isToc) {
      const subItemContainers = items[0].querySelectorAll(".hsnc-sub-item-container");
      subItemContainers.forEach(container => {
        container.addEventListener("click", HsncHandler.subItemContainerClickForToc);
      });
    }
    /*  */
    const hsnc = document.querySelector(".hsnc");
    hsnc.addEventListener("scroll", HsncHandler.scroll);
    /*  */
    if (!BodyConfig.isTouchDevice) {
      items.forEach(item => {
        if (!item.isToc) {
          const subItemContainers = item.querySelectorAll(".hsnc-sub-item-container");
          subItemContainers.forEach(container => {
            container.addEventListener("mouseenter", HsncHandler.subItemContainerHover);
            container.addEventListener("mouseleave", HsncHandler.subItemContainerHover);
          });
        }
      });
    }
  }
  /* ============================== */
  static resizeEvent() {

  }
}
class HsncHandler {
  /* ============================== */
  static subItemContainerClickForToc(event) {
    const subItemContainer = event.currentTarget;
    const subItem = subItemContainer.closest(".hsnc-sub-item");
    /* DpmacConfig.currentIndex = subItem.index; */
    DpmacConfig.tocIndex = subItem.index;
    /* HsncTool.setSubItemLr(); */
    HsncTool.updateSubItemLrForToc();
  }
  /* ============================== */
  static itemContainerClick(event) {
    const itemContainer = event.currentTarget;
    const item = itemContainer.closest(".hsnc-item");
    /*  */
    const itemText = itemContainer.querySelector(".hsnc-item-text");
    const itemRr = itemContainer.querySelector(".hsnc-item-rr");
    const itemBr = itemContainer.querySelector(".hsnc-item-br");
    /*  */
    const subList = item.querySelector(".hsnc-sub-list");
    const subItems = item.querySelectorAll(".hsnc-sub-item");
    /*  */
    const clDataOpen = "cl-hsnc-item-container-click";
    let shouldOpen = false;
    let clType = "remove";
    if (!item.isOpen) {
      shouldOpen = true;
      clType = "add";
    }
    if (shouldOpen) {
      const calcSubListHeight = subItems.length * 4;
      subList.style.height = `${calcSubListHeight}rem`;
      if (item.isToc) {
        /* HsncTool.setSubItemLr(); */
        HsncTool.updateSubItemLrForToc();
      }
    } else {
      subList.style.height = "";
      if (!item.isToc && BodyConfig.isTouchDevice) {
        HsncTool.timerSubItemContainer(item, true);
        const subItemBrs = item.querySelectorAll(".hsnc-sub-item-br");
        subItemBrs.forEach(subItemBr => {
          subItemBr.style.width = "";
        });
      }
    }
    /*  */
    if (!BodyConfig.isTouchDevice) {
      HsncLogic.itemContainerSetHoverLock(item, shouldOpen);
    }
    /*  */
    item.classList[clType](clDataOpen);
    itemText.classList[clType](clDataOpen);
    itemRr.classList[clType](clDataOpen);
    itemBr.classList[clType](clDataOpen);
    subList.classList[clType](clDataOpen);
    /*  */
    item.isOpen = shouldOpen;
  }
  /* ============================== */
  static subListTransitionEnd(event) {
    const target = event.target;
    const subList = event.currentTarget;
    /*  */
    if (
      target === subList
      && event.propertyName === "height"
    ) {
      const item = subList.closest(".hsnc-item");
      HsncLogic.subItemContainerTools(item);
      if (item.isOpen && !item.isToc && BodyConfig.isTouchDevice) {
        HsncTool.timerSubItemContainer(item);
      } else if (item.isOpen && !item.isToc) {
        /* HMI */
        const subItemContainers = item.querySelectorAll(".hsnc-sub-item-container");
        subItemContainers.forEach(subItemContainer => {
          if (subItemContainer.isHover) {
            const subItemBr = subItemContainer.querySelector(".hsnc-sub-item-br");
            subItemBr.style.width = `${subItemBr.width}px`;
          }
        });
      }
      HsncHandler.scroll();
    }
  }
  /* ============================== */
  static subItemContainerHover(event) {
    const eventType = event.type;
    const subItemContainer = event.currentTarget;
    const subItem = subItemContainer.closest(".hsnc-sub-item");
    const subItemBr = subItem.querySelector(".hsnc-sub-item-br");
    /*  */
    if (eventType === "mouseenter") {
      subItemBr.style.width = `${subItemBr.width}px`;
      subItemContainer.isHover = true;
    } else if (eventType === "mouseleave") {
      subItemBr.style.width = "";
      subItemContainer.isHover = false;
    }
  }
  /* ============================== */
  static scroll() {
    const hsnc = document.querySelector(".hsnc");
    const fogTr = document.querySelector(".hsnc-fog-tr");
    const fogBr = document.querySelector(".hsnc-fog-br");
    /*  */
    const innerHeight = window.innerHeight;
    const calcFogHeight = innerHeight / 10;
    const scrollTop = hsnc.scrollTop;
    const scrollHeight = hsnc.scrollHeight;
    const clientHeight = hsnc.clientHeight;
    const scrollBuffer = 8;
    /*  */
    let trHeight = 0;
    let brHeight = 0;
    /*  */
    if (scrollTop > scrollBuffer) {
      trHeight = calcFogHeight;
    }
    if (scrollTop + clientHeight + scrollBuffer < scrollHeight) {
      brHeight = calcFogHeight;
    }
    /*  */
    fogTr.style.height = `${trHeight}px`;
    fogBr.style.height = `${brHeight}px`;
  }
  /* ============================== */
}
class HsncLogic {
  static itemCloseAll() {
    const items = document.querySelectorAll(".hsnc-item");
    items.forEach(item => {
      if (item.isOpen) {
        const itemContainer = item.querySelector(".hsnc-item-container");
        const modifyEvent = { currentTarget: itemContainer };
        HsncHandler.itemContainerClick(modifyEvent);
      }
    });
  }
  static itemContainerSetHoverLock(item, shouldLock) {
    const itemText = item.querySelector(".hsnc-item-text");
    const itemRr = item.querySelector(".hsnc-item-rr");
    const itemBr = item.querySelector(".hsnc-item-br");
    /*  */
    const clDataHover = "cl-hsnc-item-container-set-hover-lock";
    let clAction = "remove";
    if (shouldLock) {
      clAction = "add";
    }
    /*  */
    itemText.classList[clAction](clDataHover);
    itemRr.classList[clAction](clDataHover);
    itemBr.classList[clAction](clDataHover);
  }
  static subItemContainerTools(item) {
    HsncTool.updateSubItemBrLeft(item);
    HsncTool.calcSubItemBrWidth(item);
    HsncTool.updateSubItemRrLeft(item);
  }
}
/*  */
export {
  HsncAccessor,
  HsncController
};
/* ========================= :FACOOYA: ========================= */
/* NOTE
 * items: index, isOpen, [0]isToc
 * [0]subItem: index
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
/* ========================= ;FACOOYA; ========================= */