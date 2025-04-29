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
  /* static updateHsncSubItemBrWidth(hsncItem) {
    const hsncSubItemTexts = hsncItem.querySelectorAll(".hsnc-sub-item-text");
    const hsncSubItemBrs = hsncItem.querySelectorAll(".hsnc-sub-item-br");
    const bufferWidth = 24;
    hsncSubItemBrs.forEach((br, index) => {
      const textWidth = hsncSubItemTexts[index].offsetWidth;
      let calcWidth = textWidth + bufferWidth;
      br.width = calcWidth;
    });
  } */
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
  static timerSubItemBrWidth(item, shouldReset) {
    const subItemBrs = item.querySelectorAll(".hsnc-sub-item-br");
    if (shouldReset) {
      subItemBrs.forEach(br => {
        clearTimeout(br.timerId);
        HsncUtilTimer.timeoutSubItemText(br, true);
      });
    } else {
      subItemBrs.forEach((br, index) => {
        br.timerId = setTimeout(
          HsncUtilTimer.timeoutSubItemBrWidth,
          index * 150,
          br
        );
      });
    }
  }
  /* ============================== */
  static timeoutSubItemBrWidth(br) {
    br.style.width = `${br.width}px`;
    HsncUtilTimer.timeoutSubItemText(br);
  }
  static timeoutSubItemText(br, shouldReset) {
    const subItemContainer = br.closest(".hsnc-sub-item-container");
    const subItemText = subItemContainer.querySelector(".hsnc-sub-item-text");
    const subItemRr = subItemContainer.querySelector(".hsnc-sub-item-rr");

    const clData = "cl-hsnc-sub-item-set-active";
    let clAction = "add";
    if (shouldReset) {
      clAction = "remove";
    }
    subItemText.classList[clAction](clData);
    subItemRr.classList[clAction](clData);
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
  /* static updateHsncSubItemBrWidth(item) {
    HsncUtilUpdate.updateHsncSubItemBrWidth(item);
  } */
  /* ============================== */
  /* static setHsncSubItemBrLeft(item) {
    HsncUtilSet.setHsncSubItemBrLeft(item);
  } */
  static setHsncSubItemBrWidth(item, index) {
    HsncUtilSet.setHsncSubItemBrWidth(item, index);
  }
  static setSubItemLr() {
    HsncUtilSet.setSubItemLr();
  }
  /* ============================== */
  static timerSubItemBrWidth(item, shouldReset) {
    HsncUtilTimer.timerSubItemBrWidth(item, shouldReset);
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