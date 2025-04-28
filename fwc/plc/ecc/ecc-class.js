/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  EccConfig
} from "./ecc-config.js";
import {
  FwcAccessor
} from "../../fwc-hub.js";

class EccAccessor {
  static eccCache = {};
  static getEccPrcoGroup() {
    return EccGet.getEccPrcoGroup();
  }
  static getEccNocoGroup() {
    return EccGet.getEccNocoGroup();
  }
}
class EccController {
  static process() {
    EccManager.generate();
    EccManager.addEvent();
  }
  static processOnLoad() {
    EccManager.addEvent();
  }
  static processOnResize() {

  }
}
class EccManager {
  static generate() {
    /* const eccR = document.querySelector(".plc-y-liptg .ecc-r-nptg"); */
    const {
      eccR
    } = EccGet.getEccRoot();
    const eccFragment = document.createDocumentFragment();
    let tempGenerateElement = null;
    let tempSaveElement = {};
    /* =============== :Prco Group: =============== */
    for (let ysi = 0; ysi < EccConfig.elementPrcoGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement(
        EccConfig.elementPrcoGroup[ysi].tag,
        EccConfig.elementPrcoGroup[ysi].selector
      );
      tempSaveElement[EccConfig.elementPrcoGroup[ysi].id] = tempGenerateElement;
    }
    /* =============== ;Prco Group; =============== */
    /* =============== :Noco Group: =============== */
    for (let ysi = 0; ysi < EccConfig.elementNocoGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement(
        EccConfig.elementNocoGroup[ysi].tag,
        EccConfig.elementNocoGroup[ysi].selector
      );
      tempSaveElement[EccConfig.elementNocoGroup[ysi].id] = tempGenerateElement;
    }
    /* =============== ;Noco Group; =============== */
    EccSet.setAppendFragment(eccFragment, tempSaveElement);
    eccR.append(eccFragment);
    /* !!!!! v1.1.15a [del] (replaced) !!!!! */
    /* PRCO */
    /* let selectorData = "ecc-y-prco";
    const yottaPrco = FwcUtility.getGenerateElement("div", selectorData);
    selectorData = "ecc-z-prco" + " " + "ecc-z-prco-lgro";
    const zettaPrcoLgro = FwcUtility.getGenerateElement("div", selectorData);
    selectorData = "ecc-z-prco" + " " + "ecc-z-prco-rgro";
    const zettaPrcoRgro = FwcUtility.getGenerateElement("div", selectorData); */
    /* NOCO */
    /* selectorData = "ecc-y-noco";
    const yottaNoco = FwcUtility.getGenerateElement("div", selectorData);
    selectorData = "ecc-z-noco-sdo";
    const zettaNocoSdo = FwcUtility.getGenerateElement("div", selectorData);
    /* Compile: PRCO 
    yottaPrco.appendChild(zettaPrcoLgro);
    yottaPrco.appendChild(zettaPrcoRgro);
    /* Compile: NOCO 
    yottaNoco.appendChild(zettaNocoSdo);
    /* Compile: eccR 
    eccR.appendChild(yottaPrco);
    eccR.appendChild(yottaNoco); */
  }
  static addEvent() {
    window.addEventListener("scroll", EccHandler.zettaPrco);
  }
}
class EccHandler {
  /* PROC: Progress Rendering Component Object */
  static zettaPrco() {
    const htmlElement = document.documentElement;
    const {
      eccZettaPrcoLgro,
      eccZettaPrcoRgro
    } = EccGet.getEccPrcoGroup();
    /* const eccR = document.querySelector(".plc-y-liptg .ecc-r-nptg");
    const zettaPrcoLgro = eccR.querySelector(".ecc-z-prco-lgro");
    const zettaPrcoRgro = eccR.querySelector(".ecc-z-prco-rgro"); */

    const overflowHeight = htmlElement.scrollHeight - htmlElement.clientHeight;
    const scrollProgress = (htmlElement.scrollTop / overflowHeight) * 100;

    eccZettaPrcoLgro.style.height = Math.round(scrollProgress) + "%";
    eccZettaPrcoRgro.style.height = Math.round(scrollProgress) + "%";
  }
}
class EccGet {
  static getEccRoot() {
    const eccRoot = [
      {
        id: "eccR",
        selector: ".plc-y-liptg .ecc-r-nptg"
      }
    ];
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      EccAccessor.eccCache,
      eccRoot
    );
    return saveVerifyGroup;
  }
  /* static getEccGroup() {
    const eccR = document.querySelector(".plc-y-liptg .ecc-r-nptg");
    return {
      eccR
    };
  } */
  static getEccPrcoGroup() {
    /* const { eccR } = EccGet.getEccGroup();
    const eccYottaPrco = eccR.querySelector(".ecc-y-prco");
    const eccZettaPrco = eccR.querySelectorAll(".ecc-z-prco");
    const eccZettaPrcoLgro = eccR.querySelector(".ecc-z-prco-lgro");
    const eccZettaPrcoRgro = eccR.querySelector(".ecc-z-prco-rgro");
    return {
      eccYottaPrco,
      eccZettaPrco,
      eccZettaPrcoLgro,
      eccZettaPrcoRgro
    }; */
    const eccPrcoGroup = [
      {
        id: "eccYottaPrco",
        selector: ".ecc-y-prco"
      },
      {
        id: "eccZettaPrco",
        selector: ".ecc-z-prco",
        type: "all"
      },
      {
        id: "eccZettaPrcoLgro",
        selector: ".ecc-z-prco-lgro"
      },
      {
        id: "eccZettaPrcoRgro",
        selector: ".ecc-z-prco-rgro"
      }
    ];
    const {
      eccR
    } = this.getEccRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      EccAccessor.eccCache,
      eccPrcoGroup,
      eccR
    );
    return saveVerifyGroup;
  }
  static getEccNocoGroup() {
    /* const { eccR } = EccGet.getEccGroup();
    const eccYottaNoco = eccR.querySelector(".ecc-y-noco");
    const eccZettaNocoSdo = eccR.querySelector(".ecc-z-noco-sdo");
    return {
      eccYottaNoco,
      eccZettaNocoSdo
    }; */
    const eccNocoGroup = [
      {
        id: "eccYottaNoco",
        selector: ".ecc-y-noco"
      },
      {
        id: "eccZettaNocoSdo",
        selector: ".ecc-z-noco-sdo"
      }
    ];
    const {
      eccR
    } = this.getEccRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      EccAccessor.eccCache,
      eccNocoGroup,
      eccR
    );
    return saveVerifyGroup;
  }
}
class EccSet {
  static setAppendFragment(eccFragment, tempSaveElement) {
    tempSaveElement["yottaPrco"].append(
      tempSaveElement["zettaPrcoLgro"],
      tempSaveElement["zettaPrcoRgro"]
    );
    tempSaveElement["yottaNoco"].append(
      tempSaveElement["zettaNocoSdo"]
    );
    eccFragment.append(
      tempSaveElement["yottaPrco"],
      tempSaveElement["yottaNoco"]
    );
  }
}
export {
  EccAccessor,
  EccController
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