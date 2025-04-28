/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  FwcAccessor
} from "../../fwc-hub.js";
/*  */
class HsncConfigData {
  /* ===== exaTloText ===== */
  static hsncExaTloText = [
    "Tab 1 long long long long long long long long long long long long long long",
    "Tab 2",
    "Tab 3"
  ];
  /* ===== gigaBloText ===== */
  static hsncGigaBloTextYs = [
    "item 1-1 long long long long long long long long long long",
    "Item 1-2",
    "Item 1-3",
    "Item 1-4",
    "Item 1-5",
    "Item 1-6",
    "Item 1-7",
    "Item 1-8",
    "Item 1-9",
    "Item 1-10",
    "Item 1-11",
  ];
  static hsncGigaBloTextZs = [
    "Item 2-1",
    "Item 2-2"
  ];
  static hsncGigaBloTextEs = [
    "Item 3-1",
    "Item 3-2",
    "Item 3-3"
  ];
  /* ===== TeraBloLink ===== */
  static hsncTeraBloLinkYs = [
    "./doc-page.html",
    "./doc-page.html",
    "./doc-page.html",
    "./doc-page.html",
    "./doc-page.html",
    "./doc-page.html",
    "./doc-page.html",
    "./doc-page.html",
    "./doc-page.html",
    "./doc-page.html",
    "./doc-page.html"
  ];
  static hsncTeraBloLinkZs = [
    "./doc-page.html",
    "./doc-page.html"
  ];
  static hsncTeraBloLinkEs = [
    "./doc-page.html",
    "./doc-page.html",
    "./doc-page.html"
  ];
  /* ===== Compile ===== */
  static hsncGigaBloText = [
    HsncConfigData.hsncGigaBloTextYs,
    HsncConfigData.hsncGigaBloTextZs,
    HsncConfigData.hsncGigaBloTextEs
  ];
  static hsncTeraBloLink = [
    HsncConfigData.hsncTeraBloLinkYs,
    HsncConfigData.hsncTeraBloLinkZs,
    HsncConfigData.hsncTeraBloLinkEs
  ];
}
class HsncConfigElement {
  static hsncRoot = [
    {
      elementId: "hsncR",
      generate: {
        htmlTag: "nav",
        htmlClass: "hsnc-r"
      },
      query: {
        querySelector: ".blf-y-ho .hsnc-r",
        queryType: "single"
      }
    }
  ];
  static hsncGroup = [
    {
      elementId: "hsncY",
      generate: {
        htmlTag: "ul",
        htmlClass: "hsnc-y"
      },
      query: {
        querySelector: ".hsnc-y",
        queryType: "all"
      }
    }
  ];
  static hsncTloGroup = [
    {
      elementId: "hsncZettaTlo",
      generate: {
        htmlTag: "li",
        htmlClass: "hsnc-z-tlo"
      },
      query: {
        querySelector: ".hsnc-z-tlo",
        queryType: "all"
      }
    },
    {
      elementId: "hsncExaTloText",
      generate: {
        htmlTag: "div",
        htmlClass: "hsnc-e-tlo-text",
        htmlText: HsncConfigData.hsncExaTloText
      },
      query: {
        querySelector: ".hsnc-e-tlo-text",
        queryType: "all"
      }
    },
    {
      elementId: "hsncExaTloRgro",
      generate: {
        htmlTag: "div",
        htmlClass: "hsnc-e-tlo-rgro"
      },
      query: {
        querySelector: ".hsnc-e-tlo-rgro",
        queryType: "all"
      }
    },
    {
      elementId: "hsncExaTloBgro",
      generate: {
        htmlTag: "div",
        htmlClass: "hsnc-e-tlo-bgro"
      },
      query: {
        querySelector: ".hsnc-e-tlo-bgro",
        queryType: "all"
      }
    }
  ];
  static hsncBloGroup = [
    {
      elementId: "hsncZettaBlo",
      generate: {
        htmlTag: "li",
        htmlClass: "hsnc-z-blo"
      },
      query: {
        querySelector: ".hsnc-z-blo",
        queryType: "all"
      }
    },
    {
      elementId: "hsncExaBlo",
      generate: {
        htmlTag: "ul",
        htmlClass: "hsnc-e-blo"
      },
      query: {
        querySelector: ".hsnc-e-blo",
        queryType: "all"
      }
    }
  ];
  static hsncBloEbGroup = [
    {
      elementId: "hsncPetaBlo",
      generate: {
        htmlTag: "li",
        htmlClass: "hsnc-p-blo"
      },
      query: {
        querySelector: ".hsnc-p-blo",
        queryType: "all"
      }
    },
    {
      elementId: "hsncTeraBlo",
      generate: {
        htmlTag: "a",
        htmlClass: "hsnc-t-blo",
        htmlLink: HsncConfigData.hsncTeraBloLink
      },
      query: {
        querySelector: ".hsnc-t-blo",
        queryType: "all"
      }
    },
    {
      elementId: "hsncGigaBloText",
      generate: {
        htmlTag: "div",
        htmlClass: "hsnc-g-blo-text",
        htmlText: HsncConfigData.hsncGigaBloText
      },
      query: {
        querySelector: ".hsnc-g-blo-text",
        queryType: "all"
      }
    },
    {
      elementId: "hsncGigaBloRgro",
      generate: {
        htmlTag: "div",
        htmlClass: "hsnc-g-blo-rgro"
      },
      query: {
        querySelector: ".hsnc-g-blo-rgro",
        queryType: "all"
      }
    },
    {
      elementId: "hsncGigaBloBgro",
      generate: {
        htmlTag: "div",
        htmlClass: "hsnc-g-blo-bgro"
      },
      query: {
        querySelector: ".hsnc-g-blo-bgro",
        queryType: "all"
      }
    }
  ];
  static hsncYottaGroup = [
    {
      elementId: "hsncYottaSdo",
      generate: {
        htmlTag: "div",
        htmlClass: "hsnc-y-sdo"
      },
      query: {
        querySelector: ".hsnc-y-sdo",
        queryType: "single"
      }
    },
    {
      elementId: "hsncYottaSfroTo",
      generate: {
        htmlTag: "div",
        htmlClass: "hsnc-y-sfro hsnc-y-sfro-to"
      },
      query: {
        querySelector: ".hsnc-y-sfro-to",
        queryType: "single"
      }
    },
    {
      elementId: "hsncYottaSfroBo",
      generate: {
        htmlTag: "div",
        htmlClass: "hsnc-y-sfro hsnc-y-sfro-bo"
      },
      query: {
        querySelector: ".hsnc-y-sfro-bo",
        queryType: "single"
      }
    }
  ];
}
class HsncConfigManager {
  static hsncGenerate() {
    const {
      hsncR
    } = HsncConfigGet.getHsncRoot();
    const hsncFragment = document.createDocumentFragment();
    let tempGenerateElement = null;
    let tempSaveElement = {};
    /* =============== :Ys, Tlo, Zs Group: =============== */
    for (let ysi = 0; ysi < HsncConfigData.hsncExaTloText.length; ysi++) {
      /* ==========----- :Hsnc Group: -----========== */
      for (let zsi = 0; zsi < HsncConfigElement.hsncGroup.length; zsi++) {
        tempGenerateElement = FwcAccessor.getGenerateElement2(
          HsncConfigElement.hsncGroup[zsi]
        );
        tempSaveElement[HsncConfigElement.hsncGroup[zsi].elementId] = tempGenerateElement;
      }
      /* ==========----- ;Hsnc Group; -----========== */
      /* ==========----- :Tlo Group: -----========== */
      for (let zsi = 0; zsi < HsncConfigElement.hsncTloGroup.length; zsi++) {
        tempGenerateElement = FwcAccessor.getGenerateElement2(
          HsncConfigElement.hsncTloGroup[zsi],
          [ysi]
        );
        tempSaveElement[HsncConfigElement.hsncTloGroup[zsi].elementId] = tempGenerateElement;
      }
      /* ==========----- ;Tlo Group; -----========== */
      /* ==========----- :Blo Group: -----========== */
      for (let zsi = 0; zsi < HsncConfigElement.hsncBloGroup.length; zsi++) {
        tempGenerateElement = FwcAccessor.getGenerateElement2(
          HsncConfigElement.hsncBloGroup[zsi]
        );
        tempSaveElement[HsncConfigElement.hsncBloGroup[zsi].elementId] = tempGenerateElement;
      }
      /* ==========----- ;Blo Group; -----========== */
      /* ==========----- :Blo Eb Group: -----========== */
      for (let zsi = 0; zsi < HsncConfigData.hsncGigaBloText[ysi].length; zsi++) {
        for (let esi = 0; esi < HsncConfigElement.hsncBloEbGroup.length; esi++) {
          tempGenerateElement = FwcAccessor.getGenerateElement2(
            HsncConfigElement.hsncBloEbGroup[esi],
            [ysi, zsi]
          );
          tempSaveElement[HsncConfigElement.hsncBloEbGroup[esi].elementId] = tempGenerateElement;
        }
        /* HsncSet.setAppendBloEbGroup(tempSaveElement); */
        HsncConfigManager.hsncBloEbGroupAppend(tempSaveElement);
      }
      /* ==========----- ;Blo Eb Group; -----========== */
      HsncConfigManager.hsncTloGroupAppend(tempSaveElement);
      HsncConfigManager.hsncBloGroupAppend(tempSaveElement);
      HsncConfigManager.hsncGroupAppend(tempSaveElement);
      hsncFragment.append(tempSaveElement["hsncY"]);
      tempSaveElement = {};
    }
    /* =============== ;Ys, Tlo, Zs Group; =============== */
    /* =============== :Yotta Group: =============== */
    for (let ysi = 0; ysi < HsncConfigElement.hsncYottaGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement2(
        HsncConfigElement.hsncYottaGroup[ysi]
      );
      tempSaveElement[HsncConfigElement.hsncYottaGroup[ysi].elementId] = tempGenerateElement;
    }
    HsncConfigManager.hsncYottaGroupAppend(tempSaveElement, hsncFragment);
    /* =============== ;Yotta Group; =============== */
    hsncR.append(hsncFragment);
  }
  /* -------------------------------------------------- */
  static hsncGroupAppend(getSaveElement) {
    getSaveElement["hsncY"].append(
      getSaveElement["hsncZettaTlo"],
      getSaveElement["hsncZettaBlo"]
    );
  }
  static hsncTloGroupAppend(getSaveElement) {
    getSaveElement["hsncZettaTlo"].append(
      getSaveElement["hsncExaTloText"],
      getSaveElement["hsncExaTloRgro"],
      getSaveElement["hsncExaTloBgro"]
    );
  }
  static hsncBloGroupAppend(getSaveElement) {
    getSaveElement["hsncZettaBlo"].append(getSaveElement["hsncExaBlo"]);
  }
  static hsncBloEbGroupAppend(getSaveElement) {
    getSaveElement["hsncTeraBlo"].append(
      getSaveElement["hsncGigaBloText"],
      getSaveElement["hsncGigaBloRgro"],
      getSaveElement["hsncGigaBloBgro"]
    );
    getSaveElement["hsncPetaBlo"].append(getSaveElement["hsncTeraBlo"]);
    getSaveElement["hsncExaBlo"].append(getSaveElement["hsncPetaBlo"]);
  }
  static hsncYottaGroupAppend(getSaveElement, hsncFragment) {
    hsncFragment.append(
      getSaveElement["hsncYottaSdo"],
      getSaveElement["hsncYottaSfroTo"],
      getSaveElement["hsncYottaSfroBo"]
    );
  }
}
class HsncConfigGet {
  static getHsncRoot() {
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HsncConfig.hsncConfigCache,
      HsncConfigElement.hsncRoot
    );
    return saveVerifyGroup;
  }
  static getHsncGroup() {
    const {
      hsncR
    } = HsncConfigGet.getHsncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HsncConfig.hsncConfigCache,
      HsncConfigElement.hsncGroup,
      hsncR
    );
    return saveVerifyGroup;
  }
  static getHsncYottaGroup() {
    const {
      hsncR
    } = HsncConfigGet.getHsncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HsncConfig.hsncConfigCache,
      HsncConfigElement.hsncYottaGroup,
      hsncR
    );
    return saveVerifyGroup;
  }
  static getHsncTloGroup() {
    const {
      hsncR
    } = HsncConfigGet.getHsncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HsncConfig.hsncConfigCache,
      HsncConfigElement.hsncTloGroup,
      hsncR
    );
    return saveVerifyGroup;
  }
  static getHsncBloGroup() {
    const {
      hsncR
    } = HsncConfigGet.getHsncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HsncConfig.hsncConfigCache,
      HsncConfigElement.hsncBloGroup,
      hsncR
    );
    return saveVerifyGroup;
  }
  static getHsncBloEbGroup(ybIndex) {
    const {
      hsncExaBlo
    } = HsncConfigGet.getHsncBloGroup();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HsncConfig.hsncConfigCache,
      HsncConfigElement.hsncBloEbGroup,
      hsncExaBlo[ybIndex],
      ybIndex
    );
    return saveVerifyGroup;
  }
}
class HsncConfig {
  static hsncConfigCache = {};
  /* -------------------------------------------------- */
  static hsncGenerate() {
    HsncConfigManager.hsncGenerate();
  }
  /* -------------------------------------------------- */
  static getHsncRoot() {
    return HsncConfigGet.getHsncRoot();
  }
  static getHsncGroup() {
    return HsncConfigGet.getHsncGroup();
  }
  static getHsncYottaGroup() {
    return HsncConfigGet.getHsncYottaGroup();
  }
  static getHsncTloGroup() {
    return HsncConfigGet.getHsncTloGroup();
  }
  static getHsncBloGroup() {
    return HsncConfigGet.getHsncBloGroup();
  }
  static getHsncBloEbGroup(ybIndex) {
    return HsncConfigGet.getHsncBloEbGroup(ybIndex);
  }
}
export {
  HsncConfig
};
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */