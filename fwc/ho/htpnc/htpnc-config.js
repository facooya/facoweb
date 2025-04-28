/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  FwcAccessor
} from "../../fwc-hub.js";
class HtpncConfigData {
  static htpncExaLgoText = "Facooya";
  static htpncExaLgoLink = "/";

  static htpncZettaSntoText = "Navigation";

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
  /* static htpncHdngoGroGroup = [
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
  ]; */
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
  /* static htpncHsngoGroGroup = [
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
  ]; */
  /* static htpncSntoGroup = [
    {
      elementId: "htpncYottaSnto",
      generate: {
        htmlTag: "div",
        htmlClass: "htpnc-y-snto"
      },
      query: {
        querySelector: ".htpnc-y-snto",
        queryType: "single"
      }
    },
    {
      elementId: "htpncZettaSntoText",
      generate: {
        htmlTag: "div",
        htmlClass: "htpnc-z-snto-text",
        htmlText: HtpncConfigData.htpncZettaSntoText
      },
      query: {
        querySelector: ".htpnc-z-snto-text",
        queryType: "single"
      }
    }
  ]; */
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
  /*  */
  /* static htpncEcoGroup = [
    {
      elementId: "htpncYottaEco",
      generate: {
        htmlTag: "div",
        htmlClass: "htpnc-y-eco"
      },
      query: {
        querySelector: ".htpnc-y-eco",
        queryType: "single"
      }
    },
    {
      elementId: "htpncZettaEcoSdo",
      generate: {
        htmlTag: "div",
        htmlClass: "htpnc-z-eco-sdo"
      },
      query: {
        querySelector: ".htpnc-z-eco-sdo",
        queryType: "single"
      }
    }
  ]; */
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
      tempGenerateElement = FwcAccessor.getGenerateElement2(
        HtpncConfigElement.htpncGroup[ysi]
      );
      tempSaveElement[HtpncConfigElement.htpncGroup[ysi].elementId] = tempGenerateElement;
    }
    /* =============== ;Ys Group; =============== */
    /* =============== :Zs Group: =============== */
    for (let ysi = 0; ysi < HtpncConfigElement.htpncLgoGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement2(
        HtpncConfigElement.htpncLgoGroup[ysi]
      );
      tempSaveElement[HtpncConfigElement.htpncLgoGroup[ysi].elementId] = tempGenerateElement;
    }
    /*  */
    /* for (let ysi = 0; ysi < HtpncConfigElement.htpncHdngoGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement2(
        HtpncConfigElement.htpncHdngoGroup[ysi]
      );
      tempSaveElement[HtpncConfigElement.htpncHdngoGroup[ysi].elementId] = tempGenerateElement;
    } */
    /* Hdngo Group */
    tempGenerateElement = FwcAccessor.getGenerateElement2(
      HtpncConfigElement.htpncHdngoGroup[0]
    );
    tempSaveElement[HtpncConfigElement.htpncHdngoGroup[0].elementId] = tempGenerateElement;
    for (let ebi = 0; ebi < HtpncConfigData.htpncHdngoGroLength; ebi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement2(
        HtpncConfigElement.htpncHdngoGroup[1]
      );
      tempSaveElement["htpncZettaHdngo"].append(tempGenerateElement);
    }
    /* for (let ysi = 0; ysi < HtpncConfigElement.htpncHsngoGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement2(
        HtpncConfigElement.htpncHsngoGroup[ysi]
      );
      tempSaveElement[HtpncConfigElement.htpncHsngoGroup[ysi].elementId] = tempGenerateElement;
    } */
    /* Hsngo Group */
    tempGenerateElement = FwcAccessor.getGenerateElement2(
      HtpncConfigElement.htpncHsngoGroup[0]
    );
    tempSaveElement[HtpncConfigElement.htpncHsngoGroup[0].elementId] = tempGenerateElement;
    for (let ebi = 0; ebi < HtpncConfigData.htpncHsngoGroLength; ebi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement2(
        HtpncConfigElement.htpncHsngoGroup[1]
      );
      tempSaveElement["htpncZettaHsngo"].append(tempGenerateElement);
    }
    /* =============== ;Zs Group; =============== */
    /* =============== :Hdngo Gro, Hsngo Gro Group: =============== */
    /* for (let ysi = 0; ysi < HtpncConfigData.htpncHdngoGroLength; ysi++) {
      for (let zsi = 0; zsi < HtpncConfigElement.htpncHdngoGroGroup.length; zsi++) {
        tempGenerateElement = FwcAccessor.getGenerateElement2(
          HtpncConfigElement.htpncHdngoGroGroup[zsi]
        );
        tempSaveElement["htpncZettaHdngo"].append(tempGenerateElement);
      }
    }
    /*  
    for (let ysi = 0; ysi < HtpncConfigData.htpncHsngoGroLength; ysi++) {
      for (let zsi = 0; zsi < HtpncConfigElement.htpncHsngoGroGroup.length; zsi++) {
        tempGenerateElement = FwcAccessor.getGenerateElement2(
          HtpncConfigElement.htpncHsngoGroGroup[zsi]
        );
        tempSaveElement["htpncZettaHsngo"].append(tempGenerateElement);
      }
    } */
    /* =============== ;Hdngo Gro, Hsngo Gro Group; =============== */
    /* =============== :Snto Group: =============== */
    /* for (let ysi = 0; ysi < HtpncConfigElement.htpncSntoGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement2(
        HtpncConfigElement.htpncSntoGroup[ysi]
      );
      tempSaveElement[HtpncConfigElement.htpncSntoGroup[ysi].elementId] = tempGenerateElement;
    } */
    /* =============== ;Snto Group; =============== */
    /* =============== :Eco Group: =============== */
    /* for (let ysi = 0; ysi < HtpncConfigElement.htpncEcoGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement2(
        HtpncConfigElement.htpncEcoGroup[ysi]
      );
      tempSaveElement[HtpncConfigElement.htpncEcoGroup[ysi].elementId] = tempGenerateElement;
    } */
    for (let ysi = 0; ysi < HtpncConfigElement.htpncYottaGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement2(
        HtpncConfigElement.htpncYottaGroup[ysi]
      );
      tempSaveElement[HtpncConfigElement.htpncYottaGroup[ysi].elementId] = tempGenerateElement;
    }
    /* =============== ;Eco Group; =============== */
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
    /* tempSaveElement["htpncYottaSnto"].append(
      tempSaveElement["htpncZettaSntoText"]
    ); */
    /* tempSaveElement["htpncYottaEco"].append(
      tempSaveElement["htpncZettaEcoSdo"]
    ); */
    htpncFragment.append(
      tempSaveElement["htpncY"],
      tempSaveElement["htpncYottaSnto"],
      tempSaveElement["htpncYottaSdo"]
    );
  }
}
class HtpncConfigGet {
  static getHtpncRoot() {
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HtpncConfig.htpncConfigCache,
      HtpncConfigElement.htpncRoot
    );
    return saveVerifyGroup;
  }
  static getHtpncGroup() {
    const {
      htpncR
    } = HtpncConfigGet.getHtpncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
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
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
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
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
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
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
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
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HtpncConfig.htpncConfigCache,
      HtpncConfigElement.htpncHsngoGroup,
      htpncR
    );
    return saveVerifyGroup;
  }
  /* static getHtpncHdngoGroGroup() {
    const {
      htpncR
    } = HtpncConfigGet.getHtpncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HtpncConfig.htpncConfigCache,
      HtpncConfigElement.htpncHdngoGroGroup,
      htpncR
    );
    return saveVerifyGroup;
  }
  static getHtpncHsngoGroGroup() {
    const {
      htpncR
    } = HtpncConfigGet.getHtpncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HtpncConfig.htpncConfigCache,
      HtpncConfigElement.htpncHsngoGroGroup,
      htpncR
    );
    return saveVerifyGroup;
  } */
  /* static getHtpncSntoGroup() {
    const {
      htpncR
    } = HtpncConfigGet.getHtpncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HtpncConfig.htpncConfigCache,
      HtpncConfigElement.htpncSntoGroup,
      htpncR
    );
    return saveVerifyGroup;
  } */
  /* static getHtpncEcoGroup() {
    const {
      htpncR
    } = HtpncConfigGet.getHtpncRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HtpncConfig.htpncConfigCache,
      HtpncConfigElement.htpncEcoGroup,
      htpncR
    );
    return saveVerifyGroup;
  } */
}
class HtpncConfig {
  /* =============== :Data: =============== */
  /* static htpncHdngoGroLength = HtpncData.htpncHdngoGroLength;
  static htpncHsngoGroLength = HtpncData.htpncHsngoGroLength; */
  /* =============== ;Data; =============== */
  /* =============== :Element: =============== */
  /* static htpncRoot = HtpncElement.htpncRoot;
  static htpncGroup = HtpncElement.htpncGroup;
  /*  
  static htpncLgoGroup = HtpncElement.htpncLgoGroup;
  static htpncHdngoGroup = HtpncElement.htpncHdngoGroup;
  static htpncHsngoGroup = HtpncElement.htpncHsngoGroup;
  /*  
  static htpncHdngoGroGroup = HtpncElement.htpncHdngoGroGroup;
  static htpncHsngoGroGroup = HtpncElement.htpncHsngoGroGroup;
  /*  
  static htpncSntoGroup = HtpncElement.htpncSntoGroup;
  static htpncEcoGroup = HtpncElement.htpncEcoGroup; */
  /* =============== ;Element; =============== */
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
  /* static getHtpncHdngoGroGroup() {
    return HtpncConfigGet.getHtpncHdngoGroGroup();
  }
  static getHtpncHsngoGroGroup() {
    return HtpncConfigGet.getHtpncHsngoGroGroup();
  } */
  /* static getHtpncSntoGroup() {
    return HtpncConfigGet.getHtpncSntoGroup();
  } */
  static getHtpncYottaGroup() {
    return HtpncConfigGet.getHtpncYottaGroup();
  }
  /* -------------------------------------------------- */
}
export {
  HtpncConfig
};
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */