/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  FwaConfig
} from "../../fwa/fwa-config.js";
import {
  FwcAccessor
} from "../fwc-hub.js";

class NplcAccessor {
  static nplcCache = {};
  static getNplcGroup() {
    return NplcGet.getNplcGroup();
  }
  static getNplcRoot() {
    return NplcGet.getNplcRoot();
  }
}
class NplcController {
  static process() {
    NplcManager.init();
  }
  static processOnLoad() {
    NplcManager.loadEvent();
    NplcManager.addEvent();
  }
  static processOnResize() {
    NplcManager.removeEvent();
    NplcManager.addEvent();
  }
}
class NplcManager {
  static init() {
    /* NPTLC */
    const nptlcR = document.querySelector(".nptlc-r-liptp");
    const nptlcExaTno = nptlcR.querySelectorAll(".nptlc-e-tno");
    /* Set Index */
    for (let i = 0; i < nptlcExaTno.length; i++) {
      nptlcExaTno[i].index = i;
    }
    /* Tab */
    NplcUtility.verifyTab();
  }
  static loadEvent() {
    /* Window */
    window.addEventListener("hashchange", NplcHandler.onHashChange);
  }
  static addEvent() {
    const nptlcR = document.querySelector(".nptlc-r-liptp");
    const nptlcExaTno = nptlcR.querySelectorAll(".nptlc-e-tno");
    /* NptlcTaraTnoTitle */
    if (FwaConfig.currentDisplayType === 3) {
      for (let i = 0; i < nptlcExaTno.length; i++) {
        nptlcExaTno[i].addEventListener(
          "mouseenter",
          NplcHandler.ddtNptlcExaTno
        );
        nptlcExaTno[i].addEventListener(
          "mouseleave",
          NplcHandler.ddtNptlcExaTno
        );
      }
    }
  }
  static removeEvent() {
    const nptlcR = document.querySelector(".nptlc-r-liptp");
    const nptlcExaTno = nptlcR.querySelectorAll(".nptlc-e-tno");
    if (FwaConfig.previousDisplayType === 3) {
      for (let i = 0; i < nptlcExaTno.length; i++) {
        nptlcExaTno[i].removeEventListener(
          "mouseenter",
          NplcHandler.ddtNptlcExaTno
        );
        nptlcExaTno[i].removeEventListener(
          "mouseleave",
          NplcHandler.ddtNptlcExaTno
        );
      }
    }
  }
}
class NplcHandler {
  static onHashChange() {
    /* Tab */
    NplcUtility.verifyTab();
  }
  static ddtNptlcExaTno(event) {
    const eCurrentTarget = event.currentTarget;
    const eType = event.type;
    const eIndex = eCurrentTarget.index;

    const nptlcR = document.querySelector(".nptlc-r-liptp");
    const nptlcTeraTnoTitleTB = eCurrentTarget.querySelector(".nptlc-t-tno-title");

    switch (eType) {
      case "mouseenter": {
        nptlcTeraTnoTitleTB.style.color = "#000000";
        break;
      }
      case "mouseleave": {
        if (window.location.hash.slice(1) !== eIndex.toString()) {
          nptlcTeraTnoTitleTB.style.color = "";
        }
        break;
      }
    }
  }
}
class NplcUtility {
  static verifyTab() {
    /* NPTLC */
    const nptlcR = document.querySelector(".nptlc-r-liptp");
    const nptlcExaTno = nptlcR.querySelectorAll(".nptlc-e-tno");
    /* ----- */
    if (nptlcExaTno[window.location.hash.slice(1)] === undefined) {
      /* Operation defense */
      console.log("Operation defense: Hash");
      const tabData = 0;
      const hashData = "#" + tabData.toString();
      window.location.hash = hashData;
      NplcUtility.setTab(tabData);
    } else {
      const tabData = parseInt(window.location.hash.slice(1));
      NplcUtility.setTab(tabData);
    }
  }
  static setTab(tab) {
    /* NPTLC */
    const nptlcR = document.querySelector(".nptlc-r-liptp");
    const nptlcTeraTnoTitle = nptlcR.querySelectorAll(".nptlc-t-tno-title");
    const nptlcTeraTnoSgro = nptlcR.querySelectorAll(".nptlc-t-tno-sgro");
    /* NPCLC */
    const npclcR = document.querySelector(".npclc-r-naptp");
    const npclcY = npclcR.querySelectorAll(".npclc-y");
    /* Final defense */
    if (nptlcTeraTnoTitle[tab] === undefined) {
      console.log("Final Defense");
      return;
    }
    /* Set Tab */
    for (let i = 0; i < nptlcTeraTnoTitle.length; i++) {
      if (tab === i) {
        nptlcTeraTnoTitle[i].style.color = "#000000";
        nptlcTeraTnoSgro[i].style.borderColor = "#000000";
        npclcY[i].style.display = "grid";
      } else {
        nptlcTeraTnoTitle[i].style.color = "";
        nptlcTeraTnoSgro[i].style.borderColor = "";
        npclcY[i].style.display = "";
      }
    }
  }
}
class NplcGet {
  static getNplcGroup() {
    const nplcR = document.querySelector(".nplc-r-heptg");
    return {
      nplcR
    };
  }
  static getNplcRoot() {
    const nplcRoot = [
      {
        id: "nplcR",
        selector: ".nplc-r-heptg"
      }
    ];
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      NplcAccessor.nplcCache,
      nplcRoot
    );
    return saveVerifyGroup;
  }
}
export {
  NplcAccessor,
  NplcController
}
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */