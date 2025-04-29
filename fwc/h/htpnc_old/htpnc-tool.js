/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  HtpncConfig
} from "../../fwc-hub.js";
class HtpncToolCl {
  static clHtpncExaHdngoGro(isActive) {
    const {
      htpncExaHdngoGro
    } = HtpncConfig.getHtpncHdngoGroup();
    /*  */
    const clData = "cl-htpnc-e-hdngo-gro-tool";
    let clType = "remove";
    if (isActive) {
      clType = "add";
    }
    /*  */
    for (let ebi = 0; ebi < htpncExaHdngoGro.length; ebi++) {
      htpncExaHdngoGro[ebi].classList[clType](clData);
    }
  }
  static clHtpncExaHsngoGro(isActive) {
    const {
      htpncExaHsngoGro
    } = HtpncConfig.getHtpncHsngoGroup();
    /*  */
    const clData = "cl-htpnc-e-hsngo-gro-tool";
    let clType = "remove";
    if (isActive) {
      clType = "add";
    }
    /*  */
    for (let ebi = 0; ebi < htpncExaHsngoGro.length; ebi++) {
      htpncExaHsngoGro[ebi].classList[clType](clData);
    }
  }
  /* ========== */
  static clHtpncPetaLgoLogo() {
    const {
      htpncZettaLgo,
      htpncPetaLgoLogo
    } = HtpncConfig.getHtpncLgoGroup();
    const htpncZettaLgoWidth = htpncZettaLgo.clientWidth;
    const devLogoRemWidth = 4;
    const taIconRemWidth = 0.5;
    const logoRemWidth = 10;
    const calcWidth = (devLogoRemWidth + taIconRemWidth + logoRemWidth) * 16;
    /*  */
    if (htpncZettaLgoWidth < calcWidth) {
      htpncPetaLgoLogo.classList.add("cl-htpnc-p-lgo-logo-tool");
    } else {
      htpncPetaLgoLogo.classList.remove("cl-htpnc-p-lgo-logo-tool");
    }
  }
}
class HtpncTool {
  static clHtpncExaHdngoGro(isActive) {
    HtpncToolCl.clHtpncExaHdngoGro(isActive);
  }
  static clHtpncExaHsngoGro(isActive) {
    HtpncToolCl.clHtpncExaHsngoGro(isActive);
  }
  static clHtpncPetaLgoLogo() {
    HtpncToolCl.clHtpncPetaLgoLogo();
  }
}
export {
  HtpncTool
};
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */