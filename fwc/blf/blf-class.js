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
  BlfConfig,
  BlfUtil,
  HsncUtil,
  DpmacAccessor,
  DpmacConfig,
  DpmacUtil
} from "../fwc-hub.js";
import {
  BlfTool
} from "./blf-tool.js";
/*  */
class BlfAccessor {

}
class BlfController {
  static init() {
    BlfConfig.blfHoGenerate();
    BlfConfig.blfFoGenerate();
    BlfManager.init();
    BlfManager.event();
  }
  static load() {
    BlfManager.load();
  }
  static resizeDisplay() {
    BlfManager.resizeDisplay();
  }
  static resizeSensor() {
    BlfManager.resizeSensor();
  }
}
class BlfManager {
  static init() {
    BlfConfig.currentDisplayType = BlfUtil.getDisplayType();
    BlfConfig.previousDisplayType = BlfConfig.currentDisplayType;
    BlfConfig.currentPageType = BlfUtil.getPageType();
    BlfUtil.setDeviceState();
  }
  static load() {
    BlfTool.calcBlfYottaFo();
  }
  static resizeDisplay() {
    BlfManager.resizeSensor();
  }
  static resizeSensor() {
    BlfTool.calcBlfYottaFo();
  }
  static event() {
    window.addEventListener(
      "load",
      BlfHandler.onLoad,
      { once: true }
    );
    window.addEventListener(
      "resize",
      BlfHandler.onResize
    );
    window.addEventListener(
      "scroll",
      BlfHandler.onScroll
    );
    window.addEventListener(
      "hashchange",
      BlfHandler.onHashChange
    )
  }
}
class BlfHandler {
  static onLoad() {
    FwcController.load();
  }
  static onResize() {
    BlfConfig.currentDisplayType = BlfUtil.getDisplayType();
    if (BlfConfig.currentDisplayType !== BlfConfig.previousDisplayType) {
      FwcController.resizeDisplay();
      BlfConfig.previousDisplayType = BlfConfig.currentDisplayType;
      clearTimeout(BlfConfig.resizeTimerId);
    } else {
      clearTimeout(BlfConfig.resizeTimerId);
      BlfConfig.resizeTimerId = setTimeout(
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
  BlfAccessor,
  BlfController
};
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
