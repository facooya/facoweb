/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  FwaConfig
} from "../../../fwa/fwa-config.js";
import {
  FwcUtility
} from "../../fwc-hub.js";
import {
  SncConfig
} from "./snc-config.js";
class SncController {
  static isActiveSnc = false;

  static process() {
    SncManager.generate();
    SncManager.setupProcess();
  }
  static loadProcess() {
    SncManager.addEvent();
  }
  static resizeProcess() {
    SncManager.removeEvent();
    SncManager.addEvent();
  }
  static accessResetSnc(displayTypeState) {
    SncUtility.resetSnc(displayTypeState);
  }
}
class SncManager {
  static generate() {
    const sncR = document.querySelector(".plc-y-liptg .snc-r-cptg");

    let selectorData = "snc-y-sdo";
    const yottaSdo = FwcUtility.getGenerateElement("div", selectorData);
    /* Element: snc-y */
    for (let i = 0; i < SncConfig.exaSiptgTitleRS.length; i++) {
      selectorData = "snc-y";
      const yotta = FwcUtility.getGenerateElement("ul", selectorData);
      /* Element: snc-z-siptg */
      selectorData = "snc-z-siptg";
      const zettaSiptg = FwcUtility.getGenerateElement("li", selectorData);
      /* Element: snc-e-siptg-title */
      selectorData = "snc-e-siptg-title";
      const exaSiptgTitle = FwcUtility.getGenerateElement("div", selectorData);
      exaSiptgTitle.textContent = SncConfig.exaSiptgTitleRS[i];
      /* Element: snc-e-siptg-rgro */
      selectorData = "snc-e-siptg-rgro";
      const exaSiptgRgro = FwcUtility.getGenerateElement("div", selectorData);
      /* Element: snc-e-siptg-bgro */
      selectorData = "snc-e-siptg-bgro";
      const exaSiptgBgro = FwcUtility.getGenerateElement("div", selectorData);
      /* - - - - - */
      /* Element: snc-z */
      selectorData = "snc-z";
      const zetta = FwcUtility.getGenerateElement("li", selectorData);
      /* Element: snc-e */
      selectorData = "snc-e";
      const exa = FwcUtility.getGenerateElement("ul", selectorData);
      /* Element: snc-p */
      for (let j = 0; j < SncConfig.gigaTitleRS[i].length; j++) {
        selectorData = "snc-p";
        const peta = FwcUtility.getGenerateElement("li", selectorData);
        /* Element: snc-t */
        selectorData = "snc-t";
        const tera = FwcUtility.getGenerateElement("a", selectorData);
        tera.setAttribute("href", SncConfig.teraHrefRS[i][j]);
        /* Element: snc-g-title */
        selectorData = "snc-g-title";
        const gigaTitle = FwcUtility.getGenerateElement("div", selectorData);
        gigaTitle.textContent = SncConfig.gigaTitleRS[i][j];
        /* Element: snc-g-rgro */
        selectorData = "snc-g-rgro";
        const gigaRgro = FwcUtility.getGenerateElement("div", selectorData);
        /* Element: snc-t-bgro */
        selectorData = "snc-g-bgro";
        const gigaBgro = FwcUtility.getGenerateElement("div", selectorData);
        /* Compile: tera, peta, exa */
        tera.appendChild(gigaTitle);
        tera.appendChild(gigaRgro);
        tera.appendChild(gigaBgro);
        peta.appendChild(tera);
        exa.appendChild(peta);
      }
      /* Compile: zetta, zettaSiptg, yotta, sncR */
      zetta.appendChild(exa);
      zettaSiptg.appendChild(exaSiptgTitle);
      zettaSiptg.appendChild(exaSiptgRgro);
      zettaSiptg.appendChild(exaSiptgBgro);
      yotta.appendChild(zettaSiptg);
      yotta.appendChild(zetta);
      sncR.appendChild(yotta);
    }
    /* Compile: sncR */
    sncR.appendChild(yottaSdo);
  }
  static setupProcess() {
    const sncR = document.querySelector(".plc-y-liptg .snc-r-cptg");
    const sncY = sncR.querySelectorAll(".snc-y");
    const sncZettaSiptg = sncR.querySelectorAll(".snc-z-siptg");
    const sncE = sncR.querySelectorAll(".snc-e");
    for (let i = 0; i < sncE.length; i++) {
      const sncPetaEB = sncE[i].querySelectorAll(".snc-p");
      SncUtility.setExa(sncE[i], sncPetaEB, 0);
      sncZettaSiptg[i].index = i;
      sncZettaSiptg[i].isActive = false;
      /* !!!!! v1.1.14a [replace] (sncZettaSiptg.isActive -> sncY.isActive) !!!!! */
      sncY[i].isActive = false;
    }
  }
  static addEvent() {
    const sncR = document.querySelector(".plc-y-liptg .snc-r-cptg");
    const sncY = sncR.querySelectorAll(".snc-y");
    const sncZ = sncR.querySelectorAll(".snc-z");
    const sncZettaSiptg = sncR.querySelectorAll(".snc-z-siptg");
    const sncE = sncR.querySelectorAll(".snc-e");
    for (let i = 0; i < sncY.length; i++) {
      /* Init */
      sncZettaSiptg[i].isActive = false;
      /* ========== FwaConfig.currentDisplayType ========== */
      switch(FwaConfig.currentDisplayType) {
        case 1:
          /* Mobile Display Type */
          /* Snc Zetta */
          sncZettaSiptg[i].addEventListener(
            "click",
            SncHandler.mdtSncZettaSiptg
          );
          break;
        case 2:
          /* Tablet Display Type */
          /* Snc Zetta */
          sncZettaSiptg[i].addEventListener(
            "click",
            SncHandler.tdtSncZettaSiptg
          );
          break;
        case 3:
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
          const sncPetaEB = sncE[i].querySelectorAll(".snc-p");
          for (let j = 0; j < sncPetaEB.length; j++) {
            sncPetaEB[j].addEventListener(
              "mouseenter",
              SncHandler.ddtSncPeta
            );
            sncPetaEB[j].addEventListener(
              "mouseleave",
              SncHandler.ddtSncPeta
            );
          }
          break;
        default:
          /* Display Type Error */
          /* TODO: Error */
          break;
      }
      /* ============================== */
    }
  }
  static removeEvent() {
    const sncR = document.querySelector(".plc-y-liptg .snc-r-cptg");
    const sncY = sncR.querySelectorAll(".snc-y");
    const sncZ = sncR.querySelectorAll(".snc-z");
    const sncZettaSiptg = sncR.querySelectorAll(".snc-z-siptg");
    const sncE = sncR.querySelectorAll(".snc-e");
    for (let i = 0; i < sncY.length; i++) {
      /* ========== FwaConfig.previousDisplayType ========== */
      switch (FwaConfig.previousDisplayType) {
        case 1:
          /* Mobile Display Type */
          sncZettaSiptg[i].removeEventListener(
            "click",
            SncHandler.mdtSncZettaSiptg
          );
          break;
        case 2:
          /* Tablet Display Type */
          sncZettaSiptg[i].removeEventListener(
            "click",
            SncHandler.tdtSncZettaSiptg
          );
          break;
        case 3:
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
          const sncPetaEB = sncE[i].querySelectorAll(".snc-p");
          for (let j = 0; j < sncPetaEB.length; j++) {
            sncPetaEB[j].removeEventListener(
              "mouseenter",
              SncHandler.ddtSncPeta
            );
            sncPetaEB[j].removeEventListener(
              "mouseleave",
              SncHandler.ddtSncPeta
            ); 
          }
          break;
        default:
          /* Display Type Error */
          break;
      }
      /* ============================== */
      sncZettaSiptg[i].isActive = false;/* !!!!!!! */
    }
  }
}
class SncHandler {
  static mdtSncZettaSiptg(event) {
    const eCurrentTarget = event.currentTarget;
    const idx = eCurrentTarget.index;

    const sncR = document.querySelector(".plc-y-liptg .snc-r-cptg");
    const sncY = sncR.querySelectorAll(".snc-y");
    const sncExaEB = sncY[idx].querySelector(".snc-e");
    /* Exa Siptg */
    const sncExaSiptgTitleZB = sncY[idx].querySelector(".snc-e-siptg-title");
    const sncExaSiptgRgroZB = sncY[idx].querySelector(".snc-e-siptg-rgro");
    const sncExaSiptgBgroZB = sncY[idx].querySelector(".snc-e-siptg-bgro");
    /* Tera, Giga */
    const sncTeraEB = sncExaEB.querySelectorAll(".snc-t");
    const sncGigaTitleEB = sncExaEB.querySelectorAll(".snc-g-title");
    const sncGigaBgroEB = sncExaEB.querySelectorAll(".snc-g-bgro");

    /* ********** Snc Zetta Bpt ********** */
    if (!eCurrentTarget.isActive) {
      /* ========== Activate ========== */
      /* Set Yotta */
      sncY[idx].style.backgroundColor = "#333333";
      /* Set Zetta Bpt */
      sncExaSiptgTitleZB.style.fontWeight = "700";
      sncExaSiptgRgroZB.style.transform = "rotate(180deg)";
      sncExaSiptgBgroZB.style.left = "15%";
      sncExaSiptgBgroZB.style.width = "70%";
      /* Set Exa */
      SncUtility.setExa(sncExaEB, sncTeraEB, 4);
      /* Set Tera */
      for (let i = 0; i < sncTeraEB.length; i++) {
        sncTeraEB[i].style.opacity = "1";
        SncUtility.setGigaBgro(
          sncGigaBgroEB[i],
          sncGigaTitleEB[i],
          20
        );
      }
      /* Set Flag */
      eCurrentTarget.isActive = true;
      /* ============================== */
    } else {
      /* ========== Deactivate ========== */
      /* Set Yotta */
      sncY[idx].style.backgroundColor = "#222222";
      /* Set Zetta Siptg */
      sncExaSiptgTitleZB.style.fontWeight = "";
      sncExaSiptgRgroZB.style.transform = "";
      sncExaSiptgBgroZB.style.left = "";
      sncExaSiptgBgroZB.style.width = "";
      /* Set Exa */
      SncUtility.setExa(sncExaEB, sncTeraEB, 0);
      /* Set Tera */
      for (let i = 0; i < sncTeraEB.length; i++) {
        sncTeraEB[i].style.opacity = "";
        sncGigaBgroEB[i].style.left = "";
        sncGigaBgroEB[i].style.width = "";
      }
      /* Set Flag */
      eCurrentTarget.isActive = false;
      /* ============================== */
    }
    /* ****************************** */
  }
  static tdtSncZettaSiptg(event) {
    const eCurrentTarget = event.currentTarget;
    const eIndex = eCurrentTarget.index;

    const sncR = document.querySelector(".plc-y-liptg .snc-r-cptg");
    const sncY = sncR.querySelectorAll(".snc-y");
    const sncExaEB = sncY[eIndex].querySelector(".snc-e");
    /* Exa Siptg */
    const sncExaSiptgTitleEB = sncY[eIndex].querySelector(".snc-e-siptg-title");
    const sncExaSiptgRgroEB = sncY[eIndex].querySelector(".snc-e-siptg-rgro");
    const sncExaSiptgBgroEB = sncY[eIndex].querySelector(".snc-e-siptg-bgro");
    /* Tera, Giga */
    const sncTeraEB = sncExaEB.querySelectorAll(".snc-t");
    const sncGigaTitleEB = sncExaEB.querySelectorAll(".snc-g-title");
    const sncGigaBgroEB = sncExaEB.querySelectorAll(".snc-g-bgro");

    if (!eCurrentTarget.isActive) {
      /* ========== Activate ========== */
      /* Set Yotta */
      sncY[eIndex].style.backgroundColor = "#333333";
      /* Set Zetta Bpt */
      sncExaSiptgTitleEB.style.fontWeight = "700";
      sncExaSiptgRgroEB.style.transform = "rotate(180deg)";
      sncExaSiptgBgroEB.style.left = "15%";
      sncExaSiptgBgroEB.style.width = "70%";
      /* Set Exa */
      SncUtility.setExa(sncExaEB, sncTeraEB, 4);
      /* Set Tera */
      for (let i = 0; i < sncTeraEB.length; i++) {
        sncTeraEB[i].style.opacity = "1";
        SncUtility.setGigaBgro(
          sncGigaBgroEB[i],
          sncGigaTitleEB[i],
          20
        );
      }
      /* Set Flag */
      eCurrentTarget.isActive = true;
      /* ============================== */
    } else {
      /* ========== Deactivate ========== */
      /* Set Yotta */
      sncY[eIndex].style.backgroundColor = "#222222";
      /* Set Zetta Siptg */
      sncExaSiptgTitleEB.style.fontWeight = "";
      sncExaSiptgRgroEB.style.transform = "";
      sncExaSiptgBgroEB.style.left = "";
      sncExaSiptgBgroEB.style.width = "";
      /* Set Exa */
      SncUtility.setExa(sncExaEB, sncTeraEB, 0);
      /* Set Tera */
      for (let i = 0; i < sncTeraEB.length; i++) {
        sncTeraEB[i].style.opacity = "";
        sncGigaBgroEB[i].style.left = "";
        sncGigaBgroEB[i].style.width = "";
      }
      /* Set Flag */
      eCurrentTarget.isActive = false;
      /* ============================== */
    }
  }
  static ddtSncZettaSiptg(event) {
    const eType = event.type;
    const eCurrentTarget = event.currentTarget;
    const eIndex = eCurrentTarget.index;

    const sncR = document.querySelector(".plc-y-liptg .snc-r-cptg");
    const sncY = sncR.querySelectorAll(".snc-y");
    /* Exa Siptg */
    const sncExaSiptgTitleEB = sncY[eIndex].querySelector(".snc-e-siptg-title");
    const sncExaSiptgRgroEB = sncY[eIndex].querySelector(".snc-e-siptg-rgro");
    const sncExaSiptgBgroEB = sncY[eIndex].querySelector(".snc-e-siptg-bgro");

    switch (eType) {
      case "mouseenter": {
        if (!sncY[eIndex].isActive) {
          sncExaSiptgTitleEB.style.fontWeight = "700";
          sncExaSiptgRgroEB.style.margin = "0rem 2.5rem 0rem 0rem";
          sncExaSiptgRgroEB.style.borderTop = "0.5rem solid #FFFFFF";
          sncExaSiptgRgroEB.style.borderRight = "0.4rem solid #00000000";
          sncExaSiptgRgroEB.style.borderLeft = "0.4rem solid #00000000";
          sncExaSiptgRgroEB.style.transform = "rotate(360deg)";
          sncExaSiptgBgroEB.style.left = "10%";
          sncExaSiptgBgroEB.style.width = "80%";
        }
        break;
      }
      case "mouseleave": {
        if (!sncY[eIndex].isActive) {
          sncExaSiptgTitleEB.style.fontWeight = "";
          sncExaSiptgRgroEB.style.margin = "";
          sncExaSiptgRgroEB.style.borderTop = "";
          sncExaSiptgRgroEB.style.borderRight = "";
          sncExaSiptgRgroEB.style.borderLeft = "";
          sncExaSiptgRgroEB.style.transform = "";
          sncExaSiptgBgroEB.style.left = "";
          sncExaSiptgBgroEB.style.width = "";
        }
        break;
      }
      case "click": {
        const sncExaEB = sncY[eIndex].querySelector(".snc-e");
        const sncGigaTilteEB = sncExaEB.querySelectorAll(".snc-g-title");
        const sncTeraEB = sncExaEB.querySelectorAll(".snc-t");
        if (!sncY[eIndex].isActive) {
          /* Activate */
          sncY[eIndex].style.backgroundColor = "#333333";
          sncExaSiptgRgroEB.style.transform = "rotate(540deg)";
          SncUtility.setExa(sncExaEB, sncGigaTilteEB, 4);
          for (let i = 0; i < sncTeraEB.length; i++) {
            sncTeraEB[i].style.opacity = "1";
          }
          sncY[eIndex].isActive = true;
        } else {
          /* Deactivate */
          sncY[eIndex].style.backgroundColor = "#222222";
          sncExaSiptgRgroEB.style.transform = "rotate(360deg)";
          SncUtility.setExa(sncExaEB, sncGigaTilteEB, 0);
          for (let i = 0; i < sncTeraEB.length; i++) {
            sncTeraEB[i].style.opacity = "";
          }
          sncY[eIndex].isActive = false;
        }
        break;
      }
    }
  }
  static ddtSncPeta(event) {
    const eType = event.type;
    const eCurrentTarget = event.currentTarget;

    const sncGigaTitleGB = eCurrentTarget.querySelector(".snc-g-title");
    const sncGigaBgroGB = eCurrentTarget.querySelector(".snc-g-bgro");
    const sncGigaRgroGB = eCurrentTarget.querySelector(".snc-g-rgro");

    switch (eType) {
      case "mouseenter": {
        sncGigaTitleGB.style.fontWeight = "700";
        sncGigaRgroGB.style.margin = "0rem 0rem 0rem 1rem";
        sncGigaRgroGB.style.borderTop = "0.25rem solid #00000000";
        sncGigaRgroGB.style.borderBottom = "0.25rem solid #00000000";
        sncGigaRgroGB.style.borderLeft = "0.5rem solid #FFFFFF";
        sncGigaRgroGB.style.opacity = "1";

        SncUtility.setGigaBgro(sncGigaBgroGB, sncGigaTitleGB, 32);
        break;
      }
      case "mouseleave": {
        sncGigaTitleGB.style.fontWeight = "";
        sncGigaRgroGB.style.margin = "";
        sncGigaRgroGB.style.borderTop = "";
        sncGigaRgroGB.style.borderBottom = "";
        sncGigaRgroGB.style.borderLeft = "";
        sncGigaRgroGB.style.opacity = "";

        sncGigaBgroGB.style.width = "0%";
        break;
      }
    }
  }
}
class SncUtility {
  /* static getGenerateElement(elementType, setClass) { !!! v1.1.14a [del] (move to FwcUtility)
    const elementData = document.createElement(elementType);
    elementData.setAttribute("class", setClass);
    return elementData;
  } */
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
  /* !!! v1.1.14a [del] (replaced)
    getGridTemplate(referElement, size) {
    let gridTemplateData = "";
    for (let i = 0; i < referElement.length; i++) {
      gridTemplateData += size + "rem" + " ";
    }
    return gridTemplateData;
  } */
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
  SncController,
  SncManager,
  SncHandler,
  SncUtility
};
/* DESCRIPTION
 * SncUtility.setTeraBgro.setLeft:
 *   calc(50% - (sourceWidth / 2)px - (buffer / 2)px)
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */