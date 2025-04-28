/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  FwaConfig
} from "../../../fwa/fwa-config.js";
import {
  HdncTool
} from "./hdnc-tool.js";
import {
  FwcAccessor,
  HtpncAccessor,
  HtpncConfig,
  HdncConfig,
  HdncUtil
} from "../../fwc-hub.js";
/*  */
class HdncAccessor {
  /* static pHdncHandler = HdncHandler; */
  static getHdncHandler() {
    return HdncHandler;
  }
  /* =============== :Function: =============== */
  /* static resetHdnc(displayTypeState) {
    HdncUtil.setHdncHandler(HdncHandler, displayTypeState);
  }
  static setHdnc(displayTypeState) {
    HdncUtil.setHdncHandler(HdncHandler, displayTypeState);
  }
  static getHdncRoot() {
    return HdncConfig.getHdncRoot();
  }
  static getHdncGroup() {
    return HdncConfig.getHdncGroup();
  }
  static getHdncBloGroup() {
    return HdncConfig.getHdncBloGroup();
  } */
  /* =============== ;Function; =============== */
}
class HdncController {
  static init() {
    HdncConfig.hdncGenerate();
    HdncManager.init();
  }
  static load() {
    HdncManager.event(true);
    HdncManager.load();
  }
  static resizeDisplay() {
    HdncManager.resizeDisplay();
    HdncManager.event(false);
    HdncManager.event(true);
  }
  static resizeSensor() {
    HdncManager.resizeSensor();
  }
}
class HdncManager {
  static init() {
    const {
      hdncY
    } = HdncConfig.getHdncGroup();
    /*  */
    for (let ybi = 0; ybi < hdncY.length; ybi++) {
      hdncY[ybi].index = ybi;
      hdncY[ybi].isActive = false;
      /*  */
      const {
        hdncPetaBlo,
        hdncGigaBloBgro
      } = HdncConfig.getHdncBloEbGroup(ybi);
      for (let ebi = 0; ebi < hdncPetaBlo.length; ebi++) {
        hdncPetaBlo[ebi].index = ebi;
        hdncGigaBloBgro[ebi].timerId = null;
      }
    }
  }
  /* -------------------------------------------------- */
  static load() {
    switch (FwaConfig.currentDisplayType) {
      case 1: {
        break;
      }
      case 2: {
        const {
          hdncExaBlo
        } = HdncConfig.getHdncBloGroup();
        hdncExaBlo[0].classList.add("cl-tdt-hdnc-z-tlo-handler-nth-first");
        hdncExaBlo[3].classList.add("cl-tdt-hdnc-z-tlo-handler-nth-last");
        /*  */
        HdncUtil.updateHdncExaBloMaxHeight();
        HdncUtil.setHdncExaBloMaxHeight();
        /*  */
        HdncUtil.updateHdncExaBloSgroBoTop();
        HdncUtil.setHdncExaBloSgroBoTop();
        break;
      }
      case 3: {
        HdncUtil.updateHdncExaBloMaxHeight();
        HdncUtil.setHdncExaBloMaxHeight();
        /*  */
        HdncUtil.updateHdncExaBloSgroBoTop();
        HdncUtil.setHdncExaBloSgroBoTop();
        break;
      }
    }
    HdncUtil.updateHdncExaBloGridTemplateRows();
    HdncUtil.setHdncExaBloGridTemplateRows(false);
  }
  /* -------------------------------------------------- */
  static resizeDisplay() {
    const {
      hdncExaBlo
    } = HdncConfig.getHdncBloGroup();
    const {
      hdncYottaSfroTo,
      hdncYottaSfroBo
    } = HdncConfig.getHdncYottaGroup();
    /*  */
    HdncUtil.resetHdncHandler();
    /*  */
    switch (FwaConfig.previousDisplayType) {
      case 1: {
        hdncYottaSfroTo.classList.remove("cl-mdt-hdnc-y-sfro-handler");
        hdncYottaSfroBo.classList.remove("cl-mdt-hdnc-y-sfro-handler");
        break;
      }
      case 2: {
        hdncExaBlo[0].classList.remove("cl-tdt-hdnc-z-tlo-handler-nth-first");
        hdncExaBlo[3].classList.remove("cl-tdt-hdnc-z-tlo-handler-nth-last");
        break;
      }
      case 3: {
        break;
      }
    }
    /*  */
    switch (FwaConfig.currentDisplayType) {
      case 1: {
        for (let ybi = 0; ybi < hdncExaBlo.length; ybi++) {
          hdncExaBlo[ybi].style.maxHeight = "";
        }
        break;
      }
      case 2: {
        hdncExaBlo[0].classList.add("cl-tdt-hdnc-z-tlo-handler-nth-first");
        hdncExaBlo[3].classList.add("cl-tdt-hdnc-z-tlo-handler-nth-last");
        break;
      }
      case 3: {
        break;
      }
    }
    HdncManager.resizeSensor();
  }
  /* -------------------------------------------------- */
  static resizeSensor() {
    const {
      hdncY
    } = HdncConfig.getHdncGroup();
    switch (FwaConfig.currentDisplayType) {
      case 1: {
        for (let ybi = 0; ybi < hdncY.length; ybi++) {
          if (hdncY[ybi].isActive) {
            HdncUtil.updateHdncGigaBloBgroLeft(ybi);
            HdncUtil.updateHdncGigaBloBgroWidth(ybi);
            /*  */
            HdncUtil.setHdncGigaBloBgroLeft(ybi);
            HdncUtil.setHdncGigaBloBgroWidth(ybi, true);
          }
        }
        HdncHandler.mdtHdncRootScroll();
        break;
      }
      case 2: {
        HdncUtil.updateHdncExaBloMaxHeight();
        HdncUtil.setHdncExaBloMaxHeight();
        /*  */
        HdncUtil.updateHdncExaBloSgroLeft();
        HdncUtil.setHdncExaBloSgroLeft();
        /*  */
        HdncUtil.updateHdncExaBloSgroBoTop();
        HdncUtil.setHdncExaBloSgroBoTop();
        break;
      }
      case 3: {
        HdncUtil.updateHdncExaBloMaxHeight();
        HdncUtil.setHdncExaBloMaxHeight();
        /*  */
        HdncUtil.updateHdncExaBloSgroLeft();
        HdncUtil.setHdncExaBloSgroLeft();
        /*  */
        HdncUtil.updateHdncExaBloSgroBoTop();
        HdncUtil.setHdncExaBloSgroBoTop();
        break;
      }
    }
  }
  /* -------------------------------------------------- */
  static event(isActive) {
    const {
      hdncR
    } = HdncConfig.getHdncRoot();
    const {
      hdncY
    } = HdncConfig.getHdncGroup();
    const {
      hdncZettaTlo
    } = HdncConfig.getHdncTloGroup();
    const {
      hdncExaBlo
    } = HdncConfig.getHdncBloGroup();
    /*  */
    let displayType = FwaConfig.previousDisplayType;
    let eventListenerType = "removeEventListener";
    if (isActive) {
      displayType = FwaConfig.currentDisplayType;
      eventListenerType = "addEventListener";
    }
    /*  */
    switch (displayType) {
      case 1: {
        hdncR[eventListenerType]("scroll", HdncHandler.mdtHdncRootScroll);
        for (let ybi = 0; ybi < hdncY.length; ybi++) {
          hdncZettaTlo[ybi][eventListenerType](
            "click",
            HdncHandler.mdtHdncZettaTlo
          );
          hdncExaBlo[ybi][eventListenerType](
            "transitionend",
            HdncHandler.mdtHdncExaBloTransitionEnd
          );
        }
        break;
      }
      case 2: {
        for (let ybi = 0; ybi < hdncY.length; ybi++) {
          hdncZettaTlo[ybi][eventListenerType](
            "click",
            HdncHandler.tdtHdncZettaTlo
          );
          hdncExaBlo[ybi][eventListenerType](
            "transitionend",
            HdncHandler.tdtHdncExaBloTransitionEnd
          );
        }
        break;
      }
      case 3: {
        for (let ybi = 0; ybi < hdncY.length; ybi++) {
          hdncY[ybi][eventListenerType](
            "mouseenter",
            HdncHandler.ddtHdncYotta
          );
          hdncY[ybi][eventListenerType](
            "mouseleave",
            HdncHandler.ddtHdncYotta
          );
          hdncExaBlo[ybi][eventListenerType](
            "transitionend",
            HdncHandler.ddtHdncExaBloTransitionEnd
          );
          /*  */
          const {
            hdncPetaBlo
          } = HdncConfig.getHdncBloEbGroup(ybi);
          for (let ebi = 0; ebi < hdncPetaBlo.length; ebi++) {
            hdncPetaBlo[ebi][eventListenerType](
              "mouseenter",
              HdncHandler.ddtHdncPetaBlo
            );
            hdncPetaBlo[ebi][eventListenerType](
              "mouseleave",
              HdncHandler.ddtHdncPetaBlo
            );
          }
        }
        break;
      }
    }
  }
}
class HdncHandler {
  static mdtHdncZettaTlo(eventData) {
    const {
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hdnc-y");
    const {
      hdncY
    } = HdncConfig.getHdncGroup();
    const {
      hdncExaTloText,
      hdncExaTloRgro,
      hdncExaTloBgro
    } = HdncConfig.getHdncTloGroup();
    const {
      hdncTeraBlo
    } = HdncConfig.getHdncBloEbGroup(targetIndex);
    /*  */
    const clData = "cl-mdt-hdnc-z-tlo-handler";
    let isActive = false;
    let clType = "remove";
    if (!hdncY[targetIndex].isActive) {
      isActive = true;
      clType = "add";
    }
    if (isActive) {
      /* PASS */
    } else {
      HdncUtil.timerHdncGigaBloBgro(targetIndex, false);
      HdncUtil.setHdncGigaBloBgroWidth(targetIndex, false);
    }
    /*  */
    hdncY[targetIndex].classList[clType](clData);
    hdncExaTloText[targetIndex].classList[clType](clData);
    hdncExaTloRgro[targetIndex].classList[clType](clData);
    hdncExaTloBgro[targetIndex].classList[clType](clData);
    /*  */
    for (let ebi = 0; ebi < hdncTeraBlo.length; ebi++) {
      hdncTeraBlo[ebi].classList[clType](clData);
    }
    /*  */
    hdncY[targetIndex].isActive = isActive;
    /*  */
    HdncUtil.setHdncExaBloGridTemplateRows(isActive, targetIndex);
  }
  /* -------------------------------------------------- */
  static mdtHdncRootScroll() {
    const {
      hdncR
    } = HdncConfig.getHdncRoot();
    const {
      hdncYottaSfroTo,
      hdncYottaSfroBo
    } = HdncConfig.getHdncYottaGroup();
    /*  */
    const innerHeight = window.innerHeight;
    const calcHeight = innerHeight / 10;
    /*  */
    const scrollTop = hdncR.scrollTop;
    const scrollHeight = hdncR.scrollHeight;
    const clientHeight = hdncR.clientHeight;
    const scrollBuffer = 8;
    /*  */
    let setToHeight = "";
    let setBoHeight = "";
    /*  */
    if (scrollTop > scrollBuffer) {
      setToHeight = calcHeight + "px";
    }
    if (scrollTop + clientHeight + scrollBuffer < scrollHeight) {
      setBoHeight = calcHeight + "px";
    }
    /*  */
    hdncYottaSfroTo.style.height = setToHeight;
    hdncYottaSfroBo.style.height = setBoHeight;
  }
  /* -------------------------------------------------- */
  static mdtHdncExaBloTransitionEnd(eventData) {
    const {
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hdnc-y");
    const {
      hdncY
    } = HdncConfig.getHdncGroup();
    const {
      hdncExaBlo
    } = HdncConfig.getHdncBloGroup();
    if (
      eventData.target === hdncExaBlo[targetIndex] &&
      eventData.propertyName === "grid-template-rows" &&
      hdncY[targetIndex].isActive
    ) {
      HdncUtil.updateHdncGigaBloBgroLeft(targetIndex);
      HdncUtil.updateHdncGigaBloBgroWidth(targetIndex);
      HdncUtil.setHdncGigaBloBgroLeft(targetIndex);
      HdncUtil.timerHdncGigaBloBgro(targetIndex, true);
      /*  */
      HdncHandler.mdtHdncRootScroll();
    }
  }
  /* ================================================== */
  static tdtHdncZettaTlo(eventData) {
    const {
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hdnc-y");
    const {
      htpncZettaHsngo
    } = HtpncConfig.getHtpncHsngoGroup();
    const {
      hdncY
    } = HdncConfig.getHdncGroup();
    const {
      hdncExaTloText,
      hdncExaTloBgro
    } = HdncConfig.getHdncTloGroup();
    const {
      hdncExaBlo
    } = HdncConfig.getHdncBloGroup();
    const {
      hdncTeraBlo
    } = HdncConfig.getHdncBloEbGroup(targetIndex);
    /*  */
    const clData = "cl-tdt-hdnc-z-tlo-handler";
    let isActive = false;
    let type = "remove";
    if (!hdncY[targetIndex].isActive) {
      isActive = true;
      type = "add";
    }
    /*  */
    if (isActive) {
      if (htpncZettaHsngo.isActive) {
        HtpncAccessor.tdtHtpncZettaHsngoHandler();
      }
      HdncUtil.resetHdncHandler(2);
    } else {
      HdncUtil.timerHdncGigaBloBgro(targetIndex, false);
      HdncUtil.setHdncGigaBloBgroWidth(targetIndex, false);
      HdncTool.resetTdtHdncExaBloScroll(HdncHandler, targetIndex);
    }
    /* classList */
    hdncExaTloText[targetIndex].classList[type](clData);
    hdncExaTloBgro[targetIndex].classList[type](clData);
    hdncExaBlo[targetIndex].classList[type](clData);
    for (let ebi = 0; ebi < hdncTeraBlo.length; ebi++) {
      hdncTeraBlo[ebi].classList[type](clData);
    }
    /*  */
    hdncY[targetIndex].isActive = isActive;
    /*  */
    HdncUtil.setHdncExaBloGridTemplateRows(isActive, targetIndex);
  }
  /* -------------------------------------------------- */
  static tdtHdncExaBloScroll(eventData) {
    const {
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hdnc-y");
    const {
      hdncExaBlo,
      hdncExaBloSgroTo,
      hdncExaBloSgroBo
    } = HdncConfig.getHdncBloGroup();
    /*  */
    const scrollTop = hdncExaBlo[targetIndex].scrollTop;
    const scrollHeight = hdncExaBlo[targetIndex].scrollHeight;
    const clientHeight = hdncExaBlo[targetIndex].clientHeight;
    const scrollBuffer = 8;
    /*  */
    const clData = "cl-tdt-hdnc-e-blo-scroll-handler";
    let toType = "remove";
    let boType = "remove";
    /*  */
    if (scrollTop > scrollBuffer) {
      toType = "add";
    }
    if (scrollTop + clientHeight + scrollBuffer < scrollHeight) {
      boType = "add";
    }
    /*  */
    hdncExaBloSgroTo[targetIndex].classList[toType](clData);
    hdncExaBloSgroBo[targetIndex].classList[boType](clData);
  }
  /* -------------------------------------------------- */
  static tdtHdncExaBloTransitionEnd(eventData) {
    const {
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hdnc-y");
    const {
      hdncY
    } = HdncConfig.getHdncGroup();
    const {
      hdncExaBlo
    } = HdncConfig.getHdncBloGroup();
    /*  */
    if (
      eventData.target === hdncExaBlo[targetIndex] &&
      eventData.propertyName === "grid-template-rows" &&
      hdncY[targetIndex].isActive
    ) {
      hdncExaBlo[targetIndex].addEventListener(
        "scroll",
        HdncHandler.tdtHdncExaBloScroll
      );
      /*  */
      HdncUtil.updateHdncGigaBloBgroLeft(targetIndex);
      HdncUtil.updateHdncGigaBloBgroWidth(targetIndex);
      HdncUtil.setHdncGigaBloBgroLeft(targetIndex);
      /*  */
      HdncUtil.timerHdncGigaBloBgro(targetIndex, true);
      /* Sgro */
      HdncUtil.updateHdncExaBloSgroLeft();
      HdncUtil.setHdncExaBloSgroLeft();
      /*  */
      const modifyEventData = {};
      modifyEventData.currentTarget = hdncExaBlo[targetIndex];
      HdncHandler.tdtHdncExaBloScroll(modifyEventData);
    }
    /*  */
    if (
      eventData.target === hdncExaBlo[targetIndex] &&
      eventData.propertyName === "max-height" &&
      hdncY[targetIndex].isActive
    ) {
      const modifyEventData = {};
      modifyEventData.currentTarget = hdncExaBlo[targetIndex];
      HdncHandler.tdtHdncExaBloScroll(modifyEventData);
    }
  }
  /* ================================================== */
  static ddtHdncYotta(eventData) {
    const {
      eventType,
      eventIndex
    } = FwcAccessor.getEventData(eventData);
    const {
      hdncY
    } = HdncConfig.getHdncGroup();
    const {
      hdncPetaBlo,
      hdncTeraBlo
    } = HdncConfig.getHdncBloEbGroup(eventIndex);
    const {
      hdncExaTloText,
      hdncExaTloBgro
    } = HdncConfig.getHdncTloGroup();
    const {
      hdncExaBlo
    } = HdncConfig.getHdncBloGroup();
    /*  */
    const clData = "cl-ddt-hdnc-y-handler";
    let isActive = false;
    let type = "remove";
    if (eventType === "mouseenter") {
      isActive = true;
      type = "add";
    }
    /*  */
    if (isActive) {
      const hdncYottaLastIndex = hdncY.length - 1;
      if (hdncYottaLastIndex === eventIndex) {
        HdncTool.clDdtHdncYottaNthLast(hdncYottaLastIndex);
      }
    } else {
      HdncTool.resetDdtHdncExaBloScroll(HdncHandler, eventIndex);
    }
    /*  */
    hdncExaTloText[eventIndex].classList[type](clData);
    hdncExaTloBgro[eventIndex].classList[type](clData);
    hdncExaBlo[eventIndex].classList[type](clData);
    for (let ebi = 0; ebi < hdncPetaBlo.length; ebi++) {
      hdncTeraBlo[ebi].classList[type](clData);
    }
    /*  */
    hdncY[eventIndex].isActive = isActive;
    /*  */
    HdncUtil.setHdncExaBloGridTemplateRows(isActive, eventIndex);
  }
  /* -------------------------------------------------- */
  static ddtHdncPetaBlo(eventData) {
    const {
      eventType,
      eventIndex,
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hdnc-y");
    const {
      hdncGigaBloText,
      hdncGigaBloRgro
    } = HdncConfig.getHdncBloEbGroup(targetIndex);
    /*  */
    const clData = "cl-ddt-hdnc-p-blo-handler";
    /* Default: mouseleave */
    let isActive = false;
    let type = "remove";
    if (eventType === "mouseenter") {
      isActive = true;
      type = "add";
    }
    /*  */
    hdncGigaBloText[eventIndex].classList[type](clData);
    hdncGigaBloRgro[eventIndex].classList[type](clData);
    if (isActive) {
      HdncUtil.setHdncGigaBloBgroLeft(targetIndex);
      HdncUtil.setHdncGigaBloBgroWidth(targetIndex, true, eventIndex);
    } else {
      HdncUtil.setHdncGigaBloBgroLeft(targetIndex);
      HdncUtil.setHdncGigaBloBgroWidth(targetIndex, false);
    }
  }
  /* -------------------------------------------------- */
  static ddtHdncExaBloScroll(eventData) {
    const {
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hdnc-y");
    const {
      hdncExaBlo,
      hdncExaBloSgroTo,
      hdncExaBloSgroBo
    } = HdncConfig.getHdncBloGroup();
    /*  */
    const scrollTop = hdncExaBlo[targetIndex].scrollTop;
    const scrollHeight = hdncExaBlo[targetIndex].scrollHeight;
    const clientHeight = hdncExaBlo[targetIndex].clientHeight;
    const scrollBuffer = 8;
    /*  */
    const clData = "cl-ddt-hdnc-e-blo-scroll-handler";
    let toType = "remove";
    let boType = "remove";
    /*  */
    if (scrollTop > scrollBuffer) {
      toType = "add";
    }
    if (scrollTop + clientHeight + scrollBuffer < scrollHeight) {
      boType = "add";
    }
    /*  */
    hdncExaBloSgroTo[targetIndex].classList[toType](clData);
    hdncExaBloSgroBo[targetIndex].classList[boType](clData);
  }
  /* -------------------------------------------------- */
  static ddtHdncExaBloTransitionEnd(eventData) {
    const {
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hdnc-y");
    const {
      hdncY
    } = HdncConfig.getHdncGroup();
    const {
      hdncExaBlo
    } = HdncConfig.getHdncBloGroup();
    /*  */
    if (
      eventData.target === hdncExaBlo[targetIndex] &&
      eventData.propertyName === "grid-template-rows" &&
      hdncY[targetIndex].isActive
    ) {
      hdncExaBlo[targetIndex].addEventListener(
        "scroll",
        HdncHandler.ddtHdncExaBloScroll
      );
      /*  */
      HdncUtil.updateHdncGigaBloBgroLeft(targetIndex);
      HdncUtil.updateHdncGigaBloBgroWidth(targetIndex);
      /* Sgro */
      HdncUtil.updateHdncExaBloSgroLeft();
      HdncUtil.setHdncExaBloSgroLeft();
      /*  */
      const modifyEventData = {};
      modifyEventData.currentTarget = hdncExaBlo[targetIndex];
      HdncHandler.ddtHdncExaBloScroll(modifyEventData);
    }
  }
  /* -------------------------------------------------- */
}
export {
  HdncAccessor,
  HdncController
};
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */