/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* ================================================== */
import { CoreConfig } from "./core-config.js";
import { CoreController } from "./core-class.js";
/* -------------------------------------------------- */
import { HeaderController } from "../h/h-class.js";
import { FooterController } from "../f/f-class.js";
import { NpmController } from "../npm/npm-class.js";
import { DpmController } from "../dpm/dpm-class.js";
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
    CoreController.init();
    /* -------------------------------------------------- */
    HeaderController.init();
    /* -------------------------------------------------- */
    FooterController.init();
    /* -------------------------------------------------- */
    switch (CoreConfig.pageType) {
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
    CoreController.load();
    /* -------------------------------------------------- */
    HeaderController.load();
    /* -------------------------------------------------- */
    FooterController.load();
    /* -------------------------------------------------- */
    switch (CoreConfig.pageType) {
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
    CoreController.resizeDisplay();
    /* -------------------------------------------------- */
    HeaderController.resizeDisplay();
    /* -------------------------------------------------- */
    FooterController.resizeDisplay();
    /* -------------------------------------------------- */
    switch (CoreConfig.pageType) {
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
    CoreController.resizeSensor();
    /* -------------------------------------------------- */
    HeaderController.resizeSensor();
    /* -------------------------------------------------- */
    FooterController.resizeSensor();
    /* -------------------------------------------------- */
    switch (CoreConfig.pageType) {
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