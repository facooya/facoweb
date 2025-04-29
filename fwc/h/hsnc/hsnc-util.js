/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  DpmacConfig
} from "../../fwc-hub.js";
/*  */
class HsncUtilCalc {
  static calcSubItemBrWidth(item) {
    const subItemTexts = item.querySelectorAll(".hsnc-sub-item-text");
    const subItemBrs = item.querySelectorAll(".hsnc-sub-item-br");
    const bufferWidth = 24;
    /*  */
    subItemBrs.forEach((br, index) => {
      const textWidth = subItemTexts[index].clientWidth;
      let calcWidth = textWidth + bufferWidth;
      br.width = calcWidth;
    });
  }
}
class HsncUtilUpdate {
  /* ============================== */
  static updateSubItemBrLeft(item) {
    const subItemContainers = item.querySelectorAll(".hsnc-sub-item-container");
    const subItemTexts = item.querySelectorAll(".hsnc-sub-item-text");
    const subItemBrs = item.querySelectorAll(".hsnc-sub-item-br");
    const bufferWidth = 24;
    /*  */
    subItemBrs.forEach((br, index) => {
      const containerWidth = subItemContainers[index].clientWidth;
      const textWidth = subItemTexts[index].clientWidth;
      let calcLeft = (containerWidth - (textWidth + bufferWidth)) / 2;
      br.left = calcLeft;
      /*  */
      br.style.left = `${br.left}px`;
    });
  }
  /* ============================== */
  static updateSubItemRrLeft(item) {
    const subItemContainers = item.querySelectorAll(".hsnc-sub-item-container");
    const subItemTexts = item.querySelectorAll(".hsnc-sub-item-text");
    const subItemRrs = item.querySelectorAll(".hsnc-sub-item-rr");
    /*  */
    subItemRrs.forEach((rr, index) => {
      const containerWidth = subItemContainers[index].clientWidth;
      const textWidth = subItemTexts[index].clientWidth;
      let calcLeft = (containerWidth + textWidth) / 2;
      rr.left = calcLeft;
      /*  */
      rr.style.left = `${rr.left}px`;
    });
  }
  /* ============================== */
}
class HsncUtilSet {
  /* ============================== */
  static setHsncSubItemBrLeft(hsncItem) {
    const hsncSubItemBrs = hsncItem.querySelectorAll(".hsnc-sub-item-br");
    hsncSubItemBrs.forEach(br => {
      br.style.left = `${br.left}px`;
    });
  }
  /* ============================== */
  static setHsncSubItemBrWidth(hsncItem, index) {
    const hsncSubItemBrs = hsncItem.querySelectorAll(".hsnc-sub-item-br");
    if (index != null) {
      const br = hsncSubItemBrs[index];
      br.style.width = `${br.width}px`;
    } else {
      hsncSubItemBrs.forEach(br => {
        br.style.width = `${br.width}px`;
      });
    }
  }
  /* ============================== */
  static setSubItemLr() {
    const hsncItems = document.querySelectorAll(".hsnc-item");
    if (hsncItems[0].isToc) {
      const clDataEnabled = "cl-hsnc-set-sub-item-lr-enabled";
      const hsncSubItemLrs = hsncItems[0].querySelectorAll(".hsnc-sub-item-lr");
      const subItemTexts = hsncItems[0].querySelectorAll(".hsnc-sub-item-text");
      hsncSubItemLrs.forEach(lr => {
        lr.classList.remove(clDataEnabled);
      });
      subItemTexts.forEach(text => {
        text.classList.remove(clDataEnabled);
      });
      const currentIndex = DpmacConfig.currentIndex;
      hsncSubItemLrs[currentIndex].classList.add(clDataEnabled);
      subItemTexts[currentIndex].classList.add(clDataEnabled);
    }
  }
  /* ============================== */
}
class HsncUtilTimer {
  /* ============================== */
  static timerSubItemContainer(item, shouldReset) {
    const subItemContainers = item.querySelectorAll(".hsnc-sub-item-container");
    if (shouldReset) {
      subItemContainers.forEach(subContainer => {
        clearTimeout(subContainer.timerId);
        HsncUtilTimer.timeoutSubItemContainer(subContainer, shouldReset);
      });
    } else {
      subItemContainers.forEach((subContainer, index) => {
        subContainer.timerId = setTimeout(
          HsncUtilTimer.timeoutSubItemContainer,
          index * 150,
          subContainer,
          shouldReset
        );
      });
    }
  }
  /* ------------------------------ */
  static timeoutSubItemContainer(subContainer, shouldReset) {
    const subText = subContainer.querySelector(".hsnc-sub-item-text");
    const subRr = subContainer.querySelector(".hsnc-sub-item-rr");
    const subBr = subContainer.querySelector(".hsnc-sub-item-br");
    /*  */
    const clData = "cl-hsnc-timeout-sub-item-container";
    let clAction = "remove";
    let setSubBrWidth = "";
    if (!shouldReset) {
      clAction = "add";
      setSubBrWidth = `${subBr.width}px`;
    }
    subBr.style.width = setSubBrWidth;
    /*  */
    subText.classList[clAction](clData);
    subRr.classList[clAction](clData);
  }
  /* ============================== */
}
class HsncUtil {
  static calcSubItemBrWidth(item) {
    HsncUtilCalc.calcSubItemBrWidth(item);
  }
  /* ============================== */
  static updateSubItemBrLeft(item) {
    HsncUtilUpdate.updateSubItemBrLeft(item);
  }
  static updateSubItemRrLeft(item) {
    HsncUtilUpdate.updateSubItemRrLeft(item);
  }
  /* ============================== */
  static setHsncSubItemBrWidth(item, index) {
    HsncUtilSet.setHsncSubItemBrWidth(item, index);
  }
  static setSubItemLr() {
    HsncUtilSet.setSubItemLr();
  }
  /* ============================== */
  static timerSubItemContainer(item, shouldReset) {
    HsncUtilTimer.timerSubItemContainer(item, shouldReset);
  }
  /* ============================== */
}
/*  */
export {
  HsncUtil
};
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */