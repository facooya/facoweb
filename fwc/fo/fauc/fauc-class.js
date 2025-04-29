/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  FwaConfig
} from "../../../fwa/fwa-config.js";
import {
  BlfUtil,
  FaucConfig
} from "../../fwc-hub.js";
/*  */
class FaucAccessor {

}
class FaucController {
  static init() {
    FaucConfig.faucGenerate();
    FaucManager.init();
  }
  static load() {
    FaucManager.load();
    FaucManager.event(true);
  }
  static resizeDisplay() {
    FaucManager.event(false);
    FaucManager.event(true);
    FaucManager.resizeDisplay();
  }
}
class FaucManager {
  static init() {
    const {
      faucZ
    } = FaucConfig.getFaucYbGroup();
    for (let ybi = 0; ybi < faucZ.length; ybi++) {
      faucZ[ybi].index = ybi;
    }
  }
  static load() {

  }
  static resizeDisplay() {

  }
  static event(isActive) {
    const {
      faucE
    } = FaucConfig.getFaucYbGroup();
    /*  */
    let displayType = FwaConfig.previousDisplayType;
    let eventListenerType = "removeEventListener";
    if (isActive) {
      displayType = FwaConfig.currentDisplayType;
      eventListenerType = "addEventListener";
    }
    /*  */
    switch (displayType) {
      case 1: {
        break;
      }
      case 2: {
        break;
      }
      case 3: {
        for (let ybi = 0; ybi < faucE.length; ybi++) {
          faucE[ybi][eventListenerType](
            "mouseenter",
            FaucHandler.ddtFaucExa
          );
          faucE[ybi][eventListenerType](
            "mouseleave",
            FaucHandler.ddtFaucExa
          );
        }
        break;
      }
    }
  }
}
class FaucHandler {
  static ddtFaucExa(eventData) {
    const {
      eventType,
      targetIndex
    } = BlfUtil.getEventData(eventData, ".fauc-z");
    const {
      faucPetaText
    } = FaucConfig.getFaucYbGroup();
    /*  */
    const clData = "cl-ddt-fauc-e-handler";
    let isActive = false;
    let clType = "remove";
    if (eventType === "mouseenter") {
      isActive = true;
      clType = "add";
    }
    /*  */
    faucPetaText[targetIndex].classList[clType](clData);
  }
}
export {
  FaucAccessor,
  FaucController
};
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */