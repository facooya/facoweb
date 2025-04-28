/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  FwcAccessor
} from "../../fwc-hub.js";
/*  */
class NpmscConfigData {

}
class NpmscConfigElement {
  static npmscRoot = [
    {
      elementId: "npmscR",
      query: {
        querySelector: ".blf-y-npmo .npmsc-r",
        queryType: "single"
      }
    }
  ];
  static npmscGroup = [
    {
      elementId: "npmscY",
      query: {
        querySelector: ".npmsc-y",
        queryType: "all"
      }
    },
    {
      elementId: "npmscZ",
      query: {
        querySelector: ".npmsc-z",
        queryType: "all"
      }
    },
    {
      elementId: "npmscE",
      query: {
        querySelector: ".npmsc-e",
        queryType: "all"
      }
    },
    {
      elementId: "npmscP",
      query: {
        querySelector: ".npmsc-p",
        queryType: "all"
      }
    },
    {
      elementId: "npmscTeraText",
      query: {
        querySelector: ".npmsc-t-text",
        queryType: "all"
      }
    },
    {
      elementId: "npmscTeraSubText",
      query: {
        querySelector: ".npmsc-t-sub-text",
        queryType: "all"
      }
    }
  ];
}
class NpmscConfigGet {
  static getNpmscRoot() {
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      NpmscConfig.npmscConfigCache,
      NpmscConfigElement.npmscRoot
    );
    return saveVerifyGroup;
  }
  static getNpmscGroup() {
    const {
      npmscR
    } = NpmscConfigGet.getNpmscRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      NpmscConfig.npmscConfigCache,
      NpmscConfigElement.npmscGroup,
      npmscR
    );
    return saveVerifyGroup;
  }
}
class NpmscConfig {
  /* static npmscRoot = NpmscElement.npmscRoot;
  static npmscGroup = NpmscElement.npmscGroup; */
  /*  */
  static npmscConfigCache = {};
  /* -------------------------------------------------- */
  static getNpmscRoot() {
    return NpmscConfigGet.getNpmscRoot();
  }
  static getNpmscGroup() {
    return NpmscConfigGet.getNpmscGroup();
  }
}
export {
  NpmscConfig
};
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
