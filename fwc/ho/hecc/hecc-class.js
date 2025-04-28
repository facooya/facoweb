/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  FwcAccessor,
  HdncAccessor,
  HeccConfig,
  HeccUtil
} from "../../fwc-hub.js";
/*  */
class HeccAccessor {
  static heccCache = {};
  static getHeccPboGroup() {
    return HeccConfig.getHeccPboGroup();
  }
  static getHeccNooGroup() {
    return HeccConfig.getHeccNooGroup();
  }
}
class HeccController {
  static init() {
    HeccConfig.heccGenerate();
    HeccManager.event();
  }
  static load() {
    HeccManager.load();
  }
  static resizeDisplay() {

  }
}
class HeccManager {
  static load() {
    /* window.previousInnerHeight = window.innerHeight;
    window.timeoutId = null; */
  }
  static generate() {
    const {
      heccR
    } = HeccGet.getHeccRoot();
    const heccFragment = document.createDocumentFragment();
    let tempGenerateElement = null;
    let tempSaveElement = {};
    /* =============== :Pbo Group: =============== */
    for (let ysi = 0; ysi < HeccConfig.heccPboGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement2(
        HeccConfig.heccPboGroup[ysi]
      );
      tempSaveElement[HeccConfig.heccPboGroup[ysi].elementId] = tempGenerateElement;
    }
    /* =============== ;Pbo Group; =============== */
    /* =============== :Noo Group: =============== */
    for (let ysi = 0; ysi < HeccConfig.heccNooGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement2(
        HeccConfig.heccNooGroup[ysi]
      );
      tempSaveElement[HeccConfig.heccNooGroup[ysi].elementId] = tempGenerateElement;
    }
    /* =============== ;Noo Group; =============== */
    HeccConfig.heccAppend(tempSaveElement, heccFragment);
    heccR.append(heccFragment);
  }
  static event() {
    window.addEventListener("scroll", HeccHandler.windowScroll);
  }
}
class HeccHandler {
  static windowScroll() {
    HeccUtil.updateHeccZettaPbo();
    HeccUtil.setHeccZettaPbo();
  }
  static adtHeccScrollGroup() {
    HeccHandler.adtHeccZettaPbo();
    /* clearTimeout(window.timeoutId);
    window.timeoutId = setTimeout(HeccHandler.adtWindowHeight, 100); */
    /* HeccHandler.adtWindowHeight(); */
  }
  /*  */
  static adtHeccZettaPbo() {
    const htmlElement = document.documentElement;
    const {
      heccZettaPboLgro,
      heccZettaPboRgro
    } = HeccConfig.getHeccPboGroup();

    const overflowHeight = htmlElement.scrollHeight - htmlElement.clientHeight;
    const scrollProgress = (htmlElement.scrollTop / overflowHeight) * 100;
    const setHeight = Math.round(scrollProgress).toString() + "%";

    heccZettaPboLgro.style.height = setHeight;
    heccZettaPboRgro.style.height = setHeight;
  }
  /*  */
  static adtWindowHeight() {
    const innerHeight = window.innerHeight;
    const previousInnerHeight = window.previousInnerHeight;
    const {
      hdncExaBlo
    } = HdncAccessor.getHdncBloGroup();
    if (innerHeight !== previousInnerHeight) {
      for (let i = 0; i < hdncExaBlo.length; i++) {
        if (hdncExaBlo[i].isActive) {
          hdncExaBlo[i].style.maxHeight =
            (innerHeight - (10 * 16)).toString() + "px";
        }
      }
      window.previousInnerHeight = innerHeight;
    }
  }
}
class HeccGet {
  /* static getHeccRoot() {
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HeccAccessor.heccCache,
      HeccConfig.heccRoot
    );
    return saveVerifyGroup;
  }
  static getHeccPboGroup() {
    const {
      heccR
    } = HeccGet.getHeccRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HeccAccessor.heccCache,
      HeccConfig.heccPboGroup,
      heccR
    );
    return saveVerifyGroup;
  }
  static getHeccNooGroup() {
    const {
      heccR
    } = HeccGet.getHeccRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HeccAccessor.heccCache,
      HeccConfig.heccNooGroup,
      heccR
    );
    return saveVerifyGroup;
  } */
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