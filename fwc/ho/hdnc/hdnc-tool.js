/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  HdncConfig,
  HsncAccessor
} from "../../fwc-hub.js";
/*  */
class HdncToolCl {
  static clDdtHdncYottaNthLast(lastIndex) {
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
    /* const hdncYottaRectCalc = 
      (hdncYottaRect.right - (hdncYottaRect.width / 2)) + (10 * 16); */
    
    const clData = "cl-ddt-hdnc-y-handler-nth-last";
    /*  */
    if (offsetHtmlRight < offsetHdncRight && HsncAccessor.isActiveHsnc) {
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
}
class HdncTool {
  static clDdtHdncYottaNthLast(lastIndex) {
    HdncToolCl.clDdtHdncYottaNthLast(lastIndex);
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