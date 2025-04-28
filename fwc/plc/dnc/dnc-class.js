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
    DncManager.addEvent();
  }
  static processOnResize() {
    DncManager.initOnResize();
    DncManager.removeEvent();
    DncManager.addEvent();
  }
}
class DncManager {
  static init() {
    const {
      dncY,
      dncE
    } = DncGet.getDncGroup();
    /* const {
      dncZettaAlptg
    } = DncGet.getDncAlptgGroup(); */
    /* const dncZettaAlptg = dncR.querySelectorAll(".dnc-z-alptg"); */
    /* const dncR = document.querySelector(".plc-y-liptg .dnc-r-bptg");
    const dncY = dncR.querySelectorAll(".dnc-y"); */
    /* const dncZettaAlptg = dncR.querySelectorAll(".dnc-z-alptg");
    const dncE = dncR.querySelectorAll(".dnc-e"); */
    for (let i = 0; i < dncE.length; i++) {
      const {
        dncPetaEb
      } = DncGet.getDncEbGroup(i);
      /* const dncPetaEb = dncE[i].querySelectorAll(".dnc-p"); */
      DncSet.setExa(dncE[i], dncPetaEb, 0);
      dncY[i].isActive = false;
      dncY[i].index = i;
      /* dncZettaAlptg[i].index = i; */
      for (let j = 0; j < dncPetaEb.length; j++) {
        dncPetaEb[j].index = j;
      }
    }
  }
  static initOnLoad() {

  }
  static initOnResize() {
    const displayTypeState = FwaConfig.previousDisplayType;
    /* !!!!! v1.1.15a [suggestion] {add} (getDisplayTypeState) !!!!! */
    DncReset.resetDnc(displayTypeState);
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
  static addEvent() {
    /* const dncR = document.querySelector(".plc-y-liptg .dnc-r-bptg");
    const dncY = dncR.querySelectorAll(".dnc-y");
    const dncZ = dncR.querySelectorAll(".dnc-z");
    const dncZettaAlptg = dncR.querySelectorAll(".dnc-z-alptg");
    const dncE = dncR.querySelectorAll(".dnc-e"); */
    const {
      dncY
    } = DncGet.getDncGroup();
    const {
      dncZettaAlptg
    } = DncGet.getDncAlptgGroup();
    /* const { dncPeta } = DncGet.getDncPetaIndexGroup(); */
    for (let i = 0; i < dncY.length; i++) {
      /* Init */
      dncY[i].isActive = false;
      /* ========== FwaConfig.currentDisplayType ========== */
      switch (FwaConfig.currentDisplayType) {
        case 1: {
          /* Mobile Display Type */
          /* Dnc Zetta Alptg */
          dncZettaAlptg[i].addEventListener(
            "click",
            DncHandler.mdtDncZettaAlptg
          );
          break;
        }
        case 2: {
          /* Tablet Display Type */
          /* Dnc Zetta Alptg */
          dncZettaAlptg[i].addEventListener(
            "click",
            DncHandler.tdtDncZettaAlptg
          );
          break;
        }
        case 3: {
          /* Desktop Display Type */
          /* Dnc Zetta */
          dncY[i].addEventListener(
            "mouseenter",
            DncHandler.ddtDncYotta
          );
          dncY[i].addEventListener(
            "mouseleave",
            DncHandler.ddtDncYotta
          );
          /* Dnc Peta */
          /* const dncPetaEb = dncE[i].querySelectorAll(".dnc-p"); */
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
      /* ============================== */
    }
  }
  static removeEvent() {
    /* const dncR = document.querySelector(".plc-y-liptg .dnc-r-bptg");
    const dncY = dncR.querySelectorAll(".dnc-y");
    const dncZ = dncR.querySelectorAll(".dnc-z");
    const dncZettaAlptg = dncR.querySelectorAll(".dnc-z-alptg");
    const dncE = dncR.querySelectorAll(".dnc-e"); */
    const {
      dncY
    } = DncGet.getDncGroup();
    const {
      dncZettaAlptg
    } = DncGet.getDncAlptgGroup();
    /* const { dncPeta } = DncGet.getDncPetaIndexGroup(); */
    for (let i = 0; i < dncY.length; i++) {
      /* ========== FwaConfig.previousDisplayType ========== */
      switch (FwaConfig.previousDisplayType) {
        case 1: {
          /* Mobile Display Type */
          dncZettaAlptg[i].removeEventListener(
            "click",
            DncHandler.mdtDncZettaAlptg
          );
          break;
        }
        case 2: {
          /* Tablet Display Type */
          dncZettaAlptg[i].removeEventListener(
            "click",
            DncHandler.tdtDncZettaAlptg
          );
          break;
        }
        case 3: {
          /* Desktop Display Type */
          dncY[i].removeEventListener(
            "mouseenter",
            DncHandler.ddtDncYotta
          );
          dncY[i].removeEventListener(
            "mouseleave",
            DncHandler.ddtDncYotta
          );
          /* const dncPetaEb = dncE[i].querySelectorAll(".dnc-p"); */
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
      /* ============================== */
      dncY[i].isActive = false;
    }
  }
}
class DncHandler {
  static mdtDncZettaAlptg(eventData) {
    /* =============== Setup: =============== */
    /* [ H.MDT_SU ] { dncZettaAlptg.li } ( Event: click ) */
    /* const eCurrentTarget = event.currentTarget;
    const eIndex = eCurrentTarget.index; */
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
    /* const {
      dncExaAlptgTitleEb,
      dncExaAlptgRgroEb,
      dncExaAlptgBgroEb,
    } = DncGet.getDncAlptgIndexGroup(eIndex); */
    /* I: Dnc */
    /* const dncR = document.querySelector(".plc-y-liptg .dnc-r-bptg");
    const dncY = dncR.querySelectorAll(".dnc-y");
    const dncExaEb = dncY[eIndex].querySelector(".dnc-e"); */
    /* I: Exa Alptg */
    /* const dncExaAlptgTitleZb = dncY[eIndex].querySelector(".dnc-e-alptg-title");
    const dncExaAlptgRgroZb = dncY[eIndex].querySelector(".dnc-e-alptg-rgro");
    const dncExaAlptgBgroZb = dncY[eIndex].querySelector(".dnc-e-alptg-bgro"); */
    /* I: Tera, Giga */
    /* const dncTeraEb = dncExaEb.querySelectorAll(".dnc-t"); */
    /* const dncGigaTitleEb = dncExaEb.querySelectorAll(".dnc-g-title");
    const dncGigaBgroEb = dncExaEb.querySelectorAll(".dnc-g-bgro"); */
    /* =============== Setup; =============== */
    /* =============== Script: =============== */
    if (!dncY[targetIndex].isActive) {
      /* ==========----- Activation: -----========== */
      /* A: Set Yotta */
      dncY[targetIndex].style.backgroundColor = "#333333";
      /* A: Set Exa Alptg */
      dncExaAlptgTitle[targetIndex].style.fontWeight = "700";
      dncExaAlptgRgro[targetIndex].style.transform = "rotate(180deg)";
      dncExaAlptgBgro[targetIndex].style.left = "15%";
      dncExaAlptgBgro[targetIndex].style.width = "70%";
      /* A: Set Exa */
      DncSet.setExa(dncE[targetIndex], dncTeraEb, 4);
      /* A: Set Tera */
      for (let i = 0; i < dncTeraEb.length; i++) {
        dncTeraEb[i].style.opacity = "1";
        DncSet.setGigaBgro(
          dncGigaBgroEb[i],
          dncGigaTitleEb[i],
          20
        );
      }
      /* A: Set Flag */
      dncY[targetIndex].isActive = true;
      /* ==========----- Activation; -----========== */
    } else {
      /* ==========----- Deactivation: -----========== */
      /* D: Set Yotta */
      dncY[targetIndex].style.backgroundColor = "";
      /* D: Set Zetta Alptg */
      dncExaAlptgTitle[targetIndex].style.fontWeight = "";
      dncExaAlptgRgro[targetIndex].style.transform = "";
      dncExaAlptgBgro[targetIndex].style.left = "";
      dncExaAlptgBgro[targetIndex].style.width = "";
      /* D: Set Exa */
      DncSet.setExa(dncE[targetIndex], dncTeraEb, 0);
      /* D: Set Tera */
      for (let i = 0; i < dncTeraEb.length; i++) {
        dncTeraEb[i].style.opacity = "";
        dncGigaBgroEb[i].style.left = "";
        dncGigaBgroEb[i].style.width = "";
      }
      /* D: Set Flag */
      dncY[targetIndex].isActive = false;
      /* ==========----- Deactivation; -----========== */
    }
    /* =============== Script; =============== */
  }
  static tdtDncZettaAlptg(eventData) {
    /* =============== Setup: =============== */
    /* [ H.TDT_SU ] { dncZettaAlptg.li } ( Event: click ) */
    /* const eCurrentTarget = event.currentTarget;
    const eIndex = eCurrentTarget.index; */
    const {
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".dnc-y");
    const {
      dncY,
      dncE
    } = DncGet.getDncGroup();
    /* [ H.TDT_SU ] { dncR.nav, dncY.ul , dncE.ul } (  ) */
    /* const dncR = document.querySelector(".plc-y-liptg .dnc-r-bptg");
    const dncY = dncR.querySelectorAll(".dnc-y");
    const dncExaEb = dncY[eIndex].querySelector(".dnc-e"); */
    /* T.I: Exa Alptg */
    /* const dncExaAlptgTitleZb = dncY[eIndex].querySelector(".dnc-e-alptg-title");
    const dncExaAlptgRgroZb = dncY[eIndex].querySelector(".dnc-e-alptg-rgro");
    const dncExaAlptgBgroZb = dncY[eIndex].querySelector(".dnc-e-alptg-bgro"); */
    const {
      dncExaAlptgBgro
    } = DncGet.getDncAlptgGroup();
    /* T.I: Tera, Giga */
    /* const dncTeraEb = dncExaEb.querySelectorAll(".dnc-t");
    const dncGigaTitleEb = dncExaEb.querySelectorAll(".dnc-g-title");
    const dncGigaBgroEb = dncExaEb.querySelectorAll(".dnc-g-bgro"); */
    const {
      dncTeraEb,
      dncGigaTitleEb,
      dncGigaBgroEb
    } = DncGet.getDncEbGroup(targetIndex);
    /* =============== Setup; =============== */
    /* =============== Script: =============== */
    if (!dncY[targetIndex].isActive) {
      /* ==========----- Activation: -----========== */
      /* T.A: Reset */
      if (SncAccessor.isActiveSnc) {
        TpncAccessor.tpncZettaSnioHandler();
      }
      /* [ T.S.A: Reset ] {} () */
      DncReset.resetTdtDncExa(targetIndex);
      /* [ T.S.A: Set ] { dncExaAlptg } ( Tag.div ) */
      dncExaAlptgBgro[targetIndex].style.left = "10%";
      dncExaAlptgBgro[targetIndex].style.width = "80%";
      /* [ T.S.A: Set ] { dncExaEb } ( Tag.ul ) */
      switch (targetIndex) {
        case 0:
          dncE[targetIndex].style.left = "0%";
          break;
        case 4:
          dncE[targetIndex].style.right = "0%";
          break;
      }
      dncE[targetIndex].style.width = "18rem";
      DncSet.setExa(dncE[targetIndex], dncTeraEb, 4);
      /* T.S.A: Set Tera */
      for (let i = 0; i < dncTeraEb.length; i++) {
        dncTeraEb[i].style.opacity = "1";
        DncSet.setGigaBgro(
          dncGigaBgroEb[i],
          dncGigaTitleEb[i],
          32
        );
      }
      /* A: Set Flag */
      dncY[targetIndex].isActive = true;
      /* ==========----- Activation; -----========== */
    } else {
      /* ==========----- Deactivation: -----========== */
      /* A: Set Exa Alptg */
      dncExaAlptgBgro[targetIndex].style.left = "";
      dncExaAlptgBgro[targetIndex].style.width = "";
      /* D: Set Exa */
      dncE[targetIndex].style.width = "";
      DncSet.setExa(dncE[targetIndex], dncTeraEb, 0);
      /* D: Set Tera */
      for (let i = 0; i < dncTeraEb.length; i++) {
        dncTeraEb[i].style.opacity = "";
        dncGigaBgroEb[i].style.left = "";
        dncGigaBgroEb[i].style.width = "";
      }
      /* D: Set Flag */
      dncY[targetIndex].isActive = false;
      /* ==========----- Deactivation; -----========== */
    }
    /* =============== Script; =============== */
  }
  static ddtDncYotta(eventData) {
    /* const { eType, eCurrentTarget, eIndex } = getEventElement(); */
    /* const eType = event.type;
    const eCurrentTarget = event.currentTarget;
    const eIndex = eCurrentTarget.index; */
    const {
      eventType,
      eventIndex
    } = FwcAccessor.getEventData(eventData);

    /* const dncR = document.querySelector(".plc-y-liptg .dnc-r-bptg");
    const dncY = dncR.querySelectorAll(".dnc-y");
    const dncExaEb = dncY[eventIndex].querySelector(".dnc-e");
    const dncPetaEb = dncExaEb.querySelectorAll(".dnc-p");
    const dncTeraEb = dncExaEb.querySelectorAll(".dnc-t"); */
    const {
      dncY,
      dncE
    } = DncGet.getDncGroup();
    const {
      dncPetaEb,
      dncTeraEb
    } = DncGet.getDncEbGroup(eventIndex);

    /* const dncZettaAlptg = dncY[eventIndex].querySelector(".dnc-z-alptg");
    const dncExaAlptgTitleEb = dncZettaAlptg.querySelector(".dnc-e-alptg-title");
    const dncExaAlptgBgroEb = dncZettaAlptg.querySelector(".dnc-e-alptg-bgro"); */
    const {
      dncExaAlptgTitle,
      dncExaAlptgBgro
    } = DncGet.getDncAlptgGroup();

    switch (eventType) {
      case "mouseenter": {
        dncExaAlptgTitle[eventIndex].style.fontWeight = "700";
        dncExaAlptgBgro[eventIndex].style.left = "10%";
        dncExaAlptgBgro[eventIndex].style.width = "80%";
        DncSet.setExa(dncE[eventIndex], dncPetaEb, 4);
        dncE[eventIndex].style.width = "18rem";
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
              dncE[eventIndex].style.right = "0rem";
            } else {
              dncE[eventIndex].style.right = "";
            }
            break;
          }
        }
        break;
      }
      case "mouseleave": {
        dncExaAlptgTitle[eventIndex].style.fontWeight = "";
        dncExaAlptgBgro[eventIndex].style.left = "";
        dncExaAlptgBgro[eventIndex].style.width = "";
        DncSet.setExa(dncE[eventIndex], dncPetaEb, 0);
        dncE[eventIndex].style.width = "";
        for (let i = 0; i < dncPetaEb.length; i++) {
          dncTeraEb[i].style.opacity = "";
        }
        break;
      }
    }
  }
  static ddtDncPeta(eventData) {
    /* const eType = event.type;
    const eCurrentTarget = event.currentTarget; */
    const {
      eventType,
      eventIndex,
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".dnc-y");
    /* const eIndex = eCurrentTarget.index; */

    /* const dncR = document.querySelector(".plc-y-liptg .dnc-r-bptg"); */
    /* const dncY = dncR.querySelectorAll(".dnc-y"); */

    /* const dncGigaTitleGb = eCurrentTarget.querySelector(".dnc-g-title");
    const dncGigaRgroGb = eCurrentTarget.querySelector(".dnc-g-rgro");
    const dncGigaBgroGb = eCurrentTarget.querySelector(".dnc-g-bgro"); */
    const {
      dncGigaTitleEb,
      dncGigaRgroEb,
      dncGigaBgroEb
    } = DncGet.getDncEbGroup(targetIndex);
    /* getTarget */
    switch (eventType) {
      case "mouseenter": {
        dncGigaTitleEb[eventIndex].style.fontWeight = "700";
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
        dncGigaTitleEb[eventIndex].style.fontWeight = "";
        dncGigaRgroEb[eventIndex].style.margin = "";
        dncGigaRgroEb[eventIndex].style.borderTop = "";
        dncGigaRgroEb[eventIndex].style.borderBottom = "";
        dncGigaRgroEb[eventIndex].style.borderLeft = "";
        dncGigaRgroEb[eventIndex].style.opacity = "";
        dncGigaBgroEb[eventIndex].style.width = "";
        break;
      }
    }
  }
}
/* !!!!! :v1.1.15a [del] (replaced): !!!!! */
/* class DncUtility {
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
  static resetDnc(displayTypeState) {
    const dncR = document.querySelector(".plc-y-liptg .dnc-r-bptg");
    const dncY = dncR.querySelectorAll(".dnc-y");
    const dncZettaAlptg = dncR.querySelectorAll(".dnc-z-alptg");
    const eventData = {};
    for (let i = 0; i < dncZettaAlptg.length; i++) {
      if (dncY[i].isActive) {
        switch (displayTypeState) {
          case 1:
            /* Moblie Display Type 
            eventData.currentTarget = dncZettaAlptg[i];
            DncHandler.mdtDncZettaAlptg(eventData);
            break;
          case 2:
            /* Tablet Display Type 
            eventData.currentTarget = dncZettaAlptg[i];
            DncHandler.tdtDncZettaAlptg(eventData);
            break;
          case 3:
            /* Desktop Display Type 
            eventData.currentTarget = dncZettaAlptg[i];
            eventData.type = "mouseleave";
            DncHandler.ddtDncYotta(eventData);

            const dncExaEb = dncY[i].querySelector(".dnc-e");
            const dncPetaEb = dncExaEb.querySelectorAll(".dnc-p");
            for (let i = 0; i < dncPetaEb.length; i++) {
              eventData.currentTarget = dncPetaEb[i];
              eventData.type = "mouseleave";
              DncHandler.ddtDncPeta(eventData);
            }
            break;
        }
      }
    }
  }
  static resetTdtDncExa(eIndex) {
    const dncR = document.querySelector(".plc-y-liptg .dnc-r-bptg");
    const dncY = dncR.querySelectorAll(".dnc-y");

    for (let i = 0; i < dncY.length; i++) {
      if (dncY[i].isActive && eIndex !== i) {
        const displayTypeState = FwaConfig.currentDisplayType;
        DncUtility.resetDnc(displayTypeState);
        return;
      }
    }

  }
} */
/* !!!!! ;v1.1.15a [del] (replaced); !!!!! */
class DncGet {
  /* static getGenerateElement(elementTag, setClass) {
    const elementData = document.createElement(elementTag);
    elementData.setAttribute("class", setClass);
    return elementData;
  } */
  /* static getEventData(eventData) {
    const eType = eventData.type;
    const eCurrentTarget = eventData.currentTarget;
    const eIndex = eCurrentTarget.index;
    return {
      eType,
      eCurrentTarget,
      eIndex
    };
  } */
  static getDncRoot() {
    /* const dncRoot = {
      dncR: {
        id: "dncR",
        selector: ".plc-y-liptg .dnc-r-bptg"
      }
    }; */
    const dncRoot = [
      {
        id: "dncR",
        selector: ".plc-y-liptg .dnc-r-bptg"
      }
    ];
    /* let {
      dncR
    } = DncAccessor.dncCache;
    if (!dncR) {
      dncR = document.querySelector(dncRoot.dncR.selector);
      DncAccessor.dncCache[dncRoot.dncR.id] = dncR;
    } */
    /* return { dncR }; */
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      DncAccessor.dncCache,
      dncRoot
    );
    return saveVerifyGroup;
  }
  static getDncGroup() {
    /* const dncGroup = {
      dncY: {
        id: "dncY",
        selector: ".dnc-y"
      },
      dncZ: {
        id: "dncZ",
        selector: ".dnc-z"
      },
      dncE: {
        id: "dncE",
        selector: ".dnc-e"
      }
    }; */
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
    /* let {
      dncY,
      dncZ,
      dncE
    } = DncAccessor.dncCache; */
    const {
      dncR
    } = this.getDncRoot();
    /* const { dncR } = DncGet.getDncR(); */
    /* const dncY = dncR.querySelectorAll(".dnc-y");
    const dncZ = dncR.querySelectorAll(".dnc-z");
    const dncE = dncR.querySelectorAll(".dnc-e"); */
    /* if (!dncY) {
      dncY = dncR.querySelectorAll(dncGroup.dncY.selector);
      DncAccessor.dncCache[dncGroup.dncY.id] = dncY;
    }
    if (!dncZ) {
      dncZ = dncR.querySelectorAll(dncGroup.dncZ.selector);
      DncAccessor.dncCache[dncGroup.dncZ.id] = dncZ;
    }
    if (!dncE) {
      dncE = dncR.querySelectorAll(dncGroup.dncE.selector);
      DncAccessor.dncCache[dncGroup.dncE.id] = dncE;
    }
    return {
      dncY,
      dncZ,
      dncE
    }; */
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      DncAccessor.dncCache,
      dncGroup,
      dncR
    );
    return saveVerifyGroup;
  }
  static getDncAlptgGroup() {
    /* const dncAlptgGroup = {
      dncZettaAlptg: {
        id: "dncZettaAlptg",
        selector: ".dnc-z-alptg"
      }
    }; */
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
    /* let {
      dncZettaAlptg
    } = DncAccessor.dncCache; */
    const {
      dncR
    } = this.getDncRoot();
    /* const dncZettaAlptg = dncR.querySelectorAll(".dnc-z-alptg"); */
    /* if (!dncZettaAlptg) {
      dncZettaAlptg = dncR.querySelectorAll(dncAlptgGroup.dncZettaAlptg.selector);
      DncAccessor.dncCache[dncAlptgGroup.dncZettaAlptg.id] = dncZettaAlptg;
    }
    return {
      dncZettaAlptg
    }; */
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      DncAccessor.dncCache,
      dncAlptgGroup,
      dncR
    );
    return saveVerifyGroup;
  }
  /* !!!!! v1.1.15a [test] [del] (optimization) !!!!! */
  /* static getDncPetaIndexGroup() {
    const {
      dncE
    } = this.getDncGroup();
    let dncPeta = [];
    for (let i = 0; i < dncE.length; i++) {
      dncPeta[i] = dncE[i].querySelectorAll(".dnc-p");
    }
    return {
      dncPeta
    };
  } */

  static getDncEbGroup(gIndex) {
    /* const dncEbGroup = {
      dncPetaEb: {
        id: "dncPetaEb" + gIndex.toString(),
        selector: ".dnc-p"
      },
      dncTeraEb: {
        id: "dncTeraEb" + gIndex.toString(),
        selector: ".dnc-t"
      },
      dncGigaTitleEb: {
        id: "dncGigaTitleEb" + gIndex.toString(),
        selector: ".dnc-g-title"
      },
      dncGigaRgroEb: {
        id: "dncGigaRgroEb" + gIndex.toString(),
        selector: ".dnc-g-rgro"
      },
      dncGigaBgroEb: {
        id: "dncGigaBgroEb" + gIndex.toString(),
        selector: ".dnc-g-bgro"
      }
    }; */
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
    /* const dncPetaEb = dncExaEb.querySelectorAll(".dnc-p"); */
    /* const dncTeraEb = dncExaEb.querySelectorAll(".dnc-t"); */
    /* const dncGigaTitleEb = dncExaEb.querySelectorAll(".dnc-g-title");
    const dncGigaRgroEb = dncExaEb.querySelectorAll(".dnc-g-rgro");
    const dncGigaBgroEb = dncExaEb.querySelectorAll(".dnc-g-bgro"); */

    /* let dncPetaEb = DncAccessor.dncCache[dncEbGroup.dncPetaEb.id];
    if (!dncPetaEb) {
      dncPetaEb = dncE[gIndex].querySelectorAll(dncEbGroup.dncPetaEb.selector);
      DncAccessor.dncCache[dncEbGroup.dncPetaEb.id] = dncPetaEb;
    }
    let dncTeraEb = DncAccessor.dncCache[dncEbGroup.dncTeraEb.id];
    if (!dncTeraEb) {
      dncTeraEb = dncE[gIndex].querySelectorAll(dncEbGroup.dncTeraEb.selector);
      DncAccessor.dncCache[dncEbGroup.dncTeraEb.id] = dncTeraEb;
    }
    let dncGigaTitleEb = DncAccessor.dncCache[dncEbGroup.dncGigaTitleEb.id];
    if (!dncGigaTitleEb) {
      dncGigaTitleEb = dncE[gIndex].querySelectorAll(dncEbGroup.dncGigaTitleEb.selector);
      DncAccessor.dncCache[dncEbGroup.dncGigaTitleEb.id] = dncGigaTitleEb;
    }
    let dncGigaRgroEb = DncAccessor.dncCache[dncEbGroup.dncGigaRgroEb.id];
    if (!dncGigaRgroEb) {
      dncGigaRgroEb = dncE[gIndex].querySelectorAll(dncEbGroup.dncGigaRgroEb.selector);
      DncAccessor.dncCache[dncEbGroup.dncGigaRgroEb.id] = dncGigaRgroEb;
    }
    let dncGigaBgroEb = DncAccessor.dncCache[dncEbGroup.dncGigaBgroEb.id];
    if (!dncGigaBgroEb) {
      dncGigaBgroEb = dncE[gIndex].querySelectorAll(dncEbGroup.dncGigaBgroEb.selector);
      DncAccessor.dncCache[dncEbGroup.dncGigaBgroEb.id] = dncGigaBgroEb;
    } */
    /* if (DncAccessor.dncCache[dncEbGroup.dncPetaEb.id]) {
      dncPetaEb = DncAccessor.dncCache[dncEbGroup.dncPetaEb.id];
      console.log("cached");
      console.log(DncAccessor.dncCache);
    } else {
      console.log("hi");
      dncPetaEb = dncE[gIndex].querySelectorAll(dncEbGroup.dncPetaEb.selector);
      DncAccessor.dncCache[dncEbGroup.dncPetaEb.id] = dncPetaEb;
    } */
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      DncAccessor.dncCache,
      dncEbGroup,
      dncE[gIndex],
      gIndex
    );
    /* return {
      dncExaEb,
      dncPetaEb,
      dncTeraEb,
      dncGigaTitleEb,
      dncGigaRgroEb,
      dncGigaBgroEb
    }; */
    return saveVerifyGroup;
  }
  /* static getDncAlptgIndexGroup(gIndex) {
    const { dncY } = DncGet.getDncGroup();
    const dncYottaYb = dncY[gIndex];

    const dncZettaAlptgZb = dncYottaYb.querySelector(".dnc-z-alptg");
    const dncExaAlptgTitleEb = dncZettaAlptgZb.querySelector(".dnc-e-alptg-title");
    const dncExaAlptgRgroEb = dncZettaAlptgZb.querySelector(".dnc-e-alptg-rgro");
    const dncExaAlptgBgroEb = dncZettaAlptgZb.querySelector(".dnc-e-alptg-bgro");

    return {
      dncZettaAlptgZb,
      dncExaAlptgTitleEb,
      dncExaAlptgRgroEb,
      dncExaAlptgBgroEb
    };
  } */
}
class DncSet {
  /* static setGenerateElement(elementData, dText, dHref, dIndex = []) {
    switch (dIndex.length) {
      case 1: {
        if (dText) {
          elementData.textContent = dText[dIndex[0]];
        }
        if (dHref) {
          elementData.setAttribute("href", dHref[dIndex[0]]);
        }
        break;
      }
      case 2: {
        if (dText) {
          elementData.textContent = dText[dIndex[0]][dIndex[1]];
        }
        if (dHref) {
          elementData.setAttribute("href", dHref[dIndex[0]][dIndex[1]]);
        }
        break;
      }
    }
  } */
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
class DncSetup {

}
class DncReset {
  static resetDnc(displayTypeState) {
    /* const dncR = document.querySelector(".plc-y-liptg .dnc-r-bptg");
    const dncY = dncR.querySelectorAll(".dnc-y");
    const dncZettaAlptg = dncR.querySelectorAll(".dnc-z-alptg"); */
    const {
      dncY
    } = DncGet.getDncGroup();
    const {
      dncZettaAlptg
    } = DncGet.getDncAlptgGroup();

    const eventData = {};
    for (let i = 0; i < dncZettaAlptg.length; i++) {
      if (dncY[i].isActive) {
        switch (displayTypeState) {
          case 1:
            /* Moblie Display Type */
            eventData.currentTarget = dncZettaAlptg[i];
            DncHandler.mdtDncZettaAlptg(eventData);
            break;
          case 2:
            /* Tablet Display Type */
            eventData.currentTarget = dncZettaAlptg[i];
            DncHandler.tdtDncZettaAlptg(eventData);
            break;
          case 3:
            /* Desktop Display Type */
            eventData.currentTarget = dncZettaAlptg[i];
            eventData.type = "mouseleave";
            DncHandler.ddtDncYotta(eventData);

            const dncExaEb = dncY[i].querySelector(".dnc-e");
            const dncPetaEb = dncExaEb.querySelectorAll(".dnc-p");
            for (let i = 0; i < dncPetaEb.length; i++) {
              eventData.currentTarget = dncPetaEb[i];
              eventData.type = "mouseleave";
              DncHandler.ddtDncPeta(eventData);
            }
            break;
        }
      }
    }
  }
  static resetTdtDncExa(eIndex) {
    /* const dncR = document.querySelector(".plc-y-liptg .dnc-r-bptg");
    const dncY = dncR.querySelectorAll(".dnc-y"); */
    const {
      dncY
    } = DncGet.getDncGroup();

    for (let i = 0; i < dncY.length; i++) {
      if (dncY[i].isActive && eIndex !== i) {
        const displayTypeState = FwaConfig.currentDisplayType;
        DncReset.resetDnc(displayTypeState);
        return;
      }
    }

  }
}
export {
  DncAccessor,
  DncController
}
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */