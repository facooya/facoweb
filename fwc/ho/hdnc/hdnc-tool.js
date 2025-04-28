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
  static scrollManager(displayType, ybIndex) {
    /* const {
      hdncR
    } = HdncConfig.getHdncRoot();
    const {
      hdncYottaSfroTo,
      hdncYottaSfroBo
    } = HdncConfig.getHdncYottaGroup();
    const {
      hdncExaBlo,
      hdncExaBloSgroTo,
      hdncExaBloSgroBo
    } = HdncConfig.getHdncBloGroup();
    const hdncTo = [hdncYottaSfroTo, hdncExaBloSgroTo[ybIndex]];
    const hdncBo = [hdncYottaSfroBo, hdncExaBloSgroBo[ybIndex]];
    /*  
    const innerHeight = window.innerHeight;
    const calcHeight = innerHeight / 10;
    const scrollBuffer = 8;
    let scrollTop = 0;
    let scrollHeight = 0;
    let clientHeight = 0;
    let setType = 0;
    let setToHeight = "";
    let setBoHeight = "";
    let toType = "remove";
    let boType = "remove";
    /*  
    switch (displayType) {
      case 1: {
        scrollTop = hdncR.scrollTop;
        scrollHeight = hdncR.scrollHeight;
        clientHeight = hdncR.clientHeight;
        break;
      }
      case 2: {
        setType = 1;
        scrollTop = hdncExaBlo[ybIndex].scrollTop;
        scrollHeight = hdncExaBlo[ybIndex].scrollHeight;
        clientHeight = hdncExaBlo[ybIndex].clientHeight;
        break;
      }
      case 3: {
        setType = 1;
        scrollTop = hdncExaBlo[ybIndex].scrollTop;
        scrollHeight = hdncExaBlo[ybIndex].scrollHeight;
        clientHeight = hdncExaBlo[ybIndex].clientHeight;
        break;
      }
    } */
    /*  */
    /* if (scrollTop > scrollBuffer) {
      setToHeight = calcHeight + "px";
      toType = "add";
    }
    if (scrollTop + clientHeight + scrollBuffer < scrollHeight) {
      setBoHeight = calcHeight + "px";
      boType = "add";
    } */
    /*  */
    /* hdncTo[setType].style.height = setToHeight;
    hdncBo[setType].style.height = setBoHeight; */
    /*  */
    /* hdncExaBloSgroTo[ybIndex].classList[toType]();
    hdncExaBloSgroBo[ybIndex].classList[boType](); */
    /* hdncYottaSfroTo.style.height = setToHeight;
    hdncYottaSfroBo.style.height = setBoHeight; */
    /*  */
    /*  */
    /* const innerHeight = window.innerHeight;
    const calcHeight = innerHeight / 10; */
    /* const setHeight = calcHeight + "px"; */
    /*  */
    /* let setToHeight = "";
    let setBoHeight = ""; */
    /* if (toType) {
      setToHeight = calcHeight + "px";
    } else {
      setToHeight = "";
    }
    if (boType) {
      setBoHeight = calcHeight + "px";
    } else {
      setBoHeight = "";
    } */
    /*  */
  }
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
  /* static scrollManager(displayType, ybIndex) {
    HdncToolManager.scrollManager(displayType, ybIndex);
  } */
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