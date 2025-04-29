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
    /* const {
      dpmfcExaPnoClo
    } = DpmfcConfig.getDpmfcPnoCloDynamic(); */
    for (let ebi = 0; ebi < dpmfcExaTso.length; ebi++) {
      dpmfcExaTso[ebi].index = ebi;
    }
    /* for (let ebi = 0; ebi < dpmfcExaPnoClo.length; ebi++) {
      dpmfcExaPnoClo[ebi].index = ebi;
    } */
  }
  static load() {
    DpmfcUtil.setDpmfcExaTso(0);
    DpmfcUtil.setDpmfcZettaBso();
    /* DpmfcUtil.setDpmfcExaPnoClo(0); */
    /*  */
    /* const {
      dpmfcExaPnoClo,
      dpmfcPetaPnoCloText
    } = DpmfcConfig.getDpmfcPnoCloGroup();
    const clData = "cl-dpmfc-e-pno-clo-handler";
    dpmfcExaPnoClo[0].classList.add(clData);
    dpmfcPetaPnoCloText[0].classList.add(clData); */
    /* ===== */
    const {
      dpmfcExaBso
    } = DpmfcConfig.getDpmfcBsoEbGroup(0);
    const pageMaxIndex = Math.floor(dpmfcExaBso.length / 5);
    DpmfcConfig.dpmfcPnoCloGenerate(pageMaxIndex);
    /*  */
    DpmfcUtil.utilClDpmfcPnoClo(0);
    DpmfcUtil.clDpmfcYottaPno();
    DpmfcUtil.clDpmfcPnoDisabled();
  }
  static resizeDisplay() {
    DpmfcUtil.resetDpmfcExaTso(BlfConfig.previousDisplayType);
    DpmfcUtil.setDpmfcExaTso(0);
    DpmfcUtil.setDpmfcZettaBso();
    /* DpmfcUtil.setDpmfcExaPnoClo(0); */
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
    /* const {
      dpmfcExaPnoClo
    } = DpmfcConfig.getDpmfcPnoCloGroup(); */
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
    /* !!!!! */
    const {
      dpmfcExaBso
    } = DpmfcConfig.getDpmfcBsoEbGroup(0);
    const pageMaxIndex = Math.floor(dpmfcExaBso.length / 5);
    DpmfcUtil.utilDpmfcPnoCloEvent(isActive, pageMaxIndex);
    /*  */
    /* for (let ebi = 0; ebi < dpmfcExaPnoClo.length; ebi++) {
      dpmfcExaPnoClo[ebi][eventListenerType](
        "click",
        DpmfcHandler.dpmfcExaPnoClo
      );
    } */
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
    DpmfcUtil.setDpmfcExaTso(eventIndex);
    /*  */
    DpmfcConfig.dpmfcTsoTab = eventIndex;
    DpmfcConfig.dpmfcPnoPage = 0;
    DpmfcUtil.setDpmfcZettaBso();
    /* !!!!! */
    const {
      dpmfcExaBso
    } = DpmfcConfig.getDpmfcBsoEbGroup(DpmfcConfig.dpmfcTsoTab);
    const pageMaxIndex = Math.floor(dpmfcExaBso.length / 5);
    DpmfcConfig.dpmfcPnoCloRemove();
    DpmfcConfig.dpmfcPnoCloGenerate(pageMaxIndex);
    DpmfcUtil.utilDpmfcPnoCloEvent(true, pageMaxIndex);
    /*  */
    DpmfcUtil.utilClDpmfcPnoClo(0);
    /*  */
    DpmfcUtil.clDpmfcYottaPno();
    DpmfcUtil.clDpmfcPnoDisabled();
  }
  static dpmfcExaPnoClo(eventData) {
    const {
      eventIndex
    } = BlfUtil.getEventData(eventData);
    const {
      dpmfcExaBso
    } = DpmfcConfig.getDpmfcBsoEbGroup(DpmfcConfig.dpmfcTsoTab);
    /*  */
    /* const {
      dpmfcExaPnoClo,
      dpmfcPetaPnoCloText
    } = DpmfcConfig.getDpmfcPnoCloGroup(); */
    /* const pageMaxIndex = Math.floor(dpmfcExaBso.length / 5); */
    /* console.log(eventIndex); */
    /* const dpmfcExaPnoClo = document.querySelectorAll(".dpmfc-e-pno-clo");
    const dpmfcPetaPnoCloText = document.querySelectorAll(".dpmfc-p-pno-clo-text"); */
    /*  */
    DpmfcConfig.dpmfcPnoPage = eventIndex;
    DpmfcUtil.setDpmfcZettaBso();
    /*  */
    DpmfcUtil.utilClDpmfcPnoClo(eventIndex);
    DpmfcUtil.clDpmfcPnoDisabled();
  }
  static dpmfcExaPnoLloFirst() {
    if (DpmfcConfig.dpmfcPnoPage !== 0) {
      DpmfcConfig.dpmfcPnoPage = 0;
      DpmfcUtil.setDpmfcZettaBso();
      DpmfcUtil.utilClDpmfcPnoClo(0);
      DpmfcUtil.clDpmfcPnoDisabled();
    }
  }
  static dpmfcExaPnoLloPrevious() {
    if (DpmfcConfig.dpmfcPnoPage > 0) {
      DpmfcConfig.dpmfcPnoPage--;
      DpmfcUtil.setDpmfcZettaBso();
      DpmfcUtil.utilClDpmfcPnoClo(DpmfcConfig.dpmfcPnoPage);
      DpmfcUtil.clDpmfcPnoDisabled();
    }
  }
  static dpmfcExaPnoRloNext() {
    const {
      dpmfcExaBso
    } = DpmfcConfig.getDpmfcBsoEbGroup(DpmfcConfig.dpmfcTsoTab);
    const pageLength = Math.floor(dpmfcExaBso.length / 5);
    /*  */
    if (pageLength > DpmfcConfig.dpmfcPnoPage) {
      DpmfcConfig.dpmfcPnoPage++;
      DpmfcUtil.setDpmfcZettaBso();
      DpmfcUtil.utilClDpmfcPnoClo(DpmfcConfig.dpmfcPnoPage);
      DpmfcUtil.clDpmfcPnoDisabled();
    }
  }
  static dpmfcExaPnoRloLast() {
    const {
      dpmfcExaBso
    } = DpmfcConfig.getDpmfcBsoEbGroup(DpmfcConfig.dpmfcTsoTab);
    const pageLength = Math.floor(dpmfcExaBso.length / 5);
    DpmfcConfig.dpmfcPnoPage = pageLength;
    DpmfcUtil.setDpmfcZettaBso();
    DpmfcUtil.utilClDpmfcPnoClo(DpmfcConfig.dpmfcPnoPage);
    DpmfcUtil.clDpmfcPnoDisabled();
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