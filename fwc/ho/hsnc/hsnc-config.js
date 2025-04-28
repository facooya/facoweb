/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
class HsncData {
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
    HsncData.hsncGigaBloTextYs,
    HsncData.hsncGigaBloTextZs,
    HsncData.hsncGigaBloTextEs
  ];
  static hsncTeraBloLink = [
    HsncData.hsncTeraBloLinkYs,
    HsncData.hsncTeraBloLinkZs,
    HsncData.hsncTeraBloLinkEs
  ];
}
class HsncElement {
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
        htmlText: HsncData.hsncExaTloText
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
        htmlLink: HsncData.hsncTeraBloLink
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
        htmlText: HsncData.hsncGigaBloText
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
  /* static hsncEcoGroup = [
    {
      elementId: "hsncYottaEco",
      generate: {
        htmlTag: "div",
        htmlClass: "hsnc-y-eco"
      },
      query: {
        querySelector: ".hsnc-y-eco",
        queryType: "single"
      }
    },
    {
      elementId: "hsncZettaEcoSdo",
      generate: {
        htmlTag: "div",
        htmlClass: "hsnc-z-eco-sdo"
      },
      query: {
        querySelector: ".hsnc-z-eco-sdo",
        queryType: "single"
      }
    },
    {
      elementId: "hsncZettaEcoSfroTgro",
      generate: {
        htmlTag: "div",
        htmlClass: "hsnc-z-eco-sfro hsnc-z-eco-sfro-tgro"
      },
      query: {
        querySelector: ".hsnc-z-eco-sfro-tgro",
        queryType: "single"
      }
    },
    {
      elementId: "hsncZettaEcoSfroBgro",
      generate: {
        htmlTag: "div",
        htmlClass: "hsnc-z-eco-sfro hsnc-z-eco-sfro-bgro"
      },
      query: {
        querySelector: ".hsnc-z-eco-sfro-bgro",
        queryType: "single"
      }
    }
  ]; */
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
      elementId: "hsncYottaSfroTgro",
      generate: {
        htmlTag: "div",
        htmlClass: "hsnc-y-sfro hsnc-y-sfro-tgro"
      },
      query: {
        querySelector: ".hsnc-y-sfro-tgro",
        queryType: "single"
      }
    },
    {
      elementId: "hsncYottaSfroBgro",
      generate: {
        htmlTag: "div",
        htmlClass: "hsnc-y-sfro hsnc-y-sfro-bgro"
      },
      query: {
        querySelector: ".hsnc-y-sfro-bgro",
        queryType: "single"
      }
    }
  ];
  /* Append */
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
  /* static hsncEcoGroupAppend(getSaveElement) {
    getSaveElement["hsncYottaEco"].append(
      getSaveElement["hsncZettaEcoSdo"],
      getSaveElement["hsncZettaEcoSfroTgro"],
      getSaveElement["hsncZettaEcoSfroBgro"]
    );
  } */
  static hsncYottaGroupAppend(getSaveElement, hsncFragment) {
    hsncFragment.append(
      getSaveElement["hsncYottaSdo"],
      getSaveElement["hsncYottaSfroTgro"],
      getSaveElement["hsncYottaSfroBgro"]
    );
  }
}
class HsncConfig {
  /* =============== :Data: =============== */
  static hsncExaTloText = HsncData.hsncExaTloText;
  static hsncTeraBloLink = HsncData.hsncTeraBloLink;
  static hsncGigaBloText = HsncData.hsncGigaBloText;
  /* =============== ;Data; =============== */
  /* =============== :Element: =============== */
  static hsncRoot = HsncElement.hsncRoot;
  static hsncGroup = HsncElement.hsncGroup;
  static hsncTloGroup = HsncElement.hsncTloGroup;
  static hsncBloGroup = HsncElement.hsncBloGroup;
  static hsncBloEbGroup = HsncElement.hsncBloEbGroup;
  /* static hsncEcoGroup = HsncElement.hsncEcoGroup; */
  static hsncYottaGroup = HsncElement.hsncYottaGroup;
  /* =============== ;Element; =============== */
  /* =============== :Element (Append): =============== */
  static hsncGroupAppend(getSaveElement) {
    HsncElement.hsncGroupAppend(getSaveElement);
  }
  static hsncTloGroupAppend(getSaveElement) {
    HsncElement.hsncTloGroupAppend(getSaveElement);
  }
  static hsncBloGroupAppend(getSaveElement) {
    HsncElement.hsncBloGroupAppend(getSaveElement);
  }
  static hsncBloEbGroupAppend(getSaveElement) {
    HsncElement.hsncBloEbGroupAppend(getSaveElement);
  }
  /* static hsncEcoGroupAppend(getSaveElement) {
    HsncElement.hsncEcoGroupAppend(getSaveElement);
  } */
  static hsncYottaGroupAppend(getSaveElement, hsncFragment) {
    HsncElement.hsncYottaGroupAppend(getSaveElement, hsncFragment);
  }
  /* =============== ;Element (Append); =============== */
}
export {
  HsncConfig
};
/* HTML
 * <nav class="hsnc-r">
 *   <ul class="hsnc-y">
 *   </ul>
 * </nav>
 */
/* NOTE
 * HsncConfig.exaTloTextRs, gigaTextRs, teraLinkRs
 */
/* AUTHORSHIP
 * Founder: Facooya
 */