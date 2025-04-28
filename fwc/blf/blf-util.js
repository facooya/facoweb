/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
class BlfUtilGet {
  static getGenerateElement(pElement, pIndex = []) {
    const eGenerate = pElement.generate;
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
  /* -------------------------------------------------- */
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
class BlfUtilSet {
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
class BlfUtil {
  static getGenerateElement(elementGroup, pIndex = []) {
    return BlfUtilGet.getGenerateElement(elementGroup, pIndex);
  }
  static getElementCache(pCache, pGroup, pRoot, pIndex) {
    return BlfUtilGet.getElementCache(pCache, pGroup, pRoot, pIndex);
  }
  static getEventData(eventData, targetQuery) {
    return BlfUtilGet.getEventData(eventData, targetQuery);
  }
  /* -------------------------------------------------- */
  static setGenerateElement(pElement, pText, pHref, pIndex = []) {
    BlfUtilSet.setGenerateElement(pElement, pText, pHref, pIndex);
  }
}
export {
  BlfUtil
};
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */