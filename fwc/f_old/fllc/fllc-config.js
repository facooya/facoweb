/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  BodyUtil
} from "../../fwc-hub.js";
/*  */
class FllcConfigData {
  static fllcExaLink = [
    "#",
    "#",
    "#",
    "#"
  ];
  static fllcPetaText = [
    "Privacy Policy",
    "Terms of Use",
    "Cookie Settings",
    "Legal"
  ];
  static fllcZettaFoLink = "#facooya.com";
  /*  */
  /* static fllcZettaToSinceText = "Since 2023"; */
  static fllcZettaToCopyrightText = "Copyright 2023-2024 Facooya";
}
class FllcConfigElement {
  static fllcRoot = [
    {
      elementId: "fllcR",
      generate: {
        htmlTag: "nav",
        htmlClass: "fllc-r"
      },
      query: {
        querySelector: ".blf-y-fo .fllc-r",
        queryType: "single"
      }
    }
  ];
  static fllcGroup = [
    {
      elementId: "fllcY",
      generate: {
        htmlTag: "ul",
        htmlClass: "fllc-y"
      },
      query: {
        querySelector: ".fllc-y",
        queryType: "single"
      }
    }
  ];
  static fllcYbGroup = [
    {
      elementId: "fllcZ",
      generate: {
        htmlTag: "li",
        htmlClass: "fllc-z"
      },
      query: {
        querySelector: ".fllc-z",
        queryType: "all"
      }
    },
    {
      elementId: "fllcE",
      generate: {
        htmlTag: "a",
        htmlClass: "fllc-e",
        htmlLink: FllcConfigData.fllcExaLink
      },
      query: {
        querySelector: ".fllc-e",
        queryType: "all"
      }
    },
    {
      elementId: "fllcPetaText",
      generate: {
        htmlTag: "div",
        htmlClass: "fllc-p-text",
        htmlText: FllcConfigData.fllcPetaText
      },
      query: {
        querySelector: ".fllc-p-text",
        queryType: "all"
      }
    }
  ];
  static fllcFoGroup = [
    {
      elementId: "fllcYottaFo",
      generate: {
        htmlTag: "div",
        htmlClass: "fllc-y-fo"
      },
      query: {
        querySelector: ".fllc-y-fo",
        queryType: "single"
      }
    },
    {
      elementId: "fllcZettaFo",
      generate: {
        htmlTag: "a",
        htmlClass: "fllc-z-fo",
        htmlLink: FllcConfigData.fllcZettaFoLink
      },
      query: {
        querySelector: ".fllc-z-fo",
        queryType: "single"
      }
    },
    {
      elementId: "fllcExaFoTaIcon",
      generate: {
        htmlTag: "div",
        htmlClass: "fllc-e-fo-ta-icon fllc-e-fo"
      },
      query: {
        querySelector: ".fllc-e-fo-ta-icon",
        queryType: "single"
      }
    },
    {
      elementId: "fllcExaFoLogo",
      generate: {
        htmlTag: "div",
        htmlClass: "fllc-e-fo-logo fllc-e-fo"
      },
      query: {
        querySelector: ".fllc-e-fo-logo",
        queryType: "single"
      }
    }
  ];
  static fllcToGroup = [
    {
      elementId: "fllcYottaTo",
      generate: {
        htmlTag: "div",
        htmlClass: "fllc-y-to"
      },
      query: {
        querySelector: ".fllc-y-to",
        queryType: "single"
      }
    },
    /* {
      elementId: "fllcZettaToSince",
      generate: {
        htmlTag: "div",
        htmlClass: "fllc-z-to-since fllc-z-to",
        htmlText: FllcConfigData.fllcZettaToSinceText
      },
      query: {
        querySelector: ".fllc-z-to-copyright",
        queryType: "single"
      }
    }, */
    {
      elementId: "fllcZettaToCopyright",
      generate: {
        htmlTag: "div",
        htmlClass: "fllc-z-to-copyright fllc-z-to",
        htmlText: FllcConfigData.fllcZettaToCopyrightText
      },
      query: {
        querySelector: ".fllc-z-to-copyright",
        queryType: "single"
      }
    }
  ];
}
class FllcConfigGet {
  static getFllcRoot() {
    const getGroup = BodyUtil.getElementCache(
      FllcConfig.fllcConfigCache,
      FllcConfigElement.fllcRoot
    );
    return getGroup;
  }
  static getFllcGroup() {
    const {
      fllcR
    } = FllcConfigGet.getFllcRoot();
    const getGroup = BodyUtil.getElementCache(
      FllcConfig.fllcConfigCache,
      FllcConfigElement.fllcGroup,
      fllcR
    );
    return getGroup;
  }
  static getFllcYbGroup() {
    const {
      fllcR
    } = FllcConfigGet.getFllcRoot();
    const getGroup = BodyUtil.getElementCache(
      FllcConfig.fllcConfigCache,
      FllcConfigElement.fllcYbGroup,
      fllcR
    );
    return getGroup;
  }
  static getFllcFoGroup() {
    const {
      fllcR
    } = FllcConfigGet.getFllcRoot();
    const getGroup = BodyUtil.getElementCache(
      FllcConfig.fllcConfigCache,
      FllcConfigElement.fllcFoGroup,
      fllcR
    );
    return getGroup;
  }
  static getFllcToGroup() {
    const {
      fllcR
    } = FllcConfigGet.getFllcRoot();
    const getGroup = BodyUtil.getElementCache(
      FllcConfig.fllcConfigCache,
      FllcConfigElement.fllcToGroup,
      fllcR
    );
    return getGroup;
  }
}
class FllcConfigManager {
  static fllcGenerate() {
    const {
      fllcR
    } = FllcConfigGet.getFllcRoot();
    const fllcFragment = document.createDocumentFragment();
    let tempGenerateElement = null;
    let tempSaveElement = {};
    /* ==========----- :FllcGroup: -----========== */
    for (let cei = 0; cei < FllcConfigElement.fllcGroup.length; cei++) {
      tempGenerateElement = BodyUtil.getGenerateElement(
        FllcConfigElement.fllcGroup[cei]
      );
      tempSaveElement[FllcConfigElement.fllcGroup[cei].elementId] = tempGenerateElement;
    }
    /* ==========----- ;FllcGroup; -----========== */
    /* ==========----- :FllcYbGroup: -----========== */
    for (let cdi = 0; cdi < FllcConfigData.fllcExaLink.length; cdi++) {
      for (let cei = 0; cei < FllcConfigElement.fllcYbGroup.length; cei++) {
        tempGenerateElement = BodyUtil.getGenerateElement(
          FllcConfigElement.fllcYbGroup[cei],
          [cdi]
        );
        tempSaveElement[FllcConfigElement.fllcYbGroup[cei].elementId] = tempGenerateElement;
      }
      FllcConfigManager.fllcYbGroupAppend(tempSaveElement);
    }
    /* ==========----- ;FllcYbGroup; -----========== */
    /* ==========----- :FllcFoGroup: -----========== */
    for (let cei = 0; cei < FllcConfigElement.fllcFoGroup.length; cei++) {
      tempGenerateElement = BodyUtil.getGenerateElement(
        FllcConfigElement.fllcFoGroup[cei]
      );
      tempSaveElement[FllcConfigElement.fllcFoGroup[cei].elementId] = tempGenerateElement;
    }
    /* ==========----- ;FllcFoGroup; -----========== */
    /* ==========----- :FllcToGroup: -----========== */
    for (let cei = 0; cei < FllcConfigElement.fllcToGroup.length; cei++) {
      tempGenerateElement = BodyUtil.getGenerateElement(
        FllcConfigElement.fllcToGroup[cei]
      );
      tempSaveElement[FllcConfigElement.fllcToGroup[cei].elementId] = tempGenerateElement;
    }
    /* ==========----- ;FllcToGroup; -----========== */
    FllcConfigManager.fllcFoGroupAppend(tempSaveElement);
    FllcConfigManager.fllcToGroupAppend(tempSaveElement);
    FllcConfigManager.fllcFragmentAppend(tempSaveElement, fllcFragment);
    fllcR.append(fllcFragment);
    /* CDI(cdi) = ConfigDataIndex, CEI(cei) = ConfigElementIndex */
  }
  static fllcFragmentAppend(getSaveElement, fllcFragment) {
    fllcFragment.append(
      getSaveElement["fllcY"],
      getSaveElement["fllcYottaFo"],
      getSaveElement["fllcYottaTo"]
    );
  }
  static fllcYbGroupAppend(getSaveElement) {
    getSaveElement["fllcE"].append(
      getSaveElement["fllcPetaText"]
    );
    getSaveElement["fllcZ"].append(
      getSaveElement["fllcE"]
    );
    getSaveElement["fllcY"].append(
      getSaveElement["fllcZ"]
    );
  }
  static fllcFoGroupAppend(getSaveElement) {
    getSaveElement["fllcZettaFo"].append(
      getSaveElement["fllcExaFoTaIcon"],
      getSaveElement["fllcExaFoLogo"]
    );
    getSaveElement["fllcYottaFo"].append(
      getSaveElement["fllcZettaFo"]
    );
  }
  static fllcToGroupAppend(getSaveElement) {
    getSaveElement["fllcYottaTo"].append(
      /* getSaveElement["fllcZettaToSince"], */
      getSaveElement["fllcZettaToCopyright"]
    );
  }
}
class FllcConfig {
  static fllcConfigCache = {};
  /* -------------------------------------------------- */
  static fllcGenerate() {
    FllcConfigManager.fllcGenerate();
  }
  /* -------------------------------------------------- */
  static getFllcRoot() {
    return FllcConfigGet.getFllcRoot();
  }
  static getFllcGroup() {
    return FllcConfigGet.getFllcGroup();
  }
  static getFllcYbGroup() {
    return FllcConfigGet.getFllcYbGroup();
  }
  static getFllcFoGroup() {
    return FllcConfigGet.getFllcFoGroup();
  }
  static getFllcToGroup() {
    return FllcConfigGet.getFllcToGroup();
  }
}
export {
  FllcConfig
};
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */