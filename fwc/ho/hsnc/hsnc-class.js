/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  FwaConfig
} from "../../../fwa/fwa-config.js";
/* import {
  HsncConfig
} from "./hsnc-config.js"; */
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
    HsncSet.setHsnc(displayTypeState);
  }
  static setHsnc(displayTypeState) {
    HsncSet.setHsnc(displayTypeState);
  }
}
class HsncController {
  static init() {
    /* HsncManager.generate(); */
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
    /* const {
      hsncExaBlo
    } = HsncConfig.getHsncBloGroup(); */
    /* for (let i = 0; i < hsncExaBlo.length; i++) {
      const {
        hsncPetaBlo
      } = HsncConfig.getHsncBloEbGroup(i);
      HsncSet.setHsncExaBlo(hsncExaBlo[i], hsncPetaBlo, 0);
      hsncY[i].isActive = false;
      hsncY[i].index = i;
      /*  
      hsncY[i].timeoutId = null;
      hsncY[i].isTimeout = false;
      /*  
      hsncY[i].isResize = true;
      hsncY[i].isSensorResize = false;
      /*  
      for (let j = 0; j < hsncPetaBlo.length; j++) {
        hsncPetaBlo[j].index = j;
        /*  
        hsncPetaBlo[j].timeoutId = null;
      }
    } */
    /* !!!!! v1.1.19a-5 !!!!! */
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
    /*  */
  }
  static load() {
    HsncUtil.updateHsncExaBloGridTemplateRows();
    HsncUtil.setHsncExaBloGridTemplateRows(false);
  }
  static resizeDisplay() {
    /* const {
      hsncY
    } = HsncConfig.getHsncGroup();
    for (let i = 0; i < hsncY.length; i++) {
      hsncY[i].isResize = true;
    } */
    /* !!!!! v1.1.19a-5 !!!!! */
    HsncUtil.resetHsncHandler(HsncHandler);
    /*  */
  }
  static resizeSensor() {
    const {
      hsncY
    } = HsncConfig.getHsncGroup();
    /* const hsncGigaBloBgroBuffer = 24;
    if (FwaConfig.currentDisplayType === 1) {
      for (let i = 0; i < hsncY.length; i++) {
        hsncY[i].isSensorResize = true;
        if (hsncY[i].isActive) {
          const {
            hsncGigaBloText,
            hsncGigaBloBgro
          } = HsncConfig.getHsncBloEbGroup(i);
          for (let j = 0; j < hsncGigaBloBgro.length; j++) {
            HsncSet.setDataHsncGigaBloBgro(
              hsncGigaBloBgro[j],
              hsncGigaBloText[j],
              hsncGigaBloBgroBuffer
            );
            HsncSet.setHsncGigaBloBgro(hsncGigaBloBgro[j], true);
          }
          hsncY[i].isSensorResize = false;
        }
      }
    }
    HsncHandler.adtHsncZettaEcoSfro(); */
    /* !!!!! :v1.1.19a-5: !!!!!! */
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
    /* !!!!! ;v1.1.19a-5; !!!!!! */
  }
  static generate_Old() {
    const {
      hsncR
    } = HsncConfig.getHsncRoot();
    const hsncFragment = document.createDocumentFragment();
    let tempGenerateElement = null;
    let tempSaveElement = {};
    /* =============== :Ys, Tlo, Zs Group: =============== */
    for (let ysi = 0; ysi < HsncConfig.hsncExaTloText.length; ysi++) {
      /* ==========----- :Hsnc Group: -----========== */
      for (let zsi = 0; zsi < HsncConfig.hsncGroup.length; zsi++) {
        tempGenerateElement = FwcAccessor.getGenerateElement2(
          HsncConfig.hsncGroup[zsi]
        );
        tempSaveElement[HsncConfig.hsncGroup[zsi].elementId] = tempGenerateElement;
      }
      /* ==========----- ;Hsnc Group; -----========== */
      /* ==========----- :Tlo Group: -----========== */
      for (let zsi = 0; zsi < HsncConfig.hsncTloGroup.length; zsi++) {
        tempGenerateElement = FwcAccessor.getGenerateElement2(
          HsncConfig.hsncTloGroup[zsi],
          [ysi]
        );
        tempSaveElement[HsncConfig.hsncTloGroup[zsi].elementId] = tempGenerateElement;
      }
      /* ==========----- ;Tlo Group; -----========== */
      /* ==========----- :Blo Group: -----========== */
      for (let zsi = 0; zsi < HsncConfig.hsncBloGroup.length; zsi++) {
        tempGenerateElement = FwcAccessor.getGenerateElement2(
          HsncConfig.hsncBloGroup[zsi]
        );
        tempSaveElement[HsncConfig.hsncBloGroup[zsi].elementId] = tempGenerateElement;
      }
      /* ==========----- ;Blo Group; -----========== */
      /* ==========----- :Blo Eb Group: -----========== */
      for (let zsi = 0; zsi < HsncConfig.hsncGigaBloText[ysi].length; zsi++) {
        for (let esi = 0; esi < HsncConfig.hsncBloEbGroup.length; esi++) {
          tempGenerateElement = FwcAccessor.getGenerateElement2(
            HsncConfig.hsncBloEbGroup[esi],
            [ysi, zsi]
          );
          tempSaveElement[HsncConfig.hsncBloEbGroup[esi].elementId] = tempGenerateElement;
        }
        /* HsncSet.setAppendBloEbGroup(tempSaveElement); */
        HsncConfig.hsncBloEbGroupAppend(tempSaveElement);
      }
      /* ==========----- ;Blo Eb Group; -----========== */
      HsncConfig.hsncTloGroupAppend(tempSaveElement);
      HsncConfig.hsncBloGroupAppend(tempSaveElement);
      HsncConfig.hsncGroupAppend(tempSaveElement);
      hsncFragment.append(tempSaveElement["hsncY"]);
      tempSaveElement = {};
    }
    /* =============== ;Ys, Tlo, Zs Group; =============== */
    /* =============== :Yotta Group: =============== */
    /* for (let ysi = 0; ysi < HsncConfig.hsncEcoGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement2(
        HsncConfig.hsncEcoGroup[ysi]
      );
      tempSaveElement[HsncConfig.hsncEcoGroup[ysi].elementId] = tempGenerateElement;
    }
    HsncConfig.hsncEcoGroupAppend(tempSaveElement);
    hsncFragment.append(tempSaveElement["hsncYottaEco"]); */
    for (let ysi = 0; ysi < HsncConfig.hsncYottaGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement2(
        HsncConfig.hsncYottaGroup[ysi]
      );
      tempSaveElement[HsncConfig.hsncYottaGroup[ysi].elementId] = tempGenerateElement;
    }
    HsncConfig.hsncYottaGroupAppend(tempSaveElement, hsncFragment);
    /* =============== ;Yotta Group; =============== */
    hsncR.append(hsncFragment);
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
    /* if (isEventOnLoad) {
      hsncR.addEventListener("scroll", HsncHandler.adtHsncZettaEcoSfro);
    } */
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
    /* hsncR[eventListenerType]("scroll", HsncHandler.adtHsncZettaEcoSfro); */
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
      /* hsncY[targetIndex].timeoutId = setTimeout(
        HsncSet.setTimerMdtHsncYotta,
        300,
        targetIndex
      ); */
      /* PASS transitionend */
    } else {
      /* clearTimeout(hsncY[targetIndex].timeoutId);
      for (let i = 0; i < hsncGigaBloBgro.length; i++) {
        HsncSet.setHsncGigaBloBgro(hsncGigaBloBgro[i], false);
        clearTimeout(hsncPetaBlo[i].timeoutId);
      } */
      /* Util */
      HsncUtil.timerHsncGigaBloBgro(targetIndex, false);
      HsncUtil.setHsncGigaBloBgroWidth(targetIndex, false);
    }
    /*  */
    hsncY[targetIndex].classList[clType](clData);
    hsncExaTloText[targetIndex].classList[clType](clData);
    hsncExaTloRgro[targetIndex].classList[clType](clData);
    hsncExaTloBgro[targetIndex].classList[clType](clData);
    /* HsncSet.setHsncExaBlo(hsncExaBlo[targetIndex], hsncTeraBlo, hsncExaBloSize); */
    for (let ebi = 0; ebi < hsncTeraBlo.length; ebi++) {
      hsncTeraBlo[ebi].classList[clType](clData);
    }
    /*  */
    hsncY[targetIndex].isActive = isActive;
    /* HsncHandler.adtHsncZettaEcoSfro(); */
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
      /* hsncY[targetIndex].timeoutId = setTimeout(
        HsncSet.setTimerTdtHsncYotta,
        300,
        targetIndex
      ); */
    } else {
      /* clearTimeout(hsncY[targetIndex].timeoutId);
      for (let i = 0; i < hsncGigaBloBgro.length; i++) {
        HsncSet.setHsncGigaBloBgro(hsncGigaBloBgro[i], false);
        clearTimeout(hsncPetaBlo[i].timeoutId);
      } */
      HsncUtil.timerHsncGigaBloBgro(targetIndex, false);
      HsncUtil.setHsncGigaBloBgroWidth(targetIndex, false);
    }
    /*  */
    hsncY[targetIndex].classList[clType](clData);
    hsncExaTloText[targetIndex].classList[clType](clData);
    hsncExaTloRgro[targetIndex].classList[clType](clData);
    hsncExaTloBgro[targetIndex].classList[clType](clData);
    /* HsncSet.setHsncExaBlo(hsncExaBlo[targetIndex], hsncTeraBlo, hsncExaBloSize); */
    for (let ybi = 0; ybi < hsncTeraBlo.length; ybi++) {
      hsncTeraBlo[ybi].classList[clType](clData);
    }
    /*  */
    hsncY[targetIndex].isActive = isActive;
    /* HsncHandler.adtHsncZettaEcoSfro(); */
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
    /* if (isActive && hsncY[targetIndex].isResize && eventType === "click") {
      console.log("ddt update");
      for (let i = 0; i < hsncGigaBloBgro.length; i++) {
        HsncSet.setDataHsncGigaBloBgro(
          hsncGigaBloBgro[i],
          hsncGigaBloText[i],
          gigaBgroBuffer
        );
      }
      hsncY[targetIndex].isResize = false;
    } */
    /*  */
    if ((eventType === "mouseenter" || eventType === "mouseleave") && isActive) {
      hsncExaTloText[targetIndex].classList[clHoverType](clHoverData);
      hsncExaTloRgro[targetIndex].classList[clHoverType](clHoverData);
      hsncExaTloBgro[targetIndex].classList[clHoverType](clHoverData);
    } else if (eventType === "click") {
      hsncY[targetIndex].classList[clClickType](clClickData);
      hsncExaTloRgro[targetIndex].classList[clClickType](clClickData);
      /* HsncSet.setHsncExaBlo(hsncExaBlo[targetIndex], hsncGigaBloText, hsncExaBloSize); */
      for (let ybi = 0; ybi < hsncTeraBlo.length; ybi++) {
        hsncTeraBlo[ybi].classList[clClickType](clClickData);
      }
      hsncY[targetIndex].isActive = isActive;
      /* HsncHandler.adtHsncZettaEcoSfro(); */
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
    /* HsncSet.setHsncGigaBloBgro(hsncGigaBloBgro[eventIndex], isActive); */
    HsncUtil.setHsncGigaBloBgroWidth(targetIndex, isActive, eventIndex);
  }
  /* ================================================== */
  static adtHsncZettaEcoSfro() {
    const {
      hsncR
    } = HsncConfig.getHsncRoot();
    const {
      hsncY
    } = HsncConfig.getHsncGroup();
    const {
      hsncZettaTlo
    } = HsncConfig.getHsncTloGroup();
    /* const {
      hsncZettaEcoSfroTgro,
      hsncZettaEcoSfroBgro
    } = HsncConfig.getHsncEcoGroup(); */
    const {
      hsncYottaSfroTo,
      hsncYottaSfroBo
    } = HsncConfig.getHsncYottaGroup();
    /*  */
    const scrollTop = hsncR.scrollTop;
    const scrollHeight = hsncR.scrollHeight;
    const clientHeight = hsncR.clientHeight;
    const scrollBuffer = 16;
    const defaultHeight = 4 * 16;
    let tgroType = "";
    let bgroType = "";
    let scrollable = 0;
    let tempHeight = hsncZettaTlo.length * defaultHeight;
    for (let i = 0; i < hsncY.length; i++) {
      if (hsncY[i].isActive) {
        const {
          hsncPetaBlo
        } = HsncConfig.getHsncBloEbGroup(i);
        tempHeight += hsncPetaBlo.length * defaultHeight;
      }
    }
    if (tempHeight > clientHeight) {
      scrollable = tempHeight - clientHeight;
    }
    if (scrollable <= scrollBuffer) {
      if (HsncAccessor.hsncScrollState !== 0) {
        tgroType = "remove";
        bgroType = "remove";
        HsncAccessor.hsncScrollState = 0;
      }
    } else {
      if (scrollTop < scrollBuffer) {
        if (HsncAccessor.hsncScrollState !== 1) {
          hsncR.scroll(0, 0);
          tgroType = "remove";
          bgroType = "add";
          HsncAccessor.hsncScrollState = 1;
        }
      } else if (scrollTop > scrollable - scrollBuffer) {
        if (HsncAccessor.hsncScrollState !== 2) {
          hsncR.scroll(0, scrollHeight);
          tgroType = "add";
          bgroType = "remove";
          HsncAccessor.hsncScrollState = 2;
        }
      } else {
        if (HsncAccessor.hsncScrollState !== 3) {
          tgroType = "add";
          bgroType = "add";
          HsncAccessor.hsncScrollState = 3;
        }
      }
    }
    if (tgroType) {
      hsncYottaSfroTo.classList[tgroType]("cl-adt-hsnc-y-sfro-handler");
    }
    if (bgroType) {
      hsncYottaSfroBo.classList[bgroType]("cl-adt-hsnc-y-sfro-handler");
    }
  }
}
class HsncGet {
  /* static getHsncRoot() {
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HsncAccessor.hsncCache,
      HsncConfig.hsncRoot
    );
    return saveVerifyGroup;
  }
  static getHsncGroup() {
    const {
      hsncR
    } = HsncConfig.getHsncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HsncAccessor.hsncCache,
      HsncConfig.hsncGroup,
      hsncR
    );
    return saveVerifyGroup;
  }
  static getHsncTloGroup() {
    const {
      hsncR
    } = this.getHsncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HsncAccessor.hsncCache,
      HsncConfig.hsncTloGroup,
      hsncR
    );
    return saveVerifyGroup;
  }
  static getHsncBloGroup() {
    const {
      hsncR
    } = this.getHsncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HsncAccessor.hsncCache,
      HsncConfig.hsncBloGroup,
      hsncR
    );
    return saveVerifyGroup;
  }
  static getHsncBloEbGroup(gIndex) {
    const {
      hsncExaBlo
    } = this.getHsncBloGroup();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HsncAccessor.hsncCache,
      HsncConfig.hsncBloEbGroup,
      hsncExaBlo[gIndex],
      gIndex
    );
    return saveVerifyGroup;
  } */
  /* static getHsncEcoGroup() {
    const {
      hsncR
    } = HsncConfig.getHsncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HsncAccessor.hsncCache,
      HsncConfig.hsncEcoGroup,
      hsncR
    );
    return saveVerifyGroup;
  } */
  /* static getHsncYottaGroup() {
    const {
      hsncR
    } = HsncConfig.getHsncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HsncAccessor.hsncCache,
      HsncConfig.hsncYottaGroup,
      hsncR
    );
    return saveVerifyGroup;
  } */
}
class HsncSet {
  static setDataHsncGigaBloBgro(setElement, referElement, buffer) {
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
  static setHsncGigaBloBgro(setElement, isWidthActive) {
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
  /* ================================================== */
  static setTimerMdtHsncYotta(targetIndex) {
    const {
      hsncY
    } = HsncConfig.getHsncGroup();
    const {
      hsncPetaBlo,
      hsncGigaBloText,
      hsncGigaBloBgro
    } = HsncConfig.getHsncBloEbGroup(targetIndex);
    const gigaBgroBuffer = 24;
    if (hsncY[targetIndex].isResize) {
      for (let i = 0; i < hsncGigaBloBgro.length; i++) {
        HsncSet.setDataHsncGigaBloBgro(
          hsncGigaBloBgro[i],
          hsncGigaBloText[i],
          gigaBgroBuffer
        );
      }
      hsncY[targetIndex].isSensorResize = false;
      hsncY[targetIndex].isResize = false;
    } else if (hsncY[targetIndex].isSensorResize) {
      for (let i = 0; i < hsncGigaBloBgro.length; i++) {
        HsncSet.setDataHsncGigaBloBgro(
          hsncGigaBloBgro[i],
          hsncGigaBloText[i],
          gigaBgroBuffer
        );
      }
      hsncY[targetIndex].isSensorResize = false;
    }
    for (let i = 0; i < hsncGigaBloBgro.length; i++) {
      hsncPetaBlo[i].timeoutId = setTimeout(
        HsncSet.setTimerMtdtHsncPetaBlo,
        150 * i,
        hsncGigaBloBgro[i]
      );
    }
  }
  static setTimerTdtHsncYotta(targetIndex) {
    const {
      hsncY
    } = HsncConfig.getHsncGroup();
    const {
      hsncPetaBlo,
      hsncGigaBloText,
      hsncGigaBloBgro
    } = HsncConfig.getHsncBloEbGroup(targetIndex);
    const gigaBgroBuffer = 24;
    if (hsncY[targetIndex].isResize) {
      for (let i = 0; i < hsncGigaBloBgro.length; i++) {
        HsncSet.setDataHsncGigaBloBgro(
          hsncGigaBloBgro[i],
          hsncGigaBloText[i],
          gigaBgroBuffer
        );
      }
      hsncY[targetIndex].isResize = false;
    }
    for (let i = 0; i < hsncGigaBloBgro.length; i++) {
      hsncPetaBlo[i].timeoutId = setTimeout(
        HsncSet.setTimerMtdtHsncPetaBlo,
        150 * i,
        hsncGigaBloBgro[i]
      );
    }
  }
  /* ================================================== */
  static setTimerMtdtHsncPetaBlo(setElement) {
    HsncSet.setHsncGigaBloBgro(setElement, true);
  }
  /* ================================================== */
  static setHsncExaBlo(setElement, referElement, size) {
    let gridTemplateData = "";
    for (let i = 0; i < referElement.length; i++) {
      gridTemplateData += size + "rem" + " ";
    }
    setElement.style.gridTemplateRows = gridTemplateData;
  }
  /* ================================================== */
  static setHsnc(displayTypeState) {
    const {
      hsncY
    } = HsncConfig.getHsncGroup();
    const {
      hsncZettaTlo
    } = HsncConfig.getHsncTloGroup();
    /* const {
      hsncZettaEcoSfroTgro,
      hsncZettaEcoSfroBgro
    } = HsncConfig.getHsncEcoGroup(); */
    const {
      hsncYottaSfroTo,
      hsncYottaSfroBo
    } = HsncConfig.getHsncYottaGroup();
    const eventData = {};
    hsncYottaSfroTo.classList.remove("cl-adt-hsnc-y-sfro-handler");
    hsncYottaSfroBo.classList.remove("cl-adt-hsnc-y-sfro-handler");
    HsncAccessor.hsncScrollState = 0;
    for (let i = 0; i < hsncZettaTlo.length; i++) {
      if (hsncY[i].isActive) {
        switch (displayTypeState) {
          case 1: {
            eventData.currentTarget = hsncZettaTlo[i];
            HsncHandler.mdtHsncZettaTlo(eventData);
            break;
          }
          case 2: {
            eventData.currentTarget = hsncZettaTlo[i];
            HsncHandler.tdtHsncZettaTlo(eventData);
            break;
          }
          case 3: {
            eventData.currentTarget = hsncZettaTlo[i];
            eventData.type = "click"; 
            HsncHandler.ddtHsncZettaTlo(eventData); 
            eventData.type = "mouseleave"; 
            HsncHandler.ddtHsncZettaTlo(eventData);
            break;
          }
        }
      }
    }
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