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
} from "./dnc-config.js";
import {
  FwcAccessor,
  HtpncAccessor,
  HsncAccessor
} from "../../fwc-hub.js";

class HdncAccessor {
  static hdncCache = {};
  static isActiveHdnc = false;
  static hdncScrollState = 0;
  /* =============== :Function: =============== */
  static resetHdnc(displayTypeState) {
    HdncReset.resetHdnc(displayTypeState);
  }
  static getHdncRoot() {
    return HdncGet.getHdncRoot();
  }
  static getHdncGroup() {
    return HdncGet.getHdncGroup();
  }
  /* =============== ;Function; =============== */
}
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
      hdncY,
      hdncE
    } = HdncGet.getHdncGroup();
    for (let i = 0; i < hdncE.length; i++) {
      const {
        hdncPetaEb
      } = HdncGet.getHdncEbGroup(i);
      HdncSet.setExa(hdncE[i], hdncPetaEb, 0);
      hdncY[i].isActive = false;
      hdncY[i].index = i;
      for (let j = 0; j < hdncPetaEb.length; j++) {
        hdncPetaEb[j].index = j;
      }
    }
    /*  */
    const buffer = 32;
    let isDefaultSetup = null;
    if (FwaConfig.currentDisplayType !== 3) {
      isDefaultSetup = true;
    } else {
      isDefaultSetup = false;
    }
    for (let i = 0; i < hdncY.length; i++) {
      const {
        hdncGigaTextEb,
        hdncGigaBgroEb
      } = HdncGet.getHdncEbGroup(i);
      for (let j = 0; j < hdncGigaBgroEb.length; j++) {
        HdncSetup.setupGigaBgro(
          hdncGigaBgroEb[j],
          hdncGigaTextEb[j],
          buffer
        );
        HdncSetup.setupGigaBgroWidth(isDefaultSetup, hdncGigaBgroEb[j]);
      }
    }
  }
  static initOnLoad() {

  }
  static initOnResize() {
    const displayTypeState = FwaConfig.previousDisplayType;
    /* !!!!! v1.1.15a [suggestion] {add} (getDisplayTypeState) !!!!! */
    HdncReset.resetHdnc(displayTypeState);
    /* !!!!! v1.1.16a [test] {issue fix} !!!!! */
    const {
      hdncY,
      hdncE
    } = HdncGet.getHdncGroup();
    /* !!!!! v1.1.16a [suggestion] {move} (in resetHdnc) !!!!! */
    hdncE[0].classList.remove("cl-tdt-hdnc-z-po-handler-nth-1");
    hdncE[3].classList.remove("cl-tdt-hdnc-z-po-handler-nth-4");
    /* resetHdncGigaBgro(); */
    let isDefaultSetup = null;
    if (FwaConfig.currentDisplayType === 3) {
      isDefaultSetup = false;
    } else {
      isDefaultSetup = true;
    }
    for (let i = 0; i < hdncY.length; i++) {
      const {
        hdncGigaBgroEb
      } = HdncGet.getHdncEbGroup(i);
      for (let j = 0; j < hdncGigaBgroEb.length; j++) {
        HdncSetup.setupGigaBgroWidth(isDefaultSetup, hdncGigaBgroEb[j]);
      }
    }
  }
  static generate() {
    const {
      hdncR
    } = HdncGet.getHdncRoot();
    const hdncFragment = document.createDocumentFragment();
    let tempGenerateElement = null;
    let tempSaveElement = {};
    /* =============== :Ys, Po, Zs Group: =============== */
    for (let ysi = 0; ysi < HdncConfig.hdncExaPoText.length; ysi++) {
      /* ==========----- :Ys Group: -----========== */
      for (let zsi = 0; zsi < HdncConfig.elementYsGroup.length; zsi++) {
        tempGenerateElement = FwcAccessor.getGenerateElement(
          HdncConfig.elementYsGroup[zsi].tag,
          HdncConfig.elementYsGroup[zsi].selector
        );
        tempSaveElement[HdncConfig.elementYsGroup[zsi].id] = tempGenerateElement;
      }
      /* ==========----- ;Ys Group; -----========== */
      /* ==========----- :Po Group: -----========== */
      for (let zsi = 0; zsi < HdncConfig.elementPoGroup.length; zsi++) {
        tempGenerateElement = FwcAccessor.getGenerateElement(
          HdncConfig.elementPoGroup[zsi].tag,
          HdncConfig.elementPoGroup[zsi].selector
        );
        FwcAccessor.setGenerateElement(
          tempGenerateElement,
          HdncConfig.elementPoGroup[zsi].text,
          HdncConfig.elementPoGroup[zsi].link,
          [ysi]
        );
        tempSaveElement[HdncConfig.elementPoGroup[zsi].id] = tempGenerateElement;
      }
      /* ==========----- ;Po Group; -----========== */
      /* ==========----- :Zs Group: -----========== */
      for (let zsi = 0; zsi < HdncConfig.hdncGigaText[ysi].length; zsi++) {
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
      }
      /* ==========----- ;Zs Group; -----========== */
      HdncSet.setAppendPoGroup(tempSaveElement);
      HdncSet.setAppendYsGroup(tempSaveElement);
      hdncFragment.append(tempSaveElement["yotta"]);
      tempSaveElement = {};
    }
    /* =============== ;Ys, Po, Zs Group; =============== */
    /* =============== :Sdo Group: =============== */
    /* for (let ysi = 0; ysi < HdncConfig.elementSdoGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement(
        HdncConfig.elementSdoGroup[ysi].tag,
        HdncConfig.elementSdoGroup[ysi].selector
      );
      tempSaveElement[HdncConfig.elementSdoGroup[ysi].id] = tempGenerateElement;
    }
    hdncFragment.append(tempSaveElement["yottaSdo"]); */
    for (let ysi = 0; ysi < HdncConfig.elementEcoGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement(
        HdncConfig.elementEcoGroup[ysi].tag,
        HdncConfig.elementEcoGroup[ysi].selector
      );
      tempSaveElement[HdncConfig.elementEcoGroup[ysi].id] = tempGenerateElement;
    }
    HdncSet.setAppendEcoGroup(tempSaveElement);
    hdncFragment.append(tempSaveElement["yottaEco"]);
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
      hdncZettaPo
    } = HdncGet.getHdncPoGroup();
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
          hdncZettaPo[i][eventListenerType](
            "click",
            HdncHandler.mdtHdncZettaPo
          );
          break;
        }
        case 2: {
          hdncZettaPo[i][eventListenerType](
            "click",
            HdncHandler.tdtHdncZettaPo
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
            hdncPetaEb
          } = HdncGet.getHdncEbGroup(i);
          for (let j = 0; j < hdncPetaEb.length; j++) {
            hdncPetaEb[j][eventListenerType](
              "mouseenter",
              HdncHandler.ddtHdncPeta
            );
            hdncPetaEb[j][eventListenerType](
              "mouseleave",
              HdncHandler.ddtHdncPeta
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
  static mdtHdncZettaPo(eventData) {
    /* =============== Setup: =============== */
    const {
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hdnc-y");
    const {
      hdncY,
      hdncE
    } = HdncGet.getHdncGroup();
    const {
      hdncExaPoText,
      hdncExaPoRgro,
      hdncExaPoBgro
    } = HdncGet.getHdncPoGroup();
    const {
      hdncTeraEb
    } = HdncGet.getHdncEbGroup(targetIndex);
    /*  */
    let isActive = null;
    let type = "";
    let exaSize = null;
    if (!hdncY[targetIndex].isActive) {
      isActive = true;
      type = "add";
      exaSize = 4;
    } else {
      isActive = false;
      type = "remove";
      exaSize = 0;
    }
    /*  */
    hdncY[targetIndex].classList[type]("cl-mdt-hdnc-z-po-handler");
    hdncExaPoText[targetIndex].classList[type]("cl-mdt-hdnc-z-po-handler");
    hdncExaPoRgro[targetIndex].classList[type]("cl-mdt-hdnc-z-po-handler");
    hdncExaPoBgro[targetIndex].classList[type]("cl-mdt-hdnc-z-po-handler");
    /*  */
    HdncUpdate.updateExa(
      hdncE[targetIndex],
      hdncTeraEb,
      exaSize
    );
    for (let i = 0; i < hdncTeraEb.length; i++) {
      hdncTeraEb[i].classList[type]("cl-mdt-hdnc-z-po-handler");
    }
    /*  */
    hdncY[targetIndex].isActive = isActive;
    /*  */
    HdncHandler.mdtHdncZettaEcoSfro();
  }
  static tdtHdncZettaPo(eventData) {
    /* =============== Setup: =============== */
    const {
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hdnc-y");
    const {
      hdncY,
      hdncE
    } = HdncGet.getHdncGroup();
    const {
      hdncExaPoBgro
    } = HdncGet.getHdncPoGroup();
    const {
      hdncTeraEb
    } = HdncGet.getHdncEbGroup(targetIndex);
    /*  */
    let isActive = null;
    let type = "";
    let exaSize = null;
    if (!hdncY[targetIndex].isActive) {
      isActive = true;
      type = "add";
      exaSize = 4;
    } else {
      isActive = false;
      type = "remove";
      exaSize = 0;
    }
    /*  */
    hdncExaPoBgro[targetIndex].classList[type]("cl-tdt-hdnc-z-po-handler");
    hdncE[targetIndex].classList[type]("cl-tdt-hdnc-z-po-handler");
    for (let i = 0; i < hdncTeraEb.length; i++) {
      hdncTeraEb[i].classList[type]("cl-tdt-hdnc-z-po-handler");
    }
    HdncUpdate.updateExa(hdncE[targetIndex], hdncTeraEb, exaSize);
    /*  */
    if (targetIndex === 0) {
      hdncE[targetIndex].classList.add("cl-tdt-hdnc-z-po-handler-nth-1");
    } else if (targetIndex === 3) {
      hdncE[targetIndex].classList.add("cl-tdt-hdnc-z-po-handler-nth-4");
    }
    /*  */
    if (isActive) {
      if (HsncAccessor.isActiveHsnc) {
        HtpncAccessor.htpncZettaSnioHandler();
      }
      HdncReset.resetTdtHdnc(targetIndex);
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
      hdncY,
      hdncE
    } = HdncGet.getHdncGroup();
    const {
      hdncPetaEb,
      hdncTeraEb
    } = HdncGet.getHdncEbGroup(eventIndex);
    const {
      hdncExaPoText,
      hdncExaPoBgro
    } = HdncGet.getHdncPoGroup();
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
    hdncExaPoText[eventIndex].classList[type]("cl-ddt-hdnc-y-handler");
    hdncExaPoBgro[eventIndex].classList[type]("cl-ddt-hdnc-y-handler");
    hdncE[eventIndex].classList[type]("cl-ddt-hdnc-y-handler");
    for (let i = 0; i < hdncPetaEb.length; i++) {
      hdncTeraEb[i].classList[type]("cl-ddt-hdnc-y-handler");
    }
    HdncUpdate.updateExa(hdncE[eventIndex], hdncPetaEb, exaSize);
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
          hdncE[eventIndex].classList.add("cl-ddt-hdnc-y-handler-nth-4");
        } else {
          hdncE[eventIndex].classList.remove("cl-ddt-hdnc-y-handler-nth-4");
        }
      }
    }
    /*  */
    hdncY[eventIndex].isActive = isActive;
  }
  static ddtHdncPeta(eventData) {
    const {
      eventType,
      eventIndex,
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hdnc-y");
    const {
      hdncGigaTextEb,
      hdncGigaRgroEb,
      hdncGigaBgroEb
    } = HdncGet.getHdncEbGroup(targetIndex);
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
    hdncGigaTextEb[eventIndex].classList[type]("cl-ddt-hdnc-p-handler");
    hdncGigaRgroEb[eventIndex].classList[type]("cl-ddt-hdnc-p-handler");
    HdncSetup.setupGigaBgroWidth(isActive, hdncGigaBgroEb[eventIndex]);
  }
  static mdtHdncZettaEcoSfro() {
    const {
      hdncR
    } = HdncGet.getHdncRoot();
    const {
      hdncY
    } = HdncGet.getHdncGroup();
    const {
      hdncZettaPo
    } = HdncGet.getHdncPoGroup();
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
    let tempHeight = hdncZettaPo.length * defaultHeight;
    /*  */
    for (let i = 0; i < hdncY.length; i++) {
      if (hdncY[i].isActive) {
        const {
          hdncPetaEb
        } = HdncGet.getHdncEbGroup(i);
        tempHeight += hdncPetaEb.length * defaultHeight;
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
      return;
    }
    /*  */
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
    const hdncRoot = [
      {
        id: "hdncR",
        selector: ".blf-y-ho .hdnc-r"
      }
    ];
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      HdncAccessor.hdncCache,
      hdncRoot
    );
    return saveVerifyGroup;
  }
  static getHdncGroup() {
    const hdncGroup = [
      {
        id: "hdncY",
        selector: ".hdnc-y",
        type: "all"
      },
      {
        id: "hdncZ",
        selector: ".hdnc-z",
        type: "all"
      },
      {
        id: "hdncE",
        selector: ".hdnc-e",
        type: "all"
      }
    ];
    const {
      hdncR
    } = this.getHdncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      HdncAccessor.hdncCache,
      hdncGroup,
      hdncR
    );
    return saveVerifyGroup;
  }
  static getHdncPoGroup() {
    const hdncPoGroup = [
      {
        id: "hdncZettaPo",
        selector: ".hdnc-z-po",
        type: "all"
      },
      {
        id: "hdncExaPoText",
        selector: ".hdnc-e-po-text",
        type: "all"
      },
      {
        id: "hdncExaPoRgro",
        selector: ".hdnc-e-po-rgro",
        type: "all"
      },
      {
        id: "hdncExaPoBgro",
        selector: ".hdnc-e-po-bgro",
        type: "all"
      }
    ];
    const {
      hdncR
    } = this.getHdncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      HdncAccessor.hdncCache,
      hdncPoGroup,
      hdncR
    );
    return saveVerifyGroup;
  }
  static getHdncEbGroup(gIndex) {
    const hdncEbGroup = [
      {
        id: "hdncPetaEb",
        selector: ".hdnc-p",
        type: "all"
      },
      {
        id: "hdncTeraEb",
        selector: ".hdnc-t",
        type: "all"
      },
      {
        id: "hdncGigaTextEb",
        selector: ".hdnc-g-text",
        type: "all"
      },
      {
        id: "hdncGigaRgroEb",
        selector: ".hdnc-g-rgro",
        type: "all"
      },
      {
        id: "hdncGigaBgroEb",
        selector: ".hdnc-g-bgro",
        type: "all"
      }
    ];
    const {
      hdncE
    } = this.getHdncGroup();
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      HdncAccessor.hdncCache,
      hdncEbGroup,
      hdncE[gIndex],
      gIndex
    );
    return saveVerifyGroup;
  }
  static getHdncEcoGroup() {
    const hdncEcoGroup = [
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
    ];
    const {
      hdncR
    } = HdncGet.getHdncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      HdncAccessor.hdncCache,
      hdncEcoGroup,
      hdncR
    );
    return saveVerifyGroup;
  }
}
class HdncSet {
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
  static setExa(setElement, referElement, size) {
    let gridTemplateData = "";
    for (let i = 0; i < referElement.length; i++) {
      gridTemplateData += size + "rem" + " ";
    }
    setElement.style.gridTemplateRows = gridTemplateData;
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
}
class HdncUpdate {
  static updateExa(setElement, referElement, size) {
    let gridTemplateData = "";
    for (let i = 0; i < referElement.length; i++) {
      gridTemplateData += size + "rem" + " ";
    }
    setElement.style.gridTemplateRows = gridTemplateData;
  }
}
class HdncSetup {
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
}
class HdncReset {
  static resetHdnc(displayTypeState) {
    const {
      hdncY,
      hdncE
    } = HdncGet.getHdncGroup();
    const {
      hdncZettaPo
    } = HdncGet.getHdncPoGroup();
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
    for (let i = 0; i < hdncZettaPo.length; i++) {
      if (hdncY[i].isActive) {
        switch (displayTypeState) {
          case 1: {
            eventData.currentTarget = hdncZettaPo[i];
            HdncHandler.mdtHdncZettaPo(eventData);
            break;
          }
          case 2: {
            eventData.currentTarget = hdncZettaPo[i];
            HdncHandler.tdtHdncZettaPo(eventData);
            break;
          }
          case 3: {
            eventData.currentTarget = hdncZettaPo[i];
            eventData.type = "mouseleave";
            HdncHandler.ddtHdncYotta(eventData);
            /*  */
            const {
              hdncPetaEb
            } = HdncGet.getHdncEbGroup(i);
            for (let j = 0; j < hdncE[i].length; j++) {
              eventData.currentTarget = hdncPetaEb[j];
              eventData.type = "mouseleave";
              HdncHandler.ddtHdncPeta(eventData);
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
      hdncZettaPo
    } = HdncGet.getHdncPoGroup();
    /*  */
    const eventData = {};
    for (let i = 0; i < hdncY.length; i++) {
      if (hdncY[i].isActive && targetIndex !== i) {
        eventData.currentTarget = hdncZettaPo[i];
        HdncHandler.tdtHdncZettaPo(eventData);
        return;
      }
    }
  }
}
export {
  HdncAccessor,
  HdncController
}
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */