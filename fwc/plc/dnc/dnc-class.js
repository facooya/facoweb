/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  FwaConfig
} from "../../../fwa/fwa-config.js";
import {
  FwcUtility,
  TpncController,
  SncController
} from "../../fwc-hub.js";
import {
  DncConfig
} from "./dnc-config.js";
class DncController {
  static isActiveDnc = false;

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
  static accessResetDnc(displayTypeState) {
    DncUtility.resetDnc(displayTypeState);
  }
}
class DncManager {
  static init() {
    const dncR = document.querySelector(".plc-y-liptg .dnc-r-bptg");
    const dncY = dncR.querySelectorAll(".dnc-y");
    const dncZettaAlptg = dncR.querySelectorAll(".dnc-z-alptg");
    const dncE = dncR.querySelectorAll(".dnc-e");
    for (let i = 0; i < dncE.length; i++) {
      const dncPetaEB = dncE[i].querySelectorAll(".dnc-p");
      DncUtility.setExa(dncE[i], dncPetaEB, 0);
      dncY[i].isActive = false;
      dncY[i].index = i;
      dncZettaAlptg[i].index = i;
    }
  }
  static initOnLoad() {

  }
  static initOnResize() {
    const displayTypeState = FwaConfig.previousDisplayType;
    DncUtility.resetDnc(displayTypeState);
  }
  static generate() {
    const dncR = document.querySelector(".plc-y-liptg .dnc-r-bptg");

    let selectorData = "dnc-y-sdo";
    const yottaSdo = FwcUtility.getGenerateElement("div", selectorData);
    /* Element: dnc-y */
    for (let i = 0; i < DncConfig.exaAlptgTitleRS.length; i++) {
      selectorData = "dnc-y";
      const yotta = FwcUtility.getGenerateElement("ul", selectorData);
      /* Element: dnc-z-alptg */
      selectorData = "dnc-z-alptg";
      const zettaAlptg = FwcUtility.getGenerateElement("li", selectorData);
      /* Element: dnc-e-alptg-title */
      selectorData = "dnc-e-alptg-title";
      const exaAlptgTitle = FwcUtility.getGenerateElement("div", selectorData);
      exaAlptgTitle.textContent = DncConfig.exaAlptgTitleRS[i];
      /* Element: dnc-e-alptg-rgro */
      selectorData = "dnc-e-alptg-rgro";
      const exaAlptgRgro = FwcUtility.getGenerateElement("div", selectorData);
      /* Element: dnc-e-alptg-bgro */
      selectorData = "dnc-e-alptg-bgro";
      const exaAlptgBgro = FwcUtility.getGenerateElement("div", selectorData);
      /* - - - - - */
      /* Element: dnc-z */
      selectorData = "dnc-z";
      const zetta = FwcUtility.getGenerateElement("li", selectorData);
      /* Element: dnc-e */
      selectorData = "dnc-e";
      const exa = FwcUtility.getGenerateElement("ul", selectorData);
      /* Element: dnc-p */
      for (let j = 0; j < DncConfig.gigaTitleRS[i].length; j++) {
        selectorData = "dnc-p";
        const peta = FwcUtility.getGenerateElement("li", selectorData);
        /* Element: dnc-t */
        selectorData = "dnc-t";
        const tera = FwcUtility.getGenerateElement("a", selectorData);
        tera.setAttribute("href", DncConfig.teraHrefRS[i][j]);
        /* Element: dnc-g-title */
        selectorData = "dnc-g-title";
        const gigaTitle = FwcUtility.getGenerateElement("div", selectorData);
        gigaTitle.textContent = DncConfig.gigaTitleRS[i][j];
        /* Element: dnc-g-rgro */
        selectorData = "dnc-g-rgro";
        const gigaRgro = FwcUtility.getGenerateElement("div", selectorData);
        /* Element: dnc-t-bgro */
        selectorData = "dnc-g-bgro";
        const gigaBgro = FwcUtility.getGenerateElement("div", selectorData);
        /* Compile: tera, peta, exa */
        tera.appendChild(gigaTitle);
        tera.appendChild(gigaRgro);
        tera.appendChild(gigaBgro);
        peta.appendChild(tera);
        exa.appendChild(peta);
      }
      /* Compile: zetta, zettaAlptg, yotta, dncR */
      zetta.appendChild(exa);
      zettaAlptg.appendChild(exaAlptgTitle);
      zettaAlptg.appendChild(exaAlptgRgro);
      zettaAlptg.appendChild(exaAlptgBgro);
      yotta.appendChild(zettaAlptg);
      yotta.appendChild(zetta);
      dncR.appendChild(yotta);
    }
    /* Compile: dncR */
    dncR.appendChild(yottaSdo);
  }
  static addEvent() {
    const dncR = document.querySelector(".plc-y-liptg .dnc-r-bptg");
    const dncY = dncR.querySelectorAll(".dnc-y");
    const dncZ = dncR.querySelectorAll(".dnc-z");
    const dncZettaAlptg = dncR.querySelectorAll(".dnc-z-alptg");
    const dncE = dncR.querySelectorAll(".dnc-e");
    for (let i = 0; i < dncY.length; i++) {
      /* Init */
      dncY[i].isActive = false;
      /* ========== FwaConfig.currentDisplayType ========== */
      switch(FwaConfig.currentDisplayType) {
        case 1:
          /* Mobile Display Type */
          /* Dnc Zetta Alptg */
          dncZettaAlptg[i].addEventListener(
            "click",
            DncHandler.mdtDncZettaAlptg
          );
          break;
        case 2:
          /* Tablet Display Type */
          /* Dnc Zetta Alptg */
          dncZettaAlptg[i].addEventListener(
            "click",
            DncHandler.tdtDncZettaAlptg
          );
          break;
        case 3:
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
          const dncPetaEB = dncE[i].querySelectorAll(".dnc-p");
          for (let j = 0; j < dncPetaEB.length; j++) {
            dncPetaEB[j].addEventListener(
              "mouseenter",
              DncHandler.ddtDncPeta
            );
            dncPetaEB[j].addEventListener(
              "mouseleave",
              DncHandler.ddtDncPeta
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
    const dncR = document.querySelector(".plc-y-liptg .dnc-r-bptg");
    const dncY = dncR.querySelectorAll(".dnc-y");
    const dncZ = dncR.querySelectorAll(".dnc-z");
    const dncZettaAlptg = dncR.querySelectorAll(".dnc-z-alptg");
    const dncE = dncR.querySelectorAll(".dnc-e");
    for (let i = 0; i < dncY.length; i++) {
      /* ========== FwaConfig.previousDisplayType ========== */
      switch (FwaConfig.previousDisplayType) {
        case 1:
          /* Mobile Display Type */
          dncZettaAlptg[i].removeEventListener(
            "click",
            DncHandler.mdtDncZettaAlptg
          );
          break;
        case 2:
          /* Tablet Display Type */
          dncZettaAlptg[i].removeEventListener(
            "click",
            DncHandler.tdtDncZettaAlptg
          );
          break;
        case 3:
          /* Desktop Display Type */
          dncY[i].removeEventListener(
            "mouseenter",
            DncHandler.ddtDncYotta
          );
          dncY[i].removeEventListener(
            "mouseleave",
            DncHandler.ddtDncYotta
          );
          const dncPetaEB = dncE[i].querySelectorAll(".dnc-p");
          for (let j = 0; j < dncPetaEB.length; j++) {
            dncPetaEB[j].removeEventListener(
              "mouseenter",
              DncHandler.ddtDncPeta
            );
            dncPetaEB[j].removeEventListener(
              "mouseleave",
              DncHandler.ddtDncPeta
            ); 
          }
          break;
        default:
          /* Display Type Error */
          break;
      }
      /* ============================== */
      dncY[i].isActive = false;/* !!!!!!! */
    }
  }
}
class DncHandler {
  static mdtDncZettaAlptg(event) {
    /* =============== Initial: =============== */
    /* I: Event (Dnc Zetta Alptg) */
    const eCurrentTarget = event.currentTarget;
    const eIndex = eCurrentTarget.index;
    /* I: Dnc */
    const dncR = document.querySelector(".plc-y-liptg .dnc-r-bptg");
    const dncY = dncR.querySelectorAll(".dnc-y");
    const dncExaEB = dncY[eIndex].querySelector(".dnc-e");
    /* I: Exa Alptg */
    const dncExaAlptgTitleZB = dncY[eIndex].querySelector(".dnc-e-alptg-title");
    const dncExaAlptgRgroZB = dncY[eIndex].querySelector(".dnc-e-alptg-rgro");
    const dncExaAlptgBgroZB = dncY[eIndex].querySelector(".dnc-e-alptg-bgro");
    /* I: Tera, Giga */
    const dncTeraEB = dncExaEB.querySelectorAll(".dnc-t");
    const dncGigaTitleEB = dncExaEB.querySelectorAll(".dnc-g-title");
    const dncGigaBgroEB = dncExaEB.querySelectorAll(".dnc-g-bgro");
    /* =============== Initial; =============== */
    /* =============== Script: =============== */
    if (!dncY[eIndex].isActive) {
      /* ==========----- Activation: -----========== */
      /* A: Set Yotta */
      dncY[eIndex].style.backgroundColor = "#333333";
      /* A: Set Exa Alptg */
      dncExaAlptgTitleZB.style.fontWeight = "700";
      dncExaAlptgRgroZB.style.transform = "rotate(180deg)";
      dncExaAlptgBgroZB.style.left = "15%";
      dncExaAlptgBgroZB.style.width = "70%";
      /* A: Set Exa */
      DncUtility.setExa(dncExaEB, dncTeraEB, 4);
      /* A: Set Tera */
      for (let i = 0; i < dncTeraEB.length; i++) {
        dncTeraEB[i].style.opacity = "1";
        DncUtility.setGigaBgro(
          dncGigaBgroEB[i],
          dncGigaTitleEB[i],
          20
        );
      }
      /* A: Set Flag */
      dncY[eIndex].isActive = true;
      /* ==========----- Activation; -----========== */
    } else {
      /* ==========----- Deactivation: -----========== */
      /* D: Set Yotta */
      dncY[eIndex].style.backgroundColor = "";
      /* D: Set Zetta Alptg */
      dncExaAlptgTitleZB.style.fontWeight = "";
      dncExaAlptgRgroZB.style.transform = "";
      dncExaAlptgBgroZB.style.left = "";
      dncExaAlptgBgroZB.style.width = "";
      /* D: Set Exa */
      DncUtility.setExa(dncExaEB, dncTeraEB, 0);
      /* D: Set Tera */
      for (let i = 0; i < dncTeraEB.length; i++) {
        dncTeraEB[i].style.opacity = "";
        dncGigaBgroEB[i].style.left = "";
        dncGigaBgroEB[i].style.width = "";
      }
      /* D: Set Flag */
      dncY[eIndex].isActive = false;
      /* ==========----- Deactivation; -----========== */
    }
    /* =============== Script; =============== */
  }
  static tdtDncZettaAlptg(event) {
    /* =============== Initial: =============== */
    /* T.I: Event (Dnc Zetta Alptg) */
    const eCurrentTarget = event.currentTarget;
    const eIndex = eCurrentTarget.index;
    /* T.I: Dnc */
    const dncR = document.querySelector(".plc-y-liptg .dnc-r-bptg");
    const dncY = dncR.querySelectorAll(".dnc-y");
    const dncExaEB = dncY[eIndex].querySelector(".dnc-e");
    /* T.I: Exa Alptg */
    const dncExaAlptgTitleZB = dncY[eIndex].querySelector(".dnc-e-alptg-title");
    const dncExaAlptgRgroZB = dncY[eIndex].querySelector(".dnc-e-alptg-rgro");
    const dncExaAlptgBgroZB = dncY[eIndex].querySelector(".dnc-e-alptg-bgro");
    /* T.I: Tera, Giga */
    const dncTeraEB = dncExaEB.querySelectorAll(".dnc-t");
    const dncGigaTitleEB = dncExaEB.querySelectorAll(".dnc-g-title");
    const dncGigaBgroEB = dncExaEB.querySelectorAll(".dnc-g-bgro");
    /* =============== Initial; =============== */
    /* =============== Script: =============== */
    if (!dncY[eIndex].isActive) {
      /* ==========----- Activation: -----========== */
      /* T.A: Reset */
      /* if (SncController.isActiveSnc) {
        TpncController.accessTpncZettaSnioHandler();
      } */
      if (SncController.isActiveSnc) {
        TpncController.accessTpncZettaSnioHandler();
      }
      /* [ T.S.A: Reset ] {} () */
      DncUtility.resetTdtDncExa(eIndex);
      /* [ T.S.A: Set ] { dncExaAlptg } ( Tag.div ) */
      dncExaAlptgBgroZB.style.left = "10%";
      dncExaAlptgBgroZB.style.width = "80%";
      /* [ T.S.A: Set ] { dncExaEB } ( Tag.ul ) */
      switch (eIndex) {
        case 0:
          dncExaEB.style.left = "0%";
          break;
        case 4:
          dncExaEB.style.right = "0%";
          break;
      }
      dncExaEB.style.width = "18rem";
      DncUtility.setExa(dncExaEB, dncTeraEB, 4);
      /* T.S.A: Set Tera */
      for (let i = 0; i < dncTeraEB.length; i++) {
        dncTeraEB[i].style.opacity = "1";
        DncUtility.setGigaBgro(
          dncGigaBgroEB[i],
          dncGigaTitleEB[i],
          32
        );
      }
      /* !!!!! v1.1.14a [test] () !!!!! */
      /* const nplcR = document.querySelector(".nplc-r-heptg");
      const sncR = document.querySelector(".snc-r-cptg"); */
      /* const testStyle = window.getComputedStyle(nplcR);
      const testStyleRight = testStyle.getPropertyValue("margin-right"); */
      /* const testRight = sncR.getBoundingClientRect().left;
      if (eIndex === 4) {
        dncExaEB.style.right = 20 * 16 + "px";
        console.log(testRight);
      }
      const testStyle = window.getComputedStyle(dncExaEB).right;
      if (parseInt(testStyle) < 336) {
        dncExaEB.style.right = "336px";
      }
      console.log(parseInt(window.getComputedStyle(dncExaEB).right)); */
      /* A: Set Flag */
      dncY[eIndex].isActive = true;
      /* ==========----- Activation; -----========== */
    } else {
      /* ==========----- Deactivation: -----========== */
      /* A: Set Exa Alptg */
      dncExaAlptgBgroZB.style.left = "";
      dncExaAlptgBgroZB.style.width = "";
      /* D: Set Exa */
      dncExaEB.style.width = "";
      DncUtility.setExa(dncExaEB, dncTeraEB, 0);
      /* D: Set Tera */
      for (let i = 0; i < dncTeraEB.length; i++) {
        dncTeraEB[i].style.opacity = "";
        dncGigaBgroEB[i].style.left = "";
        dncGigaBgroEB[i].style.width = "";
      }
      /* D: Set Flag */
      dncY[eIndex].isActive = false;
      /* ==========----- Deactivation; -----========== */
    }
    /* =============== Script; =============== */
  }
  static ddtDncYotta(event) {
    /* const { eType, eCurrentTarget, eIndex } = getEventElement(); */
    const eType = event.type;
    const eCurrentTarget = event.currentTarget;
    const eIndex = eCurrentTarget.index;

    const dncR = document.querySelector(".plc-y-liptg .dnc-r-bptg");
    const dncY = dncR.querySelectorAll(".dnc-y");
    const dncExaEB = dncY[eIndex].querySelector(".dnc-e");
    const dncPetaEB = dncExaEB.querySelectorAll(".dnc-p");
    const dncTeraEB = dncExaEB.querySelectorAll(".dnc-t");

    const dncZettaAlptg = dncY[eIndex].querySelector(".dnc-z-alptg");
    const dncExaAlptgTitleEB = dncZettaAlptg.querySelector(".dnc-e-alptg-title");
    const dncExaAlptgBgroEB = dncZettaAlptg.querySelector(".dnc-e-alptg-bgro");

    switch (eType) {
      case "mouseenter": {
        dncExaAlptgTitleEB.style.fontWeight = "700";
        dncExaAlptgBgroEB.style.left = "10%";
        dncExaAlptgBgroEB.style.width = "80%";
        DncUtility.setExa(dncExaEB, dncPetaEB, 4);
        dncExaEB.style.width = "18rem";
        for (let i = 0; i < dncPetaEB.length; i++) {
          dncTeraEB[i].style.opacity = "1";
        }
        switch (eIndex) {
          case 4: {
            const htmlElement = document.documentElement;
            const htmlElementRect = htmlElement.getBoundingClientRect();
            const dncYottaRect = dncY[eIndex].getBoundingClientRect();

            const htmlElementRectCalc = htmlElementRect.right - (21 * 16);
            const dncYottaRectCalc = 
              (dncYottaRect.right - (dncYottaRect.width / 2)) + (10 * 16);

            if (htmlElementRectCalc < dncYottaRectCalc && SncController.isActiveSnc) {
              dncExaEB.style.right = "0rem";
            } else {
              dncExaEB.style.right = "";
            }
            break;
          }
        }
        break;
      }
      case "mouseleave": {
        dncExaAlptgTitleEB.style.fontWeight = "";
        dncExaAlptgBgroEB.style.left = "";
        dncExaAlptgBgroEB.style.width = "";
        DncUtility.setExa(dncExaEB, dncPetaEB, 0);
        dncExaEB.style.width = "";
        for (let i = 0; i < dncPetaEB.length; i++) {
          dncTeraEB[i].style.opacity = "";
        }
        break;
      }
    }
  }
  static ddtDncPeta(event) {
    const eType = event.type;
    const eCurrentTarget = event.currentTarget;
    /* const eIndex = eCurrentTarget.index; */

    /* const dncR = document.querySelector(".plc-y-liptg .dnc-r-bptg"); */
    /* const dncY = dncR.querySelectorAll(".dnc-y"); */

    const dncGigaTitleGB = eCurrentTarget.querySelector(".dnc-g-title");
    const dncGigaRgroGB = eCurrentTarget.querySelector(".dnc-g-rgro");
    const dncGigaBgroGB = eCurrentTarget.querySelector(".dnc-g-bgro");

    switch (eType) {
      case "mouseenter": {
        dncGigaTitleGB.style.fontWeight = "700";
        dncGigaRgroGB.style.margin = "0rem 0rem 0rem 1rem";
        dncGigaRgroGB.style.borderTop = "0.25rem solid #00000000";
        dncGigaRgroGB.style.borderBottom = "0.25rem solid #00000000";
        dncGigaRgroGB.style.borderLeft = "0.5rem solid #FFFFFF";
        dncGigaRgroGB.style.opacity = "1";
        DncUtility.setGigaBgro(dncGigaBgroGB, dncGigaTitleGB, 32);
        break;
      }
      case "mouseleave": {
        dncGigaTitleGB.style.fontWeight = "";
        dncGigaRgroGB.style.margin = "";
        dncGigaRgroGB.style.borderTop = "";
        dncGigaRgroGB.style.borderBottom = "";
        dncGigaRgroGB.style.borderLeft = "";
        dncGigaRgroGB.style.opacity = "";
        dncGigaBgroGB.style.width = "";
        break;
      }
    }
  }
}
class DncUtility {
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

            const dncExaEB = dncY[i].querySelector(".dnc-e");
            const dncPetaEB = dncExaEB.querySelectorAll(".dnc-p");
            for (let i = 0; i < dncPetaEB.length; i++) {
              eventData.currentTarget = dncPetaEB[i];
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
        /* const dncExaEB = dncY[i].querySelector(".dnc-e");
        const dncExaAlptgBgroEB = dncY[i].querySelector(".dnc-e-alptg-bgro");
        const dncTeraEB = dncExaEB.querySelectorAll(".dnc-t");

        const dncGigaBgroEB = dncExaEB.querySelectorAll(".dnc-g-bgro");
        /* Set Exa Alptg 
        dncExaAlptgBgroEB.style.left = "";
        dncExaAlptgBgroEB.style.width = "";
        /* Set Exa 
        dncExaEB.style.width = "";
        DncUtility.setExa(dncExaEB, dncTeraEB, 0);
        /* Set Tera 
        for (let i = 0; i < dncTeraEB.length; i++) {
          dncTeraEB[i].style.opacity = "";
          dncGigaBgroEB[i].style.left = "";
          dncGigaBgroEB[i].style.width = "";
        }
        /* Set Flag 
        dncY[i].isActive = false; */
        const displayTypeState = FwaConfig.currentDisplayType;
        DncUtility.resetDnc(displayTypeState);
        return;
      }
    }

  }
}
export {
  DncController,
  DncManager,
  DncHandler,
  DncUtility
}
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */