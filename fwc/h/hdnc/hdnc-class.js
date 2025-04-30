/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* ================================================== */
import { CoreConfig } from "../../core/core-config.js";
/* -------------------------------------------------- */
import { HdncConfig } from "./hdnc-config.js";
import { HdncTool } from "./hdnc-tool.js";
/* -------------------------------------------------- */
/* HdncHandler.itemContainerClick() => HtbcHandler.snrClick() */
import { HtbcAccessor } from "../h-hub.js";
/* ================================================== */
class HdncAccessor {
  static itemCloseAll() {
    /* Htbc.snrClick() <=> this */
    HdncLogic.itemCloseAll();
  }
  static updateChevronWrapperLeft(item) {
    /* HtbcHandler.snrItemTransitionEnd() => this */
    HdncTool.updateChevronWrapperLeft(item);
  }
}
/* ================================================== */
class HdncController {
  static init() {
    HdncManager.init();
  }
  static load() {
    HdncManager.load();
  }
  static resizeDisplay() {
    HdncManager.resizeDisplay();
  }
  static resizeSensor() {
    HdncManager.resizeSensor();
  }
}
/* ================================================== */
class HdncManager {
  static init() {
    HdncConfig.initGenerate();
    HdncManager.initEvent();
    const items = document.querySelectorAll(".hdnc-list .item");
    for (let i = 0; i < items.length; i++) {
      items[i].index = i;
      items[i].isOpen = false;
      const subItems = items[i].querySelectorAll(".sub-item");
      const subItemContainers = items[i].querySelectorAll(".sub-item-container");
      for (let j = 0; j < subItems.length; j++) {
        subItems[j].index = j;
        subItemContainers.isHover = false;
      }
    }
  }
  /* -------------------------------------------------- */
  static load() {
    HdncTool.updateSubListMaxHeight();
  }
  /* -------------------------------------------------- */
  static resizeDisplay() {
    if (CoreConfig.previousScreenType >= 2) {
      HdncLogic.itemCloseAll();
    }
    HdncManager.resizeEvent();
    HdncTool.updateSubListMaxHeight();
  }
  /* -------------------------------------------------- */
  static resizeSensor() {
    const items = document.querySelectorAll(".hdnc-list .item");
    items.forEach(item => {
      if (item.isOpen) {
        HdncLogic.subItemContainerTools(item);
        if (CoreConfig.isTouchDevice) {
          /* HMI: isOpen */
          const subItemBrs = item.querySelectorAll(".sub-item-br");
          subItemBrs.forEach(subItemBr => {
            subItemBr.style.width = `${subItemBr.width}px`;
          });
        } else if (!CoreConfig.isTouchDevice) {
          /* HMI: isOpen && isHover */
          const subItemContainers = item.querySelectorAll(".sub-item-container");
          subItemContainers.forEach(subItemContainer => {
            if (subItemContainer.isHover) {
              const subItemBr = subItemContainer.querySelector(".sub-item-br");
              subItemBr.style.width = `${subItemBr.width}px`
            }
          });
        }
      }
    });
    HdncTool.updateSubListMaxHeight();
    HdncHandler.scroll();
  }
  /* ================================================== */
  static initEvent() {
    const hdnc = document.querySelector(".hdnc");
    const list = hdnc.querySelector(".hdnc-list");
    const screenType = CoreConfig.screenType;
    const isTouchDevice = CoreConfig.isTouchDevice;
    /*  */
    const subLists = list.querySelectorAll(".sub-list");
    subLists.forEach(subList => {
      subList.addEventListener("transitionend", HdncHandler.subListTransitionEnd);
    });
    /*  */
    if (screenType === 1) {
      hdnc.addEventListener("scroll", HdncHandler.scroll);
    } else if (screenType >= 2) {
      subLists.forEach(subList => {
        subList.addEventListener("scroll", HdncHandler.subListScroll);
      });
    }
    /*  */
    if (screenType === 3 && !isTouchDevice) {
      const items = list.querySelectorAll(".item");
      items.forEach(item => {
        item.addEventListener("mouseenter", HdncHandler.itemHover);
        item.addEventListener("mouseleave", HdncHandler.itemHover);
      });
    } else {
      const itemContainers = list.querySelectorAll(".item-container");
      itemContainers.forEach(container => {
        container.addEventListener("click", HdncHandler.itemContainerClick);
      });
    }
    /*  */
    if (!isTouchDevice) {
      const subItemContainers = list.querySelectorAll(".sub-item-container");
      subItemContainers.forEach(subContainer => {
        subContainer.addEventListener("mouseenter", HdncHandler.subItemContainerHover);
        subContainer.addEventListener("mouseleave", HdncHandler.subItemContainerHover);
      });
    }
  }
  /* -------------------------------------------------- */
  static resizeEvent() {
    const hdnc = document.querySelector(".hdnc");
    const list = hdnc.querySelector(".hdnc-list");
    const screenType = CoreConfig.screenType;
    const previousScreenType = CoreConfig.previousScreenType;
    const isTouchDevice = CoreConfig.isTouchDevice;
    /*  */
    if (previousScreenType === 1) {
      hdnc.removeEventListener("scroll", HdncHandler.scroll);
      const subLists = list.querySelectorAll(".sub-list");
      subLists.forEach(subList => {
        subList.addEventListener("scroll", HdncHandler.subListScroll);
      });
    } else if (screenType === 1) {
      hdnc.addEventListener("scroll", HdncHandler.scroll);
      const subLists = list.querySelectorAll(".sub-list");
      subLists.forEach(subList => {
        subList.removeEventListener("scroll", HdncHandler.subListScroll);
      });
    }
    /*  */
    if (previousScreenType === 3 && !isTouchDevice) {
      const items = list.querySelectorAll(".item");
      items.forEach(item => {
        item.removeEventListener("mouseenter", HdncHandler.itemHover);
        item.removeEventListener("mouseleave", HdncHandler.itemHover);
      });
      const itemContainers = list.querySelectorAll(".item-container");
      itemContainers.forEach(container => {
        container.addEventListener("click", HdncHandler.itemContainerClick);
      });
    } else if (screenType === 3 && !isTouchDevice) {
      const itemContainers = list.querySelectorAll(".item-container");
      itemContainers.forEach(container => {
        container.removeEventListener("click", HdncHandler.itemContainerClick);
      });
      const items = list.querySelectorAll(".item");
      items.forEach(item => {
        item.addEventListener("mouseenter", HdncHandler.itemHover);
        item.addEventListener("mouseleave", HdncHandler.itemHover);
      });
    }
  }
}
/* ================================================== */
class HdncHandler {
  static itemHover(event) {
    /* Only DstNtd */
    const eventType = event.type;
    const item = event.currentTarget;
    let shouldOpen = false;
    /*  */
    if (eventType === "mouseenter") {
      shouldOpen = true;
    }
    if (!shouldOpen) {
      HdncLogic.subListScrollLogic(item, false);
    }
    HdncTool.updateSubListHeight(item, shouldOpen);
    /*  */
    item.isOpen = shouldOpen;
  }
  /* -------------------------------------------------- */
  static itemContainerClick(event) {
    /* Only !DstNtd */
    const itemContainer = event.currentTarget;
    const item = itemContainer.closest(".item");
    /*  */
    const itemText = itemContainer.querySelector(".item-text");
    const itemRr = itemContainer.querySelector(".item-rr");
    const itemBr = itemContainer.querySelector(".item-br");
    /*  */
    const subList = item.querySelector(".sub-list");
    /*  */
    const openClass = "open";
    let shouldOpen = false;
    let clType = "remove";
    let isTouchDevice = CoreConfig.isTouchDevice;
    let screenType = CoreConfig.previousScreenType;
    if (!item.isOpen) {
      shouldOpen = true;
      clType = "add";
      screenType = CoreConfig.screenType;
    }
    /*  */
    if (shouldOpen) {
      if (screenType === 2) {
        HdncLogic.itemCloseAll();
        const htbcSnr = document.querySelector(".htbc-snr");
        if (htbcSnr.isActive) {
          HtbcAccessor.snrClick();
        }
      } else if (screenType === 3) {
        if (isTouchDevice) {
          HdncLogic.itemCloseAll();
        }
      }
    } else if (!shouldOpen) {
      if (CoreConfig.isTouchDevice) {
        HdncTool.timerSubItemContainer(item, true);
        const subItemBrs = item.querySelectorAll(".sub-item-br");
        subItemBrs.forEach(subItemBr => {
          subItemBr.style.width = "";
        });
      }
      if (screenType >= 2) {
        HdncLogic.subListScrollLogic(item, false);
      }
    }
    /*  */
    if (!CoreConfig.isTouchDevice) {
      HdncLogic.itemContainerSetHoverLock(item, shouldOpen);
    }
    /*  */
    HdncTool.updateSubListHeight(item, shouldOpen);
    /*  */
    item.classList[clType](openClass);
    itemText.classList[clType](openClass);
    itemRr.classList[clType](openClass);
    itemBr.classList[clType](openClass);
    subList.classList[clType](openClass);
    /*  */
    item.isOpen = shouldOpen;
  }
  /* -------------------------------------------------- */
  static subListTransitionEnd(event) {
    /* ForAll */
    const target = event.target;
    const subList = event.currentTarget;
    /*  */
    if (
      target === subList
      && event.propertyName === "height"
    ) {
      const item = subList.closest(".item");
      /*  */
      if (item.isOpen) {
        HdncLogic.subItemContainerTools(item);
        if (CoreConfig.isTouchDevice) {
          HdncTool.timerSubItemContainer(item);
        } else {
          const subItemContainers = item.querySelectorAll(".sub-item-container");
          subItemContainers.forEach(subItemContainer => {
            if (subItemContainer.isHover) {
              const subItemBr = subItemContainer.querySelector(".sub-item-br");
              subItemBr.style.width = `${subItemBr.width}px`;
              const hoverClass = "hover";
              const subItemRr = subItemContainer.querySelector(".sub-item-rr");
              subItemRr.classList.add(hoverClass);
            }
          });
        }
        HdncTool.updateChevronWrapperLeft(item);
        HdncTool.updateChevronBrWrapperTop(item);
        /*  */
        HdncLogic.subListScrollLogic(item, true);
      }
      /*  */
      HdncHandler.scroll();
    } else if (
      target === subList
      && event.propertyName === "max-height"
    ) {
      const item = subList.closest(".item");
      if (item.isOpen) {
        HdncTool.updateChevronBrWrapperTop(item);
        HdncLogic.subListScrollLogic(item, true);
      }
    }
  }
  /* -------------------------------------------------- */
  static subItemContainerHover(event) {
    /* ForNtd */
    const eventType = event.type;
    const subItemContainer = event.currentTarget;
    const subItemBr = subItemContainer.querySelector(".sub-item-br");
    const subItemRr = subItemContainer.querySelector(".sub-item-rr");
    const activeClass = "active";
    /*  */
    if (eventType === "mouseenter") {
      subItemBr.style.width = `${subItemBr.width}px`;
      subItemRr.classList.add(activeClass);
      subItemContainer.isHover = true;
    } else if (eventType === "mouseleave") {
      subItemBr.style.width = "";
      subItemRr.classList.remove(activeClass);
      subItemContainer.isHover = false;
    }
  }
  /* -------------------------------------------------- */
  static scroll() {
    /* ForMst */
    const hdnc = document.querySelector(".hdnc");
    const screenType = CoreConfig.screenType;
    if (screenType === 1) {
      const fogTr = hdnc.querySelector(".hdnc-fog-tr");
      const fogBr = hdnc.querySelector(".hdnc-fog-br");
      /*  */
      const innerHeight = window.innerHeight;
      const calcFogHeight = innerHeight / 10;
      const scrollTop = hdnc.scrollTop;
      const scrollHeight = hdnc.scrollHeight;
      const clientHeight = hdnc.clientHeight;
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
  /* -------------------------------------------------- */
  static subListScroll(event) {
    /* ForTdst */
    const subList = event.currentTarget;
    const item = subList.closest(".item");
    HdncLogic.subListScrollLogic(item, true);
  }
}
/* ================================================== */
class HdncLogic {
  static itemCloseAll() {
    const items = document.querySelectorAll(".hdnc-list .item");
    items.forEach(item => {
      if (item.isOpen) {
        const itemContainer = item.querySelector(".item-container");
        const modifyEvent = { currentTarget: itemContainer };
        HdncHandler.itemContainerClick(modifyEvent);
      }
    });
  }
  /* -------------------------------------------------- */
  static itemContainerSetHoverLock(item, shouldLock) {
    const itemText = item.querySelector(".item-text");
    const itemRr = item.querySelector(".item-rr");
    const itemBr = item.querySelector(".item-br");
    /*  */
    const hoverLockClass = "hover-lock";
    let clAction = "remove";
    if (shouldLock) {
      clAction = "add";
    }
    /*  */
    itemText.classList[clAction](hoverLockClass);
    itemRr.classList[clAction](hoverLockClass);
    itemBr.classList[clAction](hoverLockClass);
  }
  /* -------------------------------------------------- */
  static subItemContainerTools(item) {
    HdncTool.updateSubItemRrLeft(item);
    HdncTool.updateSubItemBrLeft(item);
    HdncTool.calcSubItemBrWidth(item);
  }
  /* -------------------------------------------------- */
  static subListScrollLogic(item, shouldAction) {
    /* Only Tdst For Chevron */
    const subList = item.querySelector(".sub-list");
    const chevronTrWrapper = item.querySelector(".item-chevron-tr-wrapper");
    const chevronBrWrapper = item.querySelector(".item-chevron-br-wrapper");
    const activeClass = "active";
    if (!shouldAction) {
      chevronTrWrapper.classList.remove(activeClass);
      chevronBrWrapper.classList.remove(activeClass);
      return;
    }
    /*  */
    const buffer = 8;
    const scrollTop = subList.scrollTop;
    const scrollHeight = subList.scrollHeight;
    const clientHeight = subList.clientHeight;
    const calcScrollPosition = scrollTop + clientHeight + buffer;
    /*  */
    let clTrAction = "remove";
    let clBrAction = "remove";
    /*  */
    if (shouldAction) {
      if (scrollTop > buffer) {
        clTrAction = "add";
      }
      if (calcScrollPosition < scrollHeight) {
        clBrAction = "add";
      }
    }
    /*  */
    chevronTrWrapper.classList[clTrAction](activeClass);
    chevronBrWrapper.classList[clBrAction](activeClass);
  }
}
/* ================================================== */
export { HdncAccessor, HdncController };
/* ================================================== */
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
/* ========================= ;FACOOYA; ========================= */