/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  BlfConfig,
  DpmfcConfig
} from "../../fwc-hub.js";
/*  */
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
    const page = DpmfcConfig.dpmfcBscoPage;
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
    /*  */
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