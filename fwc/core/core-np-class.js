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
/* ================================================== */
class CoreAccessor {

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
    NpmController.init();
  }
  static loadControllers() {
    HeaderController.load();
    FooterController.load();
    NpmController.load();
  }
  static resizeDisplayControllers() {
    HeaderController.resizeDisplay();
    FooterController.resizeDisplay();
    NpmController.resizeDisplay();
  }
  static resizeSensorControllers() {
    HeaderController.resizeSensor();
    FooterController.resizeSensor();
    NpmController.resizeSensor();
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