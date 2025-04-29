/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  BlfUtil
} from "../../fwc-hub.js";
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
  static dpmfcTsoTloGroup = [
    {
      elementId: "dpmfcZettaTsoTlo",
      query: {
        querySelector: ".dpmfc-z-tso-tlo",
        queryType: "single"
      }
    },
    {
      elementId: "dpmfcExaTsoTloTro",
      query: {
        querySelector: ".dpmfc-e-tso-tlo-tro",
        queryType: "single"
      }
    },
    {
      elementId: "dpmfcExaTsoTlo",
      query: {
        querySelector: ".dpmfc-e-tso-tlo",
        queryType: "single"
      }
    },
    {
      elementId: "dpmfcPetaTsoTlo",
      query: {
        querySelector: ".dpmfc-p-tso-tlo",
        queryType: "single"
      }
    },
    {
      elementId: "dpmfcTeraTsoTloText",
      query: {
        querySelector: ".dpmfc-t-tso-tlo-text",
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
      elementId: "dpmfcZettaTso",
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
  static dpmfcBscoGroup = [
    {
      elementId: "dpmfcYottaBsco",
      query: {
        querySelector: ".dpmfc-y-bsco",
        queryType: "single"
      }
    },
    {
      elementId: "dpmfcZettaBscoPrev",
      query: {
        querySelector: ".dpmfc-z-bsco-prev",
        queryType: "single"
      }
    },
    {
      elementId: "dpmfcZettaBscoNext",
      query: {
        querySelector: ".dpmfc-z-bsco-next",
        queryType: "single"
      }
    }
  ];
}
class DpmfcConfigGet {
  static getDpmfcRoot() {
    const getGroup = BlfUtil.getElementCache(
      DpmfcConfig.dpmfcConfigCache,
      DpmfcConfigElement.dpmfcRoot
    );
    return getGroup;
  }
  static getDpmfcTsoTloGroup() {
    const {
      dpmfcR
    } = DpmfcConfigGet.getDpmfcRoot();
    const getGroup = BlfUtil.getElementCache(
      DpmfcConfig.dpmfcConfigCache,
      DpmfcConfigElement.dpmfcTsoTloGroup,
      dpmfcR
    );
    return getGroup;
  }
  static getDpmfcTsoGroup() {
    const {
      dpmfcR
    } = DpmfcConfigGet.getDpmfcRoot();
    const getGroup = BlfUtil.getElementCache(
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
    const getGroup = BlfUtil.getElementCache(
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
    const getGroup = BlfUtil.getElementCache(
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
    const getGroup = BlfUtil.getElementCache(
      DpmfcConfig.dpmfcConfigCache,
      DpmfcConfigElement.dpmfcBsoZbGroup,
      dpmfcR
    );
    return getGroup;
  }
  static getDpmfcBsoEbGroup(pIndex) {
    const {
      dpmfcZettaBso
    } = DpmfcConfigGet.getDpmfcBsoZbGroup();
    const getGroup = BlfUtil.getElementCache(
      DpmfcConfig.dpmfcConfigCache,
      DpmfcConfigElement.dpmfcBsoEbGroup,
      dpmfcZettaBso[pIndex],
      pIndex
    );
    return getGroup;
  }
  static getDpmfcBscoGroup() {
    const {
      dpmfcR
    } = DpmfcConfigGet.getDpmfcRoot();
    const getGroup = BlfUtil.getElementCache(
      DpmfcConfig.dpmfcConfigCache,
      DpmfcConfigElement.dpmfcBscoGroup,
      dpmfcR
    );
    return getGroup;
  }
}
class DpmfcConfig {
  static dpmfcConfigCache = {};
  static dpmfcTsoTab = 0;
  static dpmfcBscoPage = 0;
  /* -------------------------------------------------- */
  static getDpmfcRoot() {
    return DpmfcConfigGet.getDpmfcRoot();
  }
  static getDpmfcTsoTloGroup() {
    return DpmfcConfigGet.getDpmfcTsoTloGroup();
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
  static getDpmfcBsoEbGroup(pIndex) {
    return DpmfcConfigGet.getDpmfcBsoEbGroup(pIndex);
  }
  static getDpmfcBscoGroup() {
    return DpmfcConfigGet.getDpmfcBscoGroup();
  }
}
export {
  DpmfcConfig
};
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */