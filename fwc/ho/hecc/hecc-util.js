/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  HeccConfig
} from "../../fwc-hub.js";
/*  */
class HeccUtilUpdate {
  static updateHeccZettaPbo() {
    const htmlElement = document.documentElement;
    /*  */
    const scrollable = htmlElement.scrollHeight - htmlElement.clientHeight;
    const scrollProgress = (htmlElement.scrollTop / scrollable) * 100;
    /*  */
    const calcHeight = Math.round(scrollProgress);
    const setHeight = calcHeight + "%";
    /*  */
    HeccUtil.heccUtilCache["heccZettaPboCalcHeight"] = calcHeight;
    HeccUtil.heccUtilCache["heccZettaPboSetHeight"] = setHeight;
  }
}
class HeccUtilSet {
  static setHeccZettaPbo() {
    const {
      heccZettaPboLgro,
      heccZettaPboRgro
    } = HeccConfig.getHeccPboGroup();
    /*  */
    const getHeight = HeccUtil.heccUtilCache["heccZettaPboSetHeight"];
    /*  */
    heccZettaPboLgro.style.height = getHeight;
    heccZettaPboRgro.style.height = getHeight;
  }
}
class HeccUtil {
  static heccUtilCache = {};
  /* -------------------------------------------------- */
  static updateHeccZettaPbo() {
    HeccUtilUpdate.updateHeccZettaPbo();
  }
  static setHeccZettaPbo() {
    HeccUtilSet.setHeccZettaPbo();
  }
}
export {
  HeccUtil
};
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */