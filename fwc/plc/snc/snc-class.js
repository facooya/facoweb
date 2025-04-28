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
    /* SncManager.addEvent(); */
    SncManager.event(true);
  }
  static processOnResize() {
    SncManager.initOnResize();
    /* SncManager.removeEvent();
    SncManager.addEvent(); */
    SncManager.event(false);
    SncManager.event(true);
  }
}
class SncManager {
  static init() {
    const {
      sncY,
      sncE
    } = SncGet.getSncGroup();
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
    /*  */
    const buffer = 32;
    let isDefaultUpdate = null;
    if (FwaConfig.currentDisplayType !== 3) {
      isDefaultUpdate = true;
    } else {
      isDefaultUpdate = false;
    }
    for (let i = 0; i < sncY.length; i++) {
      const {
        sncGigaTitleEb,
        sncGigaBgroEb
      } = SncGet.getSncEbGroup(i);
      for (let j = 0; j < sncGigaBgroEb.length; j++) {
        SncSetup.setupGigaBgro(
          sncGigaBgroEb[j],
          sncGigaTitleEb[j],
          buffer
        );
        SncUpdate.updateGigaBgroWidth(isDefaultUpdate, sncGigaBgroEb[j]);
      }
    }
  }
  static initOnResize() {
    const {
      sncY
    } = SncGet.getSncGroup();
    let isDefaultUpdate = null;
    if (FwaConfig.currentDisplayType !== 3) {
      isDefaultUpdate = true;
    } else {
      isDefaultUpdate = false;
    }
    for (let i = 0; i < sncY.length; i++) {
      const {
        sncGigaBgroEb
      } = SncGet.getSncEbGroup(i);
      for (let j = 0; j < sncGigaBgroEb.length; j++) {
        SncUpdate.updateGigaBgroWidth(isDefaultUpdate, sncGigaBgroEb[j]);
      }
    }
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
  static event(isActive) {
    const {
      sncY
    } = SncGet.getSncGroup();
    const {
      sncZettaSiptg
    } = SncGet.getSncSiptgGroup();
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
    /*  */
    switch (displayTypeState) {
      case 1: {
        for (let i = 0; i < sncY.length; i++) {
          sncZettaSiptg[i][eventListenerType](
            "click",
            SncHandler.mdtSncZettaSiptg
          );
        }
        break;
      }
      case 2: {
        for (let i = 0; i < sncY.length; i++) {
          sncZettaSiptg[i][eventListenerType](
            "click",
            SncHandler.tdtSncZettaSiptg
          );
        }
        break;
      }
      case 3: {
        for (let i = 0; i < sncY.length; i++) {
          sncZettaSiptg[i][eventListenerType](
            "mouseenter",
            SncHandler.ddtSncZettaSiptg
          );
          sncZettaSiptg[i][eventListenerType](
            "mouseleave",
            SncHandler.ddtSncZettaSiptg
          );
          sncZettaSiptg[i][eventListenerType](
            "click",
            SncHandler.ddtSncZettaSiptg
          );
          const {
            sncPetaEb
          } = SncGet.getSncEbGroup(i);
          for (let j = 0; j < sncPetaEb.length; j++) {
            sncPetaEb[j][eventListenerType](
              "mouseenter",
              SncHandler.ddtSncPeta
            );
            sncPetaEb[j][eventListenerType](
              "mouseleave",
              SncHandler.ddtSncPeta
            );
          }
        }
        break;
      }
    }
  }
 /*  static addEvent() {
    const {
      sncY
    } = SncGet.getSncGroup();
    const {
      sncZettaSiptg
    } = SncGet.getSncSiptgGroup();
    for (let i = 0; i < sncY.length; i++) {
      /* Init 
      /* ========== FwaConfig.currentDisplayType ========== 
      switch(FwaConfig.currentDisplayType) {
        case 1: {
          /* Mobile Display Type 
          /* Snc Zetta 
          sncZettaSiptg[i].addEventListener(
            "click",
            SncHandler.mdtSncZettaSiptg
          );
          break;
        }
        case 2: {
          /* Tablet Display Type 
          /* Snc Zetta 
          sncZettaSiptg[i].addEventListener(
            "click",
            SncHandler.tdtSncZettaSiptg
          );
          break;
        }
        case 3: {
          /* Desktop Display Type 
          /* Snc Zetta 
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
          /* Snc Peta 
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
      /* ============================== 
    }
  }
  static removeEvent() {
    const {
      sncY
    } = SncGet.getSncGroup();
    const {
      sncZettaSiptg
    } = SncGet.getSncSiptgGroup();
    for (let i = 0; i < sncY.length; i++) {
      /* ========== FwaConfig.previousDisplayType ========== 
      switch (FwaConfig.previousDisplayType) {
        case 1: {
          /* Mobile Display Type 
          sncZettaSiptg[i].removeEventListener(
            "click",
            SncHandler.mdtSncZettaSiptg
          );
          break;
        }
        case 2: {
          /* Tablet Display Type 
          sncZettaSiptg[i].removeEventListener(
            "click",
            SncHandler.tdtSncZettaSiptg
          );
          break;
        }
        case 3: {
          /* Desktop Display Type 
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
      /* ============================== 
    }
  } */
}
class SncHandler {
  static mdtSncZettaSiptg(eventData) {
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
    /*  */
    let isActive = null;
    let type = "";
    let exaSize = null;
    if (!sncY[targetIndex].isActive) {
      isActive = true;
      type = "add";
      exaSize = 4;
    } else {
      isActive = false;
      type = "remove";
      exaSize = 0;
    }
    /*  */
    sncY[targetIndex].classList[type]("cl-mdt-snc-z-siptg-handler");
    sncExaSiptgTitle[targetIndex].classList[type]("cl-mdt-snc-z-siptg-handler");
    sncExaSiptgRgro[targetIndex].classList[type]("cl-mdt-snc-z-siptg-handler");
    sncExaSiptgBgro[targetIndex].classList[type]("cl-mdt-snc-z-siptg-handler");
    SncSet.setExa(sncE[targetIndex], sncTeraEb, exaSize);
    for (let i = 0; i < sncTeraEb.length; i++) {
      sncTeraEb[i].classList[type]("cl-mdt-snc-z-siptg-handler");
    }
    /*  */
    sncY[targetIndex].isActive = isActive;
    /* ********** Snc Zetta Bpt ********** */
    /* if (!sncY[targetIndex].isActive) { */
      /* ========== Activate ========== */
      /* Set Yotta */
      /* sncY[targetIndex].style.backgroundColor = "#333333"; */
      /* Set Zetta Bpt */
      /* sncExaSiptgTitle[targetIndex].style.fontWeight = "700";
      sncExaSiptgRgro[targetIndex].style.transform = "rotate(180deg)";
      sncExaSiptgBgro[targetIndex].style.left = "15%";
      sncExaSiptgBgro[targetIndex].style.width = "70%"; */
      /* Set Exa */
      /* SncSet.setExa(sncE[targetIndex], sncTeraEb, 4); */
      /* Set Tera */
      /* for (let i = 0; i < sncTeraEb.length; i++) {
        sncTeraEb[i].style.opacity = "1";
        SncSet.setGigaBgro(
          sncGigaBgroEb[i],
          sncGigaTitleEb[i],
          20
        );
      } */
      /* Set Flag */
      /* sncY[targetIndex].isActive = true; */
      /* ============================== */
    /* } else { */
      /* ========== Deactivate ========== */
      /* Set Yotta */
      /* sncY[targetIndex].style.backgroundColor = "#222222"; */
      /* Set Zetta Siptg */
      /* sncExaSiptgTitle[targetIndex].style.fontWeight = "";
      sncExaSiptgRgro[targetIndex].style.transform = "";
      sncExaSiptgBgro[targetIndex].style.left = "";
      sncExaSiptgBgro[targetIndex].style.width = ""; */
      /* Set Exa */
      /* SncSet.setExa(sncE[targetIndex], sncTeraEb, 0); */
      /* Set Tera */
      /* for (let i = 0; i < sncTeraEb.length; i++) {
        sncTeraEb[i].style.opacity = "";
        sncGigaBgroEb[i].style.left = "";
        sncGigaBgroEb[i].style.width = "";
      } */
      /* Set Flag */
      /* sncY[targetIndex].isActive = false; */
      /* ============================== */
    /* } */
    /* ****************************** */
  }
  static tdtSncZettaSiptg(eventData) {
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
    /*  */
    let isActive = null;
    let type = "";
    let exaSize = null;
    if (!sncY[targetIndex].isActive) {
      isActive = true;
      type = "add";
      exaSize = 4;
    } else {
      isActive = false;
      type = "remove";
      exaSize = 0;
    }
    /*  */
    sncY[targetIndex].classList[type]("cl-tdt-snc-z-siptg-handler");
    sncExaSiptgTitle[targetIndex].classList[type]("cl-tdt-snc-z-siptg-handler");
    sncExaSiptgRgro[targetIndex].classList[type]("cl-tdt-snc-z-siptg-handler");
    sncExaSiptgBgro[targetIndex].classList[type]("cl-tdt-snc-z-siptg-handler");
    SncSet.setExa(sncE[targetIndex], sncTeraEb, exaSize);
    for (let i = 0; i < sncTeraEb.length; i++) {
      sncTeraEb[i].classList[type]("cl-tdt-snc-z-siptg-handler");
    }
    /*  */
    sncY[targetIndex].isActive = isActive;
    /*  */
    /* if (!sncY[targetIndex].isActive) {
      /* ========== Activate ========== 
      /* Set Yotta 
      sncY[targetIndex].style.backgroundColor = "#333333";
      /* Set Zetta Bpt 
      sncExaSiptgTitle[targetIndex].style.fontWeight = "700";
      sncExaSiptgRgro[targetIndex].style.transform = "rotate(180deg)";
      sncExaSiptgBgro[targetIndex].style.left = "15%";
      sncExaSiptgBgro[targetIndex].style.width = "70%";
      /* Set Exa 
      SncSet.setExa(sncE[targetIndex], sncTeraEb, 4);
      /* Set Tera 
      for (let i = 0; i < sncTeraEb.length; i++) {
        sncTeraEb[i].style.opacity = "1";
        SncSet.setGigaBgro(
          sncGigaBgroEb[i],
          sncGigaTitleEb[i],
          20
        );
      }
      /* Set Flag 
      sncY[targetIndex].isActive = true;
      /* ============================== 
    } else {
      /* ========== Deactivate ========== 
      /* Set Yotta 
      sncY[targetIndex].style.backgroundColor = "#222222";
      /* Set Zetta Siptg 
      sncExaSiptgTitle[targetIndex].style.fontWeight = "";
      sncExaSiptgRgro[targetIndex].style.transform = "";
      sncExaSiptgBgro[targetIndex].style.left = "";
      sncExaSiptgBgro[targetIndex].style.width = "";
      /* Set Exa 
      SncSet.setExa(sncE[targetIndex], sncTeraEb, 0);
      /* Set Tera 
      for (let i = 0; i < sncTeraEb.length; i++) {
        sncTeraEb[i].style.opacity = "";
        sncGigaBgroEb[i].style.left = "";
        sncGigaBgroEb[i].style.width = "";
      }
      /* Set Flag 
      sncY[targetIndex].isActive = false;
      /* ============================== 
    } */
  }
  static ddtSncZettaSiptg(eventData) {
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
    const {
      sncTeraEb,
      sncGigaTitleEb
    } = SncGet.getSncEbGroup(targetIndex);
    /*  */
    let isActive = null;
    let type = "";
    let typeHover = "";
    let exaSize = null;
    if (!sncY[targetIndex].isActive) {
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
      sncExaSiptgTitle[targetIndex].classList[typeHover]("cl-ddt-snc-z-siptg-handler");
      sncExaSiptgRgro[targetIndex].classList[typeHover]("cl-ddt-snc-z-siptg-handler");
      sncExaSiptgBgro[targetIndex].classList[typeHover]("cl-ddt-snc-z-siptg-handler");
    } else if (eventType === "click") {
      sncY[targetIndex].classList[type]("cl-ddt-snc-z-siptg-handler-click");
      sncExaSiptgRgro[targetIndex].classList[type]("cl-ddt-snc-z-siptg-handler-click");
      SncSet.setExa(sncE[targetIndex], sncGigaTitleEb, exaSize);
      for (let i = 0; i < sncTeraEb.length; i++) {
        sncTeraEb[i].classList[type]("cl-ddt-snc-z-siptg-handler-click");
      }
      sncY[targetIndex].isActive = isActive;
    }
    /*  */
    /*switch (eventType) {
      /* case "mouseenter": {
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
        /* const {
          sncTeraEb,
          sncGigaTitleEb
        } = SncGet.getSncEbGroup(targetIndex); 
        if (!sncY[targetIndex].isActive) {
          /* Activate 
          sncY[targetIndex].style.backgroundColor = "#333333";
          sncExaSiptgRgro[targetIndex].style.transform = "rotate(540deg)";
          SncSet.setExa(sncE[targetIndex], sncGigaTitleEb, 4);
          for (let i = 0; i < sncTeraEb.length; i++) {
            sncTeraEb[i].style.opacity = "1";
          }
          sncY[targetIndex].isActive = true;
        } else {
          /* Deactivate 
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
    }*/
  }
  static ddtSncPeta(eventData) {
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
    sncGigaTitleEb[eventIndex].classList[type]("cl-ddt-snc-p-handler");
    sncGigaRgroEb[eventIndex].classList[type]("cl-ddt-snc-p-handler");
    SncUpdate.updateGigaBgroWidth(isActive, sncGigaBgroEb[eventIndex]);
    /*  */
    /* switch (eventType) {
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
    } */
  }
}
class SncGet {
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
class SncUpdate {
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
class SncSetup {
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
class SncReset {
  static resetSnc(displayTypeState) {
    const {
       sncY
    } = SncGet.getSncGroup();
    const {
      sncZettaSiptg
    } = SncGet.getSncSiptgGroup();
    const eventData = {};
    for (let i = 0; i < sncZettaSiptg.length; i++) {
      if (sncY[i].isActive) {
        switch (displayTypeState) {
          case 1: {
            /* Moblie Display Type */
            eventData.currentTarget = sncZettaSiptg[i];
            SncHandler.mdtSncZettaSiptg(eventData);
            break;
          }
          case 2: {
            /* Tablet Display Type */
            eventData.currentTarget = sncZettaSiptg[i];
            SncHandler.tdtSncZettaSiptg(eventData);
            break;
          }
          case 3: {
            /* Desktop Display Type */
            eventData.currentTarget = sncZettaSiptg[i];
            eventData.type = "click"; 
            SncHandler.ddtSncZettaSiptg(eventData); 
            eventData.type = "mouseleave"; 
            SncHandler.ddtSncZettaSiptg(eventData);
            break;
          }
        }
      }
    }
  }
}
export {
  SncAccessor,
  SncController
};
/* NOTE
 * SncUtility.setTeraBgro.setLeft:
 *   calc(50% - (sourceWidth / 2)px - (buffer / 2)px)
 */
/* AUTHORSHIP
 * Founder: Facooya
 */