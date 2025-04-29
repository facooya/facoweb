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
    /* const page = DpmfcConfig.dpmfcBscoPage; */
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
    /*  */
  }
  static setDpmfcExaPnoClo(pEbIndex) {
    const {
      dpmfcExaBso
    } = DpmfcConfig.getDpmfcBsoEbGroup(DpmfcConfig.dpmfcTsoTab);
    const {
      dpmfcExaPnoClo,
      dpmfcPetaPnoCloText
    } = DpmfcConfig.getDpmfcPnoCloGroup();
    const pageMaxIndex = Math.floor(dpmfcExaBso.length / 5);
    const pageCenterIndex = Math.floor(pageMaxIndex / 2) - 1;
    console.log("pageCenter: ", pageCenterIndex);
    let pageIndex = 0;
    if (pEbIndex) {
      pageIndex = parseInt(dpmfcPetaPnoCloText[pEbIndex].dataset.pageIndex, 10);
    } else {
      pageIndex = DpmfcConfig.dpmfcPnoPage;
    }
    /*  */
    const clData = "cl-dpmfc-e-pno-clo-util";
    const firstIndex = 0;
    const lastIndex = dpmfcExaPnoClo.length - 1;
    let selectIndex = firstIndex;
    let centerSelectIndex = 0;
    /*  */
    dpmfcPetaPnoCloText[firstIndex].textContent = "1";
    dpmfcPetaPnoCloText[firstIndex].dataset.pageIndex = 0;
    /*  */
    dpmfcPetaPnoCloText[lastIndex].textContent = (pageMaxIndex + 1).toString();
    dpmfcPetaPnoCloText[lastIndex].dataset.pageIndex = pageMaxIndex;
    /*  */
    if (pageMaxIndex > 5) {
      selectIndex = firstIndex + 1;
      if (DpmfcConfig.dpmfcPnoPage < 3) {
        dpmfcExaPnoClo[selectIndex].classList.remove(clData);
        dpmfcPetaPnoCloText[selectIndex].textContent = "2";
        dpmfcPetaPnoCloText[selectIndex].dataset.pageIndex = 1;
        centerSelectIndex = 1;
      } else {
        dpmfcExaPnoClo[selectIndex].classList.add(clData);
        dpmfcPetaPnoCloText[selectIndex].textContent = "...";
        dpmfcPetaPnoCloText[selectIndex].dataset.pageIndex = -1;
      }
      /*  */
      selectIndex = lastIndex - 1;
      if (DpmfcConfig.dpmfcPnoPage > pageMaxIndex - 2) {
        dpmfcExaPnoClo[selectIndex].classList.remove(clData);
        dpmfcPetaPnoCloText[selectIndex].textContent = pageMaxIndex.toString();
        dpmfcPetaPnoCloText[selectIndex].dataset.pageIndex = pageMaxIndex - 1;
        centerSelectIndex = pageMaxIndex;
      } else {
        dpmfcExaPnoClo[selectIndex].classList.add(clData);
        dpmfcPetaPnoCloText[selectIndex].textContent = "...";
        dpmfcPetaPnoCloText[selectIndex].dataset.pageIndex = -1;
      }
      console.log(centerSelectIndex);
      if (pageIndex > 3 && pageIndex < (pageMaxIndex - 2)) {
        let tempPageIndex = pageIndex;
        for (let ebi = 2; ebi < 5; ebi++) {
          dpmfcPetaPnoCloText[ebi].textContent = (tempPageIndex + 1).toString();
          dpmfcPetaPnoCloText[ebi].dataset.pageIndex = tempPageIndex;
          tempPageIndex++;
        }
      } else {
        for (let ebi = 2; ebi < 5; ebi++) {
          dpmfcPetaPnoCloText[ebi].textContent = (ebi + 1).toString();
          dpmfcPetaPnoCloText[ebi].dataset.pageIndex = ebi;
        }
      }
    }
  }
  static setDpmfcExaPnoCloText() {
    const {
      dpmfcExaBso
    } = DpmfcConfig.getDpmfcBsoEbGroup(DpmfcConfig.dpmfcTsoTab);
    const {
      dpmfcExaPnoClo,
      dpmfcPetaPnoCloText
    } = DpmfcConfig.getDpmfcPnoCloGroup();
    /*  */
    const pageMaxIndex = Math.floor(dpmfcExaBso.length / 5);
    const firstIndex = 0;
    const lastIndex = dpmfcExaPnoClo.length - 1;
    let selectIndex = firstIndex;
    /*  */
    /* if (pageMaxIndex > 5) {

    } */
    /*  */
    dpmfcPetaPnoCloText[firstIndex].textContent = "1";
    dpmfcPetaPnoCloText[firstIndex].dataset.pageIndex = 0;
    /*  */
    dpmfcPetaPnoCloText[lastIndex].textContent = (pageMaxIndex + 1).toString();
    dpmfcPetaPnoCloText[lastIndex].dataset.pageIndex = pageMaxIndex;
    /*  */
    selectIndex = firstIndex + 1;
    dpmfcPetaPnoCloText[selectIndex].textContent = "2";
    dpmfcPetaPnoCloText[selectIndex].dataset.pageIndex = 1;
    /*  */
    selectIndex = lastIndex - 1;
    dpmfcPetaPnoCloText[selectIndex].textContent = pageMaxIndex.toString();
    dpmfcPetaPnoCloText[selectIndex].dataset.pageIndex = pageMaxIndex - 1;
  }
  /* ================================================== */
  static setEventIndex2() {

  }
  static setEventIndex4() {
    const {
      dpmfcExaBso
    } = DpmfcConfig.getDpmfcBsoEbGroup(DpmfcConfig.dpmfcTsoTab);
    const {
      dpmfcExaPnoClo,
      dpmfcPetaPnoCloText
    } = DpmfcConfig.getDpmfcPnoCloGroup();
    const pageMaxIndex = Math.floor(dpmfcExaBso.length / 5);
    const pageIndex = DpmfcConfig.dpmfcPnoPage;
    /*  */
    if (pageIndex < pageMaxIndex - 2) {
      DpmfcConfig.dpmfcModifyPageData[5] = "...";
      let pageNumber = pageIndex;
      for (let cpi = 2; cpi < 5; cpi++) {
        DpmfcConfig.dpmfcModifyPageData[cpi] = pageNumber.toString();
        pageNumber++;
      }
      console.log(pageNumber);
      this.set();
    } else {
      let pageNumber = pageIndex;
      for (let cpi = 2; cpi <= 5; cpi++) {
        DpmfcConfig.dpmfcModifyPageData[cpi] = pageNumber.toString();
        pageNumber++;
      }
      console.log(pageNumber);
      this.set();
    }
  }
  static set() {
    const {
      dpmfcExaPnoClo,
      dpmfcPetaPnoCloText
    } = DpmfcConfig.getDpmfcPnoCloGroup();
    /* button index */
    for (let bi = 0; bi < dpmfcExaPnoClo.length; bi++) {
      dpmfcPetaPnoCloText[bi].textContent = DpmfcConfig.dpmfcModifyPageData[bi];
    }
  }
  static setPageData() {
    const {
      dpmfcExaBso
    } = DpmfcConfig.getDpmfcBsoEbGroup(DpmfcConfig.dpmfcTsoTab);
    const {
      dpmfcExaPnoClo,
      dpmfcPetaPnoCloText
    } = DpmfcConfig.getDpmfcPnoCloGroup();
    const clData = "cl-set-page-data-util";
    const pageMaxIndex = Math.floor(dpmfcExaBso.length / 5);
    /*  */
    for (let pi = 0; pi < 7; pi++) {
      dpmfcExaPnoClo[pi].classList.remove(clData);
    }
    /*  */
    if (pageMaxIndex < 7) {
      let pageIndex = 0;
      for (let pi = 0; pi <= pageMaxIndex; pi++) {
        dpmfcExaPnoClo[pi].classList.add(clData);
        dpmfcPetaPnoCloText[pi].textContent = DpmfcConfig.dpmfcDefaultPageData[pi];
        pageIndex = parseInt(DpmfcConfig.dpmfcDefaultPageData[pi], 10) - 1;
        dpmfcPetaPnoCloText[pi].dataset.pageIndex = pageIndex;
      }
    } else {
      DpmfcUtilSet.modifyPageData();
      let pageIndex = 0;
      for (let pi = 0; pi < 7; pi++) {
        dpmfcExaPnoClo[pi].classList.add(clData);
        dpmfcPetaPnoCloText[pi].textContent = DpmfcConfig.dpmfcModifyPageData[pi];
        pageIndex = parseInt(DpmfcConfig.dpmfcModifyPageData[pi], 10) - 1;
        if (!isNaN(pageIndex)) {
          dpmfcPetaPnoCloText[pi].dataset.pageIndex = pageIndex;
        } else {
          dpmfcPetaPnoCloText[pi].dataset.pageIndex = -1;
          dpmfcExaPnoClo[pi].classList.add("cl-dpmfc-e-pno-clo-util");
        }
      }
    }
  }
  static modifyPageData() {
    const {
      dpmfcExaBso
    } = DpmfcConfig.getDpmfcBsoEbGroup(DpmfcConfig.dpmfcTsoTab);
    const {
      dpmfcExaPnoClo,
      dpmfcPetaPnoCloText
    } = DpmfcConfig.getDpmfcPnoCloGroup();
    const pageMaxIndex = Math.floor(dpmfcExaBso.length / 5);
    const pageIndex = DpmfcConfig.dpmfcPnoPage;
    /*  */
    const firstIndex = 0;
    const lastIndex = DpmfcConfig.dpmfcModifyPageData.length - 1;
    /*  */
    DpmfcConfig.dpmfcModifyPageData[lastIndex] = (pageMaxIndex + 1).toString();
    if (pageIndex < pageMaxIndex - 2) {
      DpmfcConfig.dpmfcModifyPageData[lastIndex-1] = "...";
    }
    if (pageIndex > 4) {
      DpmfcConfig.dpmfcModifyPageData[firstIndex+1] = "...";
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
  static setDpmfcExaTso(pIndex) {
    DpmfcUtilSet.setDpmfcExaTso(pIndex);
  }
  static setDpmfcZettaBso() {
    DpmfcUtilSet.setDpmfcZettaBso();
  }
  static setDpmfcExaPnoClo(pEbIndex) {
    DpmfcUtilSet.setDpmfcExaPnoClo(pEbIndex);
  }
  static setDpmfcExaPnoCloText() {
    DpmfcUtilSet.setDpmfcExaPnoCloText();
  }
  /* -------------------------------------------------- */
  static resetDpmfcExaTso(pDisplayType) {
    DpmfcUtilReset.resetDpmfcExaTso(pDisplayType);
  }
  /* !!!!!!!!!!!!! */
  static setPageData() {
    DpmfcUtilSet.setPageData();
  }
  static setEventIndex2() {
    DpmfcUtilSet.setEventIndex2();
  }
  static setEventIndex4() {
    DpmfcUtilSet.setEventIndex4();
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