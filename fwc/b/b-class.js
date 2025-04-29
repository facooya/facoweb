/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  FwcController
} from "../fwc.js";
/*  */
import { DpmacAccessor } from "../dpm/dpm-hub.js";
/*  */
import { BodyConfig } from "./b-config.js";
/* ================================================== */
class BodyAccessor {
  /* ============================== */

  /* ============================== */
}
/* ================================================== */
class BodyController {
  /* ============================== */
  static init() {
    BodyManager.init();
  }
  /* ------------------------------ */
  static load() {
    BodyManager.load();
  }
  /* ------------------------------ */
  static resizeDisplay() {
    BodyManager.resizeDisplay();
  }
  /* ------------------------------ */
  static resizeSensor() {
    BodyManager.resizeSensor();
  }
  /* ============================== */
}
/* ================================================== */
class BodyManager {
  /* ============================== */
  static init() {
    BodyConfig.headerGenerate();
    BodyConfig.footerGenerate();
    /*  */
    BodyLogic.initLogic();
    /*  */
    BodyManager.initEvent();
  }
  /* ------------------------------ */
  static load() {
    BodyManager.loadEvent();
  }
  /* ------------------------------ */
  static resizeDisplay() {

  }
  /* ------------------------------ */
  static resizeSensor() {

  }
  /* ============================== */
  static initEvent() {
    window.addEventListener("load", BodyHandler.onLoad);
  }
  /* ------------------------------ */
  static loadEvent() {
    window.addEventListener("resize", BodyHandler.onResize);
    window.addEventListener("scroll", BodyHandler.onScroll);
    window.addEventListener("hashchange", BodyHandler.onHashChange);
  }
  /* ============================== */
}
/* ================================================== */
class BodyHandler {
  /* ============================== */
  static onLoad() {
    FwcController.load();
  }
  /* ============================== */
  static onResize() {
    BodyConfig.updateScreenType();
    if (BodyConfig.screenType !== BodyConfig.previousScreenType) {
      FwcController.resizeDisplay();
      BodyConfig.previousScreenType = BodyConfig.screenType;
      clearTimeout(BodyConfig.resizeSensorTimerId);
    } else {
      clearTimeout(BodyConfig.resizeSensorTimerId);
      BodyConfig.resizeSensorTimerId = setTimeout(
        FwcController.resizeSensor,
        200
      );
    }
  }
  /* ============================== */
  static onScroll() {

  }
  /* ============================== */
  static onHashChange() {
    /* const hash = window.location.hash;
    const target = document.querySelector(hash);
    if (target) {
      DpmacConfig.currentIndex = target.index;
    } */
    /* DpmacAccessor.tocClick(); */
    /* const hash = window.location.hash;
    const hashElement = document.querySelector(hash);
    history.replaceState(null, null, "/");
    hashElement.scrollIntoView(); */
    /* URL */
    /* const hash = window.location.hash;
    DpmacAccessor.tocHashReplace(hash); */
    /* const path = window.location.pathname;
    history.replaceState(null, null, path); */
  }
  /* ============================== */
}
/* ================================================== */
class BodyLogic {
  /* ============================== */
  static initLogic() {
    BodyConfig.setConfigState();
    BodyConfig.updateScreenType();
    BodyConfig.previousScreenType = BodyConfig.screenType;
  }
  /* ============================== */
}
/* ================================================== */
export { BodyAccessor, BodyController };
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */