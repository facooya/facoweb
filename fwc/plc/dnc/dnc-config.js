/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
class DncData {
  /* ===== Title ===== */
  static exaAlptgTitleRs = [
    "Menu 1",
    "Menu 2",
    "Menu 3",
    "Menu 4",
    "Menu 5"
  ];
  /* ===== gigaTitle ===== */
  static gigaTitleYs = [
    "Item 1-1"
  ];
  static gigaTitleZs = [
    "Item 2-1",
    "Item 2-2"
  ];
  static gigaTitleEs = [
    "Item 3-1",
    "Item 3-2",
    "Item 3-3"
  ];
  static gigaTitlePs = [
    "Item 4-1",
    "Item 4-2"
  ];
  static gigaTitleTs = [
    "Item 5-1"
  ];
  /* ===== TeraHref ===== */
  static teraHrefYs = [
    "#item-1-1"
  ];
  static teraHrefZs = [
    "#item-2-1",
    "#item-2-2"
  ];
  static teraHrefEs = [
    "#item-3-1",
    "#item-3-2",
    "#item-3-3"
  ];
  static teraHrefPs = [
    "#item-4-1",
    "#item-4-2"
  ];
  static teraHrefTs = [
    "#item-5-1"
  ];
  /* ===== Compile ===== */
  static gigaTitleRs = [
    DncData.gigaTitleYs,
    DncData.gigaTitleZs,
    DncData.gigaTitleEs,
    DncData.gigaTitlePs,
    DncData.gigaTitleTs
  ];
  static teraHrefRs = [
    DncData.teraHrefYs,
    DncData.teraHrefZs,
    DncData.teraHrefEs,
    DncData.teraHrefPs,
    DncData.teraHrefTs
  ];
}
class DncElement {
  static elementYsGroup = [
    {
      id: "yotta",
      tag: "ul",
      selector: "dnc-y"
    },
    {
      id: "zetta",
      tag: "li",
      selector: "dnc-z"
    },
    {
      id: "exa",
      tag: "ul",
      selector: "dnc-e"
    }
  ];
  static elementZsGroup = [
    {
      id: "peta",
      tag: "li",
      selector: "dnc-p"
    },
    {
      id: "tera",
      tag: "a",
      selector: "dnc-t",
      href: DncData.teraHrefRs
    },
    {
      id: "gigaTitle",
      tag: "div",
      selector: "dnc-g-title",
      text: DncData.gigaTitleRs
    },
    {
      id: "gigaRgro",
      tag: "div",
      selector: "dnc-g-rgro"
    },
    {
      id: "gigaBgro",
      tag: "div",
      selector: "dnc-g-bgro"
    }
  ];
  static elementAlptgGroup = [
    {
      id: "zettaAlptg",
      tag: "li",
      selector: "dnc-z-alptg"
    },
    {
      id: "exaAlptgTitle",
      tag: "div",
      selector: "dnc-e-alptg-title",
      text: DncData.exaAlptgTitleRs
    },
    {
      id: "exaAlptgRgro",
      tag: "div",
      selector: "dnc-e-alptg-rgro"
    },
    {
      id: "exaAlptgBgro",
      tag: "div",
      selector: "dnc-e-alptg-bgro"
    }
  ];
  static elementSdoGroup = [
    {
      id: "yottaSdo",
      tag: "div",
      selector: "dnc-y-sdo"
    }
  ];
}
class DncConfig {
  /* =============== :Data: =============== */
  static exaAlptgTitleRs = DncData.exaAlptgTitleRs;
  static teraHrefRs = DncData.teraHrefRs;
  static gigaTitleRs = DncData.gigaTitleRs;
  /* =============== ;Data; =============== */
  /* =============== :Element: =============== */
  static elementYsGroup = DncElement.elementYsGroup;
  static elementZsGroup = DncElement.elementZsGroup;
  static elementAlptgGroup = DncElement.elementAlptgGroup;
  static elementSdoGroup = DncElement.elementSdoGroup;
  /* =============== ;Element; =============== */
}
export {
  DncConfig
};
/* DESCRIPTION
 * DncConfig.exaAlptgTitleRs, gigaTitleRs, teraHrefRs
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */