/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  BlfUtil
} from "../../fwc-hub.js";
/*  */
class NpmhcConfigData {

}
class NpmhcConfigElement {
  static npmhcRoot = [
    {
      elementId: "npmhcR",
      query: {
        querySelector: ".blf-y-npmo .npmhc-r",
        queryType: "single"
      }
    }
  ];
  static npmhcTloGroup = [
    {
      elementId: "npmhcYottaTlo",
      query: {
        querySelector: ".npmhc-y-tlo",
        queryType: "single"
      }
    },
    {
      elementId: "npmhcZettaTloText",
      query: {
        querySelector: ".npmhc-z-tlo-text",
        queryType: "single"
      }
    },
    {
      elementId: "npmhcZettaTloBgro",
      query: {
        querySelector: ".npmhc-z-tlo-bgro",
        queryType: "single"
      }
    }
  ];
  static npmhcTnoGroup = [
    {
      elementId: "npmhcYottaTno",
      query: {
        querySelector: ".npmhc-y-tno",
        queryType: "single"
      }
    },
    {
      elementId: "npmhcZettaTno",
      query: {
        querySelector: ".npmhc-z-tno",
        queryType: "single"
      }
    },
    {
      elementId: "npmhcExaTno",
      query: {
        querySelector: ".npmhc-e-tno",
        queryType: "all"
      }
    },
    {
      elementId: "npmhcPetaTno",
      query: {
        querySelector: ".npmhc-p-tno",
        queryType: "all"
      }
    },
    {
      elementId: "npmhcTeraTnoText",
      query: {
        querySelector: ".npmhc-t-tno-text",
        queryType: "all"
      }
    },
    {
      elementId: "npmhcTeraTnoGro",
      query: {
        querySelector: ".npmhc-t-tno-gro",
        queryType: "all"
      }
    }
  ];
}
class NpmhcConfigGet {
  static getNpmhcRoot() {
    const saveVerifyGroup = BlfUtil.getElementCache(
      NpmhcConfig.npmhcConfigCache,
      NpmhcConfigElement.npmhcRoot
    );
    return saveVerifyGroup;
  }
  static getNpmhcTloGroup() {
    const {
      npmhcR
    } = NpmhcConfigGet.getNpmhcRoot();
    const saveVerifyGroup = BlfUtil.getElementCache(
      NpmhcConfig.npmhcConfigCache,
      NpmhcConfigElement.npmhcTloGroup,
      npmhcR
    );
    return saveVerifyGroup;
  }
  static getNpmhcTnoGroup() {
    const {
      npmhcR
    } = NpmhcConfigGet.getNpmhcRoot();
    const saveVerifyGroup = BlfUtil.getElementCache(
      NpmhcConfig.npmhcConfigCache,
      NpmhcConfigElement.npmhcTnoGroup,
      npmhcR
    );
    return saveVerifyGroup;
  }
}
class NpmhcConfig {
  static npmhcConfigCache = {};
  /* -------------------------------------------------- */
  static getNpmhcRoot() {
    return NpmhcConfigGet.getNpmhcRoot();
  }
  static getNpmhcTloGroup() {
    return NpmhcConfigGet.getNpmhcTloGroup();
  }
  static getNpmhcTnoGroup() {
    return NpmhcConfigGet.getNpmhcTnoGroup();
  }
}
export {
  NpmhcConfig
};
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
