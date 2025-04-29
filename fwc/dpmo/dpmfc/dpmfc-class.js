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
  static getDpmfcHandler() {
    return DpmfcHandler;
  }
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
  static resizeSensor() {
    DpmfcManager.resizeSensor();
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
    DpmfcUtil.setDpmfcExaTso();
    DpmfcUtil.setDpmfcZettaBso();
    /* ===== */
    const {
      dpmfcExaBso
    } = DpmfcConfig.getDpmfcBsoEbGroup(0);
    DpmfcConfig.dpmfcData.pageMaxIndex = Math.floor(dpmfcExaBso.length / 5);
    if (dpmfcExaBso.length % 5 === 0) {
      DpmfcConfig.dpmfcData.pageMaxIndex--;
    }
    DpmfcConfig.dpmfcPnoCloGenerate();
    /*  */
    /* DpmfcUtil.utilClDpmfcPnoClo(); */
    DpmfcUtil.clDpmfcExaPnoClo();
    DpmfcUtil.clDpmfcYottaPno();
    DpmfcUtil.clDpmfcPnoDisabled();
  }
  static resizeDisplay() {
    DpmfcUtil.resetDpmfcExaTso();
    DpmfcUtil.setDpmfcExaTso();
    DpmfcUtil.setDpmfcZettaBso();
  }
  static resizeSensor() {
    DpmfcUtil.clDpmfcYottaPno();
  }
  static event(isActive) {
    const {
      dpmfcExaTso
    } = DpmfcConfig.getDpmfcTsoEbGroup();
    const {
      dpmfcPetaTsoTlo
    } = DpmfcConfig.getDpmfcTsoTloGroup();
    const {
      dpmfcExaPnoLloFirst,
      dpmfcExaPnoLloPrevious
    } = DpmfcConfig.getDpmfcPnoLloGroup();
    const {
      dpmfcExaPnoRloNext,
      dpmfcExaPnoRloLast
    } = DpmfcConfig.getDpmfcPnoRloGroup();
    /*  */
    let displayType = BlfConfig.previousDisplayType;
    let eventListenerType = "removeEventListener";
    if (isActive) {
      displayType = BlfConfig.currentDisplayType;
      eventListenerType = "addEventListener";
    }
    /*  */
    dpmfcPetaTsoTlo[eventListenerType](
      "click",
      DpmfcHandler.dpmfcPetaTsoTlo
    );
    for (let ebi = 0; ebi < dpmfcExaTso.length; ebi++) {
      dpmfcExaTso[ebi][eventListenerType](
        "click",
        DpmfcHandler.dpmfcExaTso
      );
    }
    const {
      dpmfcExaBso
    } = DpmfcConfig.getDpmfcBsoEbGroup(0);
    DpmfcConfig.dpmfcData.pageMaxIndex = Math.floor(dpmfcExaBso.length / 5);
    if (dpmfcExaBso.length % 5 === 0) {
      DpmfcConfig.dpmfcData.pageMaxIndex--;
    }
    /* DpmfcUtil.utilDpmfcPnoCloEvent(isActive, DpmfcConfig.dpmfcData.pageMaxIndex); */
    
    /*  */
    dpmfcExaPnoLloFirst[eventListenerType](
      "click",
      DpmfcHandler.dpmfcExaPnoLloFirst
    );
    dpmfcExaPnoLloPrevious[eventListenerType](
      "click",
      DpmfcHandler.dpmfcExaPnoLloPrevious
    );
    dpmfcExaPnoRloNext[eventListenerType](
      "click",
      DpmfcHandler.dpmfcExaPnoRloNext
    );
    dpmfcExaPnoRloLast[eventListenerType](
      "click",
      DpmfcHandler.dpmfcExaPnoRloLast
    );
    /*  */
    switch (displayType) {
      case 1: {
        break;
      }
      case 2: {
        break;
      }
      case 3: {
        break;
      }
    }
  }
}
class DpmfcHandler {
  static dpmfcPetaTsoTlo(eventData) {
    const {
      eventCurrentTarget
    } = BlfUtil.getEventData(eventData);
    /*  */
    const hash = eventCurrentTarget.hash;
    const hashElement = document.querySelector(hash);
    /*  */
    history.replaceState(null, null, hash);
    hashElement.scrollIntoView();
  }
  static dpmfcExaTso(eventData) {
    const {
      eventIndex
    } = BlfUtil.getEventData(eventData);
    /*  */
    /* DpmfcConfig.dpmfcTsoTab = eventIndex;
    DpmfcConfig.dpmfcPnoPage = 0; */
    DpmfcConfig.dpmfcPnoCloRemove();
    /*  */
    DpmfcConfig.dpmfcData.tabIndex = eventIndex;
    DpmfcConfig.dpmfcData.pageIndex = 0;
    DpmfcUtil.setDpmfcExaTso();
    DpmfcUtil.setDpmfcZettaBso();
    /*  */
    const {
      dpmfcExaBso
    } = DpmfcConfig.getDpmfcBsoEbGroup(eventIndex);
    DpmfcConfig.dpmfcData.pageMaxIndex = Math.floor(dpmfcExaBso.length / 5);
    if (dpmfcExaBso.length % 5 === 0) {
      DpmfcConfig.dpmfcData.pageMaxIndex--;
    }
    /* DpmfcConfig.dpmfcPnoCloRemove(); */
    DpmfcConfig.dpmfcPnoCloGenerate();
    /* DpmfcUtil.utilDpmfcPnoCloEvent(true); */
    /*  */
    /* DpmfcUtil.utilClDpmfcPnoClo(); */
    DpmfcUtil.clDpmfcExaPnoClo();
    /*  */
    DpmfcUtil.clDpmfcYottaPno();
    DpmfcUtil.clDpmfcPnoDisabled();
  }
  static dpmfcExaPnoClo(eventData) {
    const {
      eventIndex
    } = BlfUtil.getEventData(eventData);
    /*  */
    DpmfcConfig.dpmfcData.pageIndex = eventIndex;
    DpmfcUtil.setDpmfcZettaBso();
    /*  */
    /* DpmfcUtil.utilClDpmfcPnoClo(DpmfcConfig.dpmfcData.pageIndex); */
    DpmfcUtil.clDpmfcExaPnoClo();
    DpmfcUtil.clDpmfcPnoDisabled();
  }
  static dpmfcExaPnoLloFirst() {
    if (DpmfcConfig.dpmfcData.pageIndex !== 0) {
      DpmfcConfig.dpmfcData.pageIndex = 0;
      DpmfcUtil.setDpmfcZettaBso();
      DpmfcUtil.clDpmfcExaPnoClo();
      DpmfcUtil.clDpmfcPnoDisabled();
    }
  }
  static dpmfcExaPnoLloPrevious() {
    if (DpmfcConfig.dpmfcData.pageIndex > 0) {
      DpmfcConfig.dpmfcData.pageIndex--;
      DpmfcUtil.setDpmfcZettaBso();
      DpmfcUtil.clDpmfcExaPnoClo();
      DpmfcUtil.clDpmfcPnoDisabled();
    }
  }
  static dpmfcExaPnoRloNext() {
    /* const {
      dpmfcExaBso
    } = DpmfcConfig.getDpmfcBsoEbGroup(DpmfcConfig.dpmfcData.tab); */
    /* const pageLength = Math.floor(dpmfcExaBso.length / 5); */
    /*  */
    if (DpmfcConfig.dpmfcData.pageIndex < DpmfcConfig.dpmfcData.pageMaxIndex) {
      /* DpmfcConfig.dpmfcPnoPage++; */
      DpmfcConfig.dpmfcData.pageIndex++;
      DpmfcUtil.setDpmfcZettaBso();
      DpmfcUtil.clDpmfcExaPnoClo();
      DpmfcUtil.clDpmfcPnoDisabled();
    }
  }
  static dpmfcExaPnoRloLast() {
    /* const {
      dpmfcExaBso
    } = DpmfcConfig.getDpmfcBsoEbGroup(DpmfcConfig.dpmfcData.tab); */
    /* const pageLength = Math.floor(dpmfcExaBso.length / 5);
    DpmfcConfig.dpmfcPnoPage = pageLength; */
    if (DpmfcConfig.dpmfcData.pageIndex !== DpmfcConfig.dpmfcData.pageMaxIndex) {
      DpmfcConfig.dpmfcData.pageIndex = DpmfcConfig.dpmfcData.pageMaxIndex;
      DpmfcUtil.setDpmfcZettaBso();
      DpmfcUtil.clDpmfcExaPnoClo();
      DpmfcUtil.clDpmfcPnoDisabled();
    }
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