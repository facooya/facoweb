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
} from "./tpnc-config.js";
import {
  FwcAccessor,
  HdncAccessor,
  HsncAccessor,
  HeccAccessor,
  NplcAccessor
} from "../../fwc-hub.js";
class HtpncAccessor {
  static htpncCache = {};
  static isHtpncResizeKey = false;
  static htpncZettaSnioHandler() {
    HtpncHandler.htpncZettaSnio();
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
}
class HtpncManager {
  static init() {

  }
  static initOnLoad() {
    const {
      htpncZettaDnio,
      htpncZettaSnio
    } = HtpncGet.getHtpncIoGroup();

    if (FwaConfig.currentDisplayType === 1) {
      htpncZettaDnio.addEventListener(
        "click",
        HtpncHandler.htpncZettaDnio
      );
    }
    htpncZettaSnio.addEventListener(
      "click",
      HtpncHandler.htpncZettaSnio
    );
  }
  static initOnResize() {
    if (HdncAccessor.isActiveHdnc) {
      HtpncAccessor.isHtpncResizeKey = true;
      HtpncHandler.htpncZettaDnio();
    }
    if (HsncAccessor.isActiveHsnc) {
      HtpncAccessor.isHtpncResizeKey = true;
      HtpncHandler.htpncZettaSnio();
    }
  }
  static generate() {
    const {
      htpncR
    } = HtpncGet.getHtpncRoot();
    const htpncFragment = document.createDocumentFragment();
    let tempGenerateElement = null;
    let tempSaveElement = {};
    /* =============== :Ys Group: =============== */
    for (let ysi = 0; ysi < HtpncConfig.elementYsGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement(
        HtpncConfig.elementYsGroup[ysi].tag,
        HtpncConfig.elementYsGroup[ysi].selector
      );
      FwcAccessor.setGenerateElement(
        tempGenerateElement,
        HtpncConfig.elementYsGroup[ysi].text,
        HtpncConfig.elementYsGroup[ysi].href
      );
      tempSaveElement[HtpncConfig.elementYsGroup[ysi].id] = tempGenerateElement;
    }
    /* =============== ;Ys Group; =============== */
    /* =============== :Zs Group: =============== */
    for (let ysi = 0; ysi < HtpncConfig.elementZsGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement(
        HtpncConfig.elementZsGroup[ysi].tag,
        HtpncConfig.elementZsGroup[ysi].selector
      );
      FwcAccessor.setGenerateElement(
        tempGenerateElement,
        HtpncConfig.elementZsGroup[ysi].text,
        HtpncConfig.elementZsGroup[ysi].href
      );
      tempSaveElement[HtpncConfig.elementZsGroup[ysi].id] = tempGenerateElement;
    }
    /* =============== ;Zs Group; =============== */
    /* =============== :Dnio Gro, Snio Gro Group: =============== */
    for (let ysi = 0; ysi < HtpncConfig.dnioGroLength; ysi++) {
      for (let zsi = 0; zsi < HtpncConfig.elementDnioGroGroup.length; zsi++) {
        tempGenerateElement = FwcAccessor.getGenerateElement(
          HtpncConfig.elementDnioGroGroup[zsi].tag,
          HtpncConfig.elementDnioGroGroup[zsi].selector
        );
        tempSaveElement["zettaDnio"].append(tempGenerateElement);
      }
    }
    for (let ysi = 0; ysi < HtpncConfig.snioGroLength; ysi++) {
      for (let zsi = 0; zsi < HtpncConfig.elementSnioGroGroup.length; zsi++) {
        tempGenerateElement = FwcAccessor.getGenerateElement(
          HtpncConfig.elementSnioGroGroup[zsi].tag,
          HtpncConfig.elementSnioGroGroup[zsi].selector
        );
        tempSaveElement["zettaSnio"].append(tempGenerateElement);
      }
    }
    /* =============== ;Dnio Gro, Snio Gro Group; =============== */
    /* =============== :Compile: =============== */
    HtpncSet.setAppendFragment(htpncFragment, tempSaveElement);
    htpncR.append(htpncFragment);
  }
  static event() {
    const {
      htpncZettaDnio
    } = HtpncGet.getHtpncIoGroup();
    let eventListenerType = "";
    if (FwaConfig.currentDisplayType === 1 && FwaConfig.previousDisplayType >= 2) {
      eventListenerType = "addEventListener";
    } else if (FwaConfig.currentDisplayType >= 2 && FwaConfig.previousDisplayType === 1) {
      eventListenerType = "removeEventListener";
    }
    if (eventListenerType) {
      htpncZettaDnio[eventListenerType]("click", HtpncHandler.htpncZettaDnio);
    }
  }
}
class HtpncHandler {
  static htpncZettaDnio() {
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
            HtpncHandler.htpncZettaSnio();
          }
          heccYottaNoo.classList.remove("cl-mdt-htpnc-z-dnio-handler-disabled");
          heccYottaNoo.classList.add("cl-mdt-htpnc-z-dnio-handler");
        } else {
          HdncAccessor.resetHdnc(displayTypeState);
          heccYottaNoo.classList.remove("cl-mdt-htpnc-z-dnio-handler");
          heccYottaNoo.classList.add("cl-mdt-htpnc-z-dnio-handler-disabled");
        }
        HtpncSet.setHtpncExaDnioGro(isActive);
        htpncZettaEcoSdo.classList[type]("cl-mdt-htpnc-z-dnio-handler");
        hdncR.classList[type]("cl-mdt-htpnc-z-dnio-handler");
        heccYottaNoo[eventListenerType]("click", HtpncHandler.htpncZettaDnio);
        HdncAccessor.isActiveHdnc = isActive;
        break;
      }
    }
  }
  static htpncZettaSnio() {
    const {
      nplcR
    } = NplcAccessor.getNplcRoot();
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
            HtpncHandler.htpncZettaDnio();
          }
        }
        HtpncSet.setHtpncExaSnioGro(isActive);
        htpncZettaEcoSdo.classList[type]("cl-mdt-htpnc-z-snio-handler");
        hsncR.classList[type]("cl-mdt-htpnc-z-snio-handler");
        heccYottaNoo.classList.remove(
          "cl-mdt-htpnc-z-dnio-handler-disabled"
        );
        heccYottaNoo.classList[type]("cl-mdt-htpnc-z-snio-handler");
        heccYottaNoo[eventListenerType]("click", HtpncHandler.htpncZettaSnio);
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
          for (let i = 0; i < hdncY.length; i++) {
            if (hdncY[i].isActive) {
              HdncAccessor.resetHdnc(displayTypeState);
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
        HtpncSet.setHtpncExaSnioGro(isActive);
        htpncZettaEcoSdo.classList[type]("cl-tdt-htpnc-z-snio-handler");
        nplcR.classList[type]("cl-tdt-htpnc-z-snio-handler");
        heccZettaPboRgro.classList[type]("cl-tdt-htpnc-z-snio-handler");
        hsncR.classList[type]("cl-tdt-htpnc-z-snio-handler");
        htpncYottaSnto.classList[type]("cl-tdt-htpnc-z-snio-handler");
        htpncY.classList[type]("cl-tdt-htpnc-z-snio-handler");
        break;
      }
      case 3: {
        HtpncSet.setHtpncExaSnioGro(isActive);
        htpncZettaEcoSdo.classList[type]("cl-ddt-htpnc-z-snio-handler");
        nplcR.classList[type]("cl-ddt-htpnc-z-snio-handler");
        hsncR.classList[type]("cl-ddt-htpnc-z-snio-handler");
        heccZettaPboRgro.classList[type]("cl-ddt-htpnc-z-snio-handler");
        htpncYottaSnto.classList[type]("cl-ddt-htpnc-z-snio-handler");
        hdncR.classList[type]("cl-ddt-htpnc-z-snio-handler");
        break;
      }
    }
    if (!isActive) {
      HsncAccessor.resetHsnc(displayTypeState);
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
    const htpncRoot = [
      {
        id: "htpncR",
        selector: ".blf-y-ho .htpnc-r"
      }
    ];
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      HtpncAccessor.htpncCache,
      htpncRoot
    );
    return saveVerifyGroup;
  }
  static getHtpncGroup() {
    const htpncGroup = [
      {
        id: "htpncY",
        selector: ".htpnc-y"
      }
    ];
    const {
      htpncR
    } = this.getHtpncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      HtpncAccessor.htpncCache,
      htpncGroup,
      htpncR
    );
    return saveVerifyGroup;
  }
  static getHtpncIoGroup() {
    const htpncIoGroup = [
      {
        id: "htpncZettaLio",
        selector: ".htpnc-z-lio"
      },
      {
        id: "htpncZettaDnio",
        selector: ".htpnc-z-dnio"
      },
      {
        id: "htpncZettaSnio",
        selector: ".htpnc-z-snio"
      },
      {
        id: "htpncExaLioLink",
        selector: ".htpnc-e-lio-link"
      },
      {
        id: "htpncExaDnioGro",
        selector: ".htpnc-e-dnio-gro",
        type: "all"
      },
      {
        id: "htpncExaSnioGro",
        selector: ".htpnc-e-snio-gro",
        type: "all"
      }
    ];
    const {
      htpncR
    } = this.getHtpncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      HtpncAccessor.htpncCache,
      htpncIoGroup,
      htpncR
    );
    return saveVerifyGroup;
  }
  static getHtpncEcoGroup() {
    const htpncEcoGroup = [
      {
        id: "htpncYottaEco",
        selector: ".htpnc-y-eco"
      },
      {
        id: "htpncZettaEcoSdo",
        selector: ".htpnc-z-eco-sdo"
      }
    ];
    const {
      htpncR
    } = this.getHtpncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      HtpncAccessor.htpncCache,
      htpncEcoGroup,
      htpncR
    );
    return saveVerifyGroup;
  }
  static getHtpncSntoGroup() {
    const htpncSntoGroup = [
      {
        id: "htpncYottaSnto",
        selector: ".htpnc-y-snto"
      },
      {
        id: "htpncZettaSntoTitle",
        selector: ".htpnc-z-snto-title"
      }
    ];
    const {
      htpncR
    } = this.getHtpncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      HtpncAccessor.htpncCache,
      htpncSntoGroup,
      htpncR
    );
    return saveVerifyGroup;
  }
  /* =============== ;getElementGroup; =============== */
}
class HtpncSet {
  static setHtpncExaDnioGro(isActive) {
    const {
      htpncExaDnioGro
    } = HtpncGet.getHtpncIoGroup();
    /*  */
    let type = "";
    if (isActive) {
      type = "add";
    } else {
      type = "remove";
    }
    /*  */
    for (let i = 0; i < htpncExaDnioGro.length; i++) {
      htpncExaDnioGro[i].classList[type]("cl-set-htpnc-e-dnio-gro");
    }
  }
  static setHtpncExaSnioGro(isActive) {
    const {
      htpncExaSnioGro
    } = HtpncGet.getHtpncIoGroup();
    /*  */
    let type = "";
    if (isActive) {
      type = "add";
    } else {
      type = "remove";
    }
    /*  */
    for (let i = 0; i < htpncExaSnioGro.length; i++) {
      htpncExaSnioGro[i].classList[type]("cl-set-htpnc-e-snio-gro");
    }
  }
  static setAppendFragment(htpncFragment, tempSaveElement) {
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
    tempSaveElement["yottaEco"].append(
      tempSaveElement["zettaEcoSdo"]
    );
    htpncFragment.append(
      tempSaveElement["yotta"],
      tempSaveElement["yottaSnto"],
      tempSaveElement["yottaEco"]
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
 * SNTO: Support Navigation Title O
 * DNF: Development Navigation Flag
 * SNF: Support Navigation Flag
 */
/* AUTHORSHIP
 * Founder: Facooya
 */