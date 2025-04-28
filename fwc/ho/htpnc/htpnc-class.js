/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  FwaConfig
} from "../../../fwa/fwa-config.js";
import {
  HtpncTool
} from "./htpnc-tool.js";
import {
  FwcAccessor,
  BlfAccessor,
  HtpncConfig,
  HdncAccessor,
  HsncAccessor,
  HeccAccessor,
  NpmhcAccessor,
  NpmscAccessor,
  HdncConfig,
  HsncConfig
} from "../../fwc-hub.js";
class HtpncAccessor {
  /* static htpncCache = {};
  static isHtpncResizeKey = false; */
  /* static htpncZettaHsngoHandler() {
    HtpncHandler.htpncZettaHsngo();
  } */
  static tdtHtpncZettaHsngoHandler() {
    HtpncHandler.tdtHtpncZettaHsngo();
  }
}
class HtpncController {
  static init() {
    HtpncConfig.htpncGenerate();
    HtpncManager.init();
  }
  static load() {
    HtpncManager.load();
    HtpncManager.event(true);
  }
  static resizeDisplay() {
    HtpncManager.resizeDisplay();
    HtpncManager.event(false);
    HtpncManager.event(true);
  }
}
class HtpncManager {
  static init() {
    const {
      htpncZettaHdngo
    } = HtpncConfig.getHtpncHdngoGroup();
    const {
      htpncZettaHsngo
    } = HtpncConfig.getHtpncHsngoGroup();
    htpncZettaHdngo.isActive = false;
    htpncZettaHsngo.isActive = false;
  }
  static load() {
    /* const {
      htpncZettaHdngo
    } = HtpncConfig.getHtpncHdngoGroup();
    const {
      htpncZettaHsngo
    } = HtpncConfig.getHtpncHsngoGroup();

    if (FwaConfig.currentDisplayType === 1) {
      htpncZettaHdngo.addEventListener(
        "click",
        HtpncHandler.mdtHtpncZettaHdngo
      );
    }
    htpncZettaHsngo.addEventListener(
      "click",
      HtpncHandler.htpncZettaHsngo
    ); */
  }
  static resizeDisplay() {
    const {
      htpncZettaHdngo
    } = HtpncConfig.getHtpncHdngoGroup();
    const {
      htpncZettaHsngo
    } = HtpncConfig.getHtpncHsngoGroup();
    /* if (HdncAccessor.isActiveHdnc) {
      HtpncAccessor.isHtpncResizeKey = true;
      HtpncHandler.mdtHtpncZettaHdngo();
    }
    if (HsncAccessor.isActiveHsnc) {
      HtpncAccessor.isHtpncResizeKey = true;
      HtpncHandler.htpncZettaHsngo();
    } */
    if (htpncZettaHdngo.isActive) {
      HtpncHandler.mdtHtpncZettaHdngo();
    }
    switch (FwaConfig.currentDisplayType) {
      case 1: {
        if (htpncZettaHsngo.isActive) {
          HtpncHandler.mdtHtpncZettaHsngo();
        }
        break;
      }
      case 2: {
        if (htpncZettaHsngo.isActive) {
          HtpncHandler.tdtHtpncZettaHsngo();
        }
        break;
      }
      case 3: {
        if (htpncZettaHsngo.isActive) {
          HtpncHandler.ddtHtpncZettaHsngo();
        }
        break;
      }
    }
  }
  static generate_Old() {
    const {
      htpncR
    } = HtpncConfig.getHtpncRoot();
    const htpncFragment = document.createDocumentFragment();
    let tempGenerateElement = null;
    let tempSaveElement = {};
    /* =============== :Ys Group: =============== */
    for (let ysi = 0; ysi < HtpncConfig.htpncGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement2(
        HtpncConfig.htpncGroup[ysi]
      );
      tempSaveElement[HtpncConfig.htpncGroup[ysi].elementId] = tempGenerateElement;
    }
    /* =============== ;Ys Group; =============== */
    /* =============== :Zs Group: =============== */
    for (let ysi = 0; ysi < HtpncConfig.htpncLgoGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement2(
        HtpncConfig.htpncLgoGroup[ysi]
      );
      tempSaveElement[HtpncConfig.htpncLgoGroup[ysi].elementId] = tempGenerateElement;
    }
    /*  */
    for (let ysi = 0; ysi < HtpncConfig.htpncHdngoGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement2(
        HtpncConfig.htpncHdngoGroup[ysi]
      );
      tempSaveElement[HtpncConfig.htpncHdngoGroup[ysi].elementId] = tempGenerateElement;
    }
    /*  */
    for (let ysi = 0; ysi < HtpncConfig.htpncHsngoGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement2(
        HtpncConfig.htpncHsngoGroup[ysi]
      );
      tempSaveElement[HtpncConfig.htpncHsngoGroup[ysi].elementId] = tempGenerateElement;
    }
    /* =============== ;Zs Group; =============== */
    /* =============== :Hdngo Gro, Hsngo Gro Group: =============== */
    for (let ysi = 0; ysi < HtpncConfig.htpncHdngoGroLength; ysi++) {
      for (let zsi = 0; zsi < HtpncConfig.htpncHdngoGroGroup.length; zsi++) {
        tempGenerateElement = FwcAccessor.getGenerateElement2(
          HtpncConfig.htpncHdngoGroGroup[zsi]
        );
        tempSaveElement["htpncZettaHdngo"].append(tempGenerateElement);
      }
    }
    /*  */
    for (let ysi = 0; ysi < HtpncConfig.htpncHsngoGroLength; ysi++) {
      for (let zsi = 0; zsi < HtpncConfig.htpncHsngoGroGroup.length; zsi++) {
        tempGenerateElement = FwcAccessor.getGenerateElement2(
          HtpncConfig.htpncHsngoGroGroup[zsi]
        );
        tempSaveElement["htpncZettaHsngo"].append(tempGenerateElement);
      }
    }
    /* =============== ;Hdngo Gro, Hsngo Gro Group; =============== */
    /* =============== :Snto Group: =============== */
    for (let ysi = 0; ysi < HtpncConfig.htpncSntoGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement2(
        HtpncConfig.htpncSntoGroup[ysi]
      );
      tempSaveElement[HtpncConfig.htpncSntoGroup[ysi].elementId] = tempGenerateElement;
    }
    /* =============== ;Snto Group; =============== */
    /* =============== :Eco Group: =============== */
    for (let ysi = 0; ysi < HtpncConfig.htpncEcoGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement2(
        HtpncConfig.htpncEcoGroup[ysi]
      );
      tempSaveElement[HtpncConfig.htpncEcoGroup[ysi].elementId] = tempGenerateElement;
    }
    /* =============== ;Eco Group; =============== */
    /* =============== :Compile: =============== */
    HtpncSet.setAppendFragment(htpncFragment, tempSaveElement);
    htpncR.append(htpncFragment);
  }
  static event(isActive) {
    const {
      htpncZettaHdngo
    } = HtpncConfig.getHtpncHdngoGroup();
    const {
      htpncZettaHsngo
    } = HtpncConfig.getHtpncHsngoGroup();
    let displayType = FwaConfig.previousDisplayType;
    let eventListenerType = "removeEventListener";
    if (isActive) {
      displayType = FwaConfig.currentDisplayType;
      eventListenerType = "addEventListener";
    }
    /* let eventListenerType = "";
    if (FwaConfig.currentDisplayType === 1 && FwaConfig.previousDisplayType >= 2) {
      eventListenerType = "addEventListener";
    } else if (FwaConfig.currentDisplayType >= 2 && FwaConfig.previousDisplayType === 1) {
      eventListenerType = "removeEventListener";
    } */
    /* if (eventListenerType) {
      htpncZettaHdngo[eventListenerType]("click", HtpncHandler.mdtHtpncZettaHdngo);
    } */
    /* htpncZettaHsngo[eventListenerType](
      "click",
      HtpncHandler.htpncZettaHsngo
    ); */
    /*  */
    switch (displayType) {
      case 1: {
        htpncZettaHdngo[eventListenerType](
          "click",
          HtpncHandler.mdtHtpncZettaHdngo
        );
        htpncZettaHsngo[eventListenerType](
          "click",
          HtpncHandler.mdtHtpncZettaHsngo
        );
        break;
      }
      case 2: {
        htpncZettaHsngo[eventListenerType](
          "click",
          HtpncHandler.tdtHtpncZettaHsngo
        );
        break;
      }
      case 3: {
        htpncZettaHsngo[eventListenerType](
          "click",
          HtpncHandler.ddtHtpncZettaHsngo
        );
        break;
      }
    }
  }
}
class HtpncHandler {
  static mdtHtpncZettaHdngo() {
    /* TPNC */
    /* const {
      htpncZettaEcoSdo
    } = HtpncConfig.getHtpncEcoGroup(); */
    const {
      htpncYottaSdo
    } = HtpncConfig.getHtpncYottaGroup();
    const {
      htpncZettaHdngo
    } = HtpncConfig.getHtpncHdngoGroup();
    const {
      htpncZettaHsngo
    } = HtpncConfig.getHtpncHsngoGroup();
    /* DNC */
    const {
      hdncR
    } = HdncAccessor.getHdncRoot();
    /* ECC-NOO */
    const {
      heccYottaNoo
    } = HeccAccessor.getHeccNooGroup();
    /* const displayTypeState = HtpncGet.getDisplayTypeState(); */
    /*  */
    const clData = "cl-mdt-htpnc-z-hdngo-handler";
    const clDataDisabled = "cl-mdt-htpnc-z-hdngo-handler-disabled";
    let isActive = false;
    let type = "remove";
    let eventListenerType = "removeEventListener";
    if (!htpncZettaHdngo.isActive) {
      isActive = true;
      type = "add";
      eventListenerType = "addEventListener";
    }
    /*  */
    /* switch (displayTypeState) {
      case 1: {
        if (isActive) {
          if (HsncAccessor.isActiveHsnc) {
            /* HtpncHandler.htpncZettaHsngo(); 
          }
          heccYottaNoo.classList.remove("cl-mdt-htpnc-z-hdngo-handler-disabled");
          heccYottaNoo.classList.add("cl-mdt-htpnc-z-hdngo-handler");
        } else {
          HdncAccessor.setHdnc(displayTypeState);
          heccYottaNoo.classList.remove("cl-mdt-htpnc-z-hdngo-handler");
          heccYottaNoo.classList.add("cl-mdt-htpnc-z-hdngo-handler-disabled");
        }
        HtpncSet.setHtpncExaHdngoGro(isActive);
        /* htpncZettaEcoSdo.classList[type]("cl-mdt-htpnc-z-hdngo-handler"); 
        htpncYottaSdo.classList[type]("cl-mdt-htpnc-z-hdngo-handler");
        hdncR.classList[type]("cl-mdt-htpnc-z-hdngo-handler");
        heccYottaNoo[eventListenerType]("click", HtpncHandler.mdtHtpncZettaHdngo);
        HdncAccessor.isActiveHdnc = isActive;
        break;
      }
    } */
    /*  */
    if (isActive) {
      /* if (HsncAccessor.isActiveHsnc) {
        HtpncHandler.mdtHtpncZettaHsngo();
      } */
      if (htpncZettaHsngo.isActive) {
        HtpncHandler.mdtHtpncZettaHsngo();
      }
      heccYottaNoo.classList.remove(clDataDisabled);
      heccYottaNoo.classList.add(clData);
    } else {
      HdncAccessor.setHdnc(1);
      heccYottaNoo.classList.remove(clData);
      heccYottaNoo.classList.add(clDataDisabled);
    }
    HtpncTool.clHtpncExaHdngoGro(isActive);
    htpncYottaSdo.classList[type](clData);
    hdncR.classList[type](clData);
    heccYottaNoo[eventListenerType]("click", HtpncHandler.mdtHtpncZettaHdngo);
    /* HdncAccessor.isActiveHdnc = isActive; */
    htpncZettaHdngo.isActive = isActive;
  }
  static htpncZettaHsngo() {
    const {
      blfYottaNpmo
    } = BlfAccessor.getBlfGroup();
    const {
      npmhcR
    } = NpmhcAccessor.getNpmhcRoot();
    const {
      npmscR
    } = NpmscAccessor.getNpmscRoot();
    const {
      hdncR
    } = HdncAccessor.getHdncRoot();
    const {
      hdncY
    } = HdncAccessor.getHdncGroup();
    const {
      hsncR
    } = HsncAccessor.getHsncRoot();
    const {
      heccYottaNoo
    } = HeccAccessor.getHeccNooGroup();
    const {
      heccZettaPboRgro
    } = HeccAccessor.getHeccPboGroup();
    const {
      htpncY
    } = HtpncConfig.getHtpncGroup();
    /* const {
      htpncYottaSnto
    } = HtpncConfig.getHtpncSntoGroup(); */
    /* const {
      htpncZettaEcoSdo
    } = HtpncConfig.getHtpncEcoGroup(); */
    const {
      htpncYottaSnto,
      htpncYottaSdo
    } = HtpncConfig.getHtpncYottaGroup();
    const displayTypeState = HtpncGet.getDisplayTypeState();
    /*  */
    let isActive = false;
    let type = "remove";
    let eventListenerType = "removeEventListener";
    let temporaryData = 0;
    if (!HsncAccessor.isActiveHsnc) {
      isActive = true;
      type = "add";
      eventListenerType = "addEventListener";
      temporaryData = 768 + (16 * 20);
    }
    /*  */
    switch (displayTypeState) {
      case 1: {
        if (isActive) {
          if (HdncAccessor.isActiveHdnc) {
            HtpncHandler.mdtHtpncZettaHdngo();
          }
        }
        HtpncTool.clHtpncExaHsngoGro(isActive);
        /* htpncZettaEcoSdo.classList[type]("cl-mdt-htpnc-z-hsngo-handler"); */
        htpncYottaSdo.classList[type]("cl-mdt-htpnc-z-hsngo-handler");
        hsncR.classList[type]("cl-mdt-htpnc-z-hsngo-handler");
        heccYottaNoo.classList.remove(
          "cl-mdt-htpnc-z-hdngo-handler-disabled"
        );
        heccYottaNoo.classList[type]("cl-mdt-htpnc-z-hsngo-handler");
        heccYottaNoo[eventListenerType]("click", HtpncHandler.htpncZettaHsngo);
        break;
      }
      case 2: {
        if (isActive) {
          if (npmhcR.clientWidth < temporaryData) {
            const {
              npmhcZettaTno
            } = NpmhcAccessor.getNpmhcTnoGroup();
            const {
              npmscZ
            } = NpmscAccessor.getNpmscGroup();
            npmhcZettaTno.style.gridTemplateColumns = "1fr 1fr";
            for (let i = 0; i < npmscZ.length; i++) {
              npmscZ[i].style.gridTemplateColumns = "1fr";
            }
          }
          for (let i = 0; i < hdncY.length; i++) {
            if (hdncY[i].isActive) {
              HdncAccessor.setHdnc(displayTypeState);
              break;
            }
          }
        } else {
          const {
            npmhcZettaTno
          } = NpmhcAccessor.getNpmhcTnoGroup();
          const {
            npmscZ
          } = NpmscAccessor.getNpmscGroup();
          npmhcZettaTno.style.gridTemplateColumns = "";
          for (let i = 0; i < npmscZ.length; i++) {
            npmscZ[i].style.gridTemplateColumns = "";
          }
        }
        HtpncTool.clHtpncExaHsngoGro(isActive);
        /* htpncZettaEcoSdo.classList[type]("cl-tdt-htpnc-z-hsngo-handler"); */
        htpncYottaSdo.classList[type]("cl-tdt-htpnc-z-hsngo-handler");
        blfYottaNpmo.classList[type]("cl-tdt-htpnc-z-hsngo-handler");
        heccZettaPboRgro.classList[type]("cl-tdt-htpnc-z-hsngo-handler");
        hsncR.classList[type]("cl-tdt-htpnc-z-hsngo-handler");
        htpncYottaSnto.classList[type]("cl-tdt-htpnc-z-hsngo-handler");
        htpncY.classList[type]("cl-tdt-htpnc-z-hsngo-handler");
        break;
      }
      case 3: {
        HtpncTool.clHtpncExaHsngoGro(isActive);
        /* htpncZettaEcoSdo.classList[type]("cl-ddt-htpnc-z-hsngo-handler"); */
        htpncYottaSdo.classList[type]("cl-ddt-htpnc-z-hsngo-handler");
        blfYottaNpmo.classList[type]("cl-ddt-htpnc-z-hsngo-handler");
        hsncR.classList[type]("cl-ddt-htpnc-z-hsngo-handler");
        heccZettaPboRgro.classList[type]("cl-ddt-htpnc-z-hsngo-handler");
        htpncYottaSnto.classList[type]("cl-ddt-htpnc-z-hsngo-handler");
        hdncR.classList[type]("cl-ddt-htpnc-z-hsngo-handler");
        break;
      }
    }
    if (!isActive) {
      HsncAccessor.setHsnc(displayTypeState);
    }
    HsncAccessor.isActiveHsnc = isActive;
  }
  /* ================================================== */
  static mdtHtpncZettaHsngo() {
    const {
      htpncYottaSdo
    } = HtpncConfig.getHtpncYottaGroup();
    const {
      htpncZettaHdngo
    } = HtpncConfig.getHtpncHdngoGroup();
    const {
      htpncZettaHsngo
    } = HtpncConfig.getHtpncHsngoGroup();
    const {
      hsncR
    } = HsncConfig.getHsncRoot();
    const {
      heccYottaNoo
    } = HeccAccessor.getHeccNooGroup();
    /*  */
    const clData = "cl-mdt-htpnc-z-hsngo-handler";
    const clDataDisabled = "cl-mdt-htpnc-z-hdngo-handler-disabled";
    let isActive = false;
    let clType = "remove";
    let eventListenerType = "removeEventListener";
    if (!htpncZettaHsngo.isActive) {
      isActive = true;
      clType = "add";
      eventListenerType = "addEventListener";
    }
    if (isActive) {
      /* if (HdncAccessor.isActiveHdnc) {
        HtpncHandler.mdtHtpncZettaHdngo();
      } */
      if (htpncZettaHdngo.isActive) {
        HtpncHandler.mdtHtpncZettaHdngo();
      }
    } else {
      HsncAccessor.setHsnc(1);
    }
    HtpncTool.clHtpncExaHsngoGro(isActive);
    /* htpncZettaEcoSdo.classList[type]("cl-mdt-htpnc-z-hsngo-handler"); */
    htpncYottaSdo.classList[clType](clData);
    hsncR.classList[clType](clData);
    heccYottaNoo.classList.remove(clDataDisabled);
    heccYottaNoo.classList[clType](clData);
    heccYottaNoo[eventListenerType]("click", HtpncHandler.mdtHtpncZettaHsngo);
    /*  */
    /* HsncAccessor.isActiveHsnc = isActive; */
    htpncZettaHsngo.isActive = isActive;
  }
  /* -------------------------------------------------- */
  static tdtHtpncZettaHsngo() {
    const {
      htpncY
    } = HtpncConfig.getHtpncGroup();
    const {
      htpncYottaSnto,
      htpncYottaSdo
    } = HtpncConfig.getHtpncYottaGroup();
    const {
      htpncZettaHsngo
    } = HtpncConfig.getHtpncHsngoGroup();
    /* const {
      htpncYottaSnto
    } = HtpncConfig.getHtpncSntoGroup(); */
    const {
      hdncY
    } = HdncConfig.getHdncGroup();
    const {
      hsncR
    } = HsncConfig.getHsncRoot();
    const {
      blfYottaNpmo
    } = BlfAccessor.getBlfGroup();
    const {
      npmhcR
    } = NpmhcAccessor.getNpmhcRoot();
    const {
      npmhcZettaTno
    } = NpmhcAccessor.getNpmhcTnoGroup();
    const {
      npmscZ
    } = NpmscAccessor.getNpmscGroup();
    const {
      heccZettaPboRgro
    } = HeccAccessor.getHeccPboGroup();
    /*  */
    const clData = "cl-tdt-htpnc-z-hsngo-handler";
    let isActive = false;
    let clType = "remove";
    let temporaryData = 0;
    if (!htpncZettaHsngo.isActive) {
      isActive = true;
      clType = "add";
      temporaryData = 768 + (16 * 20);
    }
    /*  */
    if (isActive) {
      if (npmhcR.clientWidth < temporaryData) {
        npmhcZettaTno.style.gridTemplateColumns = "1fr 1fr";
        for (let i = 0; i < npmscZ.length; i++) {
          npmscZ[i].style.gridTemplateColumns = "1fr";
        }
      }
      for (let i = 0; i < hdncY.length; i++) {
        if (hdncY[i].isActive) {
          HdncAccessor.setHdnc(2);
          break;
        }
      }
    } else {
      HsncAccessor.setHsnc(2);
      npmhcZettaTno.style.gridTemplateColumns = "";
      for (let i = 0; i < npmscZ.length; i++) {
        npmscZ[i].style.gridTemplateColumns = "";
      }
    }
    HtpncTool.clHtpncExaHsngoGro(isActive);
    /* htpncZettaEcoSdo.classList[type]("cl-tdt-htpnc-z-hsngo-handler"); */
    htpncYottaSdo.classList[clType](clData);
    blfYottaNpmo.classList[clType](clData);
    heccZettaPboRgro.classList[clType](clData);
    hsncR.classList[clType](clData);
    htpncYottaSnto.classList[clType](clData);
    htpncY.classList[clType](clData);
    /*  */
    /* HsncAccessor.isActiveHsnc = isActive; */
    htpncZettaHsngo.isActive = isActive;
  }
  /* -------------------------------------------------- */
  static ddtHtpncZettaHsngo() {
    const {
      htpncYottaSnto,
      htpncYottaSdo
    } = HtpncConfig.getHtpncYottaGroup();
    /* const {
      htpncYottaSnto
    } = HtpncConfig.getHtpncSntoGroup(); */
    const {
      htpncZettaHsngo
    } = HtpncConfig.getHtpncHsngoGroup();
    const {
      hdncR
    } = HdncConfig.getHdncRoot();
    const {
      hsncR
    } = HsncConfig.getHsncRoot();
    const {
      heccZettaPboRgro
    } = HeccAccessor.getHeccPboGroup();
    const {
      blfYottaNpmo
    } = BlfAccessor.getBlfGroup();
    /*  */
    const clData = "cl-ddt-htpnc-z-hsngo-handler";
    let isActive = false;
    let clType = "remove";
    if (!htpncZettaHsngo.isActive) {
      isActive = true;
      clType = "add";
    }
    if (isActive) {

    } else {
      HsncAccessor.setHsnc(3);
    }
    /*  */
    HtpncTool.clHtpncExaHsngoGro(isActive);
    htpncYottaSdo.classList[clType](clData);
    blfYottaNpmo.classList[clType](clData);
    hsncR.classList[clType](clData);
    heccZettaPboRgro.classList[clType](clData);
    htpncYottaSnto.classList[clType](clData);
    hdncR.classList[clType](clData);
    /*  */
    /* HsncAccessor.isActiveHsnc = isActive; */
    htpncZettaHsngo.isActive = isActive;
  }
}
class HtpncGet {
  static getDisplayTypeState() {
    let displayTypeState = 0;
    if (HtpncAccessor.isHtpncResizeKey) {
      displayTypeState = FwaConfig.previousDisplayType;
    } else {
      displayTypeState = FwaConfig.currentDisplayType;
    }
    HtpncAccessor.isHtpncResizeKey = false;
    return displayTypeState;
  }
  /* =============== :getElementGroup: =============== */
  /* static getHtpncRoot() {
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HtpncAccessor.htpncCache,
      HtpncConfig.htpncRoot
    );
    return saveVerifyGroup;
  }
  static getHtpncGroup() {
    const {
      htpncR
    } = HtpncConfig.getHtpncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HtpncAccessor.htpncCache,
      HtpncConfig.htpncGroup,
      htpncR
    );
    return saveVerifyGroup;
  }
  static getHtpncLgoGroup() {
    const {
      htpncR
    } = HtpncConfig.getHtpncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HtpncAccessor.htpncCache,
      HtpncConfig.htpncLgoGroup,
      htpncR
    );
    return saveVerifyGroup;
  }
  static getHtpncHdngoGroup() {
    const {
      htpncR
    } = HtpncConfig.getHtpncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HtpncAccessor.htpncCache,
      HtpncConfig.htpncHdngoGroup,
      htpncR
    );
    return saveVerifyGroup;
  }
  static getHtpncHsngoGroup() {
    const {
      htpncR
    } = HtpncConfig.getHtpncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HtpncAccessor.htpncCache,
      HtpncConfig.htpncHsngoGroup,
      htpncR
    );
    return saveVerifyGroup;
  }
  static getHtpncHdngoGroGroup() {
    const {
      htpncR
    } = HtpncConfig.getHtpncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HtpncAccessor.htpncCache,
      HtpncConfig.htpncHdngoGroGroup,
      htpncR
    );
    return saveVerifyGroup;
  }
  static getHtpncHsngoGroGroup() {
    const {
      htpncR
    } = HtpncConfig.getHtpncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HtpncAccessor.htpncCache,
      HtpncConfig.htpncHsngoGroGroup,
      htpncR
    );
    return saveVerifyGroup;
  }
  static getHtpncSntoGroup() {
    const {
      htpncR
    } = HtpncConfig.getHtpncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HtpncAccessor.htpncCache,
      HtpncConfig.htpncSntoGroup,
      htpncR
    );
    return saveVerifyGroup;
  }
  static getHtpncEcoGroup() {
    const {
      htpncR
    } = HtpncConfig.getHtpncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HtpncAccessor.htpncCache,
      HtpncConfig.htpncEcoGroup,
      htpncR
    );
    return saveVerifyGroup;
  } */
  /* =============== ;getElementGroup; =============== */
}
class HtpncSet {
  static setHtpncExaHdngoGro(isActive) {
    const {
      htpncExaHdngoGro
    } = HtpncConfig.getHtpncHdngoGroup();
    /*  */
    let type = "remove";
    if (isActive) {
      type = "add";
    }
    /*  */
    for (let i = 0; i < htpncExaHdngoGro.length; i++) {
      htpncExaHdngoGro[i].classList[type]("cl-set-htpnc-e-hdngo-gro");
    }
  }
  static setHtpncExaHsngoGro(isActive) {
    const {
      htpncExaHsngoGro
    } = HtpncConfig.getHtpncHsngoGroup();
    /*  */
    let type = "remove";
    if (isActive) {
      type = "add";
    }
    /*  */
    for (let i = 0; i < htpncExaHsngoGro.length; i++) {
      htpncExaHsngoGro[i].classList[type]("cl-set-htpnc-e-hsngo-gro");
    }
  }
  static setAppendFragment(htpncFragment, tempSaveElement) {
    tempSaveElement["htpncZettaLgo"].append(
      tempSaveElement["htpncExaLgoLink"]
    );
    tempSaveElement["htpncY"].append(
      tempSaveElement["htpncZettaLgo"],
      tempSaveElement["htpncZettaHdngo"],
      tempSaveElement["htpncZettaHsngo"]
    );
    tempSaveElement["htpncYottaSnto"].append(
      tempSaveElement["htpncZettaSntoText"]
    );
    tempSaveElement["htpncYottaEco"].append(
      tempSaveElement["htpncZettaEcoSdo"]
    );
    htpncFragment.append(
      tempSaveElement["htpncY"],
      tempSaveElement["htpncYottaSnto"],
      tempSaveElement["htpncYottaEco"]
    );
  }
}
export {
  HtpncAccessor,
  HtpncController
};
/* NOTE
 * SDO: Scroll Defense Object
 * GRO: Geometry Rendering Object
 * IO: Interaction Object
 * LIO: Logo IO
 * DNIO: Development Navigation IO
 * SNIO: Support Navigation IO
 * SNTO: Support Navigation Text O
 * DNF: Development Navigation Flag
 * SNF: Support Navigation Flag
 */
/* AUTHORSHIP
 * Founder: Facooya
 */