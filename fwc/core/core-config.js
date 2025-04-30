/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* ================================================== */
class CoreConfigManager {
  static headerGenerate() {
    const h = document.querySelector(".h");
    const hFrag = document.createDocumentFragment();
    /*  */
    const htbc = document.createElement("div");
    htbc.setAttribute("class", "htbc");
    hFrag.append(htbc);
    h.prepend(hFrag);
  }
  /* ============================== */
  static footerGenerate() {
    const f = document.querySelector(".f");
    const fFrag = document.createDocumentFragment();
    /*  */
    const fasc = document.createElement("section");
    fasc.setAttribute("class", "fasc");
    const fllc = document.createElement("nav");
    fllc.setAttribute("class", "fllc");
    /*  */
    fFrag.append(fasc, fllc);
    const noscript = document.querySelector(".noscript");
    f.insertBefore(fFrag, noscript);
  }
}
/* ================================================== */
class CoreConfigLogic {
  static setConfigState() {
    const pageTypes = [".hpm", ".npm", ".dpm"];
    for (let i = 0; i < pageTypes.length; i++) {
      if (document.querySelector(pageTypes[i])) {
        CoreConfig.pageType = i + 1;
        break;
      }
    }
    if (window.matchMedia("(hover: none)").matches) {
      CoreConfig.isTouchDevice = true;
    }
  }
  static updateScreenType() {
    const screenTypes = [
      "(max-width: 767px)",
      "(min-width: 768px) and (max-width: 1279px)",
      "(min-width: 1280px)"
    ];
    for (let i = 0; i < screenTypes.length; i++) {
      if (window.matchMedia(screenTypes[i]).matches) {
        CoreConfig.screenType = i + 1;
        break;
      }
    }
  }
}
/* ================================================== */
class CoreConfig {
  static isTouchDevice = false;
  static pageType = 0;
  static screenType = 0;
  static previousScreenType = 0;
  static resizeSensorTimerId = 0;
  /* ============================== */
  static headerGenerate() {
    CoreConfigManager.headerGenerate();
  }
  static footerGenerate() {
    CoreConfigManager.footerGenerate();
  }
  /* ============================== */
  static setConfigState() {
    CoreConfigLogic.setConfigState();
  }
  static updateScreenType() {
    CoreConfigLogic.updateScreenType();
  }
}
/* ================================================== */
export { CoreConfig };
/* ================================================== */
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
/* ========================= ;FACOOYA; ========================= */