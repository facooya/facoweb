/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  BlfUtil
} from "../../fwc-hub.js";
/*  */
class FoscConfigData {
  static foscYottaText = "Our Services";
  static foscPetaText = [
    "a.facooya.com",
    "b.facooya.com",
    "c.facooya.com"
  ];
  static foscExaLink = [
    "#a.facooya.com",
    "#b.facooya.com",
    "#c.facooya.com"
  ];
}
class FoscConfigElement {
  static foscRoot = [
    {
      elementId: "foscR",
      generate: {
        htmlTag: "nav",
        htmlClass: "fosc-r"
      },
      query: {
        querySelector: ".blf-y-fo .fosc-r",
        queryType: "single"
      }
    }
  ];
  static foscGroup = [
    {
      elementId: "foscY",
      generate: {
        htmlTag: "ul",
        htmlClass: "fosc-y"
      },
      query: {
        querySelector: ".fosc-y",
        queryType: "single"
      }
    },
    {
      elementId: "foscYottaText",
      generate: {
        htmlTag: "h3",
        htmlClass: "fosc-y-text",
        htmlText: FoscConfigData.foscYottaText
      },
      query: {
        querySelector: ".fosc-y-text",
        queryType: "single"
      }
    }
  ];
  static foscYbGroup = [
    {
      elementId: "foscZ",
      generate: {
        htmlTag: "li",
        htmlClass: "fosc-z"
      },
      query: {
        querySelector: ".fosc-z",
        queryType: "all"
      }
    },
    {
      elementId: "foscE",
      generate: {
        htmlTag: "a",
        htmlClass: "fosc-e",
        htmlLink: FoscConfigData.foscExaLink
      },
      query: {
        querySelector: ".fosc-e",
        queryType: "all"
      }
    },
    {
      elementId: "foscPetaText",
      generate: {
        htmlTag: "span",
        htmlClass: "fosc-p-text",
        htmlText: FoscConfigData.foscPetaText
      },
      query: {
        querySelector: ".fosc-p-text",
        queryType: "all"
      }
    }
  ];
}
class FoscConfigGet {
  static getFoscRoot() {
    const getGroup = BlfUtil.getElementCache(
      FoscConfig.foscConfigCache,
      FoscConfigElement.foscRoot
    );
    return getGroup;
  }
  static getFoscGroup() {
    const {
      foscR
    } = FoscConfigGet.getFoscRoot();
    const getGroup = BlfUtil.getElementCache(
      FoscConfig.foscConfigCache,
      FoscConfigElement.foscGroup,
      foscR
    );
    return getGroup;
  }
  static getFoscYbGroup() {
    const {
      foscR
    } = FoscConfigGet.getFoscRoot();
    const getGroup = BlfUtil.getElementCache(
      FoscConfig.foscConfigCache,
      FoscConfigElement.foscYbGroup,
      foscR
    );
    return getGroup;
  }
}
class FoscConfigManager {
  static foscGenerate() {
    const {
      foscR
    } = FoscConfigGet.getFoscRoot();
    const foscFragment = document.createDocumentFragment();
    let tempGenerateElement = null;
    let tempSaveElement = {};
    /* ==========----- :FoscGroup: -----========== */
    for (let gi = 0; gi < FoscConfigElement.foscGroup.length; gi++) {
      tempGenerateElement = BlfUtil.getGenerateElement(
        FoscConfigElement.foscGroup[gi]
      );
      tempSaveElement[FoscConfigElement.foscGroup[gi].elementId] = tempGenerateElement;
    }
    /* ==========----- ;FoscGroup; -----========== */
    /* ==========----- :FoscYbGroup: -----========== */
    for (let gi = 0; gi < FoscConfigData.foscExaLink.length; gi++) {
      for (let ygi = 0; ygi < FoscConfigElement.foscYbGroup.length; ygi++) {
        tempGenerateElement = BlfUtil.getGenerateElement(
          FoscConfigElement.foscYbGroup[ygi],
          [gi]
        );
        tempSaveElement[FoscConfigElement.foscYbGroup[ygi].elementId] = tempGenerateElement;
      }
      FoscConfigManager.foscYbGroupAppend(tempSaveElement);
    }
    /* ==========----- ;FoscYbGroup; -----========== */
    FoscConfigManager.foscFragmentAppend(tempSaveElement, foscFragment);
    foscR.append(foscFragment);
  }
  static foscFragmentAppend(getSaveElement, foscFragment) {
    foscFragment.append(
      getSaveElement["foscYottaText"],
      getSaveElement["foscY"]
    );
  }
  static foscYbGroupAppend(getSaveElement) {
    getSaveElement["foscE"].append(
      getSaveElement["foscPetaText"]
    );
    getSaveElement["foscZ"].append(
      getSaveElement["foscE"]
    );
    getSaveElement["foscY"].append(
      getSaveElement["foscZ"]
    );
  }
}
class FoscConfig {
  static foscConfigCache = {};
  /* -------------------------------------------------- */
  static foscGenerate() {
    FoscConfigManager.foscGenerate();
  }
  /* -------------------------------------------------- */
  static getFoscRoot() {
    return FoscConfigGet.getFoscRoot();
  }
  static getFoscGroup() {
    return FoscConfigGet.getFoscGroup();
  }
  static getFoscYbGroup() {
    return FoscConfigGet.getFoscYbGroup();
  }
}
export {
  FoscConfig
};
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */