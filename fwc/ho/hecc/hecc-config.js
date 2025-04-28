/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  FwcAccessor
} from "../../fwc-hub.js";
/*  */
class HeccConfigData {

}
class HeccConfigElement {
  static heccRoot = [
    {
      elementId: "heccR",
      generate: {
        htmlTag: "div",
        htmlClass: "hecc-r"
      },
      query: {
        querySelector: ".blf-y-ho .hecc-r",
        queryType: "single"
      }
    }
  ];
  static heccPboGroup = [
    {
      elementId: "heccYottaPbo",
      generate: {
        htmlTag: "div",
        htmlClass: "hecc-y-pbo"
      },
      query: {
        querySelector: ".hecc-y-pbo",
        queryType: "single"
      }
    },
    {
      elementId: "heccZettaPboLgro",
      generate: {
        htmlTag: "div",
        htmlClass: "hecc-z-pbo hecc-z-pbo-lgro"
      },
      query: {
        querySelector: ".hecc-z-pbo-lgro",
        queryType: "single"
      }
    },
    {
      elementId: "heccZettaPboRgro",
      generate: {
        htmlTag: "div",
        htmlClass: "hecc-z-pbo hecc-z-pbo-rgro"
      },
      query: {
        querySelector: ".hecc-z-pbo-rgro",
        queryType: "single"
      }
    }
  ];
  static heccNooGroup = [
    {
      elementId: "heccYottaNoo",
      generate: {
        htmlTag: "div",
        htmlClass: "hecc-y-noo"
      },
      query: {
        querySelector: ".hecc-y-noo",
        queryType: "single"
      }
    },
    {
      elementId: "heccZettaNooSdo",
      generate: {
        htmlTag: "div",
        htmlClass: "hecc-z-noo-sdo"
      },
      query: {
        querySelector: ".hecc-z-noo-sdo",
        queryType: "single"
      }
    }
  ];
  /* static heccAppend(getSaveElement, heccFragment) {
    getSaveElement["heccYottaPbo"].append(
      getSaveElement["heccZettaPboLgro"],
      getSaveElement["heccZettaPboRgro"]
    );
    getSaveElement["heccYottaNoo"].append(
      getSaveElement["heccZettaNooSdo"]
    );
    heccFragment.append(
      getSaveElement["heccYottaPbo"],
      getSaveElement["heccYottaNoo"]
    );
  } */
}
class HeccConfigManager {
  static heccGenerate() {
    const {
      heccR
    } = HeccConfigGet.getHeccRoot();
    const heccFragment = document.createDocumentFragment();
    let tempGenerateElement = null;
    let tempSaveElement = {};
    /* =============== :Pbo Group: =============== */
    for (let ysi = 0; ysi < HeccConfigElement.heccPboGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement2(
        HeccConfigElement.heccPboGroup[ysi]
      );
      tempSaveElement[HeccConfigElement.heccPboGroup[ysi].elementId] = tempGenerateElement;
    }
    /* =============== ;Pbo Group; =============== */
    /* =============== :Noo Group: =============== */
    for (let ysi = 0; ysi < HeccConfigElement.heccNooGroup.length; ysi++) {
      tempGenerateElement = FwcAccessor.getGenerateElement2(
        HeccConfigElement.heccNooGroup[ysi]
      );
      tempSaveElement[HeccConfigElement.heccNooGroup[ysi].elementId] = tempGenerateElement;
    }
    /* =============== ;Noo Group; =============== */
    HeccConfigManager.heccAppend(tempSaveElement, heccFragment);
    heccR.append(heccFragment);
  }
  /* -------------------------------------------------- */
  static heccAppend(getSaveElement, heccFragment) {
    getSaveElement["heccYottaPbo"].append(
      getSaveElement["heccZettaPboLgro"],
      getSaveElement["heccZettaPboRgro"]
    );
    getSaveElement["heccYottaNoo"].append(
      getSaveElement["heccZettaNooSdo"]
    );
    heccFragment.append(
      getSaveElement["heccYottaPbo"],
      getSaveElement["heccYottaNoo"]
    );
  }
}
class HeccConfigGet {
  static getHeccRoot() {
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HeccConfig.heccConfigCache,
      HeccConfigElement.heccRoot
    );
    return saveVerifyGroup;
  }
  static getHeccPboGroup() {
    const {
      heccR
    } = HeccConfigGet.getHeccRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HeccConfig.heccConfigCache,
      HeccConfigElement.heccPboGroup,
      heccR
    );
    return saveVerifyGroup;
  }
  static getHeccNooGroup() {
    const {
      heccR
    } = HeccConfigGet.getHeccRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      HeccConfig.heccConfigCache,
      HeccConfigElement.heccNooGroup,
      heccR
    );
    return saveVerifyGroup;
  }
}
class HeccConfig {
  /* static heccRoot = HeccElement.heccRoot;
  static heccPboGroup = HeccElement.heccPboGroup;
  static heccNooGroup = HeccElement.heccNooGroup; */
  /*  */
  /* static heccAppend(getSaveElement, heccFragment) {
    HeccElement.heccAppend(getSaveElement, heccFragment);
  } */
  static heccConfigCache = {};
  /* -------------------------------------------------- */
  static heccGenerate() {
    HeccConfigManager.heccGenerate();
  }
  /* -------------------------------------------------- */
  static getHeccRoot() {
    return HeccConfigGet.getHeccRoot();
  }
  static getHeccPboGroup() {
    return HeccConfigGet.getHeccPboGroup();
  }
  static getHeccNooGroup() {
    return HeccConfigGet.getHeccNooGroup();
  }
}
export {
  HeccConfig
};
/* DESCRIPTION
 * PBO: Progress Bar Object
 * NOO: Navigation Overlay Object
 * GRO: Geometric Rendering Object
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */