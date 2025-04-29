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
  static fascYottaText = "dev.facooya.com is a programming-related site. \
    We provide information promptly. \
    We believe our services will assist in launching humanity to space.";
  /*  */
  static fascZettaFoLink = "/";
  static fascExaSmoALink = "#facooya";
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
  static fascGroup = [
    {
      elementId: "fascYottaText",
      generate: {
        htmlTag: "p",
        htmlClass: "fasc-y-text",
        htmlText: FascConfigData.fascYottaText
      },
      query: {
        querySelector: ".fasc-y-text",
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
        htmlTag: "div",
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
        htmlTag: "div",
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
        htmlTag: "div",
        htmlClass: "fasc-e-fo-icon fasc-e-fo"
      },
      query: {
        querySelector: ".fasc-e-fo-icon",
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
        htmlClass: "fasc-z-smo-a"
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
        htmlClass: "fasc-z-smo-b"
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
        htmlClass: "fasc-z-smo-c"
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
  static getFascGroup() {
    const {
      fascR
    } = FascConfigGet.getFascRoot();
    const getGroup = BlfUtil.getElementCache(
      FascConfig.fascConfigCache,
      FascConfigElement.fascGroup,
      fascR
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
    /* ==========----- :FascGroup: -----========== */
    for (let gi = 0; gi < FascConfigElement.fascGroup.length; gi++) {
      tempGenerateElement = BlfUtil.getGenerateElement(
        FascConfigElement.fascGroup[gi]
      );
      tempSaveElement[FascConfigElement.fascGroup[gi].elementId] = tempGenerateElement;
    }
    /* ==========----- ;FascGroup; -----========== */
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
    FascConfigManager.fascSmoAppend(tempSaveElement);
    FascConfigManager.fascFragmentAppend(tempSaveElement, fascFragment);
    fascR.append(fascFragment);
  }
  static fascFragmentAppend(getSaveElement, fascFragment) {
    fascFragment.append(
      getSaveElement["fascYottaFo"],
      getSaveElement["fascYottaSmo"],
      getSaveElement["fascYottaText"]
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
  static getFascGroup() {
    return FascConfigGet.getFascGroup();
  }
  static getFascFoGroup() {
    return FascConfigGet.getFascFoGroup();
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