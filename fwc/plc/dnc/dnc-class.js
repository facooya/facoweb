/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  FwaConfig
} from "../../../fwa/fwa-config.js";
import {
  DncConfig
} from "./dnc-config.js";
import {
  FwcAccessor,
  TpncAccessor,
  SncAccessor
} from "../../fwc-hub.js";

class DncAccessor {
  static dncCache = {};
  static isActiveDnc = false;
  /* =============== :Function: =============== */
  static resetDnc(displayTypeState) {
    DncReset.resetDnc(displayTypeState);
  }
  static getDncRoot() {
    return DncGet.getDncRoot();
  }
  static getDncGroup() {
    return DncGet.getDncGroup();
  }
  /* =============== ;Function; =============== */
}
class DncController {
  static process() {
    DncManager.generate();
    DncManager.init();
  }
  static processOnLoad() {
    /* DncManager.addEvent(); */
    DncManager.event(true);
  }
  static processOnResize() {
    DncManager.initOnResize();
    /* DncManager.removeEvent();
    DncManager.addEvent(); */
    DncManager.event(false);
    DncManager.event(true);
  }
}
class DncManager {
  static init() {
    const {
      dncY,
      dncE
    } = DncGet.getDncGroup();
    for (let i = 0; i < dncE.length; i++) {
      const {
        dncPetaEb
      } = DncGet.getDncEbGroup(i);
      DncSet.setExa(dncE[i], dncPetaEb, 0);
      dncY[i].isActive = false;
      dncY[i].index = i;
      for (let j = 0; j < dncPetaEb.length; j++) {
        dncPetaEb[j].index = j;
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
    for (let i = 0; i < dncY.length; i++) {
      const {
        dncGigaTitleEb,
        dncGigaBgroEb
      } = DncGet.getDncEbGroup(i);
      for (let j = 0; j < dncGigaBgroEb.length; j++) {
        DncSetup.setupGigaBgro(
          dncGigaBgroEb[j],
          dncGigaTitleEb[j],
          buffer
        );
        DncSetup.setupGigaBgroWidth(isDefaultSetup, dncGigaBgroEb[j]);
      }
    }
  }
  static initOnLoad() {

  }
  static initOnResize() {
    const displayTypeState = FwaConfig.previousDisplayType;
    /* !!!!! v1.1.15a [suggestion] {add} (getDisplayTypeState) !!!!! */
    DncReset.resetDnc(displayTypeState);
    /* !!!!! v1.1.16a [test] {issue fix} !!!!! */
    const {
      dncY,
      dncE
    } = DncGet.getDncGroup();
    /* !!!!! v1.1.16a [suggestion] {move} (in resetDnc) !!!!! */
    dncE[0].classList.remove("cl-tdt-dnc-z-alptg-handler-nth-1");
    dncE[4].classList.remove("cl-tdt-dnc-z-alptg-handler-nth-5");
    /* resetDncGigaBgro(); */
    let isDefaultSetup = null;
    if (FwaConfig.currentDisplayType === 3) {
      isDefaultSetup = false;
    } else {
      isDefaultSetup = true;
    }
    for (let i = 0; i < dncY.length; i++) {
      const {
        dncGigaBgroEb
      } = DncGet.getDncEbGroup(i);
      for (let j = 0; j < dncGigaBgroEb.length; j++) {
        /* dncGigaBgroEb[j].style.left = "";
        dncGigaBgroEb[j].style.width = ""; */
        DncSetup.setupGigaBgroWidth(isDefaultSetup, dncGigaBgroEb[j]);
      }
    }
  }
  static generate() {
    const {
      dncR
    } = DncGet.getDncRoot();
    const dncFragment = document.createDocumentFragment();
    let tempGenerateElement = null;
    let tempSaveElement = {};
    /* =============== :Ys, Alptg, Zs Group: =============== */
    for (let ysi = 0; ysi < DncConfig.exaAlptgTitleRs.length; ysi++) {
      /* ==========----- :Ys Group: -----========== */
      for (let zsi = 0; zsi < DncConfig.elementYsGroup.length; zsi++) {
        tempGenerateElement = FwcAccessor.getGenerateElement(
          DncConfig.elementYsGroup[zsi].tag,
          DncConfig.elementYsGroup[zsi].selector
        );
        tempSaveElement[DncConfig.elementYsGroup[zsi].id] = tempGenerateElement;
      }
      /* ==========----- ;Ys Group; -----========== */
      /* ==========----- :Alptg Group: -----========== */
      for (let zsi = 0; zsi < DncConfig.elementAlptgGroup.length; zsi++) {
        tempGenerateElement = FwcAccessor.getGenerateElement(
          DncConfig.elementAlptgGroup[zsi].tag,
          DncConfig.elementAlptgGroup[zsi].selector
        );
        FwcAccessor.setGenerateElement(
          tempGenerateElement,
          DncConfig.elementAlptgGroup[zsi].text,
          DncConfig.elementAlptgGroup[zsi].href,
          [ysi]
        );
        tempSaveElement[DncConfig.elementAlptgGroup[zsi].id] = tempGenerateElement;
      }
      /* ==========----- ;Alptg Group; -----========== */
      /* ==========----- :Zs Group: -----========== */
      for (let zsi = 0; zsi < DncConfig.gigaTitleRs[ysi].length; zsi++) {
        for (let esi = 0; esi < DncConfig.elementZsGroup.length; esi++) {
          tempGenerateElement = FwcAccessor.getGenerateElement(
            DncConfig.elementZsGroup[esi].tag,
            DncConfig.elementZsGroup[esi].selector
          );
          FwcAccessor.setGenerateElement(
            tempGenerateElement,
            DncConfig.elementZsGroup[esi].text,
            DncConfig.elementZsGroup[esi].href,
            [ysi, zsi]
          );
          tempSaveElement[DncConfig.elementZsGroup[esi].id] = tempGenerateElement;
        }
        DncSet.setAppendZsGroup(tempSaveElement);
      }
      /* ==========----- ;Zs Group; -----========== */
      DncSet.setAppendAlptgGroup(tempSaveElement);
      DncSet.setAppendYsGroup(tempSaveElement);
      dncFragment.append(tempSaveElement["yotta"]);
      tempSaveElement = {};
    }
    /* =============== ;Ys, Alptg, Zs Group; =============== */
    /* =============== :Sdo Group: =============== */
    for (let ysi = 0; ysi < DncConfig.elementSdoGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement(
        DncConfig.elementSdoGroup[ysi].tag,
        DncConfig.elementSdoGroup[ysi].selector
      );
      tempSaveElement[DncConfig.elementSdoGroup[ysi].id] = tempGenerateElement;
    }
    dncFragment.append(tempSaveElement["yottaSdo"]);
    /* =============== ;Sdo Group; =============== */
    dncR.append(dncFragment);
  }
  static event(isActive) {
    const {
      dncY
    } = DncGet.getDncGroup();
    const {
      dncZettaAlptg
    } = DncGet.getDncAlptgGroup();
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
    for (let i = 0; i < dncY.length; i++) {
      /* Init */
      dncY[i].isActive = false;
      /* ========== FwaConfig.currentDisplayType ========== */
      switch (displayTypeState) {
        case 1: {
          dncZettaAlptg[i][eventListenerType](
            "click",
            DncHandler.mdtDncZettaAlptg
          );
          break;
        }
        case 2: {
          dncZettaAlptg[i][eventListenerType](
            "click",
            DncHandler.tdtDncZettaAlptg
          );
          break;
        }
        case 3: {
          dncY[i][eventListenerType](
            "mouseenter",
            DncHandler.ddtDncYotta
          );
          dncY[i][eventListenerType](
            "mouseleave",
            DncHandler.ddtDncYotta
          );
          /* Dnc Peta */
          const {
            dncPetaEb
          } = DncGet.getDncEbGroup(i);
          for (let j = 0; j < dncPetaEb.length; j++) {
            dncPetaEb[j][eventListenerType](
              "mouseenter",
              DncHandler.ddtDncPeta
            );
            dncPetaEb[j][eventListenerType](
              "mouseleave",
              DncHandler.ddtDncPeta
            );
          }
          break;
        }
      }
      /* ============================== */
    }
  }
  /* static addEvent() {
    const {
      dncY
    } = DncGet.getDncGroup();
    const {
      dncZettaAlptg
    } = DncGet.getDncAlptgGroup();
    for (let i = 0; i < dncY.length; i++) {
      dncY[i].isActive = false;
      /* ========== FwaConfig.currentDisplayType ========== 
      switch (FwaConfig.currentDisplayType) {
        case 1: {
          dncZettaAlptg[i].addEventListener(
            "click",
            DncHandler.mdtDncZettaAlptg
          );
          break;
        }
        case 2: {
          dncZettaAlptg[i].addEventListener(
            "click",
            DncHandler.tdtDncZettaAlptg
          );
          break;
        }
        case 3: {
          dncY[i].addEventListener(
            "mouseenter",
            DncHandler.ddtDncYotta
          );
          dncY[i].addEventListener(
            "mouseleave",
            DncHandler.ddtDncYotta
          );
          const {
            dncPetaEb
          } = DncGet.getDncEbGroup(i);
          for (let j = 0; j < dncPetaEb.length; j++) {
            dncPetaEb[j].addEventListener(
              "mouseenter",
              DncHandler.ddtDncPeta
            );
            dncPetaEb[j].addEventListener(
              "mouseleave",
              DncHandler.ddtDncPeta
            );
          }
          break;
        }
      }
      /* ============================== 
    }
  }
  static removeEvent() {
    const {
      dncY
    } = DncGet.getDncGroup();
    const {
      dncZettaAlptg
    } = DncGet.getDncAlptgGroup();
    for (let i = 0; i < dncY.length; i++) {
      /* ========== FwaConfig.previousDisplayType ========== 
      switch (FwaConfig.previousDisplayType) {
        case 1: {
          /* Mobile Display Type 
          dncZettaAlptg[i].removeEventListener(
            "click",
            DncHandler.mdtDncZettaAlptg
          );
          break;
        }
        case 2: {
          /* Tablet Display Type 
          dncZettaAlptg[i].removeEventListener(
            "click",
            DncHandler.tdtDncZettaAlptg
          );
          break;
        }
        case 3: {
          /* Desktop Display Type 
          dncY[i].removeEventListener(
            "mouseenter",
            DncHandler.ddtDncYotta
          );
          dncY[i].removeEventListener(
            "mouseleave",
            DncHandler.ddtDncYotta
          );
          const {
            dncPetaEb
          } = DncGet.getDncEbGroup(i);
          for (let j = 0; j < dncPetaEb.length; j++) {
            dncPetaEb[j].removeEventListener(
              "mouseenter",
              DncHandler.ddtDncPeta
            );
            dncPetaEb[j].removeEventListener(
              "mouseleave",
              DncHandler.ddtDncPeta
            ); 
          }
          break;
        }
      }
      /* ============================== 
      dncY[i].isActive = false;
    }
  } */
}
class DncHandler {
  static mdtDncZettaAlptg(eventData) {
    /* =============== Setup: =============== */
    const {
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".dnc-y");
    const {
      dncY,
      dncE
    } = DncGet.getDncGroup();
    const {
      dncExaAlptgTitle,
      dncExaAlptgRgro,
      dncExaAlptgBgro
    } = DncGet.getDncAlptgGroup();
    const {
      dncTeraEb,
      dncGigaTitleEb,
      dncGigaBgroEb
    } = DncGet.getDncEbGroup(targetIndex);
    /*  */
    const gigaBgroBuffer = 20;
    /*  */
    let isActive = null;
    let type = "";
    let exaSize = null;
    if (!dncY[targetIndex].isActive) {
      isActive = true;
      type = "add";
      exaSize = 4;
    } else {
      isActive = false;
      type = "remove";
      exaSize = 0;
    }
    /*  */
    dncY[targetIndex].classList[type]("cl-mdt-dnc-z-alptg-handler");
    dncExaAlptgTitle[targetIndex].classList[type]("cl-mdt-dnc-z-alptg-handler");
    dncExaAlptgRgro[targetIndex].classList[type]("cl-mdt-dnc-z-alptg-handler");
    dncExaAlptgBgro[targetIndex].classList[type]("cl-mdt-dnc-z-alptg-handler");
    /*  */
    DncUpdate.updateExa(
      dncE[targetIndex],
      dncTeraEb,
      exaSize
    );
    for (let i = 0; i < dncTeraEb.length; i++) {
      dncTeraEb[i].classList[type]("cl-mdt-dnc-z-alptg-handler");
      /* DncSet.setGigaBgro(
        dncGigaBgroEb[i],
        dncGigaTitleEb[i],
        gigaBgroBuffer
      ); */
    }
    if (isActive) {
      for (let i = 0; i < dncTeraEb.length; i++) {
        /* dncGigaBgroEb[i].style.left = dncGigaBgroEb[i].left;
        dncGigaBgroEb[i].style.width = dncGigaBgroEb[i].width; */
      }
    }
    /*  */
    dncY[targetIndex].isActive = isActive;
    /* =============== Setup; =============== */
    /* =============== Script: =============== */
    /* if (isActive) { */
      /* ==========----- Activation: -----========== */
      /* A: Set Yotta */
      /* dncY[targetIndex].style.backgroundColor = "#333333"; */
      /* A: Set Exa Alptg */
      /* dncExaAlptgTitle[targetIndex].style.fontWeight = "700";
      dncExaAlptgRgro[targetIndex].style.transform = "rotate(180deg)";
      dncExaAlptgBgro[targetIndex].style.left = "15%";
      dncExaAlptgBgro[targetIndex].style.width = "70%"; */
      /* A: Set Exa */
      /* DncSet.setExa(dncE[targetIndex], dncTeraEb, 4); */
      /* A: Set Tera */
      /* for (let i = 0; i < dncTeraEb.length; i++) {
        dncTeraEb[i].style.opacity = "1";
        DncSet.setGigaBgro(
          dncGigaBgroEb[i],
          dncGigaTitleEb[i],
          20
        );
      } */
      /* A: Set Flag */
      /* dncY[targetIndex].isActive = true; */
      /* ==========----- Activation; -----========== */
    /* } else { */
      /* ==========----- Deactivation: -----========== */
      /* D: Set Yotta */
      /* dncY[targetIndex].style.backgroundColor = ""; */
      /* D: Set Zetta Alptg */
      /* dncExaAlptgTitle[targetIndex].style.fontWeight = "";
      dncExaAlptgRgro[targetIndex].style.transform = "";
      dncExaAlptgBgro[targetIndex].style.left = "";
      dncExaAlptgBgro[targetIndex].style.width = ""; */
      /* D: Set Exa */
      /* DncSet.setExa(dncE[targetIndex], dncTeraEb, 0); */
      /* D: Set Tera */
      /* for (let i = 0; i < dncTeraEb.length; i++) {
        dncTeraEb[i].style.opacity = "";
        dncGigaBgroEb[i].style.left = "";
        dncGigaBgroEb[i].style.width = "";
      } */
      /* D: Set Flag */
      /* dncY[targetIndex].isActive = false; */
      /* ==========----- Deactivation; -----========== */
    /* } */
    /* =============== Script; =============== */
  }
  static tdtDncZettaAlptg(eventData) {
    /* =============== Setup: =============== */
    const {
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".dnc-y");
    const {
      dncY,
      dncE
    } = DncGet.getDncGroup();
    const {
      dncExaAlptgBgro
    } = DncGet.getDncAlptgGroup();
    const {
      dncTeraEb,
      dncGigaTitleEb,
      dncGigaBgroEb
    } = DncGet.getDncEbGroup(targetIndex);
    /*  */
    const gigaBgroBuffer = 32;
    /*  */
    let isActive = null;
    let type = "";
    let exaSize = null;
    if (!dncY[targetIndex].isActive) {
      isActive = true;
      type = "add";
      exaSize = 4;
    } else {
      isActive = false;
      type = "remove";
      exaSize = 0;
    }
    /*  */
    dncExaAlptgBgro[targetIndex].classList[type]("cl-tdt-dnc-z-alptg-handler");
    dncE[targetIndex].classList[type]("cl-tdt-dnc-z-alptg-handler");
    for (let i = 0; i < dncTeraEb.length; i++) {
      dncTeraEb[i].classList[type]("cl-tdt-dnc-z-alptg-handler");
      /* DncSet.setGigaBgro(
        dncGigaBgroEb[i],
        dncGigaTitleEb[i],
        gigaBgroBuffer
      ); */
    }
    DncUpdate.updateExa(dncE[targetIndex], dncTeraEb, exaSize);
    /*  */
    if (targetIndex === 0) {
      dncE[targetIndex].classList.add("cl-tdt-dnc-z-alptg-handler-nth-1");
    } else if (targetIndex === 4) {
      dncE[targetIndex].classList.add("cl-tdt-dnc-z-alptg-handler-nth-5");
    }
    /*  */
    if (isActive) {
      if (SncAccessor.isActiveSnc) {
        TpncAccessor.tpncZettaSnioHandler();
      }
      DncReset.resetTdtDnc(targetIndex);
    }
    /*  */
    dncY[targetIndex].isActive = isActive;
    /* =============== Setup; =============== */
    /* =============== Script: =============== */
    /* if (isActive) { */
      /* ==========----- Activation: -----========== */
      /* T.A: Reset */
      /* if (SncAccessor.isActiveSnc) {
        TpncAccessor.tpncZettaSnioHandler();
      } */
      /* [ T.S.A: Reset ] {} () */
      /* DncReset.resetTdtDnc(targetIndex); */
      /* [ T.S.A: Set ] { dncExaAlptg } ( Tag.div ) */
      /* dncExaAlptgBgro[targetIndex].style.left = "10%";
      dncExaAlptgBgro[targetIndex].style.width = "80%"; */
      /* [ T.S.A: Set ] { dncExaEb } ( Tag.ul ) */
      /* switch (targetIndex) {
        case 0:
          dncE[targetIndex].style.left = "0%";
          break;
        case 4:
          dncE[targetIndex].style.right = "0%";
          break;
      } */
      /* dncE[targetIndex].style.width = "18rem"; */
      /* DncSet.setExa(dncE[targetIndex], dncTeraEb, 4); */
      /* T.S.A: Set Tera */
      /* for (let i = 0; i < dncTeraEb.length; i++) {
        dncTeraEb[i].style.opacity = "1";
        DncSet.setGigaBgro(
          dncGigaBgroEb[i],
          dncGigaTitleEb[i],
          32
        );
      } */
      /* A: Set Flag */
      /* dncY[targetIndex].isActive = true; */
      /* ==========----- Activation; -----========== */
    /* } else { */
      /* ==========----- Deactivation: -----========== */
      /* A: Set Exa Alptg */
      /* dncExaAlptgBgro[targetIndex].style.left = "";
      dncExaAlptgBgro[targetIndex].style.width = ""; */
      /* D: Set Exa */
      /* dncE[targetIndex].style.width = ""; */
      /* DncSet.setExa(dncE[targetIndex], dncTeraEb, 0); */
      /* D: Set Tera */
      /* for (let i = 0; i < dncTeraEb.length; i++) {
        dncTeraEb[i].style.opacity = "";
        dncGigaBgroEb[i].style.left = "";
        dncGigaBgroEb[i].style.width = "";
      } */
      /* D: Set Flag */
      /* dncY[targetIndex].isActive = false; */
      /* ==========----- Deactivation; -----========== */
    /* } */
    /* =============== Script; =============== */
  }
  static ddtDncYotta(eventData) {
    const {
      eventType,
      eventIndex
    } = FwcAccessor.getEventData(eventData);
    const {
      dncY,
      dncE
    } = DncGet.getDncGroup();
    const {
      dncPetaEb,
      dncTeraEb
    } = DncGet.getDncEbGroup(eventIndex);
    const {
      dncExaAlptgTitle,
      dncExaAlptgBgro
    } = DncGet.getDncAlptgGroup();
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
    dncExaAlptgTitle[eventIndex].classList[type]("cl-ddt-dnc-y-handler");
    dncExaAlptgBgro[eventIndex].classList[type]("cl-ddt-dnc-y-handler");
    dncE[eventIndex].classList[type]("cl-ddt-dnc-y-handler");
    for (let i = 0; i < dncPetaEb.length; i++) {
      dncTeraEb[i].classList[type]("cl-ddt-dnc-y-handler");
    }
    DncUpdate.updateExa(dncE[eventIndex], dncPetaEb, exaSize);
    /*  */
    if (isActive) {
      if (eventIndex === 4) {
        const htmlElement = document.documentElement;
        const htmlElementRect = htmlElement.getBoundingClientRect();
        const dncYottaRect = dncY[eventIndex].getBoundingClientRect();
        const htmlElementRectCalc = htmlElementRect.right - (21 * 16);
        const dncYottaRectCalc = 
          (dncYottaRect.right - (dncYottaRect.width / 2)) + (10 * 16);
        if (htmlElementRectCalc < dncYottaRectCalc && SncAccessor.isActiveSnc) {
          /* dncE[eventIndex].style.right = "0rem"; */
          dncE[eventIndex].classList.add("cl-ddt-dnc-y-handler-nth-5");
        } else {
          /* dncE[eventIndex].style.right = ""; */
          dncE[eventIndex].classList.remove("cl-ddt-dnc-y-handler-nth-5");
        }
      }
    }
    /*  */
    dncY[eventIndex].isActive = isActive;
    /*  */
    /* switch (eventType) {
      case "mouseenter": {
        /* dncExaAlptgTitle[eventIndex].style.fontWeight = "700";
        dncExaAlptgBgro[eventIndex].style.left = "10%";
        dncExaAlptgBgro[eventIndex].style.width = "80%"; 
        DncSet.setExa(dncE[eventIndex], dncPetaEb, 4);
        /* dncE[eventIndex].style.width = "18rem";
        for (let i = 0; i < dncPetaEb.length; i++) {
          dncTeraEb[i].style.opacity = "1";
        } 
        switch (eventIndex) {
          case 4: {
            const htmlElement = document.documentElement;
            const htmlElementRect = htmlElement.getBoundingClientRect();
            const dncYottaRect = dncY[eventIndex].getBoundingClientRect();

            const htmlElementRectCalc = htmlElementRect.right - (21 * 16);
            const dncYottaRectCalc = 
              (dncYottaRect.right - (dncYottaRect.width / 2)) + (10 * 16);

            if (htmlElementRectCalc < dncYottaRectCalc && SncAccessor.isActiveSnc) {
              /* dncE[eventIndex].style.right = "0rem"; 
              dncE[eventIndex].classList.add("cl-ddt-dnc-y-handler-nth-5");
            } else {
              /* dncE[eventIndex].style.right = ""; 
              dncE[eventIndex].classList.remove("cl-ddt-dnc-y-handler-nth-5");
            }
            break;
          }
        }
        break;
      }
      case "mouseleave": {
        /* dncExaAlptgTitle[eventIndex].style.fontWeight = "";
        dncExaAlptgBgro[eventIndex].style.left = "";
        dncExaAlptgBgro[eventIndex].style.width = ""; 
        DncSet.setExa(dncE[eventIndex], dncPetaEb, 0);
        /* dncE[eventIndex].style.width = "";
        for (let i = 0; i < dncPetaEb.length; i++) {
          dncTeraEb[i].style.opacity = "";
        } 
        break;
      }
    } */
  }
  static ddtDncPeta(eventData) {
    const {
      eventType,
      eventIndex,
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".dnc-y");
    const {
      dncGigaTitleEb,
      dncGigaRgroEb,
      dncGigaBgroEb
    } = DncGet.getDncEbGroup(targetIndex);
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
    dncGigaTitleEb[eventIndex].classList[type]("cl-ddt-dnc-p-handler");
    dncGigaRgroEb[eventIndex].classList[type]("cl-ddt-dnc-p-handler");
    DncSetup.setupGigaBgroWidth(isActive, dncGigaBgroEb[eventIndex]);
    /* if (isActive) {
      /* DncSet.setGigaBgro(
        dncGigaBgroEb[eventIndex],
        dncGigaTitleEb[eventIndex],
        gigaBgroBuffer
      ); 
      dncGigaBgroEb[eventIndex].style.width = dncGigaBgroEb[eventIndex].width;
    } else {
      dncGigaBgroEb[eventIndex].style.width = "";
    } */
    /* getTarget */
    /* switch (eventType) {
      case "mouseenter": {
        /* dncGigaTitleEb[eventIndex].style.fontWeight = "700";
        dncGigaRgroEb[eventIndex].style.margin = "0rem 0rem 0rem 1rem";
        dncGigaRgroEb[eventIndex].style.borderTop = "0.25rem solid #00000000";
        dncGigaRgroEb[eventIndex].style.borderBottom = "0.25rem solid #00000000";
        dncGigaRgroEb[eventIndex].style.borderLeft = "0.5rem solid #FFFFFF";
        dncGigaRgroEb[eventIndex].style.opacity = "1"; 
        DncSet.setGigaBgro(
          dncGigaBgroEb[eventIndex],
          dncGigaTitleEb[eventIndex],
          32
        );
        break;
      }
      case "mouseleave": {
        /* dncGigaTitleEb[eventIndex].style.fontWeight = "";
        dncGigaRgroEb[eventIndex].style.margin = "";
        dncGigaRgroEb[eventIndex].style.borderTop = "";
        dncGigaRgroEb[eventIndex].style.borderBottom = "";
        dncGigaRgroEb[eventIndex].style.borderLeft = "";
        dncGigaRgroEb[eventIndex].style.opacity = ""; 
        dncGigaBgroEb[eventIndex].style.width = "";
        break;
      }
    } */
  }
}
class DncGet {
  static getDncRoot() {
    const dncRoot = [
      {
        id: "dncR",
        selector: ".plc-y-liptg .dnc-r-bptg"
      }
    ];
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      DncAccessor.dncCache,
      dncRoot
    );
    return saveVerifyGroup;
  }
  static getDncGroup() {
    const dncGroup = [
      {
        id: "dncY",
        selector: ".dnc-y",
        type: "all"
      },
      {
        id: "dncZ",
        selector: ".dnc-z",
        type: "all"
      },
      {
        id: "dncE",
        selector: ".dnc-e",
        type: "all"
      }
    ];
    const {
      dncR
    } = this.getDncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      DncAccessor.dncCache,
      dncGroup,
      dncR
    );
    return saveVerifyGroup;
  }
  static getDncAlptgGroup() {
    const dncAlptgGroup = [
      {
        id: "dncZettaAlptg",
        selector: ".dnc-z-alptg",
        type: "all"
      },
      {
        id: "dncExaAlptgTitle",
        selector: ".dnc-e-alptg-title",
        type: "all"
      },
      {
        id: "dncExaAlptgRgro",
        selector: ".dnc-e-alptg-rgro",
        type: "all"
      },
      {
        id: "dncExaAlptgBgro",
        selector: ".dnc-e-alptg-bgro",
        type: "all"
      }
    ];
    const {
      dncR
    } = this.getDncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      DncAccessor.dncCache,
      dncAlptgGroup,
      dncR
    );
    return saveVerifyGroup;
  }
  static getDncEbGroup(gIndex) {
    const dncEbGroup = [
      {
        id: "dncPetaEb",
        selector: ".dnc-p",
        type: "all"
      },
      {
        id: "dncTeraEb",
        selector: ".dnc-t",
        type: "all"
      },
      {
        id: "dncGigaTitleEb",
        selector: ".dnc-g-title",
        type: "all"
      },
      {
        id: "dncGigaRgroEb",
        selector: ".dnc-g-rgro",
        type: "all"
      },
      {
        id: "dncGigaBgroEb",
        selector: ".dnc-g-bgro",
        type: "all"
      }
    ];
    const {
      dncE
    } = this.getDncGroup();
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      DncAccessor.dncCache,
      dncEbGroup,
      dncE[gIndex],
      gIndex
    );
    return saveVerifyGroup;
  }
}
class DncSet {
  static setAppendYsGroup(saveGenerate) {
    saveGenerate["zetta"].append(saveGenerate["exa"]);
    saveGenerate["yotta"].append(
      saveGenerate["zettaAlptg"],
      saveGenerate["zetta"]
    );
  }
  static setAppendZsGroup(saveGenerate) {
    saveGenerate["tera"].append(
      saveGenerate["gigaTitle"],
      saveGenerate["gigaRgro"],
      saveGenerate["gigaBgro"]
    );
    saveGenerate["peta"].append(saveGenerate["tera"]);
    saveGenerate["exa"].append(saveGenerate["peta"]);
  }
  static setAppendAlptgGroup(saveGenerate) {
    saveGenerate["zettaAlptg"].append(
      saveGenerate["exaAlptgTitle"],
      saveGenerate["exaAlptgRgro"],
      saveGenerate["exaAlptgBgro"]
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
class DncUpdate {
  static updateExa(setElement, referElement, size) {
    let gridTemplateData = "";
    for (let i = 0; i < referElement.length; i++) {
      gridTemplateData += size + "rem" + " ";
    }
    setElement.style.gridTemplateRows = gridTemplateData;
  }
}
class DncSetup {
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
class DncReset {
  static resetDnc(displayTypeState) {
    const {
      dncY,
      dncE
    } = DncGet.getDncGroup();
    const {
      dncZettaAlptg
    } = DncGet.getDncAlptgGroup();
    /*  */
    const eventData = {};
    for (let i = 0; i < dncZettaAlptg.length; i++) {
      if (dncY[i].isActive) {
        switch (displayTypeState) {
          case 1: {
            eventData.currentTarget = dncZettaAlptg[i];
            DncHandler.mdtDncZettaAlptg(eventData);
            break;
          }
          case 2: {
            eventData.currentTarget = dncZettaAlptg[i];
            DncHandler.tdtDncZettaAlptg(eventData);
            break;
          }
          case 3: {
            eventData.currentTarget = dncZettaAlptg[i];
            eventData.type = "mouseleave";
            DncHandler.ddtDncYotta(eventData);
            /*  */
            const {
              dncPetaEb
            } = DncGet.getDncEbGroup(i);
            for (let j = 0; j < dncE[i].length; j++) {
              eventData.currentTarget = dncPetaEb[j];
              eventData.type = "mouseleave";
              DncHandler.ddtDncPeta(eventData);
            }
            break;
          }
        }
      }
    }
  }
  static resetTdtDnc(targetIndex) {
    const {
      dncY
    } = DncGet.getDncGroup();
    const {
      dncZettaAlptg
    } = DncGet.getDncAlptgGroup();
    /*  */
    const eventData = {};
    for (let i = 0; i < dncY.length; i++) {
      if (dncY[i].isActive && targetIndex !== i) {
        eventData.currentTarget = dncZettaAlptg[i];
        DncHandler.tdtDncZettaAlptg(eventData);
        return;
      }
    }
  }
}
export {
  DncAccessor,
  DncController
}
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */