/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  FwaConfig
} from "../../../fwa/fwa-config.js";
import {
  FwcAccessor,
  NpmhcConfig,
  NpmhcUtil
} from "../../fwc-hub.js";
/*  */
class NpmhcAccessor {
  /* static npmhcCache = {};
  static getNpmhcRoot() {
    return NpmhcGet.getNpmhcRoot();
  }
  static getNpmhcTnoGroup() {
    return NpmhcGet.getNpmhcTnoGroup();
  } */
}
class NpmhcController {
  static init() {
    NpmhcManager.init();
  }
  static load() {
    NpmhcManager.load();
    NpmhcManager.event(true);
  }
  static resizeDisplay() {
    NpmhcManager.resizeDisplay();
    NpmhcManager.event(false);
    NpmhcManager.event(true);
  }
}
class NpmhcManager {
  static init() {
    const {
      npmhcExaTno
    } = NpmhcConfig.getNpmhcTnoGroup();
    /* Set Index */
    for (let i = 0; i < npmhcExaTno.length; i++) {
      npmhcExaTno[i].index = i;
    }
  }
  static load() {
    window.addEventListener("hashchange", NpmhcHandler.windowOnHashChange);
    NpmhcHandler.windowOnHashChange();
  }
  static resizeDisplay() {

  }
  static event(isActive) {
    const {
      npmhcExaTno
    } = NpmhcConfig.getNpmhcTnoGroup();
    /*  */
    const eventType = ["mouseenter", "mouseleave"];
    let displayType = FwaConfig.previousDisplayType;
    let eventListenerType = "removeEventListener";
    if (isActive) {
      eventListenerType = "addEventListener";
      displayType = FwaConfig.currentDisplayType;
    }
    /*  */
    if (displayType === 3) {
      for (let i = 0; i < npmhcExaTno.length; i++) {
        /* ETI: Event Type Index */
        for (let eti = 0; eti < eventType.length; eti++) {
          npmhcExaTno[i][eventListenerType](
            eventType[eti],
            NpmhcHandler.ddtNpmhcExaTno
          );
        }
      }
    }
  }
}
class NpmhcHandler {
  /* static adtNpmhcOnHashChange() {
    const {
      npmhcExaTno
    } = NpmhcGet.getNpmhcTnoGroup();
    let tabData = null;
    let hashData = window.location.hash.slice(1);
    if (npmhcExaTno[hashData] === undefined) {
      tabData = 0;
      hashData = "#" + tabData.toString();
      window.location.hash = hashData;
    } else {
      tabData = parseInt(hashData);
    }
    NpmhcSet.setTab(tabData);
  } */
  static windowOnHashChange() {
    const {
      npmhcExaTno
    } = NpmhcConfig.getNpmhcTnoGroup();
    let tabData = 0;
    let hashData = window.location.hash.slice(1);
    if (npmhcExaTno[hashData] === undefined) {
      hashData = "#" + tabData.toString();
      window.location.hash = hashData;
    } else {
      tabData = parseInt(hashData);
    }
    NpmhcUtil.setNpmhcTno(tabData);
  }
  /* ================================================== */
  static ddtNpmhcExaTno(eventData) {
    const {
      eventType,
      eventIndex
    } = FwcAccessor.getEventData(eventData);
    const {
      npmhcTeraTnoText
    } = NpmhcConfig.getNpmhcTnoGroup();
    const clData = "cl-ddt-npmhc-e-tno-handler";
    let type = "";
    if (eventType === "mouseenter") {
      type = "add";
    } else if (eventType === "mouseleave") {
      if (window.location.hash.slice(1) !== eventIndex.toString()) {
        type = "remove";
      }
    }
    /*  */
    if (type) {
      npmhcTeraTnoText[eventIndex].classList[type](clData);
    }
  }
}
class NpmhcSet {
  /* static setTab(tab) {
    const {
      npmhcTeraTnoText,
      npmhcTeraTnoGro
    } = NpmhcConfig.getNpmhcTnoGroup();
    const {
      npmscY
    } = NpmscAccessor.getNpmscGroup();
    for (let i = 0; i < npmhcTeraTnoText.length; i++) {
      npmhcTeraTnoText[i].classList.remove(
        "cl-adt-npmhc-on-hash-change-handler",
        "cl-ddt-npmhc-e-tno-handler"
      );
      npmhcTeraTnoGro[i].classList.remove("cl-adt-npmhc-on-hash-change-handler");
      npmscY[i].classList.remove("cl-adt-npmhc-on-hash-change-handler");
    }
    npmhcTeraTnoText[tab].classList.add("cl-adt-npmhc-on-hash-change-handler");
    npmhcTeraTnoGro[tab].classList.add("cl-adt-npmhc-on-hash-change-handler");
    npmscY[tab].classList.add("cl-adt-npmhc-on-hash-change-handler");
  } */
}
class NpmhcGet {
  /* static getNpmhcRoot() {
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      NpmhcAccessor.npmhcCache,
      NpmhcConfig.npmhcRoot
    );
    return saveVerifyGroup;
  }
  static getNpmhcTloGroup() {
    const {
      npmhcR
    } = NpmhcGet.getNpmhcRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      NpmhcAccessor.npmhcCache,
      NpmhcConfig.npmhcTloGroup,
      npmhcR
    );
    return saveVerifyGroup;
  }
  static getNpmhcTnoGroup() {
    const {
      npmhcR
    } = NpmhcGet.getNpmhcRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      NpmhcAccessor.npmhcCache,
      NpmhcConfig.npmhcTnoGroup,
      npmhcR
    );
    return saveVerifyGroup;
  } */
}
export {
  NpmhcAccessor,
  NpmhcController
};
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
