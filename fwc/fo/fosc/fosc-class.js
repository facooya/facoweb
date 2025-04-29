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
  FoscConfig
} from "../../fwc-hub.js";
/*  */
class FoscAccessor {

}
class FoscController {
  static init() {
    FoscConfig.foscGenerate();
    FoscManager.init();
  }
  static load() {
    FoscManager.load();
    FoscManager.event(true);
  }
  static resizeDisplay() {
    FoscManager.event(false);
    FoscManager.event(true);
    FoscManager.resizeDisplay();
  }
}
class FoscManager {
  static init() {
    const {
      foscZ
    } = FoscConfig.getFoscYbGroup();
    for (let ybi = 0; ybi < foscZ.length; ybi++) {
      foscZ[ybi].index = ybi;
    }
  }
  static load() {

  }
  static resizeDisplay() {

  }
  static event(isActive) {
    const {
      foscE
    } = FoscConfig.getFoscYbGroup();
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
        for (let ybi = 0; ybi < foscE.length; ybi++) {
          foscE[ybi][eventListenerType](
            "mouseenter",
            FoscHandler.ddtFoscExa
          );
          foscE[ybi][eventListenerType](
            "mouseleave",
            FoscHandler.ddtFoscExa
          );
        }
        break;
      }
    }
  }
}
class FoscHandler {
  static ddtFoscExa(eventData) {
    const {
      eventType,
      targetIndex
    } = BlfUtil.getEventData(eventData, ".fosc-z");
    const {
      foscPetaText
    } = FoscConfig.getFoscYbGroup();
    /*  */
    const clData = "cl-ddt-fosc-e-handler";
    let isActive = false;
    let clType = "remove";
    if (eventType === "mouseenter") {
      isActive = true;
      clType = "add";
    }
    /*  */
    foscPetaText[targetIndex].classList[clType](clData);
  }
}
export {
  FoscAccessor,
  FoscController
};
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */