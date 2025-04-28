/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  BlfUtil
} from "../../fwc/fwc-hub.js";
/*  */
class BlfConfigData {

}
class BlfConfigElement {
  static blfRoot = [
    {
      elementId: "blfR",
      query: {
        querySelector: ".blf-r",
        queryType: "single"
      }
    }
  ];
  static blfGroup = [
    {
      elementId: "blfYottaHo",
      query: {
        querySelector: ".blf-y-ho",
        queryType: "single"
      }
    },
    {
      elementId: "blfYottaNpmo",
      query: {
        querySelector: ".blf-y-npmo",
        queryType: "single"
      }
    },
    {
      elementId: "blfYottaFo",
      query: {
        querySelector: ".blf-y-fo",
        queryType: "single"
      }
    }
  ];
  static blfFoRoot = [
    {
      elementId: "blfFoFsmcR",
      query: {
        querySelector: ".fsmc-r",
        queryType: "single"
      }
    },
    {
      elementId: "blfFoFaucR",
      query: {
        querySelector: ".fauc-r",
        queryType: "single"
      }
    },
    {
      elementId: "blfFoFsdcR",
      query: {
        querySelector: ".fsdc-r",
        queryType: "single"
      }
    },
    {
      elementId: "blfFoFllcR",
      query: {
        querySelector: ".fllc-r",
        queryType: "single"
      }
    }
  ];
}
class BlfConfigGet {
  static getBlfRoot() {
    const saveVerifyGroup = BlfUtil.getElementCache(
      BlfConfig.blfConfigCache,
      BlfConfigElement.blfRoot
    );
    return saveVerifyGroup;
  }
  static getBlfGroup() {
    const saveVerifyGroup = BlfUtil.getElementCache(
      BlfConfig.blfConfigCache,
      BlfConfigElement.blfGroup
    );
    return saveVerifyGroup;
  }
  static getBlfFoRoot() {
    const returnGroup = BlfUtil.getElementCache(
      BlfConfig.blfConfigCache,
      BlfConfigElement.blfFoRoot
    );
    return returnGroup;
  }
}
class BlfConfigManager {
  
}
class BlfConfig {
  static blfConfigCache = {};
  /* -------------------------------------------------- */
  static getBlfRoot() {
    return BlfConfigGet.getBlfRoot();
  }
  static getBlfGroup() {
    return BlfConfigGet.getBlfGroup();
  }
  static getBlfFoRoot() {
    return BlfConfigGet.getBlfFoRoot();
  }
}
export {
  BlfConfig
};
/* NOTE
 * Data -> Element -> Get -> Manager -> Config
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
