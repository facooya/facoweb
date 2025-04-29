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
  FllcConfig
} from "../../fwc-hub.js";
import {
  FllcTool
} from "./fllc-tool.js";
/*  */
class FllcAccessor {

}
class FllcController {
  static init() {
    FllcConfig.fllcGenerate();
    FllcManager.init();
  }
  static load() {
    FllcManager.load();
    FllcManager.event(true);
  }
  static resizeDisplay() {
    FllcManager.event(false);
    FllcManager.event(true);
    FllcManager.resizeDisplay();
  }
  static resizeSensor() {
    FllcManager.resizeSensor();
  }
}
class FllcManager {
  static init() {
    const {
      fllcZ
    } = FllcConfig.getFllcYbGroup();
    for (let ybi = 0; ybi < fllcZ.length; ybi++) {
      fllcZ[ybi].index = ybi;
    }
  }
  static load() {
    if (BlfConfig.currentDisplayType === 1) {
      FllcTool.clFllcYottaFo();
    }
  }
  static resizeDisplay() {
    FllcManager.resizeSensor();
  }
  static resizeSensor() {
    if (BlfConfig.currentDisplayType === 1) {
      FllcTool.clFllcYottaFo();
    }
  }
  static event(isActive) {
    const {
      fllcPetaText
    } = FllcConfig.getFllcYbGroup();
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
        break;
      }
      case 2: {
        break;
      }
      case 3: {
        for (let ybi = 0; ybi < fllcPetaText.length; ybi++) {
          fllcPetaText[ybi][eventListenerType](
            "mouseenter",
            FllcHandler.ddtFllcPetaText
          );
          fllcPetaText[ybi][eventListenerType](
            "mouseleave",
            FllcHandler.ddtFllcPetaText
          );
        }
        break;
      }
    }
  }
}
class FllcHandler {
  static ddtFllcPetaText(eventData) {
    const {
      eventType,
      targetIndex
    } = BlfUtil.getEventData(eventData, ".fllc-z");
    const {
      fllcPetaText
    } = FllcConfig.getFllcYbGroup();
    /*  */
    const clData = "cl-ddt-fllc-p-text-handler";
    let isActive = false;
    let clType = "remove";
    if (eventType === "mouseenter") {
      isActive = true;
      clType = "add";
    }
    /*  */
    fllcPetaText[targetIndex].classList[clType](clData);
  }
}
export {
  FllcAccessor,
  FllcController
};
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */