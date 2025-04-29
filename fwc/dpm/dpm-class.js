/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* ================================================== */
import {
  DpmacController,
  DpmscController,
  DpmfcController
} from "./dpm-hub.js";
/* ================================================== */
class DpmController {
  static init() {
    DpmacController.init();
    DpmscController.init();
    DpmfcController.init();
  }
  static load() {
    DpmacController.load();
    DpmscController.load();
    DpmfcController.load();
  }
  static resizeDisplay() {
    DpmacController.resizeDisplay();
    DpmscController.resizeDisplay();
    DpmfcController.resizeDisplay();
  }
  static resizeSensor() {
    DpmacController.resizeSensor();
    DpmfcController.resizeSensor();
  }
}
/* ================================================== */
export { DpmController };
/* ================================================== */
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
/* ========================= ;FACOOYA; ========================= */