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
  static dpmsc = [
    {
      elementId: "dpmsc",
      cacheId: "dpmsc",
      query: {
        querySelector: ".dpmsc",
        queryType: "single"
      }
    }
  ];
  static dpmscContent = [
    {
      elementId: "dpmscContentList",
      query: {
        querySelector: ".dpmsc-content-list",
        queryType: "single"
      }
    },
    {
      elementId: "dpmscContentItem",
      query: {
        querySelector: ".dpmsc-content-item",
        queryType: "all"
      }
    }
  ];
  static dpmscTitle = [
    {
      elementId: "dpmscTitleContainer",
      query: {
        querySelector: ".dpmsc-title-container",
        queryType: "all"
      }
    },
    {
      elementId: "dpmscTitleHeading",
      query: {
        querySelector: ".dpmsc-title-heading",
        queryType: "all"
      }
    },
    {
      elementId: "dpmscTitleLink",
      query: {
        querySelector: ".dpmsc-title-link",
        queryType: "all"
      }
    },
    {
      elementId: "dpmscTitleText",
      query: {
        querySelector: ".dpmsc-title-text",
        queryType: "all"
      }
    }
  ];
  static dpmscViewer = [
    {
      elementId: "dpmscViewerList",
      query: {
        querySelector: ".dpmsc-viewer-list",
        queryType: "all"
      }
    },
    {
      elementId: "dpmscViewerItem",
      query: {
        querySelector: ".dpmsc-viewer-item",
        queryType: "all"
      }
    },
    {
      elementId: "dpmscViewerName",
      query: {
        querySelector: ".dpmsc-viewer-name",
        queryType: "all"
      }
    },
    {
      elementId: "dpmscViewerContainer",
      query: {
        querySelector: ".dpmsc-viewer-container",
        queryType: "all"
      }
    },
    {
      elementId: "dpmscViewer",
      query: {
        querySelector: ".dpmsc-viewer",
        queryType: "all"
      }
    }
  ];
  /*  */
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
  static getDpmsc() {
    const dpmscElement = document.querySelector(".dpmsc");
    return dpmscElement;
  }
  static getDpmscContent() {
    const { dpmsc } = DpmscConfigGet.getDpmsc();

    return 0;
  }
  static getDpmscViewer() {
    return 0;
  }
  /*  */
  static getDpmscRoot() {
    const getGroup = BlfUtil.getElementCache(
      DpmscConfig.dpmscConfigCache,
      DpmscConfigElement.dpmscRoot
    );
    this.getDpmsc();
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
  static getDpmscPbGroup(pIndex) {
    const {
      dpmscZ
    } = DpmscConfigGet.getDpmscZbGroup();
    const getGroup = BlfUtil.getElementCache(
      DpmscConfig.dpmscConfigCache,
      DpmscConfigElement.dpmscPbGroup,
      dpmscZ[pIndex]
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
  static getDpmscPbGroup(pIndex) {
    return DpmscConfigGet.getDpmscPbGroup(pIndex);
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