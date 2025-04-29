/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  FllcConfig
} from "../../fwc-hub.js";
/*  */
class FllcToolCl {
  static clFllcYottaFo() {
    const {
      fllcYottaFo,
      fllcZettaFoTaIcon,
      fllcZettaFoLogo
    } = FllcConfig.getFllcFoGroup();
    const taIconRemWidth = 3;
    const logoRemWidth = 15;
    /* centerMargin + leftPadding + rightPadding */
    const remBuffer = 1 + 2 + 2;
    const calcFoWidth = (taIconRemWidth + logoRemWidth + remBuffer) * 16;
    /*  */
    const clData = "cl-fllc-y-fo-tool";
    let clType = "remove";
    const innerWidth = window.innerWidth;
    if (innerWidth < calcFoWidth) {
      clType = "add";
    }
    fllcYottaFo.classList[clType](clData);
    fllcZettaFoTaIcon.classList[clType](clData);
    fllcZettaFoLogo.classList[clType](clData);
  }
}
class FllcTool {
  static clFllcYottaFo() {
    FllcToolCl.clFllcYottaFo();
  }
}
export {
  FllcTool
};
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */