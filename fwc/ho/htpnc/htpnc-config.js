/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  BlfUtil
} from "../../fwc-hub.js";
class HtpncConfigData {
  static htpncExaLgoText = "Facooya";
  static htpncExaLgoLink = "/";
  /*  */
  static htpncZettaSntoText = "Navigation";
  /*  */
  static htpncHdngoGroLength = 3;
  static htpncHsngoGroLength = 9;
}
class HtpncConfigElement {
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
        htmlText: HtpncConfigData.htpncExaLgoText,
        htmlLink: HtpncConfigData.htpncExaLgoLink
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
    },
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
    },
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
  static htpncYottaGroup = [
    {
      elementId: "htpncYottaSnto",
      generate: {
        htmlTag: "div",
        htmlClass: "htpnc-y-snto",
        htmlText: HtpncConfigData.htpncZettaSntoText
      },
      query: {
        querySelector: ".htpnc-y-snto",
        queryType: "single"
      }
    },
    {
      elementId: "htpncYottaSdo",
      generate: {
        htmlTag: "div",
        htmlClass: "htpnc-y-sdo"
      },
      query: {
        querySelector: ".htpnc-y-sdo",
        queryType: "single"
      }
    }
  ];
}
class HtpncConfigManager {
  static htpncGenerate() {
    const {
      htpncR
    } = HtpncConfigGet.getHtpncRoot();
    const htpncFragment = document.createDocumentFragment();
    let tempGenerateElement = null;
    let tempSaveElement = {};
    /* =============== :Ys Group: =============== */
    for (let ysi = 0; ysi < HtpncConfigElement.htpncGroup.length; ysi++) {
      tempGenerateElement = BlfUtil.getGenerateElement(
        HtpncConfigElement.htpncGroup[ysi]
      );
      tempSaveElement[HtpncConfigElement.htpncGroup[ysi].elementId] = tempGenerateElement;
    }
    /* =============== ;Ys Group; =============== */
    /* =============== :Zs Group: =============== */
    for (let ysi = 0; ysi < HtpncConfigElement.htpncLgoGroup.length; ysi++) {
      tempGenerateElement = BlfUtil.getGenerateElement(
        HtpncConfigElement.htpncLgoGroup[ysi]
      );
      tempSaveElement[HtpncConfigElement.htpncLgoGroup[ysi].elementId] = tempGenerateElement;
    }
    /*  */
    /* Hdngo Group */
    tempGenerateElement = BlfUtil.getGenerateElement(
      HtpncConfigElement.htpncHdngoGroup[0]
    );
    tempSaveElement[HtpncConfigElement.htpncHdngoGroup[0].elementId] = tempGenerateElement;
    for (let ebi = 0; ebi < HtpncConfigData.htpncHdngoGroLength; ebi++) {
      tempGenerateElement = BlfUtil.getGenerateElement(
        HtpncConfigElement.htpncHdngoGroup[1]
      );
      tempSaveElement["htpncZettaHdngo"].append(tempGenerateElement);
    }
    /* Hsngo Group */
    tempGenerateElement = BlfUtil.getGenerateElement(
      HtpncConfigElement.htpncHsngoGroup[0]
    );
    tempSaveElement[HtpncConfigElement.htpncHsngoGroup[0].elementId] = tempGenerateElement;
    for (let ebi = 0; ebi < HtpncConfigData.htpncHsngoGroLength; ebi++) {
      tempGenerateElement = BlfUtil.getGenerateElement(
        HtpncConfigElement.htpncHsngoGroup[1]
      );
      tempSaveElement["htpncZettaHsngo"].append(tempGenerateElement);
    }
    /* =============== ;Zs Group; =============== */
    for (let ysi = 0; ysi < HtpncConfigElement.htpncYottaGroup.length; ysi++) {
      tempGenerateElement = BlfUtil.getGenerateElement(
        HtpncConfigElement.htpncYottaGroup[ysi]
      );
      tempSaveElement[HtpncConfigElement.htpncYottaGroup[ysi].elementId] = tempGenerateElement;
    }
    /* =============== :Compile: =============== */
    HtpncConfigManager.setAppendFragment(htpncFragment, tempSaveElement);
    htpncR.append(htpncFragment);
  }
  /* -------------------------------------------------- */
  static setAppendFragment(htpncFragment, tempSaveElement) {
    tempSaveElement["htpncZettaLgo"].append(
      tempSaveElement["htpncExaLgoLink"]
    );
    tempSaveElement["htpncY"].append(
      tempSaveElement["htpncZettaLgo"],
      tempSaveElement["htpncZettaHdngo"],
      tempSaveElement["htpncZettaHsngo"]
    );
    htpncFragment.append(
      tempSaveElement["htpncY"],
      tempSaveElement["htpncYottaSnto"],
      tempSaveElement["htpncYottaSdo"]
    );
  }
}
class HtpncConfigGet {
  static getHtpncRoot() {
    const saveVerifyGroup = BlfUtil.getElementCache(
      HtpncConfig.htpncConfigCache,
      HtpncConfigElement.htpncRoot
    );
    return saveVerifyGroup;
  }
  static getHtpncGroup() {
    const {
      htpncR
    } = HtpncConfigGet.getHtpncRoot();
    const saveVerifyGroup = BlfUtil.getElementCache(
      HtpncConfig.htpncConfigCache,
      HtpncConfigElement.htpncGroup,
      htpncR
    );
    return saveVerifyGroup;
  }
  static getHtpncYottaGroup() {
    const {
      htpncR
    } = HtpncConfigGet.getHtpncRoot();
    const saveVerifyGroup = BlfUtil.getElementCache(
      HtpncConfig.htpncConfigCache,
      HtpncConfigElement.htpncYottaGroup,
      htpncR
    );
    return saveVerifyGroup;
  }
  static getHtpncLgoGroup() {
    const {
      htpncR
    } = HtpncConfigGet.getHtpncRoot();
    const saveVerifyGroup = BlfUtil.getElementCache(
      HtpncConfig.htpncConfigCache,
      HtpncConfigElement.htpncLgoGroup,
      htpncR
    );
    return saveVerifyGroup;
  }
  static getHtpncHdngoGroup() {
    const {
      htpncR
    } = HtpncConfigGet.getHtpncRoot();
    const saveVerifyGroup = BlfUtil.getElementCache(
      HtpncConfig.htpncConfigCache,
      HtpncConfigElement.htpncHdngoGroup,
      htpncR
    );
    return saveVerifyGroup;
  }
  static getHtpncHsngoGroup() {
    const {
      htpncR
    } = HtpncConfigGet.getHtpncRoot();
    const saveVerifyGroup = BlfUtil.getElementCache(
      HtpncConfig.htpncConfigCache,
      HtpncConfigElement.htpncHsngoGroup,
      htpncR
    );
    return saveVerifyGroup;
  }
}
class HtpncConfig {
  static htpncConfigCache = {};
  /* -------------------------------------------------- */
  static htpncGenerate() {
    HtpncConfigManager.htpncGenerate();
  }
  /* -------------------------------------------------- */
  static getHtpncRoot() {
    return HtpncConfigGet.getHtpncRoot();
  }
  static getHtpncGroup() {
    return HtpncConfigGet.getHtpncGroup();
  }
  static getHtpncLgoGroup() {
    return HtpncConfigGet.getHtpncLgoGroup();
  }
  static getHtpncHdngoGroup() {
    return HtpncConfigGet.getHtpncHdngoGroup();
  }
  static getHtpncHsngoGroup() {
    return HtpncConfigGet.getHtpncHsngoGroup();
  }
  static getHtpncYottaGroup() {
    return HtpncConfigGet.getHtpncYottaGroup();
  }
  /* -------------------------------------------------- */
}
export {
  HtpncConfig
};
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */