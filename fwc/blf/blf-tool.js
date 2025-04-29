/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  BlfConfig,
  FaucConfig,
  FoscConfig
} from "../fwc-hub.js";
/*  */
class BlfToolCalc {
  static calcBlfYottaFo() {
    const {
      blfYottaFo
    } = BlfConfig.getBlfGroup();
    const {
      faucYottaText
    } = FaucConfig.getFaucGroup();
    const {
      faucPetaText
    } = FaucConfig.getFaucYbGroup();
    const {
      foscYottaText
    } = FoscConfig.getFoscGroup();
    const {
      foscPetaText
    } = FoscConfig.getFoscYbGroup();
    /*  */
    /* Padding + Margin + Padding */
    const marginWidth = (2 + 2 + 2) * 16;
    let faucMaxWidth = faucYottaText.clientWidth;
    let foscMaxWidth = foscYottaText.clientWidth;
    for (let ybi = 0; ybi < faucPetaText.length; ybi++) {
      const faucPetaTextWidth = faucPetaText[ybi].clientWidth;
      if (faucMaxWidth < faucPetaTextWidth) {
        faucMaxWidth = faucPetaTextWidth;
      }
    }
    for (let ybi = 0; ybi < foscPetaText.length; ybi++) {
      const foscPetaTextWidth = foscPetaText[ybi].clientWidth;
      if (faucMaxWidth < foscPetaTextWidth) {
        foscMaxWidth = foscPetaTextWidth;
      }
    }
    const calcWidth = faucMaxWidth + foscMaxWidth + marginWidth;
    const innerWidth = window.innerWidth;
    /*  */
    const clData = "calc-blf-y-fo-tool";
    let clType = "remove";
    if (innerWidth < calcWidth) {
      clType = "add";
    }
    /*  */
    blfYottaFo.classList[clType](clData);
  }
}
class BlfTool {
  static calcBlfYottaFo() {
    BlfToolCalc.calcBlfYottaFo();
  }
}
export {
  BlfTool
};
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */