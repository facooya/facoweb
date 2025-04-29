/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */

import {
  BlfConfig,
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
  NpmscController,
  DpmhcController,
  DpmacController,
  DpmscController,
  DpmfcController
} from "./fwc-hub.js";
/*  */
/* ================================================== */
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
    switch (BlfConfig.currentPageType) {
      case 1: {
        break;
      }
      case 2: {
        NpmhcController.init();
        NpmscController.init();
        break;
      }
      case 3: {
        DpmhcController.init();
        DpmacController.init();
        DpmscController.init();
        DpmfcController.init();
        break;
      }
    }
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
    switch (BlfConfig.currentPageType) {
      case 1: {
        break;
      }
      case 2: {
        NpmhcController.load();
        NpmscController.load();
        break;
      }
      case 3: {
        DpmhcController.load();
        DpmacController.load();
        DpmscController.load();
        DpmfcController.load();
        break;
      }
    }
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
    switch (BlfConfig.currentPageType) {
      case 1: {
        break;
      }
      case 2: {
        NpmhcController.resizeDisplay();
        NpmscController.resizeDisplay();
        break;
      }
      case 3: {
        DpmhcController.resizeDisplay();
        DpmacController.resizeDisplay();
        DpmscController.resizeDisplay();
        DpmfcController.resizeDisplay();
        break;
      }
    }
  }
  static resizeSensor() {
    BlfController.resizeSensor();
    /* -------------------------------------------------- */
    HtpncController.resizeSensor();
    HdncController.resizeSensor();
    HsncController.resizeSensor();
    HeccController.resizeSensor();
    /* -------------------------------------------------- */
    /* FascController.resizeSensor();
    FaucController.resizeSensor();
    FoscController.resizeSensor(); */
    FllcController.resizeSensor();
    /* -------------------------------------------------- */
    switch (BlfConfig.currentPageType) {
      case 1: {
        break;
      }
      case 2: {
        /* NpmhcController.resizeSensor();
        NpmscController.resizeSensor(); */
        break;
      }
      case 3: {
        /* DpmhcController.resizeSensor();
        DpmscController.resizeSensor(); */
        DpmfcController.resizeSensor();
        break;
      }
    }
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