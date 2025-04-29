/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  BlfUtil,
  BlfConfig,
  DpmfcConfig,
  DpmfcUtil
} from "../../fwc-hub.js";
/*  */
class DpmfcAccessor {

}
class DpmfcController {
  static init() {
    DpmfcManager.init();
  }
  static load() {
    DpmfcManager.load();
    DpmfcManager.event(true);
  }
  static resizeDisplay() {
    DpmfcManager.resizeDisplay();
    DpmfcManager.event(false);
    DpmfcManager.event(true);
  }
}
class DpmfcManager {
  static init() {
    const {
      dpmfcExaTso
    } = DpmfcConfig.getDpmfcTsoEbGroup();
    for (let ebi = 0; ebi < dpmfcExaTso.length; ebi++) {
      dpmfcExaTso[ebi].index = ebi;
    }
  }
  static load() {
    DpmfcUtil.setDpmfcExaTso(0);
    DpmfcUtil.setDpmfcZettaBso();
    /* window.addEventListener("hashchange", DpmfcHandler.windowOnHashChange); */
  }
  static resizeDisplay() {
    DpmfcUtil.resetDpmfcExaTso(BlfConfig.previousDisplayType);
    DpmfcUtil.setDpmfcExaTso(0);
    DpmfcUtil.setDpmfcZettaBso();
  }
  static event(isActive) {
    const {
      dpmfcExaTso
    } = DpmfcConfig.getDpmfcTsoEbGroup();
    const {
      dpmfcZettaBscoPrev,
      dpmfcZettaBscoNext
    } = DpmfcConfig.getDpmfcBscoGroup();
    /*  */
    let displayType = BlfConfig.previousDisplayType;
    let eventListenerType = "removeEventListener";
    if (isActive) {
      displayType = BlfConfig.currentDisplayType;
      eventListenerType = "addEventListener";
    }
    /*  */
    switch (displayType) {
      case 1: {
        const {
          dpmfcPetaTsoTlo
        } = DpmfcConfig.getDpmfcTsoTloGroup();
        dpmfcPetaTsoTlo[eventListenerType](
          "click",
          DpmfcHandler.mdtDpmfcPetaTsoTlo
        );
        for (let ebi = 0; ebi < dpmfcExaTso.length; ebi++) {
          dpmfcExaTso[ebi][eventListenerType](
            "click",
            DpmfcHandler.mdtDpmfcExaTso
          );
        }
        dpmfcZettaBscoPrev[eventListenerType](
          "click",
          DpmfcHandler.dpmfcZettaBscoPrev
        );
        dpmfcZettaBscoNext[eventListenerType](
          "click",
          DpmfcHandler.dpmfcZettaBscoNext
        );
        /*  */
        /* const test0 = document.querySelector(".test0");
        const test1 = document.querySelector(".test1");
        const test2 = document.querySelector(".test2");
        const test3 = document.querySelector(".test3");
        test0[eventListenerType](
          "click",
          DpmfcHandler.testHandler
        );
        test1[eventListenerType](
          "click",
          DpmfcHandler.testHandler
        );
        test2[eventListenerType](
          "click",
          DpmfcHandler.testHandler
        );
        test3[eventListenerType](
          "click",
          DpmfcHandler.testHandler
        ); */
        /*  */
        break;
      }
      case 2: {
        for (let ebi = 0; ebi < dpmfcExaTso.length; ebi++) {
          dpmfcExaTso[ebi][eventListenerType](
            "click",
            DpmfcHandler.tdtDpmfcExaTso
          );
        }
        break;
      }
      case 3: {
        for (let ebi = 0; ebi < dpmfcExaTso.length; ebi++) {
          dpmfcExaTso[ebi][eventListenerType](
            "click",
            DpmfcHandler.ddtDpmfcExaTso
          );
        }
        break;
      }
    }
  }
}
class DpmfcHandler {
  /* static testHandler(event) {
    const hash = event.currentTarget.hash;
    const hashTarget = document.querySelector(hash);
    history.replaceState(null, null, hash);
    hashTarget.scrollIntoView();
  } */
  /* static windowOnHashChange() {
    console.log("hash");
    history.replaceState(null, null, window.location.hash); */
    /* window.scrollTo({top: 64}); */
    /* !!!!! v1.1.21a-5 [test] (hash back) !!!!! */
    /* const hash = window.location.hash; */
    /* window.location.hash = target; */
    /* window.location.hash = "#developer-note"; */
    /* history.replaceState(null, null, window.location.hash); */
  /* } */
  static mdtDpmfcPetaTsoTlo(eventData) {
    const {
      eventCurrentTarget
    } = BlfUtil.getEventData(eventData);
    /*  */
    const hash = eventCurrentTarget.hash;
    const hashElement = document.querySelector(hash);
    history.replaceState(null, null, hash);
    hashElement.scrollIntoView();
  }
  /*  */
  static mdtDpmfcExaTso(eventData) {
    const {
      eventIndex
    } = BlfUtil.getEventData(eventData);
    /*  */
    DpmfcUtil.setDpmfcExaTso(eventIndex);
    /*  */
    DpmfcConfig.dpmfcTsoTab = eventIndex;
    DpmfcConfig.dpmfcBscoPage = 0;
    DpmfcUtil.setDpmfcZettaBso();
  }
  static tdtDpmfcExaTso(eventData) {
    const {
      eventIndex
    } = BlfUtil.getEventData(eventData);
    DpmfcUtil.setDpmfcExaTso(eventIndex);
    DpmfcConfig.dpmfcTsoTab = eventIndex;
  }
  static ddtDpmfcExaTso(eventData) {
    const {
      eventIndex
    } = BlfUtil.getEventData(eventData);
    DpmfcUtil.setDpmfcExaTso(eventIndex);
    DpmfcConfig.dpmfcTsoTab = eventIndex;
  }
  static dpmfcZettaBscoPrev() {
    if (DpmfcConfig.dpmfcBscoPage > 0) {
      DpmfcConfig.dpmfcBscoPage--;
      /*  */
      DpmfcUtil.setDpmfcZettaBso();
    }
  }
  static dpmfcZettaBscoNext() {
    const {
      dpmfcExaBso
    } = DpmfcConfig.getDpmfcBsoEbGroup(DpmfcConfig.dpmfcTsoTab);
    const pageLength = (dpmfcExaBso.length / 5) - 1;
    /*  */
    if (pageLength > DpmfcConfig.dpmfcBscoPage) {
      DpmfcConfig.dpmfcBscoPage++;
    }
    DpmfcUtil.setDpmfcZettaBso();
  }
}
export {
  DpmfcAccessor,
  DpmfcController
};
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */