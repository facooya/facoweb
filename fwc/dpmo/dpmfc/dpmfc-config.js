/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  BlfUtil,
  DpmfcUtil
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
  static dpmfcPnoGroup = [
    {
      elementId: "dpmfcYottaPno",
      query: {
        querySelector: ".dpmfc-y-pno",
        queryType: "single"
      }
    }
  ];
  static dpmfcPnoCloGroup = [
    {
      elementId: "dpmfcZettaPnoClo",
      query: {
        querySelector: ".dpmfc-z-pno-clo",
        queryType: "single"
      }
    }
    /* {
      elementId: "dpmfcExaPnoClo",
      generate: {
        htmlTag: "li",
        htmlClass: "dpmfc-e-pno-clo"
      },
      query: {
        querySelector: ".dpmfc-e-pno-clo",
        queryType: "all"
      }
    },
    {
      elementId: "dpmfcPetaPnoCloText",
      generate: {
        htmlTag: "span",
        htmlClass: "dpmfc-p-pno-clo-text"
      },
      query: {
        querySelector: ".dpmfc-p-pno-clo-text",
        queryType: "all"
      }
    } */
  ];
  static dpmfcPnoCloDynamic = [
    {
      elementId: "dpmfcExaPnoClo",
      generate: {
        htmlTag: "li",
        htmlClass: "dpmfc-e-pno-clo"
      },
      query: {
        querySelector: ".dpmfc-e-pno-clo",
        queryType: "all"
      }
    },
    {
      elementId: "dpmfcPetaPnoCloText",
      generate: {
        htmlTag: "span",
        htmlClass: "dpmfc-p-pno-clo-text"
      },
      query: {
        querySelector: ".dpmfc-p-pno-clo-text",
        queryType: "all"
      }
    }
  ];
  static dpmfcPnoLloGroup = [
    {
      elementId: "dpmfcZettaPnoLlo",
      query: {
        querySelector: ".dpmfc-z-pno-llo",
        queryType: "single"
      }
    },
    {
      elementId: "dpmfcExaPnoLloFirst",
      query: {
        querySelector: ".dpmfc-e-pno-llo-first",
        queryType: "single"
      }
    },
    {
      elementId: "dpmfcExaPnoLloPrevious",
      query: {
        querySelector: ".dpmfc-e-pno-llo-previous",
        queryType: "single"
      }
    },
    {
      elementId: "dpmfcPetaPnoLloFirst",
      query: {
        querySelector: ".dpmfc-p-pno-llo-first",
        queryType: "single"
      }
    },
    {
      elementId: "dpmfcPetaPnoLloPrevious",
      query: {
        querySelector: ".dpmfc-p-pno-llo-previous",
        queryType: "single"
      }
    }
  ];
  static dpmfcPnoRloGroup = [
    {
      elementId: "dpmfcZettaPnoRlo",
      query: {
        querySelector: ".dpmfc-z-pno-rlo",
        queryType: "single"
      }
    },
    {
      elementId: "dpmfcExaPnoRloNext",
      query: {
        querySelector: ".dpmfc-e-pno-rlo-next",
        queryType: "single"
      }
    },
    {
      elementId: "dpmfcExaPnoRloLast",
      query: {
        querySelector: ".dpmfc-e-pno-rlo-last",
        queryType: "single"
      }
    },
    {
      elementId: "dpmfcPetaPnoRloNext",
      query: {
        querySelector: ".dpmfc-p-pno-rlo-next",
        queryType: "single"
      }
    },
    {
      elementId: "dpmfcPetaPnoRloLast",
      query: {
        querySelector: ".dpmfc-p-pno-rlo-last",
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
  static getDpmfcPnoGroup() {
    const {
      dpmfcR
    } = DpmfcConfigGet.getDpmfcRoot();
    const getGroup = BlfUtil.getElementCache(
      DpmfcConfig.dpmfcConfigCache,
      DpmfcConfigElement.dpmfcPnoGroup,
      dpmfcR
    );
    return getGroup;
  }
  static getDpmfcPnoCloGroup() {
    const {
      dpmfcR
    } = DpmfcConfigGet.getDpmfcRoot();
    const getGroup = BlfUtil.getElementCache(
      DpmfcConfig.dpmfcConfigCache,
      DpmfcConfigElement.dpmfcPnoCloGroup,
      dpmfcR
    );
    return getGroup;
  }
  static getDpmfcPnoCloDynamic() {
    const {
      dpmfcZettaPnoClo
    } = DpmfcConfigGet.getDpmfcPnoCloGroup();
    const dpmfcExaPnoClo = dpmfcZettaPnoClo.querySelectorAll(".dpmfc-e-pno-clo");
    const dpmfcPetaPnoCloText = dpmfcZettaPnoClo.querySelectorAll(".dpmfc-p-pno-clo-text");
    return { dpmfcExaPnoClo, dpmfcPetaPnoCloText };
  }
  static getDpmfcPnoLloGroup() {
    const {
      dpmfcR
    } = DpmfcConfigGet.getDpmfcRoot();
    const getGroup = BlfUtil.getElementCache(
      DpmfcConfig.dpmfcConfigCache,
      DpmfcConfigElement.dpmfcPnoLloGroup,
      dpmfcR
    );
    return getGroup;
  }
  static getDpmfcPnoRloGroup() {
    const {
      dpmfcR
    } = DpmfcConfigGet.getDpmfcRoot();
    const getGroup = BlfUtil.getElementCache(
      DpmfcConfig.dpmfcConfigCache,
      DpmfcConfigElement.dpmfcPnoRloGroup,
      dpmfcR
    );
    return getGroup;
  }
}
class DpmfcConfigManager {
  static dpmfcPnoCloGenerate(pPageMaxIndex) {
    const {
      dpmfcZettaPnoClo
    } = DpmfcConfigGet.getDpmfcPnoCloGroup();
    const dpmfcPnoCloFragment = document.createDocumentFragment();

    let dpmfcExaPnoClo = null;
    let dpmfcPetaPnoCloText = null;

    for (let pi = 0; pi <= pPageMaxIndex; pi++) {
      dpmfcExaPnoClo = BlfUtil.getGenerateElement(
        DpmfcConfigElement.dpmfcPnoCloDynamic[0],
        [pi]
      );
      dpmfcPetaPnoCloText = BlfUtil.getGenerateElement(
        DpmfcConfigElement.dpmfcPnoCloDynamic[1],
        [pi]
      );
      dpmfcExaPnoClo.append(dpmfcPetaPnoCloText);
      dpmfcPnoCloFragment.append(dpmfcExaPnoClo);
    }
    dpmfcZettaPnoClo.append(dpmfcPnoCloFragment);
  }
  static dpmfcPnoCloRemove() {
    const {
      dpmfcZettaPnoClo
    } = DpmfcConfigGet.getDpmfcPnoCloGroup();
    const dpmfcExaPnoClo = dpmfcZettaPnoClo.querySelectorAll(".dpmfc-e-pno-clo");
    DpmfcUtil.utilDpmfcPnoCloEvent(false, dpmfcZettaPnoClo.length - 1);
    for (let pi = dpmfcExaPnoClo.length - 1; pi >= 0; pi--) {
      dpmfcExaPnoClo[pi].remove();
    }
  }
}
class DpmfcConfig {
  static dpmfcConfigCache = {};
  static dpmfcTsoTab = 0;
  static dpmfcPnoPage = 0;
  /*  */
  static dpmfcDefaultPageData = ["1", "2", "3", "4", "5", "6", "7"];
  static dpmfcModifyPageData = DpmfcConfig.dpmfcDefaultPageData;
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
  static getDpmfcPnoGroup() {
    return DpmfcConfigGet.getDpmfcPnoGroup();
  }
  static getDpmfcPnoCloGroup() {
    return DpmfcConfigGet.getDpmfcPnoCloGroup();
  }
  static getDpmfcPnoCloDynamic() {
    return DpmfcConfigGet.getDpmfcPnoCloDynamic();
  }
  static getDpmfcPnoLloGroup() {
    return DpmfcConfigGet.getDpmfcPnoLloGroup();
  }
  static getDpmfcPnoRloGroup() {
    return DpmfcConfigGet.getDpmfcPnoRloGroup();
  }
  /* -------------------------------------------------- */
  static dpmfcPnoCloGenerate(pPageMaxIndex) {
    DpmfcConfigManager.dpmfcPnoCloGenerate(pPageMaxIndex);
  }
  static dpmfcPnoCloRemove() {
    DpmfcConfigManager.dpmfcPnoCloRemove();
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