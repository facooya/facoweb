/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  BlfUtil
} from "../../fwc-hub.js";
/*  */
class HdncConfigData {
  /* ===== ExaTloText ===== */
  static hdncExaTloText = [
    "Menu 1",
    "Menu 2",
    "Menu 3",
    "Menu 4"
  ];
  /* ===== GigaBloText ===== */
  static hdncGigaBloTextMenu1 = [
    "Item 1-1"
  ];
  static hdncGigaBloTextMenu2 = [
    "Item 2-1",
    "Item 2-2"
  ];
  static hdncGigaBloTextMenu3 = [
    "Item 3-1",
    "Item 3-2",
    "Item 3-3"
  ];
  static hdncGigaBloTextMenu4 = [
    "Item 4-1",
    "Item 4-2"
  ];
  /* ===== TeraLink ===== */
  static hdncTeraBloLinkMenu1 = [
    "#item-1-1"
  ];
  static hdncTeraBloLinkMenu2 = [
    "#item-2-1",
    "#item-2-2"
  ];
  static hdncTeraBloLinkMenu3 = [
    "#item-3-1",
    "#item-3-2",
    "#item-3-3"
  ];
  static hdncTeraBloLinkMenu4 = [
    "#item-4-1",
    "#item-4-2"
  ];
  /* ===== Compile ===== */
  static hdncGigaBloText = [
    HdncConfigData.hdncGigaBloTextMenu1,
    HdncConfigData.hdncGigaBloTextMenu2,
    HdncConfigData.hdncGigaBloTextMenu3,
    HdncConfigData.hdncGigaBloTextMenu4
  ];
  static hdncTeraBloLink = [
    HdncConfigData.hdncTeraBloLinkMenu1,
    HdncConfigData.hdncTeraBloLinkMenu2,
    HdncConfigData.hdncTeraBloLinkMenu3,
    HdncConfigData.hdncTeraBloLinkMenu4
  ];
}
class HdncConfigElement {
  static hdncRoot = [
    {
      elementId: "hdncR",
      generate: {
        htmlTag: "nav",
        htmlClass: "hdnc-r"
      },
      query: {
        querySelector: ".blf-y-ho .hdnc-r",
        queryType: "single"
      }
    }
  ];
  static hdncGroup = [
    {
      elementId: "hdncY",
      generate: {
        htmlTag: "ul",
        htmlClass: "hdnc-y"
      },
      query: {
        querySelector: ".hdnc-y",
        queryType: "all"
      }
    }
  ];
  static hdncTloGroup = [
    {
      elementId: "hdncZettaTlo",
      generate: {
        htmlTag: "li",
        htmlClass: "hdnc-z-tlo"
      },
      query: {
        querySelector: ".hdnc-z-tlo",
        queryType: "all"
      }
    },
    {
      elementId: "hdncExaTloText",
      generate: {
        htmlTag: "div",
        htmlClass: "hdnc-e-tlo-text",
        htmlText: HdncConfigData.hdncExaTloText
      },
      query: {
        querySelector: ".hdnc-e-tlo-text",
        queryType: "all"
      }
    },
    {
      elementId: "hdncExaTloRgro",
      generate: {
        htmlTag: "div",
        htmlClass: "hdnc-e-tlo-rgro"
      },
      query: {
        querySelector: ".hdnc-e-tlo-rgro",
        queryType: "all"
      }
    },
    {
      elementId: "hdncExaTloBgro",
      generate: {
        htmlTag: "div",
        htmlClass: "hdnc-e-tlo-bgro"
      },
      query: {
        querySelector: ".hdnc-e-tlo-bgro",
        queryType: "all"
      }
    },
    /*  */
    {
      elementId: "hdncExaTloSdo",
      generate: {
        htmlTag: "div",
        htmlClass: "hdnc-e-tlo-sdo"
      },
      query: {
        querySelector: ".hdnc-e-tlo-sdo",
        queryType: "all"
      }
    }
  ];
  static hdncBloGroup = [
    {
      elementId: "hdncZettaBlo",
      generate: {
        htmlTag: "li",
        htmlClass: "hdnc-z-blo"
      },
      query: {
        querySelector: ".hdnc-z-blo",
        queryType: "all"
      }
    },
    {
      elementId: "hdncExaBlo",
      generate: {
        htmlTag: "ul",
        htmlClass: "hdnc-e-blo"
      },
      query: {
        querySelector: ".hdnc-e-blo",
        queryType: "all"
      }
    },
    /*  */
    {
      elementId: "hdncPetaBloSdo",
      generate: {
        htmlTag: "div",
        htmlClass: "hdnc-p-blo-sdo"
      },
      query: {
        querySelector: ".hdnc-p-blo-sdo",
        queryType: "all"
      }
    },
    /*  */
    {
      elementId: "hdncExaBloSgroTo",
      generate: {
        htmlTag: "div",
        htmlClass: "hdnc-e-blo-sgro hdnc-e-blo-sgro-to"
      },
      query: {
        querySelector: ".hdnc-e-blo-sgro-to",
        queryType: "all"
      }
    },
    {
      elementId: "hdncPetaBloSgroTo",
      generate: {
        htmlTag: "div",
        htmlClass: "hdnc-p-blo-sgro hdnc-p-blo-sgro-to"
      },
      query: {
        querySelector: ".hdnc-p-blo-sgro-to",
        queryType: "all"
      }
    },
    {
      elementId: "hdncExaBloSgroBo",
      generate: {
        htmlTag: "div",
        htmlClass: "hdnc-e-blo-sgro hdnc-e-blo-sgro-bo"
      },
      query: {
        querySelector: ".hdnc-e-blo-sgro-bo",
        queryType: "all"
      }
    },
    {
      elementId: "hdncPetaBloSgroBo",
      generate: {
        htmlTag: "div",
        htmlClass: "hdnc-p-blo-sgro hdnc-p-blo-sgro-bo"
      },
      query: {
        querySelector: ".hdnc-p-blo-sgro-bo",
        queryType: "all"
      }
    }
  ];
  static hdncBloEbGroup = [
    {
      elementId: "hdncPetaBlo",
      generate: {
        htmlTag: "li",
        htmlClass: "hdnc-p-blo"
      },
      query: {
        querySelector: ".hdnc-p-blo",
        queryType: "all"
      }
    },
    {
      elementId: "hdncTeraBlo",
      generate: {
        htmlTag: "a",
        htmlClass: "hdnc-t-blo",
        htmlLink: HdncConfigData.hdncTeraBloLink
      },
      query: {
        querySelector: ".hdnc-t-blo",
        queryType: "all"
      }
    },
    {
      elementId: "hdncGigaBloText",
      generate: {
        htmlTag: "div",
        htmlClass: "hdnc-g-blo-text",
        htmlText: HdncConfigData.hdncGigaBloText
      },
      query: {
        querySelector: ".hdnc-g-blo-text",
        queryType: "all"
      }
    },
    {
      elementId: "hdncGigaBloRgro",
      generate: {
        htmlTag: "div",
        htmlClass: "hdnc-g-blo-rgro"
      },
      query: {
        querySelector: ".hdnc-g-blo-rgro",
        queryType: "all"
      }
    },
    {
      elementId: "hdncGigaBloBgro",
      generate: {
        htmlTag: "div",
        htmlClass: "hdnc-g-blo-bgro"
      },
      query: {
        querySelector: ".hdnc-g-blo-bgro",
        queryType: "all"
      }
    }
  ];
  static hdncYottaGroup = [
    {
      elementId: "hdncYottaSdo",
      generate: {
        htmlTag: "div",
        htmlClass: "hdnc-y-sdo"
      },
      query: {
        querySelector: ".hdnc-y-sdo",
        queryType: "single"
      }
    },
    {
      elementId: "hdncYottaSfroTo",
      generate: {
        htmlTag: "div",
        htmlClass: "hdnc-y-sfro hdnc-y-sfro-to"
      },
      query: {
        querySelector: ".hdnc-y-sfro-to",
        queryType: "single"
      }
    },
    {
      elementId: "hdncYottaSfroBo",
      generate: {
        htmlTag: "div",
        htmlClass: "hdnc-y-sfro hdnc-y-sfro-bo"
      },
      query: {
        querySelector: ".hdnc-y-sfro-bo",
        queryType: "single"
      }
    }
  ];
}
class HdncConfigManager {
  static hdncGenerate() {
    const {
      hdncR
    } = HdncConfigGet.getHdncRoot();
    const hdncFragment = document.createDocumentFragment();
    let tempGenerateElement = null;
    let tempSaveElement = {};
    /* =============== :Ys, Tlo, Zs Group: =============== */
    for (let ysi = 0; ysi < HdncConfigData.hdncExaTloText.length; ysi++) {
      /* ==========----- :Ys Group: -----========== */
      for (let zsi = 0; zsi < HdncConfigElement.hdncGroup.length; zsi++) {
        tempGenerateElement = BlfUtil.getGenerateElement(
          HdncConfigElement.hdncGroup[zsi]
        );
        tempSaveElement[HdncConfigElement.hdncGroup[zsi].elementId] = tempGenerateElement;
      }
      /* ==========----- ;Ys Group; -----========== */
      /* ==========----- :Tlo Group: -----========== */
      for (let zsi = 0; zsi < HdncConfigElement.hdncTloGroup.length; zsi++) {
        tempGenerateElement = BlfUtil.getGenerateElement(
          HdncConfigElement.hdncTloGroup[zsi],
          [ysi]
        );
        tempSaveElement[HdncConfigElement.hdncTloGroup[zsi].elementId] = tempGenerateElement;
      }
      /* ==========----- ;Tlo Group; -----========== */
      /* ==========----- :Blo Group: -----========== */
      for (let zsi = 0; zsi < HdncConfigElement.hdncBloGroup.length; zsi++) {
        tempGenerateElement = BlfUtil.getGenerateElement(
          HdncConfigElement.hdncBloGroup[zsi]
        );
        tempSaveElement[HdncConfigElement.hdncBloGroup[zsi].elementId] = tempGenerateElement;
      }
      /* ==========----- ;Blo Group; -----========== */
      /* ==========----- :Blo Eb Group: -----========== */
      for (let zsi = 0; zsi < HdncConfigData.hdncGigaBloText[ysi].length; zsi++) {
        for (let esi = 0; esi < HdncConfigElement.hdncBloEbGroup.length; esi++) {
          tempGenerateElement = BlfUtil.getGenerateElement(
            HdncConfigElement.hdncBloEbGroup[esi],
            [ysi, zsi]
          );
          tempSaveElement[HdncConfigElement.hdncBloEbGroup[esi].elementId] = tempGenerateElement;
        }
        HdncConfigManager.hdncBloEbGroupAppend(tempSaveElement);
      }
      /* ==========----- ;Blo Eb Group; -----========== */
      HdncConfigManager.hdncTloGroupAppend(tempSaveElement);
      HdncConfigManager.hdncBloGroupAppend(tempSaveElement);
      HdncConfigManager.hdncGroupAppend(tempSaveElement);
      hdncFragment.append(tempSaveElement["hdncY"]);
      tempSaveElement = {};
    }
    /* =============== ;Ys, Tlo, Zs Group; =============== */
    /* =============== :Yotta Group: =============== */
    for (let ysi = 0; ysi < HdncConfigElement.hdncYottaGroup.length; ysi++) {
      tempGenerateElement = BlfUtil.getGenerateElement(
        HdncConfigElement.hdncYottaGroup[ysi]
      );
      tempSaveElement[HdncConfigElement.hdncYottaGroup[ysi].elementId] = tempGenerateElement;
    }
    HdncConfigManager.hdncYottaGroupAppend(tempSaveElement, hdncFragment);
    /* =============== ;Yotta Group; =============== */
    hdncR.append(hdncFragment);
  }
  /*  */
  static hdncGroupAppend(getSaveElement) {
    getSaveElement["hdncY"].append(
      getSaveElement["hdncZettaTlo"],
      getSaveElement["hdncZettaBlo"]
    );
  }
  static hdncTloGroupAppend(getSaveElement) {
    getSaveElement["hdncZettaTlo"].append(
      getSaveElement["hdncExaTloText"],
      getSaveElement["hdncExaTloRgro"],
      getSaveElement["hdncExaTloBgro"],
      getSaveElement["hdncExaTloSdo"]
    );
  }
  static hdncBloGroupAppend(getSaveElement) {
    getSaveElement["hdncExaBlo"].append(
      getSaveElement["hdncPetaBloSdo"]
    );
    getSaveElement["hdncExaBloSgroTo"].append(
      getSaveElement["hdncPetaBloSgroTo"]
    );
    getSaveElement["hdncExaBloSgroBo"].append(
      getSaveElement["hdncPetaBloSgroBo"]
    );
    getSaveElement["hdncZettaBlo"].append(
      getSaveElement["hdncExaBlo"],
      getSaveElement["hdncExaBloSgroTo"],
      getSaveElement["hdncExaBloSgroBo"]
    );
  }
  static hdncBloEbGroupAppend(getSaveElement) {
    getSaveElement["hdncTeraBlo"].append(
      getSaveElement["hdncGigaBloText"],
      getSaveElement["hdncGigaBloRgro"],
      getSaveElement["hdncGigaBloBgro"]
    );
    getSaveElement["hdncPetaBlo"].append(getSaveElement["hdncTeraBlo"]);
    getSaveElement["hdncExaBlo"].append(getSaveElement["hdncPetaBlo"]);
  }
  static hdncYottaGroupAppend(getSaveElement, hdncFragment) {
    hdncFragment.append(
      getSaveElement["hdncYottaSdo"],
      getSaveElement["hdncYottaSfroTo"],
      getSaveElement["hdncYottaSfroBo"]
    );
  }
}
class HdncConfigGet {
  static getHdncRoot() {
    const saveVerifyGroup = BlfUtil.getElementCache(
      HdncConfig.hdncConfigCache,
      HdncConfigElement.hdncRoot
    );
    return saveVerifyGroup;
  }
  static getHdncGroup() {
    const {
      hdncR
    } = HdncConfigGet.getHdncRoot();
    const saveVerifyGroup = BlfUtil.getElementCache(
      HdncConfig.hdncConfigCache,
      HdncConfigElement.hdncGroup,
      hdncR
    );
    return saveVerifyGroup;
  }
  static getHdncTloGroup() {
    const {
      hdncR
    } = HdncConfigGet.getHdncRoot();
    const saveVerifyGroup = BlfUtil.getElementCache(
      HdncConfig.hdncConfigCache,
      HdncConfigElement.hdncTloGroup,
      hdncR
    );
    return saveVerifyGroup;
  }
  static getHdncBloGroup() {
    const {
      hdncR
    } = HdncConfigGet.getHdncRoot();
    const saveVerifyGroup = BlfUtil.getElementCache(
      HdncConfig.hdncConfigCache,
      HdncConfigElement.hdncBloGroup,
      hdncR
    );
    return saveVerifyGroup;
  }
  static getHdncBloEbGroup(ebIndex) {
    const {
      hdncExaBlo
    } = HdncConfigGet.getHdncBloGroup();
    const saveVerifyGroup = BlfUtil.getElementCache(
      HdncConfig.hdncConfigCache,
      HdncConfigElement.hdncBloEbGroup,
      hdncExaBlo[ebIndex],
      ebIndex
    );
    return saveVerifyGroup;
  }
  static getHdncYottaGroup() {
    const {
      hdncR
    } = HdncConfigGet.getHdncRoot();
    const returnCacheGroup = BlfUtil.getElementCache(
      HdncConfig.hdncConfigCache,
      HdncConfigElement.hdncYottaGroup,
      hdncR
    );
    return returnCacheGroup;
  }
}
class HdncConfig {
  static hdncConfigCache = {};
  /* -------------------------------------------------- */
  static hdncGenerate() {
    HdncConfigManager.hdncGenerate();
  }
  /* -------------------------------------------------- */
  static getHdncRoot() {
    return HdncConfigGet.getHdncRoot();
  }
  static getHdncGroup() {
    return HdncConfigGet.getHdncGroup();
  }
  static getHdncTloGroup() {
    return HdncConfigGet.getHdncTloGroup();
  }
  static getHdncBloGroup() {
    return HdncConfigGet.getHdncBloGroup();
  }
  static getHdncBloEbGroup(ebIndex) {
    return HdncConfigGet.getHdncBloEbGroup(ebIndex);
  }
  static getHdncYottaGroup() {
    return HdncConfigGet.getHdncYottaGroup();
  }
  /* -------------------------------------------------- */
}
export {
  HdncConfig
};
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */