/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  DpmacConfig
} from "../../fwc-hub.js";
/*  */
class DpmacUtilSet {
  static setIndexPosition() {
    DpmacConfig.indexPositions = [];
    const tocIndexes = document.querySelectorAll(".toc-index");
    const scrollY = window.scrollY;
    const scrollMarginTop = 64;
    tocIndexes.forEach((tocIndex, index) => {
      const rect = tocIndex.getBoundingClientRect();
      const calcPosition = rect.y + scrollY - scrollMarginTop;
      tocIndex.index = index;
      DpmacConfig.indexPositions.push(calcPosition);
    });
    console.log(DpmacConfig.indexPositions);
  }
  static setCurrentIndex() {
    const scrollY = window.scrollY;
    const indexPositions = DpmacConfig.indexPositions;
    const firstIndex = 1;
    const lastIndex = indexPositions.length - 1;
    /*  */
    if (scrollY < indexPositions[firstIndex]) {
      DpmacConfig.currentIndex = 0;
    } else if (scrollY >= indexPositions[lastIndex]) {
      DpmacConfig.currentIndex = lastIndex;
    } else {
      for (let i = 2; i < indexPositions.length; i++) {
        if (scrollY < indexPositions[i]) {
          DpmacConfig.currentIndex = i - 1;
          break;
        }
      }
    }
  }
  static setCurrentIndexHashChange() {
    const hash = window.location.hash;
    const target = document.querySelector(hash);
    if (target) {
      DpmacConfig.currentIndex = target.index;
    }
  }
}
class DpmacUtilGet {

}
class DpmacUtil {
  static setIndexPosition() {
    DpmacUtilSet.setIndexPosition();
  }
  static setCurrentIndex() {
    DpmacUtilSet.setCurrentIndex();
  }
  static setCurrentIndexHashChange() {
    DpmacUtilSet.setCurrentIndexHashChange();
  }
}
/*  */
export {
  DpmacUtil
};
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */