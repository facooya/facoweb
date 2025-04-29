/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  BlfConfig
} from "../fwc-hub.js";
import {
  BlfTool
} from "./blf-tool.js";
/*  */
class BlfAccessor {

}
class BlfController {
  static init() {
    BlfManager.init();
  }
  static load() {
    BlfManager.load();
  }
  static resizeDisplay() {
    BlfManager.resizeDisplay();
  }
  static resizeSensor() {
    BlfManager.resizeSensor();
  }
}
class BlfManager {
  static init() {

  }
  static load() {
    BlfTool.calcBlfYottaFo();
  }
  static resizeDisplay() {
    BlfManager.resizeSensor();
  }
  static resizeSensor() {
    BlfTool.calcBlfYottaFo();
  }
}
class BlfHandler {

}
export {
  BlfAccessor,
  BlfController
};
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
