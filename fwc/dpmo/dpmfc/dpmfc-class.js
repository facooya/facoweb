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
  static resizeSensor() {
    DpmfcManager.resizeSensor();
  }
}
class DpmfcManager {
  static init() {
    const {
      dpmfcExaTso
    } = DpmfcConfig.getDpmfcTsoEbGroup();
    const {
      dpmfcExaPnoClo
    } = DpmfcConfig.getDpmfcPnoCloGroup();
    for (let ebi = 0; ebi < dpmfcExaTso.length; ebi++) {
      dpmfcExaTso[ebi].index = ebi;
    }
    for (let ebi = 0; ebi < dpmfcExaPnoClo.length; ebi++) {
      dpmfcExaPnoClo[ebi].index = ebi;
    }
  }
  static load() {
    DpmfcUtil.setDpmfcExaTso(0);
    DpmfcUtil.setDpmfcZettaBso();
    /* DpmfcUtil.setDpmfcExaPnoClo(0); */
    DpmfcUtil.setPageData();
    /*  */
    const {
      dpmfcExaPnoClo,
      dpmfcPetaPnoCloText
    } = DpmfcConfig.getDpmfcPnoCloGroup();
    const clData = "cl-dpmfc-e-pno-clo-handler";
    dpmfcExaPnoClo[0].classList.add(clData);
    dpmfcPetaPnoCloText[0].classList.add(clData);
  }
  static resizeDisplay() {
    DpmfcUtil.resetDpmfcExaTso(BlfConfig.previousDisplayType);
    DpmfcUtil.setDpmfcExaTso(0);
    DpmfcUtil.setDpmfcZettaBso();
    /* DpmfcUtil.setDpmfcExaPnoClo(0); */
  }
  static resizeSensor() {
    const {
      dpmfcYottaPno
    } = DpmfcConfig.getDpmfcPnoGroup();
    const dpmfcYottaPnoRect = dpmfcYottaPno.getBoundingClientRect();
    /* console.log(dpmfcYottaPnoRect.width); */
  }
  static event(isActive) {
    const {
      dpmfcExaTso
    } = DpmfcConfig.getDpmfcTsoEbGroup();
    /* const {
      dpmfcZettaBscoPrev,
      dpmfcZettaBscoNext
    } = DpmfcConfig.getDpmfcBscoGroup(); */
    const {
      dpmfcPetaTsoTlo
    } = DpmfcConfig.getDpmfcTsoTloGroup();
    const {
      dpmfcExaPnoClo
    } = DpmfcConfig.getDpmfcPnoCloGroup();
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
    /*  */
    for (let ebi = 0; ebi < dpmfcExaPnoClo.length; ebi++) {
      dpmfcExaPnoClo[ebi][eventListenerType](
        "click",
        DpmfcHandler.dpmfcExaPnoClo
      );
    }
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
    /*  */
    switch (displayType) {
      case 1: {
        
        /* dpmfcZettaBscoPrev[eventListenerType](
          "click",
          DpmfcHandler.dpmfcZettaBscoPrev
        );
        dpmfcZettaBscoNext[eventListenerType](
          "click",
          DpmfcHandler.dpmfcZettaBscoNext
        ); */
        break;
      }
      case 2: {
      /*   for (let ebi = 0; ebi < dpmfcExaTso.length; ebi++) {
          dpmfcExaTso[ebi][eventListenerType](
            "click",
            DpmfcHandler.tdtDpmfcExaTso
          );
        } */
        break;
      }
      case 3: {
        /* for (let ebi = 0; ebi < dpmfcExaTso.length; ebi++) {
          dpmfcExaTso[ebi][eventListenerType](
            "click",
            DpmfcHandler.ddtDpmfcExaTso
          );
        } */
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
    /* const {
      dpmfcExaBso
    } = DpmfcConfig.getDpmfcBsoEbGroup(eventIndex);
    const {
      dpmfcExaPnoClo,
      dpmfcPetaPnoCloText
    } = DpmfcConfig.getDpmfcPnoCloGroup(); */
    /*  */
    DpmfcUtil.setDpmfcExaTso(eventIndex);
    /*  */
    DpmfcConfig.dpmfcTsoTab = eventIndex;
    /* DpmfcConfig.dpmfcBscoPage = 0; */
    DpmfcConfig.dpmfcPnoPage = 0;
    DpmfcUtil.setDpmfcZettaBso();
    /* DpmfcUtil.setDpmfcExaPnoClo(eventIndex); */
    DpmfcUtil.setPageData();
    /*  */
    /* const pageLength = Math.floor(dpmfcExaBso.length / 5);
    const displayLength = (pageLength + 1).toString();
    const lastIndex = dpmfcExaPnoClo.length - 1;

    dpmfcPetaPnoCloText[0].textContent = "1";
    dpmfcPetaPnoCloText[0].dataset.page = 0;
    /*  
    dpmfcPetaPnoCloText[1].textContent = "2";
    dpmfcPetaPnoCloText[1].dataset.page = 1;
    /*  
    dpmfcPetaPnoCloText[lastIndex].textContent = displayLength;
    dpmfcPetaPnoCloText[lastIndex].dataset.page = pageLength; */
  }
  static dpmfcExaPnoClo(eventData) {
    const {
      eventIndex
    } = BlfUtil.getEventData(eventData);
    const {
      dpmfcExaBso
    } = DpmfcConfig.getDpmfcBsoEbGroup(DpmfcConfig.dpmfcTsoTab);
    /*  */
    const {
      dpmfcExaPnoClo,
      dpmfcPetaPnoCloText
    } = DpmfcConfig.getDpmfcPnoCloGroup();
    /* const pageLength = Math.floor(dpmfcExaBso.length / 5); */
    const clData = "cl-dpmfc-e-pno-clo-handler";
    const pageMaxIndex = Math.floor(dpmfcExaBso.length / 5);
    let pageIndex = -1;
    const pageIndexCheck = pageIndex.toString();
    if (dpmfcPetaPnoCloText[eventIndex].dataset.pageIndex !== pageIndexCheck) {
      pageIndex = parseInt(dpmfcPetaPnoCloText[eventIndex].dataset.pageIndex, 10);
    }
    if (pageIndex !== DpmfcConfig.dpmfcPnoPage && pageIndex !== -1) {
      /*  */
      /* for (let ebi = 0; ebi < dpmfcExaPnoClo.length; ebi++) {
        dpmfcExaPnoClo[ebi].classList.remove(clData);
        dpmfcPetaPnoCloText[ebi].classList.remove(clData);
      }
      dpmfcExaPnoClo[eventIndex].classList.add(clData);
      dpmfcPetaPnoCloText[eventIndex].classList.add(clData); */
      /*  */
      
      /* DpmfcUtil.setDpmfcExaPnoClo(eventIndex); */
      
      /* DpmfcConfig.dpmfcPnoPage = page;
      DpmfcUtil.setDpmfcZettaBso();
      /*  
      if (DpmfcConfig.dpmfcPnoPage < 3) {
        dpmfcPetaPnoCloText[1].textContent = "2";
        dpmfcExaPnoClo[1].style.border = "";
      } else {
        dpmfcPetaPnoCloText[1].textContent = "...";
        dpmfcExaPnoClo[1].style.border = "none";
      }
      /*  
      if (DpmfcConfig.dpmfcPnoPage + 2 > pageLength) {
        dpmfcPetaPnoCloText[5].textContent = pageLength.toString();
        dpmfcExaPnoClo[5].style.border = "";
      } else {
        dpmfcPetaPnoCloText[5].textContent = "...";
        dpmfcExaPnoClo[5].style.border = "none";
      } */
      DpmfcConfig.dpmfcPnoPage = pageIndex;
      DpmfcUtil.setPageData();
      DpmfcUtil.setDpmfcZettaBso();
      if (pageMaxIndex > 6) {
        switch (eventIndex) {
          case 2: {
            DpmfcUtil.setEventIndex2();
            break;
          }
          case 4: {
            DpmfcUtil.setEventIndex4();
            break;
          }
        }
      }
    }
  }
  /* static tdtDpmfcExaTso(eventData) {
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
  } */
  /* static dpmfcZettaBscoPrev() {
    if (DpmfcConfig.dpmfcBscoPage > 0) {
      DpmfcConfig.dpmfcBscoPage--;
      /*  
      DpmfcUtil.setDpmfcZettaBso();
    }
  }
  static dpmfcZettaBscoNext() {
    const {
      dpmfcExaBso
    } = DpmfcConfig.getDpmfcBsoEbGroup(DpmfcConfig.dpmfcTsoTab);
    const pageLength = (dpmfcExaBso.length / 5) - 1;
    /*  
    if (pageLength > DpmfcConfig.dpmfcBscoPage) {
      DpmfcConfig.dpmfcBscoPage++;
    }
    DpmfcUtil.setDpmfcZettaBso();
  } */
  static dpmfcExaPnoLloFirst() {
    if (DpmfcConfig.dpmfcPnoPage !== 0) {
      DpmfcConfig.dpmfcPnoPage = 0;
      DpmfcUtil.setDpmfcZettaBso();
    }
  }
  static dpmfcExaPnoLloPrevious() {
    if (DpmfcConfig.dpmfcPnoPage > 0) {
      DpmfcConfig.dpmfcPnoPage--;
      DpmfcUtil.setDpmfcZettaBso();
      /*  */
      /* DpmfcUtil.setDpmfcExaPnoClo(); */
      DpmfcUtil.setPageData();
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
    }
    DpmfcUtil.setDpmfcZettaBso();
    /*  */
    /* DpmfcUtil.setDpmfcExaPnoClo(); */
    DpmfcUtil.setPageData();
  }
  static dpmfcExaPnoRloLast() {
    const {
      dpmfcExaBso
    } = DpmfcConfig.getDpmfcBsoEbGroup(DpmfcConfig.dpmfcTsoTab);
    const pageLength = Math.floor(dpmfcExaBso.length / 5);
    DpmfcConfig.dpmfcPnoPage = pageLength;
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