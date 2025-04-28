/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* import {
  TpncController
} from "./nc/tpnc/tpnc-class.js";
import {
  SncController
} from "./nc/snc/snc-class.js"; */
import {
  TpncController,
  DncController,
  SncController,
  EccController,
  NplcController
} from "./fwc-hub.js";
class FwcAccessor {
  static getGenerateElement(elementTag, setClass) {
    return FwcGet.getGenerateElement(elementTag, setClass);
  }
  static getVerifyCache(dCache, dGroup, dRoot, dIndex) {
    return FwcGet.getVerifyCache(dCache, dGroup, dRoot, dIndex);
  }
  static getEventData(eventData, indexTarget) {
    return FwcGet.getEventData(eventData, indexTarget);
  }
  static setGenerateElement(elementData, dText, dHref, dIndex = []) {
    FwcSet.setGenerateElement(elementData, dText, dHref, dIndex);
  }
}
class FwcController {
  /* =============== Process: =============== */
  static process() {
    const pStart = performance.now();
    TpncController.process();
    DncController.process();
    SncController.process();
    EccController.process();
    /* !!!!! v1.1.15a [temp] URL Check nav-page? doc-page? home-page? !!!!! */
    NplcController.process();
    const pEnd = performance.now();
    console.log("per.fwc.process: " + (pEnd - pStart));
  }
  static processOnLoad() {
    const pStart = performance.now();
    TpncController.processOnLoad();
    DncController.processOnLoad();
    SncController.processOnLoad();
    EccController.processOnLoad();

    NplcController.processOnLoad();
    const pEnd = performance.now();
    console.log("per.fwc.processOnLoad: " + (pEnd - pStart));
  }
  static processOnResize() {
    const pStart = performance.now();
    TpncController.processOnResize();
    DncController.processOnResize();
    SncController.processOnResize();
    EccController.processOnResize();

    NplcController.processOnResize();
    const pEnd = performance.now();
    console.log("per.fwc.processOnResize: " + (pEnd - pStart));
  }
  /* =============== Process; =============== */
  /* =============== Access: =============== */
  /* static accessGetGenerateElement(elementTag, setClass) {
    FwcGet.getGenerateElement(elementTag, setClass);
  }
  static accessGetEventData(eventData) {
    const { eType, eCurrentTarget, eIndex } = FwcGet.getEventData(eventData);
    return { eType, eCurrentTarget, eIndex };
  } */
  /* =============== Access; =============== */
}
class FwcGet {
  static getGenerateElement(elementTag, setClass) {
    const elementData = document.createElement(elementTag);
    elementData.setAttribute("class", setClass);
    return elementData;
  }
  static getVerifyCache(dCache, dGroup, dRoot, dIndex) {
    let saveVerifyCache = {};
    if (dRoot === undefined || dRoot === null) {
      dRoot = document;
    }
    for (let i = 0; i < dGroup.length; i++) {
      let cacheKey = dGroup[i].id;
      if (dIndex !== undefined && dIndex !== null) {
        cacheKey += dIndex.toString();
      }
      let getCache = dCache[cacheKey];
      if (!getCache) {
        if (dGroup[i].type === "all") {
          getCache = dRoot.querySelectorAll(dGroup[i].selector);
        } else {
          getCache = dRoot.querySelector(dGroup[i].selector);
        }
        dCache[cacheKey] = getCache;
      }
      saveVerifyCache[dGroup[i].id] = getCache;
    }
    return saveVerifyCache;
  }
  static getEventData(eventData, targetQuery) {
    const eventType = eventData.type;
    const eventCurrentTarget = eventData.currentTarget;
    const eventIndex = eventCurrentTarget.index;
    let targetElement = null;
    let targetIndex = null;
    if (targetQuery !== undefined && targetQuery !== null) {
      targetElement = eventCurrentTarget.closest(targetQuery);
      targetIndex = targetElement.index;
    }
    return {
      eventType,
      eventCurrentTarget,
      eventIndex,
      targetElement,
      targetIndex
    };
  }
}
class FwcSet {
  static setGenerateElement(elementData, dText, dHref, dIndex = []) {
    switch (dIndex.length) {
      case 0: {
        if (dText) {
          elementData.textContent = dText;
        }
        if (dHref) {
          elementData.setAttribute("href", dHref);
        }
        break;
      }
      case 1: {
        if (dText) {
          elementData.textContent = dText[dIndex[0]];
        }
        if (dHref) {
          elementData.setAttribute("href", dHref[dIndex[0]]);
        }
        break;
      }
      case 2: {
        if (dText) {
          elementData.textContent = dText[dIndex[0]][dIndex[1]];
        }
        if (dHref) {
          elementData.setAttribute("href", dHref[dIndex[0]][dIndex[1]]);
        }
        break;
      }
    }
  }
}
/* class FwcGet {
  static getGenerateElement(elementTag, setClass) {
    const elementData = document.createElement(elementTag);
    elementData.setAttribute("class", setClass);
    return elementData;
  }
  static getEventData(eventData) {
    const eType = eventData.type;
    const eCurrentTarget = eventData.currentTarget;
    const eIndex = eCurrentTarget.index;
    return { eType, eCurrentTarget, eIndex };
  }
} */
export {
  FwcAccessor,
  FwcController
};
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */