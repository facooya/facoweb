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
} from "./snc-config.js";
import {
  FwcAccessor
} from "../../fwc-hub.js";

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
    HsncReset.resetHsnc(displayTypeState);
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
}
class HsncManager {
  static init() {
    const {
      hsncY,
      hsncE
    } = HsncGet.getHsncGroup();
    for (let i = 0; i < hsncE.length; i++) {
      const {
        hsncPetaEb
      } = HsncGet.getHsncEbGroup(i);
      HsncSet.setExa(hsncE[i], hsncPetaEb, 0);
      hsncY[i].isActive = false;
      hsncY[i].index = i;
      for (let j = 0; j < hsncPetaEb.length; j++) {
        hsncPetaEb[j].index = j;
      }
    }
    /*  */
    const buffer = 32;
    let isDefaultUpdate = null;
    if (FwaConfig.currentDisplayType !== 3) {
      isDefaultUpdate = true;
    } else {
      isDefaultUpdate = false;
    }
    for (let i = 0; i < hsncY.length; i++) {
      const {
        hsncGigaTextEb,
        hsncGigaBgroEb
      } = HsncGet.getHsncEbGroup(i);
      for (let j = 0; j < hsncGigaBgroEb.length; j++) {
        HsncSetup.setupGigaBgro(
          hsncGigaBgroEb[j],
          hsncGigaTextEb[j],
          buffer
        );
        HsncUpdate.updateGigaBgroWidth(isDefaultUpdate, hsncGigaBgroEb[j]);
      }
    }
  }
  static initOnResize() {
    const {
      hsncY
    } = HsncGet.getHsncGroup();
    const {
      hsncZettaEcoSfroTgro,
      hsncZettaEcoSfroBgro
    } = HsncGet.getHsncEcoGroup();
    let isDefaultUpdate = null;
    if (FwaConfig.currentDisplayType !== 3) {
      isDefaultUpdate = true;
    } else {
      isDefaultUpdate = false;
    }
    for (let i = 0; i < hsncY.length; i++) {
      const {
        hsncGigaBgroEb
      } = HsncGet.getHsncEbGroup(i);
      for (let j = 0; j < hsncGigaBgroEb.length; j++) {
        HsncUpdate.updateGigaBgroWidth(isDefaultUpdate, hsncGigaBgroEb[j]);
      }
    }
  }
  static generate() {
    const {
      hsncR
    } = HsncGet.getHsncRoot();
    const hsncFragment = document.createDocumentFragment();
    let tempGenerateElement = null;
    let tempSaveElement = {};
    /* =============== :Ys, Po, Zs Group: =============== */
    for (let ysi = 0; ysi < HsncConfig.hsncExaPoText.length; ysi++) {
      /* ==========----- :Ys Group: -----========== */
      for (let zsi = 0; zsi < HsncConfig.elementYsGroup.length; zsi++) {
        tempGenerateElement = FwcAccessor.getGenerateElement(
          HsncConfig.elementYsGroup[zsi].tag,
          HsncConfig.elementYsGroup[zsi].selector
        );
        tempSaveElement[HsncConfig.elementYsGroup[zsi].id] = tempGenerateElement;
      }
      /* ==========----- ;Ys Group; -----========== */
      /* ==========----- :Po Group: -----========== */
      for (let zsi = 0; zsi < HsncConfig.elementPoGroup.length; zsi++) {
        tempGenerateElement = FwcAccessor.getGenerateElement(
          HsncConfig.elementPoGroup[zsi].tag,
          HsncConfig.elementPoGroup[zsi].selector
        );
        FwcAccessor.setGenerateElement(
          tempGenerateElement,
          HsncConfig.elementPoGroup[zsi].text,
          HsncConfig.elementPoGroup[zsi].link,
          [ysi]
        );
        tempSaveElement[HsncConfig.elementPoGroup[zsi].id] = tempGenerateElement;
      }
      /* ==========----- ;Po Group; -----========== */
      /* ==========----- :Zs Group: -----========== */
      for (let zsi = 0; zsi < HsncConfig.hsncGigaText[ysi].length; zsi++) {
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
      }
      /* ==========----- ;Zs Group; -----========== */
      HsncSet.setAppendPoGroup(tempSaveElement);
      HsncSet.setAppendYsGroup(tempSaveElement);
      hsncFragment.append(tempSaveElement["yotta"]);
      tempSaveElement = {};
    }
    /* =============== ;Ys, Po, Zs Group; =============== */
    /* =============== :Sdo Group: =============== */
    /* for (let ysi = 0; ysi < HsncConfig.elementSdoGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement(
        HsncConfig.elementSdoGroup[ysi].tag,
        HsncConfig.elementSdoGroup[ysi].selector
      );
      tempSaveElement[HsncConfig.elementSdoGroup[ysi].id] = tempGenerateElement;
    }
    hsncFragment.append(tempSaveElement["yottaSdo"]); */
    for (let ysi = 0; ysi < HsncConfig.elementEcoGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement(
        HsncConfig.elementEcoGroup[ysi].tag,
        HsncConfig.elementEcoGroup[ysi].selector
      );
      tempSaveElement[HsncConfig.elementEcoGroup[ysi].id] = tempGenerateElement;
    }
    HsncSet.setAppendEcoGroup(tempSaveElement);
    hsncFragment.append(tempSaveElement["yottaEco"]);
    /* =============== ;Sdo Group; =============== */
    hsncR.append(hsncFragment);
  }
  static scroll() {
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
    const hsncR = document.querySelector(".hsnc-r-cptg");
    let fogT = hsncR.querySelector(".hsnc-z-eco-tfo");
    let fogB = hsncR.querySelector(".hsnc-z-eco-bfo");
    const {
      hsncY
    } = HsncGet.getHsncGroup();
    const {
      hsncZettaPo
    } = HsncGet.getHsncPoGroup();
    const scrollBuffer = 16;
    const defaultHeight = 4 * 16;
    let scrollable = 0;
    /* hsncZettaPo.height = 4rem; */
    let tempHeight = hsncZettaPo.length * defaultHeight;
    for (let i = 0; i < hsncY.length; i++) {
      if (hsncY[i].isActive) {
        const {
          hsncPetaEb
        } = HsncGet.getHsncEbGroup(i);
        /* hsncPetaEb.height = 4rem; */
        tempHeight += hsncPetaEb.length * defaultHeight;
      }
    }
    if (tempHeight > hsncR.clientHeight) {
      scrollable = tempHeight - hsncR.clientHeight;
    }
    /* let scrollValue = (hsncR.scrollHeight - hsncR.clientHeight - 1) - 16; */
    /* let scrollValue = (scrollHeight - hsncR.clientHeight) - 16; */
    /* console.log(scrollable, tempHeight, hsncR.scrollTop, hsncR.clientHeight); */
    /* if (scrollable > hsncR.scrollTop) {
      fogB.style.height = "2rem";
      fogT.style.height = "0rem";
    } else {
      fogT.style.height = "2rem";
      fogB.style.height = "0rem";
    } */
    const scrollTop = hsncR.scrollTop;
    if (scrollable <= scrollBuffer) {
      if (HsncAccessor.hsncScrollState !== 0) {
        fogT.style.height = "0rem";
        fogB.style.height = "0rem";
        HsncAccessor.hsncScrollState = 0;
      }
      return;
    }
    if (scrollTop < scrollBuffer) {
      if (HsncAccessor.hsncScrollState !== 1) {
        /* HsncAccessor.hsncIsScrolling = true;
        setTimeout(HsncManager.setScroll, 300); */
        /* hsncR.scrollTo({top: 0}); */
        hsncR.scroll(0, 0);
        fogT.style.height = "0rem";
        fogB.style.height = "5rem";
        HsncAccessor.hsncScrollState = 1;
      }
    } else if (scrollTop > scrollable - scrollBuffer) {
      if (HsncAccessor.hsncScrollState !== 2) {
        /* HsncAccessor.hsncIsScrolling = true;
        setTimeout(HsncManager.setScroll, 300); */
        /* hsncR.scrollTo({top: hsncR.scrollHeight}); */
        hsncR.scroll(0, hsncR.scrollHeight)
        fogT.style.height = "5rem";
        fogB.style.height = "0rem";
        HsncAccessor.hsncScrollState = 2;
      }
    } else {
      if (HsncAccessor.hsncScrollState !== 3) {
        fogT.style.height = "5rem";
        fogB.style.height = "5rem";
        HsncAccessor.hsncScrollState = 3;
      }
    }
    /* if (scrollable !== 0) {
      if (hsncR.scrollTop < scrollable - scrollBuffer && hsncR.scrollTop > scrollBuffer) {
        fogT.style.height = "5rem";
        fogB.style.height = "5rem";
      } else if (hsncR.scrollTop < scrollBuffer) {
        fogT.style.height = "0rem";
        fogB.style.height = "5rem";
      } else if (hsncR.scrollTop > scrollable - scrollBuffer) {
        fogB.style.height = "0rem";
        fogT.style.height = "5rem";
      } else {
        if (HsncAccessor.scrollValue > hsncR.scrollTop) {
          fogB.style.height = "5rem";
        } else if (HsncAccessor.scrollValue < hsncR.scrollTop) {
          fogT.style.height = "5rem";
        }
      }
      HsncAccessor.scrollValue = hsncR.scrollTop;
    } else {
      fogT.style.height = "0rem";
      fogB.style.height = "0rem";
    } */
    /* if (scrollable !== 0) {
      HsncAccessor.scrollValue = hsncR.scrollTop;
    } else {
      HsncAccessor.scrollValue = 0;
    } */
  }
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
      hsncZettaPo
    } = HsncGet.getHsncPoGroup();
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
          hsncZettaPo[i][eventListenerType](
            "click",
            HsncHandler.mdtHsncZettaPo
          );
        }
        break;
      }
      case 2: {
        for (let i = 0; i < hsncY.length; i++) {
          hsncZettaPo[i][eventListenerType](
            "click",
            HsncHandler.tdtHsncZettaPo
          );
        }
        break;
      }
      case 3: {
        for (let i = 0; i < hsncY.length; i++) {
          hsncZettaPo[i][eventListenerType](
            "mouseenter",
            HsncHandler.ddtHsncZettaPo
          );
          hsncZettaPo[i][eventListenerType](
            "mouseleave",
            HsncHandler.ddtHsncZettaPo
          );
          hsncZettaPo[i][eventListenerType](
            "click",
            HsncHandler.ddtHsncZettaPo
          );
          const {
            hsncPetaEb
          } = HsncGet.getHsncEbGroup(i);
          for (let j = 0; j < hsncPetaEb.length; j++) {
            hsncPetaEb[j][eventListenerType](
              "mouseenter",
              HsncHandler.ddtHsncPeta
            );
            hsncPetaEb[j][eventListenerType](
              "mouseleave",
              HsncHandler.ddtHsncPeta
            );
          }
        }
        break;
      }
    }
  }
}
class HsncHandler {
  static mdtHsncZettaPo(eventData) {
    const {
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hsnc-y");
    const {
      hsncY,
      hsncE
    } = HsncGet.getHsncGroup();
    const {
      hsncExaPoText,
      hsncExaPoRgro,
      hsncExaPoBgro
    } = HsncGet.getHsncPoGroup();
    const {
      hsncTeraEb
    } = HsncGet.getHsncEbGroup(targetIndex);
    /*  */
    let isActive = null;
    let type = "";
    let exaSize = null;
    if (!hsncY[targetIndex].isActive) {
      isActive = true;
      type = "add";
      exaSize = 4;
    } else {
      isActive = false;
      type = "remove";
      exaSize = 0;
    }
    /*  */
    hsncY[targetIndex].classList[type]("cl-mdt-hsnc-z-po-handler");
    hsncExaPoText[targetIndex].classList[type]("cl-mdt-hsnc-z-po-handler");
    hsncExaPoRgro[targetIndex].classList[type]("cl-mdt-hsnc-z-po-handler");
    hsncExaPoBgro[targetIndex].classList[type]("cl-mdt-hsnc-z-po-handler");
    HsncSet.setExa(hsncE[targetIndex], hsncTeraEb, exaSize);
    for (let i = 0; i < hsncTeraEb.length; i++) {
      hsncTeraEb[i].classList[type]("cl-mdt-hsnc-z-po-handler");
    }
    /*  */
    hsncY[targetIndex].isActive = isActive;
    /* !!!!! :v1.1.17a [test] [pro] (scroll-fog): !!!!! */
    HsncHandler.adtHsncZettaEcoSfro();
    /* !!!!! ;v1.1.17a [test] [pro] (scroll-fog); !!!!! */
  }
  static tdtHsncZettaPo(eventData) {
    const {
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hsnc-y");
    const {
      hsncY,
      hsncE
    } = HsncGet.getHsncGroup();
    const {
      hsncExaPoText,
      hsncExaPoRgro,
      hsncExaPoBgro
    } = HsncGet.getHsncPoGroup();
    const {
      hsncTeraEb
    } = HsncGet.getHsncEbGroup(targetIndex);
    /*  */
    let isActive = null;
    let type = "";
    let exaSize = null;
    if (!hsncY[targetIndex].isActive) {
      isActive = true;
      type = "add";
      exaSize = 4;
    } else {
      isActive = false;
      type = "remove";
      exaSize = 0;
    }
    /*  */
    hsncY[targetIndex].classList[type]("cl-tdt-hsnc-z-po-handler");
    hsncExaPoText[targetIndex].classList[type]("cl-tdt-hsnc-z-po-handler");
    hsncExaPoRgro[targetIndex].classList[type]("cl-tdt-hsnc-z-po-handler");
    hsncExaPoBgro[targetIndex].classList[type]("cl-tdt-hsnc-z-po-handler");
    HsncSet.setExa(hsncE[targetIndex], hsncTeraEb, exaSize);
    for (let i = 0; i < hsncTeraEb.length; i++) {
      hsncTeraEb[i].classList[type]("cl-tdt-hsnc-z-po-handler");
    }
    /*  */
    hsncY[targetIndex].isActive = isActive;
    /* !!!!! :v1.1.17a [test] [pro] (scroll-fog): !!!!! */
    HsncHandler.adtHsncZettaEcoSfro();
    /* !!!!! ;v1.1.17a [test] [pro] (scroll-fog); !!!!! */
  }
  static ddtHsncZettaPo(eventData) {
    const {
      eventType,
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hsnc-y");
    const {
      hsncY,
      hsncE
    } = HsncGet.getHsncGroup();
    const {
      hsncExaPoText,
      hsncExaPoRgro,
      hsncExaPoBgro
    } = HsncGet.getHsncPoGroup();
    const {
      hsncTeraEb,
      hsncGigaTextEb
    } = HsncGet.getHsncEbGroup(targetIndex);
    /*  */
    let isActive = null;
    let type = "";
    let typeHover = "";
    let exaSize = null;
    if (!hsncY[targetIndex].isActive) {
      isActive = true;
      type = "add";
      exaSize = 4;
      if (eventType === "mouseenter") {
        typeHover = "add";
      } else if (eventType === "mouseleave") {
        typeHover = "remove";
      }
    } else {
      isActive = false;
      type = "remove";
      exaSize = 0;
    }
    /*  */
    if ((eventType === "mouseenter" || eventType === "mouseleave") && isActive) {
      hsncExaPoText[targetIndex].classList[typeHover]("cl-ddt-hsnc-z-po-handler");
      hsncExaPoRgro[targetIndex].classList[typeHover]("cl-ddt-hsnc-z-po-handler");
      hsncExaPoBgro[targetIndex].classList[typeHover]("cl-ddt-hsnc-z-po-handler");
    } else if (eventType === "click") {
      hsncY[targetIndex].classList[type]("cl-ddt-hsnc-z-po-handler-click");
      hsncExaPoRgro[targetIndex].classList[type]("cl-ddt-hsnc-z-po-handler-click");
      HsncSet.setExa(hsncE[targetIndex], hsncGigaTextEb, exaSize);
      for (let i = 0; i < hsncTeraEb.length; i++) {
        hsncTeraEb[i].classList[type]("cl-ddt-hsnc-z-po-handler-click");
      }
      hsncY[targetIndex].isActive = isActive;
      /* !!!!! :v1.1.17a [test] [pro] (scroll-fog): !!!!! */
      /* setTimeout(HsncManager.scroll, 300); */
      HsncHandler.adtHsncZettaEcoSfro();
      /* !!!!! ;v1.1.17a [test] [pro] (scroll-fog); !!!!! */
    }
  }
  static ddtHsncPeta(eventData) {
    const {
      eventType,
      eventIndex,
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hsnc-y");
    const {
      hsncGigaTextEb,
      hsncGigaRgroEb,
      hsncGigaBgroEb
    } = HsncGet.getHsncEbGroup(targetIndex);
    /*  */
    let isActive = null;
    let type = "";
    let exaSize = null;
    if (eventType === "mouseenter") {
      isActive = true;
      type = "add";
      exaSize = 4;
    } else if (eventType === "mouseleave") {
      isActive = false;
      type = "remove";
      exaSize = 0;
    }
    /*  */
    hsncGigaTextEb[eventIndex].classList[type]("cl-ddt-hsnc-p-handler");
    hsncGigaRgroEb[eventIndex].classList[type]("cl-ddt-hsnc-p-handler");
    HsncUpdate.updateGigaBgroWidth(isActive, hsncGigaBgroEb[eventIndex]);
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
      hsncZettaPo
    } = HsncGet.getHsncPoGroup();
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
    let tempHeight = hsncZettaPo.length * defaultHeight;
    for (let i = 0; i < hsncY.length; i++) {
      if (hsncY[i].isActive) {
        const {
          hsncPetaEb
        } = HsncGet.getHsncEbGroup(i);
        tempHeight += hsncPetaEb.length * defaultHeight;
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
      return;
    }
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
    const hsncRoot = [
      {
        id: "hsncR",
        selector: ".blf-y-ho .hsnc-r"
      }
    ];
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      HsncAccessor.hsncCache,
      hsncRoot
    );
    return saveVerifyGroup;
  }
  static getHsncGroup() {
    const hsncGroup = [
      {
        id: "hsncY",
        selector: ".hsnc-y",
        type: "all"
      },
      {
        id: "hsncZ",
        selector: ".hsnc-z",
        type: "all"
      },
      {
        id: "hsncE",
        selector: ".hsnc-e",
        type: "all"
      }
    ];
    const {
      hsncR
    } = this.getHsncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      HsncAccessor.hsncCache,
      hsncGroup,
      hsncR
    );
    return saveVerifyGroup;
  }
  static getHsncPoGroup() {
    const hsncPoGroup = [
      {
        id: "hsncZettaPo",
        selector: ".hsnc-z-po",
        type: "all"
      },
      {
        id: "hsncExaPoText",
        selector: ".hsnc-e-po-text",
        type: "all"
      },
      {
        id: "hsncExaPoRgro",
        selector: ".hsnc-e-po-rgro",
        type: "all"
      },
      {
        id: "hsncExaPoBgro",
        selector: ".hsnc-e-po-bgro",
        type: "all"
      }
    ];
    const {
      hsncR
    } = this.getHsncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      HsncAccessor.hsncCache,
      hsncPoGroup,
      hsncR
    );
    return saveVerifyGroup;
  }
  static getHsncEbGroup(gIndex) {
    const hsncEbGroup = [
      {
        id: "hsncPetaEb",
        selector: ".hsnc-p",
        type: "all"
      },
      {
        id: "hsncTeraEb",
        selector: ".hsnc-t",
        type: "all"
      },
      {
        id: "hsncGigaTextEb",
        selector: ".hsnc-g-text",
        type: "all"
      },
      {
        id: "hsncGigaRgroEb",
        selector: ".hsnc-g-rgro",
        type: "all"
      },
      {
        id: "hsncGigaBgroEb",
        selector: ".hsnc-g-bgro",
        type: "all"
      }
    ];
    const {
      hsncE
    } = this.getHsncGroup();
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      HsncAccessor.hsncCache,
      hsncEbGroup,
      hsncE[gIndex],
      gIndex
    );
    return saveVerifyGroup;
  }
  static getHsncEcoGroup() {
    const hsncEcoGroup = [
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
    ];
    const {
      hsncR
    } = HsncGet.getHsncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      HsncAccessor.hsncCache,
      hsncEcoGroup,
      hsncR
    );
    return saveVerifyGroup;
  }
}
class HsncSet {
  static setAppendYsGroup(saveGenerate) {
    saveGenerate["zetta"].append(saveGenerate["exa"]);
    saveGenerate["yotta"].append(
      saveGenerate["zettaPo"],
      saveGenerate["zetta"]
    );
  }
  static setAppendZsGroup(saveGenerate) {
    saveGenerate["tera"].append(
      saveGenerate["gigaText"],
      saveGenerate["gigaRgro"],
      saveGenerate["gigaBgro"]
    );
    saveGenerate["peta"].append(saveGenerate["tera"]);
    saveGenerate["exa"].append(saveGenerate["peta"]);
  }
  static setAppendPoGroup(saveGenerate) {
    saveGenerate["zettaPo"].append(
      saveGenerate["exaPoText"],
      saveGenerate["exaPoRgro"],
      saveGenerate["exaPoBgro"]
    );
  }
  static setAppendEcoGroup(saveGenerate) {
    saveGenerate["yottaEco"].append(
      saveGenerate["zettaEcoSdo"],
      saveGenerate["zettaEcoSfroTgro"],
      saveGenerate["zettaEcoSfroBgro"]
    );
  }
  static setGigaBgro(setElement, referElement, buffer) {
    const referWidth = referElement.offsetWidth;
    const setLeft = "calc" +
      "(" + "50%" + " - " +
      (referWidth / 2) + "px" + " - " +
      (buffer / 2) + "px" + ")";
    const setWidth = referWidth + buffer + "px";

    setElement.style.left = setLeft;
    setElement.style.width = setWidth;
  }
  static setExa(setElement, referElement, size) {
    let gridTemplateData = "";
    for (let i = 0; i < referElement.length; i++) {
      gridTemplateData += size + "rem" + " ";
    }
    setElement.style.gridTemplateRows = gridTemplateData;
  }
}
class HsncUpdate {
  static updateExa(updateElement, referElement, size) {
    let gridTemplateData = "";
    for (let i = 0; i < referElement.length; i++) {
      gridTemplateData += size + "rem" + " ";
    }
    updateElement.style.gridTemplateRows = gridTemplateData;
  }
  static updateGigaBgroWidth(isActive, updateElement) {
    let setWidth = null;
    if (isActive) {
      setWidth = updateElement.width;
    } else {
      setWidth = "";
    }
    updateElement.style.width = setWidth;
  }
}
class HsncSetup {
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
}
class HsncReset {
  static resetHsnc(displayTypeState) {
    const {
       hsncY
    } = HsncGet.getHsncGroup();
    const {
      hsncZettaPo
    } = HsncGet.getHsncPoGroup();
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
    for (let i = 0; i < hsncZettaPo.length; i++) {
      if (hsncY[i].isActive) {
        switch (displayTypeState) {
          case 1: {
            eventData.currentTarget = hsncZettaPo[i];
            HsncHandler.mdtHsncZettaPo(eventData);
            break;
          }
          case 2: {
            eventData.currentTarget = hsncZettaPo[i];
            HsncHandler.tdtHsncZettaPo(eventData);
            break;
          }
          case 3: {
            eventData.currentTarget = hsncZettaPo[i];
            eventData.type = "click"; 
            HsncHandler.ddtHsncZettaPo(eventData); 
            eventData.type = "mouseleave"; 
            HsncHandler.ddtHsncZettaPo(eventData);
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