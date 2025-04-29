/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  BlfUtil
} from "../../fwc-hub.js";
/*  */
class DpmhcConfigData {

}
class DpmhcConfigElement {
  static dpmhcRoot = [
    {
      elementId: "dpmhcR",
      query: {
        querySelector: ".dpmhc-r",
        queryType: "single"
      }
    }
  ];
  static dpmhcTloGroup = [
    {
      elementId: "dpmhcYottaTlo",
      query: {
        querySelector: ".dpmhc-y-tlo",
        queryType: "single"
      }
    },
    {
      elementId: "dpmhcZettaTloText",
      query: {
        querySelector: ".dpmhc-z-tlo-text",
        queryType: "single"
      }
    }
  ];
  static dpmhcCnoGroup = [
    {
      elementId: "dpmhcYottaCno",
      query: {
        querySelector: ".dpmhc-y-cno",
        queryType: "single"
      }
    },
    {
      elementId: "dpmhcZettaCno",
      query: {
        querySelector: ".dpmhc-z-cno",
        queryType: "single"
      }
    }
  ];
  static dpmhcCnoEbGroup = [
    {
      elementId: "dpmhcExaCno",
      query: {
        querySelector: ".dpmhc-e-cno",
        queryType: "all"
      }
    },
    {
      elementId: "dpmhcPetaCno",
      query: {
        querySelector: ".dpmhc-p-cno",
        queryType: "all"
      }
    },
    {
      elementId: "dpmhcTeraCno",
      query: {
        querySelector: ".dpmhc-t-cno",
        queryType: "all"
      }
    },
    {
      elementId: "dpmhcGigaCnoText",
      query: {
        querySelector: ".dpmhc-g-cno-text",
        queryType: "all"
      }
    }
  ];
  static dpmhcBloGroup = [
    {
      elementId: "dpmhcYottaBlo",
      query: {
        querySelector: ".dpmhc-y-blo",
        queryType: "single"
      }
    },
    {
      elementId: "dpmhcZettaBloBro",
      query: {
        querySelector: ".dpmhc-z-blo-bro",
        queryType: "single"
      }
    }
  ];
}
class DpmhcConfigGet {
  static getDpmhcRoot() {
    const getGroup = BlfUtil.getElementCache(
      DpmhcConfig.dpmhcConfigCache,
      DpmhcConfigElement.dpmhcRoot
    );
    return getGroup;
  }
  static getDpmhcTloGroup() {
    const {
      dpmhcR
    } = DpmhcConfigGet.getDpmhcRoot();
    const getGroup = BlfUtil.getElementCache(
      DpmhcConfig.dpmhcConfigCache,
      DpmhcConfigElement.dpmhcTloGroup,
      dpmhcR
    );
    return getGroup;
  }
  static getDpmhcCnoGroup() {
    const {
      dpmhcR
    } = DpmhcConfigGet.getDpmhcRoot();
    const getGroup = BlfUtil.getElementCache(
      DpmhcConfig.dpmhcConfigCache,
      DpmhcConfigElement.dpmhcCnoGroup,
      dpmhcR
    );
    return getGroup;
  }
  static getDpmhcCnoEbGroup() {
    const {
      dpmhcR
    } = DpmhcConfigGet.getDpmhcRoot();
    const getGroup = BlfUtil.getElementCache(
      DpmhcConfig.dpmhcConfigCache,
      DpmhcConfigElement.dpmhcCnoEbGroup,
      dpmhcR
    );
    return getGroup;
  }
  static getDpmhcBloGroup() {
    const {
      dpmhcR
    } = DpmhcConfigGet.getDpmhcRoot();
    const getGroup = BlfUtil.getElementCache(
      DpmhcConfig.dpmhcConfigCache,
      DpmhcConfigElement.dpmhcBloGroup,
      dpmhcR
    );
    return getGroup;
  }
}
class DpmhcConfig {
  static dpmhcConfigCache = {};
  /* -------------------------------------------------- */
  static getDpmhcRoot() {
    return DpmhcConfigGet.getDpmhcRoot();
  }
  static getDpmhcTloGroup() {
    return DpmhcConfigGet.getDpmhcTloGroup();
  }
  static getDpmhcCnoGroup() {
    return DpmhcConfigGet.getDpmhcCnoGroup();
  }
  static getDpmhcCnoEbGroup() {
    return DpmhcConfigGet.getDpmhcCnoEbGroup();
  }
  static getDpmhcBloGroup() {
    return DpmhcConfigGet.getDpmhcBloGroup();
  }
}
/*  */
export {
  DpmhcConfig
};
/* ========================= :FACOOYA: ========================= */
/* NOTE
 * CNO: Contents Navigation Object
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */