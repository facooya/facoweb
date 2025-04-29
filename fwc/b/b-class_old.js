/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  FwcController
} from "../fwc.js";
/*  */
import {
  BodyConfig,
  BodyUtil,
  HsncUtil,
  DpmacAccessor,
  DpmacConfig,
  DpmacUtil
} from "../fwc-hub.js";
import {
  BodyTool
} from "./b-tool.js";
/*  */
class BodyAccessor {

}
class BodyController {
  static init() {
    BodyConfig.blfHoGenerate();
    BodyConfig.blfFoGenerate();
    BodyManager.init();
    BodyManager.event();
  }
  static load() {
    BodyManager.load();
  }
  static resizeDisplay() {
    BodyManager.resizeDisplay();
  }
  static resizeSensor() {
    BodyManager.resizeSensor();
  }
}
class BodyManager {
  static init() {
    BodyConfig.currentDisplayType = BodyUtil.getDisplayType();
    BodyConfig.previousDisplayType = BodyConfig.currentDisplayType;
    BodyConfig.currentPageType = BodyUtil.getPageType();
    BodyUtil.setDeviceState();
  }
  static load() {
    BodyTool.calcBodyYottaFo();
  }
  static resizeDisplay() {
    BodyManager.resizeSensor();
  }
  static resizeSensor() {
    BodyTool.calcBodyYottaFo();
  }
  static event() {
    window.addEventListener(
      "load",
      BodyHandler.onLoad,
      { once: true }
    );
    window.addEventListener(
      "resize",
      BodyHandler.onResize
    );
    window.addEventListener(
      "scroll",
      BodyHandler.onScroll
    );
    window.addEventListener(
      "hashchange",
      BodyHandler.onHashChange
    )
  }
}
class BodyHandler {
  static onLoad() {
    FwcController.load();
  }
  static onResize() {
    BodyConfig.currentDisplayType = BodyUtil.getDisplayType();
    if (BodyConfig.currentDisplayType !== BodyConfig.previousDisplayType) {
      FwcController.resizeDisplay();
      BodyConfig.previousDisplayType = BodyConfig.currentDisplayType;
      clearTimeout(BodyConfig.resizeTimerId);
    } else {
      clearTimeout(BodyConfig.resizeTimerId);
      BodyConfig.resizeTimerId = setTimeout(
        FwcController.resizeSensor,
        200
      );
    }
  }
  static onScroll() {
    DpmacUtil.setCurrentIndex();
  }
  static onHashChange() {
    /* if mobile */
    DpmacUtil.setCurrentIndexHashChange();
    HsncUtil.setSubItemLr();
  }
}
export {
  BodyAccessor,
  BodyController
};
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
