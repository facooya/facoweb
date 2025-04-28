/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
class HtpncData {
  static htpncExaLgoText = "Facooya";
  static htpncExaLgoLink = "/";

  static htpncZettaSntoText = "Navigation";

  static htpncHdngoGroLength = 3;
  static htpncHsngoGroLength = 9;
}
class HtpncElement {
  static htpncRoot = [
    {
      elementId: "htpncR",
      generate: {
        htmlTag: "nav",
        htmlClass: "htpnc-r"
      },
      query: {
        querySelector: ".blf-y-ho .htpnc-r",
        queryType: "single"
      }
    }
  ];
  static htpncGroup = [
    {
      elementId: "htpncY",
      generate: {
        htmlTag: "ul",
        htmlClass: "htpnc-y"
      },
      query: {
        querySelector: ".htpnc-y",
        queryType: "single"
      }
    }
  ];
  static htpncLgoGroup = [
    {
      elementId: "htpncZettaLgo",
      generate: {
        htmlTag: "li",
        htmlClass: "htpnc-z-lgo"
      },
      query: {
        querySelector: ".htpnc-z-lgo",
        queryType: "single"
      }
    },
    {
      elementId: "htpncExaLgoLink",
      generate: {
        htmlTag: "a",
        htmlClass: "htpnc-e-lgo-link",
        htmlText: HtpncData.htpncExaLgoText,
        htmlLink: HtpncData.htpncExaLgoLink
      },
      query: {
        querySelector: ".htpnc-e-lgo-link",
        queryType: "single"
      }
    }
  ];
  static htpncHdngoGroup = [
    {
      elementId: "htpncZettaHdngo",
      generate: {
        htmlTag: "li",
        htmlClass: "htpnc-z-hdngo"
      },
      query: {
        querySelector: ".htpnc-z-hdngo",
        queryType: "single"
      }
    }
  ];
  static htpncHdngoGroGroup = [
    {
      elementId: "htpncExaHdngoGro",
      generate: {
        htmlTag: "span",
        htmlClass: "htpnc-e-hdngo-gro"
      },
      query: {
        querySelector: ".htpnc-e-hdngo-gro",
        queryType: "all"
      }
    }
  ];
  static htpncHsngoGroup = [
    {
      elementId: "htpncZettaHsngo",
      generate: {
        htmlTag: "li",
        htmlClass: "htpnc-z-hsngo"
      },
      query: {
        querySelector: ".htpnc-z-hsngo",
        queryType: "single"
      }
    }
  ];
  static htpncHsngoGroGroup = [
    {
      elementId: "htpncExaHsngoGro",
      generate: {
        htmlTag: "span",
        htmlClass: "htpnc-e-hsngo-gro"
      },
      query: {
        querySelector: ".htpnc-e-hsngo-gro",
        queryType: "all"
      }
    }
  ];
  static htpncSntoGroup = [
    {
      elementId: "htpncYottaSnto",
      generate: {
        htmlTag: "div",
        htmlClass: "htpnc-y-snto"
      },
      query: {
        querySelector: ".htpnc-y-snto",
        queryType: "single"
      }
    },
    {
      elementId: "htpncZettaSntoText",
      generate: {
        htmlTag: "div",
        htmlClass: "htpnc-z-snto-text",
        htmlText: HtpncData.htpncZettaSntoText
      },
      query: {
        querySelector: ".htpnc-z-snto-text",
        queryType: "single"
      }
    }
  ];
  static htpncEcoGroup = [
    {
      elementId: "htpncYottaEco",
      generate: {
        htmlTag: "div",
        htmlClass: "htpnc-y-eco"
      },
      query: {
        querySelector: ".htpnc-y-eco",
        queryType: "single"
      }
    },
    {
      elementId: "htpncZettaEcoSdo",
      generate: {
        htmlTag: "div",
        htmlClass: "htpnc-z-eco-sdo"
      },
      query: {
        querySelector: ".htpnc-z-eco-sdo",
        queryType: "single"
      }
    }
  ];
  /* static elementYsGroup = [
    {
      id: "yotta",
      tag: "ul",
      selector: "htpnc-y"
    },
    {
      id: "zettaLgo",
      tag: "li",
      selector: "htpnc-z-lgo"
    },
    {
      id: "exaLgoLink",
      tag: "a",
      selector: "htpnc-e-lgo-link",
      text: HtpncData.lgoLinkTitle,
      href: HtpncData.lgoLinkHref
    },
    {
      id: "zettaHsngo",
      tag: "li",
      selector: "htpnc-z-hsngo"
    },
    {
      id: "zettaHdngo",
      tag: "li",
      selector: "htpnc-z-hdngo"
    }
  ]; */
  /* static elementZsGroup = [
    /* !!!!! :v1.1.17a [test]: !!!!! 
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
    /* !!!!! ;v1.1.17a [test]; !!!!! 
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
  ]; */
  /* static elementHdngoGroGroup = [
    {
      id: "exaHdngoGro",
      tag: "span",
      selector: "htpnc-e-hdngo-gro"
    }
  ];
  static elementHsngoGroGroup = [
    {
      id: "exaHsngoGro",
      tag: "span",
      selector: "htpnc-e-hsngo-gro"
    }
  ]; */
}
class HtpncConfig {
  /* =============== :Data: =============== */
  static htpncHdngoGroLength = HtpncData.htpncHdngoGroLength;
  static htpncHsngoGroLength = HtpncData.htpncHsngoGroLength;
  /* =============== ;Data; =============== */
  /* =============== :Element: =============== */
  /* static elementYsGroup = HtpncElement.elementYsGroup;
  static elementZsGroup = HtpncElement.elementZsGroup;
  static elementHdngoGroGroup = HtpncElement.elementHdngoGroGroup;
  static elementHsngoGroGroup = HtpncElement.elementHsngoGroGroup; */
  static htpncRoot = HtpncElement.htpncRoot;
  static htpncGroup = HtpncElement.htpncGroup;
  /*  */
  static htpncLgoGroup = HtpncElement.htpncLgoGroup;
  static htpncHdngoGroup = HtpncElement.htpncHdngoGroup;
  static htpncHsngoGroup = HtpncElement.htpncHsngoGroup;
  /*  */
  static htpncHdngoGroGroup = HtpncElement.htpncHdngoGroGroup;
  static htpncHsngoGroGroup = HtpncElement.htpncHsngoGroGroup;
  /*  */
  static htpncSntoGroup = HtpncElement.htpncSntoGroup;
  static htpncEcoGroup = HtpncElement.htpncEcoGroup;
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