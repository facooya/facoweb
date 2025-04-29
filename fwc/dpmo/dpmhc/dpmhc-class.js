/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  BlfUtil,
  BlfConfig,
  DpmhcConfig
} from "../../fwc-hub.js";
/*  */
class DpmhcAccessor {
  
}
class DpmhcController {
  static init() {
    DpmhcManager.init();
  }
  static load() {
    DpmhcManager.load();
    DpmhcManager.event(true);
  }
  static resizeDisplay() {
    DpmhcManager.resizeDisplay();
    DpmhcManager.event(false);
    DpmhcManager.event(true);
  }
}
class DpmhcManager {
  static init() {
    /* const {
      dpmhcExaCno
    } = DpmhcConfig.getDpmhcCnoEbGroup();
    for (let ebi = 0; ebi < dpmhcExaCno.length; ebi++) {
      dpmhcExaCno[ebi].index = ebi;
    } */
  }
  static load() {

  }
  static resizeDisplay() {

  }
  static event(isActive) {
    /* const test = document.querySelectorAll(".dpmhc-t-cno"); */
    const {
      dpmhcTeraCno
    } = DpmhcConfig.getDpmhcCnoEbGroup();
    /*  */
    let displayType = BlfConfig.previousDisplayType;
    let eventListenerType = "removeEventListener";
    if (isActive) {
      displayType = BlfConfig.currentDisplayType;
      eventListenerType = "addEventListener";
    }
    /*  */
    switch (displayType) {
      case 1: {
        for (let tbi = 0; tbi < dpmhcTeraCno.length; tbi++) {
          dpmhcTeraCno[tbi][eventListenerType](
            "click",
            DpmhcHandler.mdtDpmhcTeraCno
          );
        }
        break;
      }
      case 2: {
        break;
      }
      case 3: {
        break;
      }
    }
  }
}
class DpmhcHandler {
  /* static testHandler(eventData) {
    const hash = eventData.currentTarget.hash;
    const hashTarget = document.querySelector(hash);
    history.replaceState(null, null, hash);
    hashTarget.scrollIntoView();
  } */
  static mdtDpmhcTeraCno(eventData) {
    const {
      eventCurrentTarget
    } = BlfUtil.getEventData(eventData);
    /*  */
    const hash = eventCurrentTarget.hash;
    const hashElement = document.querySelector(hash);
    history.replaceState(null, null, hash);
    hashElement.scrollIntoView();
  }
  static tdtDpmhcTeraCno(eventData) {

  }
  static ddtDpmhcTeraCno(eventData) {

  }
}
/*  */
export {
  DpmhcAccessor,
  DpmhcController
};
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */