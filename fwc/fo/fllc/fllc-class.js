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
    /* if (FwaConfig.currentDisplayType === 1) {
      const {
        fllcYottaFo,
        fllcZettaFoTaIcon,
        fllcZettaFoLogo
      } = FllcConfig.getFllcFoGroup();
      const taIconRemWidth = 3;
      const logoRemWidth = 15;
      /* centerMargin + leftPadding + rightPadding 
      const remBuffer = 1 + 2 + 2;
      const calcFoWidth = (taIconRemWidth + logoRemWidth + remBuffer) * 16;
      /*  
      const clData = "cl-fllc-y-fo-tool";
      let clType = "remove";
      const innerWidth = window.innerWidth;
      if (innerWidth < calcFoWidth) {
        /* const calcRate = (innerWidth - (remBuffer * 16)) / 6;
        let calcTaIconWidth = calcRate;
        let calcLogoWidth = calcRate * 5;
        const setTaIconWidth = calcTaIconWidth + "px";
        const setLogoWidth = calcLogoWidth + "px"; 
        /* fllcYottaFo.style.margin = "0rem 0rem 1.5rem 0rem";
        fllcZettaFoTaIcon.style.width = "2.5rem";
        fllcZettaFoTaIcon.style.height = "2.5rem";
        fllcZettaFoLogo.style.width = "12.5rem";
        fllcZettaFoLogo.style.height = "2.5rem"; 
        clType = "add";
      } else {
        /* fllcYottaFo.style.margin = "";
        fllcZettaFoTaIcon.style.width = "";
        fllcZettaFoTaIcon.style.height = "";
        fllcZettaFoLogo.style.width = "";
        fllcZettaFoLogo.style.height = ""; 
      }
      fllcYottaFo.classList[clType](clData);
      fllcZettaFoTaIcon.classList[clType](clData);
      fllcZettaFoLogo.classList[clType](clData);
    } */
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