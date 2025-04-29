/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  BlfUtil,
  BlfConfig,
  DpmscConfig
} from "../../fwc-hub.js";
/*  */
class DpmscAccessor {

}
class DpmscController {
  static init() {
    DpmscManager.init();
  }
  static load() {
    DpmscManager.load();
    DpmscManager.event(true);
  }
  static resizeDisplay() {
    DpmscManager.resizeDisplay();
    DpmscManager.event(false);
    DpmscManager.event(true);
  }
}
class DpmscManager {
  static init() {

  }
  static load() {

  }
  static resizeDisplay() {

  }
  static event(isActive) {
    const {
      dpmscTeraTlo
    } = DpmscConfig.getDpmscTloGroup();
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
        for (let tbi = 0; tbi < dpmscTeraTlo.length; tbi++) {
          dpmscTeraTlo[tbi][eventListenerType](
            "click",
            DpmscHandler.mdtDpmscTeraTlo
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
class DpmscHandler {
  static mdtDpmscTeraTlo(eventData) {
    const {
      eventCurrentTarget
    } = BlfUtil.getEventData(eventData);
    /*  */
    const hash = eventCurrentTarget.hash;
    const hashElement = document.querySelector(hash);
    history.replaceState(null, null, hash);
    hashElement.scrollIntoView();
  }
}
/*  */
export {
  DpmscAccessor,
  DpmscController
};
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */