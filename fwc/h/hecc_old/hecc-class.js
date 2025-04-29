/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  HeccConfig,
  HeccUtil
} from "../../fwc-hub.js";
/*  */
class HeccAccessor {
  static windowScrollHandler() {
    HeccHandler.windowScroll();
  }
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
  static resizeSensor() {
    HeccManager.resizeSensor();
  }
}
class HeccManager {
  static init() {
    /* const {
      heccR
    } = HeccConfig.getHeccRoot(); */
    /*  */
    /* heccR.timerId = null; */
  }
  static load() {
    
  }
  static resizeDisplay() {

  }
  static resizeSensor() {
    HeccHandler.windowScroll();
  }
  static event() {
    window.addEventListener("scroll", HeccHandler.windowScroll);
  }
}
class HeccHandler {
  static windowScroll() {
    /* const {
      heccR
    } = HeccConfig.getHeccRoot(); */
    /*  */
    HeccUtil.updateHeccZettaPbo();
    HeccUtil.setHeccZettaPbo();
    /* clearTimeout(heccR.timerId);
    heccR.timerId = setTimeout(
      test,
      50
    );
    function test() {
      HeccUtil.updateHeccZettaPbo();
      HeccUtil.setHeccZettaPbo();
      console.log("hi");
    } */
  }
}
export {
  HeccAccessor,
  HeccController
};
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */