/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* ================================================== */
import { BodyConfig } from "../../fwc-hub.js";
/* -------------------------------------------------- */
import { HsncConfig } from "./hsnc-config.js";
import { HsncTool } from "./hsnc-tool.js";
/* -------------------------------------------------- */
import { DpmacConfig, DpmacAccessor } from "../../dpm/dpm-hub.js";
/* ================================================== */
class HsncAccessor {
  static itemCloseAll() {
    HsncLogic.itemCloseAll();
  }
}
/* ================================================== */
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
/* ================================================== */
class HsncManager {
  static init() {
    /* Generate */
    HsncConfig.initGenerate();
    if (BodyConfig.pageType === 3) {
      HsncConfig.tocCreate();
      const items = document.querySelectorAll(".hsnc-list .item");
      items[0].isToc = true;
    }
    /* Event */
    HsncManager.initEvent();
    /* Initial */
    const items = document.querySelectorAll(".hsnc-list .item");
    for (let i = 0; i < items.length; i++) {
      items[i].index = i;
      items[i].isOpen = false;
      const subItems = items[i].querySelectorAll(".sub-item");
      const subItemContainers = items[i].querySelectorAll(".sub-item-container");
      for (let j = 0; j < subItems.length; j++) {
        subItems[j].index = j;
        subItemContainers[j].isHover = false;
      }
    }
  }
  /* -------------------------------------------------- */
  static load() {
    const items = document.querySelectorAll(".hsnc-list .item");
    items.forEach(item => {
      if (!item.isToc) {
        HsncLogic.subItemContainerTools(item);
      }
    });
  }
  /* -------------------------------------------------- */
  static resizeDisplay() {
    const items = document.querySelectorAll(".hsnc-list .item");
    items.forEach(item => {
      if (!item.isToc) {
        HsncLogic.subItemContainerTools(item);
      }
    });
    HsncHandler.scroll();
  }
  /* -------------------------------------------------- */
  static resizeSensor() {
    const items = document.querySelectorAll(".hsnc-list .item");
    items.forEach(item => {
      if (item.isOpen && !item.isToc) {
        HsncLogic.subItemContainerTools(item);
        if (BodyConfig.isTouchDevice) {
          const subItemBrs = item.querySelectorAll(".sub-item-br");
          subItemBrs.forEach(subItemBr => {
            subItemBr.style.width = `${subItemBr.width}px`;
          });
        }
      }
    });
    HsncHandler.scroll();
  }
  /* ================================================== */
  static initEvent() {
    const list = document.querySelector(".hsnc-list");
    const items = list.querySelectorAll(".item");
    const itemContainers = list.querySelectorAll(".item-container");
    const subLists = list.querySelectorAll(".sub-list");
    /*  */
    itemContainers.forEach(container => {
      container.addEventListener("click", HsncHandler.itemContainerClick);
    });
    subLists.forEach(list => {
      list.addEventListener("transitionend", HsncHandler.subListTransitionEnd);
    });
    /* Only DP */
    if (items[0].isToc) {
      const subItemContainers = subLists[0].querySelectorAll(".sub-item-container");
      subItemContainers.forEach(container => {
        container.addEventListener("click", HsncHandler.subItemContainerClick);
      });
    }
    /*  */
    const hsnc = document.querySelector(".hsnc");
    hsnc.addEventListener("scroll", HsncHandler.scroll);
    /*  */
    if (!BodyConfig.isTouchDevice) {
      items.forEach(item => {
        if (!item.isToc) {
          const subItemContainers = item.querySelectorAll(".sub-item-container");
          subItemContainers.forEach(container => {
            container.addEventListener("mouseenter", HsncHandler.subItemContainerHover);
            container.addEventListener("mouseleave", HsncHandler.subItemContainerHover);
          });
        }
      });
    }
  }
  /* -------------------------------------------------- */
  static resizeEvent() {

  }
}
/* ================================================== */
class HsncHandler {
  static itemContainerClick(event) {
    const itemContainer = event.currentTarget;
    const item = itemContainer.closest(".item");
    /*  */
    const itemText = itemContainer.querySelector(".item-text");
    const itemRr = itemContainer.querySelector(".item-rr");
    const itemBr = itemContainer.querySelector(".item-br");
    /*  */
    const subList = item.querySelector(".sub-list");
    const subItems = subList.querySelectorAll(".sub-item");
    /*  */
    const open = "open";
    let shouldOpen = false;
    let action = "remove";
    if (!item.isOpen) {
      shouldOpen = true;
      action = "add";
    }
    if (shouldOpen) {
      const calcSubListHeight = subItems.length * 64;
      subList.style.height = `${calcSubListHeight}px`;
      if (item.isToc) {
        HsncTool.subItemLr();
      }
    } else {
      subList.style.height = "";
      if (!item.isToc && BodyConfig.isTouchDevice) {
        HsncTool.subItemContainerTimer(item, true);
        const subItemBrs = item.querySelectorAll(".sub-item-br");
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
    item.classList[action](open);
    itemText.classList[action](open);
    itemRr.classList[action](open);
    itemBr.classList[action](open);
    subList.classList[action](open);
    /*  */
    item.isOpen = shouldOpen;
  }
  /* -------------------------------------------------- */
  static subListTransitionEnd(event) {
    const target = event.target;
    const subList = event.currentTarget;
    /*  */
    if (
      target === subList
      && event.propertyName === "height"
    ) {
      const item = subList.closest(".item");
      if (item.isOpen && !item.isToc && BodyConfig.isTouchDevice) {
        HsncLogic.subItemContainerTools(item);
        HsncTool.subItemContainerTimer(item);
      } else if (item.isOpen && !item.isToc) {
        /* HMI */
        HsncLogic.subItemContainerTools(item);
        const subItemContainers = item.querySelectorAll(".sub-item-container");
        subItemContainers.forEach(subItemContainer => {
          if (subItemContainer.isHover) {
            const subItemBr = subItemContainer.querySelector(".sub-item-br");
            subItemBr.style.width = `${subItemBr.width}px`;
          }
        });
      }
      HsncHandler.scroll();
    }
  }
  /* -------------------------------------------------- */
  static subItemContainerHover(event) {
    /* Only !TOC */
    const eventType = event.type;
    const subItemContainer = event.currentTarget;
    const subItem = subItemContainer.closest(".sub-item");
    const subItemBr = subItem.querySelector(".sub-item-br");
    /*  */
    if (eventType === "mouseenter") {
      subItemBr.style.width = `${subItemBr.width}px`;
      subItemContainer.isHover = true;
    } else if (eventType === "mouseleave") {
      subItemBr.style.width = "";
      subItemContainer.isHover = false;
    }
  }
  /* -------------------------------------------------- */
  static subItemContainerClick(event) {
    /* Only DP */
    const subItemContainer = event.currentTarget;
    const subItem = subItemContainer.closest(".sub-item");

    const hash = subItemContainer.hash;
    DpmacAccessor.tocHashReplace(hash);
    DpmacConfig.tocIndex = subItem.index;

    HsncTool.subItemLr();
  }
  /* -------------------------------------------------- */
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
}
/* ================================================== */
class HsncLogic {
  static itemCloseAll() {
    const items = document.querySelectorAll(".hsnc-list .item");
    items.forEach(item => {
      if (item.isOpen) {
        const itemContainer = item.querySelector(".item-container");
        const modifyEvent = { currentTarget: itemContainer };
        HsncHandler.itemContainerClick(modifyEvent);
      }
    });
  }
  static itemContainerSetHoverLock(item, shouldLock) {
    const itemText = item.querySelector(".item-text");
    const itemRr = item.querySelector(".item-rr");
    const itemBr = item.querySelector(".item-br");
    /*  */
    const hoverLock = "hover-lock";
    let action = "remove";
    if (shouldLock) {
      action = "add";
    }
    /*  */
    itemText.classList[action](hoverLock);
    itemRr.classList[action](hoverLock);
    itemBr.classList[action](hoverLock);
  }
  static subItemContainerTools(item) {
    HsncTool.subItemBrLeft(item);
    HsncTool.subItemBrWidth(item);
    HsncTool.subItemRrLeft(item);
  }
}
/* ================================================== */
export { HsncAccessor, HsncController };
/* ================================================== */
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
/* ========================= ;FACOOYA; ========================= */