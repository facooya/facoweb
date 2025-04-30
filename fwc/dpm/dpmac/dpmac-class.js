/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import { DpmacConfig } from "./dpmac-config.js";
/* ================================================== */
class DpmacAccessor {
  static tocHashReplace(hash) {
    DpmacLogic.tocHashReplace(hash);
  }
  static updateCurrentToc() {
    DpmacConfig.updateCurrentToc();
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
  static resizeSensor() {
    DpmacManager.resizeSensor();
  }
}
/* ================================================== */
class DpmacManager {
  static init() {

  }
  static load() {
    DpmacConfig.updateTocPosition();
  }
  static resizeDisplay() {
    DpmacConfig.updateTocPosition();
  }
  static resizeSensor() {
    DpmacConfig.updateTocPosition();
  }
}
/* ================================================== */
class DpmacHandler {
  
}
/* ================================================== */
class DpmacLogic {
  /* Delete */
  static tocHashReplace(hash) {
    if (hash != null && hash[0] === "#") {
      const hashElement = document.querySelector(hash);
      if (hashElement) {
        hashElement.scrollIntoView();
        history.replaceState(null, null, hash);
      }
    }
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