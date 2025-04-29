/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import { FngcConfig } from "./fngc-config.js";
/* ================================================== */
class FngcAccessor {

}
class FngcController {
  static init() {
    FngcManager.init();
  }
  static load() {
    FngcManager.load();
  }
  static resizeDisplay() {
    FngcManager.resizeDisplay();
  }
  static resizeSensor() {
    FngcManager.resizeSensor();
  }
}
class FngcManager {
  static init() {
    FngcConfig.generate();
  }
  static load() {

  }
  static resizeDisplay() {

  }
  static resizeSensor() {

  }
}
class FngcHandler {

}
/* ================================================== */
export { FngcAccessor, FngcController };
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */