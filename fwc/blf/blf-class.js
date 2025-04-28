/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  HtpncController,
  HdncController,
  HsncController,
  HeccController,
  NpmhcController,
  NpmscController
} from "../fwc-hub.js";
/*  */
class BlfAccessor {
  /* static blfCache = {};
  static getBlfGroup() {
    return BlfGet.getBlfGroup();
  } */
}
class BlfController {
  static init() {
    BlfManager.init();
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
    HtpncController.init();
    HdncController.init();
    HsncController.init();
    HeccController.init();
    /* -------------------------------------------------- */
    NpmhcController.init();
    NpmscController.init();
  }
  static load() {
    HtpncController.load();
    HdncController.load();
    HsncController.load();
    HeccController.load();
    /* -------------------------------------------------- */
    NpmhcController.load();
    NpmscController.load();
  }
  static resizeDisplay() {
    HtpncController.resizeDisplay();
    HdncController.resizeDisplay();
    HsncController.resizeDisplay();
    HeccController.resizeDisplay();
    /* -------------------------------------------------- */
    NpmhcController.resizeDisplay();
    NpmscController.resizeDisplay();
  }
  static resizeSensor() {
    HdncController.resizeSensor();
    HsncController.resizeSensor();
  }
}
class BlfHandler {

}
/* class BlfGet {
  static getBlfRoot() {
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      BlfAccessor.blfCache,
      BlfConfig.blfRoot
    );
    return saveVerifyGroup;
  }
  static getBlfGroup() {
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      BlfAccessor.blfCache,
      BlfConfig.blfGroup
    );
    return saveVerifyGroup;
  }
} */
export {
  BlfAccessor,
  BlfController
};
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
