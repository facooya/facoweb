/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* import {
  TpncController
} from "./nc/tpnc/tpnc-class.js";
import {
  SncController
} from "./nc/snc/snc-class.js"; */
import {
  TpncController,
  DncController,
  SncController,
  EccController
} from "./fwc-hub.js";

class FwcController {
  static process() {
    TpncController.process();
    DncController.process();
    SncController.process();
    EccController.process();
  }
  static processOnLoad() {
    TpncController.processOnLoad();
    DncController.processOnLoad();
    SncController.loadProcess();
  }
  static processOnResize() {
    TpncController.processOnResize();
    DncController.processOnResize();
    SncController.resizeProcess();
  }
}
class FwcUtility {
  static getGenerateElement(elementTag, setClass) {
    const elementData = document.createElement(elementTag);
    elementData.setAttribute("class", setClass);
    return elementData;
  }
}
export {
  FwcController,
  FwcUtility
};
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */