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
    window.addEventListener("hashchange", DpmfcHandler.windowOnHashChange);
  }
  static resizeDisplay() {
    DpmfcUtil.resetDpmfcExaTso(BlfConfig.previousDisplayType);
    DpmfcUtil.setDpmfcExaTso(0);
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
  static windowOnHashChange() {
    let hashData = window.location.hash.slice(1);
    window.scrollTo({top: 64});
    /* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
  }
  static mdtDpmfcExaTso(eventData) {
    const {
      eventIndex
    } = BlfUtil.getEventData(eventData);
    /*  */
    DpmfcUtil.setDpmfcExaTso(eventIndex);
    /* const dpmfcZettaBsoRect = dpmfcZettaBso[eventIndex].getBoundingClientRect(); */
    /*  */
    /* const {
      dpmfcExaBso
    } = DpmfcConfig.getDpmfcBsoEbGroup(eventIndex); */
    /* let page = DpmfcConfig.dpmfcBscoPage; */
    /* if (dpmfcExaBso.length > 5) {
      /* let heightCalc = 0;
      for (let ebi = 0; ebi < 5; ebi++) {
        heightCalc += dpmfcExaBso[ebi].getBoundingClientRect().height;
      }
      heightCalc += 32;
      dpmfcYottaBso.style.height = heightCalc + "px"; 
      /*  
      for (let ebi = 0; ebi < dpmfcExaBso.length; ebi++) {
        dpmfcExaBso[ebi].style.display = "none";
      }
      for (let ebi = page * 5; ebi < (page + 1) * 5; ebi++) {
        if (dpmfcExaBso[ebi]) {
          dpmfcExaBso[ebi].style.display = "";
        }
      }
    } else {
      /* dpmfcYottaBso.style.height = dpmfcZettaBsoRect.height + "px"; 
    } */
    /*  */
    DpmfcConfig.dpmfcTsoTab = eventIndex;
    DpmfcConfig.dpmfcBscoPage = 0;
    DpmfcUtil.setDpmfcZettaBso();
    /* const {
      dpmfcPetaTsoText,
      dpmfcPetaTsoAro
    } = DpmfcConfig.getDpmfcTsoEbGroup();
    const {
      dpmfcZettaBso
    } = DpmfcConfig.getDpmfcBsoZbGroup();
    /*  
    const clData = "cl-mdt-dpmfc-e-tso-handler";
    let clType = "remove";
    for (let ebi = 0; ebi < dpmfcPetaTsoText.length; ebi++) {
      dpmfcZettaBso[ebi].style.display = "";
      dpmfcPetaTsoText[ebi].style.color = "";
      dpmfcPetaTsoAro[ebi].style.border = "";
    }
    dpmfcZettaBso[eventIndex].style.display = "flex";
    dpmfcPetaTsoText[eventIndex].style.color = "#000000";
    dpmfcPetaTsoAro[eventIndex].style.border = "0.25rem solid #000000"; */
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
      /* const {
        dpmfcExaTso
      } = DpmfcConfig.getDpmfcTsoEbGroup(); */
      /* const modifyEventData = {};
      modifyEventData.currentTarget = dpmfcExaTso[DpmfcConfig.dpmfcTsoTab];
      DpmfcHandler.mdtDpmfcExaTso(modifyEventData); */
    }
  }
  static dpmfcZettaBscoNext() {
    /* const {
      dpmfcExaTso
    } = DpmfcConfig.getDpmfcTsoEbGroup(); */
    const {
      dpmfcExaBso
    } = DpmfcConfig.getDpmfcBsoEbGroup(DpmfcConfig.dpmfcTsoTab);
    /* !!!!! currentTab !!!!!! */
    const pageLength = (dpmfcExaBso.length / 5) - 1;
    if (pageLength > DpmfcConfig.dpmfcBscoPage) {
      DpmfcConfig.dpmfcBscoPage++;
    }
    DpmfcUtil.setDpmfcZettaBso();
    /*  */
    /* DpmfcConfig.dpmfcBscoPage++; */
    /*  */
    /* const modifyEventData = {};
    modifyEventData.currentTarget = dpmfcExaTso[DpmfcConfig.dpmfcTsoTab];
    DpmfcHandler.mdtDpmfcExaTso(modifyEventData); */
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