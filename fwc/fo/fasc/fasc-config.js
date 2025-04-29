/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  BlfUtil
} from "../../fwc-hub.js";
/*  */
class FascConfigData {
  static fascZettaToHeaderText = "Welcome to ";
  static fascZettaToDevLink = "#dev.facooya.com";
  static fascZettaToDevText = "dev.facooya.com";
  static fascZettaToMainText = ", a programming-related site. \
    This site provides information promptly. \
    We believe our services will assist in launching humanity to space.";
  /*  */
  static fascZettaFoLink = "#dev.facooya.com";
  static fascExaSmoALink = "#acooya";
  static fascExaSmoBLink = "#facooya";
  static fascExaSmoCLink = "#facooya";
  /*  */
  static fascExaSmoLinkTarget = "_blank";
}
class FascConfigElement {
  static fascRoot = [
    {
      elementId: "fascR",
      generate: {
        htmlTag: "nav",
        htmlClass: "fasc-r"
      },
      query: {
        querySelector: ".blf-y-fo .fasc-r",
        queryType: "single"
      }
    }
  ];
  static fascFoGroup = [
    {
      elementId: "fascYottaFo",
      generate: {
        htmlTag: "div",
        htmlClass: "fasc-y-fo"
      },
      query: {
        querySelector: ".fasc-y-fo",
        queryType: "single"
      }
    },
    {
      elementId: "fascZettaFo",
      generate: {
        htmlTag: "a",
        htmlClass: "fasc-z-fo",
        htmlLink: FascConfigData.fascZettaFoLink
      },
      query: {
        querySelector: ".fasc-z-fo",
        queryType: "single"
      }
    },
    {
      elementId: "fascExaFoDevLogo",
      generate: {
        htmlTag: "span",
        htmlClass: "fasc-e-fo-dev-logo fasc-e-fo"
      },
      query: {
        querySelector: ".fasc-e-fo-dev-logo",
        queryType: "single"
      }
    },
    {
      elementId: "fascExaFoTaIcon",
      generate: {
        htmlTag: "span",
        htmlClass: "fasc-e-fo-ta-icon fasc-e-fo"
      },
      query: {
        querySelector: ".fasc-e-fo-ta-icon",
        queryType: "single"
      }
    },
    {
      elementId: "fascExaFoIcon",
      generate: {
        htmlTag: "span",
        htmlClass: "fasc-e-fo-icon fasc-e-fo"
      },
      query: {
        querySelector: ".fasc-e-fo-icon",
        queryType: "single"
      }
    }
  ];
  static fascToGroup = [
    {
      elementId: "fascYottaTo",
      generate: {
        htmlTag: "p",
        htmlClass: "fasc-y-to"
      },
      query: {
        querySelector: ".fasc-y-to",
        queryType: "single"
      }
    },
    {
      elementId: "fascZettaToHeader",
      generate: {
        htmlTag: "span",
        htmlClass: "fasc-z-to-header fasc-z-to",
        htmlText: FascConfigData.fascZettaToHeaderText
      },
      query: {
        querySelector: ".fasc-z-to-header",
        queryType: "single"
      }
    },
    {
      elementId: "fascZettaToDev",
      generate: {
        htmlTag: "a",
        htmlClass: "fasc-z-to-dev fasc-z-to",
        htmlLink: FascConfigData.fascZettaToDevLink,
        htmlText: FascConfigData.fascZettaToDevText
      },
      query: {
        querySelector: ".fasc-z-to-dev",
        queryType: "single"
      }
    },
    {
      elementId: "fascZettaToMain",
      generate: {
        htmlTag: "span",
        htmlClass: "fasc-z-to-main fasc-z-to",
        htmlText: FascConfigData.fascZettaToMainText
      },
      query: {
        querySelector: ".fasc-z-to-main",
        queryType: "single"
      }
    }
  ];
  static fascSmoGroup = [
    {
      elementId: "fascYottaSmo",
      generate: {
        htmlTag: "ul",
        htmlClass: "fasc-y-smo"
      },
      query: {
        querySelector: ".fasc-y-smo",
        queryType: "single"
      }
    },
    {
      elementId: "fascZettaSmoA",
      generate: {
        htmlTag: "li",
        htmlClass: "fasc-z-smo-a fasc-z-smo"
      },
      query: {
        querySelector: ".fasc-z-smo-a",
        queryType: "single"
      }
    },
    {
      elementId: "fascExaSmoA",
      generate: {
        htmlTag: "a",
        htmlClass: "fasc-e-smo-a",
        htmlLink: FascConfigData.fascExaSmoALink,
        htmlTarget: FascConfigData.fascExaSmoLinkTarget
      },
      query: {
        querySelector: ".fasc-e-smo-a",
        queryType: "single"
      }
    },
    {
      elementId: "fascPetaSmoAIcon",
      generate: {
        htmlTag: "div",
        htmlClass: "fasc-p-smo-a-icon fasc-p-smo"
      },
      query: {
        querySelector: ".fasc-p-smo-a-icon",
        queryType: "single"
      }
    },
    {
      elementId: "fascZettaSmoB",
      generate: {
        htmlTag: "li",
        htmlClass: "fasc-z-smo-b fasc-z-smo"
      },
      query: {
        querySelector: ".fasc-z-smo-b",
        queryType: "single"
      }
    },
    {
      elementId: "fascExaSmoB",
      generate: {
        htmlTag: "a",
        htmlClass: "fasc-e-smo-b",
        htmlLink: FascConfigData.fascExaSmoBLink,
        htmlTarget: FascConfigData.fascExaSmoLinkTarget
      },
      query: {
        querySelector: ".fasc-e-smo-b",
        queryType: "single"
      }
    },
    {
      elementId: "fascPetaSmoBIcon",
      generate: {
        htmlTag: "div",
        htmlClass: "fasc-p-smo-b-icon fasc-p-smo"
      },
      query: {
        querySelector: ".fasc-p-smo-b-icon",
        queryType: "single"
      }
    },
    {
      elementId: "fascZettaSmoC",
      generate: {
        htmlTag: "li",
        htmlClass: "fasc-z-smo-c fasc-z-smo"
      },
      query: {
        querySelector: ".fasc-z-smo-c",
        queryType: "single"
      }
    },
    {
      elementId: "fascExaSmoC",
      generate: {
        htmlTag: "a",
        htmlClass: "fasc-e-smo-c",
        htmlLink: FascConfigData.fascExaSmoCLink,
        htmlTarget: FascConfigData.fascExaSmoLinkTarget
      },
      query: {
        querySelector: ".fasc-e-smo-c",
        queryType: "single"
      }
    },
    {
      elementId: "fascPetaSmoCIcon",
      generate: {
        htmlTag: "div",
        htmlClass: "fasc-p-smo-c-icon fasc-p-smo"
      },
      query: {
        querySelector: ".fasc-p-smo-c-icon",
        queryType: "single"
      }
    }
  ];
}
class FascConfigGet {
  static getFascRoot() {
    const getGroup = BlfUtil.getElementCache(
      FascConfig.fascConfigCache,
      FascConfigElement.fascRoot
    );
    return getGroup;
  }
  static getFascFoGroup() {
    const {
      fascR
    } = FascConfigGet.getFascRoot();
    const getGroup = BlfUtil.getElementCache(
      FascConfig.fascConfigCache,
      FascConfigElement.fascFoGroup,
      fascR
    );
    return getGroup;
  }
  static getFascToGroup() {
    const {
      fascR
    } = FascConfigGet.getFascRoot();
    const getGroup = BlfUtil.getElementCache(
      FascConfig.fascConfigCache,
      FascConfigElement.fascToGroup,
      fascR
    );
    return getGroup;
  }
  static getFascSmoGroup() {
    const {
      fascR
    } = FascConfigGet.getFascRoot();
    const getGroup = BlfUtil.getElementCache(
      FascConfig.fascConfigCache,
      FascConfigElement.fascSmoGroup,
      fascR
    );
    return getGroup;
  }
}
class FascConfigManager {
  static fascGenerate() {
    const {
      fascR
    } = FascConfigGet.getFascRoot();
    const fascFragment = document.createDocumentFragment();
    let tempGenerateElement = null;
    let tempSaveElement = {};
    /* ==========----- :FascToGroup: -----========== */
    for (let ei = 0; ei < FascConfigElement.fascToGroup.length; ei++) {
      tempGenerateElement = BlfUtil.getGenerateElement(
        FascConfigElement.fascToGroup[ei]
      );
      tempSaveElement[FascConfigElement.fascToGroup[ei].elementId] = tempGenerateElement;
    }
    /* ==========----- ;FascToGroup; -----========== */
    /* ==========----- :FascFoGroup: -----========== */
    for (let fgi = 0; fgi < FascConfigElement.fascFoGroup.length; fgi++) {
      tempGenerateElement = BlfUtil.getGenerateElement(
        FascConfigElement.fascFoGroup[fgi]
      );
      tempSaveElement[FascConfigElement.fascFoGroup[fgi].elementId] = tempGenerateElement;
    }
    /* ==========----- ;FascFoGroup; -----========== */
    /* ==========----- :FascSmoGroup: -----========== */
    for (let sgi = 0; sgi < FascConfigElement.fascSmoGroup.length; sgi++) {
      tempGenerateElement = BlfUtil.getGenerateElement(
        FascConfigElement.fascSmoGroup[sgi]
      );
      tempSaveElement[FascConfigElement.fascSmoGroup[sgi].elementId] = tempGenerateElement;
    }
    /* ==========----- ;FascSmoGroup; -----========== */
    FascConfigManager.fascFoAppend(tempSaveElement);
    FascConfigManager.fascToAppend(tempSaveElement);
    FascConfigManager.fascSmoAppend(tempSaveElement);
    FascConfigManager.fascFragmentAppend(tempSaveElement, fascFragment);
    fascR.append(fascFragment);
  }
  static fascFragmentAppend(getSaveElement, fascFragment) {
    fascFragment.append(
      getSaveElement["fascYottaFo"],
      getSaveElement["fascYottaTo"],
      getSaveElement["fascYottaSmo"]
    );
  }
  static fascFoAppend(getSaveElement) {
    getSaveElement["fascZettaFo"].append(
      getSaveElement["fascExaFoDevLogo"],
      getSaveElement["fascExaFoTaIcon"],
      getSaveElement["fascExaFoIcon"]
    );
    getSaveElement["fascYottaFo"].append(
      getSaveElement["fascZettaFo"]
    );
  }
  static fascToAppend(getSaveElement) {
    getSaveElement["fascYottaTo"].append(
      getSaveElement["fascZettaToHeader"],
      getSaveElement["fascZettaToDev"],
      getSaveElement["fascZettaToMain"]
    );
  }
  static fascSmoAppend(getSaveElement) {
    getSaveElement["fascExaSmoA"].append(
      getSaveElement["fascPetaSmoAIcon"]
    );
    getSaveElement["fascZettaSmoA"].append(
      getSaveElement["fascExaSmoA"]
    );
    getSaveElement["fascExaSmoB"].append(
      getSaveElement["fascPetaSmoBIcon"]
    );
    getSaveElement["fascZettaSmoB"].append(
      getSaveElement["fascExaSmoB"]
    );
    getSaveElement["fascExaSmoC"].append(
      getSaveElement["fascPetaSmoCIcon"]
    );
    getSaveElement["fascZettaSmoC"].append(
      getSaveElement["fascExaSmoC"]
    );
    getSaveElement["fascYottaSmo"].append(
      getSaveElement["fascZettaSmoA"],
      getSaveElement["fascZettaSmoB"],
      getSaveElement["fascZettaSmoC"]
    );
  }
}
class FascConfig {
  static fascConfigCache = {};
  /* -------------------------------------------------- */
  static fascGenerate() {
    FascConfigManager.fascGenerate();
  }
  /* -------------------------------------------------- */
  static getFascRoot() {
    return FascConfigGet.getFascRoot();
  }
  static getFascFoGroup() {
    return FascConfigGet.getFascFoGroup();
  }
  static getFascToGroup() {
    return FascConfigGet.getFascToGroup();
  }
  static getFascSmoGroup() {
    return FascConfigGet.getFascSmoGroup();
  }
}
export {
  FascConfig
};
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */