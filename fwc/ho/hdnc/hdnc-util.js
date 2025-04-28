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
      hdncExaBlo[ybi].dataset.setEnableGridRow = setEnableGridRow;
      hdncExaBlo[ybi].dataset.setDisableGridRow = setDisableGridRow;
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
      hdncGigaBloBgro[ebi].dataset.calcLeft = calcLeft;
      hdncGigaBloBgro[ebi].dataset.setLeft = setLeft;
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
      hdncGigaBloBgro[ebi].dataset.calcWidth = calcWidth;
      hdncGigaBloBgro[ebi].dataset.setWidth = setWidth;
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
      const getLeft = hdncGigaBloBgro[ebi].dataset.setLeft;
      hdncGigaBloBgro[ebi].style.left = getLeft;
    }
  }
  /* -------------------------------------------------- */
  static setHdncGigaBloBgroWidth(ybIndex, pSetWidth, optEbIndex) {
    const {
      hdncGigaBloBgro
    } = HdncConfig.getHdncBloEbGroup(ybIndex);
    /*  */
    let optionMode = 0;
    if (optEbIndex == null) {
      optionMode = 1;
    } else {
      optionMode = 2;
    }
    /*  */
    switch (optionMode) {
      case 1: {
        let getWidth = "";
        for (let ebi = 0; ebi < hdncGigaBloBgro.length; ebi++) {
          if (pSetWidth) {
            getWidth = hdncGigaBloBgro[ebi].dataset.setWidth;
          }
          hdncGigaBloBgro[ebi].style.width = getWidth;
        }
        break;
      }
      case 2: {
        let getWidth = "";
        if (pSetWidth) {
          getWidth = hdncGigaBloBgro[optEbIndex].dataset.setWidth;
        }
        hdncGigaBloBgro[optEbIndex].style.width = getWidth;
        break;
      }
      default: {
        console.log("HdncUtil.setHdncGigaBloBgroWidth::optionMode:Error");
        break;
      }
    }
    /* if (isOption) {
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
    } */
  }
  /* ================================================== */
  static setHdncExaBloGridTemplateRows(pSetGrid, optYbIndex) {
    const {
      hdncExaBlo
    } = HdncConfig.getHdncBloGroup();
    /*  */
    let optionMode = 0;
    if (optYbIndex !== undefined) {
      optionMode = 1;
    }
    /*  */
    switch (optionMode) {
      case 0: {
        let getGridRow = "";
        for (let ybi = 0; ybi < hdncExaBlo.length; ybi++) {
          if (pSetGrid) {
            getGridRow = hdncExaBlo[ybi].dataset.setEnableGridRow;
          } else {
            getGridRow = hdncExaBlo[ybi].dataset.setDisableGridRow;
          }
          hdncExaBlo[ybi].style.gridTemplateRows = getGridRow;
        }
        break;
      }
      case 1: {
        let getGridRow = "";
        if (pSetGrid) {
          getGridRow = hdncExaBlo[optYbIndex].dataset.setEnableGridRow;
        } else {
          getGridRow = hdncExaBlo[optYbIndex].dataset.setDisableGridRow;
        }
        hdncExaBlo[optYbIndex].style.gridTemplateRows = getGridRow;
        break;
      }
    }
    /*  */
    /* let getGridRow = "";
    if (pSetGrid) {
      getGridRow = hdncExaBlo[ybIndex].dataset.setEnableGridRow;
    } else {
      getGridRow = hdncExaBlo[ybIndex].dataset.setDisableGridRow;
    }
    hdncExaBlo[ybIndex].style.gridTemplateRows = getGridRow; */
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
  static setHdncHandler(pHdncHandler, optDisplayType) {
    const {
      hdncY
    } = HdncConfig.getHdncGroup();
    const {
      hdncZettaTlo
    } = HdncConfig.getHdncTloGroup();
    const {
      hdncExaBlo
    } = HdncConfig.getHdncBloGroup();
    /* const {
      hdncYottaSfroTgro,
      hdncYottaSfroBgro
    } = HdncConfig.getHdncYottaGroup(); */
    /*  */
    const modifyEventData = {};
    /*  */
    /* if (displayTypeState === 1) {
      hdncYottaSfroTgro.classList.remove("cl-mdt-hdnc-y-sfro-handler");
      hdncYottaSfroBgro.classList.remove("cl-mdt-hdnc-y-sfro-handler");
    } */
    let displayType = FwaConfig.previousDisplayType;
    if (optDisplayType !== undefined) {
      displayType = optDisplayType;
    }
    /*  */
    for (let ybi = 0; ybi < hdncZettaTlo.length; ybi++) {
      if (hdncY[ybi].isActive) {
        switch (displayType) {
          case 1: {
            modifyEventData.currentTarget = hdncZettaTlo[ybi];
            pHdncHandler.mdtHdncZettaTlo(modifyEventData);
            break;
          }
          case 2: {
            modifyEventData.currentTarget = hdncZettaTlo[ybi];
            pHdncHandler.tdtHdncZettaTlo(modifyEventData);
            break;
          }
          case 3: {
            modifyEventData.currentTarget = hdncZettaTlo[ybi];
            modifyEventData.type = "mouseleave";
            pHdncHandler.ddtHdncYotta(modifyEventData);
            /*  */
            const {
              hdncPetaBlo
            } = HdncConfig.getHdncBloEbGroup(ybi);
            for (let ebi = 0; ebi < hdncExaBlo[ybi].length; ebi++) {
              modifyEventData.currentTarget = hdncPetaBlo[ebi];
              modifyEventData.type = "mouseleave";
              pHdncHandler.ddtHdncPetaBlo(modifyEventData);
            }
            break;
          }
        }
      }
    }
  }
  /* -------------------------------------------------- */
  /* static setTdtHdnc(pHdncHandler, targetIndex) {
    const {
      hdncY
    } = HdncConfig.getHdncGroup();
    const {
      hdncZettaTlo
    } = HdncConfig.getHdncTloGroup();
    /*  
    const eventData = {};
    for (let i = 0; i < hdncY.length; i++) {
      if (hdncY[i].isActive && targetIndex !== i) {
        eventData.currentTarget = hdncZettaTlo[i];
        pHdncHandler.tdtHdncZettaTlo(eventData);
        return;
      }
    }
  } */
}
class HdncUtilTime {
  static timerHdncGigaBloBgro(ybIndex, pSetTimer) {
    const {
      hdncGigaBloBgro
    } = HdncConfig.getHdncBloEbGroup(ybIndex);
    /*  */
    for (let ebi = 0; ebi < hdncGigaBloBgro.length; ebi++) {
      if (pSetTimer) {
        hdncGigaBloBgro[ebi].timerId = setTimeout(
          HdncUtilTime.timeoutHdncGigaBloBgro,
          150 * ebi,
          ybIndex,
          ebi
        );
      } else {
        clearTimeout(hdncGigaBloBgro[ebi].timerId);
      }
    }
  }
  /* -------------------------------------------------- */
  static timeoutHdncGigaBloBgro(ybIndex, ebIndex) {
    HdncUtilSet.setHdncGigaBloBgroWidth(ybIndex, true, ebIndex);
  }
}
/* ================================================== */
class HdncUtil {
  static hdncUtilCache = {};
  /* -------------------------------------------------- */
  static setHdncHandler(pHdncHandler, optDisplayType) {
    HdncUtilSet.setHdncHandler(pHdncHandler, optDisplayType);
  }
  /* static setTdtHdnc(pHdncHandler, pIndex) {
    HdncUtilSet.setTdtHdnc(pHdncHandler, pIndex);
  } */
  /* -------------------------------------------------- */
  static updateHdncExaBloGridTemplateRows() {
    HdncUtilUpdate.updateHdncExaBloGridTemplateRows();
  }
  static updateHdncExaBloMaxHeight() {
    HdncUtilUpdate.updateHdncExaBloMaxHeight();
  }
  /*  */
  static setHdncExaBloGridTemplateRows(pSetGrid, optYbIndex) {
    HdncUtilSet.setHdncExaBloGridTemplateRows(pSetGrid, optYbIndex);
  }
  static setHdncExaBloMaxHeight() {
    HdncUtilSet.setHdncExaBloMaxHeight();
  }
  /* -------------------------------------------------- */
  static updateHdncExaBloSgroLeft() {
    HdncUtilUpdate.updateHdncExaBloSgroLeft();
  }
  /*  */
  static setHdncExaBloSgroLeft() {
    HdncUtilSet.setHdncExaBloSgroLeft();
  }
  /* -------------------------------------------------- */
  static updateHdncExaBloSgroBoTop() {
    HdncUtilUpdate.updateHdncExaBloSgroBoTop();
  }
  /*  */
  static setHdncExaBloSgroBoTop() {
    HdncUtilSet.setHdncExaBloSgroBoTop();
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
  /*  */
  static timerHdncGigaBloBgro(ybIndex, pSetTimer) {
    HdncUtilTime.timerHdncGigaBloBgro(ybIndex, pSetTimer);
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