/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import { CoreConfig } from "../../core/core-config.js";
import { CoreAccessor } from "../../core/core-class.js";
/* -------------------------------------------------- */
import { HtbcConfig } from "./htbc-config.js";
/* -------------------------------------------------- */
import { DpmacConfig } from "../../dpm/dpm-hub.js";
/* -------------------------------------------------- */
/* itemCloseAll() <=> nrClick() */
import { HdncAccessor, HsncAccessor } from "../h-hub.js";
/* ================================================== */
class HtbcAccessor {
  static snrClick() {
    /* snrClick() <=> itemCloseAll() */
    HtbcHandler.snrClick();
  }
}
/* ================================================== */
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
/* ================================================== */
class HtbcManager {
  static init() {
    HtbcConfig.initGenerate();
    HtbcManager.initEvent();
  }
  static load() {
    HtbcLogic.updateLogoFacooya();
  }
  static resizeDisplay() {
    HtbcManager.resizeEvent();
    HtbcLogic.updateNrState();
  }
  static resizeSensor() {
    HtbcLogic.updateLogoFacooya();
  }
  /* ================================================== */
  static initEvent() {
    const snr = document.querySelector(".htbc-snr");
    snr.isActive = false;
    snr.addEventListener("click", HtbcHandler.snrClick);
    /*  */
    if (CoreConfig.screenType === 1) {
      const dnr = document.querySelector(".htbc-dnr");
      dnr.isActive = false;
      dnr.addEventListener("click", HtbcHandler.dnrClick);
      const overlay = document.querySelector(".htbc-overlay");
      overlay.addEventListener("click", HtbcHandler.overlayClick);
    } else if (CoreConfig.screenType >= 2) {
      const snrItem = snr.querySelector(".snr-item");
      snrItem.addEventListener("transitionend", HtbcHandler.snrItemTransitionEnd);
    }
  }
  /* -------------------------------------------------- */
  static resizeEvent() {
    const dnr = document.querySelector(".htbc-dnr");
    const overlay = document.querySelector(".htbc-overlay");
    if (CoreConfig.screenType === 1) {
      dnr.isActive = false;
      dnr.addEventListener("click", HtbcHandler.dnrClick);
      overlay.addEventListener("click", HtbcHandler.overlayClick);
    } else if (CoreConfig.previousScreenType === 1) {
      dnr.removeEventListener("click", HtbcHandler.dnrClick);
      overlay.removeEventListener("click", HtbcHandler.overlayClick);
    }
    /*  */
    const snrItem = document.querySelector(".htbc-snr .snr-item");
    if (CoreConfig.screenType >= 2) {
      snrItem.addEventListener("transitionend", HtbcHandler.snrItemTransitionEnd);
    } else if (CoreConfig.previousScreenType >= 2) {
      snrItem.removeEventListener("transitionend", HtbcHandler.snrItemTransitionEnd);
    }
  }
}
/* ================================================== */
class HtbcHandler {
  static overlayClick() {
    /* Only Mst */
    HtbcLogic.updateNrState();
  }
  /* -------------------------------------------------- */
  static dnrClick() {
    /* Only Mst */
    const hdnc = document.querySelector(".hdnc");
    const dnr = document.querySelector(".htbc-dnr");
    const snr = document.querySelector(".htbc-snr");
    const dnrItems = dnr.querySelectorAll(".dnr-item");
    /*  */
    const dnrActiveClass = "dnr-active";
    let shouldActive = false;
    let action = "remove";
    if (!dnr.isActive) {
      shouldActive = true;
      action = "add";
    }
    /* Logic */
    if (shouldActive) {
      if (snr.isActive) {
        HtbcHandler.snrClick();
      }
      HtbcLogic.updateOverlay(0);
    } else {
      HdncAccessor.itemCloseAll();
      HtbcLogic.updateOverlay(1);
    }
    /* DNR Item */
    const activeClass = "active";
    dnrItems.forEach(item => {
      item.classList[action](activeClass);
    });
    /* HDNC */
    hdnc.classList[action](dnrActiveClass);
    /* State */
    dnr.isActive = shouldActive;
  }
  /* -------------------------------------------------- */
  static snrClick() {
    const hsnc = document.querySelector(".hsnc");
    const dnr = document.querySelector(".htbc-dnr");
    const snr = document.querySelector(".htbc-snr");
    const snrItems = snr.querySelectorAll(".snr-item");
    /*  */
    const snrActiveClass = "snr-active";
    let shouldActive = false;
    let action = "remove";
    let screenType = CoreConfig.previousScreenType;
    if (!snr.isActive) {
      shouldActive = true;
      action = "add";
      screenType = CoreConfig.screenType;
    }
    /*  */
    if (shouldActive) {
      if (screenType === 1 && dnr.isActive) {
        HtbcHandler.dnrClick();
      } else if (screenType === 2) {
        HdncAccessor.itemCloseAll();
      }
      HtbcLogic.updateOverlay(2);
    } else {
      HsncAccessor.itemCloseAll();
      HtbcLogic.updateOverlay();
    }
    /* SNR Item */
    const activeClass = "active";
    snrItems.forEach(item => {
      item.classList[action](activeClass);
    });
    /* HSNC */
    hsnc.classList[action](snrActiveClass);
    /* Screen Type */
    if (screenType >= 2) {
      const m = document.querySelector(".m");
      const f = document.querySelector(".f");
      const htbc = document.querySelector(".htbc");
      m.classList[action](snrActiveClass);
      f.classList[action](snrActiveClass);
      htbc.classList[action](snrActiveClass);
      if (screenType === 3) {
        const hdnc = document.querySelector(".hdnc");
        hdnc.classList[action](snrActiveClass);
      }
    }
    /* State */
    snr.isActive = shouldActive;
  }
  /* -------------------------------------------------- */
  static snrItemTransitionEnd(event) {
    /* Only Dst Work */
    const target = event.target;
    const snrItem = event.currentTarget;
    /*  */
    if (
      target === snrItem
      && event.propertyName === "transform"
    ) {
      const hdncItems = document.querySelectorAll(".hdnc-list .item");
      hdncItems.forEach(item => {
        if (item.index === 3) {
          HtbcLogic.hdncItemLastAlignX_Right(item);
          HdncAccessor.updateChevronWrapperLeft(item);
        }
      });
      /*  */
      if (CoreConfig.pageType === 3) {
        DpmacConfig.updateTocPosition();
        CoreAccessor.onScroll();
      }
    }
  }
}
/* ================================================== */
class HtbcLogic {
  static updateOverlay(overlayType) {
    const overlay = document.querySelector(".htbc-overlay");
    const overlayTypes = [
      "right-open",
      "right-close",
      "left-open"
    ];
    /* Reset Default:left-close */
    overlayTypes.forEach(type => {
      overlay.classList.remove(type);
    });
    /* Overlay Type
     * overlayType = null:default, 0:right-open, 1:right-close, 2:left-open
     */
    if (overlayType != null) {
      overlay.classList.add(overlayTypes[overlayType]);
    }
  }
  /* -------------------------------------------------- */
  static updateNrState() {
    const dnr = document.querySelector(".htbc-dnr");
    const snr = document.querySelector(".htbc-snr");
    /* State */
    if (dnr.isActive) { HtbcHandler.dnrClick(); }
    else if (snr.isActive) { HtbcHandler.snrClick(); }
  }
  /* -------------------------------------------------- */
  static updateLogoFacooya() {
    const htbc = document.querySelector(".htbc");
    const logoFacooya = htbc.querySelector(".htbc-logo .logo-facooya");
    const miniClass = "mini";
    /* HMI */
    if (CoreConfig.screenType !== 1) { logoFacooya.classList.remove(miniClass); return; }
    /* Calculation Logo Area Width */
    const htbcWidth = htbc.offsetWidth;
    const nrWidth = 64;
    const gapWidth = 16;
    let calcLogoAreaWidth = htbcWidth;
    calcLogoAreaWidth -= (nrWidth + gapWidth) * 2;
    /* Calculation Logo Width */
    const devWidth = 48;
    const taWidth = 8;
    const facooyaWidth = 120;
    const calcLogoWidth = devWidth + taWidth + facooyaWidth;
    /* State */
    if (calcLogoAreaWidth < calcLogoWidth) { logoFacooya.classList.add(miniClass); }
    else { logoFacooya.classList.remove(miniClass); }
  }
  /* ================================================== */
  static hdncItemLastAlignX_Right(item) {
    const alignX_RightClass = "align-x-right";
    const snr = document.querySelector(".htbc-snr");
    const hdncSubList = item.querySelector(".sub-list");
    /* Exit */
    if (!snr.isActive) {
      hdncSubList.classList.remove(alignX_RightClass);
      return;
    }
    /* Define */
    const buffer = 16;
    const hsncW = 320;
    const hdncSubListW = 320;
    /* hsncLeft */
    const html = document.documentElement;
    const htmlW = html.offsetWidth;
    const hsncL = htmlW - (hsncW + buffer);
    /* hdncSubListRight */
    const itemW = item.offsetWidth;
    const deltaW = hdncSubListW - itemW;
    const itemRect = item.getBoundingClientRect();
    const subListR = itemRect.right + (deltaW / 2);
    /* Main */
    if (hsncL < subListR) {
      hdncSubList.classList.add(alignX_RightClass);
    } else {
      hdncSubList.classList.remove(alignX_RightClass);
    }
  }
}
/* ================================================== */
export { HtbcAccessor, HtbcController };
/* ================================================== */
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
/* ========================= ;FACOOYA; ========================= */