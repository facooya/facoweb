/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  BlfConfig,
  DpmfcAccessor,
  DpmfcConfig
} from "../../fwc-hub.js";
/*  */
class DpmfcUtilInit {
  static initDpmfcExaPnoClo() {
    const {
      dpmfcExaPnoClo,
      dpmfcPetaPnoCloText
    } = DpmfcConfig.getDpmfcPnoCloDynamic();
    for (let pi = 0; pi <= DpmfcConfig.dpmfcData.pageMaxIndex; pi++) {
      dpmfcExaPnoClo[pi].index = pi;
      dpmfcPetaPnoCloText[pi].textContent = (pi + 1).toString();
    }
  }
}
class DpmfcUtilEvent {
  static eventDpmfcExaPnoClo(isActive) {
    const getHandler = DpmfcAccessor.getDpmfcHandler();
    const {
      dpmfcExaPnoClo
    } = DpmfcConfig.getDpmfcPnoCloDynamic();
    /*  */
    let eventListenerType = "removeEventListener";
    if (isActive) {
      eventListenerType = "addEventListener";
    }
    /*  */
    for (let pi = 0; pi <= DpmfcConfig.dpmfcData.pageMaxIndex; pi++) {
      dpmfcExaPnoClo[pi][eventListenerType](
        "click",
        getHandler.dpmfcExaPnoClo
      );
    }
    /*  */
    if (isActive) {
      DpmfcUtilInit.initDpmfcExaPnoClo();
    }
  }
}
class DpmfcUtilCl {
  static clDpmfcYottaPno() {
    const {
      dpmfcYottaPno
    } = DpmfcConfig.getDpmfcPnoGroup();
    const {
      dpmfcZettaPnoClo
    } = DpmfcConfig.getDpmfcPnoCloGroup();
    /* const {
      dpmfcExaPnoClo
    } = DpmfcConfig.getDpmfcPnoCloDynamic(); */
    /*  */
    const controlButton = 4;
    const cloButton = DpmfcConfig.dpmfcData.pageMaxIndex + 1;
    const pnoButton = cloButton + controlButton;
    const sidePaddingRem = 1;
    const gapRem = 1;
    const buttonWidthRem = 2.5;
    /*  */
    let calcWidth = sidePaddingRem * 2;
    calcWidth += buttonWidthRem * pnoButton;
    calcWidth += gapRem * (pnoButton - 1);
    calcWidth *= 16;
    /*  */
    const clData = "cl-dpmfc-y-pno-util";
    let clType = "remove";
    /*  */
    if (calcWidth < window.innerWidth) {
      clType = "add";
    }
    /*  */
    dpmfcYottaPno.classList[clType](clData);
    dpmfcZettaPnoClo.classList[clType](clData);
  }
  static clDpmfcExaPnoClo() {
    const {
      dpmfcExaPnoClo,
      dpmfcPetaPnoCloText
    } = DpmfcConfig.getDpmfcPnoCloDynamic();
    const pageIndex = DpmfcConfig.dpmfcData.pageIndex;
    const clData = "cl-dpmfc-e-pno-clo-util";
    for (let pi = 0; pi < dpmfcExaPnoClo.length; pi++) {
      dpmfcExaPnoClo[pi].classList.remove(clData);
      dpmfcPetaPnoCloText[pi].classList.remove(clData);
    }
    dpmfcExaPnoClo[pageIndex].classList.add(clData);
    dpmfcPetaPnoCloText[pageIndex].classList.add(clData);
  }
  static clDpmfcPnoDisabled() {
    const {
      dpmfcExaPnoLloFirst,
      dpmfcExaPnoLloPrevious,
      dpmfcPetaPnoLloFirst,
      dpmfcPetaPnoLloPrevious
    } = DpmfcConfig.getDpmfcPnoLloGroup();
    const {
      dpmfcExaPnoRloNext,
      dpmfcExaPnoRloLast,
      dpmfcPetaPnoRloNext,
      dpmfcPetaPnoRloLast
    } = DpmfcConfig.getDpmfcPnoRloGroup();
    /* const {
      dpmfcExaPnoClo
    } = DpmfcConfig.getDpmfcPnoCloDynamic(); */
    const clData = "cl-dpmfc-pno-disabled-util";
    /*  */
    const pageMaxIndex = DpmfcConfig.dpmfcData.pageMaxIndex;
    const pageIndex = DpmfcConfig.dpmfcData.pageIndex;
    /* reset */
    dpmfcExaPnoLloFirst.classList.remove(clData);
    dpmfcExaPnoLloPrevious.classList.remove(clData);
    dpmfcPetaPnoLloFirst.classList.remove(clData);
    dpmfcPetaPnoLloPrevious.classList.remove(clData);
    dpmfcExaPnoRloNext.classList.remove(clData);
    dpmfcExaPnoRloLast.classList.remove(clData);
    dpmfcPetaPnoRloNext.classList.remove(clData);
    dpmfcPetaPnoRloLast.classList.remove(clData);
    /*  */
    if (pageMaxIndex >= 1) {
      if (pageIndex === 0) {
        dpmfcExaPnoLloFirst.classList.add(clData);
        dpmfcExaPnoLloPrevious.classList.add(clData);
        dpmfcPetaPnoLloFirst.classList.add(clData);
        dpmfcPetaPnoLloPrevious.classList.add(clData);
      } else if (pageIndex === pageMaxIndex) {
        dpmfcExaPnoRloNext.classList.add(clData);
        dpmfcExaPnoRloLast.classList.add(clData);
        dpmfcPetaPnoRloNext.classList.add(clData);
        dpmfcPetaPnoRloLast.classList.add(clData);
      }
    } else {
      dpmfcExaPnoLloFirst.classList.add(clData);
      dpmfcExaPnoLloPrevious.classList.add(clData);
      dpmfcPetaPnoLloFirst.classList.add(clData);
      dpmfcPetaPnoLloPrevious.classList.add(clData);
      dpmfcExaPnoRloNext.classList.add(clData);
      dpmfcExaPnoRloLast.classList.add(clData);
      dpmfcPetaPnoRloNext.classList.add(clData);
      dpmfcPetaPnoRloLast.classList.add(clData);
    }
  }
}
class DpmfcUtilPnoClo {
  static utilDpmfcPnoCloEvent(isActive) {
    /* eventDpmfcExaPnoClo */
    const getHandler = DpmfcAccessor.getDpmfcHandler();
    const {
      dpmfcExaPnoClo
    } = DpmfcConfig.getDpmfcPnoCloDynamic();
    /*  */
    let eventListenerType = "removeEventListener";
    if (isActive) {
      eventListenerType = "addEventListener";
    }
    /*  */
    for (let pi = 0; pi <= DpmfcConfig.dpmfcData.pageMaxIndex; pi++) {
      dpmfcExaPnoClo[pi][eventListenerType](
        "click",
        getHandler.dpmfcExaPnoClo
      );
    }
    /*  */
    if (isActive) {
      this.utilDpmfcPnoCloInit();
    }
  }
  static utilDpmfcPnoCloInit() {
    /* initDpmfcExaPnoClo */
    const {
      dpmfcExaPnoClo,
      dpmfcPetaPnoCloText
    } = DpmfcConfig.getDpmfcPnoCloDynamic();
    for (let pi = 0; pi <= DpmfcConfig.dpmfcData.pageMaxIndex; pi++) {
      dpmfcExaPnoClo[pi].index = pi;
      dpmfcPetaPnoCloText[pi].textContent = (pi + 1).toString();
    }
  }
  static utilClDpmfcPnoClo() {
    /* clDpmfcExaPnoClo */
    const {
      dpmfcExaPnoClo,
      dpmfcPetaPnoCloText
    } = DpmfcConfig.getDpmfcPnoCloDynamic();
    const pageIndex = DpmfcConfig.dpmfcData.pageIndex;
    const clData = "cl-dpmfc-e-pno-clo-handler";
    for (let pi = 0; pi < dpmfcExaPnoClo.length; pi++) {
      dpmfcExaPnoClo[pi].classList.remove(clData);
      dpmfcPetaPnoCloText[pi].classList.remove(clData);
    }
    dpmfcExaPnoClo[pageIndex].classList.add(clData);
    dpmfcPetaPnoCloText[pageIndex].classList.add(clData);
  }
}
class DpmfcUtilSet {
  static setDpmfcExaTso() {
    const {
      dpmfcPetaTsoText,
      dpmfcPetaTsoAro
    } = DpmfcConfig.getDpmfcTsoEbGroup();
    const {
      dpmfcZettaBso
    } = DpmfcConfig.getDpmfcBsoZbGroup();
    const tabIndex = DpmfcConfig.dpmfcData.tabIndex;
    const clData = "cl-set-dpmfc-e-tso-util";
    const clType = "add";
    /* switch (BlfConfig.currentDisplayType) {
      case 1: {
        clData = "cl-mdt-dpmfc-e-tso";
        break;
      }
      case 2: {
        clData = "cl-tdt-dpmfc-e-tso";
        break;
      }
      case 3: {
        clData = "cl-ddt-dpmfc-e-tso";
        break;
      }
    } */
    DpmfcUtilReset.resetDpmfcExaTso();
    dpmfcPetaTsoText[tabIndex].classList[clType](clData);
    dpmfcPetaTsoAro[tabIndex].classList[clType](clData);
    dpmfcZettaBso[tabIndex].classList[clType](clData);
  }
  static setDpmfcZettaBso() {
    const {
      dpmfcExaBso
    } = DpmfcConfig.getDpmfcBsoEbGroup(DpmfcConfig.dpmfcData.tabIndex);
    const page = DpmfcConfig.dpmfcData.pageIndex;
    /*  */
    if (dpmfcExaBso.length > 5) {
      for (let ebi = 0; ebi < dpmfcExaBso.length; ebi++) {
        dpmfcExaBso[ebi].style.display = "none";
      }
      for (let ebi = page * 5; ebi < (page + 1) * 5; ebi++) {
        if (dpmfcExaBso[ebi]) {
          dpmfcExaBso[ebi].style.display = "";
        }
      }
    }
  }
}
class DpmfcUtilReset {
  static resetDpmfcExaTso() {
    const {
      dpmfcPetaTsoText,
      dpmfcPetaTsoAro
    } = DpmfcConfig.getDpmfcTsoEbGroup();
    const {
      dpmfcZettaBso
    } = DpmfcConfig.getDpmfcBsoZbGroup();
    const clData = "cl-set-dpmfc-e-tso-util";
    const clType = "remove";
    /* switch (pDisplayType) {
      case 1: {
        clData = "cl-mdt-dpmfc-e-tso";
        break;
      }
      case 2: {
        clData = "cl-tdt-dpmfc-e-tso";
        break;
      }
      case 3: {
        clData = "cl-ddt-dpmfc-e-tso";
        break;
      }
    } */
    for (let ebi = 0; ebi < dpmfcPetaTsoText.length; ebi++) {
      dpmfcPetaTsoText[ebi].classList[clType](clData);
      dpmfcPetaTsoAro[ebi].classList[clType](clData);
      dpmfcZettaBso[ebi].classList[clType](clData);
    }
  }
}
class DpmfcUtil {
  static eventDpmfcExaPnoClo(isActive) {
    DpmfcUtilEvent.eventDpmfcExaPnoClo(isActive);
  }
  /* -------------------------------------------------- */
  static clDpmfcYottaPno() {
    DpmfcUtilCl.clDpmfcYottaPno();
  }
  static clDpmfcExaPnoClo() {
    DpmfcUtilCl.clDpmfcExaPnoClo();
  }
  static clDpmfcPnoDisabled() {
    DpmfcUtilCl.clDpmfcPnoDisabled();
  }
  /* -------------------------------------------------- */
  static setDpmfcExaTso() {
    DpmfcUtilSet.setDpmfcExaTso();
  }
  static setDpmfcZettaBso() {
    DpmfcUtilSet.setDpmfcZettaBso();
  }
  /* -------------------------------------------------- */
  static resetDpmfcExaTso() {
    DpmfcUtilReset.resetDpmfcExaTso();
  }
  /* -------------------------------------------------- */
  /* static utilDpmfcPnoCloEvent(isActive) {
    DpmfcUtilPnoClo.utilDpmfcPnoCloEvent(isActive);
  }
  static utilClDpmfcPnoClo() {
    DpmfcUtilPnoClo.utilClDpmfcPnoClo();
  } */
}
/*  */
export {
  DpmfcUtil
};
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */