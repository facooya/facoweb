/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  FwcAccessor,
  HeccConfig,
  HeccUtil
} from "../../fwc-hub.js";
/*  */
class HeccAccessor {
  /* static heccCache = {};
  static getHeccPboGroup() {
    return HeccConfig.getHeccPboGroup();
  }
  static getHeccNooGroup() {
    return HeccConfig.getHeccNooGroup();
  } */
}
class HeccController {
  static init() {
    HeccConfig.heccGenerate();
    HeccManager.init();
  }
  static load() {
    HeccManager.load();
    HeccManager.event();
  }
  static resizeDisplay() {
    HeccManager.resizeDisplay();
  }
}
class HeccManager {
  static init() {

  }
  static load() {
    
  }
  static resizeDisplay() {

  }
  static event() {
    window.addEventListener("scroll", HeccHandler.windowScroll);
  }
}
class HeccHandler {
  static windowScroll() {
    HeccUtil.updateHeccZettaPbo();
    HeccUtil.setHeccZettaPbo();
  }
}
export {
  HeccAccessor,
  HeccController
}
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */