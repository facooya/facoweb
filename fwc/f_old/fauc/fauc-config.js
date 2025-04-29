/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  BodyUtil
} from "../../fwc-hub.js";
/*  */
class FaucConfigData {
  static faucYottaText = "About Us";
  static faucPetaText = [
    "Contact Us",
    "Our Team",
    "Our Work"
  ];
  static faucExaLink = [
    "#",
    "#",
    "#"
  ];
}
class FaucConfigElement {
  static faucRoot = [
    {
      elementId: "faucR",
      generate: {
        htmlTag: "nav",
        htmlClass: "fauc-r"
      },
      query: {
        querySelector: ".blf-y-fo .fauc-r",
        queryType: "single"
      }
    }
  ];
  static faucGroup = [
    {
      elementId: "faucY",
      generate: {
        htmlTag: "ul",
        htmlClass: "fauc-y"
      },
      query: {
        querySelector: ".fauc-y",
        queryType: "single"
      }
    },
    {
      elementId: "faucYottaText",
      generate: {
        htmlTag: "h3",
        htmlClass: "fauc-y-text",
        htmlText: FaucConfigData.faucYottaText
      },
      query: {
        querySelector: ".fauc-y-text",
        queryType: "single"
      }
    }
  ];
  static faucYbGroup = [
    {
      elementId: "faucZ",
      generate: {
        htmlTag: "li",
        htmlClass: "fauc-z"
      },
      query: {
        querySelector: ".fauc-z",
        queryType: "all"
      }
    },
    {
      elementId: "faucE",
      generate: {
        htmlTag: "a",
        htmlClass: "fauc-e",
        htmlLink: FaucConfigData.faucExaLink
      },
      query: {
        querySelector: ".fauc-e",
        queryType: "all"
      }
    },
    {
      elementId: "faucPetaText",
      generate: {
        htmlTag: "span",
        htmlClass: "fauc-p-text",
        htmlText: FaucConfigData.faucPetaText
      },
      query: {
        querySelector: ".fauc-p-text",
        queryType: "all"
      }
    }
  ];
}
class FaucConfigGet {
  static getFaucRoot() {
    const getGroup = BodyUtil.getElementCache(
      FaucConfig.faucConfigCache,
      FaucConfigElement.faucRoot
    );
    return getGroup;
  }
  static getFaucGroup() {
    const {
      faucR
    } = FaucConfigGet.getFaucRoot();
    const getGroup = BodyUtil.getElementCache(
      FaucConfig.faucConfigCache,
      FaucConfigElement.faucGroup,
      faucR
    );
    return getGroup;
  }
  static getFaucYbGroup() {
    const {
      faucR
    } = FaucConfigGet.getFaucRoot();
    const getGroup = BodyUtil.getElementCache(
      FaucConfig.faucConfigCache,
      FaucConfigElement.faucYbGroup,
      faucR
    );
    return getGroup;
  }
}
class FaucConfigManager {
  static faucGenerate() {
    const {
      faucR
    } = FaucConfigGet.getFaucRoot();
    const faucFragment = document.createDocumentFragment();
    let tempGenerateElement = null;
    let tempSaveElement = {};
    /* ==========----- :FaucGroup: -----========== */
    for (let gi = 0; gi < FaucConfigElement.faucGroup.length; gi++) {
      tempGenerateElement = BodyUtil.getGenerateElement(
        FaucConfigElement.faucGroup[gi]
      );
      tempSaveElement[FaucConfigElement.faucGroup[gi].elementId] = tempGenerateElement;
    }
    /* ==========----- ;FaucGroup; -----========== */
    /* ==========----- :FaucYbGroup: -----========== */
    for (let gli = 0; gli < FaucConfigData.faucExaLink.length; gli++) {
      for (let ygi = 0; ygi < FaucConfigElement.faucYbGroup.length; ygi++) {
        tempGenerateElement = BodyUtil.getGenerateElement(
          FaucConfigElement.faucYbGroup[ygi],
          [gli]
        );
        tempSaveElement[FaucConfigElement.faucYbGroup[ygi].elementId] = tempGenerateElement;
      }
      FaucConfigManager.faucYbGroupAppend(tempSaveElement);
    }
    /* ==========----- ;FaucYbGroup; -----========== */
    FaucConfigManager.faucFragmentAppend(tempSaveElement, faucFragment);
    faucR.append(faucFragment);
  }
  static faucFragmentAppend(getSaveElement, faucFragment) {
    faucFragment.append(
      getSaveElement["faucYottaText"],
      getSaveElement["faucY"]
    );
  }
  static faucYbGroupAppend(getSaveElement) {
    getSaveElement["faucE"].append(
      getSaveElement["faucPetaText"]
    );
    getSaveElement["faucZ"].append(
      getSaveElement["faucE"]
    );
    getSaveElement["faucY"].append(
      getSaveElement["faucZ"]
    );
  }
}
class FaucConfig {
  static faucConfigCache = {};
  /* -------------------------------------------------- */
  static faucGenerate() {
    FaucConfigManager.faucGenerate();
  }
  /* -------------------------------------------------- */
  static getFaucRoot() {
    return FaucConfigGet.getFaucRoot();
  }
  static getFaucGroup() {
    return FaucConfigGet.getFaucGroup();
  }
  static getFaucYbGroup() {
    return FaucConfigGet.getFaucYbGroup();
  }
}
export {
  FaucConfig
};
/* =============== :FACOOYA: =============== */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* =============== ;FACOOYA; =============== */