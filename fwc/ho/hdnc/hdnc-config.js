/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
class HdncData {
  /* ===== ExaTloText ===== */
  static hdncExaTloText = [
    "Menu 1",
    "Menu 2",
    "Menu 3",
    "Menu 4"
  ];
  /* ===== GigaBloText ===== */
  static hdncGigaBloTextLanguage = [
    "Item 1-1"
  ];
  static hdncGigaBloTextApplication = [
    "Item 2-1",
    "Item 2-2"
  ];
  static hdncGigaBloTextWeb = [
    "Item 3-1",
    "Item 3-2",
    "Item 3-3"
  ];
  static hdncGigaBloTextEtc = [
    "Item 4-1",
    "Item 4-2"
  ];
  /* ===== TeraLink ===== */
  static hdncTeraBloLinkLanguage = [
    "#item-1-1"
  ];
  static hdncTeraBloLinkApplication = [
    "#item-2-1",
    "#item-2-2"
  ];
  static hdncTeraBloLinkWeb = [
    "#item-3-1",
    "#item-3-2",
    "#item-3-3"
  ];
  static hdncTeraBloLinkEtc = [
    "#item-4-1",
    "#item-4-2"
  ];
  /* ===== Compile ===== */
  static hdncGigaBloText = [
    HdncData.hdncGigaBloTextLanguage,
    HdncData.hdncGigaBloTextApplication,
    HdncData.hdncGigaBloTextWeb,
    HdncData.hdncGigaBloTextEtc
  ];
  static hdncTeraBloLink = [
    HdncData.hdncTeraBloLinkLanguage,
    HdncData.hdncTeraBloLinkApplication,
    HdncData.hdncTeraBloLinkWeb,
    HdncData.hdncTeraBloLinkEtc
  ];
}
class HdncElement {
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
        htmlText: HdncData.hdncExaTloText
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
        htmlLink: HdncData.hdncTeraBloLink
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
        htmlText: HdncData.hdncGigaBloText
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
      elementId: "hdncYottaSfroTgro",
      generate: {
        htmlTag: "div",
        htmlClass: "hdnc-y-sfro hdnc-y-sfro-tgro"
      },
      query: {
        querySelector: ".hdnc-y-sfro-tgro",
        queryType: "single"
      }
    },
    {
      elementId: "hdncYottaSfroBgro",
      generate: {
        htmlTag: "div",
        htmlClass: "hdnc-y-sfro hdnc-y-sfro-bgro"
      },
      query: {
        querySelector: ".hdnc-y-sfro-bgro",
        queryType: "single"
      }
    }
  ];
  /* static hdncEcoGroup = [
    {
      elementId: "hdncYottaEco",
      generate: {
        htmlTag: "div",
        htmlClass: "hdnc-y-eco"
      },
      query: {
        querySelector: ".hdnc-y-eco",
        queryType: "single"
      }
    },
    {
      elementId: "hdncZettaEcoSdo",
      generate: {
        htmlTag: "div",
        htmlClass: "hdnc-z-eco-sdo"
      },
      query: {
        querySelector: ".hdnc-z-eco-sdo",
        queryType: "single"
      }
    },
    {
      elementId: "hdncZettaEcoSfroTgro",
      generate: {
        htmlTag: "div",
        htmlClass: "hdnc-z-eco-sfro hdnc-z-eco-sfro-tgro"
      },
      query: {
        querySelector: ".hdnc-z-eco-sfro-tgro",
        queryType: "single"
      }
    },
    {
      elementId: "hdncZettaEcoSfroBgro",
      generate: {
        htmlTag: "div",
        htmlClass: "hdnc-z-eco-sfro hdnc-z-eco-sfro-bgro"
      },
      query: {
        querySelector: ".hdnc-z-eco-sfro-bgro",
        queryType: "single"
      }
    }
  ]; */
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
  /* static hdncEcoGroupAppend(getSaveElement) {
    getSaveElement["hdncYottaEco"].append(
      getSaveElement["hdncZettaEcoSdo"],
      getSaveElement["hdncZettaEcoSfroTgro"],
      getSaveElement["hdncZettaEcoSfroBgro"]
    );
  } */
  static hdncYottaGroupAppend(getSaveElement, hdncFragment) {
    hdncFragment.append(
      getSaveElement["hdncYottaSdo"],
      getSaveElement["hdncYottaSfroTgro"],
      getSaveElement["hdncYottaSfroBgro"]
    );
  }
}
class HdncConfig {
  /* =============== :Data: =============== */
  static hdncExaTloText = HdncData.hdncExaTloText;
  static hdncTeraBloLink = HdncData.hdncTeraBloLink;
  static hdncGigaBloText = HdncData.hdncGigaBloText;
  /* =============== ;Data; =============== */
  /* =============== :Element: =============== */
  static hdncRoot = HdncElement.hdncRoot;
  static hdncGroup = HdncElement.hdncGroup;
  static hdncTloGroup = HdncElement.hdncTloGroup;
  static hdncBloGroup = HdncElement.hdncBloGroup;
  static hdncBloEbGroup = HdncElement.hdncBloEbGroup;
  /* static hdncEcoGroup = HdncElement.hdncEcoGroup; */
  static hdncYottaGroup = HdncElement.hdncYottaGroup;
  /* =============== ;Element; =============== */
  /* =============== :Element (Append): =============== */
  static hdncGroupAppend(getSaveElement) {
    HdncElement.hdncGroupAppend(getSaveElement);
  }
  static hdncTloGroupAppend(getSaveElement) {
    HdncElement.hdncTloGroupAppend(getSaveElement);
  }
  static hdncBloGroupAppend(getSaveElement) {
    HdncElement.hdncBloGroupAppend(getSaveElement);
  }
  static hdncBloEbGroupAppend(getSaveElement) {
    HdncElement.hdncBloEbGroupAppend(getSaveElement);
  }
  /* static hdncEcoGroupAppend(getSaveElement) {
    HdncElement.hdncEcoGroupAppend(getSaveElement);
  } */
  static hdncYottaGroupAppend(getSaveElement, hdncFragment) {
    HdncElement.hdncYottaGroupAppend(getSaveElement, hdncFragment);
  }
  /* =============== ;Element (Append); =============== */
}
export {
  HdncConfig
};
/* DESCRIPTION
 * HdncConfig.exaTloTextRs, gigaTextRs, teraLinkRs
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */