/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import { DpmacConfig } from "./dpmac-config.js";
/* ================================================== */
class DpmacAccessor {
  static indexLocation() {
    DpmacHandler.indexLocation();
  }
}
/* ================================================== */
class DpmacController {
  static init() {
    DpmacManager.init();
  }
  static load() {
    DpmacManager.load();
  }
  static resizeDisplay() {
    DpmacManager.resizeDisplay();
  }
}
/* ================================================== */
class DpmacManager {
  static init() {

  }
  static load() {
    DpmacConfig.setTocIndexPosition();
  }
  static resizeDisplay() {

  }
}
/* ================================================== */
class DpmacHandler {
  static indexLocation() {
    console.log(window.scrollY);
  }
}
/* ================================================== */
export { DpmacAccessor, DpmacController };
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */