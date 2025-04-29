/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  BlfUtil
} from "../../fwc-hub.js";
class FllcConfigElement {
  static fllcRoot = [
    {
      elementId: "fllcR",
      generate: {
        htmlTag: "nav",
        htmlClass: "fllc-r"
      },
      query: {
        querySelector: ".blf-y-fo .fllc-r",
        queryType: "single"
      }
    }
  ];
  static fllcGroup = [
    {
      elementId: "fllcY",
      generate: {
        htmlTag: "ul",
        htmlClass: "fllc-y"
      },
      query: {
        querySelector: ".fllc-y",
        queryType: "single"
      }
    }
  ];
  static fllcYbGroup = [
    {
      elementId: "fllcZ",
      generate: {
        htmlTag: "li",
        htmlClass: "fllc-z"
      },
      query: {
        querySelector: ".fllc-z",
        queryType: "all"
      }
    }
  ];
  static fllcFoGroup = [
    {
      elementId: "fllcYottaFo",
      generate: {
        htmlTag: "div",
        htmlClass: "fllc-y-fo"
      },
      query: {
        querySelector: ".fllc-y-fo",
        queryType: "single"
      }
    },
    {
      elementId: "fllcZettaFoTaIcon",
      generate: {
        htmlTag: "div",
        htmlClass: "fllc-z-fo-ta-icon fllc-z-fo"
      },
      query: {
        querySelector: ".fllc-z-fo-ta-icon",
        queryType: "single"
      }
    },
    {
      elementId: "fllcZettaFoLogo",
      generate: {
        htmlTag: "div",
        htmlClass: "fllc-z-fo-logo fllc-z-fo"
      },
      query: {
        querySelector: ".fllc-z-fo-logo",
        queryType: "single"
      }
    }
  ];
  static fllcToGroup = [
    {
      elementId: "fllcYottaTo",
      generate: {
        htmlTag: "div",
        htmlClass: "fllc-y-to"
      },
      query: {
        querySelector: ".fllc-y-to",
        queryType: "single"
      }
    },
    {
      elementId: "fllcZettaToSince",
      generate: {
        htmlTag: "div",
        htmlClass: "fllc-z-to-since"
      },
      query: {
        querySelector: ".fllc-z-to-copyright",
        queryType: "single"
      }
    },
    {
      elementId: "fllcZettaToCopyright",
      generate: {
        htmlTag: "div",
        htmlClass: "fllc-z-to-copyright"
      },
      query: {
        querySelector: ".fllc-z-to-copyright",
        queryType: "single"
      }
    }
  ];
}
class FllcConfigGet {
  static getFllcRoot() {
    const getGroup = BlfUtil.getElementCache(
      FllcConfig.fllcConfigCache,
      FllcConfigElement.fllcRoot
    );
    return getGroup;
  }
  static getFllcGroup() {
    const {
      FllcR
    } = FllcConfigGet.getFllcRoot();
    const getGroup = BlfUtil.getElementCache(
      FllcConfig.fllcConfigCache,
      FllcConfigElement.fllcGroup,
      FllcR
    );
    return getGroup;
  }
  static getFllcYbGroup() {
    const {
      FllcR
    } = FllcConfigGet.getFllcRoot();
    const getGroup = BlfUtil.getElementCache(
      FllcConfig.fllcConfigCache,
      FllcConfigElement.fllcYbGroup,
      FllcR
    );
    return getGroup;
  }
  static getFllcFoGroup() {
    const {
      FllcR
    } = FllcConfigGet.getFllcRoot();
    const getGroup = BlfUtil.getElementCache(
      FllcConfig.fllcConfigCache,
      FllcConfigElement.fllcFoGroup,
      FllcR
    );
    return getGroup;
  }
  static getFllcToGroup() {
    const {
      FllcR
    } = FllcConfigGet.getFllcRoot();
    const getGroup = BlfUtil.getElementCache(
      FllcConfig.fllcConfigCache,
      FllcConfigElement.fllcToGroup,
      FllcR
    );
    return getGroup;
  }
}
class FllcConfig {
  static fllcConfigCache = {};
  /* -------------------------------------------------- */

  /* -------------------------------------------------- */
  static getFllcRoot() {
    return FllcConfigGet.getFllcRoot();
  }
  static getFllcGroup() {
    return FllcConfigGet.getFllcGroup();
  }
  static getFllcYbGroup() {
    return FllcConfigGet.getFllcYbGroup();
  }
  static getFllcFoGroup() {
    return FllcConfigGet.getFllcFoGroup();
  }
  static getFllcToGroup() {
    return FllcConfigGet.getFllcToGroup();
  }
}
export {
  FllcConfig
};
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */