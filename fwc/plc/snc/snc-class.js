/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  FwaConfig
} from "../../../fwa/fwa-config.js";
import {
  SncConfig
} from "./snc-config.js";
import {
  FwcAccessor
} from "../../fwc-hub.js";

class SncAccessor {
  static sncCache = {};
  static isActiveSnc = false;
  static getSncRoot() {
    return SncGet.getSncRoot();
  }
  static getSncGroup() {
    return SncGet.getSncGroup();
  }
  static resetSnc(displayTypeState) {
    SncReset.resetSnc(displayTypeState);
  }
}
class SncController {
  static process() {
    SncManager.generate();
    SncManager.init();
  }
  static processOnLoad() {
    SncManager.addEvent();
  }
  static processOnResize() {
    SncManager.removeEvent();
    SncManager.addEvent();
  }
}
class SncManager {
  static init() {
    const {
      sncY,
      sncE
    } = SncGet.getSncGroup();
    /* const {
      sncZettaSiptg
    } = SncGet.getSncSiptgGroup(); */
    /* const sncR = document.querySelector(".plc-y-liptg .snc-r-cptg");
    const sncY = sncR.querySelectorAll(".snc-y");
    const sncZettaSiptg = sncR.querySelectorAll(".snc-z-siptg");
    const sncE = sncR.querySelectorAll(".snc-e"); */
    for (let i = 0; i < sncE.length; i++) {
      const {
        sncPetaEb
      } = SncGet.getSncEbGroup(i);
      SncSet.setExa(sncE[i], sncPetaEb, 0);
      sncY[i].isActive = false;
      sncY[i].index = i;
      /* sncZettaSiptg[i].index = i; */
      for (let j = 0; j < sncPetaEb.length; j++) {
        sncPetaEb[j].index = j;
      }
    }
    /* for (let i = 0; i < sncE.length; i++) {
      const sncPetaEb = sncE[i].querySelectorAll(".snc-p");
      SncSet.setExa(sncE[i], sncPetaEb, 0);
      sncZettaSiptg[i].index = i;
      sncZettaSiptg[i].isActive = false;
      /* !!!!! v1.1.14a [replace] (sncZettaSiptg.isActive -> sncY.isActive) !!!!! 
      sncY[i].isActive = false;
    } */
  }
  static generate() {
    const {
      sncR
    } = SncGet.getSncRoot();
    const sncFragment = document.createDocumentFragment();
    let tempGenerateElement = null;
    let tempSaveElement = {};
    /* =============== :Ys, Siptg, Zs Group: =============== */
    for (let ysi = 0; ysi < SncConfig.exaSiptgTitleRs.length; ysi++) {
      /* ==========----- :Ys Group: -----========== */
      for (let zsi = 0; zsi < SncConfig.elementYsGroup.length; zsi++) {
        tempGenerateElement = FwcAccessor.getGenerateElement(
          SncConfig.elementYsGroup[zsi].tag,
          SncConfig.elementYsGroup[zsi].selector
        );
        tempSaveElement[SncConfig.elementYsGroup[zsi].id] = tempGenerateElement;
      }
      /* ==========----- ;Ys Group; -----========== */
      /* ==========----- :Siptg Group: -----========== */
      for (let zsi = 0; zsi < SncConfig.elementSiptgGroup.length; zsi++) {
        tempGenerateElement = FwcAccessor.getGenerateElement(
          SncConfig.elementSiptgGroup[zsi].tag,
          SncConfig.elementSiptgGroup[zsi].selector
        );
        FwcAccessor.setGenerateElement(
          tempGenerateElement,
          SncConfig.elementSiptgGroup[zsi].text,
          SncConfig.elementSiptgGroup[zsi].href,
          [ysi]
        );
        tempSaveElement[SncConfig.elementSiptgGroup[zsi].id] = tempGenerateElement;
      }
      /* ==========----- ;Siptg Group; -----========== */
      /* ==========----- :Zs Group: -----========== */
      for (let zsi = 0; zsi < SncConfig.gigaTitleRs[ysi].length; zsi++) {
        for (let esi = 0; esi < SncConfig.elementZsGroup.length; esi++) {
          tempGenerateElement = FwcAccessor.getGenerateElement(
            SncConfig.elementZsGroup[esi].tag,
            SncConfig.elementZsGroup[esi].selector
          );
          FwcAccessor.setGenerateElement(
            tempGenerateElement,
            SncConfig.elementZsGroup[esi].text,
            SncConfig.elementZsGroup[esi].href,
            [ysi, zsi]
          );
          tempSaveElement[SncConfig.elementZsGroup[esi].id] = tempGenerateElement;
        }
        SncSet.setAppendZsGroup(tempSaveElement);
      }
      /* ==========----- ;Zs Group; -----========== */
      SncSet.setAppendSiptgGroup(tempSaveElement);
      SncSet.setAppendYsGroup(tempSaveElement);
      sncFragment.append(tempSaveElement["yotta"]);
      tempSaveElement = {};
    }
    /* =============== ;Ys, Siptg, Zs Group; =============== */
    /* =============== :Sdo Group: =============== */
    for (let ysi = 0; ysi < SncConfig.elementSdoGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement(
        SncConfig.elementSdoGroup[ysi].tag,
        SncConfig.elementSdoGroup[ysi].selector
      );
      tempSaveElement[SncConfig.elementSdoGroup[ysi].id] = tempGenerateElement;
    }
    sncFragment.append(tempSaveElement["yottaSdo"]);
    /* =============== ;Sdo Group; =============== */
    sncR.appendChild(sncFragment);
  }
  static addEvent() {
    /* const sncR = document.querySelector(".plc-y-liptg .snc-r-cptg");
    const sncY = sncR.querySelectorAll(".snc-y");
    const sncZ = sncR.querySelectorAll(".snc-z");
    const sncZettaSiptg = sncR.querySelectorAll(".snc-z-siptg");
    const sncE = sncR.querySelectorAll(".snc-e"); */
    const {
      sncY
    } = SncGet.getSncGroup();
    const {
      sncZettaSiptg
    } = SncGet.getSncSiptgGroup();
    for (let i = 0; i < sncY.length; i++) {
      /* Init */
      /* sncZettaSiptg[i].isActive = false; */
      /* ========== FwaConfig.currentDisplayType ========== */
      switch(FwaConfig.currentDisplayType) {
        case 1: {
          /* Mobile Display Type */
          /* Snc Zetta */
          sncZettaSiptg[i].addEventListener(
            "click",
            SncHandler.mdtSncZettaSiptg
          );
          break;
        }
        case 2: {
          /* Tablet Display Type */
          /* Snc Zetta */
          sncZettaSiptg[i].addEventListener(
            "click",
            SncHandler.tdtSncZettaSiptg
          );
          break;
        }
        case 3: {
          /* Desktop Display Type */
          /* Snc Zetta */
          sncZettaSiptg[i].addEventListener(
            "mouseenter",
            SncHandler.ddtSncZettaSiptg
          );
          sncZettaSiptg[i].addEventListener(
            "mouseleave",
            SncHandler.ddtSncZettaSiptg
          );
          sncZettaSiptg[i].addEventListener(
            "click",
            SncHandler.ddtSncZettaSiptg
          );
          /* Snc Peta */
          /* const sncPetaEb = sncE[i].querySelectorAll(".snc-p"); */
          const {
            sncPetaEb
          } = SncGet.getSncEbGroup(i);
          for (let j = 0; j < sncPetaEb.length; j++) {
            sncPetaEb[j].addEventListener(
              "mouseenter",
              SncHandler.ddtSncPeta
            );
            sncPetaEb[j].addEventListener(
              "mouseleave",
              SncHandler.ddtSncPeta
            );
          }
          break;
        }
      }
      /* ============================== */
    }
  }
  static removeEvent() {
    /* const sncR = document.querySelector(".plc-y-liptg .snc-r-cptg");
    const sncY = sncR.querySelectorAll(".snc-y");
    const sncZ = sncR.querySelectorAll(".snc-z");
    const sncZettaSiptg = sncR.querySelectorAll(".snc-z-siptg");
    const sncE = sncR.querySelectorAll(".snc-e"); */
    const {
      sncY
    } = SncGet.getSncGroup();
    const {
      sncZettaSiptg
    } = SncGet.getSncSiptgGroup();
    for (let i = 0; i < sncY.length; i++) {
      /* ========== FwaConfig.previousDisplayType ========== */
      switch (FwaConfig.previousDisplayType) {
        case 1: {
          /* Mobile Display Type */
          sncZettaSiptg[i].removeEventListener(
            "click",
            SncHandler.mdtSncZettaSiptg
          );
          break;
        }
        case 2: {
          /* Tablet Display Type */
          sncZettaSiptg[i].removeEventListener(
            "click",
            SncHandler.tdtSncZettaSiptg
          );
          break;
        }
        case 3: {
          /* Desktop Display Type */
          sncZettaSiptg[i].removeEventListener(
            "mouseenter",
            SncHandler.ddtSncZettaSiptg
          );
          sncZettaSiptg[i].removeEventListener(
            "mouseleave",
            SncHandler.ddtSncZettaSiptg
          );
          sncZettaSiptg[i].removeEventListener(
            "click",
            SncHandler.ddtSncZettaSiptg
          );
          /* const sncPetaEb = sncE[i].querySelectorAll(".snc-p"); */
          const {
            sncPetaEb
          } = SncGet.getSncEbGroup(i);
          for (let j = 0; j < sncPetaEb.length; j++) {
            sncPetaEb[j].removeEventListener(
              "mouseenter",
              SncHandler.ddtSncPeta
            );
            sncPetaEb[j].removeEventListener(
              "mouseleave",
              SncHandler.ddtSncPeta
            ); 
          }
          break;
        }
      }
      /* ============================== */
    }
  }
}
class SncHandler {
  static mdtSncZettaSiptg(eventData) {
    /* const eCurrentTarget = event.currentTarget;
    const idx = eCurrentTarget.index;

    const sncR = document.querySelector(".plc-y-liptg .snc-r-cptg");
    const sncY = sncR.querySelectorAll(".snc-y");
    const sncExaEb = sncY[idx].querySelector(".snc-e");
    /* Exa Siptg 
    const sncExaSiptgTitleZb = sncY[idx].querySelector(".snc-e-siptg-title");
    const sncExaSiptgRgroZb = sncY[idx].querySelector(".snc-e-siptg-rgro");
    const sncExaSiptgBgroZb = sncY[idx].querySelector(".snc-e-siptg-bgro");
    /* Tera, Giga 
    const sncTeraEb = sncExaEb.querySelectorAll(".snc-t");
    const sncGigaTitleEb = sncExaEb.querySelectorAll(".snc-g-title");
    const sncGigaBgroEb = sncExaEb.querySelectorAll(".snc-g-bgro"); */
    const {
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".snc-y");
    const {
      sncY,
      sncE
    } = SncGet.getSncGroup();
    const {
      sncExaSiptgTitle,
      sncExaSiptgRgro,
      sncExaSiptgBgro
    } = SncGet.getSncSiptgGroup();
    const {
      sncTeraEb,
      sncGigaTitleEb,
      sncGigaBgroEb
    } = SncGet.getSncEbGroup(targetIndex);

    /* ********** Snc Zetta Bpt ********** */
    if (!sncY[targetIndex].isActive) {
      /* ========== Activate ========== */
      /* Set Yotta */
      sncY[targetIndex].style.backgroundColor = "#333333";
      /* Set Zetta Bpt */
      sncExaSiptgTitle[targetIndex].style.fontWeight = "700";
      sncExaSiptgRgro[targetIndex].style.transform = "rotate(180deg)";
      sncExaSiptgBgro[targetIndex].style.left = "15%";
      sncExaSiptgBgro[targetIndex].style.width = "70%";
      /* Set Exa */
      SncSet.setExa(sncE[targetIndex], sncTeraEb, 4);
      /* Set Tera */
      for (let i = 0; i < sncTeraEb.length; i++) {
        sncTeraEb[i].style.opacity = "1";
        SncSet.setGigaBgro(
          sncGigaBgroEb[i],
          sncGigaTitleEb[i],
          20
        );
      }
      /* Set Flag */
      sncY[targetIndex].isActive = true;
      /* ============================== */
    } else {
      /* ========== Deactivate ========== */
      /* Set Yotta */
      sncY[targetIndex].style.backgroundColor = "#222222";
      /* Set Zetta Siptg */
      sncExaSiptgTitle[targetIndex].style.fontWeight = "";
      sncExaSiptgRgro[targetIndex].style.transform = "";
      sncExaSiptgBgro[targetIndex].style.left = "";
      sncExaSiptgBgro[targetIndex].style.width = "";
      /* Set Exa */
      SncSet.setExa(sncE[targetIndex], sncTeraEb, 0);
      /* Set Tera */
      for (let i = 0; i < sncTeraEb.length; i++) {
        sncTeraEb[i].style.opacity = "";
        sncGigaBgroEb[i].style.left = "";
        sncGigaBgroEb[i].style.width = "";
      }
      /* Set Flag */
      sncY[targetIndex].isActive = false;
      /* ============================== */
    }
    /* ****************************** */
  }
  static tdtSncZettaSiptg(eventData) {
    /* const eCurrentTarget = event.currentTarget;
    const eIndex = eCurrentTarget.index;

    const sncR = document.querySelector(".plc-y-liptg .snc-r-cptg");
    const sncY = sncR.querySelectorAll(".snc-y");
    const sncExaEb = sncY[eIndex].querySelector(".snc-e");
    /* Exa Siptg 
    const sncExaSiptgTitleEb = sncY[eIndex].querySelector(".snc-e-siptg-title");
    const sncExaSiptgRgroEb = sncY[eIndex].querySelector(".snc-e-siptg-rgro");
    const sncExaSiptgBgroEb = sncY[eIndex].querySelector(".snc-e-siptg-bgro");
    /* Tera, Giga 
    const sncTeraEb = sncExaEb.querySelectorAll(".snc-t");
    const sncGigaTitleEb = sncExaEb.querySelectorAll(".snc-g-title");
    const sncGigaBgroEb = sncExaEb.querySelectorAll(".snc-g-bgro"); */
    const {
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".snc-y");
    const {
      sncY,
      sncE
    } = SncGet.getSncGroup();
    const {
      sncExaSiptgTitle,
      sncExaSiptgRgro,
      sncExaSiptgBgro
    } = SncGet.getSncSiptgGroup();
    const {
      sncTeraEb,
      sncGigaTitleEb,
      sncGigaBgroEb
    } = SncGet.getSncEbGroup(targetIndex);

    if (!sncY[targetIndex].isActive) {
      /* ========== Activate ========== */
      /* Set Yotta */
      sncY[targetIndex].style.backgroundColor = "#333333";
      /* Set Zetta Bpt */
      sncExaSiptgTitle[targetIndex].style.fontWeight = "700";
      sncExaSiptgRgro[targetIndex].style.transform = "rotate(180deg)";
      sncExaSiptgBgro[targetIndex].style.left = "15%";
      sncExaSiptgBgro[targetIndex].style.width = "70%";
      /* Set Exa */
      SncSet.setExa(sncE[targetIndex], sncTeraEb, 4);
      /* Set Tera */
      for (let i = 0; i < sncTeraEb.length; i++) {
        sncTeraEb[i].style.opacity = "1";
        SncSet.setGigaBgro(
          sncGigaBgroEb[i],
          sncGigaTitleEb[i],
          20
        );
      }
      /* Set Flag */
      sncY[targetIndex].isActive = true;
      /* ============================== */
    } else {
      /* ========== Deactivate ========== */
      /* Set Yotta */
      sncY[targetIndex].style.backgroundColor = "#222222";
      /* Set Zetta Siptg */
      sncExaSiptgTitle[targetIndex].style.fontWeight = "";
      sncExaSiptgRgro[targetIndex].style.transform = "";
      sncExaSiptgBgro[targetIndex].style.left = "";
      sncExaSiptgBgro[targetIndex].style.width = "";
      /* Set Exa */
      SncSet.setExa(sncE[targetIndex], sncTeraEb, 0);
      /* Set Tera */
      for (let i = 0; i < sncTeraEb.length; i++) {
        sncTeraEb[i].style.opacity = "";
        sncGigaBgroEb[i].style.left = "";
        sncGigaBgroEb[i].style.width = "";
      }
      /* Set Flag */
      sncY[targetIndex].isActive = false;
      /* ============================== */
    }
  }
  static ddtSncZettaSiptg(eventData) {
    /* const eType = event.type;
    const eCurrentTarget = event.currentTarget;
    const eIndex = eCurrentTarget.index;

    const sncR = document.querySelector(".plc-y-liptg .snc-r-cptg");
    const sncY = sncR.querySelectorAll(".snc-y"); */
    /* Exa Siptg */
    /* const sncExaSiptgTitleEb = sncY[eIndex].querySelector(".snc-e-siptg-title");
    const sncExaSiptgRgroEb = sncY[eIndex].querySelector(".snc-e-siptg-rgro");
    const sncExaSiptgBgroEb = sncY[eIndex].querySelector(".snc-e-siptg-bgro"); */
    const {
      eventType,
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".snc-y");
    const {
      sncY,
      sncE
    } = SncGet.getSncGroup();
    const {
      sncExaSiptgTitle,
      sncExaSiptgRgro,
      sncExaSiptgBgro
    } = SncGet.getSncSiptgGroup();

    switch (eventType) {
      case "mouseenter": {
        if (!sncY[targetIndex].isActive) {
          sncExaSiptgTitle[targetIndex].style.fontWeight = "700";
          sncExaSiptgRgro[targetIndex].style.margin = "0rem 2.5rem 0rem 0rem";
          sncExaSiptgRgro[targetIndex].style.borderTop = "0.5rem solid #FFFFFF";
          sncExaSiptgRgro[targetIndex].style.borderRight = "0.4rem solid #00000000";
          sncExaSiptgRgro[targetIndex].style.borderLeft = "0.4rem solid #00000000";
          sncExaSiptgRgro[targetIndex].style.transform = "rotate(360deg)";
          sncExaSiptgBgro[targetIndex].style.left = "10%";
          sncExaSiptgBgro[targetIndex].style.width = "80%";
        }
        break;
      }
      case "mouseleave": {
        if (!sncY[targetIndex].isActive) {
          sncExaSiptgTitle[targetIndex].style.fontWeight = "";
          sncExaSiptgRgro[targetIndex].style.margin = "";
          sncExaSiptgRgro[targetIndex].style.borderTop = "";
          sncExaSiptgRgro[targetIndex].style.borderRight = "";
          sncExaSiptgRgro[targetIndex].style.borderLeft = "";
          sncExaSiptgRgro[targetIndex].style.transform = "";
          sncExaSiptgBgro[targetIndex].style.left = "";
          sncExaSiptgBgro[targetIndex].style.width = "";
        }
        break;
      }
      case "click": {
        /* const sncExaEb = sncY[eIndex].querySelector(".snc-e");
        const sncGigaTilteEb = sncExaEb.querySelectorAll(".snc-g-title");
        const sncTeraEb = sncExaEb.querySelectorAll(".snc-t"); */
        const {
          sncTeraEb,
          sncGigaTitleEb
        } = SncGet.getSncEbGroup(targetIndex);
        if (!sncY[targetIndex].isActive) {
          /* Activate */
          sncY[targetIndex].style.backgroundColor = "#333333";
          sncExaSiptgRgro[targetIndex].style.transform = "rotate(540deg)";
          SncSet.setExa(sncE[targetIndex], sncGigaTitleEb, 4);
          for (let i = 0; i < sncTeraEb.length; i++) {
            sncTeraEb[i].style.opacity = "1";
          }
          sncY[targetIndex].isActive = true;
        } else {
          /* Deactivate */
          sncY[targetIndex].style.backgroundColor = "#222222";
          sncExaSiptgRgro[targetIndex].style.transform = "rotate(360deg)";
          SncSet.setExa(sncE[targetIndex], sncGigaTitleEb, 0);
          for (let i = 0; i < sncTeraEb.length; i++) {
            sncTeraEb[i].style.opacity = "";
          }
          sncY[targetIndex].isActive = false;
        }
        break;
      }
    }
  }
  static ddtSncPeta(eventData) {
    /* const eType = event.type;
    const eCurrentTarget = event.currentTarget; */
    const {
      eventType,
      eventIndex,
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".snc-y");
    const {
      sncGigaTitleEb,
      sncGigaRgroEb,
      sncGigaBgroEb
    } = SncGet.getSncEbGroup(targetIndex);

    /* const sncGigaTitleGb = eCurrentTarget.querySelector(".snc-g-title");
    const sncGigaBgroGb = eCurrentTarget.querySelector(".snc-g-bgro");
    const sncGigaRgroGb = eCurrentTarget.querySelector(".snc-g-rgro"); */

    switch (eventType) {
      case "mouseenter": {
        sncGigaTitleEb[eventIndex].style.fontWeight = "700";
        sncGigaRgroEb[eventIndex].style.margin = "0rem 0rem 0rem 1rem";
        sncGigaRgroEb[eventIndex].style.borderTop = "0.25rem solid #00000000";
        sncGigaRgroEb[eventIndex].style.borderBottom = "0.25rem solid #00000000";
        sncGigaRgroEb[eventIndex].style.borderLeft = "0.5rem solid #FFFFFF";
        sncGigaRgroEb[eventIndex].style.opacity = "1";

        SncSet.setGigaBgro(
          sncGigaBgroEb[eventIndex],
          sncGigaTitleEb[eventIndex],
          32
        );
        break;
      }
      case "mouseleave": {
        sncGigaTitleEb[eventIndex].style.fontWeight = "";
        sncGigaRgroEb[eventIndex].style.margin = "";
        sncGigaRgroEb[eventIndex].style.borderTop = "";
        sncGigaRgroEb[eventIndex].style.borderBottom = "";
        sncGigaRgroEb[eventIndex].style.borderLeft = "";
        sncGigaRgroEb[eventIndex].style.opacity = "";
        sncGigaBgroEb[eventIndex].style.width = "0%";
        break;
      }
    }
  }
}
/* !!!!! :v1.1.15a [del] (replaced): !!!!! */
/*
class SncUtility {
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
  static resetSnc(displayTypeState) {
    const sncR = document.querySelector(".plc-y-liptg .snc-r-cptg");
    const sncY = sncR.querySelectorAll(".snc-y");
    const sncZettaSiptg = sncR.querySelectorAll(".snc-z-siptg");
    const eventData = {};
    for (let i = 0; i < sncZettaSiptg.length; i++) {
      if (sncZettaSiptg[i].isActive || sncY[i].isActive) {
        switch (displayTypeState) {
          case 1:
            /* Moblie Display Type 
            eventData.currentTarget = sncZettaSiptg[i];
            SncHandler.mdtSncZettaSiptg(eventData);
            break;
          case 2:
            /* Tablet Display Type 
            eventData.currentTarget = sncZettaSiptg[i];
            SncHandler.tdtSncZettaSiptg(eventData);
            break;
          case 3:
            /* Desktop Display Type 
            eventData.currentTarget = sncZettaSiptg[i];
            eventData.type = "click"; 
            SncHandler.ddtSncZettaSiptg(eventData); 
            eventData.type = "mouseleave"; 
            SncHandler.ddtSncZettaSiptg(eventData);
          default:
            break;
        }
      }
    }
  }
}
*/
/* !!!!! ;v1.1.15a [del] (replaced); !!!!! */
class SncGet {
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
  static getSncRoot() {
    const sncRoot = [
      {
        id: "sncR",
        selector: ".plc-y-liptg .snc-r-cptg"
      }
    ];
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      SncAccessor.sncCache,
      sncRoot
    );
    return saveVerifyGroup;
  }
  static getSncGroup() {
    /* const sncR = document.querySelector(".plc-y-liptg .snc-r-cptg");
    const sncY = sncR.querySelectorAll(".snc-y");
    const sncZ = sncR.querySelectorAll(".snc-z");
    const sncE = sncR.querySelectorAll(".snc-e");
    return {
      sncR,
      sncY,
      sncZ,
      sncE
    }; */
    const sncGroup = [
      {
        id: "sncY",
        selector: ".snc-y",
        type: "all"
      },
      {
        id: "sncZ",
        selector: ".snc-z",
        type: "all"
      },
      {
        id: "sncE",
        selector: ".snc-e",
        type: "all"
      }
    ];
    const {
      sncR
    } = this.getSncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      SncAccessor.sncCache,
      sncGroup,
      sncR
    );
    return saveVerifyGroup;
  }
  static getSncSiptgGroup() {
    /* const { sncY } = SncGet.getSncGroup();
    const sncYottaYb = sncY[gIndex];
    const sncZettaSiptgZb = sncYottaYb.querySelector(".snc-z-siptg");
    const sncExaSiptgTitleEb = sncZettaSiptgZb.querySelector(".snc-e-siptg-title");
    const sncExaSiptgRgroEb = sncZettaSiptgZb.querySelector(".snc-e-siptg-rgro");
    const sncExaSiptgBgroEb = sncZettaSiptgZb.querySelector(".snc-e-siptg-bgro");
    return {
      sncZettaSiptgZb,
      sncExaSiptgTitleEb,
      sncExaSiptgRgroEb,
      sncExaSiptgBgroEb
    }; */
    const sncSiptgGroup = [
      {
        id: "sncZettaSiptg",
        selector: ".snc-z-siptg",
        type: "all"
      },
      {
        id: "sncExaSiptgTitle",
        selector: ".snc-e-siptg-title",
        type: "all"
      },
      {
        id: "sncExaSiptgRgro",
        selector: ".snc-e-siptg-rgro",
        type: "all"
      },
      {
        id: "sncExaSiptgBgro",
        selector: ".snc-e-siptg-bgro",
        type: "all"
      }
    ];
    const {
      sncR
    } = this.getSncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      SncAccessor.sncCache,
      sncSiptgGroup,
      sncR
    );
    return saveVerifyGroup;
  }
  static getSncEbGroup(gIndex) {
    /* const { sncE } = SncGet.getSncGroup();
    const sncExaEb = sncE[gIndex];
    const sncPetaEb = sncExaEb.querySelectorAll(".snc-p");
    const sncTeraEb = sncExaEb.querySelectorAll(".snc-t");
    const sncGigaTitleEb = sncExaEb.querySelectorAll(".snc-g-title");
    const sncGigaRgroEb = sncExaEb.querySelectorAll(".snc-g-rgro");
    const sncGigaBgroEb = sncExaEb.querySelectorAll(".snc-g-bgro");
    return {
      sncExaEb,
      sncPetaEb,
      sncTeraEb,
      sncGigaTitleEb,
      sncGigaRgroEb,
      sncGigaBgroEb
    }; */
    const sncEbGroup = [
      {
        id: "sncPetaEb",
        selector: ".snc-p",
        type: "all"
      },
      {
        id: "sncTeraEb",
        selector: ".snc-t",
        type: "all"
      },
      {
        id: "sncGigaTitleEb",
        selector: ".snc-g-title",
        type: "all"
      },
      {
        id: "sncGigaRgroEb",
        selector: ".snc-g-rgro",
        type: "all"
      },
      {
        id: "sncGigaBgroEb",
        selector: ".snc-g-bgro",
        type: "all"
      }
    ];
    const {
      sncE
    } = this.getSncGroup();
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      SncAccessor.sncCache,
      sncEbGroup,
      sncE[gIndex],
      gIndex
    );
    return saveVerifyGroup;
  }
  
}
class SncSet {
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
      saveGenerate["zettaSiptg"],
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
  static setAppendSiptgGroup(saveGenerate) {
    saveGenerate["zettaSiptg"].append(
      saveGenerate["exaSiptgTitle"],
      saveGenerate["exaSiptgRgro"],
      saveGenerate["exaSiptgBgro"]
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
class SncSetup {

}
class SncReset {
  static resetSnc(displayTypeState) {
    /* const sncR = document.querySelector(".plc-y-liptg .snc-r-cptg");
    const sncY = sncR.querySelectorAll(".snc-y"); */
    const {
       sncY
    } = SncGet.getSncGroup();
    /* const sncZettaSiptg = sncR.querySelectorAll(".snc-z-siptg"); */
    const {
      sncZettaSiptg
    } = SncGet.getSncSiptgGroup();
    const eventData = {};
    for (let i = 0; i < sncZettaSiptg.length; i++) {
      if (sncZettaSiptg[i].isActive || sncY[i].isActive) {
        switch (displayTypeState) {
          case 1:
            /* Moblie Display Type */
            eventData.currentTarget = sncZettaSiptg[i];
            SncHandler.mdtSncZettaSiptg(eventData);
            break;
          case 2:
            /* Tablet Display Type */
            eventData.currentTarget = sncZettaSiptg[i];
            SncHandler.tdtSncZettaSiptg(eventData);
            break;
          case 3:
            /* Desktop Display Type */
            eventData.currentTarget = sncZettaSiptg[i];
            eventData.type = "click"; 
            SncHandler.ddtSncZettaSiptg(eventData); 
            eventData.type = "mouseleave"; 
            SncHandler.ddtSncZettaSiptg(eventData);
          default:
            break;
        }
      }
    }
  }
}
export {
  SncAccessor,
  SncController
};
/* DESCRIPTION
 * SncUtility.setTeraBgro.setLeft:
 *   calc(50% - (sourceWidth / 2)px - (buffer / 2)px)
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */