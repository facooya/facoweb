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
  /* static getNplcGroup() {
    return NplcGet.getNplcGroup();
  } */
  static getNplcRoot() {
    return NplcGet.getNplcRoot();
  }
}
class NplcController {
  static process() {
    NplcManager.init();
  }
  static processOnLoad() {
    /* NplcManager.loadEvent(); */
    NplcManager.initOnLoad();
    /* NplcManager.addEvent(); */
    NplcManager.event(true);
  }
  static processOnResize() {
    /* NplcManager.removeEvent();
    NplcManager.addEvent(); */
    NplcManager.initOnResize();
    NplcManager.event(false);
    NplcManager.event(true);
  }
}
class NplcManager {
  static init() {
    /* NPTLC */
    /* const nptlcR = document.querySelector(".nptlc-r-liptp");
    const nptlcExaTno = nptlcR.querySelectorAll(".nptlc-e-tno"); */
    const {
      nptlcExaTno
    } = NplcGet.getNptlcTnoGroup();
    /* Set Index */
    for (let i = 0; i < nptlcExaTno.length; i++) {
      nptlcExaTno[i].index = i;
    }
    /* Tab */
    /* NplcUtility.verifyTab(); */
    /* NplcVerify.verifyTab(); */
  }
  static initOnLoad() {
    window.addEventListener("hashchange", NplcHandler.nplcOnHashChange);
    NplcHandler.nplcOnHashChange();
  }
  static initOnResize() {

  }
  /* static loadEvent() {
    /* Window 
    window.addEventListener("hashchange", NplcHandler.onHashChange);
  } */
  static event(isActive) {
    const {
      nptlcExaTno
    } = NplcGet.getNptlcTnoGroup();
    /*  */
    /* for (eti) eventTypeIndex */
    const eventType = ["mouseenter", "mouseleave"];
    /*  */
    let eventListenerType = "";
    let displayTypeState = null;
    if (isActive) {
      eventListenerType = "addEventListener";
      displayTypeState = FwaConfig.currentDisplayType;
    } else {
      eventListenerType = "removeEventListener";
      displayTypeState = FwaConfig.previousDisplayType;
    }
    /*  */
    if (displayTypeState === 3) {
      for (let i = 0; i < nptlcExaTno.length; i++) {
        /* ETI: Event Type Index */
        for (let eti = 0; eti < eventType.length; eti++) {
          nptlcExaTno[i][eventListenerType](
            eventType[eti],
            NplcHandler.ddtNptlcExaTno
          );
        }
        /* nptlcExaTno[i][eventListenerType](
          "mouseenter",
          NplcHandler.ddtNptlcExaTno
        );
        nptlcExaTno[i][eventListenerType](
          "mouseleave",
          NplcHandler.ddtNptlcExaTno
        ); */
      }
    }
  }
  /* static addEvent() {
    /* const nptlcR = document.querySelector(".nptlc-r-liptp");
    const nptlcExaTno = nptlcR.querySelectorAll(".nptlc-e-tno"); 
    const {
      nptlcExaTno
    } = NplcGet.getNptlcTnoGroup();
    /* NptlcTaraTnoTitle 
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
  } */
}
class NplcHandler {
  static nplcOnHashChange() {
    /* Tab */
    const {
      nptlcExaTno
    } = NplcGet.getNptlcTnoGroup();
    /*  */
    let tabData = null;
    let hashData = window.location.hash.slice(1);
    if (nptlcExaTno[hashData] === undefined) {
      tabData = 0;
      hashData = "#" + tabData.toString();
      window.location.hash = hashData;
    } else {
      tabData = parseInt(hashData);
    }
    /*  */
    NplcSet.setTab(tabData);
  }
  static ddtNptlcExaTno(eventData) {
    /* const eCurrentTarget = event.currentTarget;
    const eType = event.type;
    const eIndex = eCurrentTarget.index; */
    const {
      eventType,
      eventIndex
    } = FwcAccessor.getEventData(eventData);
    const {
      nptlcTeraTnoTitle
    } = NplcGet.getNptlcTnoGroup();
    /* const nptlcR = document.querySelector(".nptlc-r-liptp");
    const nptlcTeraTnoTitleTB = eCurrentTarget.querySelector(".nptlc-t-tno-title"); */
    let type = "";
    if (eventType === "mouseenter") {
      type = "add";
    } else if (eventType === "mouseleave") {
      if (window.location.hash.slice(1) !== eventIndex.toString()) {
        type = "remove";
      }
    }
    /*  */
    if (type) {
      nptlcTeraTnoTitle[eventIndex].classList[type]("cl-ddt-nptlc-e-tno-handler");
    }
    /* switch (eType) {
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
    } */
  }
}
/* class NplcUtility {
  static verifyTab() {
    /* NPTLC 
    const nptlcR = document.querySelector(".nptlc-r-liptp");
    const nptlcExaTno = nptlcR.querySelectorAll(".nptlc-e-tno");
    /* ----- 
    if (nptlcExaTno[window.location.hash.slice(1)] === undefined) {
      /* Operation defense 
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
    /* NPTLC 
    const nptlcR = document.querySelector(".nptlc-r-liptp");
    const nptlcTeraTnoTitle = nptlcR.querySelectorAll(".nptlc-t-tno-title");
    const nptlcTeraTnoSgro = nptlcR.querySelectorAll(".nptlc-t-tno-sgro");
    /* NPCLC 
    const npclcR = document.querySelector(".npclc-r-naptp");
    const npclcY = npclcR.querySelectorAll(".npclc-y");
    /* Final defense 
    if (nptlcTeraTnoTitle[tab] === undefined) {
      console.log("Final Defense");
      return;
    }
    /* Set Tab 
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
} */
/* class NplcVerify {
  static verifyTab() { */
    /* NPTLC */
    /* const nptlcR = document.querySelector(".nptlc-r-liptp");
    const nptlcExaTno = nptlcR.querySelectorAll(".nptlc-e-tno"); */
    /* const {
      nptlcExaTno
    } = NplcGet.getNptlcTnoGroup(); */
    /*  */
    /* let tabData = null;
    let hashData = window.location.hash.slice(1);
    if (nptlcExaTno[hashData] === undefined) {
      tabData = 0;
      hashData = "#" + tabData.toString();
      window.location.hash = hashData;
    } else {
      tabData = parseInt(hashData);
    } */
    /*  */
    /* NplcSet.setTab(tabData); */
    /* ----- */
    /* if (nptlcExaTno[window.location.hash.slice(1)] === undefined) {
      /* Operation defense 
      console.log("Operation defense: Hash");
      const tabData = 0;
      const hashData = "#" + tabData.toString();
      window.location.hash = hashData;
      NplcSet.setTab(tabData);
    } else {
      const tabData = parseInt(window.location.hash.slice(1));
      NplcSet.setTab(tabData);
    } */
  /* }
} */
class NplcSet {
  static setTab(tab) {
    /* NPTLC */
    /* const nptlcR = document.querySelector(".nptlc-r-liptp");
    const nptlcTeraTnoTitle = nptlcR.querySelectorAll(".nptlc-t-tno-title");
    const nptlcTeraTnoSgro = nptlcR.querySelectorAll(".nptlc-t-tno-sgro"); */
    const {
      nptlcTeraTnoTitle,
      nptlcTeraTnoSgro
    } = NplcGet.getNptlcTnoGroup();
    /* NPCLC */
    /* const npclcR = document.querySelector(".npclc-r-naptp");
    const npclcY = npclcR.querySelectorAll(".npclc-y"); */
    const {
      npclcY
    } = NplcGet.getNpclcGroup();
    /* Final defense */
    /* if (nptlcTeraTnoTitle[tab] === undefined) {
      tab = 0;
      console.log("Final Defense");
      return;
    } */
    /* Set Tab */
    /* for (let i = 0; i < nptlcTeraTnoTitle.length; i++) {
      if (tab === i) {
        nptlcTeraTnoTitle[i].style.color = "#000000";
        nptlcTeraTnoSgro[i].style.borderColor = "#000000";
        npclcY[i].style.display = "grid";
      } else {
        nptlcTeraTnoTitle[i].style.color = "";
        nptlcTeraTnoSgro[i].style.borderColor = "";
        npclcY[i].style.display = "";
      }
    } */
    for (let i = 0; i < nptlcTeraTnoTitle.length; i++) {
      nptlcTeraTnoTitle[i].classList.remove(
        "cl-nplc-on-hash-change-handler",
        "cl-ddt-nptlc-e-tno-handler"
      );
      nptlcTeraTnoSgro[i].classList.remove("cl-nplc-on-hash-change-handler");
      npclcY[i].classList.remove("cl-nplc-on-hash-change-handler");
    }
    nptlcTeraTnoTitle[tab].classList.add("cl-nplc-on-hash-change-handler");
    nptlcTeraTnoSgro[tab].classList.add("cl-nplc-on-hash-change-handler");
    npclcY[tab].classList.add("cl-nplc-on-hash-change-handler");
  }
}
class NplcGet {
  /* static getNplcGroup() {
    const nplcR = document.querySelector(".nplc-r-heptg");
    return {
      nplcR
    };
  } */
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
  static getNptlcRoot() {
    const nptlcRoot = [
      {
        id: "nptlcR",
        selector: ".nptlc-r-liptp"
      }
    ];
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      NplcAccessor.nplcCache,
      nptlcRoot
    );
    return saveVerifyGroup;
  }
  static getNpclcRoot() {
    const npclcRoot = [
      {
        id: "npclcR",
        selector: ".npclc-r-naptp"
      }
    ];
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      NplcAccessor.nplcCache,
      npclcRoot
    );
    return saveVerifyGroup;
  }
  static getNptlcBeptpGroup() {
    const nptlcBeptpGroup = [
      {
        id: "nptlcYottaBeptp",
        selector: ".nptlc-y-beptp"
      },
      {
        id: "nptlcZettaBeptpTitle",
        selector: ".nptlc-z-beptp-title"
      },
      {
        id: "nptlcZettaBeptpBgro",
        selector: ".nptlc-z-beptp-bgro"
      }
    ];
    const { nptlcR } = NplcGet.getNptlcRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      NplcAccessor.nplcCache,
      nptlcBeptpGroup,
      nptlcR
    );
    return saveVerifyGroup;
  }
  static getNptlcTnoGroup() {
    const nptlcTnoGroup = [
      {
        id: "nptlcYottaTno",
        selector: ".nptlc-y-tno"
      },
      {
        id: "nptlcZettaTno",
        selector: ".nptlc-z-tno"
      },
      {
        id: "nptlcExaTno",
        selector: ".nptlc-e-tno",
        type: "all"
      },
      {
        id: "nptlcPetaTno",
        selector: ".nptlc-p-tno",
        type: "all"
      },
      {
        id: "nptlcTeraTnoTitle",
        selector: ".nptlc-t-tno-title",
        type: "all"
      },
      {
        id: "nptlcTeraTnoSgro",
        selector: ".nptlc-t-tno-sgro",
        type: "all"
      }
    ];
    const { nptlcR } = NplcGet.getNptlcRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      NplcAccessor.nplcCache,
      nptlcTnoGroup,
      nptlcR
    );
    return saveVerifyGroup;
  }
  static getNpclcGroup() {
    const npclcGroup = [
      {
        id: "npclcY",
        selector: ".npclc-y",
        type: "all"
      },
      {
        id: "npclcZ",
        selector: ".npclc-z",
        type: "all"
      }
    ];
    const { npclcR } = NplcGet.getNpclcRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache(
      NplcAccessor.nplcCache,
      npclcGroup,
      npclcR
    );
    return saveVerifyGroup;
  }
}
export {
  NplcAccessor,
  NplcController
}
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */