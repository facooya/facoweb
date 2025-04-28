/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  FwaConfig
} from "../../../fwa/fwa-config.js";
import {
  TpncConfig
} from "./tpnc-config.js";
import {
  FwcAccessor,
  DncAccessor,
  SncAccessor,
  EccAccessor,
  NplcAccessor
} from "../../fwc-hub.js";
class TpncAccessor {
  static tpncCache = {};
  static isTpncResizeKey = false;
  static tpncZettaSnioHandler() {
    TpncHandler.tpncZettaSnio();
  }
}
class TpncController {
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
}
class TpncManager {
  static init() {

  }
  static initOnLoad() {
    /* const tpncR = document.querySelector(".plc-y-liptg .tpnc-r-beptg");
    const tpncZettaDnio = tpncR.querySelector(".tpnc-z-dnio");
    const tpncZettaSnio = tpncR.querySelector(".tpnc-z-snio"); */
    const {
      tpncZettaDnio,
      tpncZettaSnio
    } = TpncGet.getTpncIoGroup();

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
    if (DncAccessor.isActiveDnc) {
      TpncAccessor.isTpncResizeKey = true;
      TpncHandler.tpncZettaDnio();
    }
    if (SncAccessor.isActiveSnc) {
      TpncAccessor.isTpncResizeKey = true;
      TpncHandler.tpncZettaSnio();
    }
  }
  static generate() {
    /* const tpncR = document.querySelector(".plc-y-liptg .tpnc-r-beptg"); */
    const {
      tpncR
    } = TpncGet.getTpncRoot();
    const tpncFragment = document.createDocumentFragment();
    let tempGenerateElement = null;
    let tempSaveElement = {};
    /* =============== :Ys Group: =============== */
    for (let ysi = 0; ysi < TpncConfig.elementYsGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement(
        TpncConfig.elementYsGroup[ysi].tag,
        TpncConfig.elementYsGroup[ysi].selector
      );
      FwcAccessor.setGenerateElement(
        tempGenerateElement,
        TpncConfig.elementYsGroup[ysi].text,
        TpncConfig.elementYsGroup[ysi].href
      );
      tempSaveElement[TpncConfig.elementYsGroup[ysi].id] = tempGenerateElement;
    }
    /* =============== ;Ys Group; =============== */
    /* =============== :Zs Group: =============== */
    for (let ysi = 0; ysi < TpncConfig.elementZsGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement(
        TpncConfig.elementZsGroup[ysi].tag,
        TpncConfig.elementZsGroup[ysi].selector
      );
      FwcAccessor.setGenerateElement(
        tempGenerateElement,
        TpncConfig.elementZsGroup[ysi].text,
        TpncConfig.elementZsGroup[ysi].href
      );
      tempSaveElement[TpncConfig.elementZsGroup[ysi].id] = tempGenerateElement;
    }
    /* =============== ;Zs Group; =============== */
    /* =============== :Dnio Gro, Snio Gro Group: =============== */
    for (let ysi = 0; ysi < TpncConfig.dnioGroLength; ysi++) {
      for (let zsi = 0; zsi < TpncConfig.elementDnioGroGroup.length; zsi++) {
        tempGenerateElement = FwcAccessor.getGenerateElement(
          TpncConfig.elementDnioGroGroup[zsi].tag,
          TpncConfig.elementDnioGroGroup[zsi].selector
        );
        tempSaveElement["zettaDnio"].append(tempGenerateElement);
      }
    }
    for (let ysi = 0; ysi < TpncConfig.snioGroLength; ysi++) {
      for (let zsi = 0; zsi < TpncConfig.elementSnioGroGroup.length; zsi++) {
        tempGenerateElement = FwcAccessor.getGenerateElement(
          TpncConfig.elementSnioGroGroup[zsi].tag,
          TpncConfig.elementSnioGroGroup[zsi].selector
        );
        tempSaveElement["zettaSnio"].append(tempGenerateElement);
      }
    }
    /* =============== ;Dnio Gro, Snio Gro Group; =============== */
    /* =============== :Compile: =============== */
    TpncSet.setAppendFragment(tpncFragment, tempSaveElement);
    tpncR.append(tpncFragment);
  }
  static addEvent() {
    /* const tpncR = document.querySelector(".plc-y-liptg .tpnc-r-beptg");
    const tpncZettaDnio = tpncR.querySelector(".tpnc-z-dnio"); */
    const {
      tpncZettaDnio
    } = TpncGet.getTpncIoGroup();

    if (FwaConfig.currentDisplayType === 1 && FwaConfig.previousDisplayType >= 2) {
      tpncZettaDnio.addEventListener(
        "click",
        TpncHandler.tpncZettaDnio
      );
    }
  }
  static removeEvent() {
    if (FwaConfig.currentDisplayType >= 2 && FwaConfig.previousDisplayType === 1) {
      /* const tpncR = document.querySelector(".plc-y-liptg .tpnc-r-beptg");
      const tpncZettaDnio = tpncR.querySelector(".tpnc-z-dnio"); */
      const {
        tpncZettaDnio
      } = TpncGet.getTpncIoGroup();
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
    /* const tpncR = document.querySelector(".plc-y-liptg .tpnc-r-beptg")
    const tpncYottaSdo = tpncR.querySelector(".tpnc-y-sdo"); */
    const {
      tpncYottaSdo
    } = TpncGet.getTpncSdoGroup();
    /* DNC */
    /* const dncR = document.querySelector(".plc-y-liptg .dnc-r-bptg"); */
    const {
      dncR
    } = DncAccessor.getDncRoot();
    /* ECC-NOCO */
    const {
      eccYottaNoco
    } = EccAccessor.getEccNocoGroup();
    /* const eccYottaNoco = document.querySelector(".plc-y-liptg .ecc-y-noco"); */
    /*  */
    const displayTypeState = TpncGet.getDisplayTypeState();

    if (!DncAccessor.isActiveDnc) {
      /* ========== Activation ========== */
      switch (displayTypeState) {
        case 1: {
          /* ----- Mobile Display Type ----- */
          if (SncAccessor.isActiveSnc) {
            TpncHandler.tpncZettaSnio();
          }
          /* TPNC */
          tpncYottaSdo.style.display = "block";
          TpncSet.setTpncExaDnioGro(true);
          /* DNC */
          dncR.style.left = "0%";
          /* ECC-NOCO */
          eccYottaNoco.style.left = "80%";
          eccYottaNoco.addEventListener("click", TpncHandler.tpncZettaDnio);
          /* ------------------------ */
          break;
        }
      }
      DncAccessor.isActiveDnc = true;
      /* ============================== */
    } else {
      /* ========== Deactivation ========== */
      switch (displayTypeState) {
        case 1: {
          /* ===== Mobile Display Type =====*/
          /* TPNC */
          tpncYottaSdo.style.display = "";
          TpncSet.setTpncExaDnioGro(false);
          /* DNC */
          dncR.style.left = "";
          /* ECC-NOCO */
          eccYottaNoco.style.left = "100%";
          eccYottaNoco.removeEventListener("click", TpncHandler.tpncZettaDnio);
          break;
        }
      }
      DncAccessor.resetDnc(displayTypeState);
      DncAccessor.isActiveDnc = false;
      /* ============================== */
    }
  }
  static tpncZettaSnio() {
    /* const plcYottaLiptg = document.querySelector(".plc-y-liptg"); */
    /* const nplcR = document.querySelector(".nplc-r-heptg"); */
    const {
      nplcR
    } = NplcAccessor.getNplcRoot();
    /* [ DTM: Initial ] { TPNC } */
    /* const tpncR = plcYottaLiptg.querySelector(".tpnc-r-beptg");
    const tpncYottaSdo = tpncR.querySelector(".tpnc-y-sdo"); */
    /* [ DTM: Initial ] { SNC } */
    /* const sncR = plcYottaLiptg.querySelector(".snc-r-cptg");
    const dncR = plcYottaLiptg.querySelector(".dnc-r-bptg");
    const dncY = dncR.querySelectorAll(".dnc-y"); */
    const {
      dncR
    } = DncAccessor.getDncRoot();
    const {
      dncY
    } = DncAccessor.getDncGroup();
    const {
      sncR
    } = SncAccessor.getSncRoot();
    /* const { sncR } = SncAccessor.getSncGroup(); */
    /* [ DTM: Initial ] { ECC-NOCO } */
    /* const eccYottaNoco = plcYottaLiptg.querySelector(".ecc-y-noco");
    const eccZettaPrcoRgro = plcYottaLiptg.querySelector(".ecc-z-prco-rgro"); */
    const {
      eccYottaNoco
    } = EccAccessor.getEccNocoGroup();
    const {
      eccZettaPrcoRgro
    } = EccAccessor.getEccPrcoGroup();
    /* !!!!! v1.1.14a [test] (support-navigation-title) !!!!!! */
    /* const tpncYottaSnto = tpncR.querySelector(".tpnc-y-snto");
    const tpncY = tpncR.querySelector(".tpnc-y"); */
    const {
      tpncY
    } = TpncGet.getTpncGroup();
    const {
      tpncYottaSnto
    } = TpncGet.getTpncSntoGroup();
    const {
      tpncYottaSdo
    } = TpncGet.getTpncSdoGroup();
    /*  */
    const displayTypeState = TpncGet.getDisplayTypeState();
    
    if (!SncAccessor.isActiveSnc) {
      /* =============== Activation: =============== */
      switch (displayTypeState) {
        case 1: {
          /* Deactivation DNIO */
          if (DncAccessor.isActiveDnc) {
            TpncHandler.tpncZettaDnio();
          }
          /* TPNC */
          tpncYottaSdo.style.display = "block";
          TpncSet.setTpncExaSnioGro(true);
          /* SNC */
          sncR.style.right = "0%";
          /* ECC-NOCO */
          eccYottaNoco.style.left = "0%";
          eccYottaNoco.addEventListener("click", TpncHandler.tpncZettaSnio);
          break;
        }
        case 2: {
          /* [ H.T_A: Reset ] { Dnc.Complex } (  ) */
          for (let i = 0; i < dncY.length; i++) {
            if (dncY[i].isActive) {
              DncAccessor.resetDnc(displayTypeState);
              break;
            }
          }
          /* !!!!! Nplc < 768px grid-template-columns: 1fr 1fr; */
          let temporaryData = 768 + (16 * 20);
          if (nplcR.clientWidth < temporaryData) {
            /* !!!!! v1.1.15a [add] (getNplcAccessor) !!!!! */
            const nptlcZettaTno = nplcR.querySelector(".nptlc-z-tno");
            nptlcZettaTno.style.gridTemplateColumns = "1fr 1fr";
            const npclcZ = nplcR.querySelector(".npclc-z");
            npclcZ.style.gridTemplateColumns = "1fr";
          }

          tpncYottaSdo.style.display = "block";
          /* [ T.A: Set ] { TpncExaSnioGro } */
          TpncSet.setTpncExaSnioGro(true);
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
        }
        case 3: {
          tpncYottaSdo.style.display = "block";
          TpncSet.setTpncExaSnioGro(true);
          
          nplcR.style.marginRight = "20rem";
          sncR.style.right = "0%";

          eccZettaPrcoRgro.style.right = "20rem";
          tpncYottaSnto.style.opacity = "1";
          tpncYottaSnto.style.transform = "scale(1, 1)";
          dncR.style.width = "calc(100% - 12rem - 16rem - 4rem)";
          break;
        }
      }
      /* if (/* activeMode 1 === 1) { !!! v1.1.14a [del] (replaced)
        TpncUtility.setTpncZettaSniIr(true);
        if (TpncManager.isActiveDniZ) { /* Deactive [DNI] *
          TpncHandler.tpncZettaDni();
        }
        tpncYottaBept.style.display = "block";
        sncR.style.right = "0%";
      } */
      SncAccessor.isActiveSnc = true;
      /* =============== Activation; =============== */
    } else {
      /* ========== Deactivation Sni ========== */
      switch (displayTypeState) {
        case 1: {
          /* TPNC */
          tpncYottaSdo.style.display = "";
          TpncSet.setTpncExaSnioGro(false);
          /* SNC */
          sncR.style.right = "";
          /* ECC-NOCO */
          eccYottaNoco.style.left = "-20%";
          eccYottaNoco.removeEventListener("click", TpncHandler.tpncZettaSnio);
          break;
        }
        case 2: {
          /* !!!!! v1.1.15a [add] (getNplcAccessor) !!!!! */
          const nptlcZettaTno = nplcR.querySelector(".nptlc-z-tno");
          nptlcZettaTno.style.gridTemplateColumns = "";
          const npclcZ = nplcR.querySelector(".npclc-z");
          npclcZ.style.gridTemplateColumns = "";
          /* TPNC */
          tpncYottaSdo.style.display = "";
          TpncSet.setTpncExaSnioGro(false);

          nplcR.style.marginRight = "";

          eccZettaPrcoRgro.style.right = "";

          sncR.style.right = "";
          tpncYottaSnto.style.opacity = "";
          tpncYottaSnto.style.transform = "";
          tpncY.style.gap = "";
          break;
        }
        case 3: {
          tpncYottaSdo.style.display = "";
          TpncSet.setTpncExaSnioGro(false);

          nplcR.style.marginRight = "";
          sncR.style.right = "";
          
          eccZettaPrcoRgro.style.right = "";
          tpncYottaSnto.style.opacity = "";
          tpncYottaSnto.style.transform = "";
          dncR.style.width = "";
          break;
        }
      }
      SncAccessor.resetSnc(displayTypeState);
      SncAccessor.isActiveSnc = false;
      /* ============================== */
    }
  }
}
/*class TpncUtility {
  /* !!!!! v1.1.15a [del] (replaced) !!!!! */
  /* static getDisplayTypeState() {
    let displayTypeState = 0;
    if (TpncAccessor.isTpncResizeKey) {
      displayTypeState = FwaConfig.previousDisplayType;
    } else {
      displayTypeState = FwaConfig.currentDisplayType;
    }
    TpncAccessor.isTpncResizeKey = false;
    return displayTypeState;
  }
  /* tpncR, isActive 
  static setTpncExaDnioGro(isActive) {
    /* const dnioGro = document.querySelectorAll(".tpnc-z-dnio .tpnc-e-dnio-gro"); 
    const { tpncExaDnioGro } = TpncGet.getTpncIoGroup();
    if (isActive) {
      /* Activation 
      /* gap 0.475rem 0.35rem 
      tpncExaDnioGro[0].style.transform = "translate(0rem, 0.825rem) rotate(45deg) scale(1.3, 1)";
      tpncExaDnioGro[1].style.transform = "translate(-2rem, 0rem)";
      tpncExaDnioGro[2].style.transform = "translate(0rem, -0.825rem) rotate(-45deg) scale(1.3, 1)";

      tpncExaDnioGro[1].style.opacity = "0";
    } else {
      /* Deactivation 
      tpncExaDnioGro[0].style.transform = "";
      tpncExaDnioGro[1].style.transform = "";
      tpncExaDnioGro[2].style.transform = "";

      tpncExaDnioGro[1].style.opacity = "";
    }
  }
  static setTpncExaSnioGro(isActive) {
    /* const snioGro = document.querySelectorAll(".tpnc-z-snio .tpnc-e-snio-gro"); 
    const { tpncExaSnioGro } = TpncGet.getTpncIoGroup();
    if (isActive) {
      /* Activation 
      /* gap 0.25rem 0.5rem 
      tpncExaSnioGro[1].style.transform = "translate(0.375rem, 0.375rem) rotate(45deg) scale(0.7, 1.8)";
      tpncExaSnioGro[3].style.transform = "translate(0.375rem, -0.375rem) rotate(45deg) scale(1.8, 0.7)";
      tpncExaSnioGro[5].style.transform = "translate(-0.375rem, 0.375rem) rotate(45deg) scale(1.8, 0.7)";
      tpncExaSnioGro[7].style.transform = "translate(-0.375rem, -0.375rem) rotate(45deg) scale(0.7, 1.8)";
  
      tpncExaSnioGro[0].style.transform = "rotate(45deg) scale(1, 0.7)";
      tpncExaSnioGro[2].style.transform = "rotate(45deg) scale(0.7, 1)";
      tpncExaSnioGro[6].style.transform = "rotate(45deg) scale(0.7, 1)";
      tpncExaSnioGro[8].style.transform = "rotate(45deg) scale(1, 0.7)";
  
      tpncExaSnioGro[4].style.transform = "rotate(45deg) scale(0.7)";
    } else {
      /* Deactivation 
      for (let i = 0; i < tpncExaSnioGro.length; i++) {
        tpncExaSnioGro[i].style.transform = "";
      }
    }
  } 
}*/
class TpncGet {
  static getDisplayTypeState() {
    let displayTypeState = 0;
    if (TpncAccessor.isTpncResizeKey) {
      displayTypeState = FwaConfig.previousDisplayType;
    } else {
      displayTypeState = FwaConfig.currentDisplayType;
    }
    TpncAccessor.isTpncResizeKey = false;
    return displayTypeState;
  }
  /* =============== :getElementGroup: =============== */
  static getTpncRoot() {
    /* const tpncRoot = {
      tpncR: {
        id: "tpncR",
        selector: ".plc-y-liptg .tpnc-r-beptg"
      }
    }
    let {
      tpncR
    } = TpncAccessor.tpncCache;
    if (!tpncR) {
      tpncR = document.querySelector(tpncRoot.tpncR.selector);
      TpncAccessor.tpncCache[tpncRoot.tpncR.id] = tpncR;
    }
    return {
      tpncR
    }; */
    const tpncRoot = [
      {
        id: "tpncR",
        selector: ".plc-y-liptg .tpnc-r-beptg"
      }
    ];
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      TpncAccessor.tpncCache,
      tpncRoot
    );
    return saveVerifyGroup;
  }
  static getTpncGroup() {
    /* const tpncR = document.querySelector(".plc-y-liptg .tpnc-r-beptg");
    const tpncY = tpncR.querySelector(".tpnc-y"); */
    /* const tpncGroup = {
      tpncY: {
        id: "tpncY",
        selector: ".tpnc-y"
      }
    };
    let {
      tpncY
    } = TpncAccessor.tpncCache;
    const {
      tpncR
    } = this.getTpncRoot();
    if (!tpncY) {
      tpncY = tpncR.querySelector(tpncGroup.tpncY.selector);
      TpncAccessor.tpncCache[tpncGroup.tpncY.id] = tpncY;
    }
    return {
      tpncY
    }; */
    const tpncGroup = [
      {
        id: "tpncY",
        selector: ".tpnc-y"
      }
    ];
    const {
      tpncR
    } = this.getTpncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      TpncAccessor.tpncCache,
      tpncGroup,
      tpncR
    );
    return saveVerifyGroup;
  }
  static getTpncIoGroup() {
    /* const tpncIoGroup = {
      tpncZettaLio: {
        id: "tpncZettaLio",
        selector: ".tpnc-z-lio"
      },
      tpncZettaDnio: {
        id: "tpncZettaDnio",
        selector: ".tpnc-z-dnio"
      },
      tpncZettaSnio: {
        id: "tpncZettaSnio",
        selector: ".tpnc-z-snio"
      },
      tpncExaLioLink: {
        id: "tpncExaLioLink",
        selector: ".tpnc-e-lio-link"
      },
      tpncExaDnioGro: {
        id: "tpncExaDnioGro",
        selector: ".tpnc-e-dnio-gro"
      },
      tpncExaSnioGro: {
        id: "tpncExaSnioGro",
        selector: ".tpnc-e-snio-gro"
      }
    };
    let {
      tpncZettaLio,
      tpncZettaDnio,
      tpncZettaSnio,
      tpncExaLioLink,
      tpncExaDnioGro,
      tpncExaSnioGro
    } = TpncAccessor.tpncCache;
    const {
      tpncR
    } = this.getTpncRoot(); */
    /* const tpncZettaLio = tpncY.querySelector(".tpnc-z-lio");
    const tpncZettaDnio = tpncY.querySelector(".tpnc-z-dnio");
    const tpncZettaSnio = tpncY.querySelector(".tpnc-z-snio"); */
    /* ---------- */
    /* const tpncExaLioLink = tpncZettaLio.querySelector(".tpnc-e-lio-link");
    const tpncExaDnioGro = tpncZettaDnio.querySelectorAll(".tpnc-e-dnio-gro");
    const tpncExaSnioGro = tpncZettaSnio.querySelectorAll(".tpnc-e-snio-gro"); */
    /* if (!tpncZettaLio) {
      tpncZettaLio = tpncR.querySelector(tpncIoGroup.tpncZettaLio.selector);
      TpncAccessor.tpncCache[tpncIoGroup.tpncZettaLio.id] = tpncZettaLio;
    }
    if (!tpncZettaDnio) {
      tpncZettaDnio = tpncR.querySelector(tpncIoGroup.tpncZettaDnio.selector);
      TpncAccessor.tpncCache[tpncIoGroup.tpncZettaDnio.id] = tpncZettaDnio;
    }
    if (!tpncZettaSnio) {
      tpncZettaSnio = tpncR.querySelector(tpncIoGroup.tpncZettaSnio.selector);
      TpncAccessor.tpncCache[tpncIoGroup.tpncZettaSnio.id] = tpncZettaSnio;
    }
    if (!tpncExaLioLink) {
      tpncExaLioLink = tpncR.querySelector(tpncIoGroup.tpncExaLioLink.selector);
      TpncAccessor.tpncCache[tpncIoGroup.tpncExaLioLink.id] = tpncExaLioLink;
    }
    if (!tpncExaDnioGro) {
      tpncExaDnioGro = tpncR.querySelectorAll(tpncIoGroup.tpncExaDnioGro.selector);
      TpncAccessor.tpncCache[tpncIoGroup.tpncExaDnioGro.id] = tpncExaDnioGro;
    }
    if (!tpncExaSnioGro) {
      tpncExaSnioGro = tpncR.querySelectorAll(tpncIoGroup.tpncExaSnioGro.selector);
      TpncAccessor.tpncCache[tpncIoGroup.tpncExaSnioGro.id] = tpncExaSnioGro;
    }
    return {
      tpncZettaLio,
      tpncZettaDnio,
      tpncZettaSnio,
      tpncExaLioLink,
      tpncExaDnioGro,
      tpncExaSnioGro
    }; */
    const tpncIoGroup = [
      {
        id: "tpncZettaLio",
        selector: ".tpnc-z-lio"
      },
      {
        id: "tpncZettaDnio",
        selector: ".tpnc-z-dnio"
      },
      {
        id: "tpncZettaSnio",
        selector: ".tpnc-z-snio"
      },
      {
        id: "tpncExaLioLink",
        selector: ".tpnc-e-lio-link"
      },
      {
        id: "tpncExaDnioGro",
        selector: ".tpnc-e-dnio-gro",
        type: "all"
      },
      {
        id: "tpncExaSnioGro",
        selector: ".tpnc-e-snio-gro",
        type: "all"
      }
    ];
    const {
      tpncR
    } = this.getTpncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      TpncAccessor.tpncCache,
      tpncIoGroup,
      tpncR
    );
    return saveVerifyGroup;
  }
  static getTpncSdoGroup() {
    /* const tpncSdoGroup = { 
      tpncYottaSdo: {
        id: "tpncYottaSdo",
        selector: ".tpnc-y-sdo"
      }
    };
    let { tpncYottaSdo } = TpncAccessor.tpncCache;
    const {
      tpncR
    } = this.getTpncRoot();
    /* const tpncYottaSdo = tpncR.querySelector(".tpnc-y-sdo"); 
    if (!tpncYottaSdo) {
      tpncYottaSdo = tpncR.querySelector(tpncSdoGroup.tpncYottaSdo.selector);
      TpncAccessor.tpncCache[tpncSdoGroup.tpncYottaSdo.id] = tpncYottaSdo;
    }
    return {
      tpncYottaSdo
    }; */
    const tpncSdoGroup = [
      {
        id: "tpncYottaSdo",
        selector: ".tpnc-y-sdo"
      }
    ];
    const {
      tpncR
    } = this.getTpncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      TpncAccessor.tpncCache,
      tpncSdoGroup,
      tpncR
    );
    return saveVerifyGroup;
  }
  static getTpncSntoGroup() {
    /* const tpncSntoGroup = {
      tpncYottaSnto: {
        id: "tpncYottaSnto",
        selector: ".tpnc-y-snto"
      },
      tpncZettaSntoTitle: {
        id: "tpncZettaSntoTitle",
        selector: ".tpnc-z-snto-title"
      }
    };
    let {
      tpncYottaSnto,
      tpncZettaSntoTitle
    } = TpncAccessor.tpncCache;
    const {
      tpncR
    } = this.getTpncRoot();
    /* const tpncYottaSnto = tpncR.querySelector(".tpnc-y-snto");
    const tpncZettaSntoTitle = tpncR.querySelector(".tpnc-z-snto-title"); 
    if (!tpncYottaSnto) {
      tpncYottaSnto = tpncR.querySelector(tpncSntoGroup.tpncYottaSnto.selector);
      TpncAccessor.tpncCache[tpncSntoGroup.tpncYottaSnto.id] = tpncYottaSnto;
    }
    if (!tpncZettaSntoTitle) {
      tpncZettaSntoTitle = tpncR.querySelector(tpncSntoGroup.tpncZettaSntoTitle.selector);
      TpncAccessor.tpncCache[tpncSntoGroup.tpncZettaSntoTitle.id] = tpncZettaSntoTitle;
    }
    return {
      tpncYottaSnto,
      tpncZettaSntoTitle
    }; */
    const tpncSntoGroup = [
      {
        id: "tpncYottaSnto",
        selector: ".tpnc-y-snto"
      },
      {
        id: "tpncZettaSntoTitle",
        selector: ".tpnc-z-snto-title"
      }
    ];
    const {
      tpncR
    } = this.getTpncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      TpncAccessor.tpncCache,
      tpncSntoGroup,
      tpncR
    );
    return saveVerifyGroup;
  }
  /* =============== ;getElementGroup; =============== */
  /* static getGenerateElement(elementTag, setClass) {
    const elementData = document.createElement(elementTag);
    elementData.setAttribute("class", setClass);
    return elementData;
  } */
}
class TpncSet {
  /* static setGenerateElement(elementData, dText, dHref, dIndex = []) {
    switch (dIndex.length) {
      case 0: {
        if (dText) {
          elementData.textContent = dText;
        }
        if (dHref) {
          elementData.setAttribute("href", dHref);
        }
        break;
      }
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
  static setTpncExaDnioGro(isActive) {
    /* const dnioGro = document.querySelectorAll(".tpnc-z-dnio .tpnc-e-dnio-gro"); */
    const {
      tpncExaDnioGro
    } = TpncGet.getTpncIoGroup();
    if (isActive) {
      /* Activation */
      /* gap 0.475rem 0.35rem */
      tpncExaDnioGro[0].style.transform = "translate(0rem, 0.825rem) rotate(45deg) scale(1.3, 1)";
      tpncExaDnioGro[1].style.transform = "translate(-2rem, 0rem)";
      tpncExaDnioGro[2].style.transform = "translate(0rem, -0.825rem) rotate(-45deg) scale(1.3, 1)";

      tpncExaDnioGro[1].style.opacity = "0";
    } else {
      /* Deactivation */
      tpncExaDnioGro[0].style.transform = "";
      tpncExaDnioGro[1].style.transform = "";
      tpncExaDnioGro[2].style.transform = "";

      tpncExaDnioGro[1].style.opacity = "";
    }
  }
  static setTpncExaSnioGro(isActive) {
    /* const snioGro = document.querySelectorAll(".tpnc-z-snio .tpnc-e-snio-gro"); */
    const {
      tpncExaSnioGro
    } = TpncGet.getTpncIoGroup();
    if (isActive) {
      /* Activation */
      /* gap 0.25rem 0.5rem */
      tpncExaSnioGro[1].style.transform = "translate(0.375rem, 0.375rem) rotate(45deg) scale(0.7, 1.8)";
      tpncExaSnioGro[3].style.transform = "translate(0.375rem, -0.375rem) rotate(45deg) scale(1.8, 0.7)";
      tpncExaSnioGro[5].style.transform = "translate(-0.375rem, 0.375rem) rotate(45deg) scale(1.8, 0.7)";
      tpncExaSnioGro[7].style.transform = "translate(-0.375rem, -0.375rem) rotate(45deg) scale(0.7, 1.8)";
  
      tpncExaSnioGro[0].style.transform = "rotate(45deg) scale(1, 0.7)";
      tpncExaSnioGro[2].style.transform = "rotate(45deg) scale(0.7, 1)";
      tpncExaSnioGro[6].style.transform = "rotate(45deg) scale(0.7, 1)";
      tpncExaSnioGro[8].style.transform = "rotate(45deg) scale(1, 0.7)";
  
      tpncExaSnioGro[4].style.transform = "rotate(45deg) scale(0.7)";
    } else {
      /* Deactivation */
      for (let i = 0; i < tpncExaSnioGro.length; i++) {
        tpncExaSnioGro[i].style.transform = "";
      }
    }
  }
  static setAppendFragment(tpncFragment, tempSaveElement) {
    tempSaveElement["zettaLio"].append(
      tempSaveElement["exaLioLink"]
    );
    tempSaveElement["yotta"].append(
      tempSaveElement["zettaLio"],
      tempSaveElement["zettaDnio"],
      tempSaveElement["zettaSnio"]
    );
    tempSaveElement["yottaSnto"].append(
      tempSaveElement["zettaSntoTitle"]
    );
    tpncFragment.append(
      tempSaveElement["yotta"],
      tempSaveElement["yottaSdo"],
      tempSaveElement["yottaSnto"]
    );
  }
}
export {
  TpncAccessor,
  TpncController
};
/* DESCRIPTION
 * Accessor
 * Controller -> Manager -> Handler
 * Get, Set, Setup, Reset
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