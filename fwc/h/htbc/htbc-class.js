/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  BodyConfig,
  HdncAccessor,
  HsncAccessor
} from "../../fwc-hub.js";
import { HtbcConfig } from "./htbc-config.js";
/* ================================================== */
class HtbcAccessor {
  /* Hdnc.itemCloseAll <=> Htbc.snrContainerClick
   * Screen type: Tablet */
  static snrContainerClick() {
    HtbcHandler.snrContainerClick();
  }
}
class HtbcController {
  static init() {
    HtbcManager.init();
  }
  static load() {
    HtbcManager.load();
  }
  static resizeDisplay() {
    HtbcManager.resizeDisplay();
  }
  static resizeSensor() {
    HtbcManager.resizeSensor();
  }
}
class HtbcManager {
  static init() {
    HtbcConfig.generate();
    const dnrContainer = document.querySelector(".htbc-dnr-container");
    const snrContainer = document.querySelector(".htbc-snr-container");
    dnrContainer.isEnabled = false;
    snrContainer.isEnabled = false;
  }
  static load() {
    HtbcManager.loadEvent();
    HtbcLogic.updateFacooyaLogo();
    /* HtbcLogic.logoSize(); */
  }
  static resizeDisplay() {
    HtbcManager.resizeEvent();
    HtbcLogic.nrContainerClose();
  }
  static resizeSensor() {
    /* HtbcLogic.logoSize(); */
    HtbcLogic.updateFacooyaLogo();
  }
  /* -------------------------------------------------- */
  static loadEvent() {
    const snrContainer = document.querySelector(".htbc-snr-container");
    snrContainer.addEventListener("click", HtbcHandler.snrContainerClick);
    if (BodyConfig.screenType === 1) {
      const dnrContainer = document.querySelector(".htbc-dnr-container");
      dnrContainer.addEventListener("click", HtbcHandler.dnrContainerClick);
      const overlay = document.querySelector(".htbc-overlay");
      overlay.addEventListener("click", HtbcHandler.overlayClick);
    } else if (BodyConfig.screenType === 3) {
      const snrItem = document.querySelector(".htbc-snr-item");
      snrItem.addEventListener("transitionend", HtbcHandler.snrItemTransitionEnd);
    }
  }
  static resizeEvent() {
    const dnrContainer = document.querySelector(".htbc-dnr-container");
    const overlay = document.querySelector(".htbc-overlay");
    if (BodyConfig.screenType === 1) {
      dnrContainer.addEventListener("click", HtbcHandler.dnrContainerClick);
      overlay.addEventListener("click", HtbcHandler.overlayClick);
    } else if (BodyConfig.previousScreenType === 1) {
      dnrContainer.removeEventListener("click", HtbcHandler.dnrContainerClick);
      overlay.removeEventListener("click", HtbcHandler.overlayClick);
    }
    const snrItem = document.querySelector(".htbc-snr-item");
    if (BodyConfig.screenType === 3) {
      snrItem.addEventListener("transitionend", HtbcHandler.snrItemTransitionEnd);
    } else if (BodyConfig.previousScreenType === 3) {
      snrItem.removeEventListener("transitionend", HtbcHandler.snrItemTransitionEnd);
    }
  }
}
class HtbcHandler {
  static overlayClick() {
    HtbcLogic.nrContainerClose();
  }
  static dnrContainerClick() {
    const hdnc = document.querySelector(".hdnc");
    const dnrContainer = document.querySelector(".htbc-dnr-container");
    const snrContainer = document.querySelector(".htbc-snr-container");
    const dnrItems = document.querySelectorAll(".htbc-dnr-item");
    /*  */
    const clData = "cl-htbc-dnr-container-click";
    let shouldEnable = false;
    let clAction = "remove";
    if (!dnrContainer.isEnabled) {
      shouldEnable = true;
      clAction = "add";
    }
    /*  */
    if (shouldEnable) {
      if (snrContainer.isEnabled) {
        HtbcHandler.snrContainerClick();
      }
      HtbcLogic.updateOverlay(0);
    } else {
      HdncAccessor.itemCloseAll();
      HtbcLogic.updateOverlay(1);
    }
    /*  */
    dnrItems.forEach(item => {
      item.classList[clAction](clData);
    });
    hdnc.classList[clAction](clData);
    /*  */
    dnrContainer.isEnabled = shouldEnable;
  }
  static snrContainerClick() {
    const hsnc = document.querySelector(".hsnc");
    const dnrContainer = document.querySelector(".htbc-dnr-container");
    const snrContainer = document.querySelector(".htbc-snr-container");
    const snrItems = document.querySelectorAll(".htbc-snr-item");
    /*  */
    const clData = "cl-htbc-snr-container-click";
    let shouldEnable = false;
    let clAction = "remove";
    let screenType = BodyConfig.previousScreenType;
    if (!snrContainer.isEnabled) {
      shouldEnable = true;
      clAction = "add";
      screenType = BodyConfig.screenType;
    }
    /*  */
    if (shouldEnable) {
      if (screenType === 1 && dnrContainer.isEnabled) {
        HtbcHandler.dnrContainerClick();
      } else if (screenType === 2) {
        HdncAccessor.itemCloseAll();
      }
      HtbcLogic.updateOverlay(2);
    } else {
      HsncAccessor.itemCloseAll();
      HtbcLogic.updateOverlay();
    }
    /*  */
    snrItems.forEach(item => {
      item.classList[clAction](clData);
    });
    hsnc.classList[clAction](clData);
    /*  */
    if (screenType >= 2) {
      const m = document.querySelector(".m");
      const f = document.querySelector(".f");
      const htbc = document.querySelector(".htbc");
      const snrSlideText = document.querySelector(".htbc-snr-slide-text");
      m.classList[clAction](clData);
      f.classList[clAction](clData);
      htbc.classList[clAction](clData);
      snrSlideText.classList[clAction](clData);
      if (screenType === 3) {
        const hdnc = document.querySelector(".hdnc");
        hdnc.classList[clAction](clData);
      }
    }
    /*  */
    snrContainer.isEnabled = shouldEnable;
  }
  static snrItemTransitionEnd(event) {
    const target = event.target;
    const snrItem = event.currentTarget;
    /*  */
    if (
      target === snrItem
      && event.propertyName === "transform"
    ) {
      const hdncItems = document.querySelectorAll(".hdnc-item");
      hdncItems.forEach(item => {
        if (item.index === 3) {
          const snrContainer = snrItem.closest(".htbc-snr-container");
          if (snrContainer.isEnabled) {
            HdncAccessor.updateSubListTransformForLast(item, false);
          } else {
            HdncAccessor.updateSubListTransformForLast(item, true);
          }
        }
      });
    }
  }
}
class HtbcLogic {
  static updateOverlay(overlayType) {
    const overlay = document.querySelector(".htbc-overlay");
    const clOverlays = [
      "cl-htbc-overlay-right-enabled",
      "cl-htbc-overlay-right-disabled",
      "cl-htbc-overlay-left-enabled"
    ];
    clOverlays.forEach(clOverlay => {
      overlay.classList.remove(clOverlay);
    });
    if (overlayType != null) {
      overlay.classList.add(clOverlays[overlayType]);
    }
  }
  static nrContainerClose() {
    const dnrContainer = document.querySelector(".htbc-dnr-container");
    const snrContainer = document.querySelector(".htbc-snr-container");
    /*  */
    if (dnrContainer.isEnabled) {
      HtbcHandler.dnrContainerClick();
    } else if (snrContainer.isEnabled) {
      HtbcHandler.snrContainerClick();
    }
  }
  static updateFacooyaLogo() {
    const htbc = document.querySelector(".htbc");
    const facooyaLogoItem = htbc.querySelector(".htbc-facooya-logo-item");
    const clData = "cl-htbc-facooya-logo-item-mini";
    if (BodyConfig.screenType !== 1) {
      facooyaLogoItem.classList.remove(clData);
      return;
    }
    /* const logoContainer = document.querySelector(".htbc-logo-container");
    const logoContainerWidth = logoContainer.offsetWidth;
    const devWidth = 64;
    const taWidth = 8;
    const logoWidth = 160;
    const calcWidth = devWidth + taWidth + logoWidth; */
    const htbcWidth = htbc.offsetWidth;
    const nrWidth = 64;
    const gapWidth = 16;
    let calcLogoWrapperWidth = htbcWidth;
    calcLogoWrapperWidth -= (nrWidth + gapWidth) * 2;
    /*  */
    const devWidth = 48;
    const taWidth = 8;
    const logoWidth = 120;
    const calcLogoWidth = devWidth + taWidth + logoWidth;
    /*  */
    if (calcLogoWrapperWidth < calcLogoWidth) {
      facooyaLogoItem.classList.add(clData);
    } else {
      facooyaLogoItem.classList.remove(clData);
    }
  }
}
/* ================================================== */
export {
  HtbcAccessor,
  HtbcController
};
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */