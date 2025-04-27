/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  FwcUtility
} from "../../fwc-hub.js";
class EccController {
  static process() {
    EccManager.generate();
    EccManager.addEvent();
  }
  static loadProcess() {
    EccManager.addEvent();
  }
}
class EccManager {
  static generate() {
    const eccR = document.querySelector(".plc-y-liptg .ecc-r-nptg");
    /* PRCO */
    let selectorData = "ecc-y-prco";
    const yottaPrco = FwcUtility.getGenerateElement("div", selectorData);
    selectorData = "ecc-z-prco" + " " + "ecc-z-prco-lgro";
    const zettaPrcoLgro = FwcUtility.getGenerateElement("div", selectorData);
    selectorData = "ecc-z-prco" + " " + "ecc-z-prco-rgro";
    const zettaPrcoRgro = FwcUtility.getGenerateElement("div", selectorData);
    /* NOCO */
    selectorData = "ecc-y-noco";
    const yottaNoco = FwcUtility.getGenerateElement("div", selectorData);
    selectorData = "ecc-z-noco-sdo";
    const zettaNocoSdo = FwcUtility.getGenerateElement("div", selectorData);
    /* Compile: PRCO */
    yottaPrco.appendChild(zettaPrcoLgro);
    yottaPrco.appendChild(zettaPrcoRgro);
    /* Compile: NOCO */
    yottaNoco.appendChild(zettaNocoSdo);
    /* Compile: eccR */
    eccR.appendChild(yottaPrco);
    eccR.appendChild(yottaNoco);
  }
  static addEvent() {
    window.addEventListener("scroll", EccHandler.zettaPrco);
  }
}
class EccHandler {
  /* PROC: Progress Rendering Component Object */
  static zettaPrco() {
    const htmlElement = document.documentElement;
    const eccR = document.querySelector(".plc-y-liptg .ecc-r-nptg");
    const zettaPrcoLgro = eccR.querySelector(".ecc-z-prco-lgro");
    const zettaPrcoRgro = eccR.querySelector(".ecc-z-prco-rgro");

    const overflowHeight = htmlElement.scrollHeight - htmlElement.clientHeight;
    const scrollProgress = (htmlElement.scrollTop / overflowHeight) * 100;

    zettaPrcoLgro.style.height = Math.round(scrollProgress) + "%";
    zettaPrcoRgro.style.height = Math.round(scrollProgress) + "%";
  }
}
class EccUtility {

}
export {
  EccController,
  EccManager,
  EccHandler,
  EccUtility
}
/* DESCRIPTION
 * CO: Component Object
 * PRCO: Progress Rendering CO
 * NOCO: Navigate Overlay CO
 * 
 * EccHandler.zettaPrco() {
 *   overflowHeight(10) = scrollHeight(20) - clientHeight(10);
 *   scrollProgress(50) = (scrollTop(5) / overflowHeight(10)) * 100;
 *   zettaPrco.style.height = scrollProgress(50) + "%";
 * }
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */