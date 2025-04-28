/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  HeccConfig
} from "./ecc-config.js";
import {
  FwcAccessor
} from "../../fwc-hub.js";

class HeccAccessor {
  static heccCache = {};
  static getHeccPboGroup() {
    return HeccGet.getHeccPboGroup();
  }
  static getHeccNooGroup() {
    return HeccGet.getHeccNooGroup();
  }
}
class HeccController {
  static process() {
    HeccManager.generate();
    HeccManager.event();
  }
  static processOnLoad() {
    
  }
  static processOnResize() {

  }
}
class HeccManager {
  static generate() {
    const {
      heccR
    } = HeccGet.getHeccRoot();
    const heccFragment = document.createDocumentFragment();
    let tempGenerateElement = null;
    let tempSaveElement = {};
    /* =============== :Pbo Group: =============== */
    for (let ysi = 0; ysi < HeccConfig.elementPboGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement(
        HeccConfig.elementPboGroup[ysi].tag,
        HeccConfig.elementPboGroup[ysi].selector
      );
      tempSaveElement[HeccConfig.elementPboGroup[ysi].id] = tempGenerateElement;
    }
    /* =============== ;Pbo Group; =============== */
    /* =============== :Noo Group: =============== */
    for (let ysi = 0; ysi < HeccConfig.elementNooGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement(
        HeccConfig.elementNooGroup[ysi].tag,
        HeccConfig.elementNooGroup[ysi].selector
      );
      tempSaveElement[HeccConfig.elementNooGroup[ysi].id] = tempGenerateElement;
    }
    /* =============== ;Noo Group; =============== */
    HeccSet.setAppendFragment(heccFragment, tempSaveElement);
    heccR.append(heccFragment);
  }
  static event() {
    window.addEventListener("scroll", HeccHandler.zettaPbo);
  }
}
class HeccHandler {
  /* PROC: Progress Rendering Component Object */
  static zettaPbo() {
    const htmlElement = document.documentElement;
    const {
      heccZettaPboLgro,
      heccZettaPboRgro
    } = HeccGet.getHeccPboGroup();

    const overflowHeight = htmlElement.scrollHeight - htmlElement.clientHeight;
    const scrollProgress = (htmlElement.scrollTop / overflowHeight) * 100;
    const setHeight = Math.round(scrollProgress).toString() + "%";

    heccZettaPboLgro.style.height = setHeight;
    heccZettaPboRgro.style.height = setHeight;
  }
}
class HeccGet {
  static getHeccRoot() {
    const heccRoot = [
      {
        id: "heccR",
        selector: ".blf-y-ho .hecc-r"
      }
    ];
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      HeccAccessor.heccCache,
      heccRoot
    );
    return saveVerifyGroup;
  }
  static getHeccPboGroup() {
    const heccPboGroup = [
      {
        id: "heccYottaPbo",
        selector: ".hecc-y-pbo"
      },
      {
        id: "heccZettaPbo",
        selector: ".hecc-z-pbo",
        type: "all"
      },
      {
        id: "heccZettaPboLgro",
        selector: ".hecc-z-pbo-lgro"
      },
      {
        id: "heccZettaPboRgro",
        selector: ".hecc-z-pbo-rgro"
      }
    ];
    const {
      heccR
    } = this.getHeccRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      HeccAccessor.heccCache,
      heccPboGroup,
      heccR
    );
    return saveVerifyGroup;
  }
  static getHeccNooGroup() {
    const heccNooGroup = [
      {
        id: "heccYottaNoo",
        selector: ".hecc-y-noo"
      },
      {
        id: "heccZettaNooSdo",
        selector: ".hecc-z-noo-sdo"
      }
    ];
    const {
      heccR
    } = this.getHeccRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      HeccAccessor.heccCache,
      heccNooGroup,
      heccR
    );
    return saveVerifyGroup;
  }
}
class HeccSet {
  static setAppendFragment(heccFragment, tempSaveElement) {
    tempSaveElement["yottaPbo"].append(
      tempSaveElement["zettaPboLgro"],
      tempSaveElement["zettaPboRgro"]
    );
    tempSaveElement["yottaNoo"].append(
      tempSaveElement["zettaNooSdo"]
    );
    heccFragment.append(
      tempSaveElement["yottaPbo"],
      tempSaveElement["yottaNoo"]
    );
  }
}
export {
  HeccAccessor,
  HeccController
}
/* NOTE
 * CO: Component Object
 * PRCO: Progress Rendering CO
 * NOCO: Navigate Overlay CO
 * 
 * HeccHandler.zettaPbo() {
 *   overflowHeight(10) = scrollHeight(20) - clientHeight(10);
 *   scrollProgress(50) = (scrollTop(5) / overflowHeight(10)) * 100;
 *   zettaPbo.style.height = scrollProgress(50) + "%";
 * }
 */
/* AUTHORSHIP
 * Founder: Facooya
 */