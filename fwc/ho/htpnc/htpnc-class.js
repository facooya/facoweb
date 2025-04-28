/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  FwaConfig
} from "../../../fwa/fwa-config.js";
import {
  HtpncConfig
} from "./htpnc-config.js";
import {
  FwcAccessor,
  BlfAccessor,
  HdncAccessor,
  HsncAccessor,
  HeccAccessor,
  NpmhcAccessor,
  NpmscAccessor
} from "../../fwc-hub.js";
class HtpncAccessor {
  static htpncCache = {};
  static isHtpncResizeKey = false;
  static htpncZettaHsngoHandler() {
    HtpncHandler.htpncZettaHsngo();
  }
}
class HtpncController {
  static process() {
    HtpncManager.generate();
    HtpncManager.init();
  }
  static processOnLoad() {
    HtpncManager.initOnLoad();
  }
  static processOnResize() {
    HtpncManager.initOnResize();
    HtpncManager.event();
  }
  /* static stepOnResize() {
    HtpncManager.initStepOnResize();
  } */
}
class HtpncManager {
  static init() {

  }
  static initOnLoad() {
    const {
      htpncZettaHdngo
    } = HtpncGet.getHtpncHdngoGroup();
    const {
      htpncZettaHsngo
    } = HtpncGet.getHtpncHsngoGroup();

    if (FwaConfig.currentDisplayType === 1) {
      htpncZettaHdngo.addEventListener(
        "click",
        HtpncHandler.htpncZettaHdngo
      );
    }
    htpncZettaHsngo.addEventListener(
      "click",
      HtpncHandler.htpncZettaHsngo
    );
  }
  static initOnResize() {
    if (HdncAccessor.isActiveHdnc) {
      HtpncAccessor.isHtpncResizeKey = true;
      HtpncHandler.htpncZettaHdngo();
    }
    if (HsncAccessor.isActiveHsnc) {
      HtpncAccessor.isHtpncResizeKey = true;
      HtpncHandler.htpncZettaHsngo();
    }
  }
  /* static initStepOnResize() {
    if (HdncAccessor.isActiveHdnc) {
      HtpncAccessor.isHtpncResizeKey = true;
      HtpncHandler.htpncZettaHdngo();
    }
    if (HsncAccessor.isActiveHsnc) {
      HtpncAccessor.isHtpncResizeKey = true;
      HtpncHandler.htpncZettaHsngo();
    }
  } */
  static generate() {
    const {
      htpncR
    } = HtpncGet.getHtpncRoot();
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
  static event() {
    const {
      htpncZettaHdngo
    } = HtpncGet.getHtpncHdngoGroup();
    let eventListenerType = "";
    if (FwaConfig.currentDisplayType === 1 && FwaConfig.previousDisplayType >= 2) {
      eventListenerType = "addEventListener";
    } else if (FwaConfig.currentDisplayType >= 2 && FwaConfig.previousDisplayType === 1) {
      eventListenerType = "removeEventListener";
    }
    if (eventListenerType) {
      htpncZettaHdngo[eventListenerType]("click", HtpncHandler.htpncZettaHdngo);
    }
  }
}
class HtpncHandler {
  static htpncZettaHdngo() {
    /* TPNC */
    const {
      htpncZettaEcoSdo
    } = HtpncGet.getHtpncEcoGroup();
    /* DNC */
    const {
      hdncR
    } = HdncAccessor.getHdncRoot();
    /* ECC-NOO */
    const {
      heccYottaNoo
    } = HeccAccessor.getHeccNooGroup();
    const displayTypeState = HtpncGet.getDisplayTypeState();
    /*  */
    let isActive = null;
    let type = "";
    let eventListenerType = "";
    if (!HdncAccessor.isActiveHdnc) {
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
          if (HsncAccessor.isActiveHsnc) {
            HtpncHandler.htpncZettaHsngo();
          }
          heccYottaNoo.classList.remove("cl-mdt-htpnc-z-hdngo-handler-disabled");
          heccYottaNoo.classList.add("cl-mdt-htpnc-z-hdngo-handler");
        } else {
          HdncAccessor.setHdnc(displayTypeState);
          heccYottaNoo.classList.remove("cl-mdt-htpnc-z-hdngo-handler");
          heccYottaNoo.classList.add("cl-mdt-htpnc-z-hdngo-handler-disabled");
        }
        HtpncSet.setHtpncExaHdngoGro(isActive);
        htpncZettaEcoSdo.classList[type]("cl-mdt-htpnc-z-hdngo-handler");
        hdncR.classList[type]("cl-mdt-htpnc-z-hdngo-handler");
        heccYottaNoo[eventListenerType]("click", HtpncHandler.htpncZettaHdngo);
        HdncAccessor.isActiveHdnc = isActive;
        break;
      }
    }
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
    } = HtpncGet.getHtpncGroup();
    const {
      htpncYottaSnto
    } = HtpncGet.getHtpncSntoGroup();
    const {
      htpncZettaEcoSdo
    } = HtpncGet.getHtpncEcoGroup();
    const displayTypeState = HtpncGet.getDisplayTypeState();
    /*  */
    let isActive = null;
    let type = "";
    let eventListenerType = "";
    let temporaryData = 0;
    if (!HsncAccessor.isActiveHsnc) {
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
          if (HdncAccessor.isActiveHdnc) {
            HtpncHandler.htpncZettaHdngo();
          }
        }
        HtpncSet.setHtpncExaHsngoGro(isActive);
        htpncZettaEcoSdo.classList[type]("cl-mdt-htpnc-z-hsngo-handler");
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
        HtpncSet.setHtpncExaHsngoGro(isActive);
        htpncZettaEcoSdo.classList[type]("cl-tdt-htpnc-z-hsngo-handler");
        blfYottaNpmo.classList[type]("cl-tdt-htpnc-z-hsngo-handler");
        heccZettaPboRgro.classList[type]("cl-tdt-htpnc-z-hsngo-handler");
        hsncR.classList[type]("cl-tdt-htpnc-z-hsngo-handler");
        htpncYottaSnto.classList[type]("cl-tdt-htpnc-z-hsngo-handler");
        htpncY.classList[type]("cl-tdt-htpnc-z-hsngo-handler");
        break;
      }
      case 3: {
        HtpncSet.setHtpncExaHsngoGro(isActive);
        htpncZettaEcoSdo.classList[type]("cl-ddt-htpnc-z-hsngo-handler");
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
  static getHtpncRoot() {
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HtpncAccessor.htpncCache,
      HtpncConfig.htpncRoot
    );
    return saveVerifyGroup;
  }
  static getHtpncGroup() {
    const {
      htpncR
    } = HtpncGet.getHtpncRoot();
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
    } = HtpncGet.getHtpncRoot();
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
    } = HtpncGet.getHtpncRoot();
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
    } = HtpncGet.getHtpncRoot();
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
    } = HtpncGet.getHtpncRoot();
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
    } = HtpncGet.getHtpncRoot();
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
    } = HtpncGet.getHtpncRoot();
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
    } = HtpncGet.getHtpncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HtpncAccessor.htpncCache,
      HtpncConfig.htpncEcoGroup,
      htpncR
    );
    return saveVerifyGroup;
  }
  /* =============== ;getElementGroup; =============== */
}
class HtpncSet {
  static setHtpncExaHdngoGro(isActive) {
    const {
      htpncExaHdngoGro
    } = HtpncGet.getHtpncHdngoGroGroup();
    /*  */
    let type = "";
    if (isActive) {
      type = "add";
    } else {
      type = "remove";
    }
    /*  */
    for (let i = 0; i < htpncExaHdngoGro.length; i++) {
      htpncExaHdngoGro[i].classList[type]("cl-set-htpnc-e-hdngo-gro");
    }
  }
  static setHtpncExaHsngoGro(isActive) {
    const {
      htpncExaHsngoGro
    } = HtpncGet.getHtpncHsngoGroGroup();
    /*  */
    let type = "";
    if (isActive) {
      type = "add";
    } else {
      type = "remove";
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
 * SNTO: Support Navigation Text O
 * DNF: Development Navigation Flag
 * SNF: Support Navigation Flag
 */
/* AUTHORSHIP
 * Founder: Facooya
 */