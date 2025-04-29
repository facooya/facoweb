/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* ================================================== */
import {
  BodyConfig,
  BodyController
} from "./fwc-hub.js";
/* -------------------------------------------------- */
import { HeaderController } from "./h/h-class.js";
import { FooterController } from "./f/f-class.js";
import { NpmController } from "./npm/npm-class.js";
import { DpmController } from "./dpm/dpm-class.js";
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
    HeaderController.init();
    /* -------------------------------------------------- */
    FooterController.init();
    /* -------------------------------------------------- */
    switch (BodyConfig.pageType) {
      case 1: {
        break;
      }
      case 2: {
        NpmController.init();
        break;
      }
      case 3: {
        DpmController.init();
        break;
      }
    }
  }
  static load() {
    BodyController.load();
    /* -------------------------------------------------- */
    HeaderController.load();
    /* -------------------------------------------------- */
    FooterController.load();
    /* -------------------------------------------------- */
    switch (BodyConfig.pageType) {
      case 1: {
        break;
      }
      case 2: {
        NpmController.load();
        break;
      }
      case 3: {
        DpmController.load();
        break;
      }
    }
  }
  static resizeDisplay() {
    BodyController.resizeDisplay();
    /* -------------------------------------------------- */
    HeaderController.resizeDisplay();
    /* -------------------------------------------------- */
    FooterController.resizeDisplay();
    /* -------------------------------------------------- */
    switch (BodyConfig.pageType) {
      case 1: {
        break;
      }
      case 2: {
        NpmController.resizeDisplay();
        break;
      }
      case 3: {
        DpmController.resizeDisplay();
        break;
      }
    }
  }
  static resizeSensor() {
    BodyController.resizeSensor();
    /* -------------------------------------------------- */
    HeaderController.resizeSensor();
    /* -------------------------------------------------- */
    FooterController.resizeSensor();
    /* -------------------------------------------------- */
    switch (BodyConfig.pageType) {
      case 1: {
        break;
      }
      case 2: {
        NpmController.resizeSensor();
        break;
      }
      case 3: {
        DpmController.resizeSensor();
        break;
      }
    }
  }
}
export { FwcController };
/* ================================================== */
window.addEventListener("DOMContentLoaded", () => FwcController.init());
/* ================================================== */
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
/* ========================= ;FACOOYA; ========================= */