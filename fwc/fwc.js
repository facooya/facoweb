/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */

import {
  BlfController,
  HtpncController,
  HdncController,
  HsncController,
  HeccController,
  FascController,
  FaucController,
  FoscController,
  FllcController,
  NpmhcController,
  NpmscController
} from "./fwc-hub.js";
/*  */
class FwcController {
  static init() {
    FwcManager.init();
  }
  static load() {
    FwcManager.load();
  }
  static resizeDisplay() {
    FwcManager.resizeDisplay();
  }
  static resizeSensor() {
    FwcManager.resizeSensor();
  }
}
/* ================================================== */
class FwcManager {
  static init() {
    BlfController.init();
    /* -------------------------------------------------- */
    HtpncController.init();
    HdncController.init();
    HsncController.init();
    HeccController.init();
    /* -------------------------------------------------- */
    FascController.init();
    FaucController.init();
    FoscController.init();
    FllcController.init();
    /* -------------------------------------------------- */
    NpmhcController.init();
    NpmscController.init();
  }
  static load() {
    BlfController.load();
    /* -------------------------------------------------- */
    HtpncController.load();
    HdncController.load();
    HsncController.load();
    HeccController.load();
    /* -------------------------------------------------- */
    FascController.load();
    FaucController.load();
    FoscController.load();
    FllcController.load();
    /* -------------------------------------------------- */
    NpmhcController.load();
    NpmscController.load();
  }
  static resizeDisplay() {
    BlfController.resizeDisplay();
    /* -------------------------------------------------- */
    HtpncController.resizeDisplay();
    HdncController.resizeDisplay();
    HsncController.resizeDisplay();
    HeccController.resizeDisplay();
    /* -------------------------------------------------- */
    FascController.resizeDisplay();
    FaucController.resizeDisplay();
    FoscController.resizeDisplay();
    FllcController.resizeDisplay();
    /* -------------------------------------------------- */
    NpmhcController.resizeDisplay();
    NpmscController.resizeDisplay();
  }
  static resizeSensor() {
    BlfController.resizeSensor();
    /* -------------------------------------------------- */
    HtpncController.resizeSensor();
    HdncController.resizeSensor();
    HsncController.resizeSensor();
    HeccController.resizeSensor();
    /* -------------------------------------------------- */
    FllcController.resizeSensor();
  }
}
export {
  FwcController
};
/*  */
FwcController.init();
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */