/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  FwaLog
} from "./fwa-log.js";
import {
  FwaConfig
} from "./fwa-config.js";
/* ===== Fwc Controller ===== */
import {
  FwcController
} from "../fwc/fwc-hub.js";
/* =============== */
class FwaController {
  static process() {
    FwaManager.setupProcess();
    FwaManager.event();
  }
  /* static setupProcess() { !!! v1.1.14a [del] (replaced)
    FwaConfig.currentDt = FwaUtility.getDisplayType();
    FwaConfig.previousDt = FwaConfig.currentDt;
  } */
}
class FwaManager {
  static setupProcess() {
    FwaConfig.currentDisplayType = FwaUtility.getDisplayType();
    FwaConfig.previousDisplayType = FwaConfig.currentDisplayType;
  }
  static event() {
    /* window.addEventListener( !!! v1.1.14a [del] (unused)
      "DOMContentLoaded",
      this.fwaHandler.onDcl.bind(this.fwaHandler)
    ); */
    window.addEventListener(
      "load",
      FwaHandler.onLoad,
      { once: true }
    );
    window.addEventListener(
      "resize",
      FwaHandler.onResize
    );
  }
}
class FwaHandler {
  /* onDcl() { !!! v1.1.14a [del] (unused)
    FwaLog.logb("=", 30);
    FwaLog.logd(true, "fwa/fwa-class.js", "FwaHandler.onDcl()", "Done");
  } */
  static onLoad() {
    FwaConfig.isLoad = true;
    FwaLog.logb("=", 30);
    /* ========== Fwc Controller ========== */
    FwcController.processOnLoad();
    /* ============================== */
    FwaLog.logd(true, "fwa/fwa-class.js", "currentDt", FwaConfig.currentDisplayType);
    FwaLog.logd(true, "fwa/fwa-class.js", "FwaHandler.onLoad()", "Done");
  }
  static onResize() {
    FwaConfig.currentDisplayType = FwaUtility.getDisplayType();
    if (FwaConfig.currentDisplayType !== FwaConfig.previousDisplayType) {
      FwaLog.logb("=", 30);
      /* ========== Fwc Controller ========== */
      FwcController.processOnResize();
      /* ============================== */
      FwaConfig.previousDisplayType = FwaConfig.currentDisplayType;
      FwaLog.logd(true, "fwa/fwa-class.js", "currentDt", FwaConfig.currentDisplayType);
      FwaLog.logd(true, "fwa/fwa-class.js", "FwaHandler.onResize()", "Done");
    }
  }
}
class FwaUtility {
  static getDisplayType() {
    const displayType = [
      "(max-width: 767px)",
      "(min-width: 768px) and (max-width: 1279px)",
      "(min-width: 1280px)"
    ];
    for (let i = 0; i < displayType.length; i++) {
      if (window.matchMedia(displayType[i]).matches) {
        const returnData = i + 1;
        return returnData;
      }
    }
    return -1;
  }
}
export {
  FwaController
};
/* DESCRIPTION
 * @[Value] {Number} (activeMode) 1: Mobile, 2: Tablet, 3: Desktop, Else: Error
 * @[Value] {Number} (prevMode) prevMode = activeMode
 * DT: Display Type
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */
