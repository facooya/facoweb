/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
class HdncData {
  /* ===== ExaPoText ===== */
  static hdncExaPoText = [
    "Menu 1",
    "Menu 2",
    "Menu 3",
    "Menu 4"
  ];
  /* ===== GigaText ===== */
  static hdncGigaTextLanguage = [
    "Item 1-1"
  ];
  static hdncGigaTextApplication = [
    "Item 2-1",
    "Item 2-2"
  ];
  static hdncGigaTextWeb = [
    "Item 3-1",
    "Item 3-2",
    "Item 3-3"
  ];
  static hdncGigaTextEtc = [
    "Item 4-1",
    "Item 4-2"
  ];
  /* ===== TeraLink ===== */
  static hdncTeraLinkLanguage = [
    "#item-1-1"
  ];
  static hdncTeraLinkApplication = [
    "#item-2-1",
    "#item-2-2"
  ];
  static hdncTeraLinkWeb = [
    "#item-3-1",
    "#item-3-2",
    "#item-3-3"
  ];
  static hdncTeraLinkEtc = [
    "#item-4-1",
    "#item-4-2"
  ];
  /* ===== Compile ===== */
  static hdncGigaText = [
    HdncData.hdncGigaTextLanguage,
    HdncData.hdncGigaTextApplication,
    HdncData.hdncGigaTextWeb,
    HdncData.hdncGigaTextEtc
  ];
  static hdncTeraLink = [
    HdncData.hdncTeraLinkLanguage,
    HdncData.hdncTeraLinkApplication,
    HdncData.hdncTeraLinkWeb,
    HdncData.hdncTeraLinkEtc
  ];
}
class HdncElement {
  static elementYsGroup = [
    {
      id: "yotta",
      tag: "ul",
      selector: "hdnc-y"
    },
    {
      id: "zetta",
      tag: "li",
      selector: "hdnc-z"
    },
    {
      id: "exa",
      tag: "ul",
      selector: "hdnc-e"
    }
  ];
  static elementZsGroup = [
    {
      id: "peta",
      tag: "li",
      selector: "hdnc-p"
    },
    {
      id: "tera",
      tag: "a",
      selector: "hdnc-t",
      link: HdncData.hdncTeraLink
    },
    {
      id: "gigaText",
      tag: "div",
      selector: "hdnc-g-text",
      text: HdncData.hdncGigaText
    },
    {
      id: "gigaRgro",
      tag: "div",
      selector: "hdnc-g-rgro"
    },
    {
      id: "gigaBgro",
      tag: "div",
      selector: "hdnc-g-bgro"
    }
  ];
  static elementPoGroup = [
    {
      id: "zettaPo",
      tag: "li",
      selector: "hdnc-z-po"
    },
    {
      id: "exaPoText",
      tag: "div",
      selector: "hdnc-e-po-text",
      text: HdncData.hdncExaPoText
    },
    {
      id: "exaPoRgro",
      tag: "div",
      selector: "hdnc-e-po-rgro"
    },
    {
      id: "exaPoBgro",
      tag: "div",
      selector: "hdnc-e-po-bgro"
    }
  ];
  /* static elementSdoGroup = [
    {
      id: "yottaSdo",
      tag: "div",
      selector: "hdnc-y-sdo"
    }
  ]; */
  static elementEcoGroup = [
    {
      id: "yottaEco",
      tag: "div",
      selector: "hdnc-y-eco"
    },
    {
      id: "zettaEcoSdo",
      tag: "div",
      selector: "hdnc-z-eco-sdo"
    },
    {
      id: "zettaEcoSfroTgro",
      tag: "div",
      selector: "hdnc-z-eco-sfro hdnc-z-eco-sfro-tgro"
    },
    {
      id: "zettaEcoSfroBgro",
      tag: "div",
      selector: "hdnc-z-eco-sfro hdnc-z-eco-sfro-bgro"
    }
  ];
}
class HdncConfig {
  /* =============== :Data: =============== */
  static hdncExaPoText = HdncData.hdncExaPoText;
  static hdncTeraLink = HdncData.hdncTeraLink;
  static hdncGigaText = HdncData.hdncGigaText;
  /* =============== ;Data; =============== */
  /* =============== :Element: =============== */
  static elementYsGroup = HdncElement.elementYsGroup;
  static elementZsGroup = HdncElement.elementZsGroup;
  static elementPoGroup = HdncElement.elementPoGroup;
  /* static elementSdoGroup = HdncElement.elementSdoGroup; */
  static elementEcoGroup = HdncElement.elementEcoGroup;
  /* =============== ;Element; =============== */
}
export {
  HdncConfig
};
/* DESCRIPTION
 * HdncConfig.exaPoTextRs, gigaTextRs, teraLinkRs
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */