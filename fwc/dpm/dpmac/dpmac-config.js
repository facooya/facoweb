/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* ================================================== */
class DpmacConfigManager {
  static setTocIndexPosition() {
    const tocIndexes = document.querySelectorAll(".toc-index");
    const scrollY = window.scrollY;
    const scrollMarginTop = 64;
    const calcScroll = scrollY - scrollMarginTop;
    /* tocIndexes.forEach((tocIndex, index) => {
      const rect = tocIndex.getBoundingClientRect();
      const calcPosition = rect.y + scrollY - scrollMarginTop;
      tocIndex.index = index;
      DpmacConfig.tocIndexPositions.push(calcPosition);
    }); */
    for (let i = 0; i < tocIndexes.length; i++) {
      const rect = tocIndexes[i].getBoundingClientRect();
      const calcPosition = rect.y + calcScroll;
      tocIndexes[i].index = i;
      DpmacConfig.tocIndexPositions.push(calcPosition);
    }
  }
  /* -------------------------------------------------- */
  static updateTocIndexScroll() {
    const scrollY = window.scrollY;
    const indexPositions = DpmacConfig.tocIndexPositions;
    const firstIndex = 1;
    const lastIndex = indexPositions.length - 1;
    /*  */
    if (scrollY < indexPositions[firstIndex]) {
      DpmacConfig.tocIndex = 0;
    } else if (scrollY >= indexPositions[lastIndex]) {
      DpmacConfig.tocIndex = lastIndex;
    } else {
      for (let i = 2; i < indexPositions.length; i++) {
        if (scrollY < indexPositions[i]) {
          DpmacConfig.tocIndex = i - 1;
          break;
        }
      }
    }
  }
  /* -------------------------------------------------- */
  static updateTocIndexHash() {
    const hash = window.location.hash;
    const target = document.querySelector(hash);
    if (target) { DpmacConfig.tocIndex = target.index; }
  }
}
/* ================================================== */
class DpmacConfig {
  static tocIndexPositions = [];
  static tocIndex = 0;
  /* -------------------------------------------------- */
  static setTocIndexPosition() {
    DpmacConfigManager.setTocIndexPosition();
  }
  static updateTocIndex() {
    DpmacConfigManager.updateTocIndexScroll();
  }
  static updateTocIndexHash() {
    DpmacConfigManager.updateTocIndexHash();
  }
}
/* ================================================== */
export { DpmacConfig };
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */