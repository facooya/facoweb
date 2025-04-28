/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
class TpncData {
  static lioLinkTitle = "Facooya";
  static lioLinkHref = "/";

  static sntoTitle = "Navigation";

  static dnioGroLength = 3;
  static snioGroLength = 9;
}
class TpncElement {
  static elementYsGroup = [
    {
      id: "yotta",
      tag: "ul",
      selector: "tpnc-y"
    },
    {
      id: "zettaLio",
      tag: "li",
      selector: "tpnc-z-lio"
    },
    {
      id: "exaLioLink",
      tag: "a",
      selector: "tpnc-e-lio-link",
      text: TpncData.lioLinkTitle,
      href: TpncData.lioLinkHref
    },
    {
      id: "zettaSnio",
      tag: "li",
      selector: "tpnc-z-snio"
    },
    {
      id: "zettaDnio",
      tag: "li",
      selector: "tpnc-z-dnio"
    }
  ];
  static elementZsGroup = [
    {
      id: "yottaSdo",
      tag: "div",
      selector: "tpnc-y-sdo"
    },
    {
      id: "yottaSnto",
      tag: "div",
      selector: "tpnc-y-snto"
    },
    {
      id: "zettaSntoTitle",
      tag: "div",
      selector: "tpnc-z-snto-title",
      text: TpncData.sntoTitle
    }
  ];
  static elementDnioGroGroup = [
    {
      id: "exaDnioGro",
      tag: "span",
      selector: "tpnc-e-dnio-gro"
    }
  ];
  static elementSnioGroGroup = [
    {
      id: "exaSnioGro",
      tag: "span",
      selector: "tpnc-e-snio-gro"
    }
  ];
}
class TpncConfig {
  /* =============== :Data: =============== */
  static dnioGroLength = TpncData.dnioGroLength;
  static snioGroLength = TpncData.snioGroLength;
  /* =============== ;Data; =============== */
  /* =============== :Element: =============== */
  static elementYsGroup = TpncElement.elementYsGroup;
  static elementZsGroup = TpncElement.elementZsGroup;
  static elementDnioGroGroup = TpncElement.elementDnioGroGroup;
  static elementSnioGroGroup = TpncElement.elementSnioGroGroup;
  /* =============== ;Element; =============== */
}
export {
  TpncConfig
};
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */