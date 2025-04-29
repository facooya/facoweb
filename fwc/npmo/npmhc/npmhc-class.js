/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* import {
  FwaConfig
} from "../../../fwa/fwa-config.js"; */
import {
  BlfConfig,
  BlfUtil,
  HeccAccessor,
  NpmhcConfig,
  NpmhcUtil
} from "../../fwc-hub.js";
/*  */
class NpmhcAccessor {

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
    let displayType = BlfConfig.previousDisplayType;
    let eventListenerType = "removeEventListener";
    if (isActive) {
      eventListenerType = "addEventListener";
      displayType = BlfConfig.currentDisplayType;
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
    HeccAccessor.windowScrollHandler();
  }
  /* ================================================== */
  static ddtNpmhcExaTno(eventData) {
    const {
      eventType,
      eventIndex
    } = BlfUtil.getEventData(eventData);
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
export {
  NpmhcAccessor,
  NpmhcController
};
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
