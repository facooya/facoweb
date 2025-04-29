/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* ================================================== */
import {
  HtbcController,
  HdncController,
  HsncController
} from "./h-hub.js";
/* ================================================== */
class HeaderController {
  static init() {
    HtbcController.init();
    HdncController.init();
    HsncController.init();
  }
  static load() {
    HtbcController.load();
    HdncController.load();
    HsncController.load();
  }
  static resizeDisplay() {
    HtbcController.resizeDisplay();
    HdncController.resizeDisplay();
    HsncController.resizeDisplay();
  }
  static resizeSensor() {
    HtbcController.resizeSensor();
    HdncController.resizeSensor();
    HsncController.resizeSensor();
  }
}
/* ================================================== */
export { HeaderController };
/* ================================================== */
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
/* ========================= ;FACOOYA; ========================= */