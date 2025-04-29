/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import { HdncConfig } from "./hdnc-config.js";
import { HdncTool } from "./hdnc-tool.js";
import {
  BodyConfig,
  HtbcAccessor
} from "../../fwc-hub.js";
/* ================================================== */
class HdncAccessor {
  static itemCloseAll() {
    HdncLogic.itemCloseAll();
  }
  static updateSubListTransformForLast(item, shouldDefault) {
    HdncTool.updateSubListTransformForLast(item, shouldDefault);
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
    HdncConfig.generate();
    const items = document.querySelectorAll(".hdnc-item");
    for (let i = 0; i < items.length; i++) {
      items[i].index = i;
      items[i].isOpen = false;
      const subItems = items[i].querySelectorAll(".hdnc-sub-item");
      const subItemContainers = items[i].querySelectorAll(".hdnc-sub-item-container");
      for (let j = 0; j < subItems.length; j++) {
        subItems[j].index = j;
        subItemContainers.isHover = false;
      }
      if (i === 3) {
        items[i].isDefaultTransform = true;
      }
    }
  }
  /* ------------------------------ */
  static load() {
    HdncManager.loadEvent();
    HdncTool.updateSubListMaxHeight();
  }
  /* ------------------------------ */
  static resizeDisplay() {
    if (BodyConfig.previousScreenType >= 2) {
      HdncLogic.itemCloseAll();
    }
    HdncManager.resizeEvent();
    HdncTool.updateSubListMaxHeight();
    if (BodyConfig.previousScreenType === 3) {
      const items = document.querySelectorAll(".hdnc-item");
      items.forEach(item => {
        if (item.index === 3 && !item.isDefaultTransform) {
          HdncTool.updateSubListTransformForLast(item, true);
        }
      });
    }
  }
  /* ------------------------------ */
  static resizeSensor() {
    const items = document.querySelectorAll(".hdnc-item");
    items.forEach(item => {
      if (item.isOpen) {
        HdncLogic.subItemContainerTools(item);
        if (BodyConfig.isTouchDevice) {
          const subItemBrs = item.querySelectorAll(".hdnc-sub-item-br");
          subItemBrs.forEach(subItemBr => {
            subItemBr.style.width = `${subItemBr.width}px`;
          });
        }
      }
    });
    HdncHandler.scroll();
    HdncTool.updateSubListMaxHeight();
  }
  /* ============================== */
  static loadEvent() {
    const hdnc = document.querySelector(".hdnc");
    const screenType = BodyConfig.screenType;
    const isTouchDevice = BodyConfig.isTouchDevice;
    /*  */
    const subLists = document.querySelectorAll(".hdnc-sub-list");
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
      const items = hdnc.querySelectorAll(".hdnc-item");
      items.forEach(item => {
        item.addEventListener("mouseenter", HdncHandler.itemHover);
        item.addEventListener("mouseleave", HdncHandler.itemHover);
      });
    } else {
      const itemContainers = hdnc.querySelectorAll(".hdnc-item-container");
      itemContainers.forEach(container => {
        container.addEventListener("click", HdncHandler.itemContainerClick);
      });
    }
    /*  */
    if (!isTouchDevice) {
      const subItemContainers = hdnc.querySelectorAll(".hdnc-sub-item-container");
      subItemContainers.forEach(subContainer => {
        subContainer.addEventListener("mouseenter", HdncHandler.subItemContainerHover);
        subContainer.addEventListener("mouseleave", HdncHandler.subItemContainerHover);
      });
    }
    /*  */
    /* if (BodyConfig.screenType === 1) {
      const hdnc = document.querySelector(".hdnc");
      hdnc.addEventListener("scroll", HdncHandler.scroll);
      /*  
      const itemContainers = document.querySelectorAll(".hdnc-item-container");
      itemContainers.forEach(container => {
        container.addEventListener("click", HdncHandler.itemContainerClick);
      });
      const subLists = document.querySelectorAll(".hdnc-sub-list");
      subLists.forEach(subList => {
        subList.addEventListener("transitionend", HdncHandler.subListTransitionEnd);
      });
      /*  
      if (!BodyConfig.isTouchDevice) {
        const subItemContainers = document.querySelectorAll(".hdnc-sub-item-container");
        subItemContainers.forEach(subContainer => {
          subContainer.addEventListener("mouseenter", HdncHandler.subItemContainerHover);
          subContainer.addEventListener("mouseleave", HdncHandler.subItemContainerHover);
        });
      }
    } else if (BodyConfig.screenType === 2) {
      const itemContainers = document.querySelectorAll(".hdnc-item-container");
      itemContainers.forEach(container => {
        container.addEventListener("click", HdncHandler.itemContainerClick);
      });
      const subLists = document.querySelectorAll(".hdnc-sub-list");
      subLists.forEach(subList => {
        subList.addEventListener("transitionend", HdncHandler.subListTransitionEnd);
      });
      /*  
      if (!BodyConfig.isTouchDevice) {
        const subItemContainers = document.querySelectorAll(".hdnc-sub-item-container");
        subItemContainers.forEach(subContainer => {
          subContainer.addEventListener("mouseenter", HdncHandler.subItemContainerHover);
          subContainer.addEventListener("mouseleave", HdncHandler.subItemContainerHover);
        });
      }
    } else if (BodyConfig.screenType === 3) {
      const subLists = document.querySelectorAll(".hdnc-sub-list");
      subLists.forEach(subList => {
        subList.addEventListener("transitionend", HdncHandler.subListTransitionEnd);
      });
      /*  
      if (!BodyConfig.isTouchDevice) {
        const items = document.querySelectorAll(".hdnc-item");
        items.forEach(item => {
          item.addEventListener("mouseenter", HdncHandler.itemHover);
          item.addEventListener("mouseleave", HdncHandler.itemHover);
        });
        const subItemContainers = document.querySelectorAll(".hdnc-sub-item-container");
        subItemContainers.forEach(subContainer => {
          subContainer.addEventListener("mouseenter", HdncHandler.subItemContainerHover);
          subContainer.addEventListener("mouseleave", HdncHandler.subItemContainerHover);
        });
      } else {
        const itemContainers = document.querySelectorAll(".hdnc-item-container");
        itemContainers.forEach(container => {
          container.addEventListener("click", HdncHandler.itemContainerClick);
        });
      }
    } */
  }
  static resizeEvent() {
    const hdnc = document.querySelector(".hdnc");
    const screenType = BodyConfig.screenType;
    const previousScreenType = BodyConfig.previousScreenType;
    const isTouchDevice = BodyConfig.isTouchDevice;
    /*  */
    if (previousScreenType === 1) {
      hdnc.removeEventListener("scroll", HdncHandler.scroll);
      const subLists = hdnc.querySelectorAll(".hdnc-sub-list");
      subLists.forEach(subList => {
        subList.addEventListener("scroll", HdncHandler.subListScroll);
      });
    } else if (screenType === 1) {
      hdnc.addEventListener("scroll", HdncHandler.scroll);
      const subLists = hdnc.querySelectorAll(".hdnc-sub-list");
      subLists.forEach(subList => {
        subList.removeEventListener("scroll", HdncHandler.subListScroll);
      });
    }
    /*  */
    if (previousScreenType === 3 && !isTouchDevice) {
      const items = hdnc.querySelectorAll(".hdnc-item");
      items.forEach(item => {
        item.removeEventListener("mouseenter", HdncHandler.itemHover);
        item.removeEventListener("mouseleave", HdncHandler.itemHover);
      });
      const itemContainers = hdnc.querySelectorAll(".hdnc-item-container");
      itemContainers.forEach(container => {
        container.addEventListener("click", HdncHandler.itemContainerClick);
      });
    } else if (screenType === 3 && !isTouchDevice) {
      const itemContainers = hdnc.querySelectorAll(".hdnc-item-container");
      itemContainers.forEach(container => {
        container.removeEventListener("click", HdncHandler.itemContainerClick);
      });
      const items = hdnc.querySelectorAll(".hdnc-item");
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
    /* ForDstNtd */
    const eventType = event.type;
    const item = event.currentTarget;
    let shouldOpen = false;
    /*  */
    if (eventType === "mouseenter") {
      shouldOpen = true;
      /*  */
      if (item.index === 3) {
        const htbcSnrContainer = document.querySelector(".htbc-snr-container");
        HdncTool.updateSubListTransformForLast(item, !htbcSnrContainer.isEnabled);
      }
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
    /* !ForDstNtd */
    const itemContainer = event.currentTarget;
    const item = itemContainer.closest(".hdnc-item");
    /*  */
    const itemText = itemContainer.querySelector(".hdnc-item-text");
    const itemRr = itemContainer.querySelector(".hdnc-item-rr");
    const itemBr = itemContainer.querySelector(".hdnc-item-br");
    /*  */
    const subList = item.querySelector(".hdnc-sub-list");
    /*  */
    const clDataOpen = "cl-hdnc-item-container-click";
    let shouldOpen = false;
    let clType = "remove";
    let isTouchDevice = BodyConfig.isTouchDevice;
    let screenType = BodyConfig.previousScreenType;
    if (!item.isOpen) {
      shouldOpen = true;
      clType = "add";
      screenType = BodyConfig.screenType;
    }
    /*  */
    /* HdncLogic.itemContainerClickCommon();
    HdncLogic.itemContainerClickForMst(); */
    /*  */
    if (shouldOpen) {
      if (screenType === 2) {
        HdncLogic.itemCloseAll();
        const htbcSnrContainer = document.querySelector(".htbc-snr-container");
        if (htbcSnrContainer.isEnabled) {
          HtbcAccessor.snrContainerClick();
        }
      } else if (screenType === 3) {
        if (isTouchDevice) {
          HdncLogic.itemCloseAll();
        }
        const htbcSnrContainer = document.querySelector(".htbc-snr-container");
        HdncTool.updateSubListTransformForLast(item, !htbcSnrContainer.isEnabled);
      }
    } else if (!shouldOpen) {
      if (BodyConfig.isTouchDevice) {
        HdncTool.timerSubItemContainer(item, true);
        const subItemBrs = item.querySelectorAll(".hdnc-sub-item-br");
        subItemBrs.forEach(subItemBr => {
          subItemBr.style.width = "";
        });
      }
      if (screenType >= 2) {
        HdncLogic.subListScrollLogic(item, false);
      }
    }
    /*  */
    if (!BodyConfig.isTouchDevice) {
      HdncLogic.itemContainerSetHoverLock(item, shouldOpen);
    }
    /*  */
    HdncTool.updateSubListHeight(item, shouldOpen);
    /*  */
    item.classList[clType](clDataOpen);
    itemText.classList[clType](clDataOpen);
    itemRr.classList[clType](clDataOpen);
    itemBr.classList[clType](clDataOpen);
    subList.classList[clType](clDataOpen);
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
      /* const clData = "cl-hdnc-sub-item-rr-hover"; */
      const item = subList.closest(".hdnc-item");
      /*  */
      if (item.isOpen) {
        HdncLogic.subItemContainerTools(item);
        if (BodyConfig.isTouchDevice) {
          HdncTool.timerSubItemContainer(item);
        } else {
          const subItemContainers = item.querySelectorAll(".hdnc-sub-item-container");
          subItemContainers.forEach(subItemContainer => {
            if (subItemContainer.isHover) {
              const subItemBr = subItemContainer.querySelector(".hdnc-sub-item-br");
              subItemBr.style.width = `${subItemBr.width}px`;
              const clData = "cl-hdnc-sub-item-rr-hover";
              const subItemRr = subItemContainer.querySelector(".hdnc-sub-item-rr");
              subItemRr.classList.add(clData);
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
    }
  }
  static subItemContainerHover(event) {
    /* ForNtd */
    const eventType = event.type;
    const subItemContainer = event.currentTarget;
    /* const item = subItemContainer.closest(".hdnc-item"); */
    const subItem = subItemContainer.closest(".hdnc-sub-item");
    const subItemBr = subItem.querySelector(".hdnc-sub-item-br");
    const subItemRr = subItem.querySelector(".hdnc-sub-item-rr");
    const clData = "cl-hdnc-sub-item-rr-hover";
    /*  */
    if (eventType === "mouseenter") {
      subItemBr.style.width = `${subItemBr.width}px`;
      subItemRr.classList.add(clData);
      subItemContainer.isHover = true;
    } else if (eventType === "mouseleave") {
      subItemBr.style.width = "";
      subItemRr.classList.remove(clData);
      subItemContainer.isHover = false;
    }
  }
  static scroll() {
    /* ForMst */
    const hdnc = document.querySelector(".hdnc");
    const screenType = BodyConfig.screenType;
    if (screenType === 1) {
      const fogTr = document.querySelector(".hdnc-fog-tr");
      const fogBr = document.querySelector(".hdnc-fog-br");
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
  static subListScroll(event) {
    /* ForTdst */
    const subList = event.currentTarget;
    const item = subList.closest(".hdnc-item");
    HdncLogic.subListScrollLogic(item, true);
  }
}
class HdncLogic {
  static itemCloseAll() {
    const items =document.querySelectorAll(".hdnc-item");
    items.forEach(item => {
      if (item.isOpen) {
        const itemContainer = item.querySelector(".hdnc-item-container");
        const modifyEvent = { currentTarget: itemContainer };
        HdncHandler.itemContainerClick(modifyEvent);
      }
    });
  }
  static itemContainerSetHoverLock(item, shouldLock) {
    const itemText = item.querySelector(".hdnc-item-text");
    const itemRr = item.querySelector(".hdnc-item-rr");
    const itemBr = item.querySelector(".hdnc-item-br");
    /*  */
    const clDataHover = "cl-hdnc-item-container-set-hover-lock";
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
    HdncTool.updateSubItemRrLeft(item);
    HdncTool.updateSubItemBrLeft(item);
    HdncTool.calcSubItemBrWidth(item);
  }
  /* static lastSubListRight(item) {
    const subList = item.querySelector(".hdnc-sub-list");
    const clData = "cl-hdnc-sub-list-last-right";
    const htbcSnrContainer = document.querySelector(".htbc-snr-container");
    const itemIndex = item.index;
    if (itemIndex !== 3 || !htbcSnrContainer.isEnabled) {
      subList.classList.remove(clData);
      return;
    }
    /*  */
    /* Define 
    const buffer = 16;
    const hsncWidth = 320;
    const subListWidth = 320;
    /* hsncLeft 
    const html = document.documentElement;
    const htmlWidth = html.offsetWidth;
    const hsncLeft = htmlWidth - (hsncWidth + buffer);
    /* subListRight 
    const itemWidth = item.offsetWidth;
    const deltaWidth = subListWidth - itemWidth;
    const itemRect = item.getBoundingClientRect();
    const subListRight = itemRect.right + (deltaWidth / 2);
    /*  
    let clAction = "remove";
    if (hsncLeft < subListRight) {
      clAction = "add";
    }
    subList.classList[clAction](clData);
  } */
  static subListScrollLogic(item, shouldAction) {
    const subList = item.querySelector(".hdnc-sub-list");
    const chevronTrWrapper = item.querySelector(".hdnc-chevron-tr-wrapper");
    const chevronBrWrapper = item.querySelector(".hdnc-chevron-br-wrapper");
    const clData = "cl-hdnc-sub-list-scroll-chevron-enabled";
    if (!shouldAction) {
      chevronTrWrapper.classList.remove(clData);
      chevronBrWrapper.classList.remove(clData);
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
    chevronTrWrapper.classList[clTrAction](clData);
    chevronBrWrapper.classList[clBrAction](clData);
  }
}
/* ================================================== */
export {
  HdncAccessor,
  HdncController
};
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */