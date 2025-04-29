/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  BodyConfig
} from "../../fwc-hub.js";
/* ================================================== */
class HdncToolCalc {
  static calcSubItemBrWidth(item) {
    const subItemTexts = item.querySelectorAll(".hdnc-sub-item-text");
    const subItemBrs = item.querySelectorAll(".hdnc-sub-item-br");
    const bufferWidth = 24;
    /*  */
    for (let i = 0; i < subItemBrs.length; i++) {
      const textWidth = subItemTexts[i].clientWidth;
      let calcWidth = textWidth + bufferWidth;
      subItemBrs[i].width = calcWidth;
    }
  }
}
/* ================================================== */
class HdncToolUpdate {
  static updateChevronWrapperLeft(item) {
    const itemIndex = item.index;
    const screenType = BodyConfig.screenType;
    if (screenType === 1) { return; }
    /*  */
    const subList = item.querySelector(".hdnc-sub-list");
    const chevronTrWrapper = item.querySelector(".hdnc-chevron-tr-wrapper");
    const chevronBrWrapper = item.querySelector(".hdnc-chevron-br-wrapper");
    /*  */
    const itemWidth = item.offsetWidth;
    const subListWidth = subList.offsetWidth;
    const chevronWrapperWidth = chevronTrWrapper.offsetWidth;
    let calcLeft = 0;
    if (screenType === 2) {
      if (itemIndex === 0) {
        calcLeft = (subListWidth - chevronWrapperWidth) / 2;
      } else if (itemIndex === 3) {
        const deltaWidth = subListWidth - itemWidth;
        calcLeft = (subListWidth - chevronWrapperWidth) / 2 - deltaWidth;
      } else {
        calcLeft = (itemWidth - chevronWrapperWidth) / 2;
      }
    } else if (screenType === 3) {
      if (itemIndex === 3) {
        if (!item.isDefaultTransform) {
          const deltaWidth = subListWidth - itemWidth;
          calcLeft = (subListWidth - chevronWrapperWidth) / 2 - deltaWidth;
        } else {
          calcLeft = (itemWidth - chevronWrapperWidth) / 2;
        }
      } else {
        calcLeft = (itemWidth - chevronWrapperWidth) / 2;
      }
    }
    /*  */
    chevronTrWrapper.style.left = `${calcLeft}px`;
    chevronBrWrapper.style.left = `${calcLeft}px`;
  }
  /* ============================== */
  static updateChevronBrWrapperTop(item) {
    const subList = item.querySelector(".hdnc-sub-list");
    const chevronBrWrapper = item.querySelector(".hdnc-chevron-br-wrapper");
    /*  */
    const defaultTop = 72;
    const buffer = 16;
    const subListHeight = subList.clientHeight;
    const chevronBrWrapperHeight = chevronBrWrapper.offsetHeight;
    let calcTop = defaultTop + subListHeight;
    calcTop -= chevronBrWrapperHeight + buffer;
    /*  */
    chevronBrWrapper.style.top = `${calcTop}px`;
  }
  /* ============================== */
  static updateSubListMaxHeight() {
    const hdnc = document.querySelector(".hdnc");
    const subLists = hdnc.querySelectorAll(".hdnc-sub-list");
    const screenType = BodyConfig.screenType;
    /*  */
    if (screenType === 1) {
      subLists.forEach(subList => {
        subList.style.maxHeight = "";
      });
    } else {
      const htbc = document.querySelector(".htbc");
      const buffer = 16;
      const htbcHeight = htbc.clientHeight;
      let calcMaxHeight = window.innerHeight - (htbcHeight + buffer);
      subLists.forEach(subList => {
        subList.style.maxHeight = `${calcMaxHeight}px`;
      });
    }
  }
  /* ============================== */
  static updateSubListHeight(item, shouldOpen) {
    const subList = item.querySelector(".hdnc-sub-list");
    if (shouldOpen) {
      if (subList.height == null) {
        const subItems = subList.querySelectorAll(".hdnc-sub-item");
        subList.height = subItems.length * 64;
      }
      subList.style.height = `${subList.height}px`;
    } else {
      subList.style.height = "";
    }
  }
  /* ============================== */
  static updateSubListTransformForLast(item, shouldDefault) {
    /* ForDst */
    const subList = item.querySelector(".hdnc-sub-list");
    const itemIndex = item.index;
    if (itemIndex !== 3) {
      return;
    } else if (shouldDefault) {
      subList.style.transform = `translateX(0px)`;
      item.isDefaultTransform = true;
      HdncToolUpdate.updateChevronWrapperLeft(item);
      return;
    }
    /*  */
    /* Define */
    const buffer = 16;
    const hsncWidth = 320;
    const subListWidth = 320;
    /* hsncLeft */
    const html = document.documentElement;
    const htmlWidth = html.offsetWidth;
    const hsncLeft = htmlWidth - (hsncWidth + buffer);
    /* subListRight */
    const itemWidth = item.offsetWidth; /* !!!!! */
    const deltaWidth = subListWidth - itemWidth;
    const itemRect = item.getBoundingClientRect();
    const subListRight = itemRect.right + (deltaWidth / 2);
    /* Default */
    if (hsncLeft < subListRight) {
      const calcLeft = -deltaWidth / 2;
      subList.style.transform = `translateX(${calcLeft}px)`;
      item.isDefaultTransform = false;
    } else {
      subList.style.transform = `translateX(0px)`;
      item.isDefaultTransform = true;
    }
    /*  */
    HdncToolUpdate.updateChevronWrapperLeft(item);
  }
  /* ============================== */
  static updateSubItemBrLeft(item) {
    const subItemContainers = item.querySelectorAll(".hdnc-sub-item-container");
    const subItemTexts = item.querySelectorAll(".hdnc-sub-item-text");
    const subItemBrs = item.querySelectorAll(".hdnc-sub-item-br");
    const bufferWidth = 24;
    /*  */
    for (let i = 0; i < subItemBrs.length; i++) {
      const containerWidth = subItemContainers[i].clientWidth;
      const textWidth = subItemTexts[i].clientWidth;
      let calcLeft = (containerWidth - (textWidth + bufferWidth)) / 2;
      subItemBrs[i].left = calcLeft;
      subItemBrs[i].style.left = `${subItemBrs[i].left}px`;
    }
  }
  /* ============================== */
  static updateSubItemRrLeft(item) {
    const subItemContainers = item.querySelectorAll(".hdnc-sub-item-container");
    const subItemTexts = item.querySelectorAll(".hdnc-sub-item-text");
    const subItemRrs = item.querySelectorAll(".hdnc-sub-item-rr");
    /*  */
    for (let i = 0; i < subItemRrs.length; i++) {
      const containerWidth = subItemContainers[i].clientWidth;
      const textWidth = subItemTexts[i].clientWidth;
      let calcLeft = (containerWidth + textWidth) / 2;
      subItemRrs[i].left = calcLeft;
      subItemRrs[i].style.left = `${subItemRrs[i].left}px`;
    }
  }
}
/* ================================================== */
class HdncToolTimer {
  static timerSubItemContainer(item, shouldReset) {
    const subItemContainers = item.querySelectorAll(".hdnc-sub-item-container");
    if (shouldReset) {
      subItemContainers.forEach(subContainer => {
        clearTimeout(subContainer.timerId);
        HdncToolTimer.timeoutSubItemContainer(subContainer, shouldReset);
      });
    } else {
      for (let i = 0; i < subItemContainers.length; i++) {
        subItemContainers[i].timerId = setTimeout(
          HdncToolTimer.timeoutSubItemContainer,
          i * 150,
          subItemContainers[i],
          shouldReset
        );
      }
    }
  }
  /* ------------------------------ */
  static timeoutSubItemContainer(subContainer, shouldReset) {
    const subItemText = subContainer.querySelector(".hdnc-sub-item-text");
    const subItemRr = subContainer.querySelector(".hdnc-sub-item-rr");
    const subitemBr = subContainer.querySelector(".hdnc-sub-item-br");
    /*  */
    const clData = "cl-hdnc-timeout-sub-item-container";
    let clAction = "remove";
    let setSubItemBrWidth = "";
    if (!shouldReset) {
      clAction = "add";
      setSubItemBrWidth = `${subitemBr.width}px`;
    }
    subitemBr.style.width = setSubItemBrWidth;
    /*  */
    subItemText.classList[clAction](clData);
    subItemRr.classList[clAction](clData);
  }
}
/* ================================================== */
class HdncTool {
  static calcSubItemBrWidth(item) {
    HdncToolCalc.calcSubItemBrWidth(item);
  }
  /* ------------------------------ */
  static updateChevronWrapperLeft(item) {
    HdncToolUpdate.updateChevronWrapperLeft(item);
  }
  static updateChevronBrWrapperTop(item) {
    HdncToolUpdate.updateChevronBrWrapperTop(item);
  }
  /* --------------- */
  static updateSubListMaxHeight() {
    HdncToolUpdate.updateSubListMaxHeight();
  }
  static updateSubListHeight(item, shouldOpen) {
    HdncToolUpdate.updateSubListHeight(item, shouldOpen);
  }
  static updateSubListTransformForLast(item, shouldDefault) {
    HdncToolUpdate.updateSubListTransformForLast(item, shouldDefault);
  }
  /* --------------- */
  static updateSubItemBrLeft(item) {
    HdncToolUpdate.updateSubItemBrLeft(item);
  }
  static updateSubItemRrLeft(item) {
    HdncToolUpdate.updateSubItemRrLeft(item);
  }
  /* ------------------------------ */
  static timerSubItemContainer(item, shouldReset) {
    HdncToolTimer.timerSubItemContainer(item, shouldReset);
  }
}
/* ================================================== */
export { HdncTool };
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */