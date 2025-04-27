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
  DncController,
  SncController
} from "../../fwc-hub.js";
class TpncController {
  static isResize = false;

  static process() {
    TpncManager.generate();
    TpncManager.init();
  }
  static processOnLoad() {
    TpncManager.initOnLoad();
  }
  static processOnResize() {
    TpncManager.initOnResize();
    TpncManager.removeEvent();
    TpncManager.addEvent();
  }
  static accessTpncZettaSnioHandler() {
    TpncHandler.tpncZettaSnio();
  }
}
class TpncManager {
  static init() {

  }
  static initOnLoad() {
    const tpncR = document.querySelector(".plc-y-liptg .tpnc-r-beptg");
    const tpncZettaDnio = tpncR.querySelector(".tpnc-z-dnio");
    const tpncZettaSnio = tpncR.querySelector(".tpnc-z-snio");

    if (FwaConfig.currentDisplayType === 1) {
      tpncZettaDnio.addEventListener(
        "click",
        TpncHandler.tpncZettaDnio
      );
    }
    tpncZettaSnio.addEventListener(
      "click",
      TpncHandler.tpncZettaSnio
    );
  }
  static initOnResize() {
    if (DncController.isActiveDnc) {
      TpncController.isResize = true;
      TpncHandler.tpncZettaDnio();
    }
    if (SncController.isActiveSnc) {
      TpncController.isResize = true;
      TpncHandler.tpncZettaSnio();
    }
  }
  static generate() {
    const tpncR = document.querySelector(".plc-y-liptg .tpnc-r-beptg");
    /* Element: tpnc-y */
    let selectorData = "tpnc-y";
    const yotta = FwcUtility.getGenerateElement("ul", selectorData);
    /* Element: tpnc-y-sdo sdo */
    selectorData = "tpnc-y-sdo";
    const yottaSdo = FwcUtility.getGenerateElement("div", selectorData);
    /* Element: tpnc-z-lio */
    selectorData = "tpnc-z-lio";
    const zettaLio = FwcUtility.getGenerateElement("li", selectorData);
    /* Element: tpnc-e-lio-link */
    selectorData = "tpnc-e-lio-link";
    const exaLioLink = FwcUtility.getGenerateElement("a", selectorData);
    let dataZS = "/";
    exaLioLink.setAttribute("href", dataZS);
    dataZS = "Facooya";
    exaLioLink.textContent = dataZS;
    /* Element: tpnc-z-dnio */
    selectorData = "tpnc-z-dnio";
    const zettaDnio = FwcUtility.getGenerateElement("li", selectorData);
    /* Element: tpnc-e-dnio-gro */
    for (let i = 0; i < 3; i++) {
      selectorData = "tpnc-e-dnio-gro";
      const exaDnioGro = FwcUtility.getGenerateElement("span", selectorData);
      /* Compile: tpnc-z-dnio-gro */
      zettaDnio.appendChild(exaDnioGro);
    }
    /* Element: tpnc-z-snio */
    selectorData = "tpnc-z-snio";
    const zettaSnio = FwcUtility.getGenerateElement("li", selectorData);
    /* Element: tpnc-e-snio-gro */
    for (let i = 0; i < 9; i++) {
      selectorData = "tpnc-e-snio-gro";
      const exaSnioGro = FwcUtility.getGenerateElement("span", selectorData);
      /* Compile: tpnc-e-snio-gro */
      zettaSnio.appendChild(exaSnioGro);
    }
    /* !!!!! v1.1.14a [test] (support-navigation-title) !!!!!! */
    selectorData = "tpnc-y-snto";
    const tpncYottaSnto = FwcUtility.getGenerateElement("div", selectorData);
    selectorData = "tpnc-z-snto-title";
    const tpncZettaSntoTitle = FwcUtility.getGenerateElement("div", selectorData);
    tpncZettaSntoTitle.textContent = "Navigation";
    tpncYottaSnto.appendChild(tpncZettaSntoTitle);
    tpncR.appendChild(tpncYottaSnto);
    /* Compile: */
    zettaLio.appendChild(exaLioLink);
    yotta.appendChild(zettaLio);
    yotta.appendChild(zettaDnio);
    yotta.appendChild(zettaSnio);
    tpncR.appendChild(yotta);
    tpncR.appendChild(yottaSdo);
    /* debugf(0, "rc/nc/tpnc/tpnc-gc.js", "tpncGc()", "Done"); */
  }
  static addEvent() {
    const tpncR = document.querySelector(".plc-y-liptg .tpnc-r-beptg");
    const tpncZettaDnio = tpncR.querySelector(".tpnc-z-dnio");

    if (FwaConfig.currentDisplayType === 1 && FwaConfig.previousDisplayType >= 2) {
      tpncZettaDnio.addEventListener(
        "click",
        TpncHandler.tpncZettaDnio
      );
    }
  }
  static removeEvent() {
    if (FwaConfig.currentDisplayType >= 2 && FwaConfig.previousDisplayType === 1) {
      const tpncR = document.querySelector(".plc-y-liptg .tpnc-r-beptg");
      const tpncZettaDnio = tpncR.querySelector(".tpnc-z-dnio");
      tpncZettaDnio.removeEventListener(
        "click",
        TpncHandler.tpncZettaDnio
      );
    }
  }
}
class TpncHandler {
  static tpncZettaDnio() {
    /* TPNC */
    const tpncR = document.querySelector(".plc-y-liptg .tpnc-r-beptg")
    const tpncYottaSdo = tpncR.querySelector(".tpnc-y-sdo");
    /* DNC */
    const dncR = document.querySelector(".plc-y-liptg .dnc-r-bptg");
    /* ECC-NOCO */
    const eccNoco = document.querySelector(".plc-y-liptg .ecc-y-noco");
    /*  */
    const displayTypeState = TpncUtility.getDisplayTypeState();

    if (!DncController.isActiveDnc) {
      /* ========== Activation ========== */
      switch (displayTypeState) {
        case 1:
          /* ----- Mobile Display Type ----- */
          if (SncController.isActiveSnc) {
            TpncHandler.tpncZettaSnio();
          }
          /* TPNC */
          tpncYottaSdo.style.display = "block";
          TpncUtility.setTpncExaDnioGro(true);
          /* DNC */
          dncR.style.left = "0%";
          /* ECC-NOCO */
          eccNoco.style.left = "80%";
          eccNoco.addEventListener("click", TpncHandler.tpncZettaDnio);
          /* ------------------------ */
          break;
      }
      DncController.isActiveDnc = true;
      /* ============================== */
    } else {
      /* ========== Deactivation ========== */
      switch (displayTypeState) {
        case 1:
          /* ===== Mobile Display Type =====*/
          /* TPNC */
          tpncYottaSdo.style.display = "";
          TpncUtility.setTpncExaDnioGro(false);
          /* DNC */
          dncR.style.left = "";
          /* ECC-NOCO */
          eccNoco.style.left = "100%";
          eccNoco.removeEventListener("click", TpncHandler.tpncZettaDnio);
          break;
      }
      DncController.accessResetDnc(displayTypeState);
      DncController.isActiveDnc = false;
      /* ============================== */
    }
  }
  static tpncZettaSnio() {
    const plcYottaLiptg = document.querySelector(".plc-y-liptg");
    const nplcR = document.querySelector(".nplc-r-heptg");
    /* [ DTM: Initial ] { TPNC } */
    const tpncR = plcYottaLiptg.querySelector(".tpnc-r-beptg");
    const tpncYottaSdo = tpncR.querySelector(".tpnc-y-sdo");
    /* [ DTM: Initial ] { SNC } */
    const sncR = plcYottaLiptg.querySelector(".snc-r-cptg");
    const dncR = plcYottaLiptg.querySelector(".dnc-r-bptg");
    const dncY = dncR.querySelectorAll(".dnc-y");
    /* [ DTM: Initial ] { ECC-NOCO } */
    const eccNoco = plcYottaLiptg.querySelector(".ecc-y-noco");
    const eccZettaPrcoRgro = plcYottaLiptg.querySelector(".ecc-z-prco-rgro");
    /* !!!!! v1.1.14a [test] (support-navigation-title) !!!!!! */
    const tpncYottaSnto = tpncR.querySelector(".tpnc-y-snto");
    const tpncY = tpncR.querySelector(".tpnc-y");
    /*  */
    const displayTypeState = TpncUtility.getDisplayTypeState();
    
    if (!SncController.isActiveSnc) {
      /* =============== Activation: =============== */
      switch (displayTypeState) {
        case 1:
          /* Deactivation DNIO */
          if (DncController.isActiveDnc) {
            TpncHandler.tpncZettaDnio();
          }
          /* TPNC */
          tpncYottaSdo.style.display = "block";
          TpncUtility.setTpncExaSnioGro(true);
          /* SNC */
          sncR.style.right = "0%";
          /* ECC-NOCO */
          eccNoco.style.left = "0%";
          eccNoco.addEventListener("click", TpncHandler.tpncZettaSnio);
          break;
        case 2:
          /* [ H.T_A: Reset ] { Dnc.Complex } (  ) */
          for (let i = 0; i < dncY.length; i++) {
            if (dncY[i].isActive) {
              DncController.accessResetDnc(displayTypeState);
              break;
            }
          }
          /* !!!!! v1.1.14a [del] (replaced) !!!!!
          if (DncController.isActiveDnc) {
            DncController.accessResetDncUtility();
          } */
          /* !!!!! Nplc < 768px grid-template-columns: 1fr 1fr; */
          let temporaryData = 768 + (16 * 20);
          if (nplcR.clientWidth < temporaryData) {
            const nptlcZettaTno = nplcR.querySelector(".nptlc-z-tno");
            nptlcZettaTno.style.gridTemplateColumns = "1fr 1fr";
            const npclcZ = nplcR.querySelector(".npclc-z");
            npclcZ.style.gridTemplateColumns = "1fr";
          }

          tpncYottaSdo.style.display = "block";
          /* [ T.A: Set ] { TpncExaSnioGro } */
          TpncUtility.setTpncExaSnioGro(true);
          /* [ T.A: Set ] { nplcRootHeptg } ( Tag.main ) */
          nplcR.style.marginRight = "20rem";
          /* [ T.A: Set ] { eccZettaPrcoRgro } ( Tag.div ) */
          eccZettaPrcoRgro.style.right = "20rem";
          /* [ T.A: Set ] { sncR } ( Tag.nav ) */
          sncR.style.right = "0%";
          /* !!!!! v1.1.14a [test] (support-navigation-title) !!!!!! */
          tpncYottaSnto.style.opacity = "1";
          tpncYottaSnto.style.transform = "scale(1, 1)";
          tpncY.style.gap = "0rem 16rem";
          break;
        case 3:
          tpncYottaSdo.style.display = "block";
          TpncUtility.setTpncExaSnioGro(true);
          
          nplcR.style.marginRight = "20rem";
          sncR.style.right = "0%";

          eccZettaPrcoRgro.style.right = "20rem";
          /* !!!!! v1.1.14a [test] (support-navigation-title) !!!!!! */
          tpncYottaSnto.style.opacity = "1";
          tpncYottaSnto.style.transform = "scale(1, 1)";
          dncR.style.width = "calc(100% - 12rem - 16rem - 4rem)";
          break;
        default:
          break;
      }
      /* if (/* activeMode 1 === 1) { !!! v1.1.14a [del] (replaced)
        TpncUtility.setTpncZettaSniIr(true);
        if (TpncManager.isActiveDniZ) { /* Deactive [DNI] *
          TpncHandler.tpncZettaDni();
        }
        tpncYottaBept.style.display = "block";
        sncR.style.right = "0%";
      } */
      SncController.isActiveSnc = true;
      /* =============== Activation; =============== */
    } else {
      /* ========== Deactivation Sni ========== */
      switch (displayTypeState) {
        case 1:
          /* TPNC */
          tpncYottaSdo.style.display = "";
          TpncUtility.setTpncExaSnioGro(false);
          /* SNC */
          sncR.style.right = "";
          /* ECC-NOCO */
          eccNoco.style.left = "-20%";
          eccNoco.removeEventListener("click", TpncHandler.tpncZettaSnio);
          break;
        case 2:
          /* !!!!! v1.1.14a [test] !!!!! */
          const nptlcZettaTno = nplcR.querySelector(".nptlc-z-tno");
          nptlcZettaTno.style.gridTemplateColumns = "";
          const npclcZ = nplcR.querySelector(".npclc-z");
          npclcZ.style.gridTemplateColumns = "";
          /* TPNC */
          tpncYottaSdo.style.display = "";
          TpncUtility.setTpncExaSnioGro(false);

          nplcR.style.marginRight = "";

          eccZettaPrcoRgro.style.right = "";

          sncR.style.right = "";
          /* !!!!! v1.1.14a [test] (support-navigation-title) !!!!!! */
          tpncYottaSnto.style.opacity = "";
          tpncYottaSnto.style.transform = "";
          tpncY.style.gap = "";
          break;
        case 3:
          tpncYottaSdo.style.display = "";
          TpncUtility.setTpncExaSnioGro(false);

          nplcR.style.marginRight = "";
          sncR.style.right = "";
          
          eccZettaPrcoRgro.style.right = "";
          /* !!!!! v1.1.14a [test] (support-navigation-title) !!!!!! */
          tpncYottaSnto.style.opacity = "";
          tpncYottaSnto.style.transform = "";
          dncR.style.width = "";
          break;
        default:
          break;
      }
      /* if (/* activeMode 1 == 1) { !!! v1.1.14a [del] (replaced)
        TpncUtility.setTpncZettaSniIr(false);
        tpncYottaBept.style.display = "";
        sncR.style.right = "-80%";
      }
      SncManager.resetSnc();
      TpncManager.isActiveSniZ = false; */
      SncController.accessResetSnc(displayTypeState);
      SncController.isActiveSnc = false;
      /* ============================== */
    }
  }
}
class TpncUtility {
  static getDisplayTypeState() {
    let displayTypeState = 0;
    if (TpncController.isResize) {
      displayTypeState = FwaConfig.previousDisplayType;
    } else {
      displayTypeState = FwaConfig.currentDisplayType;
    }
    TpncController.isResize = false;
    return displayTypeState;
  }
  /* tpncR, isActive */
  static setTpncExaDnioGro(isActive) {
    const dnioGro = document.querySelectorAll(".tpnc-z-dnio .tpnc-e-dnio-gro");
    if (isActive) {
      /* Activation */
      /* gap 0.475rem 0.35rem */
      dnioGro[0].style.transform = "translate(0rem, 0.825rem) rotate(45deg) scale(1.3, 1)";
      dnioGro[1].style.transform = "translate(-2rem, 0rem)";
      dnioGro[2].style.transform = "translate(0rem, -0.825rem) rotate(-45deg) scale(1.3, 1)";

      dnioGro[1].style.opacity = "0";
    } else {
      /* Deactivation */
      dnioGro[0].style.transform = "";
      dnioGro[1].style.transform = "";
      dnioGro[2].style.transform = "";

      dnioGro[1].style.opacity = "";
    }
  }
  static setTpncExaSnioGro(isActive) {
    const snioGro = document.querySelectorAll(".tpnc-z-snio .tpnc-e-snio-gro");
    if (isActive) {
      /* Activation */
      /* gap 0.25rem 0.5rem */
      snioGro[1].style.transform = "translate(0.375rem, 0.375rem) rotate(45deg) scale(0.7, 1.8)";
      snioGro[3].style.transform = "translate(0.375rem, -0.375rem) rotate(45deg) scale(1.8, 0.7)";
      snioGro[5].style.transform = "translate(-0.375rem, 0.375rem) rotate(45deg) scale(1.8, 0.7)";
      snioGro[7].style.transform = "translate(-0.375rem, -0.375rem) rotate(45deg) scale(0.7, 1.8)";
  
      snioGro[0].style.transform = "rotate(45deg) scale(1, 0.7)";
      snioGro[2].style.transform = "rotate(45deg) scale(0.7, 1)";
      snioGro[6].style.transform = "rotate(45deg) scale(0.7, 1)";
      snioGro[8].style.transform = "rotate(45deg) scale(1, 0.7)";
  
      snioGro[4].style.transform = "rotate(45deg) scale(0.7)";
    } else {
      /* Deactivation */
      for (let i = 0; i < snioGro.length; i++) {
        snioGro[i].style.transform = "";
      }
    }
  }
  /* static generateElement(elementType, setClass) { !!! v1.1.14a [del] (move to FwcUtility)
    const elementData = document.createElement(elementType);
    elementData.setAttribute("class", setClass);
    return elementData;
  } */
}
export {
  TpncController,
  TpncManager,
  TpncHandler,
  TpncUtility
};
/* DESCRIPTION
 * Controller -> Manager -> Handler
 * Utility -> UtilityY -> UtilityZ -> ...
 * 
 * SDO: Scroll Defense Object
 * GRO: Geometry Rendering Object
 * IO: Interaction Object
 * LIO: Logo IO
 * DNIO: Development Navigation IO
 * SNIO: Support Navigation IO
 * SNTO: Support Navigation Title O
 * DNF: Development Navigation Flag
 * SNF: Support Navigation Flag
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */