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
    /* TpncManager.removeEvent();
    TpncManager.addEvent(); */
    TpncManager.event();
  }
}
class TpncManager {
  static init() {

  }
  static initOnLoad() {
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
  /* static addEvent() {
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
      const {
        tpncZettaDnio
      } = TpncGet.getTpncIoGroup();
      tpncZettaDnio.removeEventListener(
        "click",
        TpncHandler.tpncZettaDnio
      );
    }
  } */
  static event() {
    const {
      tpncZettaDnio
    } = TpncGet.getTpncIoGroup();
    let eventListenerType = "";
    if (FwaConfig.currentDisplayType === 1 && FwaConfig.previousDisplayType >= 2) {
      eventListenerType = "addEventListener";
    } else if (FwaConfig.currentDisplayType >= 2 && FwaConfig.previousDisplayType === 1) {
      eventListenerType = "removeEventListener";
    }
    if (eventListenerType) {
      tpncZettaDnio[eventListenerType]("click", TpncHandler.tpncZettaDnio);
    }
  }
}
class TpncHandler {
  static tpncZettaDnio() {
    /* TPNC */
    const {
      tpncYottaSdo
    } = TpncGet.getTpncSdoGroup();
    /* DNC */
    const {
      dncR
    } = DncAccessor.getDncRoot();
    /* ECC-NOCO */
    const {
      eccYottaNoco
    } = EccAccessor.getEccNocoGroup();
    const displayTypeState = TpncGet.getDisplayTypeState();
    /*  */
    let isActive = null;
    let type = "";
    let eventListenerType = "";
    if (!DncAccessor.isActiveDnc) {
      isActive = true;
      type = "add";
      eventListenerType = "addEventListener";
    } else {
      isActive = false;
      type = "remove";
      eventListenerType = "removeEventListener";
    }
    /*  */
    switch (displayTypeState) {
      case 1: {
        if (isActive) {
          if (SncAccessor.isActiveSnc) {
            TpncHandler.tpncZettaSnio();
          }
          eccYottaNoco.classList.remove("cl-mdt-tpnc-z-dnio-handler-disabled");
          eccYottaNoco.classList.add("cl-mdt-tpnc-z-dnio-handler");
        } else {
          DncAccessor.resetDnc(displayTypeState);
          eccYottaNoco.classList.remove("cl-mdt-tpnc-z-dnio-handler");
          eccYottaNoco.classList.add("cl-mdt-tpnc-z-dnio-handler-disabled");
        }
        TpncSet.setTpncExaDnioGro(isActive);
        tpncYottaSdo.classList[type]("cl-mdt-tpnc-z-dnio-handler");
        dncR.classList[type]("cl-mdt-tpnc-z-dnio-handler");
        eccYottaNoco[eventListenerType]("click", TpncHandler.tpncZettaDnio);
        DncAccessor.isActiveDnc = isActive;
        break;
      }
    }

    /* if (!DncAccessor.isActiveDnc) {
      TpncSet.setTpncZettaDnioHandler(true, displayTypeState);
      /* ========== Activation ========== 
      switch (displayTypeState) {
        case 1: { */
          /* ----- Mobile Display Type ----- */
          /* TpncSet.setTpncZettaDnioHandler(); */
          /* if (SncAccessor.isActiveSnc) {
            TpncHandler.tpncZettaSnio();
          } */
          /* TPNC */
          /* tpncYottaSdo.style.display = "block"; */
          /* tpncYottaSdo.classList.add("display-block"); */
          /* tpncYottaSdo.classList.add("cl-mdt-tpnc-z-dnio-handler");
          TpncSet.setTpncExaDnioGro(true); */
          /* DNC */
          /* dncR.style.left = "0%"; */
          /* dncR.classList.add("left-0"); */
          /* dncR.classList.add("cl-mdt-tpnc-z-dnio-handler"); */
          /* ECC-NOCO */
          /* eccYottaNoco.style.left = "80%"; */
          /* eccYottaNoco.classList.remove("left-100", "left-0");
          eccYottaNoco.classList.add("left-80"); */
          /* eccYottaNoco.classList.remove("cl-mdt-tpnc-z-dnio-handler-disabled");
          eccYottaNoco.classList.add("cl-mdt-tpnc-z-dnio-handler");
          eccYottaNoco.addEventListener("click", TpncHandler.tpncZettaDnio); */
          /* ------------------------ */
          /* break;
        }
      }
      DncAccessor.isActiveDnc = true; */
      /* ============================== */
    /* } else {
      TpncSet.setTpncZettaDnioHandler(false, displayTypeState);
      /* ========== Deactivation ========== 
      switch (displayTypeState) {
        case 1: { */
          /* ===== Mobile Display Type =====*/
          /* TPNC */
          /* tpncYottaSdo.style.display = ""; */
          /* tpncYottaSdo.classList.remove("display-block"); */
          /* tpncYottaSdo.classList.remove("cl-mdt-tpnc-z-dnio-handler");
          TpncSet.setTpncExaDnioGro(false); */
          /* DNC */
          /* dncR.style.left = ""; */
          /* dncR.classList.remove("left-0"); */
          /* dncR.classList.remove("cl-mdt-tpnc-z-dnio-handler"); */
          /* ECC-NOCO */
          /* eccYottaNoco.style.left = "100%"; */
          /* eccYottaNoco.classList.remove("left-80", "left-0");
          eccYottaNoco.classList.add("left-100"); */
          /* eccYottaNoco.classList.remove("cl-mdt-tpnc-z-dnio-handler");
          eccYottaNoco.classList.add("cl-mdt-tpnc-z-dnio-handler-disabled");
          eccYottaNoco.removeEventListener("click", TpncHandler.tpncZettaDnio); */
          /* break;
        }
      }
      DncAccessor.resetDnc(displayTypeState);
      DncAccessor.isActiveDnc = false; 
      /* ============================== 
    } */
  }
  static tpncZettaSnio() {
    const {
      nplcR
    } = NplcAccessor.getNplcRoot();
    const {
      dncR
    } = DncAccessor.getDncRoot();
    const {
      dncY
    } = DncAccessor.getDncGroup();
    const {
      sncR
    } = SncAccessor.getSncRoot();
    const {
      eccYottaNoco
    } = EccAccessor.getEccNocoGroup();
    const {
      eccZettaPrcoRgro
    } = EccAccessor.getEccPrcoGroup();
    const {
      tpncY
    } = TpncGet.getTpncGroup();
    const {
      tpncYottaSnto
    } = TpncGet.getTpncSntoGroup();
    const {
      tpncYottaSdo
    } = TpncGet.getTpncSdoGroup();
    const displayTypeState = TpncGet.getDisplayTypeState();
    /*  */
    let isActive = null;
    let type = "";
    let eventListenerType = "";
    let temporaryData = 0;
    if (!SncAccessor.isActiveSnc) {
      isActive = true;
      type = "add";
      eventListenerType = "addEventListener";
      temporaryData = 768 + (16 * 20);
    } else {
      isActive = false;
      type = "remove";
      eventListenerType = "removeEventListener";
    }
    /*  */
    switch (displayTypeState) {
      case 1: {
        if (isActive) {
          if (DncAccessor.isActiveDnc) {
            TpncHandler.tpncZettaDnio();
          }
        }
        TpncSet.setTpncExaSnioGro(isActive);
        tpncYottaSdo.classList[type]("cl-mdt-tpnc-z-snio-handler");
        sncR.classList[type]("cl-mdt-tpnc-z-snio-handler");
        eccYottaNoco.classList.remove(
          "cl-mdt-tpnc-z-dnio-handler-disabled"
        );
        eccYottaNoco.classList[type]("cl-mdt-tpnc-z-snio-handler");
        eccYottaNoco[eventListenerType]("click", TpncHandler.tpncZettaSnio);
        break;
      }
      case 2: {
        if (isActive) {
          if (nplcR.clientWidth < temporaryData) {
            /* add nptlcZettaTno, npclcZ */
            const nptlcZettaTno = nplcR.querySelector(".nptlc-z-tno");
            nptlcZettaTno.style.gridTemplateColumns = "1fr 1fr";
            const npclcZ = nplcR.querySelector(".npclc-z");
            npclcZ.style.gridTemplateColumns = "1fr";
          }
          for (let i = 0; i < dncY.length; i++) {
            if (dncY[i].isActive) {
              DncAccessor.resetDnc(displayTypeState);
              break;
            }
          }
        } else {
          /* remove nptlcZettaTno, npclcZ */
          const nptlcZettaTno = nplcR.querySelector(".nptlc-z-tno");
          nptlcZettaTno.style.gridTemplateColumns = "";
          const npclcZ = nplcR.querySelector(".npclc-z");
          npclcZ.style.gridTemplateColumns = "";
        }
        TpncSet.setTpncExaSnioGro(isActive);
        tpncYottaSdo.classList[type]("cl-tdt-tpnc-z-snio-handler");
        nplcR.classList[type]("cl-tdt-tpnc-z-snio-handler");
        eccZettaPrcoRgro.classList[type]("cl-tdt-tpnc-z-snio-handler");
        sncR.classList[type]("cl-tdt-tpnc-z-snio-handler");
        tpncYottaSnto.classList[type]("cl-tdt-tpnc-z-snio-handler");
        tpncY.classList[type]("cl-tdt-tpnc-z-snio-handler");
        break;
      }
      case 3: {
        TpncSet.setTpncExaSnioGro(isActive);
        tpncYottaSdo.classList[type]("cl-ddt-tpnc-z-snio-handler");
        nplcR.classList[type]("cl-ddt-tpnc-z-snio-handler");
        sncR.classList[type]("cl-ddt-tpnc-z-snio-handler");
        eccZettaPrcoRgro.classList[type]("cl-ddt-tpnc-z-snio-handler");
        tpncYottaSnto.classList[type]("cl-ddt-tpnc-z-snio-handler");
        dncR.classList[type]("cl-ddt-tpnc-z-snio-handler");
        break;
      }
    }
    if (!isActive) {
      SncAccessor.resetSnc(displayTypeState);
    }
    SncAccessor.isActiveSnc = isActive;
    /* if (!SncAccessor.isActiveSnc) {
      TpncSet.setClTpncZettaSnioHandler(true, displayTypeState);
      /* =============== Activation: =============== 
      switch (displayTypeState) {
        case 1: { */
          /* Deactivation DNIO */
          /* TpncSet.setClTpncZettaSnioHandler("add", displayTypeState); */
          /* if (DncAccessor.isActiveDnc) {
            TpncHandler.tpncZettaDnio();
          } */
          /* TPNC */
          /* tpncYottaSdo.style.display = "block"; */
          /* tpncYottaSdo.classList.add("display-block"); */
          /* tpncYottaSdo.classList.add("cl-mdt-tpnc-z-snio-handler"); */
          /* TpncSet.setTpncExaSnioGro(true); */
          /* SNC */
          /* sncR.style.right = "0%"; */
          /* sncR.classList.add("right-0"); */
          /* sncR.classList.add("cl-mdt-tpnc-z-snio-handler"); */
          /* ECC-NOCO */
          /* eccYottaNoco.style.left = "0%"; */
          /* eccYottaNoco.classList.remove("left-80", "left-100");
          eccYottaNoco.classList.add("left-0"); */
          /* eccYottaNoco.classList.remove("cl-mdt-tpnc-z-dnio-handler-disabled");
          eccYottaNoco.classList.add("cl-mdt-tpnc-z-snio-handler");
          eccYottaNoco.addEventListener("click", TpncHandler.tpncZettaSnio); */
          /* TpncSet.setClTpncZettaSnioHandler("add", displayTypeState); */
          /* break;
        }
        case 2: { */
          /* [ H.T_A: Reset ] { Dnc.Complex } (  ) */
          /* for (let i = 0; i < dncY.length; i++) {
            if (dncY[i].isActive) {
              DncAccessor.resetDnc(displayTypeState);
              break;
            }
          } */
          /* !!!!! Nplc < 768px grid-template-columns: 1fr 1fr; */
          /* let temporaryData = 768 + (16 * 20);
          if (nplcR.clientWidth < temporaryData) {
            /* !!!!! v1.1.15a [add] (getNplcAccessor) !!!!! 
            const nptlcZettaTno = nplcR.querySelector(".nptlc-z-tno");
            nptlcZettaTno.style.gridTemplateColumns = "1fr 1fr";
            const npclcZ = nplcR.querySelector(".npclc-z");
            npclcZ.style.gridTemplateColumns = "1fr";
          } */

          /* tpncYottaSdo.style.display = "block"; */
          /* tpncYottaSdo.classList.add("display-block"); */
          /* tpncYottaSdo.classList.add("cl-tdt-tpnc-z-snio-handler"); */
          /* [ T.A: Set ] { TpncExaSnioGro } */
          /* TpncSet.setTpncExaSnioGro(true); */
          /* [ T.A: Set ] { nplcRootHeptg } ( Tag.main ) */
          /* nplcR.style.marginRight = "20rem"; */
          /* nplcR.classList.add("cl-tdt-tpnc-z-snio-handler"); */
          /* [ T.A: Set ] { eccZettaPrcoRgro } ( Tag.div ) */
          /* eccZettaPrcoRgro.style.right = "20rem"; */
          /* eccZettaPrcoRgro.classList.add("cl-tdt-tpnc-z-snio-handler"); */
          /* [ T.A: Set ] { sncR } ( Tag.nav ) */
          /* sncR.style.right = "0%"; */
          /* sncR.classList.add("cl-tdt-tpnc-z-snio-handler"); */
          /* !!!!! v1.1.14a [test] (support-navigation-title) !!!!!! */
          /* tpncYottaSnto.style.opacity = "1";
          tpncYottaSnto.style.transform = "scale(1, 1)";
          tpncY.style.gap = "0rem 16rem"; */
          /* tpncYottaSnto.classList.add("cl-tdt-tpnc-z-snio-handler");
          tpncY.classList.add("cl-tdt-tpnc-z-snio-handler"); */
          /* break;
        }
        case 3: { */
          /* tpncYottaSdo.style.display = "block"; */
          /* tpncYottaSdo.classList.add("display-block"); */
          /* tpncYottaSdo.classList.add("cl-ddt-tpnc-z-snio-handler"); */
          /* TpncSet.setTpncExaSnioGro(true); */
          
          /* nplcR.style.marginRight = "20rem";
          sncR.style.right = "0%";
          eccZettaPrcoRgro.style.right = "20rem";
          tpncYottaSnto.style.opacity = "1";
          tpncYottaSnto.style.transform = "scale(1, 1)";
          dncR.style.width = "calc(100% - 12rem - 16rem - 4rem)"; */
          /* nplcR.classList.add("cl-ddt-tpnc-z-snio-handler");
          sncR.classList.add("cl-ddt-tpnc-z-snio-handler");
          eccZettaPrcoRgro.classList.add("cl-ddt-tpnc-z-snio-handler");
          tpncYottaSnto.classList.add("cl-ddt-tpnc-z-snio-handler");
          dncR.classList.add("cl-ddt-tpnc-z-snio-handler"); */
          /* break;
        }
      }
      SncAccessor.isActiveSnc = true;
      /* =============== Activation; =============== 
    } else {
      TpncSet.setClTpncZettaSnioHandler(false, displayTypeState);
      /* ========== Deactivation Sni ========== 
      switch (displayTypeState) {
        case 1: { */
          /* TPNC */
          /* tpncYottaSdo.style.display = ""; */
          /* tpncYottaSdo.classList.remove("display-block"); */
          /* tpncYottaSdo.classList.remove("cl-mdt-tpnc-z-snio-handler"); */
          /* TpncSet.setTpncExaSnioGro(false); */
          /* SNC */
          /* sncR.style.right = ""; */
          /* sncR.classList.remove("right-0"); */
          /* sncR.classList.remove("cl-mdt-tpnc-z-snio-handler"); */
          /* ECC-NOCO */
          /* eccYottaNoco.style.left = "-20%"; */
          /* eccYottaNoco.classList.remove("left-0", "left-80", "left-100"); */
          /* eccYottaNoco.classList.remove("cl-mdt-tpnc-z-snio-handler");
          eccYottaNoco.removeEventListener("click", TpncHandler.tpncZettaSnio); */
          /* TpncSet.setClTpncZettaSnioHandler("remove", displayTypeState); */
          /* break;
        }
        case 2: { */
          /* !!!!! v1.1.15a [add] (getNplcAccessor) !!!!! */
          /* const nptlcZettaTno = nplcR.querySelector(".nptlc-z-tno");
          nptlcZettaTno.style.gridTemplateColumns = "";
          const npclcZ = nplcR.querySelector(".npclc-z");
          npclcZ.style.gridTemplateColumns = ""; */
          /* TPNC */
          /* tpncYottaSdo.style.display = ""; */
          /* tpncYottaSdo.classList.remove("cl-tdt-tpnc-z-snio-handler"); */
          /* TpncSet.setTpncExaSnioGro(false); */
          /* nplcR.style.marginRight = "";
          eccZettaPrcoRgro.style.right = "";
          sncR.style.right = "";
          tpncYottaSnto.style.opacity = "";
          tpncYottaSnto.style.transform = "";
          tpncY.style.gap = ""; */
          /* nplcR.classList.remove("cl-tdt-tpnc-z-snio-handler");
          eccZettaPrcoRgro.classList.remove("cl-tdt-tpnc-z-snio-handler");
          sncR.classList.remove("cl-tdt-tpnc-z-snio-handler");
          tpncYottaSnto.classList.remove("cl-tdt-tpnc-z-snio-handler");
          tpncY.classList.remove("cl-tdt-tpnc-z-snio-handler"); */
          /* break;
        }
        case 3: { */
          /* tpncYottaSdo.style.display = ""; */
          /* tpncYottaSdo.classList.remove("cl-ddt-tpnc-z-snio-handler"); */
          /* TpncSet.setTpncExaSnioGro(false); */
          /* nplcR.style.marginRight = "";
          sncR.style.right = "";
          eccZettaPrcoRgro.style.right = "";
          tpncYottaSnto.style.opacity = "";
          tpncYottaSnto.style.transform = "";
          dncR.style.width = ""; */
          /* nplcR.classList.remove("cl-ddt-tpnc-z-snio-handler");
          sncR.classList.remove("cl-ddt-tpnc-z-snio-handler");
          eccZettaPrcoRgro.classList.remove("cl-ddt-tpnc-z-snio-handler");
          tpncYottaSnto.classList.remove("cl-ddt-tpnc-z-snio-handler");
          dncR.classList.remove("cl-ddt-tpnc-z-snio-handler"); */
          /* break;
        }
      }
      SncAccessor.resetSnc(displayTypeState);
      SncAccessor.isActiveSnc = false;
      /* ============================== 
    } */
  }
}
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
}
class TpncSet {
  /* static setTpncZettaDnioHandler(isActive, displayTypeState) {
    const {
      tpncYottaSdo
    } = TpncGet.getTpncSdoGroup();
    /* DNC 
    const {
      dncR
    } = DncAccessor.getDncRoot();
    /* ECC-NOCO 
    const {
      eccYottaNoco
    } = EccAccessor.getEccNocoGroup();
    let type = "";
    let typeEventListener = "";
    if (isActive) {
      type = "add";
      typeEventListener = "addEventListener";
    } else {
      type = "remove";
      typeEventListener = "removeEventListener";
    }
    switch (displayTypeState) {
      case 1: {
        if (isActive) {
          if (SncAccessor.isActiveSnc) {
            TpncHandler.tpncZettaSnio();
          }
          eccYottaNoco.classList.remove("cl-mdt-tpnc-z-dnio-handler-disabled");
          eccYottaNoco.classList.add("cl-mdt-tpnc-z-dnio-handler");
        } else {
          eccYottaNoco.classList.remove("cl-mdt-tpnc-z-dnio-handler");
          eccYottaNoco.classList.add("cl-mdt-tpnc-z-dnio-handler-disabled");
        }
        TpncSet.setTpncExaDnioGro(isActive);
        tpncYottaSdo.classList[type]("cl-mdt-tpnc-z-dnio-handler");
        dncR.classList[type]("cl-mdt-tpnc-z-dnio-handler");
        eccYottaNoco[typeEventListener]("click", TpncHandler.tpncZettaDnio);
        break;
      }
    }
  } */
  /* static setClTpncZettaSnioHandler(isActive, displayTypeState) {
    const {
      nplcR
    } = NplcAccessor.getNplcRoot();
    const {
      dncR
    } = DncAccessor.getDncRoot();
    const {
      dncY
    } = DncAccessor.getDncGroup();
    const {
      sncR
    } = SncAccessor.getSncRoot();
    const {
      eccYottaNoco
    } = EccAccessor.getEccNocoGroup();
    const {
      eccZettaPrcoRgro
    } = EccAccessor.getEccPrcoGroup();
    const {
      tpncY
    } = TpncGet.getTpncGroup();
    const {
      tpncYottaSnto
    } = TpncGet.getTpncSntoGroup();
    const {
      tpncYottaSdo
    } = TpncGet.getTpncSdoGroup();
    /*  
    let type = "";
    let typeEvent = "";
    let temporaryData = 0;
    if (isActive) {
      type = "add";
      typeEvent = "addEventListener";
      temporaryData = 768 + (16 * 20);
    } else {
      type = "remove";
      typeEvent = "removeEventListener";
    }
    /*  
    switch (displayTypeState) {
      case 1: {
        if (isActive) {
          if (DncAccessor.isActiveDnc) {
            TpncHandler.tpncZettaDnio();
          }
        }
        TpncSet.setTpncExaSnioGro(isActive);
        tpncYottaSdo.classList[type]("cl-mdt-tpnc-z-snio-handler");
        sncR.classList[type]("cl-mdt-tpnc-z-snio-handler");
        eccYottaNoco.classList.remove(
          "cl-mdt-tpnc-z-dnio-handler-disabled"
        );
        eccYottaNoco.classList[type]("cl-mdt-tpnc-z-snio-handler");
        eccYottaNoco[typeEvent]("click", TpncHandler.tpncZettaSnio);
        break;
      }
      case 2: {
        if (isActive) {
          if (nplcR.clientWidth < temporaryData) {
            /* add nptlcZettaTno, npclcZ 
            const nptlcZettaTno = nplcR.querySelector(".nptlc-z-tno");
            nptlcZettaTno.style.gridTemplateColumns = "1fr 1fr";
            const npclcZ = nplcR.querySelector(".npclc-z");
            npclcZ.style.gridTemplateColumns = "1fr";
          }
          for (let i = 0; i < dncY.length; i++) {
            if (dncY[i].isActive) {
              DncAccessor.resetDnc(displayTypeState);
              break;
            }
          }
        } else {
          /* remove nptlcZettaTno, npclcZ 
          const nptlcZettaTno = nplcR.querySelector(".nptlc-z-tno");
          nptlcZettaTno.style.gridTemplateColumns = "";
          const npclcZ = nplcR.querySelector(".npclc-z");
          npclcZ.style.gridTemplateColumns = "";
        }
        TpncSet.setTpncExaSnioGro(isActive);
        tpncYottaSdo.classList[type]("cl-tdt-tpnc-z-snio-handler");
        nplcR.classList[type]("cl-tdt-tpnc-z-snio-handler");
        eccZettaPrcoRgro.classList[type]("cl-tdt-tpnc-z-snio-handler");
        sncR.classList[type]("cl-tdt-tpnc-z-snio-handler");
        tpncYottaSnto.classList[type]("cl-tdt-tpnc-z-snio-handler");
        tpncY.classList[type]("cl-tdt-tpnc-z-snio-handler");
        break;
      }
      case 3: {
        TpncSet.setTpncExaSnioGro(isActive);
        tpncYottaSdo.classList[type]("cl-ddt-tpnc-z-snio-handler");
        nplcR.classList[type]("cl-ddt-tpnc-z-snio-handler");
        sncR.classList[type]("cl-ddt-tpnc-z-snio-handler");
        eccZettaPrcoRgro.classList[type]("cl-ddt-tpnc-z-snio-handler");
        tpncYottaSnto.classList[type]("cl-ddt-tpnc-z-snio-handler");
        dncR.classList[type]("cl-ddt-tpnc-z-snio-handler");
        break;
      }
    }
    /*  
  } */
  static setTpncExaDnioGro(isActive) {
    const {
      tpncExaDnioGro
    } = TpncGet.getTpncIoGroup();
    /*  */
    let type = "";
    if (isActive) {
      type = "add";
    } else {
      type = "remove";
    }
    /*  */
    for (let i = 0; i < tpncExaDnioGro.length; i++) {
      tpncExaDnioGro[i].classList[type]("cl-set-tpnc-e-dnio-gro");
    }
    /* if (isActive) {
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
    } */
  }
  static setTpncExaSnioGro(isActive) {
    const {
      tpncExaSnioGro
    } = TpncGet.getTpncIoGroup();
    /*  */
    let type = "";
    if (isActive) {
      type = "add";
    } else {
      type = "remove";
    }
    /*  */
    for (let i = 0; i < tpncExaSnioGro.length; i++) {
      tpncExaSnioGro[i].classList[type]("cl-set-tpnc-e-snio-gro");
    }
    /* if (isActive) {
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
    } */
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
/* NOTE
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
/* AUTHORSHIP
 * Founder: Facooya
 */