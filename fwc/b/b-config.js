/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* ================================================== */
class BodyConfigLogic {
  static setConfigState() {
    const pageTypes = [".hpm", ".npm", ".dpm"];
    for (let i = 0; i < pageTypes.length; i++) {
      if (document.querySelector(pageTypes[i])) {
        BodyConfig.pageType = i + 1;
        break;
      }
    }
    if (window.matchMedia("(hover: none)").matches) {
      BodyConfig.isTouchDevice = true;
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
        BodyConfig.screenType = i + 1;
        break;
      }
    }
  }
}
/* ================================================== */
class BodyConfigManager {
  /* ============================== */
  static headerGenerate() {
    const h = document.querySelector(".h");
    const hClasses = ["htbc", "hdnc", "hsnc"];
    const hFrag = document.createDocumentFragment();
    /*  */
    /* hClasses.forEach(hClass => {
      const nav = document.createElement("nav");
      nav.setAttribute("class", hClass);
      hFrag.append(nav);
    }); */
    /*  */
    const htbc = document.createElement("section");
    htbc.setAttribute("class", "htbc");
    const hdnc = document.createElement("nav");
    hdnc.setAttribute("class", "hdnc");
    const hsnc = document.createElement("nav");
    hsnc.setAttribute("class", "hsnc");
    /*  */
    hFrag.append(htbc, hdnc, hsnc);
    h.append(hFrag);
  }
  /* ============================== */
  static footerGenerate() {
    const f = document.querySelector(".f");
    const fClasses = ["fasc", "fngc", "fllc"];
    const fFrag = document.createDocumentFragment();
    /*  */
    /* fClasses.forEach(fClass => {
      const nav = document.createElement("nav");
      nav.setAttribute("class", fClass);
      fFrag.append(nav);
    }); */
    /*  */
    const fngc = document.createElement("nav");
    fngc.setAttribute("class", "fngc");
    const fasc = document.createElement("section");
    fasc.setAttribute("class", "fasc");
    const fllc = document.createElement("nav");
    fllc.setAttribute("class", "fllc");
    /*  */
    fFrag.append(fngc, fasc, fllc);
    f.prepend(fFrag);
  }
  /* ============================== */
}
/* ================================================== */
class BodyConfig {
  /* ============================== */
  static isTouchDevice = false;
  static pageType = 0;
  /*  */
  static screenType = 0;
  static previousScreenType = 0;
  /*  */
  static resizeSensorTimerId = 0;
  /* ============================== */
  static setConfigState() {
    BodyConfigLogic.setConfigState();
  }
  /* ------------------------------ */
  static updateScreenType() {
    BodyConfigLogic.updateScreenType();
  }
  /* ============================== */
  static headerGenerate() {
    BodyConfigManager.headerGenerate();
  }
  /* ------------------------------ */
  static footerGenerate() {
    BodyConfigManager.footerGenerate();
  }
  /* ============================== */
}
/* ================================================== */
export {
  BodyConfig
};
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */