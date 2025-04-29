/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  FwaConfig
} from "../../../fwa/fwa-config.js";
import {
  FascConfig,
  BlfUtil
} from "../../fwc-hub.js";
/*  */
class FascAccessor {

}
class FascController {
  static init() {
    FascConfig.fascGenerate();
    FascManager.init();
  }
  static load() {
    FascManager.load();
    FascManager.event(true);
  }
  static resizeDisplay() {
    FascManager.resizeDisplay();
    FascManager.event(false);
    FascManager.event(true);
  }
}
class FascManager {
  static init() {

  }
  static load() {

  }
  static resizeDisplay() {

  }
  static event(isActive) {
    const {
      fascZettaToDev
    } = FascConfig.getFascToGroup();
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
        fascZettaToDev[eventListenerType](
          "mouseenter",
          FascHandler.ddtFascZettaToDev
        );
        fascZettaToDev[eventListenerType](
          "mouseleave",
          FascHandler.ddtFascZettaToDev
        );
        break;
      }
    }
  }
}
class FascHandler {
  static ddtFascZettaToDev(eventData) {
    const {
      eventType
    } = BlfUtil.getEventData(eventData);
    const {
      fascZettaToDev
    } = FascConfig.getFascToGroup();
    /*  */
    const clData = "cl-ddt-fasc-z-to-dev-handler";
    let isActive = false;
    let clType = "remove";
    if (eventType === "mouseenter") {
      isActive = true;
      clType = "add";
    }
    /*  */
    fascZettaToDev.classList[clType](clData);
  }
}
export {
  FascAccessor,
  FascController
}
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */