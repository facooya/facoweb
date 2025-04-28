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
/*  */
class HdncAccessor {
  static hdncCache = {};
  static isActiveHdnc = false;
  /* static hdncScrollState = 0; */
  static hdncPropertyCache = {};
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
  /*  */
  static getHdncBloGroup() {
    return HdncGet.getHdncBloGroup();
  }
  /* =============== ;Function; =============== */
}
class HdncController {
  static process() {
    HdncManager.generate();
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
  /* static stepOnResize() {
    HdncManager.initStepOnResize();
  } */
  static sensorOnResize() {
    HdncManager.initSensorOnResize();
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
    /*  */
    window.previousInnerHeight = window.innerHeight;
    window.previousInnerWidth = window.innerWidth;
    /*  */
    for (let i = 0; i < hdncExaBlo.length; i++) {
      const {
        hdncPetaBlo,
        hdncGigaBloBgro
      } = HdncGet.getHdncBloEbGroup(i);
      /*  */
      hdncExaBlo[i].timeoutId = null;
      /* hdncExaBlo[i].isSensorResize = true; */
      hdncExaBlo[i].isSensorWidthResized = true;
      hdncExaBlo[i].isSensorHeightResized = true;
      /*  */
      /* HdncSet.setHdncExaBlo(hdncExaBlo[i], hdncPetaBlo, 0); */
      HdncSet.setHdncExaBloGridTemplateRows(i, 0);
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
        /* hdncPetaBlo[j].isResize = true; */
      }
    }
  }
  static initOnLoad() {
    /* !!!!! :v1.1.18a [temporary] (display:none): !!!!! */
    /* style -> classList */
    /* const {
      hdncYottaSdo,
      hdncYottaSfroTgro,
      hdncYottaSfroBgro
    } = HdncGet.getHdncYottaGroup();
    if (FwaConfig.currentDisplayType === 1) {
      /* hdncYottaSdo.style.display = ""; 
      hdncYottaSfroTgro.style.display = "";
      hdncYottaSfroBgro.style.display = "";
    } else {
      /* hdncYottaSdo.style.display = "none"; 
      hdncYottaSfroTgro.style.display = "none";
      hdncYottaSfroBgro.style.display = "none";
    } */
    /* !!!!! ;v1.1.18a [temporary] (display:none); !!!!! */
    const {
      hdncExaBlo
    } = HdncGet.getHdncBloGroup();
    /* const innerHeight = window.innerHeight;
    const previousInnerHeight = window.previousInnerHeight;
    if (previousInnerHeight !== innerHeight) {
      HdncSet.setDataHdncExaBloMaxHeight();
      for (let i = 0; i < hdncExaBlo.length; i++) {
        HdncSet.setHdncExaBloMaxHeight(i);
      }
    } */
    HdncSet.setDataHdncExaBloMaxHeight();
    for (let i = 0; i < hdncExaBlo.length; i++) {
      HdncSet.setHdncExaBloMaxHeight(i);
    }
    /* const innerWidth = window.innerWidth;
    const previousInnerWidth = window.previousInnerWidth; */
  }
  static initOnResize() {
    /* exaBlo.isSensorWidthResized */
    const displayTypeState = FwaConfig.previousDisplayType;
    HdncSet.setHdnc(displayTypeState);
    const {
      hdncExaBlo
    } = HdncGet.getHdncBloGroup();
    if (FwaConfig.previousDisplayType === 2) {
      hdncExaBlo[0].classList.remove("cl-tdt-hdnc-z-tlo-handler-nth-1");
      hdncExaBlo[3].classList.remove("cl-tdt-hdnc-z-tlo-handler-nth-4");
    }
    /*  */
    const {
      hdncY
    } = HdncGet.getHdncGroup();
    for (let i = 0; i < hdncY.length; i++) {
      /* hdncExaBlo[i].isSensorResize = true; */
      hdncExaBlo[i].isSensorWidthResized = true;
      hdncExaBlo[i].isSensorHeightResized = true;
      /*  */
      hdncY[i].isSensorResize = false;
      hdncY[i].isResize = true;
      /* const {
        hdncPetaBlo
      } = HdncGet.getHdncBloEbGroup(i);
      for (let j = 0; j < hdncPetaBlo.length; j++) {
        hdncPetaBlo[j].isResize = true;
      } */
    }
    /* !!!!! :v1.1.18a [temporary] (display:none): !!!!! */
    /* style -> classList */
    /* const {
      hdncYottaSdo,
      hdncYottaSfroTgro,
      hdncYottaSfroBgro
    } = HdncGet.getHdncYottaGroup();
    if (FwaConfig.currentDisplayType === 1) {
      /* hdncYottaSdo.style.display = ""; 
      hdncYottaSfroTgro.style.display = "";
      hdncYottaSfroBgro.style.display = "";
    } else {
      /* hdncYottaSdo.style.display = "none"; 
      hdncYottaSfroTgro.style.display = "none";
      hdncYottaSfroBgro.style.display = "none";
    } */
    /* !!!!! ;v1.1.18a [temporary] (display:none); !!!!! */
    if (FwaConfig.currentDisplayType === 1) {
      for (let i = 0; i < hdncExaBlo.length; i++) {
        hdncY[i].isSensorResize = false;
        hdncExaBlo[i].isSensorResize = false;
        hdncExaBlo[i].style.maxHeight = "";
      }
    }
    /* else {
      for (let i = 0; i < hdncExaBlo.length; i++) {
        hdncExaBlo[i].isSensorResize = true;
      }
    } */
    /* if (FwaConfig.currentDisplayType !== 1) {
      for (let i = 0; i < hdncY.length; i++) {
        hdncY[i].isSensorResize = false;
      }
    } */
  }
  static initSensorOnResize() {
    /* if (FwaConfig.currentDisplayType === 1) */
    const {
      hdncY
    } = HdncGet.getHdncGroup();
    /* let hdncGigaBloBgroBuffer = null;
    if (FwaConfig.currentDisplayType === 3) {
      hdncGigaBloBgroBuffer = 32;
    } else {
      hdncGigaBloBgroBuffer = 24;
    } */
    if (FwaConfig.currentDisplayType === 1) {
      const hdncGigaBloBgroBuffer = 24;
      for (let i = 0; i < hdncY.length; i++) {
        hdncY[i].isSensorResize = true;
        if (hdncY[i].isActive) {
          const {
            hdncGigaBloText,
            hdncGigaBloBgro
          } = HdncGet.getHdncBloEbGroup(i);
          for (let j = 0; j < hdncGigaBloBgro.length; j++) {
            HdncSet.setDataHdncGigaBloBgro_Old(
              hdncGigaBloBgro[j],
              hdncGigaBloText[j],
              hdncGigaBloBgroBuffer
            );
            HdncSet.setHdncGigaBloBgro_Old(hdncGigaBloBgro[j], true);
          }
          hdncY[i].isSensorResize = false;
        }
      }
      HdncHandler.mdtHdncYottaSfro();
    }
    /*  */
    if (FwaConfig.currentDisplayType !== 1) {
      const {
        hdncExaBlo
      } = HdncGet.getHdncBloGroup();
      /*  */
      const innerWidth = window.innerWidth;
      const previousInnerWidth = window.previousInnerWidth;
      const innerHeight = window.innerHeight;
      const previousInnerHeight = window.previousInnerHeight;
      /*  */
      for (let i = 0; i < hdncExaBlo.length; i++) {
        if (innerWidth !== previousInnerWidth) {
          hdncExaBlo[i].isSensorWidthResized = true;
        }
        if (innerHeight !== previousInnerHeight) {
          hdncExaBlo[i].isSensorHeightResized = true;
        }
      }
      /*  */
      if (innerWidth !== previousInnerWidth) {
        for (let i = 0; i < hdncExaBlo.length; i++) {
          HdncSet.setDataHdncExaBloSgroLeft(i);
          HdncSet.setHdncExaBloSgroLeft(i);
        }
        window.previousInnerWidth = innerWidth;
      }
      if (innerHeight !== previousInnerHeight) {
        HdncSet.setDataHdncExaBloMaxHeight();
        for (let i = 0; i < hdncExaBlo.length; i++) {
          HdncSet.setHdncExaBloMaxHeight(i);
        }
        window.previousInnerHeight = innerHeight;
      }
    }
      /* ===== */
      /* const innerHeight = window.innerHeight;
      const previousInnerHeight = window.previousInnerHeight; */
      /* if (previousInnerHeight !== innerHeight) {
        HdncSet.setDataHdncExaBloMaxHeight();
        for (let i = 0; i < hdncExaBlo.length; i++) {
          HdncSet.setHdncExaBloMaxHeight(i);
        }
      } */
      /* const innerWidth = window.innerWidth;
      const previousInnerWidth = window.previousInnerWidth; */
      /* if (previousInnerWidth !== innerWidth) {

      } */
      /*  */
      /* for (let i = 0; i < hdncExaBlo.length; i++) {
        hdncExaBlo[i].isSensorResize = true;
        if (hdncY[i].isActive) { */
          /* const calcMaxHeight = (innerHeight - 10 * 16); */
          /* const setMaxHeight = calcMaxHeight + "px"; */
          /* petaBlo * 4rem + 8px > maxHeight  widthSensor, heightSensor*/
          /* hdncExaBlo[i].style.maxHeight = setMaxHeight; */
          /*  */
          /* const {
            hdncPetaBlo
          } = HdncGet.getHdncBloEbGroup(i);
          const calcExaBloHeight = hdncPetaBlo.length * (4 * 16);
          console.log("isActive");
          if (calcExaBloHeight > calcMaxHeight) { */
            /* tdtHdncExaBloTransitionEnd.maxHeight */
            /* console.log("calcMaxHeight"); */
            /* setBoTop(hdncPetaBlo.length * (4 * 16)); */
            /* console.log(calcMaxHeight); */
            /* HdncSet.setDataHdncExaBloSgroTop(i, calcMaxHeight);
            HdncSet.setHdncExaBloSgroTop(i); */
            /* const eventDataScroll = {};
            eventDataScroll.currentTarget = hdncExaBlo[i]; */
            /* HdncHandler.tdtHdncExaBloScroll(eventDataScroll); */
            /* setTimeout(
              HdncHandler.tdtHdncExaBloScroll,
              300,
              eventDataScroll
            ); */
          /* } else if (calcExaBloHeight < calcMaxHeight) {
            console.log("tdtBloScroll"); */
            /* hdncExaBloSgroTo[i].classList.remove(
              "cl-tdt-hdnc-e-blo-scroll-handler"
            );
            hdncExaBloSgroBo[i].classList.remove(
              "cl-tdt-hdnc-e-blo-scroll-handler"
            ); */
            /* const eventDataScroll = {};
            eventDataScroll.currentTarget = hdncExaBlo[i];
            HdncHandler.tdtHdncExaBloScroll(eventDataScroll); */
            /* setTimeout(
              HdncHandler.tdtHdncExaBloScroll,
              300,
              eventDataScroll
            ); */
          /* } */
          /* if (previousInnerWidth !== innerWidth) {
            HdncSet.setDataHdncExaBloSgroLeft(i);
            HdncSet.setHdncExaBloSgroLeft(i);
          } */
          /*  */
          /* HdncSet.setDataHdncExaBloSgro(i);
          HdncSet.setHdncExaBloSgro(i);
          hdncExaBlo[i].addEventListener(
            "transitionend",
            HdncHandler.tdtHdncExaBloTransitionEndMaxHeight
          ); */
          /* hdncExaBlo[i].addEventListener("transitionend", temp);
          function temp(event) {
            if (
              event.target === hdncExaBlo[i] &&
              event.propertyName === "max-height"
            ) {
              console.log("check");
            }
          } */
          /* setTimeout(
            HdncSet.setDataHdncExaBloSgro, 300, i
          );
          setTimeout(
            HdncSet.setHdncExaBloSgro, 300, i
          ); */
          /* HdncSet.setDataHdncExaBloSgro(i);
          HdncSet.setHdncExaBloSgro(i); */
          /*  */
          /* hdncExaBlo[i].isSensorResize = false;
        }
      }
      window.previousInnerHeight = innerHeight;
      window.previousInnerWidth = innerWidth; */
      /*  */
    /* } */
    /* setTimeout(
      sensorOnResizeTimer,
      300
    ); */
    /* function sensorOnResizeTimer() {
      for (let i = 0; i < hdncY.length; i++) {
        if (hdncY[i].isActive) {
          const {
            hdncGigaBloText,
            hdncGigaBloBgro
          } = HdncGet.getHdncBloEbGroup(i);
          for (let j = 0; j < hdncGigaBloBgro.length; j++) {
            HdncSet.setDataHdncGigaBloBgro_Old(
              hdncGigaBloBgro[j],
              hdncGigaBloText[j],
              hdncGigaBloBgroBuffer
            );
            HdncSet.setHdncGigaBloBgro_Old(hdncGigaBloBgro[j], true);
          }
          console.log(i);
          console.log("hi");
        }
      }
    } */
    /* const {
      hdncExaBlo
    } = HdncGet.getHdncBloGroup();
    for (let i = 0; i < hdncExaBlo.length; i++) {
      hdncExaBlo[i].isResensorResize = true;
    } */
  }
  /* static initStepOnResize() {
    const displayTypeState = FwaConfig.previousDisplayType;
    HdncSet.setHdnc(displayTypeState);
    const {
      hdncExaBlo
    } = HdncGet.getHdncBloGroup();
    hdncExaBlo[0].classList.remove("cl-tdt-hdnc-z-tlo-handler-nth-1");
    hdncExaBlo[3].classList.remove("cl-tdt-hdnc-z-tlo-handler-nth-4");
  } */
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
      for (let zsi = 0; zsi < HdncConfig.hdncGroup.length; zsi++) {
        tempGenerateElement = FwcAccessor.getGenerateElement2(
          HdncConfig.hdncGroup[zsi]
        );
        tempSaveElement[HdncConfig.hdncGroup[zsi].elementId] = tempGenerateElement;
      }
      /* ==========----- ;Ys Group; -----========== */
      /* ==========----- :Tlo Group: -----========== */
      for (let zsi = 0; zsi < HdncConfig.hdncTloGroup.length; zsi++) {
        tempGenerateElement = FwcAccessor.getGenerateElement2(
          HdncConfig.hdncTloGroup[zsi],
          [ysi]
        );
        tempSaveElement[HdncConfig.hdncTloGroup[zsi].elementId] = tempGenerateElement;
      }
      /* ==========----- ;Tlo Group; -----========== */
      /* ==========----- :Blo Group: -----========== */
      for (let zsi = 0; zsi < HdncConfig.hdncBloGroup.length; zsi++) {
        tempGenerateElement = FwcAccessor.getGenerateElement2(
          HdncConfig.hdncBloGroup[zsi]
        );
        tempSaveElement[HdncConfig.hdncBloGroup[zsi].elementId] = tempGenerateElement;
      }
      /* ==========----- ;Blo Group; -----========== */
      /* ==========----- :Blo Eb Group: -----========== */
      for (let zsi = 0; zsi < HdncConfig.hdncGigaBloText[ysi].length; zsi++) {
        for (let esi = 0; esi < HdncConfig.hdncBloEbGroup.length; esi++) {
          tempGenerateElement = FwcAccessor.getGenerateElement2(
            HdncConfig.hdncBloEbGroup[esi],
            [ysi, zsi]
          );
          tempSaveElement[HdncConfig.hdncBloEbGroup[esi].elementId] = tempGenerateElement;
        }
        HdncConfig.hdncBloEbGroupAppend(tempSaveElement);
      }
      /* ==========----- ;Blo Eb Group; -----========== */
      HdncConfig.hdncTloGroupAppend(tempSaveElement);
      HdncConfig.hdncBloGroupAppend(tempSaveElement);
      HdncConfig.hdncGroupAppend(tempSaveElement);
      hdncFragment.append(tempSaveElement["hdncY"]);
      tempSaveElement = {};
    }
    /* =============== ;Ys, Tlo, Zs Group; =============== */
    /* =============== :Yotta Group: =============== */
    /* for (let ysi = 0; ysi < HdncConfig.hdncEcoGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement2(
        HdncConfig.hdncEcoGroup[ysi]
      );
      tempSaveElement[HdncConfig.hdncEcoGroup[ysi].elementId] = tempGenerateElement;
    }
    HdncConfig.hdncEcoGroupAppend(tempSaveElement); */
    for (let ysi = 0; ysi < HdncConfig.hdncYottaGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement2(
        HdncConfig.hdncYottaGroup[ysi]
      );
      tempSaveElement[HdncConfig.hdncYottaGroup[ysi].elementId] = tempGenerateElement;
    }
    HdncConfig.hdncYottaGroupAppend(tempSaveElement, hdncFragment);
    /* hdncFragment.append(tempSaveElement["hdncYottaEco"]); */
    /* =============== ;Yotta Group; =============== */
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
    const {
      hdncExaBlo
    } = HdncGet.getHdncBloGroup();
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
      hdncR[eventListenerType]("scroll", HdncHandler.mdtHdncYottaSfro);
    } else if (displayTypeState === 2) {
      /* for(let i = 0; i < hdncExaBlo.length; i++) {
        hdncExaBlo[i][eventListenerType]("scroll", HdncHandler.tdtHdncExaBloScroll);
      } */
    } else if (displayTypeState === 3) {
      /* for(let i = 0; i < hdncExaBlo.length; i++) {
        hdncExaBlo[i][eventListenerType]("scroll", HdncHandler.ddtHdncExaBloScroll);
      } */
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
        HdncSet.setTimerMdtHdncYotta,
        300,
        targetIndex
      );
    } else {
      clearTimeout(hdncY[targetIndex].timeoutId);
      for (let i = 0; i < hdncGigaBloBgro.length; i++) {
        HdncSet.setHdncGigaBloBgro_Old(hdncGigaBloBgro[i], false);
        clearTimeout(hdncPetaBlo[i].timeoutId);
      }
    }
    /*  */
    hdncY[targetIndex].classList[type]("cl-mdt-hdnc-z-tlo-handler");
    hdncExaTloText[targetIndex].classList[type]("cl-mdt-hdnc-z-tlo-handler");
    hdncExaTloRgro[targetIndex].classList[type]("cl-mdt-hdnc-z-tlo-handler");
    hdncExaTloBgro[targetIndex].classList[type]("cl-mdt-hdnc-z-tlo-handler");
    /*  */
    /* HdncSet.setHdncExaBlo(
      hdncExaBlo[targetIndex],
      hdncTeraBlo,
      hdncExaBloHeight
    ); */
    HdncSet.setHdncExaBloGridTemplateRows(targetIndex, hdncExaBloHeight);
    for (let i = 0; i < hdncTeraBlo.length; i++) {
      hdncTeraBlo[i].classList[type]("cl-mdt-hdnc-z-tlo-handler");
    }
    /*  */
    hdncY[targetIndex].isActive = isActive;
    /*  */
    HdncHandler.mdtHdncYottaSfro();
  }
  static tdtHdncZettaTlo(eventData) {
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
      hdncExaBlo,
      hdncExaBloSgroTo,
      hdncExaBloSgroBo
    } = HdncGet.getHdncBloGroup();
    const {
      hdncTeraBlo,
      hdncGigaBloBgro
    } = HdncGet.getHdncBloEbGroup(targetIndex);
    /*  */
    let isActive = null;
    let type = "";
    /* let hdncExaBloHeight = null; */
    if (!hdncY[targetIndex].isActive) {
      isActive = true;
      type = "add";
      /* hdncExaBloHeight = 4; */
    } else {
      isActive = false;
      type = "remove";
      /* hdncExaBloHeight = 0; */
    }
    /* TransitionEnd */
    /* HdncSet.setHdncExaBloGridTemplateRows(targetIndex, hdncExaBloHeight); */
    HdncSet.setHdncExaBlo(isActive, targetIndex);
    /*  */
    if (isActive) {
      /* hdncExaBlo[targetIndex].addEventListener(
        "transitionend",
        HdncHandler.tdtHdncExaBloTransitionEnd
      ); */
      /*  */
      /* if (hdncExaBlo[targetIndex].isSensorResize || hdncY[targetIndex].isResize) {
        HdncSet.setHdncExaBloMaxHeight(targetIndex);
        /* hdncExaBlo[targetIndex].isSensorResize = false; 
      } */
      /*  */
      if (targetIndex === 0) {
        hdncExaBlo[targetIndex].classList.add("cl-tdt-hdnc-z-tlo-handler-nth-1");
      } else if (targetIndex === 3) {
        hdncExaBlo[targetIndex].classList.add("cl-tdt-hdnc-z-tlo-handler-nth-4");
      }
    } else {
      /* hdncExaBlo[targetIndex].removeEventListener(
        "transitionend",
        HdncHandler.tdtHdncExaBloTransitionEnd
      ); */
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
        /* HdncSet.setHdncGigaBloBgro_Old(hdncGigaBloBgro[i], false); */
        HdncSet.setHdncGigaBloBgroWidth(hdncGigaBloBgro[i], false);
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
      HdncSet.setTdtHdnc(targetIndex);
    }
    /*  */
    hdncY[targetIndex].isActive = isActive;
  }
  /* !!!!! :v1.1.18a [temporary, delete] (refactored): !!!!! */
  static tdtHdncZettaTlo_Temporary(eventData) {
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
      hdncZettaBlo,
      hdncExaBlo,
      hdncExaBloSgroTo,
      hdncExaBloSgroBo
    } = HdncGet.getHdncBloGroup();
    const {
      hdncPetaBlo,
      hdncTeraBlo,
      hdncGigaBloText,
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
    /* transitionend */
    HdncSet.setHdncExaBloGridTemplateRows(targetIndex, hdncExaBloHeight);
    /*  */
    /* hdncExaBlo[targetIndex][eventListenerType](
      "scroll",
      HdncHandler.tdtHdncExaBloScroll
    ); */
    /*  */
    if (isActive) {
      /* hdncExaBlo[targetIndex].addEventListener("transitionend", function(event) {
        if (
          event.target === hdncExaBlo[targetIndex] &&
          event.propertyName === "grid-template-rows"
        ) {
          console.log("hdnc grid");
        }
        console.log("transitionEnd");
      }); */
      hdncExaBlo[targetIndex].addEventListener(
        "transitionend",
        HdncHandler.tdtHdncExaBloTransitionEnd
      );
      if (hdncExaBlo[targetIndex].isSensorResize || hdncY[targetIndex].isResize) {
        /* const innerHeight = window.innerHeight;
        hdncExaBlo[targetIndex].style.maxHeight =
          (innerHeight - (10 * 16)).toString() + "px";
        if (innerHeight !== window.previousInnerHeight) {
          window.previousInnerHeight = innerHeight;
        } */
        /*  */
        HdncSet.setHdncExaBloMaxHeight(targetIndex);
        /* hdncExaBlo[targetIndex].timeoutId = setTimeout(
          HdncSet.setTimerTdtHdncExaBlo,
          300,
          targetIndex
        ); */
        /*  */
        /* HdncSet.setHdncExaBlo(true, targetIndex); */
        /*  */
        hdncExaBlo[targetIndex].isSensorResize = false;
      } else {
        /* hdncExaBlo[targetIndex].timeoutId = setTimeout(
          HdncSet.setTimerTdtHdncExaBlo,
          300,
          targetIndex
        ); */
      }
      /* const innerHeight = window.innerHeight; */
      /* hdncExaBlo[targetIndex].maxHeight = innerHeight - (10 * 16); */
      /* hdncExaBlo[targetIndex].style.maxHeight =
        (innerHeight - (10 * 16)).toString() + "px";
      window.previousInnerHeight = innerHeight; */
      /* hdncExaBlo[targetIndex].style.maxHeight = 
        (innerHeight - (14 * 16)).toString() + "px"; */
    } else {
      /* clearTimeout(hdncExaBlo[targetIndex].timeoutId); */
      hdncExaBlo[targetIndex].removeEventListener(
        "scroll",
        HdncHandler.tdtHdncExaBloScroll
      );
      hdncExaBloSgroTo[targetIndex].classList.remove(
        "cl-tdt-hdnc-e-blo-scroll-handler"
      );
      hdncExaBloSgroBo[targetIndex].classList.remove(
        "cl-tdt-hdnc-e-blo-scroll-handler"
      );
    }
    /*  */
    /* if (isActive) {
      hdncExaBlo[targetIndex].timeoutId = setTimeout(
        HdncSet.setTimerTdtHdncExaBlo,
        300,
        targetIndex
      ); */
      /* setTimeout(
        HdncSet.setHdncExaBloSgro,
        300,
        targetIndex,
        true
      ); */
      /* HdncSet.setHdncExaBloSgro(targetIndex); */
    /* } else {
      clearTimeout(hdncExaBlo[targetIndex].timeoutId);
      hdncExaBlo[targetIndex].removeEventListener(
        "scroll",
        HdncHandler.tdtHdncExaBloScroll
      );
      hdncExaBloSgroTo[targetIndex].classList.remove(
        "cl-tdt-hdnc-e-blo-scroll-handler"
      );
      hdncExaBloSgroBo[targetIndex].classList.remove(
        "cl-tdt-hdnc-e-blo-scroll-handler"
      );
    } */
    /*  */
    if (isActive) {
      /* hdncY[targetIndex].timeoutId = setTimeout(
        HdncSet.setTimerTdtHdncYotta,
        300,
        targetIndex
      ); */
      
    } else {
      /* clearTimeout(hdncY[targetIndex].timeoutId); */
      for (let i = 0; i < hdncGigaBloBgro.length; i++) {
        HdncSet.setHdncGigaBloBgro_Old(hdncGigaBloBgro[i], false);
        /* clearTimeout(hdncPetaBlo[i].timeoutId); */
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
    /* HdncSet.setHdncExaBlo(hdncExaBlo[targetIndex], hdncTeraBlo, hdncExaBloHeight); */
    /* HdncSet.setHdncExaBloGridTemplateRows(targetIndex, hdncExaBloHeight); */
    /*  */
    if (targetIndex === 0) {
      hdncExaBlo[targetIndex].classList.add("cl-tdt-hdnc-z-tlo-handler-nth-1");
    } else if (targetIndex === 3) {
      hdncExaBlo[targetIndex].classList.add("cl-tdt-hdnc-z-tlo-handler-nth-4");
    }
    /*  */
    /* if (isActive) { */
      /* setTimeout(HdncSet.setDataHdncExaBloSgro, 300, targetIndex); */
      /* function a() { */
        /* let hdncExaBloStyle = window.getComputedStyle(hdncExaBlo[targetIndex]);
        let styleHeight = hdncExaBloStyle.height; */
        /* let hdncZettaBloRect = hdncZettaBlo[targetIndex].getBoundingClientRect();
        let hdncExaBloRect = hdncExaBlo[targetIndex].getBoundingClientRect(); */
        /* console.log(hdncZettaBloRect);
        console.log(hdncExaBloRect); */
        /* let exaBloLeft = hdncZettaBloRect.left - hdncExaBloRect.left; */
        /* let saroLeft = (hdncExaBloRect.width / 2) - 8; */
        /* let saroLeft = -exaBloLeft + (hdncExaBloRect.width / 2) - 8; */
        /* let sgroLeft = -exaBloLeft + (hdncExaBloRect.width / 2) - 16; */
        /* hdncExaBloScroBgro[targetIndex].style.top = "calc" + "("
          + hdncExaBloRect.height + "px" + " - " + "24px" + ")";
        hdncExaBloScroBgro[targetIndex].style.left = saroLeft + "px";
        hdncExaBloScroTgro[targetIndex].style.left = saroLeft + "px"; */
        /* hdncExaBloSgroBo[targetIndex].style.top = "calc" + "("
          + hdncExaBloRect.height + "px" + " - " + "40px" + ")";
        hdncExaBloSgroBo[targetIndex].style.left = sgroLeft + "px";
        hdncExaBloSgroTo[targetIndex].style.left = sgroLeft + "px"; */
      /* } */
    /* } */
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
  /* !!!!! ;v1.1.18a [temporary, delete] (refactored); !!!!! */
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
    if (isActive) {
      if (hdncExaBlo[eventIndex].isSensorResize || hdncY[eventIndex].isResize) {
        const innerHeight = window.innerHeight;
        hdncExaBlo[eventIndex].style.maxHeight =
          (innerHeight - (6 * 16)).toString() + "px";
        if (innerHeight !== window.previousInnerHeight) {
          window.previousInnerHeight = innerHeight;
        }
        hdncExaBlo[eventIndex].isSensorResize = false;
      }
    }
    /*  */
    hdncExaTloText[eventIndex].classList[type]("cl-ddt-hdnc-y-handler");
    hdncExaTloBgro[eventIndex].classList[type]("cl-ddt-hdnc-y-handler");
    hdncExaBlo[eventIndex].classList[type]("cl-ddt-hdnc-y-handler");
    for (let i = 0; i < hdncPetaBlo.length; i++) {
      hdncTeraBlo[i].classList[type]("cl-ddt-hdnc-y-handler");
    }
    /* HdncSet.setHdncExaBlo(hdncExaBlo[eventIndex], hdncPetaBlo, hdncExaBloHeight); */
    HdncSet.setHdncExaBloGridTemplateRows(eventIndex, hdncExaBloHeight);
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
        HdncSet.setDdtHdncYottaTimer,
        300,
        eventIndex,
        hdncY[eventIndex]
      );
    } else {
      clearTimeout(hdncY[eventIndex].timeoutId);
    }
    /* if (isActive) {
      hdncY[eventIndex].isResize = false;
    } */
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
        HdncSet.setHdncGigaBloBgro_Old(hdncGigaBloBgro[eventIndex], isActive);
      } else {
        hdncPetaBlo[eventIndex].timeoutId = setTimeout(
          HdncSet.setDdtHdncPetaBloTimer,
          50,
          hdncGigaBloBgro[eventIndex],
          hdncPetaBlo[eventIndex],
          hdncY[targetIndex]
        );
      }
    } else {
      clearTimeout(hdncPetaBlo[eventIndex].timeoutId);
      HdncSet.setHdncGigaBloBgro_Old(hdncGigaBloBgro[eventIndex], isActive);
    }
  }
  static mdtHdncYottaSfro() {
    const {
      hdncR
    } = HdncGet.getHdncRoot();
    const {
      hdncY
    } = HdncGet.getHdncGroup();
    const {
      hdncZettaTlo
    } = HdncGet.getHdncTloGroup();
    /* const {
      hdncZettaEcoSfroTgro,
      hdncZettaEcoSfroBgro
    } = HdncGet.getHdncEcoGroup(); */
    const {
      hdncYottaSfroTgro,
      hdncYottaSfroBgro
    } = HdncGet.getHdncYottaGroup();
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
      hdncYottaSfroTgro.classList[tgroType]("cl-mdt-hdnc-y-sfro-handler");
    }
    if (bgroType) {
      hdncYottaSfroBgro.classList[bgroType]("cl-mdt-hdnc-y-sfro-handler");
    }
  }
  static tdtHdncExaBloScroll(eventData) {
    const {
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hdnc-y");
    /* HdncSet.setClassListHdncExaBloSgro(targetIndex); */
    const {
      hdncExaBlo,
      hdncExaBloSgroTo,
      hdncExaBloSgroBo
    } = HdncGet.getHdncBloGroup();
    /*  */
    const scrollTop = hdncExaBlo[targetIndex].scrollTop;
    const scrollHeight = hdncExaBlo[targetIndex].scrollHeight;
    const clientHeight = hdncExaBlo[targetIndex].clientHeight;
    const scrollBuffer = 8;
    /*  */
    let toType = "";
    let boType = "";
    /*  */
    /* if (scrollHeight - clientHeight <= scrollBuffer + scrollBuffer) {
      console.log("return");
      return;
    } */
    /* let scrollable = 0; */
    /*  */
    /* if (scrollHeight + scrollBuffer > clientHeight) {
      scrollable = scrollHeight - clientHeight;
    } */
    /*  */
    /* if (scrollable <= scrollBuffer) {
      if (HdncAccessor.hdncScrollState !== 0) {
        toType = "remove";
        boType = "remove";
        HdncAccessor.hdncScrollState = 0;
      }
    } else {
      if (scrollTop < scrollBuffer) {
        if (HdncAccessor.hdncScrollState !== 1) {
          hdncExaBlo[targetIndex].scroll(0, 0);
          toType = "remove";
          boType = "add";
          HdncAccessor.hdncScrollState = 1;
        }
      } else if (scrollTop > scrollable - scrollBuffer) {
        if (HdncAccessor.hdncScrollState !== 2) {
          hdncExaBlo[targetIndex].scroll(0, scrollHeight);
          toType = "add";
          boType = "remove";
          HdncAccessor.hdncScrollState = 2;
        }
      } else {
        if (HdncAccessor.hdncScrollState !== 3) {
          toType = "add";
          boType = "add";
          HdncAccessor.hdncScrollState = 3;
        }
      }
    } */
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
  static ddtHdncExaBloScroll(eventData) {
    HdncHandler.tdtHdncExaBloScroll(eventData);
  }
  /* ================================================== */
  static tdtHdncExaBloTransitionEnd(eventData) {
    const {
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hdnc-y");
    const {
      hdncY
    } = HdncGet.getHdncGroup();
    const {
      hdncExaBlo
    } = HdncGet.getHdncBloGroup();
    if (
      eventData.target === hdncExaBlo[targetIndex] &&
      hdncY[targetIndex].isActive &&
      eventData.propertyName === "grid-template-rows"
    ) {
      /* console.log(targetIndex, "grid"); */
      /* const {
        hdncGigaBloText,
        hdncGigaBloBgro
      } = HdncGet.getHdncBloEbGroup(targetIndex); */
      /* const gigaBgroBuffer = 24;
      for (let i = 0; i < hdncGigaBloBgro.length; i++) {
        HdncSet.setDataHdncGigaBloBgro_Old(
          hdncGigaBloBgro[i],
          hdncGigaBloText[i],
          gigaBgroBuffer
        );
      } */
      if (hdncExaBlo[targetIndex].isSensorWidthResized) {
        HdncSet.setDataHdncGigaBloBgro(targetIndex);
        hdncExaBlo[targetIndex].isSensorWidthResized = false;
      }
      /* Bgro */
      /* HdncSet.setDataHdncGigaBloBgro(targetIndex); */
      HdncSet.setHdncGigaBloBgro(targetIndex, false);
      HdncSet.setTimerHdncGigaBloBgro(targetIndex);
      /* HdncSet.setTdtHdncGigaBloBgro(targetIndex); */
      /*  */
      /* HdncSet.setTdtHdncExaBlo(targetIndex); */
      hdncExaBlo[targetIndex].addEventListener(
        "scroll",
        HdncHandler.tdtHdncExaBloScroll
      );
      /* Sgro */
      /* HdncSet.setDataHdncExaBloSgro(targetIndex); */
      if (hdncExaBlo[targetIndex].isSensorHeightResized) {
        HdncSet.setDataHdncExaBloSgro(targetIndex);
        hdncExaBlo[targetIndex].isSensorHeightResized = false;
      }
      HdncSet.setHdncExaBloSgro(targetIndex);
      /* HdncSet.setHdncExaBloSgroClassList(targetIndex); */
      const scrollEventData = {};
      scrollEventData.currentTarget = hdncExaBlo[targetIndex];
      HdncHandler.tdtHdncExaBloScroll(scrollEventData);
      /*  */
      /* hdncExaBlo[targetIndex].isSensorResize = false; */
      /*  */
      /* hdncExaBlo[targetIndex].removeEventListener(
        "transitionend",
        HdncHandler.tdtHdncExaBloTransitionEnd
      ); */
    } else if (
      eventData.target === hdncExaBlo[targetIndex] &&
      hdncY[targetIndex].isActive &&
      eventData.propertyName === "max-height"
    ) {
      HdncSet.setDataHdncExaBloSgroTop(targetIndex);
      HdncSet.setHdncExaBloSgroTop(targetIndex);
      const eventDataScroll = {};
      eventDataScroll.currentTarget = hdncExaBlo[targetIndex];
      HdncHandler.tdtHdncExaBloScroll(eventDataScroll);
      console.log(targetIndex, "max-height");
    }
  }
  /* static tdtHdncExaBloTransitionEndMaxHeight(eventData) {
    const {
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hdnc-y");
    const {
      hdncExaBlo
    } = HdncGet.getHdncBloGroup();
    if (
      eventData.target === hdncExaBlo[targetIndex] &&
      eventData.propertyName === "max-height"
    ) {
      HdncSet.setDataHdncExaBloSgro(targetIndex);
      HdncSet.setHdncExaBloSgro(targetIndex);
      hdncExaBlo[targetIndex].removeEventListener(
        "transitionend",
        HdncHandler.tdtHdncExaBloTransitionEndMaxHeight
      );
    }
    console.log(eventData.target, eventData.propertyName);
  } */
}
class HdncGet {
  static getHdncRoot() {
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HdncAccessor.hdncCache,
      HdncConfig.hdncRoot
    );
    return saveVerifyGroup;
  }
  static getHdncGroup() {
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
  /* static getHdncEcoGroup() {
    const {
      hdncR
    } = HdncGet.getHdncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HdncAccessor.hdncCache,
      HdncConfig.hdncEcoGroup,
      hdncR
    );
    return saveVerifyGroup;
  } */
  static getHdncYottaGroup() {
    const {
      hdncR
    } = HdncGet.getHdncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HdncAccessor.hdncCache,
      HdncConfig.hdncYottaGroup,
      hdncR
    );
    return saveVerifyGroup;
  }
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
  /* -------------------------------------------------- */
  static setDataHdncGigaBloBgro(ebIndex) {
    /* !!!!! isSensorResize, isResize !!!!! */
    const {
      hdncTeraBlo,
      hdncGigaBloText,
      hdncGigaBloBgro
    } = HdncGet.getHdncBloEbGroup(ebIndex);
    /*  */
    const bufferWidth = 24;
    let hdncGigaBloTextWidth = null;
    let hdncTeraBloWidth = null;
    /*  */
    for (let i = 0; i < hdncGigaBloBgro.length; i++) {
      hdncGigaBloTextWidth = hdncGigaBloText[i].offsetWidth;
      hdncTeraBloWidth = hdncTeraBlo[i].offsetWidth;
      /* setLeft = (teraBloWidth - (textWidth + bufferWidth)) / 2 + "px";
      setWidth = textWidth + bufferWidth + "px"; */
      /*  */
      /* hdncGigaBloBgro[i].dataset.left = setLeft;
      hdncGigaBloBgro[i].dataset.width = setWidth; */
      HdncSet.setDataHdncGigaBloBgroLeft(
        hdncGigaBloBgro[i],
        hdncGigaBloTextWidth,
        hdncTeraBloWidth,
        bufferWidth
      );
      HdncSet.setDataHdncGigaBloBgroWidth(
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
  static setHdncGigaBloBgro(ebIndex, pSetWidth) {
    const {
      hdncGigaBloBgro
    } = HdncGet.getHdncBloEbGroup(ebIndex);
    /*  */
    for (let i = 0; i < hdncGigaBloBgro.length; i++) {
      HdncSet.setHdncGigaBloBgroLeft(hdncGigaBloBgro[i]);
      HdncSet.setHdncGigaBloBgroWidth(hdncGigaBloBgro[i], pSetWidth);
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
    } = HdncGet.getHdncBloEbGroup(ebIndex);
    for (let i = 0; i < hdncGigaBloBgro.length; i++) {
      hdncGigaBloBgro[i].timeoutId = setTimeout(
        HdncSet.setTimeoutHdncGigaBloBgro,
        150 * i,
        hdncGigaBloBgro[i]
      );
    }
  }
  /* -------------------------------------------------- */
  static setTimeoutHdncGigaBloBgro(pElement) {
    HdncSet.setHdncGigaBloBgroWidth(pElement, true);
  }
  /* ================================================== */
  static setTimerMdtHdncYotta(targetIndex) {
    const {
      hdncY
    } = HdncGet.getHdncGroup();
    const {
      hdncPetaBlo,
      hdncGigaBloText,
      hdncGigaBloBgro
    } = HdncGet.getHdncBloEbGroup(targetIndex);
    const gigaBgroBuffer = 24;
    if (hdncY[targetIndex].isResize) {
      for (let i = 0; i < hdncGigaBloBgro.length; i++) {
        HdncSet.setDataHdncGigaBloBgro_Old(
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
        HdncSet.setDataHdncGigaBloBgro_Old(
          hdncGigaBloBgro[i],
          hdncGigaBloText[i],
          gigaBgroBuffer
        );
      }
      hdncY[targetIndex].isSensorResize = false;
    }
    for (let i = 0; i < hdncGigaBloBgro.length; i++) {
      hdncPetaBlo[i].timeoutId = setTimeout(
        HdncSet.setTimerMdtHdncPetaBlo,
        150 * i,
        hdncGigaBloBgro[i]
      );
    }
  }
  /* static setTimerTdtHdncYotta(targetIndex) {
    const {
      hdncY
    } = HdncGet.getHdncGroup();
    const {
      hdncPetaBlo,
      hdncGigaBloText,
      hdncGigaBloBgro
    } = HdncGet.getHdncBloEbGroup(targetIndex);
    const gigaBgroBuffer = 24;
    if (hdncY[targetIndex].isResize) {
      for (let i = 0; i < hdncGigaBloBgro.length; i++) {
        HdncSet.setDataHdncGigaBloBgro_Old(
          hdncGigaBloBgro[i],
          hdncGigaBloText[i],
          gigaBgroBuffer
        );
      }
      hdncY[targetIndex].isResize = false;
    }
    for (let i = 0; i < hdncGigaBloBgro.length; i++) {
      hdncPetaBlo[i].timeoutId = setTimeout(
        HdncSet.setTimerMdtHdncPetaBlo,
        150 * i,
        hdncGigaBloBgro[i]
      );
    }
  } */
  /* -------------------------------------------------- */
  /* static setTdtHdncGigaBloBgro(pIndex) {
    const {
      hdncGigaBloBgro
    } = HdncGet.getHdncBloEbGroup(pIndex);
    for (let i = 0; i < hdncGigaBloBgro.length; i++) {
      hdncGigaBloBgro[i].timeoutId = setTimeout(
        HdncSet.setTimerTdtHdncGigaBloBgro,
        150 * i,
        hdncGigaBloBgro[i]
      );
    }
  }
  static setTimerTdtHdncGigaBloBgro(pElement) {
    HdncSet.setHdncGigaBloBgroLeft(pElement);
    HdncSet.setHdncGigaBloBgroWidth(pElement, true);
  } */
  /* ================================================== */
  /* static setTimerTdtHdncExaBlo(pIndex) {
    const {
      hdncExaBlo
    } = HdncGet.getHdncBloGroup();
    hdncExaBlo[pIndex].addEventListener(
      "scroll",
      HdncHandler.tdtHdncExaBloScroll
    );
    HdncSet.setDataHdncExaBloSgro(pIndex);
    HdncSet.setHdncExaBloSgro(pIndex);
    HdncSet.setClassListHdncExaBloSgro(pIndex);
  } */
  /* -------------------------------------------------- */
  /* static setTdtHdncExaBlo(pIndex) {
    const {
      hdncExaBlo
    } = HdncGet.getHdncBloGroup();
    hdncExaBlo[pIndex].addEventListener(
      "scroll",
      HdncHandler.tdtHdncExaBloScroll
    );
    HdncSet.setDataHdncExaBloSgro(pIndex);
    HdncSet.setHdncExaBloSgro(pIndex);
    HdncSet.setClassListHdncExaBloSgro(pIndex);
  } */
  /* ================================================== */
  static setDdtHdncYottaTimer(hdncBloEbIndex, timeoutFlag) {
    const {
      hdncY
    } = HdncGet.getHdncGroup();
    if (hdncY[hdncBloEbIndex].isResize) {
      const {
        hdncGigaBloText,
        hdncGigaBloBgro
      } = HdncGet.getHdncBloEbGroup(hdncBloEbIndex);
      const gigaBgroBuffer = 32;
      for (let i = 0; i < hdncGigaBloBgro.length; i++) {
        HdncSet.setDataHdncGigaBloBgro_Old(
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
    HdncSet.setHdncGigaBloBgro_Old(setElement, true);
  }
  /* ================================================== */
  static setDdtHdncPetaBloTimer(setElement, timerElement, timeoutFlag) {
    if (timeoutFlag.isTimeout) {
      HdncSet.setHdncGigaBloBgro_Old(setElement, true);
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
  static setHdncExaBlo(isSet, pIndex) {
    /* let gridTemplateData = "";
    for (let i = 0; i < referElement.length; i++) {
      gridTemplateData += size + "rem" + " ";
    }
    setElement.style.gridTemplateRows = gridTemplateData; */
    const {
      hdncExaBlo
    } = HdncGet.getHdncBloGroup();
    /*  */
    let rowRemSize = null;
    if (isSet) {
      rowRemSize = 4;
    } else {
      rowRemSize = 0;
    }
    HdncSet.setHdncExaBloGridTemplateRows(pIndex, rowRemSize);
    if (hdncExaBlo[pIndex].isSensorHeightResized && isSet) {
      HdncSet.setHdncExaBloMaxHeight(pIndex);
    }
  }
  /* -------------------------------------------------- */
  static setHdncExaBloGridTemplateRows(pIndex, rowRemSize) {
    const {
      hdncExaBlo
    } = HdncGet.getHdncBloGroup();
    const {
      hdncPetaBlo
    } = HdncGet.getHdncBloEbGroup(pIndex);
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
    } = HdncGet.getHdncBloGroup();
    /* let remBuffer = null;
    if (FwaConfig.currentDisplayType === 2) {
      remBuffer = 10;
    } else if (FwaConfig.currentDisplayType === 3) {
      remBuffer = 6;
    }
    const innerHeight = window.innerHeight;
    const setMaxHeight = innerHeight - (remBuffer * 16) + "px";
    window.previousInnerHeight = innerHeight; */
    /* HdncSet.setDataHdncExaBloMaxHeight(); */
    /*  */
    /* const setMaxHeight = hdncExaBlo[pIndex].dataset.maxHeight;
    hdncExaBlo[pIndex].style.maxHeight = setMaxHeight; */
    const setMaxHeight =
      HdncAccessor.hdncPropertyCache["hdncExaBloMaxHeight"] + "px";
    hdncExaBlo[pIndex].style.maxHeight = setMaxHeight;
  }
  /* -------------------------------------------------- */
  static setDataHdncExaBloMaxHeight() {
    /* const {
      hdncExaBlo
    } = HdncGet.getHdncBloGroup(); */
    let remBuffer = null;
    if (FwaConfig.currentDisplayType === 2) {
      remBuffer = 10;
    } else if (FwaConfig.currentDisplayType === 3) {
      remBuffer = 6;
    }
    const innerHeight = window.innerHeight;
    const calcMaxHeight = innerHeight - (remBuffer * 16);
    /* window.previousInnerHeight = innerHeight; */
    /* hdncExaBlo[pIndex].dataset.maxHeight = setMaxHeight; */
    HdncAccessor.hdncPropertyCache["hdncExaBloMaxHeight"] = calcMaxHeight;
  }
  /* ================================================== */
  static setDataHdncExaBloSgro(pIndex) {
    /* const {
      hdncZettaBlo,
      hdncExaBlo,
      hdncExaBloSgroTo,
      hdncExaBloSgroBo
    } = HdncGet.getHdncBloGroup();
    const hdncZettaBloRect = hdncZettaBlo[pIndex].getBoundingClientRect();
    const hdncExaBloRect = hdncExaBlo[pIndex].getBoundingClientRect();
    const hdncExaBloLeft = hdncZettaBloRect.left - hdncExaBloRect.left;
    const setLeft = -hdncExaBloLeft + (hdncExaBloRect.width / 2) - 16;
    const setTop = hdncExaBloRect.height - 40; */
    /*  */
    /* hdncExaBloSgroTo[pIndex].dataset.left = setLeft + "px"; */
    /*  */
    /* hdncExaBloSgroBo[pIndex].dataset.top = setTop + "px";
    hdncExaBloSgroBo[pIndex].dataset.left = setLeft + "px"; */
    /* hdncExaBloSgroTo[pIndex].style.left = setLeft + "px";
    hdncExaBloSgroBo[pIndex].style.top = setTop + "px";
    hdncExaBloSgroBo[pIndex].style.left = setLeft + "px"; */
    HdncSet.setDataHdncExaBloSgroTop(pIndex);
    HdncSet.setDataHdncExaBloSgroLeft(pIndex);
  }
  /* ------------------------------ */
  static setDataHdncExaBloSgroLeft(pIndex) {
    const {
      hdncZettaBlo,
      hdncExaBlo,
      /* hdncExaBloSgroTo,
      hdncExaBloSgroBo */
    } = HdncGet.getHdncBloGroup();
    const hdncZettaBloRect = hdncZettaBlo[pIndex].getBoundingClientRect();
    const hdncExaBloRect = hdncExaBlo[pIndex].getBoundingClientRect();
    /* const hdncExaBloSgroToRect = hdncExaBloSgroTo[pIndex].getBoundingClientRect(); */
    /* const hdncExaBloLeft = hdncZettaBloRect.left - hdncExaBloRect.left;
    const setLeft = -hdncExaBloLeft +
      (hdncExaBloRect.width / 2) - 16; */
    const calcLeft = -(hdncZettaBloRect.left - hdncExaBloRect.left) +
      (hdncExaBloRect.width / 2) - 16;
    /*  */
    /* hdncExaBloSgroTo[pIndex].dataset.left = setLeft + "px";
    hdncExaBloSgroBo[pIndex].dataset.left = setLeft + "px"; */
    /*  */
    HdncAccessor.hdncPropertyCache["hdncExaBloSgroLeft" + pIndex] = calcLeft;
  }
  /* ------------------------------ */
  static setDataHdncExaBloSgroTop(pIndex, pHeight) {
    console.log("top");
    const {
      hdncExaBlo,
      hdncExaBloSgroBo
    } = HdncGet.getHdncBloGroup();
    let hdncExaBloRect = null;
    /* const hdncExaBloSgroBoRect = hdncExaBloSgroBo[pIndex].getBoundingClientRect();
    const bottomBuffer = hdncExaBloSgroBoRect.width / 4; */
    let setTop = null;
    if (pHeight) {
      setTop = pHeight - 40;
      console.log(setTop, "pHeight");
    } else {
      hdncExaBloRect = hdncExaBlo[pIndex].getBoundingClientRect();
      setTop = hdncExaBloRect.height - 40;
      console.log(setTop, "bloRect");
    }
    /*  */
    hdncExaBloSgroBo[pIndex].dataset.top = setTop + "px";
  }
  /* -------------------------------------------------- */
  static setHdncExaBloSgro(pIndex) {
    /* const {
      hdncExaBloSgroTo,
      hdncExaBloSgroBo
    } = HdncGet.getHdncBloGroup(); */
    /*  */
    /* hdncExaBloSgroTo[pIndex].style.left = hdncExaBloSgroTo[pIndex].dataset.left; */
    /*  */
    /* hdncExaBloSgroBo[pIndex].style.top = hdncExaBloSgroBo[pIndex].dataset.top;
    hdncExaBloSgroBo[pIndex].style.left = hdncExaBloSgroBo[pIndex].dataset.left; */
    HdncSet.setHdncExaBloSgroTop(pIndex);
    HdncSet.setHdncExaBloSgroLeft(pIndex);
  }
  /* ------------------------------ */
  static setHdncExaBloSgroTop(pIndex) {
    const {
      hdncExaBloSgroBo
    } = HdncGet.getHdncBloGroup();
    /*  */
    const setTop = hdncExaBloSgroBo[pIndex].dataset.top;
    hdncExaBloSgroBo[pIndex].style.top = setTop;
  }
  /* ------------------------------ */
  static setHdncExaBloSgroLeft(pIndex) {
    const {
      hdncExaBloSgroTo,
      hdncExaBloSgroBo
    } = HdncGet.getHdncBloGroup();
    /*  */
    /* const setToLeft = hdncExaBloSgroTo[pIndex].dataset.left;
    const setBoLeft = hdncExaBloSgroBo[pIndex].dataset.left; */
    const setLeft =
      HdncAccessor.hdncPropertyCache["hdncExaBloSgroLeft" + pIndex] + "px";
    hdncExaBloSgroTo[pIndex].style.left = setLeft;
    hdncExaBloSgroBo[pIndex].style.left = setLeft;
  }
  /* -------------------------------------------------- */
  /* static setHdncExaBloSgroClassList(pIndex) {
    const {
      hdncExaBlo,
      hdncExaBloSgroBo
    } = HdncGet.getHdncBloGroup();
    /*  
    const scrollHeight = hdncExaBlo[pIndex].scrollHeight;
    const clientHeight = hdncExaBlo[pIndex].clientHeight;
    const scrollBuffer = 8;
    /*  
    if (clientHeight + scrollBuffer < scrollHeight) {
      hdncExaBloSgroBo[pIndex].classList.add(
        "cl-tdt-hdnc-e-blo-scroll-handler"
      );
    }
  } */
  /* -------------------------------------------------- */
  /* static setClassListHdncExaBloSgro(tIndex) {
    const {
      hdncExaBlo,
      hdncExaBloSgroTo,
      hdncExaBloSgroBo
    } = HdncGet.getHdncBloGroup();
    const scrollTop = hdncExaBlo[tIndex].scrollTop;
    const scrollHeight = hdncExaBlo[tIndex].scrollHeight;
    const clientHeight = hdncExaBlo[tIndex].clientHeight;
    const scrollBuffer = 8;
    /*  
    if (scrollHeight - clientHeight <= scrollBuffer + scrollBuffer) {
      console.log("setHdncExaBloSgro: cancel; scrollable = 0;");
      return;
    }
    /*  
    let toType = "";
    let boType = "";
    /*  
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
    /*  
    if (toType) {
      hdncExaBloSgroTo[tIndex].classList[toType](
        "cl-tdt-hdnc-e-blo-scroll-handler"
      );
    }
    if (boType) {
      hdncExaBloSgroBo[tIndex].classList[boType](
        "cl-tdt-hdnc-e-blo-scroll-handler"
      );
    }
  } */
  /* -------------------------------------------------- */
  /* static setHdncBloSgroTo(pIndex) {
    
  }
  static setHdncBloSgroBo(pIndex) {

  } */
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
    /* const {
      hdncZettaEcoSfroTgro,
      hdncZettaEcoSfroBgro
    } = HdncGet.getHdncEcoGroup(); */
    const {
      hdncYottaSfroTgro,
      hdncYottaSfroBgro
    } = HdncGet.getHdncYottaGroup();
    /*  */
    const eventData = {};
    /*  */
    if (displayTypeState === 1) {
      hdncYottaSfroTgro.classList.remove("cl-mdt-hdnc-y-sfro-handler");
      hdncYottaSfroBgro.classList.remove("cl-mdt-hdnc-y-sfro-handler");
      /* HdncAccessor.hdncScrollState = 0; */
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