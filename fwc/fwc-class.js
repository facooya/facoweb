/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  HtpncController,
  HdncController,
  HsncController,
  HeccController,
  NpmhcController,
  NpmscController
} from "./fwc-hub.js";
class FwcAccessor {
  static getGenerateElement(elementTag, setClass) {
    return FwcGet.getGenerateElement(elementTag, setClass);
  }
  static getGenerateElement2(elementTag, setClass) {
    return FwcGet.getGenerateElement2(elementTag, setClass);
  }
  static getVerifyCache(dCache, dGroup, dRoot, dIndex) {
    return FwcGet.getVerifyCache(dCache, dGroup, dRoot, dIndex);
  }
  static getVerifyCache2(dCache, dGroup, dRoot, dIndex) {
    return FwcGet.getVerifyCache2(dCache, dGroup, dRoot, dIndex);
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
  static init() {
    HtpncController.init();
    HdncController.init();
    HsncController.init();
    HeccController.init();
    /*  */
    /* !!!!! v1.1.15a [temp] URL Check nav-page? doc-page? home-page? !!!!! */
    NpmhcController.init();
    NpmscController.init();
  }
  static load() {
    HtpncController.load();
    HdncController.load();
    HsncController.load();
    HeccController.load();
    /*  */
    NpmhcController.load();
    NpmscController.load();
  }
  static resizeDisplay() {
    HtpncController.resizeDisplay();
    HdncController.resizeDisplay();
    HsncController.resizeDisplay();
    HeccController.resizeDisplay();
    /*  */
    NpmhcController.resizeDisplay();
    NpmscController.resizeDisplay();
  }
  static resizeSensor() {
    HdncController.resizeSensor();
    HsncController.resizeSensor();
  }
  /* =============== Process; =============== */
}
class FwcGet {
  static getGenerateElement(elementTag, setClass) {
    const elementData = document.createElement(elementTag);
    elementData.setAttribute("class", setClass);
    return elementData;
  }
  static getGenerateElement2(elementGroup, pIndex = []) {
    const eGenerate = elementGroup.generate;
    const elementData = document.createElement(eGenerate.htmlTag);
    if (eGenerate.htmlClass) {
      elementData.setAttribute("class", eGenerate.htmlClass);
    }
    if (eGenerate.htmlText || eGenerate.htmlLink) {
      switch (pIndex.length) {
        case 0: {
          if (eGenerate.htmlText) {
            elementData.textContent = eGenerate.htmlText;
          }
          if (eGenerate.htmlLink) {
            elementData.setAttribute("href", eGenerate.htmlLink);
          }
          break;
        }
        case 1: {
          if (eGenerate.htmlText) {
            elementData.textContent = eGenerate.htmlText[pIndex[0]];
          }
          if (eGenerate.htmlLink) {
            elementData.setAttribute("href", eGenerate.htmlLink[pIndex[0]]);
          }
          break;
        }
        case 2: {
          if (eGenerate.htmlText) {
            elementData.textContent = eGenerate.htmlText[pIndex[0]][pIndex[1]];
          }
          if (eGenerate.htmlLink) {
            elementData.setAttribute("href", eGenerate.htmlLink[pIndex[0]][pIndex[1]]);
          }
          break;
        }
      }
    }
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
  static getVerifyCache2(dCache, dGroup, dRoot, dIndex) {
    let saveVerifyCache = {};
    /* dRoot Verify */
    if (dRoot === undefined || dRoot === null) {
      dRoot = document;
    }
    /*  */
    for (let i = 0; i < dGroup.length; i++) {
      let cacheKey = dGroup[i].elementId;
      /* dIndex Verify: 0 = flase, if dIndex = 0; Error */
      if (dIndex != null) {
        cacheKey += dIndex.toString();
      }
      /* cache Verify */
      let getCache = dCache[cacheKey];
      if (!getCache) {
        let queryType = "";
        switch (dGroup[i].query.queryType) {
          case "single": {
            queryType = "querySelector";
            break;
          }
          case "all": {
            queryType = "querySelectorAll";
            break;
          }
          default: {
            queryType = "querySelector";
            break;
          }
        }
        /* Find & Save */
        getCache = dRoot[queryType](dGroup[i].query.querySelector);
        dCache[cacheKey] = getCache;
      }
      /* Return */
      saveVerifyCache[dGroup[i].elementId] = getCache;
    }
    /*  */
    return saveVerifyCache;
  }
  static getEventData(eventData, targetQuery) {
    const eventType = eventData.type;
    const eventCurrentTarget = eventData.currentTarget;
    /* !!!!! v1.1.19a-4 !!!!! */
    const eventIndex = eventCurrentTarget.index;
    /*  */
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
export {
  FwcAccessor,
  FwcController
};
/* NOTE
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */