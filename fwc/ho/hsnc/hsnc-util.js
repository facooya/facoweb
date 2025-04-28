/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  FwaConfig
} from "../../../fwa/fwa-config.js";
import {
  HsncConfig
} from "../../fwc-hub.js";
/*  */
class HdncUtilManager {

}
class HsncUtilUpdate {
  static updateHsncExaBloGridTemplateRows() {
    const {
      hsncExaBlo
    } = HsncConfig.getHsncBloGroup();
    const enableGridRowRemSize = 4;
    const disableGridRowRemSize = 0;
    for (let ybi = 0; ybi < hsncExaBlo.length; ybi++) {
      const {
        hsncPetaBlo
      } = HsncConfig.getHsncBloEbGroup(ybi);
      let setEnableGridRow = "";
      let setDisableGridRow = "";
      for (let ebi = 0; ebi < hsncPetaBlo.length; ebi++) {
        setEnableGridRow += enableGridRowRemSize + "rem" + " ";
        setDisableGridRow += disableGridRowRemSize + "rem" + " ";
      }
      hsncExaBlo[ybi].dataset.enableGridRow = setEnableGridRow;
      hsncExaBlo[ybi].dataset.disableGridRow = setDisableGridRow;
    }
  }
  /* ================================================== */
  static updateHsncGigaBloBgroLeft(ybIndex) {
    const {
      hsncTeraBlo,
      hsncGigaBloText,
      hsncGigaBloBgro
    } = HsncConfig.getHsncBloEbGroup(ybIndex);
    const bufferWidth = 24;
    for (let ebi = 0; ebi < hsncGigaBloBgro.length; ebi++) {
      const hsncGigaBloTextWidth = hsncGigaBloText[ebi].offsetWidth;
      const hsncTeraBloWidth = hsncTeraBlo[ebi].offsetWidth;
      const calcLeft = (hsncTeraBloWidth - (hsncGigaBloTextWidth + bufferWidth)) / 2;
      const setLeft = calcLeft + "px";
      /*  */
      /* hsncGigaBloBgro[ebi].dataset.calcLeft = calcLeft; */
      hsncGigaBloBgro[ebi].dataset.left = setLeft;
    }
  }
  /* -------------------------------------------------- */
  static updateHsncGigaBloBgroWidth(ybIndex) {
    const {
      hsncGigaBloText,
      hsncGigaBloBgro
    } = HsncConfig.getHsncBloEbGroup(ybIndex);
    const bufferWidth = 24;
    for (let ebi = 0; ebi < hsncGigaBloBgro.length; ebi++) {
      const hsncGigaBloTextWidth = hsncGigaBloText[ebi].offsetWidth;
      const calcWidth = hsncGigaBloTextWidth + bufferWidth;
      const setWidth = calcWidth + "px";
      /*  */
      /* hsncGigaBloBgro[ebi].dataset.calcWidth = calcWidth; */
      hsncGigaBloBgro[ebi].dataset.width = setWidth;
    }
  }
}
class HsncUtilSet {
  static setHsncExaBloGridTemplateRows(pSetGrid, optYbIndex) {
    const {
      hsncExaBlo
    } = HsncConfig.getHsncBloGroup();
    /*  */
    let optionMode = 0;
    if (optYbIndex !== undefined) {
      optionMode = 1;
    }
    /*  */
    switch (optionMode) {
      case 0: {
        let getGridRow = "";
        for (let ybi = 0; ybi < hsncExaBlo.length; ybi++) {
          if (pSetGrid) {
            getGridRow = hsncExaBlo[ybi].dataset.enableGridRow;
          } else {
            getGridRow = hsncExaBlo[ybi].dataset.disableGridRow;
          }
          hsncExaBlo[ybi].style.gridTemplateRows = getGridRow;
        }
        break;
      }
      case 1: {
        let getGridRow = "";
        if (pSetGrid) {
          getGridRow = hsncExaBlo[optYbIndex].dataset.enableGridRow;
        } else {
          getGridRow = hsncExaBlo[optYbIndex].dataset.disableGridRow;
        }
        hsncExaBlo[optYbIndex].style.gridTemplateRows = getGridRow;
        break;
      }
    }
  }
  /* ================================================== */
  static setHsncGigaBloBgroLeft(ybIndex) {
    const {
      hsncGigaBloBgro
    } = HsncConfig.getHsncBloEbGroup(ybIndex);
    for (let ebi = 0; ebi < hsncGigaBloBgro.length; ebi++) {
      const getLeft = hsncGigaBloBgro[ebi].dataset.left;
      hsncGigaBloBgro[ebi].style.left = getLeft;
    }
  }
  /* -------------------------------------------------- */
  static setHsncGigaBloBgroWidth(ybIndex, pSetWidth, optEbIndex) {
    const {
      hsncGigaBloBgro
    } = HsncConfig.getHsncBloEbGroup(ybIndex);
    /*  */
    let optionMode = 0;
    if (optEbIndex !== undefined) {
      optionMode = 1;
    }
    /*  */
    switch (optionMode) {
      case 0: {
        let getWidth = "";
        for (let ebi = 0; ebi < hsncGigaBloBgro.length; ebi++) {
          if (pSetWidth) {
            getWidth = hsncGigaBloBgro[ebi].dataset.width;
          }
          hsncGigaBloBgro[ebi].style.width = getWidth;
        }
        break;
      }
      case 1: {
        let getWidth = "";
        if (pSetWidth) {
          getWidth = hsncGigaBloBgro[optEbIndex].dataset.width;
        }
        hsncGigaBloBgro[optEbIndex].style.width = getWidth;
        break;
      }
    }
  }
}
class HsncUtilTime {
  static timerHsncGigaBloBgro(ybIndex, pSetTimer) {
    const {
      hsncGigaBloBgro
    } = HsncConfig.getHsncBloEbGroup(ybIndex);
    /*  */
    for (let ebi = 0; ebi < hsncGigaBloBgro.length; ebi++) {
      if (pSetTimer) {
        hsncGigaBloBgro[ebi].timerId = setTimeout(
          HsncUtilTime.timeoutHsncGigaBloBgro,
          150 * ebi,
          ybIndex,
          ebi
        );
      } else {
        clearTimeout(hsncGigaBloBgro[ebi].timerId);
      }
    }
  }
  /* -------------------------------------------------- */
  static timeoutHsncGigaBloBgro(ybIndex, ebIndex) {
    HsncUtilSet.setHsncGigaBloBgroWidth(ybIndex, true, ebIndex);
  }
}
class HsncUtilReset {
  static resetHsncHandler(pHsncHandler, optDisplayType) {
    const {
      hsncY
    } = HsncConfig.getHsncGroup();
    const {
      hsncZettaTlo
    } = HsncConfig.getHsncTloGroup();
    /*  */
    const modifyEventData = {};
    let displayType = FwaConfig.previousDisplayType;
    if (optDisplayType !== undefined) {
      displayType = optDisplayType;
    }
    /*  */
    for (let ybi = 0; ybi < hsncZettaTlo.length; ybi++) {
      if (hsncY[ybi].isActive) {
        switch (displayType) {
          case 1: {
            modifyEventData.currentTarget = hsncZettaTlo[ybi];
            pHsncHandler.mdtHsncZettaTlo(modifyEventData);
            break;
          }
          case 2: {
            modifyEventData.currentTarget = hsncZettaTlo[ybi];
            pHsncHandler.tdtHsncZettaTlo(modifyEventData);
            break;
          }
          case 3: {
            modifyEventData.currentTarget = hsncZettaTlo[ybi];
            modifyEventData.type = "click"; 
            pHsncHandler.ddtHsncZettaTlo(modifyEventData); 
            modifyEventData.type = "mouseleave"; 
            pHsncHandler.ddtHsncZettaTlo(modifyEventData);
            break;
          }
        }
      }
    }
  }
}
class HsncUtil {
  static hsncUtilCache = {};
  /* -------------------------------------------------- */
  static updateHsncExaBloGridTemplateRows() {
    HsncUtilUpdate.updateHsncExaBloGridTemplateRows();
  }
  /*  */
  static setHsncExaBloGridTemplateRows(pSetGrid, optYbIndex) {
    HsncUtilSet.setHsncExaBloGridTemplateRows(pSetGrid, optYbIndex);
  }
  /* -------------------------------------------------- */
  static updateHsncGigaBloBgroLeft(ybIndex) {
    HsncUtilUpdate.updateHsncGigaBloBgroLeft(ybIndex);
  }
  static updateHsncGigaBloBgroWidth(ybIndex) {
    HsncUtilUpdate.updateHsncGigaBloBgroWidth(ybIndex);
  }
  /*  */
  static setHsncGigaBloBgroLeft(ybIndex) {
    HsncUtilSet.setHsncGigaBloBgroLeft(ybIndex);
  }
  static setHsncGigaBloBgroWidth(ybIndex, pSetWidth, optEbIndex) {
    HsncUtilSet.setHsncGigaBloBgroWidth(ybIndex, pSetWidth, optEbIndex);
  }
  /*  */
  static timerHsncGigaBloBgro(ybIndex, pSetTimer) {
    HsncUtilTime.timerHsncGigaBloBgro(ybIndex, pSetTimer);
  }
  /* -------------------------------------------------- */
  static resetHsncHandler(pHsncHandler, optDisplayType) {
    HsncUtilReset.resetHsncHandler(pHsncHandler, optDisplayType);
  }
}
export {
  HsncUtil
};
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */