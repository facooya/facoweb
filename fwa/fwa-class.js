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
class FwaAccessor {
  static fwaIsTimeout = true;
  static fwaTimeoutId = null;
  static isFwaResizeKey = false;
}
class FwaController {
  static init() {
    FwaManager.init();
    FwaManager.event();
  }
}
class FwaManager {
  static init() {
    FwaConfig.currentDisplayType = FwaUtility.getDisplayType();
    FwaConfig.previousDisplayType = FwaConfig.currentDisplayType;
  }
  static event() {
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
  static onLoad() {
    FwaConfig.isLoad = true;
    FwaLog.logb("=", 30);
    /* ========== Fwc Controller ========== */
    FwcController.load();
    /* ============================== */
    FwaLog.logd(true, "fwa/fwa-class.js", "currentDt", FwaConfig.currentDisplayType);
    FwaLog.logd(true, "fwa/fwa-class.js", "FwaHandler.onLoad()", "Done");
  }
  static onResize() {
    FwaConfig.currentDisplayType = FwaUtility.getDisplayType();
    if (FwaConfig.currentDisplayType !== FwaConfig.previousDisplayType) {
      FwaLog.logb("=", 30);
      /* ========== Fwc Controller ========== */
      FwcController.resizeDisplay();
      /* ============================== */
      FwaConfig.previousDisplayType = FwaConfig.currentDisplayType;
      FwaLog.logd(true, "fwa/fwa-class.js", "currentDt", FwaConfig.currentDisplayType);
      FwaLog.logd(true, "fwa/fwa-class.js", "FwaHandler.onResize()", "Done");
      clearTimeout(FwaAccessor.fwaTimeoutId);
      /* FwaAccessor.isFwaResizeKey = false; */
    } else {
      clearTimeout(FwaAccessor.fwaTimeoutId);
      FwaAccessor.fwaTimeoutId = setTimeout(
        FwcController.resizeSensor,
        200
      );
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
class FwaSet {
  static setFwaResizeKey(isActive) {
    FwaAccessor.isFwaResizeKey = isActive;
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
