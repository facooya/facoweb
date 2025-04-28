/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  FwaConfig
} from "../../../fwa/fwa-config.js";
import {
  HdncConfig
} from "./hdnc-config.js";
import {
  HdncUtil
} from "./hdnc-util.js";
import {
  FwcAccessor,
  HtpncAccessor,
  HsncAccessor
} from "../../fwc-hub.js";
/*  */
class HdncAccessor {
  static hdncCache = {};
  /* static isActiveHdnc = false; */
  /* static hdncPropertyCache = {}; */
  /* =============== :Function: =============== */
  static resetHdnc(displayTypeState) {
    HdncUtil.setHdnc(displayTypeState);
  }
  static setHdnc(displayTypeState) {
    HdncUtil.setHdnc(displayTypeState);
  }
  static getHdncRoot() {
    return HdncConfig.getHdncRoot();
    /* return HdncConfig.getHdncRoot(); */
  }
  static getHdncGroup() {
    return HdncConfig.getHdncGroup();
    /* return HdncConfig.getHdncGroup(); */
  }
  /*  */
  static getHdncBloGroup() {
    return HdncConfig.getHdncBloGroup();
    /* return HdncConfig.getHdncBloGroup(); */
  }
  /* =============== ;Function; =============== */
}
class HdncController {
  static process() {
    HdncConfig.hdncGenerate();
    /* HdncManager.generate(); */
    HdncManager.init();
  }
  static processOnLoad() {
    HdncManager.event(true);
    HdncManager.initOnLoad();
  }
  static processOnResize() {
    HdncManager.initOnResize();
    HdncManager.event(false);
    HdncManager.event(true);
  }
  static sensorOnResize() {
    HdncManager.initSensorOnResize();
  }
}
class HdncManager {
  static init() {
    /* dataset */
    const {
      hdncY
    } = HdncConfig.getHdncGroup();
    const {
      hdncExaBlo
    } = HdncConfig.getHdncBloGroup();
    /*  */
    window.previousInnerHeight = window.innerHeight;
    window.previousInnerWidth = window.innerWidth;
    /*  */
    for (let i = 0; i < hdncExaBlo.length; i++) {
      const {
        hdncPetaBlo,
        hdncGigaBloBgro
      } = HdncConfig.getHdncBloEbGroup(i);
      /*  */
      hdncExaBlo[i].timeoutId = null;
      /*  */
      /* hdncExaBlo[i].dataset.timeoutId = null; */
      hdncExaBlo[i].dataset.isSensorWidthResized = true;
      hdncExaBlo[i].dataset.isSensorHeightResized = true;
      /*  */
      hdncY[i].isActive = false;
      hdncY[i].index = i;
      /*  */
      hdncY[i].timeoutId = null;
      hdncY[i].isTimeout = false;
      /*  */
      hdncY[i].isResize = true;
      hdncY[i].isSensorResize = false;
      /*  */
      for (let j = 0; j < hdncPetaBlo.length; j++) {
        hdncPetaBlo[j].index = j;
        /*  */
        hdncPetaBlo[j].timeoutId = null;
        hdncGigaBloBgro[j].timeoutId = null;
      }
    }
  }
  /* -------------------------------------------------- */
  static initOnLoad() {
    /* set */
    const {
      hdncExaBlo
    } = HdncConfig.getHdncBloGroup();
    HdncUtil.setDataHdncExaBloMaxHeight();
    for (let i = 0; i < hdncExaBlo.length; i++) {
      HdncUtil.setHdncExaBloMaxHeight(i);
      HdncUtil.setHdncExaBloGridTemplateRows(i, 0);
    }
  }
  /* -------------------------------------------------- */
  static initOnResize() {
    const {
      hdncY
    } = HdncConfig.getHdncGroup();
    const {
      hdncExaBlo
    } = HdncConfig.getHdncBloGroup();
    HdncUtil.setHdnc(FwaConfig.previousDisplayType);
    /*  */
    switch (FwaConfig.previousDisplayType) {
      case 1: {
        break;
      }
      case 2: {
        hdncExaBlo[0].classList.remove("cl-tdt-hdnc-z-tlo-handler-nth-1");
        hdncExaBlo[3].classList.remove("cl-tdt-hdnc-z-tlo-handler-nth-4");
        break;
      }
      case 3: {
        break;
      }
    }
    /*  */
    switch (FwaConfig.currentDisplayType) {
      case 1: {
        for (let i = 0; i < hdncExaBlo.length; i++) {
          hdncY[i].isSensorResize = false;
          hdncExaBlo[i].isSensorResize = false;
          hdncExaBlo[i].style.maxHeight = "";
        }
        break;
      }
      case 2: {
        for (let i = 0; i < hdncY.length; i++) {
          hdncExaBlo[i].dataset.isSensorWidthResized = true;
          hdncExaBlo[i].dataset.isSensorHeightResized = true;
          /*  */
          hdncY[i].isSensorResize = false;
          hdncY[i].isResize = true;
        }
        break;
      }
      case 3: {
        for (let i = 0; i < hdncY.length; i++) {
          hdncExaBlo[i].dataset.isSensorWidthResized = true;
          hdncExaBlo[i].dataset.isSensorHeightResized = true;
          /*  */
          hdncY[i].isSensorResize = false;
          hdncY[i].isResize = true;
        }
        break;
      }
    }
    HdncManager.initSensorOnResize();
  }
  /* -------------------------------------------------- */
  static initSensorOnResize() {
    const {
      hdncY
    } = HdncConfig.getHdncGroup();
    if (FwaConfig.currentDisplayType === 1) {
      const hdncGigaBloBgroBuffer = 24;
      for (let i = 0; i < hdncY.length; i++) {
        hdncY[i].isSensorResize = true;
        if (hdncY[i].isActive) {
          const {
            hdncGigaBloText,
            hdncGigaBloBgro
          } = HdncConfig.getHdncBloEbGroup(i);
          for (let j = 0; j < hdncGigaBloBgro.length; j++) {
            HdncUtil.setDataHdncGigaBloBgro_Old(
              hdncGigaBloBgro[j],
              hdncGigaBloText[j],
              hdncGigaBloBgroBuffer
            );
            HdncUtil.setHdncGigaBloBgro_Old(hdncGigaBloBgro[j], true);
          }
          hdncY[i].isSensorResize = false;
        }
      }
      HdncHandler.mdtHdncRootScroll();
    }
    /*  */
    if (FwaConfig.currentDisplayType !== 1) {
      const {
        hdncExaBlo
      } = HdncConfig.getHdncBloGroup();
      /*  */
      const innerWidth = window.innerWidth;
      const previousInnerWidth = window.previousInnerWidth;
      const innerHeight = window.innerHeight;
      const previousInnerHeight = window.previousInnerHeight;
      /*  */
      for (let i = 0; i < hdncExaBlo.length; i++) {
        if (innerWidth !== previousInnerWidth) {
          hdncExaBlo[i].dataset.isSensorWidthResized = true;
        }
        if (innerHeight !== previousInnerHeight) {
          hdncExaBlo[i].dataset.isSensorHeightResized = true;
        }
      }
      /*  */
      for (let i = 0; i < hdncExaBlo.length; i++) {
        if (hdncExaBlo[i].dataset.isSensorWidthResized) {
          HdncUtil.setDataHdncExaBloSgroLeft(i);
          HdncUtil.setHdncExaBloSgroLeft(i);
          hdncExaBlo[i].isSensorWidthResized = false;
        }
      }
      window.previousInnerWidth = innerWidth;
      /*  */
      HdncUtil.setDataHdncExaBloMaxHeight();
      for (let i = 0; i < hdncExaBlo.length; i++) {
        if (hdncExaBlo[i].dataset.isSensorHeightResized) {
          HdncUtil.setHdncExaBloMaxHeight(i);
          hdncExaBlo[i].isSensorHeightResized = false;
        }
      }
      window.previousInnerHeight = innerHeight;
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
    let displayTypeState = null;
    let eventListenerType = "";
    if (isActive) {
      displayTypeState = FwaConfig.currentDisplayType;
      eventListenerType = "addEventListener";
    } else {
      displayTypeState = FwaConfig.previousDisplayType;
      eventListenerType = "removeEventListener";
    }
    /* !!!!! v1.1.18a [temp] !!!!! */
    if (displayTypeState === 1) {
      hdncR[eventListenerType]("scroll", HdncHandler.mdtHdncRootScroll);
    }
    /*  */
    for (let i = 0; i < hdncY.length; i++) {
      /* Init */
      hdncY[i].isActive = false;
      /* ========== FwaConfig.currentDisplayType ========== */
      switch (displayTypeState) {
        case 1: {
          hdncZettaTlo[i][eventListenerType](
            "click",
            HdncHandler.mdtHdncZettaTlo
          );
          hdncExaBlo[i][eventListenerType](
            "transitionend",
            HdncHandler.mdtHdncExaBloTransitionEnd
          );
          break;
        }
        case 2: {
          hdncZettaTlo[i][eventListenerType](
            "click",
            HdncHandler.tdtHdncZettaTlo
          );
          /*  */
          hdncExaBlo[i][eventListenerType](
            "transitionend",
            HdncHandler.tdtHdncExaBloTransitionEnd
          );
          break;
        }
        case 3: {
          hdncY[i][eventListenerType](
            "mouseenter",
            HdncHandler.ddtHdncYotta
          );
          hdncY[i][eventListenerType](
            "mouseleave",
            HdncHandler.ddtHdncYotta
          );
          hdncExaBlo[i][eventListenerType](
            "transitionend",
            HdncHandler.ddtHdncExaBloTransitionEnd
          );
          /* Hdnc Peta */
          const {
            hdncPetaBlo
          } = HdncConfig.getHdncBloEbGroup(i);
          for (let j = 0; j < hdncPetaBlo.length; j++) {
            hdncPetaBlo[j][eventListenerType](
              "mouseenter",
              HdncHandler.ddtHdncPetaBlo
            );
            hdncPetaBlo[j][eventListenerType](
              "mouseleave",
              HdncHandler.ddtHdncPetaBlo
            );
          }
          break;
        }
      }
      /* ============================== */
    }
  }
}
class HdncHandler {
  /* -------------------------------------------------- */
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
      hdncExaBlo
    } = HdncConfig.getHdncBloGroup();
    const {
      hdncPetaBlo,
      hdncTeraBlo,
      hdncGigaBloBgro
    } = HdncConfig.getHdncBloEbGroup(targetIndex);
    /*  */
    let isActive = null;
    let type = "";
    let hdncExaBloHeight = null;
    if (!hdncY[targetIndex].isActive) {
      isActive = true;
      type = "add";
      hdncExaBloHeight = 4;
    } else {
      isActive = false;
      type = "remove";
      hdncExaBloHeight = 0;
    }
    /*  */
    if (isActive) {
      hdncY[targetIndex].timeoutId = setTimeout(
        HdncUtil.setTimerMdtHdncYotta,
        300,
        targetIndex
      );
    } else {
      clearTimeout(hdncY[targetIndex].timeoutId);
      for (let i = 0; i < hdncGigaBloBgro.length; i++) {
        HdncUtil.setHdncGigaBloBgro_Old(hdncGigaBloBgro[i], false);
        clearTimeout(hdncPetaBlo[i].timeoutId);
      }
    }
    /*  */
    hdncY[targetIndex].classList[type]("cl-mdt-hdnc-z-tlo-handler");
    hdncExaTloText[targetIndex].classList[type]("cl-mdt-hdnc-z-tlo-handler");
    hdncExaTloRgro[targetIndex].classList[type]("cl-mdt-hdnc-z-tlo-handler");
    hdncExaTloBgro[targetIndex].classList[type]("cl-mdt-hdnc-z-tlo-handler");
    /*  */
    HdncUtil.setHdncExaBloGridTemplateRows(targetIndex, hdncExaBloHeight);
    for (let i = 0; i < hdncTeraBlo.length; i++) {
      hdncTeraBlo[i].classList[type]("cl-mdt-hdnc-z-tlo-handler");
    }
    /*  */
    hdncY[targetIndex].isActive = isActive;
    /*  */
    HdncHandler.mdtHdncRootScroll();
  }
  /* -------------------------------------------------- */
  static mdtHdncRootScroll() {
    const {
      hdncR
    } = HdncConfig.getHdncRoot();
    const {
      hdncYottaSfroTgro,
      hdncYottaSfroBgro
    } = HdncConfig.getHdncYottaGroup();
    /*  */
    const scrollTop = hdncR.scrollTop;
    const scrollHeight = hdncR.scrollHeight;
    const clientHeight = hdncR.clientHeight;
    const scrollBuffer = 8;
    /*  */
    let tgroType = "";
    let bgroType = "";
    /*  */
    if (scrollTop > scrollBuffer) {
      tgroType = "add";
    } else {
      tgroType = "remove";
    }
    if (scrollTop + clientHeight + scrollBuffer < scrollHeight) {
      bgroType = "add";
    } else {
      bgroType = "remove";
    }
    if (tgroType) {
      hdncYottaSfroTgro.classList[tgroType](
        "cl-mdt-hdnc-r-scroll-handler"
      );
    }
    if (bgroType) {
      hdncYottaSfroBgro.classList[bgroType](
        "cl-mdt-hdnc-r-scroll-handler"
      );
    }
  }
  /* -------------------------------------------------- */
  static mdtHdncExaBloTransitionEnd(eventData) {
    const {
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hdnc-y");
    const {
      hdncExaBlo
    } = HdncConfig.getHdncBloGroup();
    if (
      eventData.target === hdncExaBlo[targetIndex] &&
      eventData.propertyName === "grid-template-rows"
    ) {
      HdncHandler.mdtHdncRootScroll();
    }
  }
  /* ================================================== */
  static tdtHdncZettaTlo(eventData) {
    const {
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hdnc-y");
    const {
      hdncY
    } = HdncConfig.getHdncGroup();
    const {
      hdncExaTloText,
      hdncExaTloBgro
    } = HdncConfig.getHdncTloGroup();
    const {
      hdncExaBlo,
      hdncExaBloSgroTo,
      hdncExaBloSgroBo
    } = HdncConfig.getHdncBloGroup();
    const {
      hdncTeraBlo,
      hdncGigaBloBgro
    } = HdncConfig.getHdncBloEbGroup(targetIndex);
    /*  */
    let isActive = null;
    let type = "";
    if (!hdncY[targetIndex].isActive) {
      isActive = true;
      type = "add";
    } else {
      isActive = false;
      type = "remove";
    }
    /* TransitionEnd */
    HdncUtil.setHdncExaBlo(isActive, targetIndex);
    /*  */
    if (isActive) {
      if (targetIndex === 0) {
        hdncExaBlo[targetIndex].classList.add("cl-tdt-hdnc-z-tlo-handler-nth-1");
      } else if (targetIndex === 3) {
        hdncExaBlo[targetIndex].classList.add("cl-tdt-hdnc-z-tlo-handler-nth-4");
      }
    } else {
      hdncExaBlo[targetIndex].removeEventListener(
        "scroll",
        HdncHandler.tdtHdncExaBloScroll
      );
      /*  */
      hdncExaBloSgroTo[targetIndex].classList.remove(
        "cl-tdt-hdnc-e-blo-scroll-handler"
      );
      hdncExaBloSgroBo[targetIndex].classList.remove(
        "cl-tdt-hdnc-e-blo-scroll-handler"
      );
      /*  */
      for (let i = 0; i < hdncGigaBloBgro.length; i++) {
        HdncUtil.setHdncGigaBloBgroWidth(hdncGigaBloBgro[i], false);
        clearTimeout(hdncGigaBloBgro[i].timeoutId);
      }
    }
    /* classList */
    hdncExaTloText[targetIndex].classList[type]("cl-tdt-hdnc-z-tlo-handler");
    hdncExaTloBgro[targetIndex].classList[type]("cl-tdt-hdnc-z-tlo-handler");
    hdncExaBlo[targetIndex].classList[type]("cl-tdt-hdnc-z-tlo-handler");
    for (let i = 0; i < hdncTeraBlo.length; i++) {
      hdncTeraBlo[i].classList[type]("cl-tdt-hdnc-z-tlo-handler");
    }
    /*  */
    if (isActive) {
      if (HsncAccessor.isActiveHsnc) {
        HtpncAccessor.htpncZettaHsngoHandler();
      }
      /* !!!!! v1.1.19a-1 [test] !!!!! */
      /* HdncUtil.setTdtHdnc(targetIndex); */
      HdncUtil.setTdtHdnc(HdncHandler, targetIndex);
    }
    /*  */
    hdncY[targetIndex].isActive = isActive;
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
    let toType = "";
    let boType = "";
    /*  */
    if (scrollTop > scrollBuffer) {
      toType = "add";
    } else {
      toType = "remove";
    }
    if (scrollTop + clientHeight + scrollBuffer < scrollHeight) {
      boType = "add";
    } else {
      boType = "remove";
    }
    if (toType) {
      hdncExaBloSgroTo[targetIndex].classList[toType](
        "cl-tdt-hdnc-e-blo-scroll-handler"
      );
    }
    if (boType) {
      hdncExaBloSgroBo[targetIndex].classList[boType](
        "cl-tdt-hdnc-e-blo-scroll-handler"
      );
    }
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
    if (
      eventData.target === hdncExaBlo[targetIndex] &&
      hdncY[targetIndex].isActive &&
      eventData.propertyName === "grid-template-rows"
    ) {
      if (hdncExaBlo[targetIndex].dataset.isSensorWidthResized) {
        HdncUtil.setDataHdncGigaBloBgro(targetIndex);
        hdncExaBlo[targetIndex].dataset.isSensorWidthResized = false;
      }
      if (hdncExaBlo[targetIndex].dataset.isSensorHeightResized) {
        HdncUtil.setDataHdncExaBloSgro(targetIndex);
        hdncExaBlo[targetIndex].dataset.isSensorHeightResized = false;
      }
      /* Bgro */
      HdncUtil.setHdncGigaBloBgro(targetIndex, false);
      HdncUtil.setTimerHdncGigaBloBgro(targetIndex);
      /*  */
      hdncExaBlo[targetIndex].addEventListener(
        "scroll",
        HdncHandler.tdtHdncExaBloScroll
      );
      /* Sgro */
      HdncUtil.setHdncExaBloSgro(targetIndex);
      const scrollEventData = {};
      scrollEventData.currentTarget = hdncExaBlo[targetIndex];
      HdncHandler.tdtHdncExaBloScroll(scrollEventData);
    } else if (
      eventData.target === hdncExaBlo[targetIndex] &&
      hdncY[targetIndex].isActive &&
      eventData.propertyName === "max-height"
    ) {
      HdncUtil.setDataHdncExaBloSgroTop(targetIndex);
      HdncUtil.setHdncExaBloSgroTop(targetIndex);
      const eventDataScroll = {};
      eventDataScroll.currentTarget = hdncExaBlo[targetIndex];
      HdncHandler.tdtHdncExaBloScroll(eventDataScroll);
      console.log(targetIndex, "max-height");
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
      hdncExaBlo,
      hdncExaBloSgroTo,
      hdncExaBloSgroBo
    } = HdncConfig.getHdncBloGroup();
    /*  */
    let isActive = null;
    let type = "";
    let hdncExaBloHeight = null;
    if (eventType === "mouseenter") {
      isActive = true;
      type = "add";
      hdncExaBloHeight = 4;
    } else if (eventType === "mouseleave") {
      isActive = false;
      type = "remove";
      hdncExaBloHeight = 0;
    }
    /*  */
    if (isActive) {
      HdncUtil.setHdncExaBlo(isActive, eventIndex);
    } else {
      hdncExaBlo[eventIndex].removeEventListener(
        "scroll",
        HdncHandler.ddtHdncExaBloScroll
      );
      /*  */
      hdncExaBloSgroTo[eventIndex].classList.remove(
        "cl-ddt-hdnc-e-blo-scroll-handler"
      );
      hdncExaBloSgroBo[eventIndex].classList.remove(
        "cl-ddt-hdnc-e-blo-scroll-handler"
      );
    }
    /*  */
    hdncExaTloText[eventIndex].classList[type]("cl-ddt-hdnc-y-handler");
    hdncExaTloBgro[eventIndex].classList[type]("cl-ddt-hdnc-y-handler");
    hdncExaBlo[eventIndex].classList[type]("cl-ddt-hdnc-y-handler");
    for (let i = 0; i < hdncPetaBlo.length; i++) {
      hdncTeraBlo[i].classList[type]("cl-ddt-hdnc-y-handler");
    }
    HdncUtil.setHdncExaBloGridTemplateRows(eventIndex, hdncExaBloHeight);
    /*  */
    if (isActive) {
      if (eventIndex === 3) {
        const htmlElement = document.documentElement;
        const htmlElementRect = htmlElement.getBoundingClientRect();
        const hdncYottaRect = hdncY[eventIndex].getBoundingClientRect();
        const htmlElementRectCalc = htmlElementRect.right - (21 * 16);
        const hdncYottaRectCalc = 
          (hdncYottaRect.right - (hdncYottaRect.width / 2)) + (10 * 16);
        if (htmlElementRectCalc < hdncYottaRectCalc && HsncAccessor.isActiveHsnc) {
          hdncExaBlo[eventIndex].classList.add("cl-ddt-hdnc-y-handler-nth-4");
        } else {
          hdncExaBlo[eventIndex].classList.remove("cl-ddt-hdnc-y-handler-nth-4");
        }
      }
      /*  */
      hdncY[eventIndex].isTimeout = false;
      hdncY[eventIndex].timeoutId = setTimeout(
        HdncUtil.setDdtHdncYottaTimer,
        300,
        eventIndex,
        hdncY[eventIndex]
      );
    } else {
      clearTimeout(hdncY[eventIndex].timeoutId);
    }
    hdncY[eventIndex].isActive = isActive;
  }
  /* -------------------------------------------------- */
  static ddtHdncPetaBlo(eventData) {
    const {
      eventType,
      eventIndex,
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hdnc-y");
    const {
      hdncY
    } = HdncConfig.getHdncGroup();
    const {
      hdncPetaBlo,
      hdncGigaBloText,
      hdncGigaBloRgro,
      hdncGigaBloBgro
    } = HdncConfig.getHdncBloEbGroup(targetIndex);
    /*  */
    const gigaBgroBuffer = 32;
    /*  */
    let isActive = null;
    let type = "";
    if (eventType === "mouseenter") {
      isActive = true;
      type = "add";
    } else if (eventType === "mouseleave") {
      isActive = false;
      type = "remove";
    }
    /*  */
    hdncGigaBloText[eventIndex].classList[type]("cl-ddt-hdnc-p-blo-handler");
    hdncGigaBloRgro[eventIndex].classList[type]("cl-ddt-hdnc-p-blo-handler");
    if (isActive) {
      if (hdncY[targetIndex].isTimeout) {
        HdncUtil.setHdncGigaBloBgro_Old(hdncGigaBloBgro[eventIndex], isActive);
      } else {
        hdncPetaBlo[eventIndex].timeoutId = setTimeout(
          HdncUtil.setDdtHdncPetaBloTimer,
          50,
          hdncGigaBloBgro[eventIndex],
          hdncPetaBlo[eventIndex],
          hdncY[targetIndex]
        );
      }
    } else {
      clearTimeout(hdncPetaBlo[eventIndex].timeoutId);
      HdncUtil.setHdncGigaBloBgro_Old(hdncGigaBloBgro[eventIndex], isActive);
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
    let toType = "";
    let boType = "";
    /*  */
    if (scrollTop > scrollBuffer) {
      toType = "add";
    } else {
      toType = "remove";
    }
    if (scrollTop + clientHeight + scrollBuffer < scrollHeight) {
      boType = "add";
    } else {
      boType = "remove";
    }
    if (toType) {
      hdncExaBloSgroTo[targetIndex].classList[toType](
        "cl-ddt-hdnc-e-blo-scroll-handler"
      );
    }
    if (boType) {
      hdncExaBloSgroBo[targetIndex].classList[boType](
        "cl-ddt-hdnc-e-blo-scroll-handler"
      );
    }
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
    /* const modifyEventData = {};
    modifyEventData.currentTarget = hdncExaBlo[eventIndex];
    HdncHandler.tdtHdncExaBloTransitionEnd(modifyEventData); */
    if (
      eventData.target === hdncExaBlo[targetIndex] &&
      hdncY[targetIndex].isActive &&
      eventData.propertyName === "grid-template-rows"
    ) {
      /* Bgro */
      if (hdncExaBlo[targetIndex].dataset.isSensorWidthResized) {
        HdncUtil.setDataHdncGigaBloBgro(targetIndex);
        hdncExaBlo[targetIndex].dataset.isSensorWidthResized = false;
      }
      /*  */
      hdncExaBlo[targetIndex].addEventListener(
        "scroll",
        HdncHandler.ddtHdncExaBloScroll
      );
      /* Sgro */
      /* don't cache sgro left */
      HdncUtil.setDataHdncExaBloSgroLeft(targetIndex);
      HdncUtil.setHdncExaBloSgroLeft(targetIndex);
      if (hdncExaBlo[targetIndex].dataset.isSensorHeightResized) {
        /* HdncUtil.setDataHdncExaBloSgro(targetIndex); */
        HdncUtil.setDataHdncExaBloSgroTop(targetIndex);
        HdncUtil.setHdncExaBloSgroTop(targetIndex);
        hdncExaBlo[targetIndex].dataset.isSensorHeightResized = false;
      }
      /*  */
      const modifyEventData = {};
      modifyEventData.currentTarget = hdncExaBlo[targetIndex];
      HdncHandler.ddtHdncExaBloScroll(modifyEventData);
    }
  }
  /* -------------------------------------------------- */
}
class HdncSet {
  /* ================================================== */
  static setDataHdncGigaBloBgro_Old(setElement, referElement, buffer) {
    const referWidth = referElement.offsetWidth;
    /* calc(50% - (referWidth / 2)px - (buffer / 2)px); */
    const setLeftData = "calc" +
      "(" + "50%" + " - " +
      (referWidth / 2).toString() + "px" + " - " +
      (buffer / 2).toString() + "px" + ")";
    const setWidthData = (referWidth + buffer).toString() + "px";
    /*  */
    setElement.left = setLeftData;
    setElement.width = setWidthData;
  }
  /* ================================================== */
  static setHdncGigaBloBgro_Old(setElement, isWidthActive) {
    let setLeft = setElement.left;
    let setWidth = null;
    if (isWidthActive) {
      setWidth = setElement.width;
    } else {
      setWidth = "";
    }
    setElement.style.left = setLeft;
    setElement.style.width = setWidth;
  }
  /* -------------------------------------------------- */
  static setDataHdncGigaBloBgro(ebIndex) {
    const {
      hdncTeraBlo,
      hdncGigaBloText,
      hdncGigaBloBgro
    } = HdncConfig.getHdncBloEbGroup(ebIndex);
    /*  */
    const bufferWidth = 24;
    let hdncGigaBloTextWidth = null;
    let hdncTeraBloWidth = null;
    /*  */
    for (let i = 0; i < hdncGigaBloBgro.length; i++) {
      hdncGigaBloTextWidth = hdncGigaBloText[i].offsetWidth;
      hdncTeraBloWidth = hdncTeraBlo[i].offsetWidth;
      /*  */
      HdncUtil.setDataHdncGigaBloBgroLeft(
        hdncGigaBloBgro[i],
        hdncGigaBloTextWidth,
        hdncTeraBloWidth,
        bufferWidth
      );
      HdncUtil.setDataHdncGigaBloBgroWidth(
        hdncGigaBloBgro[i],
        hdncGigaBloTextWidth,
        bufferWidth
      );
    }
  }
  /* -------------------------------------------------- */
  static setDataHdncGigaBloBgroLeft(pElement, hgbtWidth, htbWidth, bWidth) {
    const setLeft = (htbWidth - (hgbtWidth + bWidth)) / 2 + "px";
    pElement.dataset.left = setLeft;
  }
  static setDataHdncGigaBloBgroWidth(pElement, hgbtWidth, bWidth) {
    const setWidth = hgbtWidth + bWidth + "px";
    pElement.dataset.width = setWidth
  }
  /* -------------------------------------------------- */
  static setHdncGigaBloBgro(ebIndex, pSetWidth) {
    const {
      hdncGigaBloBgro
    } = HdncConfig.getHdncBloEbGroup(ebIndex);
    /*  */
    for (let i = 0; i < hdncGigaBloBgro.length; i++) {
      HdncUtil.setHdncGigaBloBgroLeft(hdncGigaBloBgro[i]);
      HdncUtil.setHdncGigaBloBgroWidth(hdncGigaBloBgro[i], pSetWidth);
    }
  }
  /* -------------------------------------------------- */
  static setHdncGigaBloBgroLeft(pElement) {
    const setLeft = pElement.dataset.left;
    pElement.style.left = setLeft;
  }
  /* -------------------------------------------------- */
  static setHdncGigaBloBgroWidth(pElement, pSetWidth) {
    let setWidth = null;
    if (pSetWidth) {
      setWidth = pElement.dataset.width;
    } else {
      setWidth = "";
    }
    pElement.style.width = setWidth;
  }
  /* -------------------------------------------------- */
  static setTimerHdncGigaBloBgro(ebIndex) {
    const {
      hdncGigaBloBgro
    } = HdncConfig.getHdncBloEbGroup(ebIndex);
    for (let i = 0; i < hdncGigaBloBgro.length; i++) {
      hdncGigaBloBgro[i].timeoutId = setTimeout(
        HdncUtil.setTimeoutHdncGigaBloBgro,
        150 * i,
        hdncGigaBloBgro[i]
      );
    }
  }
  /* -------------------------------------------------- */
  static setTimeoutHdncGigaBloBgro(pElement) {
    HdncUtil.setHdncGigaBloBgroWidth(pElement, true);
  }
  /* ================================================== */
  static setTimerMdtHdncYotta(targetIndex) {
    const {
      hdncY
    } = HdncConfig.getHdncGroup();
    const {
      hdncPetaBlo,
      hdncGigaBloText,
      hdncGigaBloBgro
    } = HdncConfig.getHdncBloEbGroup(targetIndex);
    const gigaBgroBuffer = 24;
    if (hdncY[targetIndex].isResize) {
      for (let i = 0; i < hdncGigaBloBgro.length; i++) {
        HdncUtil.setDataHdncGigaBloBgro_Old(
          hdncGigaBloBgro[i],
          hdncGigaBloText[i],
          gigaBgroBuffer
        );
      }
      hdncY[targetIndex].isSensorResize = false;
      hdncY[targetIndex].isResize = false;
    } else if (hdncY[targetIndex].isSensorResize) {
      /* Only MDT */
      for (let i = 0; i < hdncGigaBloBgro.length; i++) {
        HdncUtil.setDataHdncGigaBloBgro_Old(
          hdncGigaBloBgro[i],
          hdncGigaBloText[i],
          gigaBgroBuffer
        );
      }
      hdncY[targetIndex].isSensorResize = false;
    }
    for (let i = 0; i < hdncGigaBloBgro.length; i++) {
      hdncPetaBlo[i].timeoutId = setTimeout(
        HdncUtil.setTimerMdtHdncPetaBlo,
        150 * i,
        hdncGigaBloBgro[i]
      );
    }
  }
  /* ================================================== */
  static setDdtHdncYottaTimer(hdncBloEbIndex, timeoutFlag) {
    const {
      hdncY
    } = HdncConfig.getHdncGroup();
    if (hdncY[hdncBloEbIndex].isResize) {
      const {
        hdncGigaBloText,
        hdncGigaBloBgro
      } = HdncConfig.getHdncBloEbGroup(hdncBloEbIndex);
      const gigaBgroBuffer = 32;
      for (let i = 0; i < hdncGigaBloBgro.length; i++) {
        HdncUtil.setDataHdncGigaBloBgro_Old(
          hdncGigaBloBgro[i],
          hdncGigaBloText[i],
          gigaBgroBuffer
        );
      }
      hdncY[hdncBloEbIndex].isResize = false;
    }
    timeoutFlag.isTimeout = true;
  }
  /* ================================================== */
  static setTimerMdtHdncPetaBlo(setElement) {
    HdncUtil.setHdncGigaBloBgro_Old(setElement, true);
  }
  /* ================================================== */
  static setDdtHdncPetaBloTimer(setElement, timerElement, timeoutFlag) {
    if (timeoutFlag.isTimeout) {
      HdncUtil.setHdncGigaBloBgro_Old(setElement, true);
    } else {
      timerElement.timeoutId = setTimeout(
        HdncUtil.setDdtHdncPetaBloTimer,
        50,
        setElement,
        timerElement,
        timeoutFlag
      );
    }
  }
  /* ================================================== */
  static setHdncExaBlo(isSet, pIndex) {
    const {
      hdncExaBlo
    } = HdncConfig.getHdncBloGroup();
    /*  */
    let rowRemSize = null;
    if (isSet) {
      rowRemSize = 4;
    } else {
      rowRemSize = 0;
    }
    HdncUtil.setHdncExaBloGridTemplateRows(pIndex, rowRemSize);
    if (hdncExaBlo[pIndex].dataset.isSensorHeightResized && isSet) {
      HdncUtil.setHdncExaBloMaxHeight(pIndex);
    }
  }
  /* -------------------------------------------------- */
  static setHdncExaBloGridTemplateRows(pIndex, rowRemSize) {
    const {
      hdncExaBlo
    } = HdncConfig.getHdncBloGroup();
    const {
      hdncPetaBlo
    } = HdncConfig.getHdncBloEbGroup(pIndex);
    let setGridTemplateRows = "";
    for (let i = 0; i < hdncPetaBlo.length; i++) {
      setGridTemplateRows += rowRemSize + "rem" + " ";
    }
    hdncExaBlo[pIndex].style.gridTemplateRows = setGridTemplateRows;
  }
  /* -------------------------------------------------- */
  static setHdncExaBloMaxHeight(pIndex) {
    const {
      hdncExaBlo
    } = HdncConfig.getHdncBloGroup();
    const setMaxHeight =
      HdncAccessor.hdncPropertyCache["hdncExaBloMaxHeight"] + "px";
    hdncExaBlo[pIndex].style.maxHeight = setMaxHeight;
  }
  /* -------------------------------------------------- */
  static setDataHdncExaBloMaxHeight() {
    let remBuffer = null;
    if (FwaConfig.currentDisplayType === 2) {
      remBuffer = 10;
    } else if (FwaConfig.currentDisplayType === 3) {
      remBuffer = 6;
    }
    const innerHeight = window.innerHeight;
    const calcMaxHeight = innerHeight - (remBuffer * 16);
    HdncAccessor.hdncPropertyCache["hdncExaBloMaxHeight"] = calcMaxHeight;
  }
  /* ================================================== */
  static setDataHdncExaBloSgro(pIndex) {
    HdncUtil.setDataHdncExaBloSgroTop(pIndex);
    HdncUtil.setDataHdncExaBloSgroLeft(pIndex);
  }
  /* ------------------------------ */
  static setDataHdncExaBloSgroLeft(pIndex) {
    const {
      hdncZettaBlo,
      hdncExaBlo
    } = HdncConfig.getHdncBloGroup();
    const hdncZettaBloRect = hdncZettaBlo[pIndex].getBoundingClientRect();
    const hdncExaBloRect = hdncExaBlo[pIndex].getBoundingClientRect();
    const calcLeft = -(hdncZettaBloRect.left - hdncExaBloRect.left) +
      (hdncExaBloRect.width / 2) - 16;
    /*  */
    HdncAccessor.hdncPropertyCache["hdncExaBloSgroLeft" + pIndex] = calcLeft;
  }
  /* ------------------------------ */
  static setDataHdncExaBloSgroTop(pIndex, pHeight) {
    /* remove pHeight ? */
    const {
      hdncExaBlo,
      hdncExaBloSgroBo
    } = HdncConfig.getHdncBloGroup();
    let hdncExaBloRect = null;
    let setTop = null;
    if (pHeight) {
      setTop = pHeight - 40;
    } else {
      hdncExaBloRect = hdncExaBlo[pIndex].getBoundingClientRect();
      setTop = hdncExaBloRect.height - 40;
    }
    /*  */
    hdncExaBloSgroBo[pIndex].dataset.top = setTop + "px";
  }
  /* -------------------------------------------------- */
  static setHdncExaBloSgro(pIndex) {
    HdncUtil.setHdncExaBloSgroTop(pIndex);
    HdncUtil.setHdncExaBloSgroLeft(pIndex);
  }
  /* ------------------------------ */
  static setHdncExaBloSgroTop(pIndex) {
    const {
      hdncExaBloSgroBo
    } = HdncConfig.getHdncBloGroup();
    /*  */
    const setTop = hdncExaBloSgroBo[pIndex].dataset.top;
    hdncExaBloSgroBo[pIndex].style.top = setTop;
  }
  /* ------------------------------ */
  static setHdncExaBloSgroLeft(pIndex) {
    const {
      hdncExaBloSgroTo,
      hdncExaBloSgroBo
    } = HdncConfig.getHdncBloGroup();
    /*  */
    const setLeft =
      HdncAccessor.hdncPropertyCache["hdncExaBloSgroLeft" + pIndex] + "px";
    hdncExaBloSgroTo[pIndex].style.left = setLeft;
    hdncExaBloSgroBo[pIndex].style.left = setLeft;
  }
  /* ================================================== */
  static setHdnc(displayTypeState) {
    const {
      hdncY
    } = HdncConfig.getHdncGroup();
    const {
      hdncZettaTlo
    } = HdncConfig.getHdncTloGroup();
    const {
      hdncExaBlo
    } = HdncConfig.getHdncBloGroup();
    const {
      hdncYottaSfroTgro,
      hdncYottaSfroBgro
    } = HdncConfig.getHdncYottaGroup();
    /*  */
    const eventData = {};
    /*  */
    if (displayTypeState === 1) {
      hdncYottaSfroTgro.classList.remove("cl-mdt-hdnc-y-sfro-handler");
      hdncYottaSfroBgro.classList.remove("cl-mdt-hdnc-y-sfro-handler");
    }
    /*  */
    for (let i = 0; i < hdncZettaTlo.length; i++) {
      if (hdncY[i].isActive) {
        switch (displayTypeState) {
          case 1: {
            eventData.currentTarget = hdncZettaTlo[i];
            HdncHandler.mdtHdncZettaTlo(eventData);
            break;
          }
          case 2: {
            eventData.currentTarget = hdncZettaTlo[i];
            HdncHandler.tdtHdncZettaTlo(eventData);
            break;
          }
          case 3: {
            eventData.currentTarget = hdncZettaTlo[i];
            eventData.type = "mouseleave";
            HdncHandler.ddtHdncYotta(eventData);
            /*  */
            const {
              hdncPetaBlo
            } = HdncConfig.getHdncBloEbGroup(i);
            for (let j = 0; j < hdncExaBlo[i].length; j++) {
              eventData.currentTarget = hdncPetaBlo[j];
              eventData.type = "mouseleave";
              HdncHandler.ddtHdncPetaBlo(eventData);
            }
            break;
          }
        }
      }
    }
  }
  /* ================================================== */
  static setTdtHdnc(targetIndex) {
    const {
      hdncY
    } = HdncConfig.getHdncGroup();
    const {
      hdncZettaTlo
    } = HdncConfig.getHdncTloGroup();
    /*  */
    const eventData = {};
    for (let i = 0; i < hdncY.length; i++) {
      if (hdncY[i].isActive && targetIndex !== i) {
        eventData.currentTarget = hdncZettaTlo[i];
        HdncHandler.tdtHdncZettaTlo(eventData);
        return;
      }
    }
  }
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