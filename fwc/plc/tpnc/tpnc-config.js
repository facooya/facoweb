/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
class HtpncData {
  static lioLinkTitle = "Facooya";
  static lioLinkHref = "/";

  static sntoTitle = "Navigation";

  static dnioGroLength = 3;
  static snioGroLength = 9;
}
class HtpncElement {
  static elementYsGroup = [
    {
      id: "yotta",
      tag: "ul",
      selector: "htpnc-y"
    },
    {
      id: "zettaLio",
      tag: "li",
      selector: "htpnc-z-lio"
    },
    {
      id: "exaLioLink",
      tag: "a",
      selector: "htpnc-e-lio-link",
      text: HtpncData.lioLinkTitle,
      href: HtpncData.lioLinkHref
    },
    {
      id: "zettaSnio",
      tag: "li",
      selector: "htpnc-z-snio"
    },
    {
      id: "zettaDnio",
      tag: "li",
      selector: "htpnc-z-dnio"
    }
  ];
  static elementZsGroup = [
    /* !!!!! :v1.1.17a [test]: !!!!! */
    {
      id: "yottaEco",
      tag: "div",
      selector: "htpnc-y-eco"
    },
    {
      id: "zettaEcoSdo",
      tag: "div",
      selector: "htpnc-z-eco-sdo"
    },
    /* {
      id: "yottaSdo",
      tag: "div",
      selector: "htpnc-y-sdo"
    }, */
    /* !!!!! ;v1.1.17a [test]; !!!!! */
    {
      id: "yottaSnto",
      tag: "div",
      selector: "htpnc-y-snto"
    },
    {
      id: "zettaSntoTitle",
      tag: "div",
      selector: "htpnc-z-snto-title",
      text: HtpncData.sntoTitle
    }
  ];
  static elementDnioGroGroup = [
    {
      id: "exaDnioGro",
      tag: "span",
      selector: "htpnc-e-dnio-gro"
    }
  ];
  static elementSnioGroGroup = [
    {
      id: "exaSnioGro",
      tag: "span",
      selector: "htpnc-e-snio-gro"
    }
  ];
}
class HtpncConfig {
  /* =============== :Data: =============== */
  static dnioGroLength = HtpncData.dnioGroLength;
  static snioGroLength = HtpncData.snioGroLength;
  /* =============== ;Data; =============== */
  /* =============== :Element: =============== */
  static elementYsGroup = HtpncElement.elementYsGroup;
  static elementZsGroup = HtpncElement.elementZsGroup;
  static elementDnioGroGroup = HtpncElement.elementDnioGroGroup;
  static elementSnioGroGroup = HtpncElement.elementSnioGroGroup;
  /* =============== ;Element; =============== */
}
export {
  HtpncConfig
};
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */