/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  BlfUtil
} from "../../fwc/fwc-hub.js";
/*  */
class DpmfcConfigData {

}
class DpmfcConfigElement {
  static dpmfcRoot = [
    {
      elementId: "dpmfcR",
      query: {
        querySelector: ".dpmfc-r",
        queryType: "single"
      }
    }
  ];
  static dpmfcTsoGroup = [
    {
      elementId: "dpmfcYottaTso",
      query: {
        querySelector: ".dpmfc-y-tso",
        queryType: "single"
      }
    },
    {
      elementId: "dpmfc-z-tso-tro",
      query: {
        querySelector: ".dpmfc-z-tso-tro",
        queryType: "single"
      }
    },
    {
      elementId: "dpmfc-z-tso-text",
      query: {
        querySelector: ".dpmfc-z-tso-text",
        queryType: "single"
      }
    },
    {
      elementId: "dpmfc-z-tso",
      query: {
        querySelector: ".dpmfc-z-tso",
        queryType: "single"
      }
    }
  ];
  static dpmfcTsoEbGroup = [
    {
      elementId: "dpmfcExaTso",
      query: {
        querySelector: ".dpmfc-e-tso",
        queryType: "all"
      }
    },
    {
      elementId: "dpmfcPetaTsoText",
      query: {
        querySelector: ".dpmfc-p-tso-text",
        queryType: "all"
      }
    },
    {
      elementId: "dpmfcPetaTsoAro",
      query: {
        querySelector: ".dpmfc-p-tso-aro",
        queryType: "all"
      }
    }
  ];
  static dpmfcBsoGroup = [
    {
      elementId: "dpmfcYottaBso",
      query: {
        querySelector: ".dpmfc-y-bso",
        queryType: "single"
      }
    }
  ];
  static dpmfcBsoZbGroup = [
    {
      elementId: "dpmfcZettaBso",
      query: {
        querySelector: ".dpmfc-z-bso",
        queryType: "all"
      }
    }
  ];
  static dpmfcBsoEbGroup = [
    {
      elementId: "dpmfcExaBso",
      query: {
        querySelector: ".dpmfc-e-bso",
        queryType: "all"
      }
    },
    {
      elementId: "dpmfcPetaBso",
      query: {
        querySelector: ".dpmfc-p-bso",
        queryType: "all"
      }
    },
    {
      elementId: "dpmfcTeraBsoHtText",
      query: {
        querySelector: ".dpmfc-t-bso-ht-text",
        queryType: "all"
      }
    },
    {
      elementId: "dpmfcTeraBsoPtText",
      query: {
        querySelector: ".dpmfc-t-bso-pt-text",
        queryType: "all"
      }
    }
  ];
}
class DpmfcConfigGet {
  static getDpmfcRoot() {
    const getGroup = DpmfcUtil.getElementCache(
      DpmfcConfig.dpmfcConfigCache,
      DpmfcConfigElement.dpmfcRoot
    );
    return getGroup;
  }
  static getDpmfcTsoGroup() {
    const {
      dpmfcR
    } = DpmfcConfigGet.getDpmfcRoot();
    const getGroup = DpmfcUtil.getElementCache(
      DpmfcConfig.dpmfcConfigCache,
      DpmfcConfigElement.dpmfcTsoGroup,
      dpmfcR
    );
    return getGroup;
  }
  static getDpmfcTsoEbGroup() {
    const {
      dpmfcR
    } = DpmfcConfigGet.getDpmfcRoot();
    const getGroup = DpmfcUtil.getElementCache(
      DpmfcConfig.dpmfcConfigCache,
      DpmfcConfigElement.dpmfcTsoEbGroup,
      dpmfcR
    );
    return getGroup;
  }
  static getDpmfcBsoGroup() {
    const {
      dpmfcR
    } = DpmfcConfigGet.getDpmfcRoot();
    const getGroup = DpmfcUtil.getElementCache(
      DpmfcConfig.dpmfcConfigCache,
      DpmfcConfigElement.dpmfcBsoGroup,
      dpmfcR
    );
    return getGroup;
  }
  static getDpmfcBsoZbGroup() {
    const {
      dpmfcR
    } = DpmfcConfigGet.getDpmfcRoot();
    const getGroup = DpmfcUtil.getElementCache(
      DpmfcConfig.dpmfcConfigCache,
      DpmfcConfigElement.dpmfcBsoZbGroup,
      dpmfcR
    );
    return getGroup;
  }
  static getDpmfcBsoEbGroup() {
    const {
      dpmfcR
    } = DpmfcConfigGet.getDpmfcRoot();
    const getGroup = DpmfcUtil.getElementCache(
      DpmfcConfig.dpmfcConfigCache,
      DpmfcConfigElement.dpmfcBsoEbGroup,
      dpmfcR
    );
    return getGroup;
  }
}
class DpmfcConfig {
  static dpmfcConfigCache = {};
  /* -------------------------------------------------- */
  static getDpmfcRoot() {
    return DpmfcConfigGet.getDpmfcRoot();
  }
  static getDpmfcTsoGroup() {
    return DpmfcConfigGet.getDpmfcTsoGroup();
  }
  static getDpmfcTsoEbGroup() {
    return DpmfcConfigGet.getDpmfcTsoEbGroup();
  }
  static getDpmfcBsoGroup() {
    return DpmfcConfigGet.getDpmfcBsoGroup();
  }
  static getDpmfcBsoZbGroup() {
    return DpmfcConfigGet.getDpmfcBsoZbGroup();
  }
  static getDpmfcBsoEbGroup() {
    return DpmfcConfigGet.getDpmfcBsoEbGroup();
  }
}
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */