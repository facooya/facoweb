/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */

import {
  BodyConfig,
  BodyController,
  HtbcController,
  HdncController,
  HsncController,
  FascController,
  FngcController,
  FllcController,
  NpmhcController,
  NpmscController,
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
    BodyController.init();
    /* -------------------------------------------------- */
    HtbcController.init();
    HdncController.init();
    HsncController.init();
    /* HeccController.init(); */
    /* -------------------------------------------------- */
    FascController.init();
    FngcController.init();
    FllcController.init();
    /* -------------------------------------------------- */
    switch (BodyConfig.pageType) {
      case 1: {
        break;
      }
      case 2: {
        NpmhcController.init();
        NpmscController.init();
        break;
      }
      case 3: {
        DpmacController.init();
        DpmscController.init();
        DpmfcController.init();
        break;
      }
    }
  }
  static load() {
    BodyController.load();
    /* -------------------------------------------------- */
    HtbcController.load();
    HdncController.load();
    HsncController.load();
    /* HeccController.load(); */
    /* -------------------------------------------------- */
    FascController.load();
    FngcController.load();
    FllcController.load();
    /* -------------------------------------------------- */
    switch (BodyConfig.pageType) {
      case 1: {
        break;
      }
      case 2: {
        NpmhcController.load();
        NpmscController.load();
        break;
      }
      case 3: {
        DpmacController.load();
        DpmscController.load();
        DpmfcController.load();
        break;
      }
    }
  }
  static resizeDisplay() {
    BodyController.resizeDisplay();
    /* -------------------------------------------------- */
    HtbcController.resizeDisplay();
    HdncController.resizeDisplay();
    HsncController.resizeDisplay();
    /* HeccController.resizeDisplay(); */
    /* -------------------------------------------------- */
    FascController.resizeDisplay();
    FngcController.resizeDisplay();
    FllcController.resizeDisplay();
    /* -------------------------------------------------- */
    switch (BodyConfig.pageType) {
      case 1: {
        break;
      }
      case 2: {
        NpmhcController.resizeDisplay();
        NpmscController.resizeDisplay();
        break;
      }
      case 3: {
        DpmacController.resizeDisplay();
        DpmscController.resizeDisplay();
        DpmfcController.resizeDisplay();
        break;
      }
    }
  }
  static resizeSensor() {
    BodyController.resizeSensor();
    /* -------------------------------------------------- */
    HtbcController.resizeSensor();
    HdncController.resizeSensor();
    HsncController.resizeSensor();
    /* HeccController.resizeSensor(); */
    /* -------------------------------------------------- */
    /* FascController.resizeSensor();
    FaucController.resizeSensor();
    FoscController.resizeSensor(); */
    FllcController.resizeSensor();
    /* -------------------------------------------------- */
    switch (BodyConfig.pageType) {
      case 1: {
        break;
      }
      case 2: {
        /* NpmhcController.resizeSensor();
        NpmscController.resizeSensor(); */
        break;
      }
      case 3: {
        DpmfcController.resizeSensor();
        break;
      }
    }
  }
}
export { FwcController };
/* ================================================== */
FwcController.init();
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */