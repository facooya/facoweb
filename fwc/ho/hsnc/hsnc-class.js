/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  FwaConfig
} from "../../../fwa/fwa-config.js";
import {
  FwcAccessor,
  HsncConfig,
  HsncUtil
} from "../../fwc-hub.js";
/*  */
class HsncAccessor {
  static hsncCache = {};
  static isActiveHsnc = false;
  static hsncScrollState = 0;
  static getHsncRoot() {
    return HsncConfig.getHsncRoot();
  }
  static getHsncGroup() {
    return HsncConfig.getHsncGroup();
  }
  static resetHsnc(displayTypeState) {
    HsncUtil.resetHsncHandler(HsncHandler, displayTypeState);
  }
  static setHsnc(displayTypeState) {
    HsncUtil.resetHsncHandler(HsncHandler, displayTypeState);
  }
}
class HsncController {
  static init() {
    HsncConfig.hsncGenerate();
    HsncManager.init();
  }
  static load() {
    HsncManager.event(true);
    HsncManager.load();
  }
  static resizeDisplay() {
    HsncManager.resizeDisplay();
    HsncManager.event(false);
    HsncManager.event(true);
  }
  static resizeSensor() {
    HsncManager.resizeSensor();
  }
}
class HsncManager {
  static init() {
    const {
      hsncY
    } = HsncConfig.getHsncGroup();
    for (let ybi = 0; ybi < hsncY.length; ybi++) {
      hsncY[ybi].index = ybi;
      hsncY[ybi].isActive = false;
      const {
        hsncPetaBlo,
        hsncGigaBloBgro
      } = HsncConfig.getHsncBloEbGroup(ybi);
      for (let ebi = 0; ebi < hsncPetaBlo.length; ebi++) {
        hsncPetaBlo[ebi].index = ebi;
        hsncGigaBloBgro[ebi].timerId = null;
      }
    }
  }
  static load() {
    HsncUtil.updateHsncExaBloGridTemplateRows();
    HsncUtil.setHsncExaBloGridTemplateRows(false);
  }
  static resizeDisplay() {
    HsncUtil.resetHsncHandler(HsncHandler);
  }
  static resizeSensor() {
    const {
      hsncY
    } = HsncConfig.getHsncGroup();
    for (let ybi = 0; ybi < hsncY.length; ybi++) {
      if (hsncY[ybi].isActive) {
        HsncUtil.updateHsncGigaBloBgroLeft(ybi);
        HsncUtil.updateHsncGigaBloBgroWidth(ybi);
        /*  */
        HsncUtil.setHsncGigaBloBgroLeft(ybi);
        HsncUtil.setHsncGigaBloBgroWidth(ybi, true);
      }
    }
    /*  */
    switch (FwaConfig.currentDisplayType) {
      case 1: {
        HsncHandler.mdtHsncRootScroll();
        break;
      }
      case 2: {
        HsncHandler.tdtHsncRootScroll();
        break;
      }
      case 3: {
        HsncHandler.ddtHsncRootScroll();
        break;
      }
    }
  }
  static event(isActive) {
    const {
      hsncR
    } = HsncConfig.getHsncRoot();
    const {
      hsncY
    } = HsncConfig.getHsncGroup();
    const {
      hsncZettaTlo
    } = HsncConfig.getHsncTloGroup();
    const {
      hsncExaBlo
    } = HsncConfig.getHsncBloGroup();
    /*  */
    const eventType = {
      click: "click",
      transitionEnd: "transitionend",
      mouseEnter: "mouseenter",
      mouseLeave: "mouseleave",
      scroll: "scroll"
    };
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
        hsncR[eventListenerType](
          eventType.scroll,
          HsncHandler.mdtHsncRootScroll
        );
        for (let ybi = 0; ybi < hsncY.length; ybi++) {
          hsncZettaTlo[ybi][eventListenerType](
            eventType.click,
            HsncHandler.mdtHsncZettaTlo
          );
          hsncExaBlo[ybi][eventListenerType](
            eventType.transitionEnd,
            HsncHandler.mdtHsncExaBloTransitionEnd
          );
        }
        break;
      }
      case 2: {
        hsncR[eventListenerType](
          eventType.scroll,
          HsncHandler.tdtHsncRootScroll
        );
        for (let ybi = 0; ybi < hsncY.length; ybi++) {
          hsncZettaTlo[ybi][eventListenerType](
            eventType.click,
            HsncHandler.tdtHsncZettaTlo
          );
          hsncExaBlo[ybi][eventListenerType](
            eventType.transitionEnd,
            HsncHandler.tdtHsncExaBloTransitionEnd
          );
        }
        break;
      }
      case 3: {
        hsncR[eventListenerType](
          eventType.scroll,
          HsncHandler.ddtHsncRootScroll
        );
        for (let ybi = 0; ybi < hsncY.length; ybi++) {
          hsncZettaTlo[ybi][eventListenerType](
            eventType.click,
            HsncHandler.ddtHsncZettaTlo
          );
          hsncZettaTlo[ybi][eventListenerType](
            eventType.mouseEnter,
            HsncHandler.ddtHsncZettaTlo
          );
          hsncZettaTlo[ybi][eventListenerType](
            eventType.mouseLeave,
            HsncHandler.ddtHsncZettaTlo
          );
          hsncExaBlo[ybi][eventListenerType](
            eventType.transitionEnd,
            HsncHandler.ddtHsncExaBloTransitionEnd
          );
          const {
            hsncPetaBlo
          } = HsncConfig.getHsncBloEbGroup(ybi);
          for (let ebi = 0; ebi < hsncPetaBlo.length; ebi++) {
            hsncPetaBlo[ebi][eventListenerType](
              eventType.mouseEnter,
              HsncHandler.ddtHsncPetaBlo
            );
            hsncPetaBlo[ebi][eventListenerType](
              eventType.mouseLeave,
              HsncHandler.ddtHsncPetaBlo
            );
          }
        }
        break;
      }
    }
  }
}
class HsncHandler {
  static mdtHsncZettaTlo(eventData) {
    const {
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hsnc-y");
    const {
      hsncY
    } = HsncConfig.getHsncGroup();
    const {
      hsncExaTloText,
      hsncExaTloRgro,
      hsncExaTloBgro
    } = HsncConfig.getHsncTloGroup();
    const {
      hsncTeraBlo
    } = HsncConfig.getHsncBloEbGroup(targetIndex);
    /*  */
    const clData = "cl-mdt-hsnc-z-tlo-handler";
    let isActive = false;
    let clType = "remove";
    if (!hsncY[targetIndex].isActive) {
      isActive = true;
      clType = "add";
    }
    /*  */
    if (isActive) {
      /* PASS */
    } else {
      HsncUtil.timerHsncGigaBloBgro(targetIndex, false);
      HsncUtil.setHsncGigaBloBgroWidth(targetIndex, false);
    }
    /*  */
    hsncY[targetIndex].classList[clType](clData);
    hsncExaTloText[targetIndex].classList[clType](clData);
    hsncExaTloRgro[targetIndex].classList[clType](clData);
    hsncExaTloBgro[targetIndex].classList[clType](clData);
    for (let ebi = 0; ebi < hsncTeraBlo.length; ebi++) {
      hsncTeraBlo[ebi].classList[clType](clData);
    }
    /*  */
    hsncY[targetIndex].isActive = isActive;
    HsncUtil.setHsncExaBloGridTemplateRows(isActive, targetIndex);
  }
  static mdtHsncRootScroll() {
    const {
      hsncR
    } = HsncConfig.getHsncRoot();
    const {
      hsncYottaSfroTo,
      hsncYottaSfroBo
    } = HsncConfig.getHsncYottaGroup();
    /*  */
    const innerHeight = window.innerHeight;
    const calcHeight = innerHeight / 10;
    /*  */
    const scrollTop = hsncR.scrollTop;
    const scrollHeight = hsncR.scrollHeight;
    const clientHeight = hsncR.clientHeight;
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
    hsncYottaSfroTo.style.height = setToHeight;
    hsncYottaSfroBo.style.height = setBoHeight;
  }
  static mdtHsncExaBloTransitionEnd(eventData) {
    const {
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hsnc-y");
    const {
      hsncY
    } = HsncConfig.getHsncGroup();
    const {
      hsncExaBlo
    } = HsncConfig.getHsncBloGroup();
    /*  */
    if (
      eventData.target === hsncExaBlo[targetIndex] &&
      eventData.propertyName === "grid-template-rows" &&
      hsncY[targetIndex].isActive
    ) {
      HsncUtil.updateHsncGigaBloBgroLeft(targetIndex);
      HsncUtil.updateHsncGigaBloBgroWidth(targetIndex);
      HsncUtil.setHsncGigaBloBgroLeft(targetIndex);
      HsncUtil.timerHsncGigaBloBgro(targetIndex, true);
      /*  */
      HsncHandler.mdtHsncRootScroll();
    }
  }
  /* ================================================== */
  static tdtHsncRootScroll() {
    const {
      hsncR
    } = HsncConfig.getHsncRoot();
    const {
      hsncYottaSfroTo,
      hsncYottaSfroBo
    } = HsncConfig.getHsncYottaGroup();
    /*  */
    const innerHeight = window.innerHeight;
    const calcHeight = innerHeight / 10;
    /*  */
    const scrollTop = hsncR.scrollTop;
    const scrollHeight = hsncR.scrollHeight;
    const clientHeight = hsncR.clientHeight;
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
    hsncYottaSfroTo.style.height = setToHeight;
    hsncYottaSfroBo.style.height = setBoHeight;
  }
  /* -------------------------------------------------- */
  static tdtHsncZettaTlo(eventData) {
    const {
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hsnc-y");
    const {
      hsncY
    } = HsncConfig.getHsncGroup();
    const {
      hsncExaTloText,
      hsncExaTloRgro,
      hsncExaTloBgro
    } = HsncConfig.getHsncTloGroup();
    const {
      hsncTeraBlo
    } = HsncConfig.getHsncBloEbGroup(targetIndex);
    /*  */
    const clData = "cl-tdt-hsnc-z-tlo-handler";
    let isActive = false;
    let clType = "remove";
    if (!hsncY[targetIndex].isActive) {
      isActive = true;
      clType = "add";
    }
    /*  */
    if (isActive) {

    } else {
      HsncUtil.timerHsncGigaBloBgro(targetIndex, false);
      HsncUtil.setHsncGigaBloBgroWidth(targetIndex, false);
    }
    /*  */
    hsncY[targetIndex].classList[clType](clData);
    hsncExaTloText[targetIndex].classList[clType](clData);
    hsncExaTloRgro[targetIndex].classList[clType](clData);
    hsncExaTloBgro[targetIndex].classList[clType](clData);
    for (let ybi = 0; ybi < hsncTeraBlo.length; ybi++) {
      hsncTeraBlo[ybi].classList[clType](clData);
    }
    /*  */
    hsncY[targetIndex].isActive = isActive;
    HsncUtil.setHsncExaBloGridTemplateRows(isActive, targetIndex);
  }
  /* -------------------------------------------------- */
  static tdtHsncExaBloTransitionEnd(eventData) {
    const {
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hsnc-y");
    const {
      hsncY
    } = HsncConfig.getHsncGroup();
    const {
      hsncExaBlo
    } = HsncConfig.getHsncBloGroup();
    /*  */
    if (
      eventData.target === hsncExaBlo[targetIndex] &&
      eventData.propertyName === "grid-template-rows" &&
      hsncY[targetIndex].isActive
    ) {
      HsncUtil.updateHsncGigaBloBgroLeft(targetIndex);
      HsncUtil.updateHsncGigaBloBgroWidth(targetIndex);
      HsncUtil.setHsncGigaBloBgroLeft(targetIndex);
      HsncUtil.timerHsncGigaBloBgro(targetIndex, true);
      /*  */
      HsncHandler.tdtHsncRootScroll();
    }
  }
  /* ================================================== */
  static ddtHsncRootScroll() {
    const {
      hsncR
    } = HsncConfig.getHsncRoot();
    const {
      hsncYottaSfroTo,
      hsncYottaSfroBo
    } = HsncConfig.getHsncYottaGroup();
    /*  */
    const innerHeight = window.innerHeight;
    const calcHeight = innerHeight / 10;
    /*  */
    const scrollTop = hsncR.scrollTop;
    const scrollHeight = hsncR.scrollHeight;
    const clientHeight = hsncR.clientHeight;
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
    hsncYottaSfroTo.style.height = setToHeight;
    hsncYottaSfroBo.style.height = setBoHeight;
  }
  /* -------------------------------------------------- */
  static ddtHsncZettaTlo(eventData) {
    const {
      eventType,
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hsnc-y");
    const {
      hsncY
    } = HsncConfig.getHsncGroup();
    const {
      hsncExaTloText,
      hsncExaTloRgro,
      hsncExaTloBgro
    } = HsncConfig.getHsncTloGroup();
    const {
      hsncTeraBlo
    } = HsncConfig.getHsncBloEbGroup(targetIndex);
    /*  */
    const clHoverData = "cl-ddt-hsnc-z-tlo-handler-hover";
    const clClickData = "cl-ddt-hsnc-z-tlo-handler-click";
    let isActive = false;
    let clClickType = "remove";
    let clHoverType = "";
    if (!hsncY[targetIndex].isActive) {
      isActive = true;
      clClickType = "add";
      if (eventType === "mouseenter") {
        clHoverType = "add";
      } else if (eventType === "mouseleave") {
        clHoverType = "remove";
      }
    }
    /*  */
    if ((eventType === "mouseenter" || eventType === "mouseleave") && isActive) {
      hsncExaTloText[targetIndex].classList[clHoverType](clHoverData);
      hsncExaTloRgro[targetIndex].classList[clHoverType](clHoverData);
      hsncExaTloBgro[targetIndex].classList[clHoverType](clHoverData);
    } else if (eventType === "click") {
      hsncY[targetIndex].classList[clClickType](clClickData);
      hsncExaTloRgro[targetIndex].classList[clClickType](clClickData);
      for (let ybi = 0; ybi < hsncTeraBlo.length; ybi++) {
        hsncTeraBlo[ybi].classList[clClickType](clClickData);
      }
      hsncY[targetIndex].isActive = isActive;
      HsncUtil.setHsncExaBloGridTemplateRows(isActive, targetIndex);
    }
  }
  /* -------------------------------------------------- */
  static ddtHsncExaBloTransitionEnd(eventData) {
    const {
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hsnc-y");
    const {
      hsncY
    } = HsncConfig.getHsncGroup();
    const {
      hsncExaBlo
    } = HsncConfig.getHsncBloGroup();
    /*  */
    if (
      eventData.target === hsncExaBlo[targetIndex] &&
      eventData.propertyName === "grid-template-rows" &&
      hsncY[targetIndex].isActive
    ) {
      HsncUtil.updateHsncGigaBloBgroLeft(targetIndex);
      HsncUtil.updateHsncGigaBloBgroWidth(targetIndex);
      HsncUtil.setHsncGigaBloBgroLeft(targetIndex);
      /*  */
      HsncHandler.ddtHsncRootScroll();
    }
  }
  /* -------------------------------------------------- */
  static ddtHsncPetaBlo(eventData) {
    const {
      eventType,
      eventIndex,
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hsnc-y");
    const {
      hsncGigaBloText,
      hsncGigaBloRgro
    } = HsncConfig.getHsncBloEbGroup(targetIndex);
    /*  */
    const clData = "cl-ddt-hsnc-p-blo-handler";
    let isActive = false;
    let clType = "remove";
    if (eventType === "mouseenter") {
      isActive = true;
      clType = "add";
    }
    /*  */
    hsncGigaBloText[eventIndex].classList[clType](clData);
    hsncGigaBloRgro[eventIndex].classList[clType](clData);
    /*  */
    HsncUtil.setHsncGigaBloBgroWidth(targetIndex, isActive, eventIndex);
  }
}
export {
  HsncAccessor,
  HsncController
};
/* NOTE
 * HsncUtility.setTeraBgro.setLeft:
 *   calc(50% - (sourceWidth / 2)px - (buffer / 2)px)
 */
/* AUTHORSHIP
 * Founder: Facooya
 */