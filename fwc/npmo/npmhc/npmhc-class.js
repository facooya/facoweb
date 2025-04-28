/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  FwaConfig
} from "../../../fwa/fwa-config.js";
import {
  NpmhcConfig
} from "./npmhc-config.js";
import {
  FwcAccessor,
  NpmscAccessor
} from "../../fwc-hub.js";
/*  */
class NpmhcAccessor {
  static npmhcCache = {};
  static getNpmhcRoot() {
    return NpmhcGet.getNpmhcRoot();
  }
  static getNpmhcTnoGroup() {
    return NpmhcGet.getNpmhcTnoGroup();
  }
}
class NpmhcController {
  static process() {
    NpmhcManager.init();
  }
  static processOnLoad() {
    NpmhcManager.initOnLoad();
    NpmhcManager.event(true);
  }
  static processOnResize() {
    NpmhcManager.initOnResize();
    NpmhcManager.event(false);
    NpmhcManager.event(true);
  }
}
class NpmhcManager {
  static init() {
    const {
      npmhcExaTno
    } = NpmhcGet.getNpmhcTnoGroup();
    /* Set Index */
    for (let i = 0; i < npmhcExaTno.length; i++) {
      npmhcExaTno[i].index = i;
    }
  }
  static initOnLoad() {
    window.addEventListener("hashchange", NpmhcHandler.adtNpmhcOnHashChange);
    NpmhcHandler.adtNpmhcOnHashChange();
  }
  static initOnResize() {

  }
  static event(isActive) {
    const {
      npmhcExaTno
    } = NpmhcGet.getNpmhcTnoGroup();
    /*  */
    const eventType = ["mouseenter", "mouseleave"];
    let eventListenerType = "";
    let displayTypeState = null;
    if (isActive) {
      eventListenerType = "addEventListener";
      displayTypeState = FwaConfig.currentDisplayType;
    } else {
      eventListenerType = "removeEventListener";
      displayTypeState = FwaConfig.previousDisplayType;
    }
    /*  */
    if (displayTypeState === 3) {
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
  static adtNpmhcOnHashChange() {
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
  }
  static ddtNpmhcExaTno(eventData) {
    const {
      eventType,
      eventIndex
    } = FwcAccessor.getEventData(eventData);
    const {
      npmhcTeraTnoText
    } = NpmhcGet.getNpmhcTnoGroup();
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
      npmhcTeraTnoText[eventIndex].classList[type]("cl-ddt-npmhc-e-tno-handler")
    }
  }
}
class NpmhcSet {
  static setTab(tab) {
    const {
      npmhcTeraTnoText,
      npmhcTeraTnoGro
    } = NpmhcGet.getNpmhcTnoGroup();
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
  }
}
class NpmhcGet {
  static getNpmhcRoot() {
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
  }
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
