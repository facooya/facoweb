/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  BlfUtil
} from "../../fwc/fwc-hub.js";
/*  */
class BlfConfigData {
  
}
class BlfConfigElement {
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
        htmlClass: "hsnc-r"
      },
      query: {
        querySelector: ".hsnc-r",
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
class BlfConfigGet {
  static getBlfRoot() {
    const saveVerifyGroup = BlfUtil.getElementCache(
      BlfConfig.blfConfigCache,
      BlfConfigElement.blfRoot
    );
    return saveVerifyGroup;
  }
  static getBlfGroup() {
    const saveVerifyGroup = BlfUtil.getElementCache(
      BlfConfig.blfConfigCache,
      BlfConfigElement.blfGroup
    );
    return saveVerifyGroup;
  }
  static getBlfHoGroup() {
    const getGroup = BlfUtil.getElementCache(
      BlfConfig.blfConfigCache,
      BlfConfigElement.blfGroup
    );
    return getGroup;
  }
  static getblfFoGroup() {
    const returnGroup = BlfUtil.getElementCache(
      BlfConfig.blfConfigCache,
      BlfConfigElement.blfFoGroup
    );
    return returnGroup;
  }
}
class BlfConfigManager {
  static blfHoGenerate() {
    const {
      blfYottaHo
    } = BlfConfigGet.getBlfGroup();
    const blfHoFragment = document.createDocumentFragment();
    let tempGenerateElement = null;
    let tempSaveElement = {};
    /* ================================================== */
    for (let gi = 0; gi < BlfConfigElement.blfHoGroup.length; gi++) {
      tempGenerateElement = BlfUtil.getGenerateElement(
        BlfConfigElement.blfHoGroup[gi]
      );
      tempSaveElement[BlfConfigElement.blfHoGroup[gi].elementId] = tempGenerateElement;
    }
    /* ================================================== */
    BlfConfigManager.blfHoAppend(tempSaveElement, blfHoFragment);
    blfYottaHo.append(blfHoFragment);
  }
  static blfFoGenerate() {
    const {
      blfYottaFo
    } = BlfConfigGet.getBlfGroup();
    const blfFoFragment = document.createDocumentFragment();
    let tempGenerateElement = null;
    let tempSaveElement = {};
    /* ================================================== */
    for (let gi = 0; gi < BlfConfigElement.blfFoGroup.length; gi++) {
      tempGenerateElement = BlfUtil.getGenerateElement(
        BlfConfigElement.blfFoGroup[gi]
      );
      tempSaveElement[BlfConfigElement.blfFoGroup[gi].elementId] = tempGenerateElement;
    }
    /* ================================================== */
    BlfConfigManager.blfFoAppend(tempSaveElement, blfFoFragment);
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
class BlfConfig {
  static currentDisplayType = 0;
  static previousDisplayType = 0;
  static currentPageType = 0;
  static resizeTimerId = 0;
  /* -------------------------------------------------- */
  static blfConfigCache = {};
  /* -------------------------------------------------- */
  static blfHoGenerate() {
    BlfConfigManager.blfHoGenerate();
  }
  static blfFoGenerate() {
    BlfConfigManager.blfFoGenerate();
  }
  /* -------------------------------------------------- */
  static getBlfRoot() {
    return BlfConfigGet.getBlfRoot();
  }
  static getBlfGroup() {
    return BlfConfigGet.getBlfGroup();
  }
  static getBlfHoGroup() {
    return BlfConfigGet.getBlfHoGroup();
  }
  static getblfFoGroup() {
    return BlfConfigGet.getblfFoGroup();
  }
}
export {
  BlfConfig
};
/* NOTE
 * Data -> Element -> Get -> Manager -> Config
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
