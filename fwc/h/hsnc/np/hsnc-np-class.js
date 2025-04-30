/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* ================================================== */
import { CoreConfig } from "../../core/core-config.js";
/* -------------------------------------------------- */
import { HsncNpConfig } from "./hsnc-np-config.js";
import { HsncTool } from "../hsnc-tool.js";
/* ================================================== */
class HsncNpAccessor {
  static itemCloseAll() {
    HsncNpLogic.itemCloseAll();
  }
}
/* ================================================== */
class HsncNpController {
  static init() {
    HsncNpManager.init();
  }
  static load() {
    HsncNpManager.load();
  }
  static resizeDisplay() {
    HsncNpManager.resizeDisplay();
  }
  static resizeSensor() {
    HsncNpManager.resizeSensor();
  }
}
/* ================================================== */
class HsncNpManager {
  static init() {
    /* Generate */
    HsncNpConfig.initGenerate();
    /* Event */
    HsncNpManager.initEvent();
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
      HsncNpLogic.subItemContainerTools(item);
    });
  }
  /* -------------------------------------------------- */
  static resizeDisplay() {
    const items = document.querySelectorAll(".hsnc-list .item");
    items.forEach(item => {
      HsncNpLogic.subItemContainerTools(item);
    });
    HsncNpHandler.scroll();
  }
  /* -------------------------------------------------- */
  static resizeSensor() {
    const items = document.querySelectorAll(".hsnc-list .item");
    items.forEach(item => {
      if (item.isOpen) {
        HsncNpLogic.subItemContainerTools(item);
        if (CoreConfig.isTouchDevice) {
          const subItemBrs = item.querySelectorAll(".sub-item-br");
          subItemBrs.forEach(subItemBr => {
            subItemBr.style.width = `${subItemBr.width}px`;
          });
        }
      }
    });
    HsncNpHandler.scroll();
  }
  /* ================================================== */
  static initEvent() {
    const list = document.querySelector(".hsnc-list");
    const items = list.querySelectorAll(".item");
    const itemContainers = list.querySelectorAll(".item-container");
    const subLists = list.querySelectorAll(".sub-list");
    /*  */
    itemContainers.forEach(container => {
      container.addEventListener("click", HsncNpHandler.itemContainerClick);
    });
    subLists.forEach(list => {
      list.addEventListener("transitionend", HsncNpHandler.subListTransitionEnd);
    });
    /*  */
    const hsnc = document.querySelector(".hsnc");
    hsnc.addEventListener("scroll", HsncNpHandler.scroll);
    /*  */
    if (!CoreConfig.isTouchDevice) {
      items.forEach(item => {
        const subItemContainers = item.querySelectorAll(".sub-item-container");
        subItemContainers.forEach(container => {
          container.addEventListener("mouseenter", HsncNpHandler.subItemContainerHover);
          container.addEventListener("mouseleave", HsncNpHandler.subItemContainerHover);
        });
      });
    }
  }
  /* -------------------------------------------------- */
  static resizeEvent() {

  }
}
/* ================================================== */
class HsncNpHandler {
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
    } else {
      subList.style.height = "";
      if (CoreConfig.isTouchDevice) {
        HsncTool.subItemContainerTimer(item, true);
        const subItemBrs = item.querySelectorAll(".sub-item-br");
        subItemBrs.forEach(subItemBr => {
          subItemBr.style.width = "";
        });
      }
    }
    /*  */
    if (!CoreConfig.isTouchDevice) {
      HsncNpLogic.itemContainerSetHoverLock(item, shouldOpen);
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
      if (item.isOpen && CoreConfig.isTouchDevice) {
        HsncNpLogic.subItemContainerTools(item);
        HsncTool.subItemContainerTimer(item);
      } else if (item.isOpen) {
        /* HMI */
        HsncNpLogic.subItemContainerTools(item);
        const subItemContainers = item.querySelectorAll(".sub-item-container");
        subItemContainers.forEach(subItemContainer => {
          if (subItemContainer.isHover) {
            const subItemBr = subItemContainer.querySelector(".sub-item-br");
            subItemBr.style.width = `${subItemBr.width}px`;
          }
        });
      }
      HsncNpHandler.scroll();
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
class HsncNpLogic {
  static itemCloseAll() {
    const items = document.querySelectorAll(".hsnc-list .item");
    items.forEach(item => {
      if (item.isOpen) {
        const itemContainer = item.querySelector(".item-container");
        const modifyEvent = { currentTarget: itemContainer };
        HsncNpHandler.itemContainerClick(modifyEvent);
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
export { HsncNpAccessor, HsncNpController };
/* ================================================== */
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
/* ========================= ;FACOOYA; ========================= */