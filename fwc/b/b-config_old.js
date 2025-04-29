/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  BodyUtil
} from "../../fwc/fwc-hub.js";
/*  */
class BodyConfigData {
  
}
class BodyConfigElement {
  static blfRoot = [
    {
      elementId: "blfR",
      query: {
        querySelector: ".blf-r",
        queryType: "single"
      }
    }
  ];
  static blfGroup = [
    {
      elementId: "blfYottaHo",
      query: {
        querySelector: ".blf-y-ho",
        queryType: "single"
      }
    },
    {
      elementId: "blfYottaNpmo",
      query: {
        querySelector: ".blf-y-npmo",
        queryType: "single"
      }
    },
    {
      elementId: "blfYottaDpmo",
      query: {
        querySelector: ".blf-y-dpmo",
        queryType: "single"
      }
    },
    {
      elementId: "blfYottaFo",
      query: {
        querySelector: ".blf-y-fo",
        queryType: "single"
      }
    }
  ];
  static blfHoGroup = [
    {
      elementId: "htpncR",
      generate: {
        htmlTag: "nav",
        htmlClass: "htpnc-r"
      },
      query: {
        querySelector: ".htpnc-r",
        queryType: "single"
      }
    },
    {
      elementId: "hdncR",
      generate: {
        htmlTag: "nav",
        htmlClass: "hdnc-r"
      },
      query: {
        querySelector: ".hdnc-r",
        queryType: "single"
      }
    },
    {
      elementId: "hsncR",
      generate: {
        htmlTag: "nav",
        htmlClass: "hsnc-r hsnc"
      },
      query: {
        querySelector: ".hsnc",
        queryType: "single"
      }
    },
    {
      elementId: "heccR",
      generate: {
        htmlTag: "div",
        htmlClass: "hecc-r"
      },
      query: {
        querySelector: ".hecc-r",
        queryType: "single"
      }
    }
  ]
  static blfFoGroup = [
    {
      elementId: "fascR",
      generate: {
        htmlTag: "nav",
        htmlClass: "fasc-r"
      },
      query: {
        querySelector: ".fasc-r",
        queryType: "single"
      }
    },
    {
      elementId: "faucR",
      generate: {
        htmlTag: "nav",
        htmlClass: "fauc-r"
      },
      query: {
        querySelector: ".fauc-r",
        queryType: "single"
      }
    },
    {
      elementId: "foscR",
      generate: {
        htmlTag: "nav",
        htmlClass: "fosc-r"
      },
      query: {
        querySelector: ".fosc-r",
        queryType: "single"
      }
    },
    {
      elementId: "fllcR",
      generate: {
        htmlTag: "nav",
        htmlClass: "fllc-r"
      },
      query: {
        querySelector: ".fllc-r",
        queryType: "single"
      }
    }
  ];
}
class BodyConfigGet {
  static getBodyRoot() {
    const saveVerifyGroup = BodyUtil.getElementCache(
      BodyConfig.blfConfigCache,
      BodyConfigElement.blfRoot
    );
    return saveVerifyGroup;
  }
  static getBodyGroup() {
    const saveVerifyGroup = BodyUtil.getElementCache(
      BodyConfig.blfConfigCache,
      BodyConfigElement.blfGroup
    );
    return saveVerifyGroup;
  }
  static getBodyHoGroup() {
    const getGroup = BodyUtil.getElementCache(
      BodyConfig.blfConfigCache,
      BodyConfigElement.blfGroup
    );
    return getGroup;
  }
  static getblfFoGroup() {
    const returnGroup = BodyUtil.getElementCache(
      BodyConfig.blfConfigCache,
      BodyConfigElement.blfFoGroup
    );
    return returnGroup;
  }
}
class BodyConfigManager {
  static blfHoGenerate() {
    const {
      blfYottaHo
    } = BodyConfigGet.getBodyGroup();
    const blfHoFragment = document.createDocumentFragment();
    let tempGenerateElement = null;
    let tempSaveElement = {};
    /* ================================================== */
    for (let gi = 0; gi < BodyConfigElement.blfHoGroup.length; gi++) {
      tempGenerateElement = BodyUtil.getGenerateElement(
        BodyConfigElement.blfHoGroup[gi]
      );
      tempSaveElement[BodyConfigElement.blfHoGroup[gi].elementId] = tempGenerateElement;
    }
    /* ================================================== */
    BodyConfigManager.blfHoAppend(tempSaveElement, blfHoFragment);
    blfYottaHo.append(blfHoFragment);
  }
  static blfFoGenerate() {
    const {
      blfYottaFo
    } = BodyConfigGet.getBodyGroup();
    const blfFoFragment = document.createDocumentFragment();
    let tempGenerateElement = null;
    let tempSaveElement = {};
    /* ================================================== */
    for (let gi = 0; gi < BodyConfigElement.blfFoGroup.length; gi++) {
      tempGenerateElement = BodyUtil.getGenerateElement(
        BodyConfigElement.blfFoGroup[gi]
      );
      tempSaveElement[BodyConfigElement.blfFoGroup[gi].elementId] = tempGenerateElement;
    }
    /* ================================================== */
    BodyConfigManager.blfFoAppend(tempSaveElement, blfFoFragment);
    blfYottaFo.prepend(blfFoFragment);
  }
  /*  */
  static blfHoAppend(getElement, blfHoFragment) {
    blfHoFragment.append(
      getElement["htpncR"],
      getElement["hdncR"],
      getElement["hsncR"],
      getElement["heccR"]
    );
  }
  /*  */
  static blfFoAppend(getElement, blfFoFragment) {
    blfFoFragment.append(
      getElement["fascR"],
      getElement["faucR"],
      getElement["foscR"],
      getElement["fllcR"]
    );
  }
}
class BodyConfig {
  static currentDisplayType = 0;
  static previousDisplayType = 0;
  static currentPageType = 0;
  static resizeTimerId = 0;
  /*  */
  static isTouchDevice = false;
  static screenType = BodyConfig.currentDisplayType;
  static previousScreenType = BodyConfig.previousDisplayType;
  static pageType = BodyConfig.currentPageType;
  /* -------------------------------------------------- */
  static blfConfigCache = {};
  /* static blfCache = {}; */
  /* -------------------------------------------------- */
  static blfHoGenerate() {
    BodyConfigManager.blfHoGenerate();
  }
  static blfFoGenerate() {
    BodyConfigManager.blfFoGenerate();
  }
  /* -------------------------------------------------- */
  static getBodyRoot() {
    return BodyConfigGet.getBodyRoot();
  }
  static getBodyGroup() {
    return BodyConfigGet.getBodyGroup();
  }
  static getBodyHoGroup() {
    return BodyConfigGet.getBodyHoGroup();
  }
  static getblfFoGroup() {
    return BodyConfigGet.getblfFoGroup();
  }
}
export {
  BodyConfig
};
/* NOTE
 * Data -> Element -> Get -> Manager -> Config
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
