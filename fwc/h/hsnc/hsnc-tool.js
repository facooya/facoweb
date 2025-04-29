/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* ================================================== */
/* DpmacConfig.tocIndex => subItemLr() */
import { DpmacConfig } from "../../dpm/dpm-hub.js";
/* ================================================== */
class HsncToolSubItem {
  static subItemBrWidth(item) {
    /* Calcualtion Width */
    const subItemTexts = item.querySelectorAll(".sub-item-text");
    const subItemBrs = item.querySelectorAll(".sub-item-br");
    const bufferW = 24;
    /*  */
    for (let i = 0; i < subItemBrs.length; i++) {
      const textW = subItemTexts[i].clientWidth;
      let calcW = textW + bufferW;
      subItemBrs[i].width = calcW;
    }
  }
  /* ================================================== */
  static subItemBrLeft(item) {
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
  static subItemRrLeft(item) {
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
  /* ================================================== */
  static subItemLr() {
    /* Only TOC */
    const items = document.querySelectorAll(".hsnc-list .item");
    if (items[0].isToc) {
      const tocActive = "toc-active";
      const subItemLrs = items[0].querySelectorAll(".sub-item-lr");
      const subItemTexts = items[0].querySelectorAll(".sub-item-text");
      /*  */
      for (let i = 0; i < subItemLrs.length; i++) {
        subItemLrs[i].classList.remove(tocActive);
        subItemTexts[i].classList.remove(tocActive);
      }
      /*  */
      const tocIndex = DpmacConfig.tocIndex;
      subItemLrs[tocIndex].classList.add(tocActive);
      subItemTexts[tocIndex].classList.add(tocActive);
    }
  }
  /* ================================================== */
  static subItemContainerTimer(item, shouldReset) {
    /* Only Td */
    const subItemContainers = item.querySelectorAll(".sub-item-container");
    if (shouldReset) {
      subItemContainers.forEach(subItemContainer => {
        clearTimeout(subItemContainer.timerId);
        HsncToolSubItem.subItemContainerTimeout(subItemContainer, shouldReset);
      });
    } else {
      for (let i = 0; i < subItemContainers.length; i++) {
        subItemContainers[i].timerId = setTimeout(
          HsncToolSubItem.subItemContainerTimeout,
          i * 150,
          subItemContainers[i],
          shouldReset
        );
      }
    }
  }
  /* -------------------------------------------------- */
  static subItemContainerTimeout(subItemContainer, shouldReset) {
    const subItemText = subItemContainer.querySelector(".sub-item-text");
    const subItemRr = subItemContainer.querySelector(".sub-item-rr");
    const subItemBr = subItemContainer.querySelector(".sub-item-br");
    /*  */
    const active = "active";
    let action = "remove";
    let setSubItemBrW = "";
    if (!shouldReset) {
      action = "add";
      setSubItemBrW = `${subItemBr.width}px`;
    }
    subItemBr.style.width = setSubItemBrW;
    /*  */
    subItemText.classList[action](active);
    subItemRr.classList[action](active);
  }
}
/* ================================================== */
class HsncTool {
  static subItemBrWidth(item) {
    HsncToolSubItem.subItemBrWidth(item);
  }
  /* -------------------------------------------------- */
  static subItemBrLeft(item) {
    HsncToolSubItem.subItemBrLeft(item);
  }
  static subItemRrLeft(item) {
    HsncToolSubItem.subItemRrLeft(item);
  }
  /* -------------------------------------------------- */
  static subItemLr() {
    HsncToolSubItem.subItemLr();
  }
  /* -------------------------------------------------- */
  static subItemContainerTimer(item, shouldReset) {
    HsncToolSubItem.subItemContainerTimer(item, shouldReset);
  }
}
/* ================================================== */
export { HsncTool };
/* ================================================== */
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
/* ========================= ;FACOOYA; ========================= */