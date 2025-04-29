/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  BlfConfig
} from "../fwc-hub.js";
/*  */
class BlfUtilSet {
  static setDeviceState() {
    if (window.matchMedia("(hover: none)").matches) {
      BlfConfig.isTouchDevice = true;
    }
  }
}
class BlfUtilGet {
  static getGenerateElement(pElement, pIndex = []) {
    const eGenerate = pElement.generate;
    const elementData = document.createElement(eGenerate.htmlTag);
    if (eGenerate.htmlClass) {
      elementData.setAttribute("class", eGenerate.htmlClass);
    }
    /* !!!!! :v1.1.20a-4: !!!!! */
    if (eGenerate.htmlTarget) {
      elementData.setAttribute("target", eGenerate.htmlTarget);
    }
    /* !!!!! ;v1.1.20a-4; !!!!! */
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
  /* ================================================== */
  static getElementCache(pCache, pGroup, pRoot, pIndex) {
    const returnCache = {};
    /* dRoot Verify */
    if (pRoot === undefined || pRoot === null) {
      pRoot = document;
    }
    /*  */
    for (let pgi = 0; pgi < pGroup.length; pgi++) {
      let cacheKey = pGroup[pgi].elementId;
      /* pIndex Verify: 0 = flase, if pIndex = 0; Error */
      if (pIndex != null) {
        cacheKey += pIndex.toString();
      }
      /* cache Verify */
      let getCache = pCache[cacheKey];
      if (!getCache) {
        let queryType = "querySelector";
        switch (pGroup[pgi].query.queryType) {
          case "single": {
            queryType = "querySelector";
            break;
          }
          case "all": {
            queryType = "querySelectorAll";
            break;
          }
        }
        /* Find & Save */
        getCache = pRoot[queryType](pGroup[pgi].query.querySelector);
        pCache[cacheKey] = getCache;
      }
      /* Return */
      returnCache[pGroup[pgi].elementId] = getCache;
    }
    /*  */
    return returnCache;
  }
  /* static getCache(pElement) {
    const returnElement = null;
    const cacheId = pElement.cacheId;
    /*  
    let getCache = BlfConfig.blfCache[cacheId];
    if (!getCache) {
      console.log(pElement[0].query.querySelector);
      getCache = document.querySelector(pElement[0].query.querySelector);
      BlfConfig.blfCache[cacheId] = getCache;
    }
    returnElement = getCache;
    console.log(BlfConfig.blfCache);
    return returnElement;
  } */
  /* ================================================== */
  static getEventData(eventData, targetQuery) {
    const eventType = eventData.type;
    const eventCurrentTarget = eventData.currentTarget;
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
  /* ================================================== */
  static getDisplayType() {
    const displayType = [
      "(max-width: 767px)",
      "(min-width: 768px) and (max-width: 1279px)",
      "(min-width: 1280px)"
    ];
    for (let dti = 0; dti < displayType.length; dti++) {
      if (window.matchMedia(displayType[dti]).matches) {
        const getDisplayType = dti + 1;
        return getDisplayType;
      }
    }
  }
  static getPageType() {
    const pageType = [
      ".blf-y-hpmo",
      ".blf-y-npmo",
      ".blf-y-dpmo"
    ];
    for (let pti = 0; pti < pageType.length; pti++) {
      if (document.querySelector(pageType[pti])) {
        const getPageType = pti + 1;
        return getPageType;
      }
    }
  }
}
class BlfUtil {
  static setDeviceState() {
    BlfUtilSet.setDeviceState();
  }
  /* -------------------------------------------------- */
  static getGenerateElement(elementGroup, pIndex = []) {
    return BlfUtilGet.getGenerateElement(elementGroup, pIndex);
  }
  static getElementCache(pCache, pGroup, pRoot, pIndex) {
    return BlfUtilGet.getElementCache(pCache, pGroup, pRoot, pIndex);
  }
  static getEventData(eventData, targetQuery) {
    return BlfUtilGet.getEventData(eventData, targetQuery);
  }
  static getDisplayType() {
    return BlfUtilGet.getDisplayType();
  }
  static getPageType() {
    return BlfUtilGet.getPageType();
  }
  /* -------------------------------------------------- */
  /* static getCache(pElement) {
    return BlfUtilGet.getCache(pElement);
  } */
}
export {
  BlfUtil
};
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */