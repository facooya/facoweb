/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  FwaConfig
} from "../../../fwa/fwa-config.js";
import {
  HdncConfig
} from "./hdnc-config.js";
/*  */
class HdncUtilManager {

}
/*  */
class HdncUtilUpdate {
  static updateHdncExaBloGridTemplateRows() {
    const {
      hdncExaBlo
    } = HdncConfig.getHdncBloGroup();
    const enableGridRowRemSize = 4;
    const disableGridRowRemSize = 0;
    for (let ybi = 0; ybi < hdncExaBlo.length; ybi++) {
      const {
        hdncPetaBlo
      } = HdncConfig.getHdncBloEbGroup(ybi);
      let setEnableGridRow = "";
      let setDisableGridRow = "";
      for (let ebi = 0; ebi < hdncPetaBlo.length; ebi++) {
        setEnableGridRow += enableGridRowRemSize + "rem" + " ";
        setDisableGridRow += disableGridRowRemSize + "rem" + " ";
      }
      hdncExaBlo[ybi].dataset.enableGridRow = setEnableGridRow;
      hdncExaBlo[ybi].dataset.disableGridRow = setDisableGridRow;
    }
  }
  /* -------------------------------------------------- */
  static updateHdncExaBloMaxHeight() {
    let topRemBuffer = 0;
    const bottomRemBuffer = 2;
    if (FwaConfig.currentDisplayType === 2) {
      topRemBuffer = 8;
    } else if (FwaConfig.currentDisplayType === 3) {
      topRemBuffer = 4;
    }
    const remBuffer = topRemBuffer + bottomRemBuffer;
    /*  */
    const innerHeight = window.innerHeight;
    const calcMaxHeight = innerHeight - (remBuffer * 16);
    const setMaxHeight = calcMaxHeight + "px";
    HdncUtil.hdncUtilCache["calcHdncExaBloMaxHeight"] = calcMaxHeight;
    HdncUtil.hdncUtilCache["setHdncExaBloMaxHeight"] = setMaxHeight;
  }
  /* ================================================== */
  static updateHdncExaBloSgroLeft() {
    const {
      hdncZettaBlo,
      hdncExaBlo
    } = HdncConfig.getHdncBloGroup();
    const sgroRemWidth = 2;
    const calcSgroWidth = (sgroRemWidth / 2) * 16;
    /*  */
    for (let ybi = 0; ybi < hdncZettaBlo.length; ybi++) {
      const hdncZettaBloRect = hdncZettaBlo[ybi].getBoundingClientRect();
      const hdncExaBloRect = hdncExaBlo[ybi].getBoundingClientRect();
      /*  */
      const calcTotalRectLeft = hdncZettaBloRect.left - hdncExaBloRect.left;
      const calcBloRectWidth = hdncExaBloRect.width / 2;
      /*  */
      const calcLeft = -calcTotalRectLeft + calcBloRectWidth - calcSgroWidth;
      const setLeft = calcLeft + "px";
      /*  */
      HdncUtil.hdncUtilCache["calcHdncExaBloSgroLeft" + ybi] = calcLeft;
      HdncUtil.hdncUtilCache["setHdncExaBloSgroLeft" + ybi] = setLeft;
    }
  }
  /* -------------------------------------------------- */
  static updateHdncExaBloSgroBoTop() {
    const bottomRemBuffer = 2;
    const sgroRemHeight = 1;
    const calcTotalBuffer = ((sgroRemHeight / 2) + bottomRemBuffer) * 16;
    /*  */
    const getCalcBloMaxHeight = HdncUtil.hdncUtilCache["calcHdncExaBloMaxHeight"];
    const calcTop = getCalcBloMaxHeight - calcTotalBuffer;
    const setTop = calcTop + "px";
    /*  */
    HdncUtil.hdncUtilCache["calcHdncExaBloSgroBoTop"] = calcTop;
    HdncUtil.hdncUtilCache["setHdncExaBloSgroBoTop"] = setTop;
  }
  /* ================================================== */
  static updateHdncGigaBloBgroLeft(ybIndex) {
    const {
      hdncTeraBlo,
      hdncGigaBloText,
      hdncGigaBloBgro
    } = HdncConfig.getHdncBloEbGroup(ybIndex);
    const bufferWidth = 24;
    for (let ebi = 0; ebi < hdncGigaBloBgro.length; ebi++) {
      const hdncGigaBloTextWidth = hdncGigaBloText[ebi].offsetWidth;
      const hdncTeraBloWidth = hdncTeraBlo[ebi].offsetWidth;
      const calcLeft = (hdncTeraBloWidth - (hdncGigaBloTextWidth + bufferWidth)) / 2;
      const setLeft = calcLeft + "px";
      /*  */
      hdncGigaBloBgro[ebi].dataset.left = setLeft;
    }
  }
  /* -------------------------------------------------- */
  static updateHdncGigaBloBgroWidth(ybIndex) {
    const {
      hdncGigaBloText,
      hdncGigaBloBgro
    } = HdncConfig.getHdncBloEbGroup(ybIndex);
    const bufferWidth = 24;
    for (let ebi = 0; ebi < hdncGigaBloBgro.length; ebi++) {
      const hdncGigaBloTextWidth = hdncGigaBloText[ebi].offsetWidth;
      const calcWidth = hdncGigaBloTextWidth + bufferWidth;
      const setWidth = calcWidth + "px";
      /*  */
      hdncGigaBloBgro[ebi].dataset.width = setWidth;
    }
  }
  /* ================================================== */
}
/* ================================================== */
class HdncUtilSet {
  static setHdncGigaBloBgroLeft(ybIndex) {
    const {
      hdncGigaBloBgro
    } = HdncConfig.getHdncBloEbGroup(ybIndex);
    for (let ebi = 0; ebi < hdncGigaBloBgro.length; ebi++) {
      const getLeft = hdncGigaBloBgro[ebi].dataset.left;
      hdncGigaBloBgro[ebi].style.left = getLeft;
    }
  }
  /* -------------------------------------------------- */
  static setHdncGigaBloBgroWidth(ybIndex, pSetWidth, optEbIndex) {
    const {
      hdncGigaBloBgro
    } = HdncConfig.getHdncBloEbGroup(ybIndex);
    /*  */
    let isOption = false;
    if (optEbIndex == null) {
      isOption = false;
    } else {
      isOption = true;
    }
    /*  */
    if (isOption) {
      let getWidth = "";
      if (pSetWidth) {
        getWidth = hdncGigaBloBgro[optEbIndex].dataset.width;
      }
      hdncGigaBloBgro[optEbIndex].style.width = getWidth;
    } else {
      let getWidth = "";
      for (let ebi = 0; ebi < hdncGigaBloBgro.length; ebi++) {
        if (pSetWidth) {
          getWidth = hdncGigaBloBgro[ebi].dataset.width;
        }
        hdncGigaBloBgro[ebi].style.width = getWidth;
      }
    }
  }
  /* ================================================== */
  static setHdncExaBlo(isSet, pIndex) {
    const {
      hdncExaBlo
    } = HdncConfig.getHdncBloGroup();
    /*  */
    let rowRemSize = null;
    if (isSet) {
      rowRemSize = 4;
    } else {
      rowRemSize = 0;
    }
    HdncUtilSet.setHdncExaBloGridTemplateRows_Old(pIndex, rowRemSize);
    if (hdncExaBlo[pIndex].dataset.isSensorHeightResized && isSet) {
      HdncUtilSet.setHdncExaBloMaxHeight(pIndex);
    }
  }
  /* -------------------------------------------------- */
  static setHdncExaBloGridTemplateRows_Old(pIndex, rowRemSize) {
    const {
      hdncExaBlo
    } = HdncConfig.getHdncBloGroup();
    const {
      hdncPetaBlo
    } = HdncConfig.getHdncBloEbGroup(pIndex);
    let setGridTemplateRows = "";
    for (let i = 0; i < hdncPetaBlo.length; i++) {
      setGridTemplateRows += rowRemSize + "rem" + " ";
    }
    hdncExaBlo[pIndex].style.gridTemplateRows = setGridTemplateRows;
  }
  /*  */
  static setHdncExaBloGridTemplateRows(ybIndex, pSetGrid) {
    const {
      hdncExaBlo
    } = HdncConfig.getHdncBloGroup();
    let getGridRow = "";
    if (pSetGrid) {
      getGridRow = hdncExaBlo[ybIndex].dataset.enableGridRow;
    } else {
      getGridRow = hdncExaBlo[ybIndex].dataset.disableGridRow;
    }
    hdncExaBlo[ybIndex].style.gridTemplateRows = getGridRow;
  }
  /* -------------------------------------------------- */
  static setHdncExaBloMaxHeight() {
    const {
      hdncExaBlo
    } = HdncConfig.getHdncBloGroup();
    const getMaxHeight = HdncUtil.hdncUtilCache["setHdncExaBloMaxHeight"];
    for (let ybi = 0; ybi < hdncExaBlo.length; ybi++) {
      hdncExaBlo[ybi].style.maxHeight = getMaxHeight;
    }
  }
  /* -------------------------------------------------- */
  static setDataHdncExaBloMaxHeight() {
    let remBuffer = null;
    if (FwaConfig.currentDisplayType === 2) {
      remBuffer = 10;
    } else if (FwaConfig.currentDisplayType === 3) {
      remBuffer = 6;
    }
    const innerHeight = window.innerHeight;
    const calcMaxHeight = innerHeight - (remBuffer * 16);
    HdncUtil.hdncUtilCache["hdncExaBloMaxHeight"] = calcMaxHeight;
  }
  /* ================================================== */
  static setHdncExaBloSgroLeft() {
    const {
      hdncExaBloSgroTo,
      hdncExaBloSgroBo
    } = HdncConfig.getHdncBloGroup();
    for (let ybi = 0; ybi < hdncExaBloSgroTo.length; ybi++) {
      const getLeft = HdncUtil.hdncUtilCache["setHdncExaBloSgroLeft" + ybi];
      hdncExaBloSgroTo[ybi].style.left = getLeft;
      hdncExaBloSgroBo[ybi].style.left = getLeft;
    }
  }
  /* -------------------------------------------------- */
  static setHdncExaBloSgroBoTop() {
    const {
      hdncExaBloSgroBo
    } = HdncConfig.getHdncBloGroup();
    const getTop = HdncUtil.hdncUtilCache["setHdncExaBloSgroBoTop"];
    for (let ybi = 0; ybi < hdncExaBloSgroBo.length; ybi++) {
      hdncExaBloSgroBo[ybi].style.top = getTop;
    }
  }
  /* ================================================== */
  static setDataHdncExaBloSgro(pIndex) {
    HdncUtilSet.setDataHdncExaBloSgroTop(pIndex);
    HdncUtilSet.setDataHdncExaBloSgroLeft(pIndex);
  }
  /* ------------------------------ */
  static setDataHdncExaBloSgroLeft(pIndex) {
    const {
      hdncZettaBlo,
      hdncExaBlo
    } = HdncConfig.getHdncBloGroup();
    const hdncZettaBloRect = hdncZettaBlo[pIndex].getBoundingClientRect();
    const hdncExaBloRect = hdncExaBlo[pIndex].getBoundingClientRect();
    const calcLeft = -(hdncZettaBloRect.left - hdncExaBloRect.left) +
      (hdncExaBloRect.width / 2) - 16;
    /*  */
    HdncUtil.hdncUtilCache["hdncExaBloSgroLeft" + pIndex] = calcLeft;
  }
  /* ------------------------------ */
  static setDataHdncExaBloSgroTop(pIndex, pHeight) {
    /* remove pHeight ? */
    const {
      hdncExaBlo,
      hdncExaBloSgroBo
    } = HdncConfig.getHdncBloGroup();
    let hdncExaBloRect = null;
    let setTop = null;
    if (pHeight) {
      setTop = pHeight - 40;
    } else {
      hdncExaBloRect = hdncExaBlo[pIndex].getBoundingClientRect();
      setTop = hdncExaBloRect.height - 40;
    }
    /*  */
    hdncExaBloSgroBo[pIndex].dataset.top = setTop + "px";
  }
  /* -------------------------------------------------- */
  static setHdncExaBloSgro(pIndex) {
    HdncUtilSet.setHdncExaBloSgroTop_Old(pIndex);
    HdncUtilSet.setHdncExaBloSgroLeft_Old(pIndex);
  }
  /* ------------------------------ */
  static setHdncExaBloSgroTop_Old(pIndex) {
    const {
      hdncExaBloSgroBo
    } = HdncConfig.getHdncBloGroup();
    /*  */
    const setTop = hdncExaBloSgroBo[pIndex].dataset.top;
    hdncExaBloSgroBo[pIndex].style.top = setTop;
  }
  /* ------------------------------ */
  static setHdncExaBloSgroLeft_Old(pIndex) {
    const {
      hdncExaBloSgroTo,
      hdncExaBloSgroBo
    } = HdncConfig.getHdncBloGroup();
    /*  */
    const setLeft = HdncUtil.hdncUtilCache["hdncExaBloSgroLeft" + pIndex] + "px";
    hdncExaBloSgroTo[pIndex].style.left = setLeft;
    hdncExaBloSgroBo[pIndex].style.left = setLeft;
  }
  /* ================================================== */
  static setHdnc(pHdncHandler, displayTypeState) {
    const {
      hdncY
    } = HdncConfig.getHdncGroup();
    const {
      hdncZettaTlo
    } = HdncConfig.getHdncTloGroup();
    const {
      hdncExaBlo
    } = HdncConfig.getHdncBloGroup();
    const {
      hdncYottaSfroTgro,
      hdncYottaSfroBgro
    } = HdncConfig.getHdncYottaGroup();
    /*  */
    const eventData = {};
    /*  */
    if (displayTypeState === 1) {
      hdncYottaSfroTgro.classList.remove("cl-mdt-hdnc-y-sfro-handler");
      hdncYottaSfroBgro.classList.remove("cl-mdt-hdnc-y-sfro-handler");
    }
    /*  */
    for (let i = 0; i < hdncZettaTlo.length; i++) {
      if (hdncY[i].isActive) {
        switch (displayTypeState) {
          case 1: {
            eventData.currentTarget = hdncZettaTlo[i];
            pHdncHandler.mdtHdncZettaTlo(eventData);
            break;
          }
          case 2: {
            eventData.currentTarget = hdncZettaTlo[i];
            pHdncHandler.tdtHdncZettaTlo(eventData);
            break;
          }
          case 3: {
            eventData.currentTarget = hdncZettaTlo[i];
            eventData.type = "mouseleave";
            pHdncHandler.ddtHdncYotta(eventData);
            /*  */
            const {
              hdncPetaBlo
            } = HdncConfig.getHdncBloEbGroup(i);
            for (let j = 0; j < hdncExaBlo[i].length; j++) {
              eventData.currentTarget = hdncPetaBlo[j];
              eventData.type = "mouseleave";
              pHdncHandler.ddtHdncPetaBlo(eventData);
            }
            break;
          }
        }
      }
    }
  }
  /* -------------------------------------------------- */
  static setTdtHdnc(pHdncHandler, targetIndex) {
    const {
      hdncY
    } = HdncConfig.getHdncGroup();
    const {
      hdncZettaTlo
    } = HdncConfig.getHdncTloGroup();
    /*  */
    const eventData = {};
    for (let i = 0; i < hdncY.length; i++) {
      if (hdncY[i].isActive && targetIndex !== i) {
        eventData.currentTarget = hdncZettaTlo[i];
        pHdncHandler.tdtHdncZettaTlo(eventData);
        return;
      }
    }
  }
}
class HdncUtilTime {
  static timerHdncGigaBloBgro(ybIndex) {
    const {
      hdncGigaBloBgro
    } = HdncConfig.getHdncBloEbGroup(ybIndex);
    for (let ebi = 0; ebi < hdncGigaBloBgro.length; ebi++) {
      /* hdncGigaBloBgro[ebi].timerId */
      setTimeout(
        HdncUtilTime.timeoutHdncGigaBloBgro,
        150 * ebi,
        ybIndex,
        ebi
      );
    }
  }
  /* -------------------------------------------------- */
  static timeoutHdncGigaBloBgro(ybIndex, ebIndex) {
    HdncUtilSet.setHdncGigaBloBgroWidth(ybIndex, true, ebIndex);
  }
  /* -------------------------------------------------- */
  /* ================================================== */
  static timerMdtHdncYotta(pIndex) {
    const {
      hdncY
    } = HdncConfig.getHdncGroup();
    const {
      hdncPetaBlo,
      hdncGigaBloText,
      hdncGigaBloBgro
    } = HdncConfig.getHdncBloEbGroup(pIndex);
    const gigaBgroBuffer = 24;
    if (hdncY[pIndex].isResize) {
      for (let i = 0; i < hdncGigaBloBgro.length; i++) {
        /* HdncUtilSet.setDataHdncGigaBloBgro_Old(
          hdncGigaBloBgro[i],
          hdncGigaBloText[i],
          gigaBgroBuffer
        ); */
      }
      hdncY[pIndex].isSensorResize = false;
      hdncY[pIndex].isResize = false;
    } else if (hdncY[pIndex].isSensorResize) {
      /* Only MDT */
      for (let i = 0; i < hdncGigaBloBgro.length; i++) {
        /* HdncUtilSet.setDataHdncGigaBloBgro_Old(
          hdncGigaBloBgro[i],
          hdncGigaBloText[i],
          gigaBgroBuffer
        ); */
      }
      hdncY[pIndex].isSensorResize = false;
    }
    for (let i = 0; i < hdncGigaBloBgro.length; i++) {
      hdncPetaBlo[i].timeoutId = setTimeout(
        HdncUtilTime.timerMdtHdncPetaBlo,
        150 * i,
        hdncGigaBloBgro[i]
      );
    }
  }
  static timerMdtHdncPetaBlo(setElement) {
    /* HdncUtilSet.setHdncGigaBloBgro_Old(setElement, true); */
  }
  static timerHdncGigaBloBgro_Old(ebIndex) {
    const {
      hdncGigaBloBgro
    } = HdncConfig.getHdncBloEbGroup(ebIndex);
    for (let i = 0; i < hdncGigaBloBgro.length; i++) {
      hdncGigaBloBgro[i].timeoutId = setTimeout(
        HdncUtilTime.timeoutHdncGigaBloBgro_Old,
        150 * i,
        hdncGigaBloBgro[i]
      );
    }
  }
  static timeoutHdncGigaBloBgro_Old(pElement) {
    /* HdncUtilSet.setHdncGigaBloBgroWidth_Old(pElement, true); */
  }
  static timerDdtHdncYotta(hdncBloEbIndex, timeoutFlag) {
    const {
      hdncY
    } = HdncConfig.getHdncGroup();
    if (hdncY[hdncBloEbIndex].isResize) {
      const {
        hdncGigaBloText,
        hdncGigaBloBgro
      } = HdncConfig.getHdncBloEbGroup(hdncBloEbIndex);
      const gigaBgroBuffer = 32;
      for (let i = 0; i < hdncGigaBloBgro.length; i++) {
        /* HdncUtilSet.setDataHdncGigaBloBgro_Old(
          hdncGigaBloBgro[i],
          hdncGigaBloText[i],
          gigaBgroBuffer
        ); */
      }
      hdncY[hdncBloEbIndex].isResize = false;
    }
    timeoutFlag.isTimeout = true;
  }
  static timerDdtHdncPetaBlo(setElement, timerElement, timeoutFlag) {
    if (timeoutFlag.isTimeout) {
      /* HdncUtilSet.setHdncGigaBloBgro_Old(setElement, true); */
    } else {
      /* timerElement.timeoutId = setTimeout(
        HdncUtilSet.setDdtHdncPetaBloTimer,
        50,
        setElement,
        timerElement,
        timeoutFlag
      ); */
    }
  }
}
/* ================================================== */
class HdncUtil {
  static hdncUtilCache = {};
  /* -------------------------------------------------- */
  static setHdnc(pHdncHandler, displayType) {
    HdncUtilSet.setHdnc(pHdncHandler, displayType);
  }
  static setTdtHdnc(pHdncHandler, pIndex) {
    HdncUtilSet.setTdtHdnc(pHdncHandler, pIndex);
  }
  /* -------------------------------------------------- */
  static updateHdncGigaBloBgroLeft(ybIndex) {
    HdncUtilUpdate.updateHdncGigaBloBgroLeft(ybIndex);
  }
  static updateHdncGigaBloBgroWidth(ybIndex) {
    HdncUtilUpdate.updateHdncGigaBloBgroWidth(ybIndex);
  }
  /*  */
  static setHdncGigaBloBgroLeft(ybIndex) {
    HdncUtilSet.setHdncGigaBloBgroLeft(ybIndex);
  }
  static setHdncGigaBloBgroWidth(ybIndex, pSetWidth, optEbIndex) {
    HdncUtilSet.setHdncGigaBloBgroWidth(ybIndex, pSetWidth, optEbIndex);
  }
  /* -------------------------------------------------- */
  /* static setHdncExaBlo(isSet, pIndex) {
    HdncUtilSet.setHdncExaBlo(isSet, pIndex);
  }
  static setHdncExaBloGridTemplateRows_Old(pIndex, rowRemSize) {
    HdncUtilSet.setHdncExaBloGridTemplateRows_Old(pIndex, rowRemSize);
  } */
  /* static setHdncExaBloMaxHeight(pIndex) {
    HdncUtilSet.setHdncExaBloMaxHeight(pIndex);
  } */
  /* static setDataHdncExaBloMaxHeight() {
    HdncUtilSet.setDataHdncExaBloMaxHeight();
  } */
  /*  */
  static updateHdncExaBloGridTemplateRows() {
    HdncUtilUpdate.updateHdncExaBloGridTemplateRows();
  }
  static updateHdncExaBloMaxHeight() {
    HdncUtilUpdate.updateHdncExaBloMaxHeight();
  }
  static setHdncExaBloGridTemplateRows(ybIndex, pSetGrid) {
    HdncUtilSet.setHdncExaBloGridTemplateRows(ybIndex, pSetGrid);
  }
  static setHdncExaBloMaxHeight() {
    HdncUtilSet.setHdncExaBloMaxHeight();
  }
  /* -------------------------------------------------- */
  static updateHdncExaBloSgroLeft() {
    HdncUtilUpdate.updateHdncExaBloSgroLeft();
  }
  static setHdncExaBloSgroLeft() {
    HdncUtilSet.setHdncExaBloSgroLeft();
  }
  /* -------------------------------------------------- */
  static updateHdncExaBloSgroBoTop() {
    HdncUtilUpdate.updateHdncExaBloSgroBoTop();
  }
  static setHdncExaBloSgroBoTop() {
    HdncUtilSet.setHdncExaBloSgroBoTop();
  }
  /* static setDataHdncExaBloSgro(pIndex) {
    HdncUtilSet.setDataHdncExaBloSgro(pIndex);
  }
  static setDataHdncExaBloSgroTop(pIndex) {
    HdncUtilSet.setDataHdncExaBloSgroTop(pIndex);
  }
  static setDataHdncExaBloSgroLeft(pIndex) {
    HdncUtilSet.setDataHdncExaBloSgroLeft(pIndex);
  }
  static setHdncExaBloSgro(pIndex) {
    HdncUtilSet.setHdncExaBloSgro(pIndex);
  }
  static setHdncExaBloSgroTop_Old(pIndex) {
    HdncUtilSet.setHdncExaBloSgroTop_Old(pIndex);
  }
  static setHdncExaBloSgroLeft_Old(pIndex) {
    HdncUtilSet.setHdncExaBloSgroLeft_Old(pIndex);
  } */
  /* -------------------------------------------------- */
  /* static setTimerMdtHdncYotta(pIndex) {
    HdncUtilTime.timerMdtHdncYotta(pIndex);
  }
  static setTimerMdtHdncPetaBlo(setElement) {
    HdncUtilTime.timerMdtHdncPetaBlo(setElement);
  }
  static setTimerHdncGigaBloBgro(ebIndex) {
    HdncUtilTime.timerHdncGigaBloBgro(ebIndex);
  }
  static setTimeoutHdncGigaBloBgro(pElement) {
    HdncUtilTime.timeoutHdncGigaBloBgro(pElement);
  }
  static setDdtHdncYottaTimer(hdncBloEbIndex, timeoutFlag) {
    HdncUtilTime.timerDdtHdncYotta(hdncBloEbIndex, timeoutFlag);
  }
  static setDdtHdncPetaBloTimer(setElement, timerElement, timeoutFlag) {
    HdncUtilTime.timerDdtHdncPetaBlo(setElement, timerElement, timeoutFlag);
  } */
  static timerHdncGigaBloBgro(ybIndex) {
    HdncUtilTime.timerHdncGigaBloBgro(ybIndex);
  }
}
/*  */
export {
  HdncUtil
};
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */