/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  FwaConfig
} from "../../../fwa/fwa-config.js";
import {
  HsncConfig
} from "./hsnc-config.js";
import {
  FwcAccessor
} from "../../fwc-hub.js";
/*  */
class HsncAccessor {
  static hsncCache = {};
  static isActiveHsnc = false;
  static hsncScrollState = 0;
  static getHsncRoot() {
    return HsncGet.getHsncRoot();
  }
  static getHsncGroup() {
    return HsncGet.getHsncGroup();
  }
  static resetHsnc(displayTypeState) {
    HsncSet.setHsnc(displayTypeState);
  }
  static setHsnc(displayTypeState) {
    HsncSet.setHsnc(displayTypeState);
  }
}
class HsncController {
  static process() {
    HsncManager.generate();
    HsncManager.init();
  }
  static processOnLoad() {
    HsncManager.event(true, true);
  }
  static processOnResize() {
    HsncManager.initOnResize();
    HsncManager.event(false);
    HsncManager.event(true);
  }
  static sensorOnResize() {
    HsncManager.initSensorOnResize();
  }
}
class HsncManager {
  static init() {
    const {
      hsncY
    } = HsncGet.getHsncGroup();
    const {
      hsncExaBlo
    } = HsncGet.getHsncBloGroup();
    for (let i = 0; i < hsncExaBlo.length; i++) {
      const {
        hsncPetaBlo
      } = HsncGet.getHsncBloEbGroup(i);
      HsncSet.setHsncExaBlo(hsncExaBlo[i], hsncPetaBlo, 0);
      hsncY[i].isActive = false;
      hsncY[i].index = i;
      /*  */
      hsncY[i].timeoutId = null;
      hsncY[i].isTimeout = false;
      /*  */
      hsncY[i].isResize = true;
      hsncY[i].isSensorResize = false;
      /*  */
      for (let j = 0; j < hsncPetaBlo.length; j++) {
        hsncPetaBlo[j].index = j;
        /*  */
        hsncPetaBlo[j].timeoutId = null;
      }
    }
  }
  static initOnResize() {
    const {
      hsncY
    } = HsncGet.getHsncGroup();
    for (let i = 0; i < hsncY.length; i++) {
      hsncY[i].isResize = true;
    }
  }
  static initSensorOnResize() {
    const {
      hsncY
    } = HsncGet.getHsncGroup();
    /* let hsncGigaBloBgroBuffer = null;
    if (FwaConfig.currentDisplayType === 3) {
      hsncGigaBloBgroBuffer = 32;
    } else {
      hsncGigaBloBgroBuffer = 24;
    } */
    const hsncGigaBloBgroBuffer = 24;
    if (FwaConfig.currentDisplayType === 1) {
      for (let i = 0; i < hsncY.length; i++) {
        hsncY[i].isSensorResize = true;
        if (hsncY[i].isActive) {
          const {
            hsncGigaBloText,
            hsncGigaBloBgro
          } = HsncGet.getHsncBloEbGroup(i);
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
    HsncHandler.adtHsncZettaEcoSfro();
  }
  static generate() {
    const {
      hsncR
    } = HsncGet.getHsncRoot();
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
  static event(isEventActive, isEventOnLoad) {
    const {
      hsncY
    } = HsncGet.getHsncGroup();
    const {
      hsncZettaTlo
    } = HsncGet.getHsncTloGroup();
    const {
      hsncR
    } = HsncGet.getHsncRoot();
    if (isEventOnLoad) {
      hsncR.addEventListener("scroll", HsncHandler.adtHsncZettaEcoSfro);
    }
    /*  */
    let displayTypeState = null;
    let eventListenerType = "";
    if (isEventActive) {
      displayTypeState = FwaConfig.currentDisplayType;
      eventListenerType = "addEventListener";
    } else {
      displayTypeState = FwaConfig.previousDisplayType;
      eventListenerType = "removeEventListener";
    }
    /*  */
    switch (displayTypeState) {
      case 1: {
        for (let i = 0; i < hsncY.length; i++) {
          hsncZettaTlo[i][eventListenerType](
            "click",
            HsncHandler.mdtHsncZettaTlo
          );
        }
        break;
      }
      case 2: {
        for (let i = 0; i < hsncY.length; i++) {
          hsncZettaTlo[i][eventListenerType](
            "click",
            HsncHandler.tdtHsncZettaTlo
          );
        }
        break;
      }
      case 3: {
        for (let i = 0; i < hsncY.length; i++) {
          hsncZettaTlo[i][eventListenerType](
            "mouseenter",
            HsncHandler.ddtHsncZettaTlo
          );
          hsncZettaTlo[i][eventListenerType](
            "mouseleave",
            HsncHandler.ddtHsncZettaTlo
          );
          hsncZettaTlo[i][eventListenerType](
            "click",
            HsncHandler.ddtHsncZettaTlo
          );
          const {
            hsncPetaBlo
          } = HsncGet.getHsncBloEbGroup(i);
          for (let j = 0; j < hsncPetaBlo.length; j++) {
            hsncPetaBlo[j][eventListenerType](
              "mouseenter",
              HsncHandler.ddtHsncPetaBlo
            );
            hsncPetaBlo[j][eventListenerType](
              "mouseleave",
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
    } = HsncGet.getHsncGroup();
    const {
      hsncExaTloText,
      hsncExaTloRgro,
      hsncExaTloBgro
    } = HsncGet.getHsncTloGroup();
    const {
      hsncExaBlo
    } = HsncGet.getHsncBloGroup();
    const {
      hsncPetaBlo,
      hsncTeraBlo,
      hsncGigaBloBgro
    } = HsncGet.getHsncBloEbGroup(targetIndex);
    /*  */
    let isActive = null;
    let type = "";
    let hsncExaBloSize = null;
    if (!hsncY[targetIndex].isActive) {
      isActive = true;
      type = "add";
      hsncExaBloSize = 4;
    } else {
      isActive = false;
      type = "remove";
      hsncExaBloSize = 0;
    }
    /*  */
    if (isActive) {
      hsncY[targetIndex].timeoutId = setTimeout(
        HsncSet.setTimerMdtHsncYotta,
        300,
        targetIndex
      );
    } else {
      clearTimeout(hsncY[targetIndex].timeoutId);
      for (let i = 0; i < hsncGigaBloBgro.length; i++) {
        HsncSet.setHsncGigaBloBgro(hsncGigaBloBgro[i], false);
        clearTimeout(hsncPetaBlo[i].timeoutId);
      }
    }
    /*  */
    hsncY[targetIndex].classList[type]("cl-mdt-hsnc-z-tlo-handler");
    hsncExaTloText[targetIndex].classList[type]("cl-mdt-hsnc-z-tlo-handler");
    hsncExaTloRgro[targetIndex].classList[type]("cl-mdt-hsnc-z-tlo-handler");
    hsncExaTloBgro[targetIndex].classList[type]("cl-mdt-hsnc-z-tlo-handler");
    HsncSet.setHsncExaBlo(hsncExaBlo[targetIndex], hsncTeraBlo, hsncExaBloSize);
    for (let i = 0; i < hsncTeraBlo.length; i++) {
      hsncTeraBlo[i].classList[type]("cl-mdt-hsnc-z-tlo-handler");
    }
    /*  */
    hsncY[targetIndex].isActive = isActive;
    HsncHandler.adtHsncZettaEcoSfro();
  }
  static tdtHsncZettaTlo(eventData) {
    const {
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hsnc-y");
    const {
      hsncY
    } = HsncGet.getHsncGroup();
    const {
      hsncExaTloText,
      hsncExaTloRgro,
      hsncExaTloBgro
    } = HsncGet.getHsncTloGroup();
    const {
      hsncExaBlo
    } = HsncGet.getHsncBloGroup();
    const {
      hsncPetaBlo,
      hsncTeraBlo,
      hsncGigaBloBgro
    } = HsncGet.getHsncBloEbGroup(targetIndex);
    /*  */
    let isActive = null;
    let type = "";
    let hsncExaBloSize = null;
    if (!hsncY[targetIndex].isActive) {
      isActive = true;
      type = "add";
      hsncExaBloSize = 4;
    } else {
      isActive = false;
      type = "remove";
      hsncExaBloSize = 0;
    }
    /*  */
    if (isActive) {
      hsncY[targetIndex].timeoutId = setTimeout(
        HsncSet.setTimerTdtHsncYotta,
        300,
        targetIndex
      );
    } else {
      clearTimeout(hsncY[targetIndex].timeoutId);
      for (let i = 0; i < hsncGigaBloBgro.length; i++) {
        HsncSet.setHsncGigaBloBgro(hsncGigaBloBgro[i], false);
        clearTimeout(hsncPetaBlo[i].timeoutId);
      }
    }
    /*  */
    hsncY[targetIndex].classList[type]("cl-tdt-hsnc-z-tlo-handler");
    hsncExaTloText[targetIndex].classList[type]("cl-tdt-hsnc-z-tlo-handler");
    hsncExaTloRgro[targetIndex].classList[type]("cl-tdt-hsnc-z-tlo-handler");
    hsncExaTloBgro[targetIndex].classList[type]("cl-tdt-hsnc-z-tlo-handler");
    HsncSet.setHsncExaBlo(hsncExaBlo[targetIndex], hsncTeraBlo, hsncExaBloSize);
    for (let i = 0; i < hsncTeraBlo.length; i++) {
      hsncTeraBlo[i].classList[type]("cl-tdt-hsnc-z-tlo-handler");
    }
    /*  */
    hsncY[targetIndex].isActive = isActive;
    HsncHandler.adtHsncZettaEcoSfro();
  }
  static ddtHsncZettaTlo(eventData) {
    const {
      eventType,
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hsnc-y");
    const {
      hsncY
    } = HsncGet.getHsncGroup();
    const {
      hsncExaTloText,
      hsncExaTloRgro,
      hsncExaTloBgro
    } = HsncGet.getHsncTloGroup();
    const {
      hsncExaBlo
    } = HsncGet.getHsncBloGroup();
    const {
      hsncTeraBlo,
      hsncGigaBloText,
      hsncGigaBloBgro
    } = HsncGet.getHsncBloEbGroup(targetIndex);
    const gigaBgroBuffer = 24;
    /*  */
    let isActive = null;
    let type = "";
    let typeHover = "";
    let hsncExaBloSize = null;
    if (!hsncY[targetIndex].isActive) {
      isActive = true;
      type = "add";
      hsncExaBloSize = 4;
      if (eventType === "mouseenter") {
        typeHover = "add";
      } else if (eventType === "mouseleave") {
        typeHover = "remove";
      }
    } else {
      isActive = false;
      type = "remove";
      hsncExaBloSize = 0;
    }
    /*  */
    if (isActive && hsncY[targetIndex].isResize && eventType === "click") {
      console.log("ddt update");
      for (let i = 0; i < hsncGigaBloBgro.length; i++) {
        HsncSet.setDataHsncGigaBloBgro(
          hsncGigaBloBgro[i],
          hsncGigaBloText[i],
          gigaBgroBuffer
        );
      }
      hsncY[targetIndex].isResize = false;
    }
    /*  */
    if ((eventType === "mouseenter" || eventType === "mouseleave") && isActive) {
      hsncExaTloText[targetIndex].classList[typeHover]("cl-ddt-hsnc-z-tlo-handler");
      hsncExaTloRgro[targetIndex].classList[typeHover]("cl-ddt-hsnc-z-tlo-handler");
      hsncExaTloBgro[targetIndex].classList[typeHover]("cl-ddt-hsnc-z-tlo-handler");
    } else if (eventType === "click") {
      hsncY[targetIndex].classList[type]("cl-ddt-hsnc-z-tlo-handler-click");
      hsncExaTloRgro[targetIndex].classList[type]("cl-ddt-hsnc-z-tlo-handler-click");
      HsncSet.setHsncExaBlo(hsncExaBlo[targetIndex], hsncGigaBloText, hsncExaBloSize);
      for (let i = 0; i < hsncTeraBlo.length; i++) {
        hsncTeraBlo[i].classList[type]("cl-ddt-hsnc-z-tlo-handler-click");
      }
      hsncY[targetIndex].isActive = isActive;
      HsncHandler.adtHsncZettaEcoSfro();
    }
  }
  static ddtHsncPetaBlo(eventData) {
    const {
      eventType,
      eventIndex,
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hsnc-y");
    const {
      hsncGigaBloText,
      hsncGigaBloRgro,
      hsncGigaBloBgro
    } = HsncGet.getHsncBloEbGroup(targetIndex);
    /*  */
    let isActive = null;
    let type = "";
    let hsncExaBloSize = null;
    if (eventType === "mouseenter") {
      isActive = true;
      type = "add";
      hsncExaBloSize = 4;
    } else if (eventType === "mouseleave") {
      isActive = false;
      type = "remove";
      hsncExaBloSize = 0;
    }
    /*  */
    hsncGigaBloText[eventIndex].classList[type]("cl-ddt-hsnc-p-blo-handler");
    hsncGigaBloRgro[eventIndex].classList[type]("cl-ddt-hsnc-p-blo-handler");
    HsncSet.setHsncGigaBloBgro(hsncGigaBloBgro[eventIndex], isActive);
  }
  static adtHsncZettaEcoSfro() {
    const {
      hsncR
    } = HsncGet.getHsncRoot();
    const {
      hsncY
    } = HsncGet.getHsncGroup();
    const {
      hsncZettaTlo
    } = HsncGet.getHsncTloGroup();
    /* const {
      hsncZettaEcoSfroTgro,
      hsncZettaEcoSfroBgro
    } = HsncGet.getHsncEcoGroup(); */
    const {
      hsncYottaSfroTgro,
      hsncYottaSfroBgro
    } = HsncGet.getHsncYottaGroup();
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
        } = HsncGet.getHsncBloEbGroup(i);
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
      hsncYottaSfroTgro.classList[tgroType]("cl-adt-hsnc-y-sfro-handler");
    }
    if (bgroType) {
      hsncYottaSfroBgro.classList[bgroType]("cl-adt-hsnc-y-sfro-handler");
    }
  }
}
class HsncGet {
  static getHsncRoot() {
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HsncAccessor.hsncCache,
      HsncConfig.hsncRoot
    );
    return saveVerifyGroup;
  }
  static getHsncGroup() {
    const {
      hsncR
    } = HsncGet.getHsncRoot();
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
  }
  /* static getHsncEcoGroup() {
    const {
      hsncR
    } = HsncGet.getHsncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HsncAccessor.hsncCache,
      HsncConfig.hsncEcoGroup,
      hsncR
    );
    return saveVerifyGroup;
  } */
  static getHsncYottaGroup() {
    const {
      hsncR
    } = HsncGet.getHsncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HsncAccessor.hsncCache,
      HsncConfig.hsncYottaGroup,
      hsncR
    );
    return saveVerifyGroup;
  }
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
    } = HsncGet.getHsncGroup();
    const {
      hsncPetaBlo,
      hsncGigaBloText,
      hsncGigaBloBgro
    } = HsncGet.getHsncBloEbGroup(targetIndex);
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
    } = HsncGet.getHsncGroup();
    const {
      hsncPetaBlo,
      hsncGigaBloText,
      hsncGigaBloBgro
    } = HsncGet.getHsncBloEbGroup(targetIndex);
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
    } = HsncGet.getHsncGroup();
    const {
      hsncZettaTlo
    } = HsncGet.getHsncTloGroup();
    /* const {
      hsncZettaEcoSfroTgro,
      hsncZettaEcoSfroBgro
    } = HsncGet.getHsncEcoGroup(); */
    const {
      hsncYottaSfroTgro,
      hsncYottaSfroBgro
    } = HsncGet.getHsncYottaGroup();
    const eventData = {};
    hsncYottaSfroTgro.classList.remove("cl-adt-hsnc-y-sfro-handler");
    hsncYottaSfroBgro.classList.remove("cl-adt-hsnc-y-sfro-handler");
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