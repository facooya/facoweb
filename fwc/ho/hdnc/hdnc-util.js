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
      HdncUtilSet.setHdncGigaBloBgroLeft(hdncGigaBloBgro[i]);
      HdncUtilSet.setHdncGigaBloBgroWidth(hdncGigaBloBgro[i], pSetWidth);
    }
  }
  /* -------------------------------------------------- */
  static setHdncGigaBloBgroLeft(pElement) {
    const setLeft = pElement.dataset.left;
    pElement.style.left = setLeft;
  }
  /* -------------------------------------------------- */
  static setHdncGigaBloBgroWidth(pElement, pSetWidth) {
    let setWidth = null;
    if (pSetWidth) {
      setWidth = pElement.dataset.width;
    } else {
      setWidth = "";
    }
    pElement.style.width = setWidth;
  }
  /* -------------------------------------------------- */
  static setTimerHdncGigaBloBgro(ebIndex) {
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
  }
  /* -------------------------------------------------- */
  static setTimeoutHdncGigaBloBgro(pElement) {
    HdncUtilSet.setHdncGigaBloBgroWidth(pElement, true);
  }
  /* ================================================== */
  static setTimerMdtHdncYotta(targetIndex) {
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
      /* Only MDT */
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
  }
  /* ================================================== */
  static setDdtHdncYottaTimer(hdncBloEbIndex, timeoutFlag) {
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
  /* ================================================== */
  static setTimerMdtHdncPetaBlo(setElement) {
    HdncUtilSet.setHdncGigaBloBgro_Old(setElement, true);
  }
  /* ================================================== */
  static setDdtHdncPetaBloTimer(setElement, timerElement, timeoutFlag) {
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
  /* ================================================== */
  static setHdncExaBlo(/* pCache, */ isSet, pIndex) {
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
      HdncUtilSet.setHdncExaBloMaxHeight(/* pCache, */ pIndex);
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
  static setHdncExaBloMaxHeight(/* pCache, */ pIndex) {
    const {
      hdncExaBlo
    } = HdncConfig.getHdncBloGroup();
    const setMaxHeight =
      /* pCache["hdncExaBloMaxHeight"] + "px"; */
      HdncUtil.hdncUtilCache["hdncExaBloMaxHeight"] + "px";
    hdncExaBlo[pIndex].style.maxHeight = setMaxHeight;
  }
  /* -------------------------------------------------- */
  static setDataHdncExaBloMaxHeight(/* pCache */) {
    let remBuffer = null;
    if (FwaConfig.currentDisplayType === 2) {
      remBuffer = 10;
    } else if (FwaConfig.currentDisplayType === 3) {
      remBuffer = 6;
    }
    const innerHeight = window.innerHeight;
    const calcMaxHeight = innerHeight - (remBuffer * 16);
    /* pCache["hdncExaBloMaxHeight"] = calcMaxHeight; */
    HdncUtil.hdncUtilCache["hdncExaBloMaxHeight"] = calcMaxHeight;
  }
  /* ================================================== */
  static setDataHdncExaBloSgro(/* pCache, */ pIndex) {
    HdncUtilSet.setDataHdncExaBloSgroTop(pIndex);
    HdncUtilSet.setDataHdncExaBloSgroLeft(/* pCache, */ pIndex);
  }
  /* ------------------------------ */
  static setDataHdncExaBloSgroLeft(/* pCache, */ pIndex) {
    const {
      hdncZettaBlo,
      hdncExaBlo
    } = HdncConfig.getHdncBloGroup();
    const hdncZettaBloRect = hdncZettaBlo[pIndex].getBoundingClientRect();
    const hdncExaBloRect = hdncExaBlo[pIndex].getBoundingClientRect();
    const calcLeft = -(hdncZettaBloRect.left - hdncExaBloRect.left) +
      (hdncExaBloRect.width / 2) - 16;
    /*  */
    /* pCache["hdncExaBloSgroLeft" + pIndex] = calcLeft; */
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
  static setHdncExaBloSgro(/* pCache, */ pIndex) {
    HdncUtilSet.setHdncExaBloSgroTop(pIndex);
    HdncUtilSet.setHdncExaBloSgroLeft(/* pCache, */ pIndex);
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
  static setHdncExaBloSgroLeft(/* pCache, */ pIndex) {
    const {
      hdncExaBloSgroTo,
      hdncExaBloSgroBo
    } = HdncConfig.getHdncBloGroup();
    /*  */
    const setLeft = /* pCache["hdncExaBloSgroLeft" + pIndex] + "px"; */
      HdncUtil.hdncUtilCache["hdncExaBloSgroLeft" + pIndex] + "px";
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
  static setDataHdncGigaBloBgro_Old(setElement, referElement, buffer) {
    HdncUtilSet.setDataHdncGigaBloBgro_Old(setElement, referElement, buffer);
  }
  static setHdncGigaBloBgro_Old(setElement, isWidthActive) {
    HdncUtilSet.setHdncGigaBloBgro_Old(setElement, isWidthActive);
  }
  static setDataHdncGigaBloBgro(ebIndex) {
    HdncUtilSet.setDataHdncGigaBloBgro(ebIndex);
  }
  static setDataHdncGigaBloBgroLeft(pElement, hgbtWidth, htbWidth, bWidth) {
    HdncUtilSet.setDataHdncGigaBloBgroLeft(pElement, hgbtWidth, htbWidth, bWidth);
  }
  static setDataHdncGigaBloBgroWidth(pElement, hgbtWidth, bWidth) {
    HdncUtilSet.setDataHdncGigaBloBgroWidth(pElement, hgbtWidth, bWidth);
  }
  static setHdncGigaBloBgro(ebIndex, pSetWidth) {
    HdncUtilSet.setHdncGigaBloBgro(ebIndex, pSetWidth);
  }
  static setHdncGigaBloBgroLeft(pElement) {
    HdncUtilSet.setHdncGigaBloBgroLeft(pElement);
  }
  static setHdncGigaBloBgroWidth(pElement, pSetWidth) {
    HdncUtilSet.setHdncGigaBloBgroWidth(pElement, pSetWidth);
  }
  /* -------------------------------------------------- */
  static setHdncExaBlo(/* pCache, */ isSet, pIndex) {
    HdncUtilSet.setHdncExaBlo(/* pCache, */ isSet, pIndex);
  }
  static setHdncExaBloGridTemplateRows(pIndex, rowRemSize) {
    HdncUtilSet.setHdncExaBloGridTemplateRows(pIndex, rowRemSize);
  }
  static setHdncExaBloMaxHeight(/* pCache, */ pIndex) {
    HdncUtilSet.setHdncExaBloMaxHeight(/* pCache, */ pIndex);
  }
  static setDataHdncExaBloMaxHeight(pCache) {
    HdncUtilSet.setDataHdncExaBloMaxHeight(pCache);
  }
  /* -------------------------------------------------- */
  static setDataHdncExaBloSgro(/* pCache, */ pIndex) {
    HdncUtilSet.setDataHdncExaBloSgro(/* pCache, */ pIndex);
  }
  static setDataHdncExaBloSgroTop(pIndex) {
    HdncUtilSet.setDataHdncExaBloSgroTop(pIndex);
  }
  static setDataHdncExaBloSgroLeft(/* pCache, */ pIndex) {
    HdncUtilSet.setDataHdncExaBloSgroLeft(/* pCache, */ pIndex);
  }
  static setHdncExaBloSgro(/* pCache, */ pIndex) {
    HdncUtilSet.setHdncExaBloSgro(/* pCache, */ pIndex);
  }
  static setHdncExaBloSgroTop(pIndex) {
    HdncUtilSet.setHdncExaBloSgroTop(pIndex);
  }
  static setHdncExaBloSgroLeft(/* pCache, */ pIndex) {
    HdncUtilSet.setHdncExaBloSgroLeft(/* pCache, */ pIndex);
  }
  /* -------------------------------------------------- */
  static setTimerHdncGigaBloBgro(ebIndex) {
    HdncUtilSet.setTimerHdncGigaBloBgro(ebIndex);
  }
  static setTimeoutHdncGigaBloBgro(pElement) {
    HdncUtilSet.setTimeoutHdncGigaBloBgro(pElement);
  }
  static setTimerMdtHdncYotta(pIndex) {
    HdncUtilSet.setTimerMdtHdncYotta(pIndex);
  }
  static setDdtHdncYottaTimer(hdncBloEbIndex, timeoutFlag) {
    HdncUtilSet.setDdtHdncYottaTimer(hdncBloEbIndex, timeoutFlag);
  }
  static setTimerMdtHdncPetaBlo(setElement) {
    HdncUtilSet.setTimerMdtHdncPetaBlo(setElement);
  }
  static setDdtHdncPetaBloTimer(setElement, timerElement, timeoutFlag) {
    HdncUtilSet.setDdtHdncPetaBloTimer(setElement, timerElement, timeoutFlag);
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