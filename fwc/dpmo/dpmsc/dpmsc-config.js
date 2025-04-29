/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  BlfUtil
} from "../../fwc-hub.js";
/*  */
class DpmscConfigData {

}
class DpmscConfigElement {
  static dpmscRoot = [
    {
      elementId: "dpmscR",
      query: {
        querySelector: ".dpmsc-r",
        queryType: "single"
      }
    }
  ];
  static dpmscGroup = [
    {
      elementId: "dpmscY",
      query: {
        querySelector: ".dpmsc-y",
        queryType: "single"
      }
    }
  ];
  static dpmscZbGroup = [
    {
      elementId: "dpmscZ",
      query: {
        querySelector: ".dpmsc-z",
        queryType: "all"
      }
    },
    {
      elementId: "dpmscE",
      query: {
        querySelector: ".dpmsc-e",
        queryType: "all"
      }
    }
  ];
  static dpmscTloGroup = [
    {
      elementId: "dpmscExaTlo",
      query: {
        querySelector: ".dpmsc-e-tlo",
        queryType: "all"
      }
    },
    {
      elementId: "dpmscPetaTlo",
      query: {
        querySelector: ".dpmsc-p-tlo",
        queryType: "all"
      }
    },
    {
      elementId: "dpmscTeraTlo",
      query: {
        querySelector: ".dpmsc-t-tlo",
        queryType: "all"
      }
    },
    {
      elementId: "dpmscGigaTloText",
      query: {
        querySelector: ".dpmsc-g-tlo-text",
        queryType: "all"
      }
    }
  ];
  static dpmscPbGroup = [
    {
      elementId: "dpmscP",
      query: {
        querySelector: ".dpmsc-p",
        queryType: "all"
      }
    },
    {
      elementId: "dpmscTeraText",
      query: {
        querySelector: ".dpmsc-t-text",
        queryType: "all"
      }
    },
    {
      elementId: "dpmscT",
      query: {
        querySelector: ".dpmsc-t",
        queryType: "all"
      }
    },
    {
      elementId: "dpmscGigaText",
      query: {
        querySelector: ".dpmsc-g-text",
        queryType: "all"
      }
    }
  ];
}
class DpmscConfigGet {
  static getDpmscRoot() {
    const getGroup = BlfUtil.getElementCache(
      DpmscConfig.dpmscConfigCache,
      DpmscConfigElement.dpmscRoot
    );
    return getGroup;
  }
  static getDpmscGroup() {
    const {
      dpmscR
    } = DpmscConfigGet.getDpmscRoot();
    const getGroup = BlfUtil.getElementCache(
      DpmscConfig.dpmscConfigCache,
      DpmscConfigElement.dpmscGroup,
      dpmscR
    );
    return getGroup;
  }
  static getDpmscZbGroup() {
    const {
      dpmscR
    } = DpmscConfigGet.getDpmscRoot();
    const getGroup = BlfUtil.getElementCache(
      DpmscConfig.dpmscConfigCache,
      DpmscConfigElement.dpmscZbGroup,
      dpmscR
    );
    return getGroup;
  }
  static getDpmscTloGroup() {
    const {
      dpmscR
    } = DpmscConfigGet.getDpmscRoot();
    const getGroup = BlfUtil.getElementCache(
      DpmscConfig.dpmscConfigCache,
      DpmscConfigElement.dpmscTloGroup,
      dpmscR
    );
    return getGroup;
  }
  static getDpmscPbGroup() {
    const {
      dpmscR
    } = DpmscConfigGet.getDpmscRoot();
    const getGroup = BlfUtil.getElementCache(
      DpmscConfig.dpmscConfigCache,
      DpmscConfigElement.dpmscPbGroup,
      dpmscR
    );
    return getGroup;
  }
}
class DpmscConfig {
  static dpmscConfigCache = {};
  /* -------------------------------------------------- */
  static getDpmscRoot() {
    return DpmscConfigGet.getDpmscRoot();
  }
  static getDpmscGroup() {
    return DpmscConfigGet.getDpmscGroup();
  }
  static getDpmscZbGroup() {
    return DpmscConfigGet.getDpmscZbGroup();
  }
  static getDpmscTloGroup() {
    return DpmscConfigGet.getDpmscTloGroup();
  }
  static getDpmscPbGroup() {
    return DpmscConfigGet.getDpmscPbGroup();
  }
}
/*  */
export {
  DpmscConfig
};
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */