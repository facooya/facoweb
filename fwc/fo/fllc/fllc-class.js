/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  FwaConfig
} from "../../../fwa/fwa-config.js";
import {
  FllcConfig
} from "../../fwc-hub.js";
import {
  FllcTool
} from "./fllc-tool.js";
/*  */
class FllcAccessor {

}
class FllcController {
  static init() {
    FllcConfig.fllcGenerate();
    FllcManager.init();
  }
  static load() {
    FllcManager.load();
  }
  static resizeDisplay() {
    FllcManager.resizeDisplay();
  }
  static resizeSensor() {
    FllcManager.resizeSensor();
  }
}
class FllcManager {
  static init() {

  }
  static load() {
    if (FwaConfig.currentDisplayType === 1) {
      FllcTool.clFllcYottaFo();
    }
  }
  static resizeDisplay() {
    FllcManager.resizeSensor();
  }
  static resizeSensor() {
    if (FwaConfig.currentDisplayType === 1) {
      FllcTool.clFllcYottaFo();
    }
  }
}
export {
  FllcAccessor,
  FllcController
};
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */