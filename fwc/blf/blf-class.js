/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  BlfConfig
} from "../fwc-hub.js";
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
    const {
      blfYottaFo
    } = BlfConfig.getBlfGroup();
    const {
      blfFoFaucR,
      blfFoFsdcR
    } = BlfConfig.getBlfFoRoot();
    /*  */
    /* const faucRootRect = blfFoFaucR.getBoundingClientRect();
    const fsdcRootRect = blfFoFsdcR.getBoundingClientRect();
    blfYottaFo.style.gridTemplateAreas = "\"fsmc fsmc\" \"fauc fsdc\" \"fllc fllc\""; */
  }
  static resizeDisplay() {

  }
  static resizeSensor() {
    const {
      blfYottaFo
    } = BlfConfig.getBlfGroup();
    const {
      blfFoFaucR,
      blfFoFsdcR
    } = BlfConfig.getBlfFoRoot();
    const faucRootRect = blfFoFaucR.getBoundingClientRect();
    const fsdcRootRect = blfFoFsdcR.getBoundingClientRect();
    const wiw = window.innerWidth;
    /* if (fsdcRootRect.right > wiw) {
      blfYottaFo.style.gridTemplateAreas = "\"fsmc\" \"fauc\" \"fsdc\" \"fllc\"";
    }
    if (faucRootRect.width + fsdcRootRect.width < wiw) {
      blfYottaFo.style.gridTemplateAreas = "\"fsmc fsmc\" \"fauc fsdc\" \"fllc fllc\"";
    } */
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
