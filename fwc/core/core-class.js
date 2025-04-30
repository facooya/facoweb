/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* ================================================== */
import { CoreConfig } from "./core-config.js";
import { HeaderController } from "../h/h-class.js";
import { FooterController } from "../f/f-class.js";
import { NpmController } from "../npm/npm-class.js";
import { DpmController } from "../dpm/dpm-class.js";
/* -------------------------------------------------- */
import { HsncAccessor } from "../h/h-hub.js";
import { DpmacConfig } from "../dpm/dpm-hub.js";
/* ================================================== */
class CoreAccessor {
  static onScroll() {
    /* HtbcHandler.snrClick() => this */
    CoreHandler.onScroll();
  }
}
/* ================================================== */
class CoreController {
  static init() {
    CoreManager.init();
  }
  static load() {
    CoreManager.load();
  }
  static resizeDisplay() {
    CoreManager.resizeDisplay();
  }
  static resizeSensor() {
    CoreManager.resizeSensor();
  }
}
/* ================================================== */
class CoreManager {
  static init() {
    CoreConfig.headerGenerate();
    CoreConfig.footerGenerate();
    /*  */
    CoreLogic.initLogic();
    /*  */
    CoreLogic.initControllers();
    /*  */
    CoreManager.initEvent();
  }
  /* ------------------------------ */
  static load() {
    CoreManager.loadEvent();
    CoreLogic.loadControllers();
  }
  /* ------------------------------ */
  static resizeDisplay() {
    CoreLogic.resizeDisplayControllers();
  }
  /* ------------------------------ */
  static resizeSensor() {
    CoreLogic.resizeSensorControllers();
  }
  /* ============================== */
  static initEvent() {
    window.addEventListener("load", CoreHandler.onLoad);
  }
  /* ------------------------------ */
  static loadEvent() {
    window.addEventListener("resize", CoreHandler.onResize);
    window.addEventListener("scroll", CoreHandler.onScroll);
  }
}
/* ================================================== */
class CoreHandler {
  static onLoad() {
    CoreController.load();
  }
  /* ============================== */
  static onResize() {
    CoreConfig.updateScreenType();
    if (CoreConfig.screenType !== CoreConfig.previousScreenType) {
      CoreController.resizeDisplay();
      CoreConfig.previousScreenType = CoreConfig.screenType;
      clearTimeout(CoreConfig.resizeSensorTimerId);
    } else {
      clearTimeout(CoreConfig.resizeSensorTimerId);
      CoreConfig.resizeSensorTimerId = setTimeout(
        CoreController.resizeSensor,
        200
      );
    }
  }
  /* ============================== */
  static onScroll() {
    if (CoreConfig.pageType === 3) {
      /* Only TOC */
      DpmacConfig.updateCurrentToc();
      HsncAccessor.subItemLr();
    }
  }
}
/* ================================================== */
class CoreLogic {
  static initLogic() {
    CoreConfig.setConfigState();
    CoreConfig.updateScreenType();
    CoreConfig.previousScreenType = CoreConfig.screenType;
  }
  static initControllers() {
    HeaderController.init();
    FooterController.init();
    switch (CoreConfig.pageType) {
      case 1:
        break;
      case 2:
        NpmController.init();
        break;
      case 3:
        DpmController.init();
        break;
    }
  }
  static loadControllers() {
    HeaderController.load();
    FooterController.load();
    switch (CoreConfig.pageType) {
      case 1:
        break;
      case 2:
        NpmController.load();
        break;
      case 3:
        DpmController.load();
        break;
    }
  }
  static resizeDisplayControllers() {
    HeaderController.resizeDisplay();
    FooterController.resizeDisplay();
    switch (CoreConfig.pageType) {
      case 1:
        break;
      case 2:
        NpmController.resizeDisplay();
        break;
      case 3:
        DpmController.resizeDisplay();
        break;
    }
  }
  static resizeSensorControllers() {
    HeaderController.resizeSensor();
    FooterController.resizeSensor();
    switch (CoreConfig.pageType) {
      case 1:
        break;
      case 2:
        NpmController.resizeSensor();
        break;
      case 3:
        DpmController.resizeSensor();
        break;
    }
  }
}
/* ================================================== */
export { CoreAccessor, CoreController };
/* ================================================== */
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
/* ========================= ;FACOOYA; ========================= */