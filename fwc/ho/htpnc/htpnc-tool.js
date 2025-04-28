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
}
class HtpncTool {
  static clHtpncExaHdngoGro(isActive) {
    HtpncToolCl.clHtpncExaHdngoGro(isActive);
  }
  static clHtpncExaHsngoGro(isActive) {
    HtpncToolCl.clHtpncExaHsngoGro(isActive);
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