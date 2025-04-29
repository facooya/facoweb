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
  static tocHashReplace(hash) {
    DpmacLogic.tocHashReplace(hash);
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
  /* static tocClick(event) {
    const currentTarget = event.currentTarget;
    const hash = currentTarget.hash;
    /* const hash = window.location.hash; 
    const hashElement = document.querySelector(hash);
    history.replaceState(null, null, hash);
    hashElement.scrollIntoView();
  } */
}
/* ================================================== */
class DpmacLogic {
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