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
  BlfConfig,
  HtpncConfig,
  HdncConfig,
  HsncConfig,
  HeccConfig,
  NpmhcConfig,
  NpmscConfig,
  HsncUtil,
  HdncUtil
} from "../../fwc-hub.js";
class HtpncAccessor {
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
  static resizeSensor() {
    HtpncManager.resizeSensor();
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
    if (FwaConfig.currentDisplayType === 1) {
      HtpncTool.clHtpncPetaLgoLogo();
    }
  }
  static resizeDisplay() {
    const {
      htpncZettaHdngo
    } = HtpncConfig.getHtpncHdngoGroup();
    const {
      htpncZettaHsngo
    } = HtpncConfig.getHtpncHsngoGroup();
    /*  */
    if (htpncZettaHdngo.isActive) {
      HtpncHandler.mdtHtpncZettaHdngo();
    }
    switch (FwaConfig.previousDisplayType) {
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
    HtpncManager.resizeSensor();
  }
  static resizeSensor() {
    if (FwaConfig.currentDisplayType === 1) {
      HtpncTool.clHtpncPetaLgoLogo();
    }
    /* if (FwaConfig.currentDisplayType === 1) {
      const {
        htpncZettaLgo,
        htpncPetaLgoLogo
      } = HtpncConfig.getHtpncLgoGroup();
      const htpncZettaLgoWidth = htpncZettaLgo.clientWidth;
      const devLogoRemWidth = 4;
      const taIconRemWidth = 0.5;
      const logoRemWidth = 10;
      const calcWidth = (devLogoRemWidth + taIconRemWidth + logoRemWidth) * 16;
      /* 
      if (htpncZettaLgoWidth < calcWidth) {
        htpncPetaLgoLogo.classList.add("test");
      } else {
        htpncPetaLgoLogo.classList.remove("test");
      }
    } */
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
    } = HdncConfig.getHdncRoot();
    /* ECC-NOO */
    const {
      heccYottaNoo
    } = HeccConfig.getHeccNooGroup();
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
    if (isActive) {
      if (htpncZettaHsngo.isActive) {
        HtpncHandler.mdtHtpncZettaHsngo();
      }
      heccYottaNoo.classList.remove(clDataDisabled);
      heccYottaNoo.classList.add(clData);
    } else {
      HdncUtil.resetHdncHandler(1);
      heccYottaNoo.classList.remove(clData);
      heccYottaNoo.classList.add(clDataDisabled);
    }
    HtpncTool.clHtpncExaHdngoGro(isActive);
    htpncYottaSdo.classList[type](clData);
    hdncR.classList[type](clData);
    heccYottaNoo[eventListenerType]("click", HtpncHandler.mdtHtpncZettaHdngo);
    htpncZettaHdngo.isActive = isActive;
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
    } = HeccConfig.getHeccNooGroup();
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
      if (htpncZettaHdngo.isActive) {
        HtpncHandler.mdtHtpncZettaHdngo();
      }
    } else {
      HsncUtil.resetHsncHandler(1);
    }
    HtpncTool.clHtpncExaHsngoGro(isActive);
    htpncYottaSdo.classList[clType](clData);
    hsncR.classList[clType](clData);
    heccYottaNoo.classList.remove(clDataDisabled);
    heccYottaNoo.classList[clType](clData);
    heccYottaNoo[eventListenerType]("click", HtpncHandler.mdtHtpncZettaHsngo);
    /*  */
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
    const {
      hdncY
    } = HdncConfig.getHdncGroup();
    const {
      hsncR
    } = HsncConfig.getHsncRoot();
    const {
      blfYottaNpmo
    } = BlfConfig.getBlfGroup();
    const {
      npmhcR
    } = NpmhcConfig.getNpmhcRoot();
    const {
      npmhcZettaTno
    } = NpmhcConfig.getNpmhcTnoGroup();
    const {
      npmscZ
    } = NpmscConfig.getNpmscGroup();
    const {
      heccZettaPboRgro
    } = HeccConfig.getHeccPboGroup();
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
          HdncUtil.resetHdncHandler(2);
          break;
        }
      }
    } else {
      HsncUtil.resetHsncHandler(2);
      npmhcZettaTno.style.gridTemplateColumns = "";
      for (let i = 0; i < npmscZ.length; i++) {
        npmscZ[i].style.gridTemplateColumns = "";
      }
    }
    HtpncTool.clHtpncExaHsngoGro(isActive);
    htpncYottaSdo.classList[clType](clData);
    blfYottaNpmo.classList[clType](clData);
    heccZettaPboRgro.classList[clType](clData);
    hsncR.classList[clType](clData);
    htpncYottaSnto.classList[clType](clData);
    htpncY.classList[clType](clData);
    /*  */
    htpncZettaHsngo.isActive = isActive;
  }
  /* -------------------------------------------------- */
  static ddtHtpncZettaHsngo() {
    const {
      htpncYottaSnto,
      htpncYottaSdo
    } = HtpncConfig.getHtpncYottaGroup();
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
    } = HeccConfig.getHeccPboGroup();
    const {
      blfYottaNpmo
    } = BlfConfig.getBlfGroup();
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
      HsncUtil.resetHsncHandler(3);
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
    htpncZettaHsngo.isActive = isActive;
  }
}
export {
  HtpncAccessor,
  HtpncController
};
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */