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
  FwcAccessor,
  HtpncAccessor,
  HsncAccessor
} from "../../fwc-hub.js";

class HdncAccessor {
  static hdncCache = {};
  static isActiveHdnc = false;
  static hdncScrollState = 0;
  /*  */
  static tdtHdncZettaTloHandlerTimeoutId = [];
  static hdncGigaBloBgroTimeoutId = [[], [], [], []];
  /*  */
  /* static isTimeoutDone = false; */
  /* =============== :Function: =============== */
  static resetHdnc(displayTypeState) {
    HdncSet.setHdnc(displayTypeState);
  }
  static setHdnc(displayTypeState) {
    HdncSet.setHdnc(displayTypeState);
  }
  static getHdncRoot() {
    return HdncGet.getHdncRoot();
  }
  static getHdncGroup() {
    return HdncGet.getHdncGroup();
  }
  /* static setHdncGigaBloBgro() {
    HdncAccessorManager.setHdncGigaBloBgro();
  } */
  /* =============== ;Function; =============== */
}
/* class HdncAccessorManager {
  static setHdncGigaBloBgro() {
    const {
      hdncY
    } = HdncGet.getHdncGroup();
    let isDefaultUpdate = null;
    if (FwaConfig.currentDisplayType !== 3) {
      isDefaultUpdate = true;
    } else {
      isDefaultUpdate = false;
    }
    const buffer = 24;
    for (let i = 0; i < hdncY.length; i++) {
      const {
        hdncGigaBloText,
        hdncGigaBloBgro
      } = HdncGet.getHdncBloEbGroup(i);
      for (let j = 0; j < hdncGigaBloBgro.length; j++) {
        HdncSet.setDataHdncGigaBloBgro(
          hdncGigaBloBgro[j],
          hdncGigaBloText[j],
          buffer
        );
        HdncSet.setHdncGigaBloBgro(hdncGigaBloBgro[j], isDefaultUpdate);
      }
    }
  }
} */
class HdncController {
  static process() {
    HdncManager.generate();
    HdncManager.init();
  }
  static processOnLoad() {
    /* HdncManager.addEvent(); */
    HdncManager.event(true);
  }
  static processOnResize() {
    HdncManager.initOnResize();
    /* HdncManager.removeEvent();
    HdncManager.addEvent(); */
    HdncManager.event(false);
    HdncManager.event(true);
  }
}
class HdncManager {
  static init() {
    const {
      hdncY
    } = HdncGet.getHdncGroup();
    const {
      hdncExaBlo
    } = HdncGet.getHdncBloGroup();
    for (let i = 0; i < hdncExaBlo.length; i++) {
      const {
        hdncPetaBlo
      } = HdncGet.getHdncBloEbGroup(i);
      HdncSet.setHdncExaBlo(hdncExaBlo[i], hdncPetaBlo, 0);
      hdncY[i].isActive = false;
      hdncY[i].index = i;
      /*  */
      hdncY[i].timeoutId = null;
      hdncY[i].isTimeout = false;
      /*  */
      for (let j = 0; j < hdncPetaBlo.length; j++) {
        hdncPetaBlo[j].index = j;
        /*  */
        hdncPetaBlo[j].timeoutId = null;
      }
    }
    /*  */
    /* const buffer = 24;
    let isDefaultSetup = null;
    if (FwaConfig.currentDisplayType !== 3) {
      isDefaultSetup = true;
    } else {
      isDefaultSetup = false;
    }
    for (let i = 0; i < hdncY.length; i++) {
      const {
        hdncGigaBloText,
        hdncGigaBloBgro
      } = HdncGet.getHdncBloEbGroup(i);
      for (let j = 0; j < hdncGigaBloBgro.length; j++) {
        HdncSetup.setupGigaBgro(
          hdncGigaBloBgro[j],
          hdncGigaBloText[j],
          buffer
        );
        HdncSetup.setupGigaBgroWidth(isDefaultSetup, hdncGigaBloBgro[j]);
      }
    } */
  }
  static initOnLoad() {

  }
  static initOnResize() {
    const displayTypeState = FwaConfig.previousDisplayType;
    /* !!!!! v1.1.15a [suggestion] {add} (getDisplayTypeState) !!!!! */
    HdncSet.setHdnc(displayTypeState);
    /* !!!!! v1.1.16a [test] {issue fix} !!!!! */
    /* const {
      hdncY
    } = HdncGet.getHdncGroup(); */
    const {
      hdncExaBlo
    } = HdncGet.getHdncBloGroup();
    /* !!!!! v1.1.16a [suggestion] {move} (in resetHdnc) !!!!! */
    hdncExaBlo[0].classList.remove("cl-tdt-hdnc-z-tlo-handler-nth-1");
    hdncExaBlo[3].classList.remove("cl-tdt-hdnc-z-tlo-handler-nth-4");
    /* resetHdncGigaBgro(); */
    /* let isDefaultSetup = null;
    if (FwaConfig.currentDisplayType === 3) {
      isDefaultSetup = false;
    } else {
      isDefaultSetup = true;
    }
    for (let i = 0; i < hdncY.length; i++) {
      const {
        hdncGigaBloBgro
      } = HdncGet.getHdncBloEbGroup(i);
      for (let j = 0; j < hdncGigaBloBgro.length; j++) {
        HdncSetup.setupGigaBgroWidth(isDefaultSetup, hdncGigaBloBgro[j]);
      }
    } */
  }
  static generate() {
    const {
      hdncR
    } = HdncGet.getHdncRoot();
    const hdncFragment = document.createDocumentFragment();
    let tempGenerateElement = null;
    let tempSaveElement = {};
    /* =============== :Ys, Tlo, Zs Group: =============== */
    for (let ysi = 0; ysi < HdncConfig.hdncExaTloText.length; ysi++) {
      /* ==========----- :Ys Group: -----========== */
      /* for (let zsi = 0; zsi < HdncConfig.elementYsGroup.length; zsi++) {
        tempGenerateElement = FwcAccessor.getGenerateElement(
          HdncConfig.elementYsGroup[zsi].tag,
          HdncConfig.elementYsGroup[zsi].selector
        );
        tempSaveElement[HdncConfig.elementYsGroup[zsi].id] = tempGenerateElement;
      } */
      /* for (let zsi = 0; zsi < HdncConfig.elementGroup.length; zsi++) {
        tempGenerateElement = FwcAccessor.getGenerateElement(
          HdncConfig.elementGroup[zsi].tag,
          HdncConfig.elementGroup[zsi].selector
        );
        tempSaveElement[HdncConfig.elementGroup[zsi].id] = tempGenerateElement;
      } */
      for (let zsi = 0; zsi < HdncConfig.hdncGroup.length; zsi++) {
        tempGenerateElement = FwcAccessor.getGenerateElement2(
          HdncConfig.hdncGroup[zsi]
        );
        tempSaveElement[HdncConfig.hdncGroup[zsi].elementId] = tempGenerateElement;
      }
      /* ==========----- ;Ys Group; -----========== */
      /* ==========----- :Tlo Group: -----========== */
      /* for (let zsi = 0; zsi < HdncConfig.elementTloGroup.length; zsi++) {
        tempGenerateElement = FwcAccessor.getGenerateElement(
          HdncConfig.elementTloGroup[zsi].tag,
          HdncConfig.elementTloGroup[zsi].selector
        );
        FwcAccessor.setGenerateElement(
          tempGenerateElement,
          HdncConfig.elementTloGroup[zsi].text,
          HdncConfig.elementTloGroup[zsi].link,
          [ysi]
        );
        tempSaveElement[HdncConfig.elementTloGroup[zsi].id] = tempGenerateElement;
      } */
      for (let zsi = 0; zsi < HdncConfig.hdncTloGroup.length; zsi++) {
        tempGenerateElement = FwcAccessor.getGenerateElement2(
          HdncConfig.hdncTloGroup[zsi],
          [ysi]
        );
        tempSaveElement[HdncConfig.hdncTloGroup[zsi].elementId] = tempGenerateElement;
      }
      /* ==========----- ;Tlo Group; -----========== */
      /* ==========----- :Blo Group: -----========== */
      /* for (let zsi = 0; zsi < HdncConfig.elementBloGroup.length; zsi++) {
        tempGenerateElement = FwcAccessor.getGenerateElement(
          HdncConfig.elementBloGroup[zsi].tag,
          HdncConfig.elementBloGroup[zsi].selector
        );
        tempSaveElement[HdncConfig.elementBloGroup[zsi].id] = tempGenerateElement;
      } */
      for (let zsi = 0; zsi < HdncConfig.hdncBloGroup.length; zsi++) {
        tempGenerateElement = FwcAccessor.getGenerateElement2(
          HdncConfig.hdncBloGroup[zsi]
        );
        tempSaveElement[HdncConfig.hdncBloGroup[zsi].elementId] = tempGenerateElement;
      }
      /* ==========----- ;Blo Group; -----========== */
      /* ==========----- :Blo Eb Group: -----========== */
      /* for (let zsi = 0; zsi < HdncConfig.hdncGigaBloText[ysi].length; zsi++) {
        for (let esi = 0; esi < HdncConfig.elementBloEbGroup.length; esi++) {
          tempGenerateElement = FwcAccessor.getGenerateElement(
            HdncConfig.elementBloEbGroup[esi].tag,
            HdncConfig.elementBloEbGroup[esi].selector
          );
          FwcAccessor.setGenerateElement(
            tempGenerateElement,
            HdncConfig.elementBloEbGroup[esi].text,
            HdncConfig.elementBloEbGroup[esi].link,
            [ysi, zsi]
          );
          tempSaveElement[HdncConfig.elementBloEbGroup[esi].id] = tempGenerateElement;
        }
        HdncSet.setAppendBloEbGroup(tempSaveElement);
      } */
      for (let zsi = 0; zsi < HdncConfig.hdncGigaBloText[ysi].length; zsi++) {
        for (let esi = 0; esi < HdncConfig.hdncBloEbGroup.length; esi++) {
          tempGenerateElement = FwcAccessor.getGenerateElement2(
            HdncConfig.hdncBloEbGroup[esi],
            [ysi, zsi]
          );
          tempSaveElement[HdncConfig.hdncBloEbGroup[esi].elementId] = tempGenerateElement;
        }
        /* HdncSet.setAppendBloEbGroup(tempSaveElement); */
        HdncConfig.hdncBloEbGroupAppend(tempSaveElement);
      }
      /* ==========----- ;Blo Eb Group; -----========== */
      /* ==========----- :Zs Group: -----========== */
      /* for (let zsi = 0; zsi < HdncConfig.hdncGigaText[ysi].length; zsi++) {
        for (let esi = 0; esi < HdncConfig.elementZsGroup.length; esi++) {
          tempGenerateElement = FwcAccessor.getGenerateElement(
            HdncConfig.elementZsGroup[esi].tag,
            HdncConfig.elementZsGroup[esi].selector
          );
          FwcAccessor.setGenerateElement(
            tempGenerateElement,
            HdncConfig.elementZsGroup[esi].text,
            HdncConfig.elementZsGroup[esi].link,
            [ysi, zsi]
          );
          tempSaveElement[HdncConfig.elementZsGroup[esi].id] = tempGenerateElement;
        }
        HdncSet.setAppendZsGroup(tempSaveElement);
      } */
      /* ==========----- ;Zs Group; -----========== */
      /* HdncSet.setAppendTloGroup(tempSaveElement);
      HdncSet.setAppendBloGroup(tempSaveElement);
      HdncSet.setAppendGroup(tempSaveElement); */
      HdncConfig.hdncTloGroupAppend(tempSaveElement);
      HdncConfig.hdncBloGroupAppend(tempSaveElement);
      HdncConfig.hdncGroupAppend(tempSaveElement);
      hdncFragment.append(tempSaveElement["hdncY"]);
      tempSaveElement = {};
    }
    /* =============== ;Ys, Tlo, Zs Group; =============== */
    /* =============== :Sdo Group: =============== */
    /* for (let ysi = 0; ysi < HdncConfig.elementSdoGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement(
        HdncConfig.elementSdoGroup[ysi].tag,
        HdncConfig.elementSdoGroup[ysi].selector
      );
      tempSaveElement[HdncConfig.elementSdoGroup[ysi].id] = tempGenerateElement;
    }
    hdncFragment.append(tempSaveElement["yottaSdo"]); */
    /* for (let ysi = 0; ysi < HdncConfig.elementEcoGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement(
        HdncConfig.elementEcoGroup[ysi].tag,
        HdncConfig.elementEcoGroup[ysi].selector
      );
      tempSaveElement[HdncConfig.elementEcoGroup[ysi].id] = tempGenerateElement;
    } */
    for (let ysi = 0; ysi < HdncConfig.hdncEcoGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement2(
        HdncConfig.hdncEcoGroup[ysi]
      );
      tempSaveElement[HdncConfig.hdncEcoGroup[ysi].elementId] = tempGenerateElement;
    }
    /* HdncSet.setAppendEcoGroup(tempSaveElement); */
    HdncConfig.hdncEcoGroupAppend(tempSaveElement);
    hdncFragment.append(tempSaveElement["hdncYottaEco"]);
    /* =============== ;Sdo Group; =============== */
    hdncR.append(hdncFragment);
  }
  static event(isActive) {
    const {
      hdncR
    } = HdncGet.getHdncRoot();
    const {
      hdncY
    } = HdncGet.getHdncGroup();
    const {
      hdncZettaTlo
    } = HdncGet.getHdncTloGroup();
    /*  */
    /* let type = ""; */
    let displayTypeState = null;
    let eventListenerType = "";
    if (isActive) {
      displayTypeState = FwaConfig.currentDisplayType;
      eventListenerType = "addEventListener";
    } else {
      displayTypeState = FwaConfig.previousDisplayType;
      eventListenerType = "removeEventListener";
    }
    /*  */
    if (displayTypeState === 1) {
      hdncR[eventListenerType]("scroll", HdncHandler.mdtHdncZettaEcoSfro);
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
          break;
        }
        case 2: {
          hdncZettaTlo[i][eventListenerType](
            "click",
            HdncHandler.tdtHdncZettaTlo
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
          /* Hdnc Peta */
          const {
            hdncPetaBlo
          } = HdncGet.getHdncBloEbGroup(i);
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
  static mdtHdncZettaTlo(eventData) {
    /* =============== Setup: =============== */
    const {
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hdnc-y");
    const {
      hdncY
    } = HdncGet.getHdncGroup();
    const {
      hdncExaTloText,
      hdncExaTloRgro,
      hdncExaTloBgro
    } = HdncGet.getHdncTloGroup();
    const {
      hdncExaBlo
    } = HdncGet.getHdncBloGroup();
    const {
      hdncPetaBlo,
      hdncTeraBlo,
      hdncGigaBloBgro
    } = HdncGet.getHdncBloEbGroup(targetIndex);
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
        HdncSet.setTimerMtdtHdncYotta,
        300,
        targetIndex
      );
    } else {
      clearTimeout(hdncY[targetIndex].timeoutId);
      for (let i = 0; i < hdncGigaBloBgro.length; i++) {
        HdncSet.setHdncGigaBloBgro(hdncGigaBloBgro[i], false);
        clearTimeout(hdncPetaBlo[i].timeoutId);
      }
    }
    /*  */
    hdncY[targetIndex].classList[type]("cl-mdt-hdnc-z-tlo-handler");
    hdncExaTloText[targetIndex].classList[type]("cl-mdt-hdnc-z-tlo-handler");
    hdncExaTloRgro[targetIndex].classList[type]("cl-mdt-hdnc-z-tlo-handler");
    hdncExaTloBgro[targetIndex].classList[type]("cl-mdt-hdnc-z-tlo-handler");
    /*  */
    HdncSet.setHdncExaBlo(
      hdncExaBlo[targetIndex],
      hdncTeraBlo,
      hdncExaBloHeight
    );
    for (let i = 0; i < hdncTeraBlo.length; i++) {
      hdncTeraBlo[i].classList[type]("cl-mdt-hdnc-z-tlo-handler");
    }
    /*  */
    hdncY[targetIndex].isActive = isActive;
    /*  */
    HdncHandler.mdtHdncZettaEcoSfro();
  }
  static tdtHdncZettaTlo(eventData) {
    /* =============== Setup: =============== */
    const {
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hdnc-y");
    const {
      hdncY
    } = HdncGet.getHdncGroup();
    const {
      hdncExaTloText,
      hdncExaTloBgro
    } = HdncGet.getHdncTloGroup();
    const {
      hdncExaBlo
    } = HdncGet.getHdncBloGroup();
    /* const {
      hdncPetaBlo,
      hdncTeraBlo
    } = HdncGet.getHdncBloEbGroup(targetIndex); */
    /* !!!!! :v1.1.17a [test] (hdncGigaBloBgroWidth): !!!!! */
    const {
      hdncPetaBlo,
      hdncTeraBlo,
      hdncGigaBloText,
      hdncGigaBloBgro
    } = HdncGet.getHdncBloEbGroup(targetIndex);
    /*  */
    /* function _hdncZettaTloHandlerTimout() {
      const buffer = 24;
      for (let i = 0; i < hdncGigaBloBgro.length; i++) {
        function _setHdncGigaBloBgroTimeout() {
          HdncSet.setDataHdncGigaBloBgro(
            hdncGigaBloBgro[i],
            hdncGigaBloText[i],
            buffer
          );
          HdncSet.setHdncGigaBloBgro(hdncGigaBloBgro[i], true);
        }
        /*  
        HdncAccessor.hdncGigaBloBgroTimeoutId[targetIndex][i] = setTimeout(
          _setHdncGigaBloBgroTimeout,
          150 * i
        );
        /*  
        /* hdncPetaBlo[i].timeoutId = setTimeout(); 
        /* HdncSet.setDataHdncGigaBloBgro(
          hdncGigaBloBgro[i],
          hdncGigaBloText[i],
          buffer
        );
        HdncSet.setHdncGigaBloBgro(hdncGigaBloBgro[i], true); 
      }
    } */
    /*  */
    if (!hdncY[targetIndex].isActive) {
      /* HdncAccessor.tdtHdncZettaTloHandlerTimeoutId[targetIndex] = setTimeout(
        _hdncZettaTloHandlerTimout,
        300
      ); */
      hdncY[targetIndex].timeoutId = setTimeout(
        HdncSet.setTimerMtdtHdncYotta,
        300,
        targetIndex
      );
    } else {
      /* clearTimeout(HdncAccessor.tdtHdncZettaTloHandlerTimeoutId[targetIndex]); */
      clearTimeout(hdncY[targetIndex].timeoutId);
      for (let i = 0; i < hdncGigaBloBgro.length; i++) {
        HdncSet.setHdncGigaBloBgro(hdncGigaBloBgro[i], false);
        clearTimeout(hdncPetaBlo[i].timeoutId);
      }
      /* for (let i = 0; i < hdncGigaBloBgro.length; i++) {
        HdncSet.setHdncGigaBloBgro(hdncGigaBloBgro[i], false);
        clearTimeout(HdncAccessor.hdncGigaBloBgroTimeoutId[targetIndex][i]);
      } */
    }
    /* const {
      hdncGigaBloText
    } = HdncGet.getHdncBloEbGroup(targetIndex);
    const getComputed = window.getComputedStyle(hdncGigaBloText[0]);
    console.log(hdncGigaBloText[0].offsetWidth, hdncGigaBloText[0].clientWidth);
    console.log(getComputed);
    console.log(hdncGigaBloText[0].getBoundingClientRect());
    console.log(getComputed.inlineSize, getComputed.width); */
    /* !!!!! ;v1.1.17a [test] (hdncGigaBloBgroWidth); !!!!! */
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
    hdncExaTloText[targetIndex].classList[type]("cl-tdt-hdnc-z-tlo-handler");
    hdncExaTloBgro[targetIndex].classList[type]("cl-tdt-hdnc-z-tlo-handler");
    hdncExaBlo[targetIndex].classList[type]("cl-tdt-hdnc-z-tlo-handler");
    for (let i = 0; i < hdncTeraBlo.length; i++) {
      hdncTeraBlo[i].classList[type]("cl-tdt-hdnc-z-tlo-handler");
    }
    HdncSet.setHdncExaBlo(hdncExaBlo[targetIndex], hdncTeraBlo, hdncExaBloHeight);
    /*  */
    if (targetIndex === 0) {
      hdncExaBlo[targetIndex].classList.add("cl-tdt-hdnc-z-tlo-handler-nth-1");
    } else if (targetIndex === 3) {
      hdncExaBlo[targetIndex].classList.add("cl-tdt-hdnc-z-tlo-handler-nth-4");
    }
    /*  */
    if (isActive) {
      if (HsncAccessor.isActiveHsnc) {
        HtpncAccessor.htpncZettaHsngoHandler();
      }
      HdncSet.setTdtHdnc(targetIndex);
    }
    /*  */
    hdncY[targetIndex].isActive = isActive;
  }
  static ddtHdncYotta(eventData) {
    const {
      eventType,
      eventIndex
    } = FwcAccessor.getEventData(eventData);
    const {
      hdncY
    } = HdncGet.getHdncGroup();
    const {
      hdncPetaBlo,
      hdncTeraBlo
    } = HdncGet.getHdncBloEbGroup(eventIndex);
    const {
      hdncExaTloText,
      hdncExaTloBgro
    } = HdncGet.getHdncTloGroup();
    const {
      hdncExaBlo
    } = HdncGet.getHdncBloGroup();
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
    hdncExaTloText[eventIndex].classList[type]("cl-ddt-hdnc-y-handler");
    hdncExaTloBgro[eventIndex].classList[type]("cl-ddt-hdnc-y-handler");
    hdncExaBlo[eventIndex].classList[type]("cl-ddt-hdnc-y-handler");
    for (let i = 0; i < hdncPetaBlo.length; i++) {
      hdncTeraBlo[i].classList[type]("cl-ddt-hdnc-y-handler");
    }
    HdncSet.setHdncExaBlo(hdncExaBlo[eventIndex], hdncPetaBlo, hdncExaBloHeight);
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
      /* HdncAccessor.isTimeoutDone = false;
      HdncAccessor.delayTimeout = setTimeout(_delaySetHdncGigaBloBgroData, 300); */
      hdncY[eventIndex].isTimeout = false;
      hdncY[eventIndex].timeoutId = setTimeout(
        HdncSet.setDdtHdncYottaTimer,
        300,
        eventIndex,
        hdncY[eventIndex]
      );
    } else {
      /* HdncAccessor.isTimeoutDone = false;
      clearTimeout(HdncAccessor.delayTimeout); */
      clearTimeout(hdncY[eventIndex].timeoutId);
    }
    /*  */
    /* function _delaySetHdncGigaBloBgroData() {
      const {
        hdncGigaBloText,
        hdncGigaBloBgro
      } = HdncGet.getHdncBloEbGroup(eventIndex);
      const gigaBgroBuffer = 32;
      for (let i = 0; i < hdncGigaBloBgro.length; i++) {
        HdncSet.setDataHdncGigaBloBgro(
          hdncGigaBloBgro[i],
          hdncGigaBloText[i],
          gigaBgroBuffer
        );
      }
      /* HdncAccessor.isTimeoutDone = true; 
      hdncY[eventIndex].isTimeout = true;
    } */
    /*  */
    hdncY[eventIndex].isActive = isActive;
  }
  static ddtHdncPetaBlo(eventData) {
    const {
      eventType,
      eventIndex,
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hdnc-y");
    const {
      hdncY
    } = HdncGet.getHdncGroup();
    const {
      hdncPetaBlo,
      hdncGigaBloText,
      hdncGigaBloRgro,
      hdncGigaBloBgro
    } = HdncGet.getHdncBloEbGroup(targetIndex);
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
        HdncSet.setHdncGigaBloBgro(hdncGigaBloBgro[eventIndex], isActive);
      } else {
        hdncPetaBlo[eventIndex].timeoutId = setTimeout(
          HdncSet.setDdtHdncPetaBloTimer,
          50,
          hdncGigaBloBgro[eventIndex],
          hdncPetaBlo[eventIndex],
          hdncY[targetIndex]
        );
        /*  */
        /* function _updateHdncGigaBloBgro() {
          if (hdncY[targetIndex].isTimeout) {
            HdncSet.setHdncGigaBloBgro(hdncGigaBloBgro[eventIndex], isActive);
          } else {
            hdncPetaBlo[eventIndex].timeoutId = setTimeout(
              _updateHdncGigaBloBgro,
              50
            );
          }
        } */
      }
    } else {
      HdncSet.setHdncGigaBloBgro(hdncGigaBloBgro[eventIndex], isActive);
      clearTimeout(hdncPetaBlo[eventIndex].timeoutId);
    }
  }
  static mdtHdncZettaEcoSfro() {
    const {
      hdncR
    } = HdncGet.getHdncRoot();
    const {
      hdncY
    } = HdncGet.getHdncGroup();
    const {
      hdncZettaTlo
    } = HdncGet.getHdncTloGroup();
    const {
      hdncZettaEcoSfroTgro,
      hdncZettaEcoSfroBgro
    } = HdncGet.getHdncEcoGroup();
    /*  */
    const scrollTop = hdncR.scrollTop;
    const scrollHeight = hdncR.scrollHeight;
    const clientHeight = hdncR.clientHeight;
    const scrollBuffer = 16;
    const defaultHeight = 4 * 16;
    /*  */
    let tgroType = "";
    let bgroType = "";
    let scrollable = 0;
    let tempHeight = hdncZettaTlo.length * defaultHeight;
    /*  */
    for (let i = 0; i < hdncY.length; i++) {
      if (hdncY[i].isActive) {
        const {
          hdncPetaBlo
        } = HdncGet.getHdncBloEbGroup(i);
        tempHeight += hdncPetaBlo.length * defaultHeight;
      }
    }
    if (tempHeight > clientHeight) {
      scrollable = tempHeight - clientHeight;
    }
    /*  */
    if (scrollable <= scrollBuffer) {
      if (HdncAccessor.hdncScrollState !== 0) {
        tgroType = "remove";
        bgroType = "remove";
        HdncAccessor.hdncScrollState = 0;
      }
    } else {
      if (scrollTop < scrollBuffer) {
        if (HdncAccessor.hdncScrollState !== 1) {
          hdncR.scroll(0, 0);
          tgroType = "remove";
          bgroType = "add";
          HdncAccessor.hdncScrollState = 1;
        }
      } else if (scrollTop > scrollable - scrollBuffer) {
        if (HdncAccessor.hdncScrollState !== 2) {
          hdncR.scroll(0, scrollHeight);
          tgroType = "add";
          bgroType = "remove";
          HdncAccessor.hdncScrollState = 2;
        }
      } else {
        if (HdncAccessor.hdncScrollState !== 3) {
          tgroType = "add";
          bgroType = "add";
          HdncAccessor.hdncScrollState = 3;
        }
      }
    }
    /*  */
    if (tgroType) {
      hdncZettaEcoSfroTgro.classList[tgroType]("cl-mdt-hdnc-z-sfro-handler");
    }
    if (bgroType) {
      hdncZettaEcoSfroBgro.classList[bgroType]("cl-mdt-hdnc-z-sfro-handler");
    }
  }
}
class HdncGet {
  static getHdncRoot() {
    /* const hdncRoot = [
      {
        id: "hdncR",
        selector: ".blf-y-ho .hdnc-r"
      }
    ]; */
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HdncAccessor.hdncCache,
      HdncConfig.hdncRoot
    );
    return saveVerifyGroup;
  }
  static getHdncGroup() {
    /* const hdncGroup = [
      {
        id: "hdncY",
        selector: ".hdnc-y",
        type: "all"
      } */
      /* {
        id: "hdncZ",
        selector: ".hdnc-z",
        type: "all"
      },
      {
        id: "hdncE",
        selector: ".hdnc-e",
        type: "all"
      } */
    /* ]; */
    const {
      hdncR
    } = HdncGet.getHdncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HdncAccessor.hdncCache,
      HdncConfig.hdncGroup,
      hdncR
    );
    return saveVerifyGroup;
  }
  static getHdncTloGroup() {
    /* const hdncTloGroup = [
      {
        id: "hdncZettaTlo",
        selector: ".hdnc-z-tlo",
        type: "all"
      },
      {
        id: "hdncExaTloText",
        selector: ".hdnc-e-tlo-text",
        type: "all"
      },
      {
        id: "hdncExaTloRgro",
        selector: ".hdnc-e-tlo-rgro",
        type: "all"
      },
      {
        id: "hdncExaTloBgro",
        selector: ".hdnc-e-tlo-bgro",
        type: "all"
      }
    ]; */
    const {
      hdncR
    } = HdncGet.getHdncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HdncAccessor.hdncCache,
      HdncConfig.hdncTloGroup,
      hdncR
    );
    return saveVerifyGroup;
  }
  static getHdncBloGroup() {
    /* const hdncBloGroup = [
      {
        id: "hdncZettaBlo",
        selector: ".hdnc-z-blo",
        type: "all"
      },
      {
        id: "hdncExaBlo",
        selector: ".hdnc-e-blo",
        type: "all"
      }
    ]; */
    const {
      hdncR
    } = HdncGet.getHdncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HdncAccessor.hdncCache,
      HdncConfig.hdncBloGroup,
      hdncR
    );
    return saveVerifyGroup;
  }
  static getHdncBloEbGroup(gIndex) {
    /* const hdncBloEbGroup = [
      {
        id: "hdncPetaBlo",
        selector: ".hdnc-p-blo",
        type: "all"
      },
      {
        id: "hdncTeraBlo",
        selector: ".hdnc-t-blo",
        type: "all"
      },
      {
        id: "hdncGigaBloText",
        selector: ".hdnc-g-blo-text",
        type: "all"
      },
      {
        id: "hdncGigaBloRgro",
        selector: ".hdnc-g-blo-rgro",
        type: "all"
      },
      {
        id: "hdncGigaBloBgro",
        selector: ".hdnc-g-blo-bgro",
        type: "all"
      }
    ]; */
    const {
      hdncExaBlo
    } = HdncGet.getHdncBloGroup();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HdncAccessor.hdncCache,
      HdncConfig.hdncBloEbGroup,
      hdncExaBlo[gIndex],
      gIndex
    );
    return saveVerifyGroup;
  }
  static getHdncEcoGroup() {
    /* const hdncEcoGroup = [
      {
        id: "hdncYottaEco",
        selector: ".hdnc-y-eco"
      },
      {
        id: "hdncZettaEcoSdo",
        selector: ".hdnc-z-eco-sdo"
      },
      {
        id: "hdncZettaEcoSfroTgro",
        selector: ".hdnc-z-eco-sfro-tgro"
      },
      {
        id: "hdncZettaEcoSfroBgro",
        selector: ".hdnc-z-eco-sfro-bgro"
      }
    ]; */
    const {
      hdncR
    } = HdncGet.getHdncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HdncAccessor.hdncCache,
      HdncConfig.hdncEcoGroup,
      hdncR
    );
    return saveVerifyGroup;
  }
}
class HdncSet {
  /* static setAppendGroup(saveGenerate) {
    /* saveGenerate["zetta"].append(saveGenerate["exa"]); 
    saveGenerate["hdncY"].append(
      saveGenerate["hdncZettaTlo"],
      saveGenerate["hdncZettaBlo"]
    );
  }
  static setAppendBloGroup(saveGenerate) {
    saveGenerate["hdncZettaBlo"].append(saveGenerate["hdncExaBlo"]);
  }
  static setAppendBloEbGroup(saveGenerate) {
    saveGenerate["hdncTeraBlo"].append(
      saveGenerate["hdncGigaBloText"],
      saveGenerate["hdncGigaBloRgro"],
      saveGenerate["hdncGigaBloBgro"]
    );
    saveGenerate["hdncPetaBlo"].append(saveGenerate["hdncTeraBlo"]);
    saveGenerate["hdncExaBlo"].append(saveGenerate["hdncPetaBlo"]);
  }
  static setAppendTloGroup(saveGenerate) {
    saveGenerate["hdncZettaTlo"].append(
      saveGenerate["hdncExaTloText"],
      saveGenerate["hdncExaTloRgro"],
      saveGenerate["hdncExaTloBgro"]
    );
  }
  static setAppendEcoGroup(saveGenerate) {
    saveGenerate["hdncYottaEco"].append(
      saveGenerate["hdncZettaEcoSdo"],
      saveGenerate["hdncZettaEcoSfroTgro"],
      saveGenerate["hdncZettaEcoSfroBgro"]
    );
  } */
  /* static setExa(setElement, referElement, size) {
    let gridTemplateData = "";
    for (let i = 0; i < referElement.length; i++) {
      gridTemplateData += size + "rem" + " ";
    }
    setElement.style.gridTemplateRows = gridTemplateData;
  } */
  /* static setGigaBgro(setElement, referElement, buffer) {
    const referWidth = referElement.offsetWidth;
    const setLeft = "calc" +
      "(" + "50%" + " - " +
      (referWidth / 2) + "px" + " - " +
      (buffer / 2) + "px" + ")";
    const setWidth = referWidth + buffer + "px";

    setElement.style.left = setLeft;
    setElement.style.width = setWidth;
  } */
  /* ================================================== */
  static setDataHdncGigaBloBgro(setElement, referElement, buffer) {
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
  static setHdncGigaBloBgro(setElement, isWidthActive) {
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
  static setTimerMtdtHdncYotta(hdncBloEbIndex) {
    const {
      hdncPetaBlo,
      hdncGigaBloText,
      hdncGigaBloBgro
    } = HdncGet.getHdncBloEbGroup(hdncBloEbIndex);
    const gigaBgroBuffer = 24;
    for (let i = 0; i < hdncGigaBloBgro.length; i++) {
      HdncSet.setDataHdncGigaBloBgro(
        hdncGigaBloBgro[i],
        hdncGigaBloText[i],
        gigaBgroBuffer
      );
      hdncPetaBlo[i].timeoutId = setTimeout(
        HdncSet.setTimerMtdtHdncPetaBlo,
        150 * i,
        hdncGigaBloBgro[i]
      );
    }
  }
  /* ================================================== */
  static setDdtHdncYottaTimer(hdncBloEbIndex, timeoutFlag) {
    const {
      hdncGigaBloText,
      hdncGigaBloBgro
    } = HdncGet.getHdncBloEbGroup(hdncBloEbIndex);
    const gigaBgroBuffer = 32;
    for (let i = 0; i < hdncGigaBloBgro.length; i++) {
      HdncSet.setDataHdncGigaBloBgro(
        hdncGigaBloBgro[i],
        hdncGigaBloText[i],
        gigaBgroBuffer
      );
    }
    timeoutFlag.isTimeout = true;
  }
  /* ================================================== */
  static setTimerMtdtHdncPetaBlo(setElement) {
    HdncSet.setHdncGigaBloBgro(setElement, true);
  }
  /* ================================================== */
  static setDdtHdncPetaBloTimer(setElement, timerElement, timeoutFlag) {
    if (timeoutFlag.isTimeout) {
      HdncSet.setHdncGigaBloBgro(setElement, true);
    } else {
      timerElement.timeoutId = setTimeout(
        HdncSet.setDdtHdncPetaBloTimer,
        50,
        setElement,
        timerElement,
        timeoutFlag
      );
    }
  }
  /* ================================================== */
  static setHdncExaBlo(setElement, referElement, size) {
    let gridTemplateData = "";
    for (let i = 0; i < referElement.length; i++) {
      gridTemplateData += size + "rem" + " ";
    }
    setElement.style.gridTemplateRows = gridTemplateData;
  }
  /* ================================================== */
  static setHdnc(displayTypeState) {
    const {
      hdncY
    } = HdncGet.getHdncGroup();
    const {
      hdncZettaTlo
    } = HdncGet.getHdncTloGroup();
    const {
      hdncExaBlo
    } = HdncGet.getHdncBloGroup();
    const {
      hdncZettaEcoSfroTgro,
      hdncZettaEcoSfroBgro
    } = HdncGet.getHdncEcoGroup();
    /*  */
    const eventData = {};
    /*  */
    if (displayTypeState === 1) {
      hdncZettaEcoSfroTgro.classList.remove("cl-mdt-hdnc-z-sfro-handler");
      hdncZettaEcoSfroBgro.classList.remove("cl-mdt-hdnc-z-sfro-handler");
      HdncAccessor.hdncScrollState = 0;
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
            } = HdncGet.getHdncBloEbGroup(i);
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
    } = HdncGet.getHdncGroup();
    const {
      hdncZettaTlo
    } = HdncGet.getHdncTloGroup();
    /*  */
    const eventData = {};
    for (let i = 0; i < hdncY.length; i++) {
      if (hdncY[i].isActive && targetIndex !== i) {
        eventData.currentTarget = hdncZettaTlo[i];
        HdncHandler.tdtHdncZettaTlo(eventData);
        /* const {
          hdncGigaBloBgro
        } = HdncGet.getHdncBloEbGroup(i);
        for (let j = 0; j < hdncGigaBloBgro.length; j++) {
          HdncSet.setHdncGigaBloBgro(hdncGigaBloBgro[j], false);
        } */
        return;
      }
    }
  }
}
/* class HdncUpdate {
  static updateExa(setElement, referElement, size) {
    let gridTemplateData = "";
    for (let i = 0; i < referElement.length; i++) {
      gridTemplateData += size + "rem" + " ";
    }
    setElement.style.gridTemplateRows = gridTemplateData;
  }
} */
/* class HdncSetup {
  static setupGigaBgro(setElement, referElement, buffer) {
    const referWidth = referElement.offsetWidth;
    const setLeft = "calc" +
      "(" + "50%" + " - " +
      (referWidth / 2) + "px" + " - " +
      (buffer / 2) + "px" + ")";
    const setWidth = referWidth + buffer + "px";

    setElement.left = setLeft;
    setElement.width = setWidth;

    setElement.style.left = setLeft;
  }
  static setupGigaBgroWidth(isActive, setElement) {
    let setWidth = null;
    if (isActive) {
      setWidth = setElement.width;
    } else {
      setWidth = "";
    }
    setElement.style.width = setWidth;
  }
} */
/* class HdncReset {
  static resetHdnc(displayTypeState) {
    const {
      hdncY
    } = HdncGet.getHdncGroup();
    const {
      hdncZettaTlo
    } = HdncGet.getHdncTloGroup();
    const {
      hdncExaBlo
    } = HdncGet.getHdncBloGroup();
    const {
      hdncZettaEcoSfroTgro,
      hdncZettaEcoSfroBgro
    } = HdncGet.getHdncEcoGroup();
    /*  
    const eventData = {};
    /*  
    if (displayTypeState === 1) {
      hdncZettaEcoSfroTgro.classList.remove("cl-mdt-hdnc-z-sfro-handler");
      hdncZettaEcoSfroBgro.classList.remove("cl-mdt-hdnc-z-sfro-handler");
      HdncAccessor.hdncScrollState = 0;
    }
    /*  
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
            /*  
            const {
              hdncPetaBlo
            } = HdncGet.getHdncBloEbGroup(i);
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
  static resetTdtHdnc(targetIndex) {
    const {
      hdncY
    } = HdncGet.getHdncGroup();
    const {
      hdncZettaTlo
    } = HdncGet.getHdncTloGroup();
    /*  
    const eventData = {};
    for (let i = 0; i < hdncY.length; i++) {
      if (hdncY[i].isActive && targetIndex !== i) {
        eventData.currentTarget = hdncZettaTlo[i];
        HdncHandler.tdtHdncZettaTlo(eventData);
        return;
      }
    }
  }
} */
export {
  HdncAccessor,
  HdncController
};
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */