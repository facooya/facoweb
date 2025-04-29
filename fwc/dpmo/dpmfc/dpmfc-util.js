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
class DpmfcUtilCl {
  static clDpmfcYottaPno() {
    const {
      dpmfcYottaPno
    } = DpmfcConfig.getDpmfcPnoGroup();
    const {
      dpmfcZettaPnoClo
    } = DpmfcConfig.getDpmfcPnoCloGroup();
    const {
      dpmfcExaPnoClo
    } = DpmfcConfig.getDpmfcPnoCloDynamic();
    const clData = "cl-dpmfc-y-pno-util";
    /*  */
    const controlButton = 4;
    const cloButton = dpmfcExaPnoClo.length;
    const allButton = cloButton + controlButton;
    const sidePaddingRem = 1;
    const gapRem = 1;
    const buttonWidthRem = 2.5;
    /*  */
    let calcWidth = sidePaddingRem * 2;
    calcWidth += buttonWidthRem * allButton;
    calcWidth += gapRem * (allButton - 1);
    calcWidth *= 16;
    /* const calcWidth = ((sidePaddingRem * 2) + (buttonWidthRem * allButton) +
      (gapRem * (allButton - 1))) * 16; */
    /*  */
    if (calcWidth >= window.innerWidth) {
      dpmfcYottaPno.classList.remove(clData);
      dpmfcZettaPnoClo.classList.remove(clData);
    } else {
      dpmfcYottaPno.classList.add(clData);
      dpmfcZettaPnoClo.classList.add(clData);
    }
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
    const {
      dpmfcExaPnoClo
    } = DpmfcConfig.getDpmfcPnoCloDynamic();
    const clData = "cl-dpmfc-pno-disabled-util";
    /*  */
    const pageMaxIndex = dpmfcExaPnoClo.length - 1;
    const pageIndex = DpmfcConfig.dpmfcPnoPage;
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
  static utilDpmfcPnoCloEvent(isActive, pPageMaxIndex) {
    /* const {
      dpmfcExaPnoClo,
      dpmfcPetaPnoCloText
    } = DpmfcConfig.getDpmfcPnoCloGroup(); */
    const getHandler = DpmfcAccessor.getDpmfcHandler();
    const {
      dpmfcExaPnoClo
    } = DpmfcConfig.getDpmfcPnoCloDynamic();
    /* const dpmfcExaPnoClo = document.querySelectorAll(".dpmfc-e-pno-clo"); */
    /*  */
    let eventListenerType = "removeEventListener";
    if (isActive) {
      eventListenerType = "addEventListener";
    }
    /*  */
    for (let pi = 0; pi <= pPageMaxIndex; pi++) {
      dpmfcExaPnoClo[pi][eventListenerType](
        "click",
        getHandler.dpmfcExaPnoClo
      );
    }
    /*  */
    if (isActive) {
      this.utilDpmfcPnoCloInit(pPageMaxIndex);
    }
  }
  static utilDpmfcPnoCloInit(pPageMaxIndex) {
    const {
      dpmfcExaPnoClo,
      dpmfcPetaPnoCloText
    } = DpmfcConfig.getDpmfcPnoCloDynamic();
    /* const dpmfcExaPnoClo = document.querySelectorAll(".dpmfc-e-pno-clo");
    const dpmfcPetaPnoCloText = document.querySelectorAll(".dpmfc-p-pno-clo-text"); */
    for (let pi = 0; pi <= pPageMaxIndex; pi++) {
      dpmfcExaPnoClo[pi].index = pi;
      dpmfcPetaPnoCloText[pi].textContent = (pi + 1).toString();
    }
  }
  static utilClDpmfcPnoClo(pPageIndex) {
    const {
      dpmfcExaPnoClo,
      dpmfcPetaPnoCloText
    } = DpmfcConfig.getDpmfcPnoCloDynamic();
    /* const dpmfcExaPnoClo = document.querySelectorAll(".dpmfc-e-pno-clo");
    const dpmfcPetaPnoCloText = document.querySelectorAll(".dpmfc-p-pno-clo-text"); */
    const clData = "cl-dpmfc-e-pno-clo-handler";
    for (let pi = 0; pi < dpmfcExaPnoClo.length; pi++) {
      dpmfcExaPnoClo[pi].classList.remove(clData);
      dpmfcPetaPnoCloText[pi].classList.remove(clData);
    }
    dpmfcExaPnoClo[pPageIndex].classList.add(clData);
    dpmfcPetaPnoCloText[pPageIndex].classList.add(clData);
  }
}
class DpmfcUtilSet {
  static setDpmfcExaTso(pIndex) {
    const {
      dpmfcPetaTsoText,
      dpmfcPetaTsoAro
    } = DpmfcConfig.getDpmfcTsoEbGroup();
    const {
      dpmfcZettaBso
    } = DpmfcConfig.getDpmfcBsoZbGroup();
    let clType = "add";
    let clData = "";
    switch (BlfConfig.currentDisplayType) {
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
    }
    DpmfcUtilReset.resetDpmfcExaTso(BlfConfig.currentDisplayType);
    dpmfcPetaTsoText[pIndex].classList[clType](clData);
    dpmfcPetaTsoAro[pIndex].classList[clType](clData);
    dpmfcZettaBso[pIndex].classList[clType](clData);
  }
  static setDpmfcZettaBso() {
    const {
      dpmfcExaBso
    } = DpmfcConfig.getDpmfcBsoEbGroup(DpmfcConfig.dpmfcTsoTab);
    const page = DpmfcConfig.dpmfcPnoPage;
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
  static resetDpmfcExaTso(pDisplayType) {
    const {
      dpmfcPetaTsoText,
      dpmfcPetaTsoAro
    } = DpmfcConfig.getDpmfcTsoEbGroup();
    const {
      dpmfcZettaBso
    } = DpmfcConfig.getDpmfcBsoZbGroup();
    const clType = "remove";
    let clData = "";
    switch (pDisplayType) {
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
    }
    for (let ebi = 0; ebi < dpmfcPetaTsoText.length; ebi++) {
      dpmfcPetaTsoText[ebi].classList[clType](clData);
      dpmfcPetaTsoAro[ebi].classList[clType](clData);
      dpmfcZettaBso[ebi].classList[clType](clData);
    }
  }
}
class DpmfcUtil {
  static clDpmfcYottaPno() {
    DpmfcUtilCl.clDpmfcYottaPno();
  }
  static clDpmfcPnoDisabled() {
    DpmfcUtilCl.clDpmfcPnoDisabled();
  }
  /* -------------------------------------------------- */
  static setDpmfcExaTso(pIndex) {
    DpmfcUtilSet.setDpmfcExaTso(pIndex);
  }
  static setDpmfcZettaBso() {
    DpmfcUtilSet.setDpmfcZettaBso();
  }
  /* -------------------------------------------------- */
  static resetDpmfcExaTso(pDisplayType) {
    DpmfcUtilReset.resetDpmfcExaTso(pDisplayType);
  }
  /* -------------------------------------------------- */
  static utilDpmfcPnoCloEvent(isActive, pPageMaxIndex) {
    DpmfcUtilPnoClo.utilDpmfcPnoCloEvent(isActive, pPageMaxIndex);
  }
  static utilClDpmfcPnoClo(pPageIndex) {
    DpmfcUtilPnoClo.utilClDpmfcPnoClo(pPageIndex);
  }
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