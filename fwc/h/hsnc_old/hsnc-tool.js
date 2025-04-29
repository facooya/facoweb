/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import { DpmacConfig } from "../../dpm/dpm-hub.js";
/* ================================================== */
class HsncToolCalc {
  static calcSubItemBrWidth(item) {
    const subItemTexts = item.querySelectorAll(".hsnc-sub-item-text");
    const subItemBrs = item.querySelectorAll(".hsnc-sub-item-br");
    const bufferWidth = 24;
    /*  */
    for (let i = 0; i < subItemBrs.length; i++) {
      const textWidth = subItemTexts[i].clientWidth;
      let calcWidth = textWidth + bufferWidth;
      subItemBrs[i].width = calcWidth;
    }
  }
}
class HsncToolUpdate {
  /* ============================== */
  static updateSubItemBrLeft(item) {
    const subItemContainers = item.querySelectorAll(".hsnc-sub-item-container");
    const subItemTexts = item.querySelectorAll(".hsnc-sub-item-text");
    const subItemBrs = item.querySelectorAll(".hsnc-sub-item-br");
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
    const subItemContainers = item.querySelectorAll(".hsnc-sub-item-container");
    const subItemTexts = item.querySelectorAll(".hsnc-sub-item-text");
    const subItemRrs = item.querySelectorAll(".hsnc-sub-item-rr");
    /*  */
    for (let i = 0; i < subItemRrs.length; i++) {
      const containerWidth = subItemContainers[i].clientWidth;
      const textWidth = subItemTexts[i].clientWidth;
      let calcLeft = (containerWidth + textWidth) / 2;
      subItemRrs[i].left = calcLeft;
      subItemRrs[i].style.left = `${subItemRrs[i].left}px`;
    }
  }
  /* ============================== */
  static updateSubItemLrForToc() {
    const hsncItems = document.querySelectorAll(".hsnc-item");
    if (hsncItems[0].isToc) {
      const clDataEnabled = "cl-hsnc-set-sub-item-lr-enabled";
      const subItemLrs = hsncItems[0].querySelectorAll(".hsnc-sub-item-lr");
      const subItemTexts = hsncItems[0].querySelectorAll(".hsnc-sub-item-text");
      /*  */
      for (let i = 0; i < subItemLrs.length; i++) {
        subItemLrs[i].classList.remove(clDataEnabled);
        subItemTexts[i].classList.remove(clDataEnabled);
      }
      /*  */
      const tocIndex = DpmacConfig.tocIndex;
      subItemLrs[tocIndex].classList.add(clDataEnabled);
      subItemTexts[tocIndex].classList.add(clDataEnabled);
    }
  }
}
class HsncToolTimer {
  /* ============================== */
  static timerSubItemContainer(item, shouldReset) {
    const subItemContainers = item.querySelectorAll(".hsnc-sub-item-container");
    if (shouldReset) {
      subItemContainers.forEach(subContainer => {
        clearTimeout(subContainer.timerId);
        HsncToolTimer.timeoutSubItemContainer(subContainer, shouldReset);
      });
    } else {
      for (let i = 0; i < subItemContainers.length; i++) {
        subItemContainers[i].timerId = setTimeout(
          HsncToolTimer.timeoutSubItemContainer,
          i * 150,
          subItemContainers[i],
          shouldReset
        );
      }
    }
  }
  /* ------------------------------ */
  static timeoutSubItemContainer(subContainer, shouldReset) {
    const subItemText = subContainer.querySelector(".hsnc-sub-item-text");
    const subItemRr = subContainer.querySelector(".hsnc-sub-item-rr");
    const subItemBr = subContainer.querySelector(".hsnc-sub-item-br");
    /*  */
    const clData = "cl-hsnc-timeout-sub-item-container";
    let clAction = "remove";
    let setSubItemBrWidth = "";
    if (!shouldReset) {
      clAction = "add";
      setSubItemBrWidth = `${subItemBr.width}px`;
    }
    subItemBr.style.width = setSubItemBrWidth;
    /*  */
    subItemText.classList[clAction](clData);
    subItemRr.classList[clAction](clData);
  }
  /* ============================== */
}
class HsncTool {
  static calcSubItemBrWidth(item) {
    HsncToolCalc.calcSubItemBrWidth(item);
  }
  /* ============================== */
  static updateSubItemBrLeft(item) {
    HsncToolUpdate.updateSubItemBrLeft(item);
  }
  static updateSubItemRrLeft(item) {
    HsncToolUpdate.updateSubItemRrLeft(item);
  }
  static updateSubItemLrForToc() {
    HsncToolUpdate.updateSubItemLrForToc();
  }
  /* ============================== */
  /* ============================== */
  static timerSubItemContainer(item, shouldReset) {
    HsncToolTimer.timerSubItemContainer(item, shouldReset);
  }
  /* ============================== */
}
/*  */
export { HsncTool };
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
/* ========================= ;FACOOYA; ========================= */