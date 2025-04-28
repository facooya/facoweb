/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
class SncData {
  /* ===== Title ===== */
  static exaSiptgTitleRs = [
    "Tab 1",
    "Tab 2",
    "Tab 3"
  ];
  /* ===== gigaTitle ===== */
  static gigaTitleYs = [
    "Version 1.1.16 Alpha",
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
  static gigaTitleZs = [
    "Item 2-1",
    "Item 2-2"
  ];
  static gigaTitleEs = [
    "Item 3-1",
    "Item 3-2",
    "Item 3-3"
  ];
  /* ===== TeraHref ===== */
  static teraHrefYs = [
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
  static teraHrefZs = [
    "./doc-page.html",
    "./doc-page.html"
  ];
  static teraHrefEs = [
    "./doc-page.html",
    "./doc-page.html",
    "./doc-page.html"
  ];
  /* ===== Compile ===== */
  static gigaTitleRs = [
    SncData.gigaTitleYs,
    SncData.gigaTitleZs,
    SncData.gigaTitleEs
  ];
  static teraHrefRs = [
    SncData.teraHrefYs,
    SncData.teraHrefZs,
    SncData.teraHrefEs
  ];
}
class SncElement {
  static elementYsGroup = [
    {
      id: "yotta",
      tag: "ul",
      selector: "snc-y"
    },
    {
      id: "zetta",
      tag: "li",
      selector: "snc-z"
    },
    {
      id: "exa",
      tag: "ul",
      selector: "snc-e"
    }
  ];
  static elementZsGroup = [
    {
      id: "peta",
      tag: "li",
      selector: "snc-p"
    },
    {
      id: "tera",
      tag: "a",
      selector: "snc-t",
      href: SncData.teraHrefRs
    },
    {
      id: "gigaTitle",
      tag: "div",
      selector: "snc-g-title",
      text: SncData.gigaTitleRs
    },
    {
      id: "gigaRgro",
      tag: "div",
      selector: "snc-g-rgro"
    },
    {
      id: "gigaBgro",
      tag: "div",
      selector: "snc-g-bgro"
    }
  ];
  static elementSiptgGroup = [
    {
      id: "zettaSiptg",
      tag: "li",
      selector: "snc-z-siptg"
    },
    {
      id: "exaSiptgTitle",
      tag: "div",
      selector: "snc-e-siptg-title",
      text: SncData.exaSiptgTitleRs
    },
    {
      id: "exaSiptgRgro",
      tag: "div",
      selector: "snc-e-siptg-rgro"
    },
    {
      id: "exaSiptgBgro",
      tag: "div",
      selector: "snc-e-siptg-bgro"
    }
  ];
  static elementSdoGroup = [
    {
      id: "yottaSdo",
      tag: "div",
      selector: "snc-y-sdo"
    }
  ];
}
class SncConfig {
  /* =============== :Data: =============== */
  static exaSiptgTitleRs = SncData.exaSiptgTitleRs;
  static teraHrefRs = SncData.teraHrefRs;
  static gigaTitleRs = SncData.gigaTitleRs;
  /* =============== ;Data; =============== */
  /* =============== :Element: =============== */
  static elementYsGroup = SncElement.elementYsGroup;
  static elementZsGroup = SncElement.elementZsGroup;
  static elementSiptgGroup = SncElement.elementSiptgGroup;
  static elementSdoGroup = SncElement.elementSdoGroup;
  /* =============== ;Element; =============== */
}
export {
  SncConfig
};
/* DESCRIPTION
 * SncConfig.exaSiptgTitleRs, gigaTitleRs, teraHrefRs
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */