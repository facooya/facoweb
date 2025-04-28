/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
class HsncData {
  /* ===== Text ===== */
  static hsncExaPoText = [
    "Tab 1",
    "Tab 2",
    "Tab 3"
  ];
  /* ===== gigaText ===== */
  static hsncGigaTextYs = [
    "Version 1.1.17 Alpha",
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
  static hsncGigaTextZs = [
    "Item 2-1",
    "Item 2-2"
  ];
  static hsncGigaTextEs = [
    "Item 3-1",
    "Item 3-2",
    "Item 3-3"
  ];
  /* ===== TeraLink ===== */
  static hsncTeraLinkYs = [
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
  static hsncTeraLinkZs = [
    "./doc-page.html",
    "./doc-page.html"
  ];
  static hsncTeraLinkEs = [
    "./doc-page.html",
    "./doc-page.html",
    "./doc-page.html"
  ];
  /* ===== Compile ===== */
  static hsncGigaText = [
    HsncData.hsncGigaTextYs,
    HsncData.hsncGigaTextZs,
    HsncData.hsncGigaTextEs
  ];
  static hsncTeraLink = [
    HsncData.hsncTeraLinkYs,
    HsncData.hsncTeraLinkZs,
    HsncData.hsncTeraLinkEs
  ];
}
class HsncElement {
  static elementYsGroup = [
    {
      id: "yotta",
      tag: "ul",
      selector: "hsnc-y"
    },
    {
      id: "zetta",
      tag: "li",
      selector: "hsnc-z"
    },
    {
      id: "exa",
      tag: "ul",
      selector: "hsnc-e"
    }
  ];
  static elementZsGroup = [
    {
      id: "peta",
      tag: "li",
      selector: "hsnc-p"
    },
    {
      id: "tera",
      tag: "a",
      selector: "hsnc-t",
      link: HsncData.hsncTeraLink
    },
    {
      id: "gigaText",
      tag: "div",
      selector: "hsnc-g-text",
      text: HsncData.hsncGigaText
    },
    {
      id: "gigaRgro",
      tag: "div",
      selector: "hsnc-g-rgro"
    },
    {
      id: "gigaBgro",
      tag: "div",
      selector: "hsnc-g-bgro"
    }
  ];
  static elementPoGroup = [
    {
      id: "zettaPo",
      tag: "li",
      selector: "hsnc-z-po"
    },
    {
      id: "exaPoText",
      tag: "div",
      selector: "hsnc-e-po-text",
      text: HsncData.hsncExaPoText
    },
    {
      id: "exaPoRgro",
      tag: "div",
      selector: "hsnc-e-po-rgro"
    },
    {
      id: "exaPoBgro",
      tag: "div",
      selector: "hsnc-e-po-bgro"
    }
  ];
  /* static elementSdoGroup = [
    {
      id: "yottaSdo",
      tag: "div",
      selector: "hsnc-y-sdo"
    }
  ]; */
  static elementEcoGroup = [
    {
      id: "yottaEco",
      tag: "div",
      selector: "hsnc-y-eco"
    },
    {
      id: "zettaEcoSdo",
      tag: "div",
      selector: "hsnc-z-eco-sdo"
    },
    {
      id: "zettaEcoSfroTgro",
      tag: "div",
      selector: "hsnc-z-eco-sfro hsnc-z-eco-sfro-tgro"
    },
    {
      id: "zettaEcoSfroBgro",
      tag: "div",
      selector: "hsnc-z-eco-sfro hsnc-z-eco-sfro-bgro"
    }
  ];
}
class HsncConfig {
  /* =============== :Data: =============== */
  static hsncExaPoText = HsncData.hsncExaPoText;
  static hsncTeraLink = HsncData.hsncTeraLink;
  static hsncGigaText = HsncData.hsncGigaText;
  /* =============== ;Data; =============== */
  /* =============== :Element: =============== */
  static elementYsGroup = HsncElement.elementYsGroup;
  static elementZsGroup = HsncElement.elementZsGroup;
  static elementPoGroup = HsncElement.elementPoGroup;
  /* static elementSdoGroup = HsncElement.elementSdoGroup; */
  static elementEcoGroup = HsncElement.elementEcoGroup;
  /* =============== ;Element; =============== */
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
 * HsncConfig.exaPoTextRs, gigaTextRs, teraLinkRs
 */
/* AUTHORSHIP
 * Founder: Facooya
 */