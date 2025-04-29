/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* ================================================== */
import {
  FwcController
} from "../fwc.js";
/*  */
import { HsncAccessor } from "../h/h-hub.js";
/*  */
import { DpmacConfig } from "../dpm/dpm-hub.js";
/*  */
import { BodyConfig } from "./b-config.js";
/* ================================================== */
class BodyAccessor {
  /* ============================== */
  static onScroll() {
    /* HtbcHandler.snrClick() => this */
    BodyHandler.onScroll();
  }
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
    if (BodyConfig.pageType === 3) {
      /* Only TOC */
      DpmacConfig.updateCurrentToc();
      HsncAccessor.subItemLr();
    }
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
/* ================================================== */
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
/* ========================= ;FACOOYA; ========================= */