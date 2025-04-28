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
  static setDataHdncGigaBloBgro_Old(setElement, referElement, buffer) {
    const referWidth = referElement.offsetWidth;
    /* calc(50% - (referWidth / 2)px - (buffer / 2)px); */
    const setLeftData = "calc" +
      "(" + "50%" + " - " +
      (referWidth / 2).toString() + "px" + " - " +
      (buffer / 2).toString() + "px" + ")";
    const setWidthData = (referWidth + buffer).toString() + "px";
    /*  */
    setElement.left = setLeftData;
    setElement.width = setWidthData;
  }
  /* ================================================== */
  static setHdncGigaBloBgro_Old(setElement, isWidthActive) {
    let setLeft = setElement.left;
    let setWidth = null;
    if (isWidthActive) {
      setWidth = setElement.width;
    } else {
      setWidth = "";
    }
    setElement.style.left = setLeft;
    setElement.style.width = setWidth;
  }
  /* -------------------------------------------------- */
  static setDataHdncGigaBloBgro(ebIndex) {
    const {
      hdncTeraBlo,
      hdncGigaBloText,
      hdncGigaBloBgro
    } = HdncConfig.getHdncBloEbGroup(ebIndex);
    /*  */
    const bufferWidth = 24;
    let hdncGigaBloTextWidth = null;
    let hdncTeraBloWidth = null;
    /*  */
    for (let i = 0; i < hdncGigaBloBgro.length; i++) {
      hdncGigaBloTextWidth = hdncGigaBloText[i].offsetWidth;
      hdncTeraBloWidth = hdncTeraBlo[i].offsetWidth;
      /*  */
      HdncUtilSet.setDataHdncGigaBloBgroLeft(
        hdncGigaBloBgro[i],
        hdncGigaBloTextWidth,
        hdncTeraBloWidth,
        bufferWidth
      );
      HdncUtilSet.setDataHdncGigaBloBgroWidth(
        hdncGigaBloBgro[i],
        hdncGigaBloTextWidth,
        bufferWidth
      );
    }
  }
  /* -------------------------------------------------- */
  static setDataHdncGigaBloBgroLeft(pElement, hgbtWidth, htbWidth, bWidth) {
    const setLeft = (htbWidth - (hgbtWidth + bWidth)) / 2 + "px";
    pElement.dataset.left = setLeft;
  }
  static setDataHdncGigaBloBgroWidth(pElement, hgbtWidth, bWidth) {
    const setWidth = hgbtWidth + bWidth + "px";
    pElement.dataset.width = setWidth
  }
  /* -------------------------------------------------- */
  static setHdncGigaBloBgro(ebIndex, pSetWidth) {
    const {
      hdncGigaBloBgro
    } = HdncConfig.getHdncBloEbGroup(ebIndex);
    /*  */
    for (let i = 0; i < hdncGigaBloBgro.length; i++) {
      HdncUtilSet.setHdncGigaBloBgroLeft_Old(hdncGigaBloBgro[i]);
      HdncUtilSet.setHdncGigaBloBgroWidth_Old(hdncGigaBloBgro[i], pSetWidth);
    }
  }
  /* -------------------------------------------------- */
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
  static setHdncGigaBloBgroWidth(ybIndex, pSetWidth) {
    const {
      hdncGigaBloBgro
    } = HdncConfig.getHdncBloEbGroup(ybIndex);
    let setWidth = "";
    for (let ebi = 0; ebi < hdncGigaBloBgro.length; ebi++) {
      if (pSetWidth) {
        setWidth = hdncGigaBloBgro[ebi].dataset.width;
      }
      hdncGigaBloBgro[ebi].style.width = setWidth;
    }
  }
  /* -------------------------------------------------- */
  static setHdncGigaBloBgroLeft_Old(pElement) {
    const setLeft = pElement.dataset.left;
    pElement.style.left = setLeft;
  }
  /* -------------------------------------------------- */
  static setHdncGigaBloBgroWidth_Old(pElement, pSetWidth) {
    let setWidth = null;
    if (pSetWidth) {
      setWidth = pElement.dataset.width;
    } else {
      setWidth = "";
    }
    pElement.style.width = setWidth;
  }
  /* -------------------------------------------------- */
  /* static setTimerHdncGigaBloBgro(ebIndex) {
    const {
      hdncGigaBloBgro
    } = HdncConfig.getHdncBloEbGroup(ebIndex);
    for (let i = 0; i < hdncGigaBloBgro.length; i++) {
      hdncGigaBloBgro[i].timeoutId = setTimeout(
        HdncUtilSet.setTimeoutHdncGigaBloBgro,
        150 * i,
        hdncGigaBloBgro[i]
      );
    }
  } */
  /* -------------------------------------------------- */
  /* static setTimeoutHdncGigaBloBgro(pElement) {
    HdncUtilSet.setHdncGigaBloBgroWidth_Old(pElement, true);
  } */
  /* ================================================== */
  /* static setTimerMdtHdncYotta(targetIndex) {
    const {
      hdncY
    } = HdncConfig.getHdncGroup();
    const {
      hdncPetaBlo,
      hdncGigaBloText,
      hdncGigaBloBgro
    } = HdncConfig.getHdncBloEbGroup(targetIndex);
    const gigaBgroBuffer = 24;
    if (hdncY[targetIndex].isResize) {
      for (let i = 0; i < hdncGigaBloBgro.length; i++) {
        HdncUtilSet.setDataHdncGigaBloBgro_Old(
          hdncGigaBloBgro[i],
          hdncGigaBloText[i],
          gigaBgroBuffer
        );
      }
      hdncY[targetIndex].isSensorResize = false;
      hdncY[targetIndex].isResize = false;
    } else if (hdncY[targetIndex].isSensorResize) {
      /* Only MDT 
      for (let i = 0; i < hdncGigaBloBgro.length; i++) {
        HdncUtilSet.setDataHdncGigaBloBgro_Old(
          hdncGigaBloBgro[i],
          hdncGigaBloText[i],
          gigaBgroBuffer
        );
      }
      hdncY[targetIndex].isSensorResize = false;
    }
    for (let i = 0; i < hdncGigaBloBgro.length; i++) {
      hdncPetaBlo[i].timeoutId = setTimeout(
        HdncUtilSet.setTimerMdtHdncPetaBlo,
        150 * i,
        hdncGigaBloBgro[i]
      );
    }
  } */
  /* ================================================== */
  /* static setDdtHdncYottaTimer(hdncBloEbIndex, timeoutFlag) {
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
        HdncUtilSet.setDataHdncGigaBloBgro_Old(
          hdncGigaBloBgro[i],
          hdncGigaBloText[i],
          gigaBgroBuffer
        );
      }
      hdncY[hdncBloEbIndex].isResize = false;
    }
    timeoutFlag.isTimeout = true;
  } */
  /* ================================================== */
  /* static setTimerMdtHdncPetaBlo(setElement) {
    HdncUtilSet.setHdncGigaBloBgro_Old(setElement, true);
  } */
  /* ================================================== */
  /* static setDdtHdncPetaBloTimer(setElement, timerElement, timeoutFlag) {
    if (timeoutFlag.isTimeout) {
      HdncUtilSet.setHdncGigaBloBgro_Old(setElement, true);
    } else {
      timerElement.timeoutId = setTimeout(
        HdncUtilSet.setDdtHdncPetaBloTimer,
        50,
        setElement,
        timerElement,
        timeoutFlag
      );
    }
  } */
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
    HdncUtilSet.setHdncExaBloGridTemplateRows(pIndex, rowRemSize);
    if (hdncExaBlo[pIndex].dataset.isSensorHeightResized && isSet) {
      HdncUtilSet.setHdncExaBloMaxHeight(pIndex);
    }
  }
  /* -------------------------------------------------- */
  static setHdncExaBloGridTemplateRows(pIndex, rowRemSize) {
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
  /* -------------------------------------------------- */
  static setHdncExaBloMaxHeight(pIndex) {
    const {
      hdncExaBlo
    } = HdncConfig.getHdncBloGroup();
    const setMaxHeight =
      HdncUtil.hdncUtilCache["hdncExaBloMaxHeight"] + "px";
    hdncExaBlo[pIndex].style.maxHeight = setMaxHeight;
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
    HdncUtilSet.setHdncExaBloSgroTop(pIndex);
    HdncUtilSet.setHdncExaBloSgroLeft(pIndex);
  }
  /* ------------------------------ */
  static setHdncExaBloSgroTop(pIndex) {
    const {
      hdncExaBloSgroBo
    } = HdncConfig.getHdncBloGroup();
    /*  */
    const setTop = hdncExaBloSgroBo[pIndex].dataset.top;
    hdncExaBloSgroBo[pIndex].style.top = setTop;
  }
  /* ------------------------------ */
  static setHdncExaBloSgroLeft(pIndex) {
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
        HdncUtilSet.setDataHdncGigaBloBgro_Old(
          hdncGigaBloBgro[i],
          hdncGigaBloText[i],
          gigaBgroBuffer
        );
      }
      hdncY[pIndex].isSensorResize = false;
      hdncY[pIndex].isResize = false;
    } else if (hdncY[pIndex].isSensorResize) {
      /* Only MDT */
      for (let i = 0; i < hdncGigaBloBgro.length; i++) {
        HdncUtilSet.setDataHdncGigaBloBgro_Old(
          hdncGigaBloBgro[i],
          hdncGigaBloText[i],
          gigaBgroBuffer
        );
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
    HdncUtilSet.setHdncGigaBloBgro_Old(setElement, true);
  }
  static timerHdncGigaBloBgro(ebIndex) {
    const {
      hdncGigaBloBgro
    } = HdncConfig.getHdncBloEbGroup(ebIndex);
    for (let i = 0; i < hdncGigaBloBgro.length; i++) {
      hdncGigaBloBgro[i].timeoutId = setTimeout(
        HdncUtilTime.timeoutHdncGigaBloBgro,
        150 * i,
        hdncGigaBloBgro[i]
      );
    }
  }
  static timeoutHdncGigaBloBgro(pElement) {
    HdncUtilSet.setHdncGigaBloBgroWidth_Old(pElement, true);
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
        HdncUtilSet.setDataHdncGigaBloBgro_Old(
          hdncGigaBloBgro[i],
          hdncGigaBloText[i],
          gigaBgroBuffer
        );
      }
      hdncY[hdncBloEbIndex].isResize = false;
    }
    timeoutFlag.isTimeout = true;
  }
  static timerDdtHdncPetaBlo(setElement, timerElement, timeoutFlag) {
    if (timeoutFlag.isTimeout) {
      HdncUtilSet.setHdncGigaBloBgro_Old(setElement, true);
    } else {
      timerElement.timeoutId = setTimeout(
        HdncUtilSet.setDdtHdncPetaBloTimer,
        50,
        setElement,
        timerElement,
        timeoutFlag
      );
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
  /* static setDataHdncGigaBloBgro_Old(setElement, referElement, buffer) {
    HdncUtilSet.setDataHdncGigaBloBgro_Old(setElement, referElement, buffer);
  }
  static setHdncGigaBloBgro_Old(setElement, isWidthActive) {
    HdncUtilSet.setHdncGigaBloBgro_Old(setElement, isWidthActive);
  } */
  /* static setDataHdncGigaBloBgro(ebIndex) {
    HdncUtilSet.setDataHdncGigaBloBgro(ebIndex);
  }
  static setDataHdncGigaBloBgroLeft(pElement, hgbtWidth, htbWidth, bWidth) {
    HdncUtilSet.setDataHdncGigaBloBgroLeft(pElement, hgbtWidth, htbWidth, bWidth);
  }
  static setDataHdncGigaBloBgroWidth(pElement, hgbtWidth, bWidth) {
    HdncUtilSet.setDataHdncGigaBloBgroWidth(pElement, hgbtWidth, bWidth);
  }*/
  /*  */
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
  static setHdncGigaBloBgroWidth(ybIndex, pSetWidth) {
    HdncUtilSet.setHdncGigaBloBgroWidth(ybIndex, pSetWidth);
  }
  /*  */
  /* static setHdncGigaBloBgro(ebIndex, pSetWidth) {
    HdncUtilSet.setHdncGigaBloBgro(ebIndex, pSetWidth);
  }
  static setHdncGigaBloBgroLeft_Old(pElement) {
    HdncUtilSet.setHdncGigaBloBgroLeft_Old(pElement);
  }
  static setHdncGigaBloBgroWidth_Old(pElement, pSetWidth) {
    HdncUtilSet.setHdncGigaBloBgroWidth_Old(pElement, pSetWidth);
  } */
  /* -------------------------------------------------- */
  static setHdncExaBlo(isSet, pIndex) {
    HdncUtilSet.setHdncExaBlo(isSet, pIndex);
  }
  static setHdncExaBloGridTemplateRows(pIndex, rowRemSize) {
    HdncUtilSet.setHdncExaBloGridTemplateRows(pIndex, rowRemSize);
  }
  static setHdncExaBloMaxHeight(pIndex) {
    HdncUtilSet.setHdncExaBloMaxHeight(pIndex);
  }
  static setDataHdncExaBloMaxHeight() {
    HdncUtilSet.setDataHdncExaBloMaxHeight();
  }
  /* -------------------------------------------------- */
  static setDataHdncExaBloSgro(pIndex) {
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
  static setHdncExaBloSgroTop(pIndex) {
    HdncUtilSet.setHdncExaBloSgroTop(pIndex);
  }
  static setHdncExaBloSgroLeft(pIndex) {
    HdncUtilSet.setHdncExaBloSgroLeft(pIndex);
  }
  /* -------------------------------------------------- */
  static setTimerMdtHdncYotta(pIndex) {
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