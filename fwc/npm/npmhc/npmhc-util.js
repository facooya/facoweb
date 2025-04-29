/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  NpmhcConfig,
  NpmscConfig
} from "../../fwc-hub.js";
class NpmhcUtilSet {
  static setNpmhcTno(pIndex) {
    const {
      npmhcTeraTnoText,
      npmhcTeraTnoGro
    } = NpmhcConfig.getNpmhcTnoGroup();
    const {
      npmscY
    } = NpmscConfig.getNpmscGroup();
    /*  */
    const clData = "cl-window-on-hash-change-handler";
    const clDataExaTno = "cl-ddt-npmhc-e-tno-handler";
    /* Init */
    for (let ebi = 0; ebi < npmhcTeraTnoText.length; ebi++) {
      npmhcTeraTnoText[ebi].classList.remove(clData, clDataExaTno);
      npmhcTeraTnoGro[ebi].classList.remove(clData);
      npmscY[ebi].classList.remove(clData);
    }
    /* Set */
    npmhcTeraTnoText[pIndex].classList.add(clData);
    npmhcTeraTnoGro[pIndex].classList.add(clData);
    npmscY[pIndex].classList.add(clData);
  }
}
class NpmhcUtil {
  static setNpmhcTno(pIndex) {
    NpmhcUtilSet.setNpmhcTno(pIndex);
  }
}
export {
  NpmhcUtil
};
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */