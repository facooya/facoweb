/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* ================================================== */
import { CoreConfig } from "../../core/core-config.js";
/* ================================================== */
class HdncToolChevron {
  static updateChevronWrapperLeft(item) {
    /* Only Tdst && height > max-height */
    /* HMI */
    const screenType = CoreConfig.screenType;
    if (screenType === 1) { return; }
    /*  */
    const itemIndex = item.index;
    const subList = item.querySelector(".sub-list");
    const chevronTrWrapper = item.querySelector(".item-chevron-tr-wrapper");
    const chevronBrWrapper = item.querySelector(".item-chevron-br-wrapper");
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
        /* if (!item.isDefaultTransform) {
          const deltaWidth = subListWidth - itemWidth;
          calcLeft = (subListWidth - chevronWrapperWidth) / 2 - deltaWidth;
        } else {
          calcLeft = (itemWidth - chevronWrapperWidth) / 2;
        } */
        if (subList.classList.contains("align-x-right")) {
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
  /* ================================================== */
  static updateChevronWrapperLeft_delete(item) {
    /* Only Tdst && height > max-height */
    const screenType = CoreConfig.screenType;
    if (screenType === 1) { return; }
    /*  */
    const subList = item.querySelector(".sub-list");
    const chevronTrWrapper = item.querySelector(".item-chevron-tr-wrapper");
    const chevronBrWrapper = item.querySelector(".item-chevron-br-wrapper");
    /*  */
    const subListRect = subList.getBoundingClientRect();
    /* const subListW = subList.offsetWidth; */
    const subListX = subListRect.x;
    const chevronWrapperW = chevronTrWrapper.offsetWidth;
    /*  */
    let calcL = (subListX - chevronWrapperW) / 2;

    chevronTrWrapper.style.left = `${calcL}px`;
    chevronBrWrapper.style.left = `${calcL}px`;
  }
  /* ================================================== */
  static updateChevronBrWrapperTop(item) {
    /* Only Tdst && height > max-height */
    /* HMI */
    const screenType = CoreConfig.screenType;
    if (screenType === 1) { return; }
    /*  */
    const subList = item.querySelector(".sub-list");
    const chevronBrWrapper = item.querySelector(".item-chevron-br-wrapper");
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
}
/* ================================================== */
class HdncToolSubList {
  static updateSubListMaxHeight() {
    const hdnc = document.querySelector(".hdnc");
    const subLists = hdnc.querySelectorAll(".sub-list");
    const screenType = CoreConfig.screenType;
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
  /* ================================================== */
  static updateSubListHeight(item, shouldOpen) {
    const subList = item.querySelector(".sub-list");
    if (shouldOpen) {
      if (subList.height == null) {
        const subItems = subList.querySelectorAll(".sub-item");
        subList.height = subItems.length * 64;
      }
      subList.style.height = `${subList.height}px`;
    } else {
      subList.style.height = "";
    }
  }
  /* ================================================== */
  static updateSubListTransform_old(item) {
    /* Only Tdst */
    const screenType = CoreConfig.screenType;
    const subList = item.querySelector(".sub-list");
    const itemIndex = item.index;
    /* Return */
    if (screenType === 1) { return; }
    else if (screenType === 3 && itemIndex === 3) {
      /* AlignX Left */
      const htbcSnr = document.querySelector(".htbc-snr");
      if (htbcSnr.isActive) {
        HdncToolSubList.updateSubListTransformOnlyDstLast_old(item, subList);
        return;
      }
    }
    /*  */
    /* if (shouldDefault) {
      subList.style.transform = `translateX(0)`;
      item.isDefaultTransform = true;
      HdncTool.updateChevronWrapperLeft(item);
      return;
    } */
    /* AlignX Center */
    const subListW = 320;
    const itemW = item.offsetWidth;
    const deltaW = subListW - itemW;
    const calcL = -deltaW / 2;
    subList.style.transform = `translateX(${calcL}px)`;
    HdncTool.updateChevronWrapperLeft(item);

    /* Define */
    /* const buffer = 16;
    const hsncWidth = 320;
    const subListWidth = 320; */
    /* hsncLeft */
    /* const html = document.documentElement;
    const htmlWidth = html.offsetWidth;
    const hsncLeft = htmlWidth - (hsncWidth + buffer); */
    /* subListRight */
    /* const itemWidth = item.offsetWidth;
    const deltaWidth = subListWidth - itemWidth;
    const itemRect = item.getBoundingClientRect();
    const subListRight = itemRect.right + (deltaWidth / 2); */
    /* Default */
    /* if (hsncLeft < subListRight) {
      const calcLeft = -deltaWidth / 2;
      subList.style.transform = `translateX(${calcLeft}px)`;
      item.isDefaultTransform = false;
    } else {
      subList.style.transform = `translateX(0)`;
      item.isDefaultTransform = true;
    } */
    /*  */
    /* HdncTool.updateChevronWrapperLeft(item); */
  }
  /* -------------------------------------------------- */
  static updateSubListTransformOnlyDstLast_old(item, subList) {
    /* Only updateSubListTransform(!shouldDefault) */
    /* Define */
    const buffer = 16;
    const hsncW = 320;
    const subListW = 320;
    /* hsncLeft */
    const html = document.documentElement;
    const htmlW = html.offsetWidth;
    const hsncL = htmlW - (hsncW + buffer);
    /* subListRight */
    const itemW = item.offsetWidth;
    const deltaW = subListW - itemW;
    const itemRect = item.getBoundingClientRect();
    const subListR = itemRect.right + (deltaW / 2);
    /* Default */
    if (hsncL < subListR) {
      /* AlignX Left */
      const calcX = -deltaW;
      subList.style.transform = `translateX(${calcX}px)`;
      item.isDefaultTransform = false;
    } else {
      /* AlignX Center */
      const calcX = -deltaW / 2;
      subList.style.transform = `translateX(${calcX}px)`;
      item.isDefaultTransform = true;
    }
    HdncTool.updateChevronWrapperLeft(item);
  }
}
/* ================================================== */
class HdncToolSubItem {
  static timerSubItemContainer(item, shouldReset) {
    /* Only Td */
    const subItemContainers = item.querySelectorAll(".sub-item-container");
    if (shouldReset) {
      subItemContainers.forEach(subContainer => {
        clearTimeout(subContainer.timerId);
        HdncToolSubItem.timeoutSubItemContainer(subContainer, shouldReset);
      });
    } else {
      for (let i = 0; i < subItemContainers.length; i++) {
        subItemContainers[i].timerId = setTimeout(
          HdncToolSubItem.timeoutSubItemContainer,
          i * 150,
          subItemContainers[i],
          shouldReset
        );
      }
    }
  }
  /* -------------------------------------------------- */
  static timeoutSubItemContainer(subContainer, shouldReset) {
    /* Only timerSubItemContainer() */
    const subItemText = subContainer.querySelector(".sub-item-text");
    const subItemRr = subContainer.querySelector(".sub-item-rr");
    const subitemBr = subContainer.querySelector(".sub-item-br");
    /*  */
    const activeClass = "active";
    let clAction = "remove";
    let setSubItemBrWidth = "";
    if (!shouldReset) {
      clAction = "add";
      setSubItemBrWidth = `${subitemBr.width}px`;
    }
    subitemBr.style.width = setSubItemBrWidth;
    /*  */
    subItemText.classList[clAction](activeClass);
    subItemRr.classList[clAction](activeClass);
  }
  /* ================================================== */
  static updateSubItemBrLeft(item) {
    const subItemContainers = item.querySelectorAll(".sub-item-container");
    const subItemTexts = item.querySelectorAll(".sub-item-text");
    const subItemBrs = item.querySelectorAll(".sub-item-br");
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
  /* -------------------------------------------------- */
  static calcSubItemBrWidth(item) {
    const subItemTexts = item.querySelectorAll(".sub-item-text");
    const subItemBrs = item.querySelectorAll(".sub-item-br");
    const bufferWidth = 24;
    /*  */
    for (let i = 0; i < subItemBrs.length; i++) {
      const textWidth = subItemTexts[i].clientWidth;
      let calcWidth = textWidth + bufferWidth;
      subItemBrs[i].width = calcWidth;
    }
  }
  /* ================================================== */
  static updateSubItemRrLeft(item) {
    const subItemContainers = item.querySelectorAll(".sub-item-container");
    const subItemTexts = item.querySelectorAll(".sub-item-text");
    const subItemRrs = item.querySelectorAll(".sub-item-rr");
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
class HdncTool {
  static updateChevronWrapperLeft(item) {
    HdncToolChevron.updateChevronWrapperLeft(item);
  }
  static updateChevronBrWrapperTop(item) {
    HdncToolChevron.updateChevronBrWrapperTop(item);
  }
  /* ================================================== */
  static updateSubListHeight(item, shouldOpen) {
    HdncToolSubList.updateSubListHeight(item, shouldOpen);
  }
  static updateSubListMaxHeight() {
    HdncToolSubList.updateSubListMaxHeight();
  }
  /* static updateSubListTransform(item) {
    HdncToolSubList.updateSubListTransform(item);
  } */
  /* ================================================== */
  static timerSubItemContainer(item, shouldReset) {
    HdncToolSubItem.timerSubItemContainer(item, shouldReset);
  }
  /* -------------------------------------------------- */
  static updateSubItemBrLeft(item) {
    HdncToolSubItem.updateSubItemBrLeft(item);
  }
  static calcSubItemBrWidth(item) {
    HdncToolSubItem.calcSubItemBrWidth(item);
  }
  /* -------------------------------------------------- */
  static updateSubItemRrLeft(item) {
    HdncToolSubItem.updateSubItemRrLeft(item);
  }
}
/* ================================================== */
export { HdncTool };
/* ================================================== */
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
/* ========================= ;FACOOYA; ========================= */