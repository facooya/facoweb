/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  HtpncConfig,
  HdncConfig
} from "../../fwc-hub.js";
/*  */
class HdncToolManager {
  
}
class HdncToolCl {
  static clDdtHdncYottaNthLast(lastIndex) {
    const {
      htpncZettaHsngo
    } = HtpncConfig.getHtpncHsngoGroup();
    const {
      hdncY
    } = HdncConfig.getHdncGroup();
    const {
      hdncExaBlo
    } = HdncConfig.getHdncBloGroup();
    /*  */
    const rightRemBuffer = 1;
    const hsncRemWidth = 20;
    const calcRightBuffer = (hsncRemWidth + rightRemBuffer) * 16;
    /*  */
    const exaBloRemWidth = 20;
    const calcExaBloWidth = exaBloRemWidth * 16;
    /*  */
    const htmlElement = document.documentElement;
    const htmlElementRect = htmlElement.getBoundingClientRect();
    const offsetHtmlRight = htmlElementRect.right - calcRightBuffer;
    /*  */
    const hdncYottaRect = hdncY[lastIndex].getBoundingClientRect();
    const deltaHdncWidth = calcExaBloWidth - hdncYottaRect.width;
    const offsetHdncRight = hdncYottaRect.right + deltaHdncWidth;
    /*  */
    const clData = "cl-ddt-hdnc-y-handler-nth-last";
    /*  */
    if (offsetHtmlRight < offsetHdncRight && htpncZettaHsngo.isActive) {
      hdncExaBlo[lastIndex].classList.add(clData);
    } else {
      hdncExaBlo[lastIndex].classList.remove(clData);
    }
  }
}
class HdncToolReset {
  static resetDdtHdncExaBloScroll(pHdncHandler, ybIndex) {
    const {
      hdncExaBlo,
      hdncExaBloSgroTo,
      hdncExaBloSgroBo
    } = HdncConfig.getHdncBloGroup();
    const clData = "cl-ddt-hdnc-e-blo-scroll-handler"
    /*  */
    hdncExaBlo[ybIndex].removeEventListener(
      "scroll",
      pHdncHandler.ddtHdncExaBloScroll
    );
    /*  */
    hdncExaBloSgroTo[ybIndex].classList.remove(clData);
    hdncExaBloSgroBo[ybIndex].classList.remove(clData);
  }
  static resetTdtHdncExaBloScroll(pHdncHandler, ybIndex) {
    const {
      hdncExaBlo,
      hdncExaBloSgroTo,
      hdncExaBloSgroBo
    } = HdncConfig.getHdncBloGroup();
    const clData = "cl-tdt-hdnc-e-blo-scroll-handler";
    hdncExaBlo[ybIndex].removeEventListener(
      "scroll",
      pHdncHandler.tdtHdncExaBloScroll
    );
    hdncExaBloSgroTo[ybIndex].classList.remove(clData);
    hdncExaBloSgroBo[ybIndex].classList.remove(clData);
  }
}
class HdncTool {
  static clDdtHdncYottaNthLast(lastIndex) {
    HdncToolCl.clDdtHdncYottaNthLast(lastIndex);
  }
  static resetTdtHdncExaBloScroll(pHdncHandler, ybIndex) {
    HdncToolReset.resetTdtHdncExaBloScroll(pHdncHandler, ybIndex);
  }
  static resetDdtHdncExaBloScroll(pHdncHandler, ybIndex) {
    HdncToolReset.resetDdtHdncExaBloScroll(pHdncHandler, ybIndex);
  }
}
export {
  HdncTool
};
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */