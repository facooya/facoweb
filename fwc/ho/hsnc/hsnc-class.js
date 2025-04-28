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
  /* static setHsncGigaBloBgro() {
    HsncAccessorManager.setHsncGigaBloBgro();
  } */
  static resetHsnc(displayTypeState) {
    HsncSet.setHsnc(displayTypeState);
  }
  static setHsnc(displayTypeState) {
    HsncSet.setHsnc(displayTypeState);
  }
}
/* class HsncAccessorManager {
  static setHsncGigaBloBgro() {
    const {
      hsncY
    } = HsncGet.getHsncGroup();
    let isDefaultUpdate = null;
    if (FwaConfig.currentDisplayType !== 3) {
      isDefaultUpdate = true;
    } else {
      isDefaultUpdate = false;
    }
    const buffer = 24;
    for (let i = 0; i < hsncY.length; i++) {
      const {
        hsncGigaBloText,
        hsncGigaBloBgro
      } = HsncGet.getHsncBloEbGroup(i);
      for (let j = 0; j < hsncGigaBloBgro.length; j++) {
        HsncSet.setDataHsncGigaBloBgro(
          hsncGigaBloBgro[j],
          hsncGigaBloText[j],
          buffer
        );
        HsncSet.setHsncGigaBloBgro(hsncGigaBloBgro[j], isDefaultUpdate);
      }
    }
  }
} */
class HsncController {
  static process() {
    HsncManager.generate();
    HsncManager.init();
  }
  static processOnLoad() {
    HsncManager.event(true, true);
  }
  static processOnResize() {
    /* setTimeout(HsncManager.initOnResize, 300); */
    HsncManager.initOnResize();
    HsncManager.event(false);
    HsncManager.event(true);
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
      for (let j = 0; j < hsncPetaBlo.length; j++) {
        hsncPetaBlo[j].index = j;
        /*  */
        hsncPetaBlo[j].timeoutId = null;
      }
    }
    /*  */
    /* const buffer = 24;
    let isDefaultUpdate = null;
    if (FwaConfig.currentDisplayType !== 3) {
      isDefaultUpdate = true;
    } else {
      isDefaultUpdate = false;
    }
    for (let i = 0; i < hsncY.length; i++) {
      const {
        hsncGigaBloText,
        hsncGigaBloBgro
      } = HsncGet.getHsncBloEbGroup(i);
      for (let j = 0; j < hsncGigaBloBgro.length; j++) {
        /* HsncSetup.setupGigaBgro(
          hsncGigaBloBgro[j],
          hsncGigaBloText[j],
          buffer
        ); 
        HsncSet.setDataHsncGigaBloBgro(
          hsncGigaBloBgro[j],
          hsncGigaBloText[j],
          buffer
        );
        /* HsncUpdate.updateGigaBgroWidth(isDefaultUpdate, hsncGigaBloBgro[j]); 
        HsncSet.setHsncGigaBloBgro(hsncGigaBloBgro[j], isDefaultUpdate);
      }
    } */
  }
  static initOnResize() {
    /* const {
      hsncY
    } = HsncGet.getHsncGroup();
    /* const {
      hsncZettaEcoSfroTgro,
      hsncZettaEcoSfroBgro
    } = HsncGet.getHsncEcoGroup(); 
    let isDefaultUpdate = null;
    if (FwaConfig.currentDisplayType !== 3) {
      isDefaultUpdate = true;
    } else {
      isDefaultUpdate = false;
    }
    const buffer = 24;
    for (let i = 0; i < hsncY.length; i++) {
      const {
        hsncGigaBloText,
        hsncGigaBloBgro
      } = HsncGet.getHsncBloEbGroup(i);
      for (let j = 0; j < hsncGigaBloBgro.length; j++) {
        HsncSet.setDataHsncGigaBloBgro(
          hsncGigaBloBgro[j],
          hsncGigaBloText[j],
          buffer
        );
        /* HsncUpdate.updateGigaBgroWidth(isDefaultUpdate, hsncGigaBloBgro[j]); 
        HsncSet.setHsncGigaBloBgro(hsncGigaBloBgro[j], isDefaultUpdate);
      }
    } */
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
      /* ==========----- :Ys Group: -----========== */
      /* for (let zsi = 0; zsi < HsncConfig.elementGroup.length; zsi++) {
        tempGenerateElement = FwcAccessor.getGenerateElement(
          HsncConfig.elementGroup[zsi].tag,
          HsncConfig.elementGroup[zsi].selector
        );
        tempSaveElement[HsncConfig.elementGroup[zsi].id] = tempGenerateElement;
      } */
      /* ==========----- ;Ys Group; -----========== */
      /* ==========----- :Hsnc Group: -----========== */
      for (let zsi = 0; zsi < HsncConfig.hsncGroup.length; zsi++) {
        tempGenerateElement = FwcAccessor.getGenerateElement2(
          HsncConfig.hsncGroup[zsi]
        );
        tempSaveElement[HsncConfig.hsncGroup[zsi].elementId] = tempGenerateElement;
      }
      /* ==========----- ;Hsnc Group; -----========== */
      /* ==========----- :Tlo Group: -----========== */
      /* for (let zsi = 0; zsi < HsncConfig.elementTloGroup.length; zsi++) {
        tempGenerateElement = FwcAccessor.getGenerateElement(
          HsncConfig.elementTloGroup[zsi].tag,
          HsncConfig.elementTloGroup[zsi].selector
        );
        FwcAccessor.setGenerateElement(
          tempGenerateElement,
          HsncConfig.elementTloGroup[zsi].text,
          HsncConfig.elementTloGroup[zsi].link,
          [ysi]
        );
        tempSaveElement[HsncConfig.elementTloGroup[zsi].id] = tempGenerateElement;
      } */
      for (let zsi = 0; zsi < HsncConfig.hsncTloGroup.length; zsi++) {
        tempGenerateElement = FwcAccessor.getGenerateElement2(
          HsncConfig.hsncTloGroup[zsi],
          [ysi]
        );
        tempSaveElement[HsncConfig.hsncTloGroup[zsi].elementId] = tempGenerateElement;
      }
      /* ==========----- ;Tlo Group; -----========== */
      /* ==========----- :Blo Group: -----========== */
      /* for (let zsi = 0; zsi < HsncConfig.elementBloGroup.length; zsi++) {
        tempGenerateElement = FwcAccessor.getGenerateElement(
          HsncConfig.elementBloGroup[zsi].tag,
          HsncConfig.elementBloGroup[zsi].selector
        );
        tempSaveElement[HsncConfig.elementBloGroup[zsi].id] = tempGenerateElement;
      } */
      for (let zsi = 0; zsi < HsncConfig.hsncBloGroup.length; zsi++) {
        tempGenerateElement = FwcAccessor.getGenerateElement2(
          HsncConfig.hsncBloGroup[zsi]
        );
        tempSaveElement[HsncConfig.hsncBloGroup[zsi].elementId] = tempGenerateElement;
      }
      /* ==========----- ;Blo Group; -----========== */
      /* ==========----- :Blo Eb Group: -----========== */
      /* for (let zsi = 0; zsi < HsncConfig.hsncGigaBloText[ysi].length; zsi++) {
        for (let esi = 0; esi < HsncConfig.elementBloEbGroup.length; esi++) {
          tempGenerateElement = FwcAccessor.getGenerateElement(
            HsncConfig.elementBloEbGroup[esi].tag,
            HsncConfig.elementBloEbGroup[esi].selector
          );
          FwcAccessor.setGenerateElement(
            tempGenerateElement,
            HsncConfig.elementBloEbGroup[esi].text,
            HsncConfig.elementBloEbGroup[esi].link,
            [ysi, zsi]
          );
          tempSaveElement[HsncConfig.elementBloEbGroup[esi].id] = tempGenerateElement;
        }
        HsncSet.setAppendBloEbGroup(tempSaveElement);
      } */
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
      /* ==========----- :Zs Group: -----========== */
      /* for (let zsi = 0; zsi < HsncConfig.hsncGigaText[ysi].length; zsi++) {
        for (let esi = 0; esi < HsncConfig.elementZsGroup.length; esi++) {
          tempGenerateElement = FwcAccessor.getGenerateElement(
            HsncConfig.elementZsGroup[esi].tag,
            HsncConfig.elementZsGroup[esi].selector
          );
          FwcAccessor.setGenerateElement(
            tempGenerateElement,
            HsncConfig.elementZsGroup[esi].text,
            HsncConfig.elementZsGroup[esi].link,
            [ysi, zsi]
          );
          tempSaveElement[HsncConfig.elementZsGroup[esi].id] = tempGenerateElement;
        }
        HsncSet.setAppendZsGroup(tempSaveElement);
      } */
      /* ==========----- ;Zs Group; -----========== */
      /* HsncSet.setAppendTloGroup(tempSaveElement);
      HsncSet.setAppendBloGroup(tempSaveElement);
      HsncSet.setAppendGroup(tempSaveElement); */
      HsncConfig.hsncTloGroupAppend(tempSaveElement);
      HsncConfig.hsncBloGroupAppend(tempSaveElement);
      HsncConfig.hsncGroupAppend(tempSaveElement);
      hsncFragment.append(tempSaveElement["hsncY"]);
      tempSaveElement = {};
    }
    /* =============== ;Ys, Tlo, Zs Group; =============== */
    /* =============== :Sdo Group: =============== */
    /* for (let ysi = 0; ysi < HsncConfig.elementSdoGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement(
        HsncConfig.elementSdoGroup[ysi].tag,
        HsncConfig.elementSdoGroup[ysi].selector
      );
      tempSaveElement[HsncConfig.elementSdoGroup[ysi].id] = tempGenerateElement;
    }
    hsncFragment.append(tempSaveElement["yottaSdo"]); */
    /* for (let ysi = 0; ysi < HsncConfig.elementEcoGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement(
        HsncConfig.elementEcoGroup[ysi].tag,
        HsncConfig.elementEcoGroup[ysi].selector
      );
      tempSaveElement[HsncConfig.elementEcoGroup[ysi].id] = tempGenerateElement;
    } */
    for (let ysi = 0; ysi < HsncConfig.hsncEcoGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement2(
        HsncConfig.hsncEcoGroup[ysi]
      );
      tempSaveElement[HsncConfig.hsncEcoGroup[ysi].elementId] = tempGenerateElement;
    }
    /* HsncSet.setAppendEcoGroup(tempSaveElement); */
    HsncConfig.hsncEcoGroupAppend(tempSaveElement);
    hsncFragment.append(tempSaveElement["hsncYottaEco"]);
    /* =============== ;Sdo Group; =============== */
    hsncR.append(hsncFragment);
  }
  /* static scroll() { */
    /* let target = eventData.currentTarget;
    let scrollValue = target.scrollHeight - target.clientHeight; */
    /* console.log(target.scrollHeight);
    console.log(target.clientHeight); */
    /* console.log(target.scrollTop); */
    /* if (HsncAccessor.hsncIsScrolling) {
      console.log("return");
      eventData.preventDefault();
      return;
    } */
    /* const hsncR = document.querySelector(".hsnc-r-cptg");
    let hsncZettaEcoSfroTgro = hsncR.querySelector(".hsnc-z-eco-tfo");
    let hsncZettaEcoSfroBgro = hsncR.querySelector(".hsnc-z-eco-bfo"); */
    /* const {
      hsncR
    } = HsncGet.getHsncRoot();
    const {
      hsncY
    } = HsncGet.getHsncGroup();
    const {
      hsncZettaTlo
    } = HsncGet.getHsncTloGroup();
    const {
      hsncZettaEcoSfroTgro,
      hsncZettaEcoSfroBgro
    } = HsncGet.getHsncEcoGroup();
    const scrollBuffer = 16;
    const defaultHeight = 4 * 16;
    let scrollable = 0;
    /* hsncZettaTlo.height = 4rem; 
    let tempHeight = hsncZettaTlo.length * defaultHeight;
    for (let i = 0; i < hsncY.length; i++) {
      if (hsncY[i].isActive) {
        const {
          hsncPetaBlo
        } = HsncGet.getHsncBloEbGroup(i);
        /* hsncPetaEb.height = 4rem; 
        tempHeight += hsncPetaBlo.length * defaultHeight;
      }
    }
    if (tempHeight > hsncR.clientHeight) {
      scrollable = tempHeight - hsncR.clientHeight;
    } */
    /* let scrollValue = (hsncR.scrollHeight - hsncR.clientHeight - 1) - 16; */
    /* let scrollValue = (scrollHeight - hsncR.clientHeight) - 16; */
    /* console.log(scrollable, tempHeight, hsncR.scrollTop, hsncR.clientHeight); */
    /* if (scrollable > hsncR.scrollTop) {
      hsncZettaEcoSfroBgro.style.height = "2rem";
      hsncZettaEcoSfroTgro.style.height = "0rem";
    } else {
      hsncZettaEcoSfroTgro.style.height = "2rem";
      hsncZettaEcoSfroBgro.style.height = "0rem";
    } */
    /* const scrollTop = hsncR.scrollTop;
    if (scrollable <= scrollBuffer) {
      if (HsncAccessor.hsncScrollState !== 0) {
        hsncZettaEcoSfroTgro.style.height = "0rem";
        hsncZettaEcoSfroBgro.style.height = "0rem";
        HsncAccessor.hsncScrollState = 0;
      }
      return;
    }
    if (scrollTop < scrollBuffer) {
      if (HsncAccessor.hsncScrollState !== 1) {
        /* HsncAccessor.hsncIsScrolling = true;
        setTimeout(HsncManager.setScroll, 300); 
        /* hsncR.scrollTo({top: 0}); 
        hsncR.scroll(0, 0);
        hsncZettaEcoSfroTgro.style.height = "0rem";
        hsncZettaEcoSfroBgro.style.height = "5rem";
        HsncAccessor.hsncScrollState = 1;
      }
    } else if (scrollTop > scrollable - scrollBuffer) {
      if (HsncAccessor.hsncScrollState !== 2) {
        /* HsncAccessor.hsncIsScrolling = true;
        setTimeout(HsncManager.setScroll, 300); 
        /* hsncR.scrollTo({top: hsncR.scrollHeight}); 
        hsncR.scroll(0, hsncR.scrollHeight)
        hsncZettaEcoSfroTgro.style.height = "5rem";
        hsncZettaEcoSfroBgro.style.height = "0rem";
        HsncAccessor.hsncScrollState = 2;
      }
    } else {
      if (HsncAccessor.hsncScrollState !== 3) {
        hsncZettaEcoSfroTgro.style.height = "5rem";
        hsncZettaEcoSfroBgro.style.height = "5rem";
        HsncAccessor.hsncScrollState = 3;
      }
    } */
    /* if (scrollable !== 0) {
      if (hsncR.scrollTop < scrollable - scrollBuffer && hsncR.scrollTop > scrollBuffer) {
        hsncZettaEcoSfroTgro.style.height = "5rem";
        hsncZettaEcoSfroBgro.style.height = "5rem";
      } else if (hsncR.scrollTop < scrollBuffer) {
        hsncZettaEcoSfroTgro.style.height = "0rem";
        hsncZettaEcoSfroBgro.style.height = "5rem";
      } else if (hsncR.scrollTop > scrollable - scrollBuffer) {
        hsncZettaEcoSfroBgro.style.height = "0rem";
        hsncZettaEcoSfroTgro.style.height = "5rem";
      } else {
        if (HsncAccessor.scrollValue > hsncR.scrollTop) {
          hsncZettaEcoSfroBgro.style.height = "5rem";
        } else if (HsncAccessor.scrollValue < hsncR.scrollTop) {
          hsncZettaEcoSfroTgro.style.height = "5rem";
        }
      }
      HsncAccessor.scrollValue = hsncR.scrollTop;
    } else {
      hsncZettaEcoSfroTgro.style.height = "0rem";
      hsncZettaEcoSfroBgro.style.height = "0rem";
    } */
    /* if (scrollable !== 0) {
      HsncAccessor.scrollValue = hsncR.scrollTop;
    } else {
      HsncAccessor.scrollValue = 0;
    } */
  /* } */
  /* static setScroll() {
    console.log("false");
    HsncAccessor.hsncIsScrolling = false;
  } */
  /* !!!!! ;v1.1.17a [test] [pro] (scroll-fog); !!!!! */
  static event(isEventActive, isEventOnLoad) {
    const {
      hsncY
    } = HsncGet.getHsncGroup();
    const {
      hsncZettaTlo
    } = HsncGet.getHsncTloGroup();
    /* !!!!! :v1.1.17a [test] [pro] (scroll-fog): !!!!! */
    const {
      hsncR
    } = HsncGet.getHsncRoot();
    if (isEventOnLoad) {
      hsncR.addEventListener("scroll", HsncHandler.adtHsncZettaEcoSfro);
    }
    /* !!!!! ;v1.1.17a [test] [pro] (scroll-fog); !!!!! */
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
        HsncSet.setTimerMtdtHsncYotta,
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
    /* !!!!! :v1.1.17a [test] [pro] (scroll-fog): !!!!! */
    HsncHandler.adtHsncZettaEcoSfro();
    /* !!!!! ;v1.1.17a [test] [pro] (scroll-fog); !!!!! */
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
        HsncSet.setTimerMtdtHsncYotta,
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
    /* !!!!! :v1.1.17a [test] [pro] (scroll-fog): !!!!! */
    HsncHandler.adtHsncZettaEcoSfro();
    /* !!!!! ;v1.1.17a [test] [pro] (scroll-fog); !!!!! */
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
      hsncGigaBloText
    } = HsncGet.getHsncBloEbGroup(targetIndex);
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
      /* !!!!! :v1.1.17a [test] [pro] (scroll-fog): !!!!! */
      /* setTimeout(HsncManager.scroll, 300); */
      HsncHandler.adtHsncZettaEcoSfro();
      /* !!!!! ;v1.1.17a [test] [pro] (scroll-fog); !!!!! */
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
    /* HsncUpdate.updateGigaBgroWidth(isActive, hsncGigaBloBgro[eventIndex]); */
    HsncSet.setHsncGigaBloBgro(hsncGigaBloBgro[eventIndex], isActive);
  }
  /* !!!!! :v1.1.17a [test] [pro] (scroll-fog): !!!!! */
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
    const {
      hsncZettaEcoSfroTgro,
      hsncZettaEcoSfroBgro
    } = HsncGet.getHsncEcoGroup();
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
      hsncZettaEcoSfroTgro.classList[tgroType]("cl-adt-hsnc-z-eco-sfro-handler");
    }
    if (bgroType) {
      hsncZettaEcoSfroBgro.classList[bgroType]("cl-adt-hsnc-z-eco-sfro-handler");
    }
  }
  /* !!!!! ;v1.1.17a [test] [pro] (scroll-fog); !!!!! */
}
class HsncGet {
  static getHsncRoot() {
    /* const hsncRoot = [
      {
        id: "hsncR",
        selector: ".blf-y-ho .hsnc-r"
      }
    ]; */
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HsncAccessor.hsncCache,
      HsncConfig.hsncRoot
    );
    return saveVerifyGroup;
  }
  static getHsncGroup() {
    /* const hsncGroup = [
      {
        id: "hsncY",
        selector: ".hsnc-y",
        type: "all"
      }, */
      /* {
        id: "hsncZ",
        selector: ".hsnc-z",
        type: "all"
      },
      {
        id: "hsncE",
        selector: ".hsnc-e",
        type: "all"
      } */
    /* ]; */
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
    /* const hsncTloGroup = [
      {
        id: "hsncZettaTlo",
        selector: ".hsnc-z-tlo",
        type: "all"
      },
      {
        id: "hsncExaTloText",
        selector: ".hsnc-e-tlo-text",
        type: "all"
      },
      {
        id: "hsncExaTloRgro",
        selector: ".hsnc-e-tlo-rgro",
        type: "all"
      },
      {
        id: "hsncExaTloBgro",
        selector: ".hsnc-e-tlo-bgro",
        type: "all"
      }
    ]; */
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
    /* const hsncBloGroup = [
      {
        id: "hsncZettaBlo",
        selector: ".hsnc-z-blo",
        type: "all"
      },
      {
        id: "hsncExaBlo",
        selector: ".hsnc-e-blo",
        type: "all"
      }
    ]; */
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
    /* const hsncBloEbGroup = [
      {
        id: "hsncPetaBlo",
        selector: ".hsnc-p-blo",
        type: "all"
      },
      {
        id: "hsncTeraBlo",
        selector: ".hsnc-t-blo",
        type: "all"
      },
      {
        id: "hsncGigaBloText",
        selector: ".hsnc-g-blo-text",
        type: "all"
      },
      {
        id: "hsncGigaBloRgro",
        selector: ".hsnc-g-blo-rgro",
        type: "all"
      },
      {
        id: "hsncGigaBloBgro",
        selector: ".hsnc-g-blo-bgro",
        type: "all"
      }
    ]; */
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
  static getHsncEcoGroup() {
    /* const hsncEcoGroup = [
      {
        id: "hsncYottaEco",
        selector: ".hsnc-y-eco"
      },
      {
        id: "hsncZettaEcoSdo",
        selector: ".hsnc-z-eco-sdo"
      },
      {
        id: "hsncZettaEcoSfroTgro",
        selector: ".hsnc-z-eco-sfro-tgro"
      },
      {
        id: "hsncZettaEcoSfroBgro",
        selector: ".hsnc-z-eco-sfro-bgro"
      }
    ]; */
    const {
      hsncR
    } = HsncGet.getHsncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HsncAccessor.hsncCache,
      HsncConfig.hsncEcoGroup,
      hsncR
    );
    return saveVerifyGroup;
  }
}
class HsncSet {
  /* static setAppendGroup(saveGenerate) {
    saveGenerate["hsncY"].append(
      saveGenerate["hsncZettaTlo"],
      saveGenerate["hsncZettaBlo"]
    );
  }
  static setAppendTloGroup(saveGenerate) {
    saveGenerate["hsncZettaTlo"].append(
      saveGenerate["hsncExaTloText"],
      saveGenerate["hsncExaTloRgro"],
      saveGenerate["hsncExaTloBgro"]
    );
  }
  static setAppendBloGroup(saveGenerate) {
    saveGenerate["hsncZettaBlo"].append(saveGenerate["hsncExaBlo"]);
  }
  static setAppendBloEbGroup(saveGenerate) {
    saveGenerate["hsncTeraBlo"].append(
      saveGenerate["hsncGigaBloText"],
      saveGenerate["hsncGigaBloRgro"],
      saveGenerate["hsncGigaBloBgro"]
    );
    saveGenerate["hsncPetaBlo"].append(saveGenerate["hsncTeraBlo"]);
    saveGenerate["hsncExaBlo"].append(saveGenerate["hsncPetaBlo"]);
  }
  static setAppendEcoGroup(saveGenerate) {
    saveGenerate["hsncYottaEco"].append(
      saveGenerate["hsncZettaEcoSdo"],
      saveGenerate["hsncZettaEcoSfroTgro"],
      saveGenerate["hsncZettaEcoSfroBgro"]
    );
  } */
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
    /* setElement.style.left = setLeft;
    setElement.style.width = setWidth; */
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
  static setTimerMtdtHsncYotta(hsncBloEbIndex) {
    const {
      hsncPetaBlo,
      hsncGigaBloText,
      hsncGigaBloBgro
    } = HsncGet.getHsncBloEbGroup(hsncBloEbIndex);
    const gigaBgroBuffer = 24;
    for (let i = 0; i < hsncGigaBloBgro.length; i++) {
      HsncSet.setDataHsncGigaBloBgro(
        hsncGigaBloBgro[i],
        hsncGigaBloText[i],
        gigaBgroBuffer
      );
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
    const {
      hsncZettaEcoSfroTgro,
      hsncZettaEcoSfroBgro
    } = HsncGet.getHsncEcoGroup();
    const eventData = {};
    /* !!!!! :v1.1.17a [temp] [del] (scroll-fog-issue-fix): !!!!! */
    hsncZettaEcoSfroTgro.classList.remove("cl-adt-hsnc-z-eco-sfro-handler");
    hsncZettaEcoSfroBgro.classList.remove("cl-adt-hsnc-z-eco-sfro-handler");
    HsncAccessor.hsncScrollState = 0;
    /* !!!!! ;v1.1.17a [temp] (scroll-fog-issue-fix); !!!!! */
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
/* class HsncUpdate {
  static updateExa(updateElement, referElement, size) {
    let gridTemplateData = "";
    for (let i = 0; i < referElement.length; i++) {
      gridTemplateData += size + "rem" + " ";
    }
    updateElement.style.gridTemplateRows = gridTemplateData;
  } */
  /* static updateGigaBgroWidth(isActive, updateElement) {
    let setWidth = null;
    if (isActive) {
      setWidth = updateElement.width;
    } else {
      setWidth = "";
    }
    updateElement.style.width = setWidth;
  } */
/* } */
/* class HsncSetup {
  static setupGigaBgro(setupElement, referElement, buffer) {
    const referWidth = referElement.offsetWidth;
    const setLeft = "calc" +
      "(" + "50%" + " - " +
      (referWidth / 2) + "px" + " - " +
      (buffer / 2) + "px" + ")";
    const setWidth = referWidth + buffer + "px";

    setupElement.left = setLeft;
    setupElement.width = setWidth;

    setupElement.style.left = setLeft;
  }
} */
/* class HsncReset {
  static resetHsnc(displayTypeState) {
    const {
      hsncY
    } = HsncGet.getHsncGroup();
    const {
      hsncZettaTlo
    } = HsncGet.getHsncTloGroup();
    const {
      hsncZettaEcoSfroTgro,
      hsncZettaEcoSfroBgro
    } = HsncGet.getHsncEcoGroup();
    const eventData = {};
    /* !!!!! :v1.1.17a [temp] [del] (scroll-fog-issue-fix): !!!!! 
    hsncZettaEcoSfroTgro.classList.remove("cl-adt-hsnc-z-eco-sfro-handler");
    hsncZettaEcoSfroBgro.classList.remove("cl-adt-hsnc-z-eco-sfro-handler");
    HsncAccessor.hsncScrollState = 0;
    /* !!!!! ;v1.1.17a [temp] (scroll-fog-issue-fix); !!!!! 
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
} */
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