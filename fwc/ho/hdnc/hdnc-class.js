/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  FwaConfig
} from "../../../fwa/fwa-config.js";
/* import {
  HdncConfig
} from "./hdnc-config.js";
import {
  HdncUtil
} from "./hdnc-util.js"; */
import {
  HdncTool
} from "./hdnc-tool.js";
import {
  HdncConfig,
  HdncUtil,
  FwcAccessor,
  HtpncAccessor,
  HsncAccessor
} from "../../fwc-hub.js";
/*  */
class HdncAccessor {
  /* static hdncCache = {}; */
  /* =============== :Function: =============== */
  static resetHdnc(displayTypeState) {
    HdncUtil.setHdncHandler(HdncHandler, displayTypeState);
  }
  static setHdnc(displayTypeState) {
    HdncUtil.setHdncHandler(HdncHandler, displayTypeState);
  }
  static getHdncRoot() {
    return HdncConfig.getHdncRoot();
  }
  static getHdncGroup() {
    return HdncConfig.getHdncGroup();
  }
  /*  */
  static getHdncBloGroup() {
    return HdncConfig.getHdncBloGroup();
  }
  /* =============== ;Function; =============== */
}
class HdncController {
  static process() {
    HdncConfig.hdncGenerate();
    HdncManager.init();
  }
  static processOnLoad() {
    HdncManager.event(true);
    HdncManager.initOnLoad();
  }
  static processOnResize() {
    HdncManager.initOnResize();
    HdncManager.event(false);
    HdncManager.event(true);
  }
  static sensorOnResize() {
    HdncManager.initSensorOnResize();
  }
}
class HdncManager {
  static init() {
    /* dataset */
    const {
      hdncY
    } = HdncConfig.getHdncGroup();
    /* const {
      hdncExaBlo
    } = HdncConfig.getHdncBloGroup(); */
    /*  */
    window.previousInnerHeight = window.innerHeight;
    window.previousInnerWidth = window.innerWidth;
    /*  */
    /* for (let i = 0; i < hdncExaBlo.length; i++) {
      const {
        hdncPetaBlo,
        hdncGigaBloBgro
      } = HdncConfig.getHdncBloEbGroup(i);
      /*  
      /* hdncExaBlo[i].timeoutId = null; 
      /*  
      /* hdncExaBlo[i].dataset.timeoutId = null; 
      hdncExaBlo[i].dataset.isSensorWidthResized = true;
      hdncExaBlo[i].dataset.isSensorHeightResized = true;
      /*  
      hdncY[i].isActive = false;
      hdncY[i].index = i;
      /*  
      /* hdncY[i].timeoutId = null; 
      /* hdncY[i].isTimeout = false; 
      /*  
      hdncY[i].isResize = true;
      hdncY[i].isSensorResize = false;
      /*  
      for (let j = 0; j < hdncPetaBlo.length; j++) {
        hdncPetaBlo[j].index = j;
        /*  
        /* hdncPetaBlo[j].timeoutId = null; 
        /* hdncGigaBloBgro[j].timeoutId = null; 
        hdncGigaBloBgro[j].timerId = null;
      }
    } */
    /* !!!!!! v1.1.19a-4 !!!!! */
    for (let ybi = 0; ybi < hdncY.length; ybi++) {
      hdncY[ybi].index = ybi;
      hdncY[ybi].isActive = false;
      /*  */
      const {
        hdncPetaBlo,
        hdncGigaBloBgro
      } = HdncConfig.getHdncBloEbGroup(ybi);
      for (let ebi = 0; ebi < hdncPetaBlo.length; ebi++) {
        hdncPetaBlo[ebi].index = ebi;
        hdncGigaBloBgro[ebi].timerId = null;
      }
    }
  }
  /* -------------------------------------------------- */
  static initOnLoad() {
    /* !!!!! :v1.1.19a-3: !!!!! */
    /* set */
    /* const {
      hdncExaBlo
    } = HdncConfig.getHdncBloGroup(); */
    /* if (FwaConfig.currentDisplayType !== 1) {
      HdncUtil.updateHdncExaBloMaxHeight();
      HdncUtil.setHdncExaBloMaxHeight();
      /*  
      HdncUtil.updateHdncExaBloSgroBoTop();
      HdncUtil.setHdncExaBloSgroBoTop();
    } */
    /* HdncUtil.updateHdncExaBloGridTemplateRows(); */
    /* !!!!! v1.1.19a-4 !!!!! */
    /* HdncUtil.setHdncExaBloGridTemplateRows(false); */
    /* for (let i = 0; i < hdncExaBlo.length; i++) {
      HdncUtil.setHdncExaBloGridTemplateRows(i, false);
    } */
    /*  */
    /* HdncUtil.updateHdncExaBloSgroBoTop();
    HdncUtil.setHdncExaBloSgroBoTop(); */
    /* !!!!! ;v1.1.19a-3; !!!!! */
    switch (FwaConfig.currentDisplayType) {
      case 1: {
        break;
      }
      case 2: {
        const {
          hdncExaBlo
        } = HdncConfig.getHdncBloGroup();
        hdncExaBlo[0].classList.add("cl-tdt-hdnc-z-tlo-handler-nth-1");
        hdncExaBlo[3].classList.add("cl-tdt-hdnc-z-tlo-handler-nth-4");
        /*  */
        HdncUtil.updateHdncExaBloMaxHeight();
        HdncUtil.setHdncExaBloMaxHeight();
        /*  */
        HdncUtil.updateHdncExaBloSgroBoTop();
        HdncUtil.setHdncExaBloSgroBoTop();
        break;
      }
      case 3: {
        HdncUtil.updateHdncExaBloMaxHeight();
        HdncUtil.setHdncExaBloMaxHeight();
        /*  */
        HdncUtil.updateHdncExaBloSgroBoTop();
        HdncUtil.setHdncExaBloSgroBoTop();
        break;
      }
    }
    HdncUtil.updateHdncExaBloGridTemplateRows();
    HdncUtil.setHdncExaBloGridTemplateRows(false);
  }
  /* -------------------------------------------------- */
  static initOnResize() {
    /* const {
      hdncY
    } = HdncConfig.getHdncGroup(); */
    const {
      hdncExaBlo
    } = HdncConfig.getHdncBloGroup();
    const {
      hdncYottaSfroTgro,
      hdncYottaSfroBgro
    } = HdncConfig.getHdncYottaGroup();
    /*  */
    HdncUtil.setHdncHandler(HdncHandler);
    /*  */
    switch (FwaConfig.previousDisplayType) {
      case 1: {
        hdncYottaSfroTgro.classList.remove("cl-mdt-hdnc-y-sfro-handler");
        hdncYottaSfroBgro.classList.remove("cl-mdt-hdnc-y-sfro-handler");
        break;
      }
      case 2: {
        hdncExaBlo[0].classList.remove("cl-tdt-hdnc-z-tlo-handler-nth-1");
        hdncExaBlo[3].classList.remove("cl-tdt-hdnc-z-tlo-handler-nth-4");
        break;
      }
      case 3: {
        break;
      }
    }
    /*  */
    switch (FwaConfig.currentDisplayType) {
      case 1: {
        for (let ybi = 0; ybi < hdncExaBlo.length; ybi++) {
          /* hdncY[i].isSensorResize = false;
          hdncExaBlo[i].isSensorResize = false; */
          hdncExaBlo[ybi].style.maxHeight = "";
        }
        break;
      }
      case 2: {
        hdncExaBlo[0].classList.add("cl-tdt-hdnc-z-tlo-handler-nth-1");
        hdncExaBlo[3].classList.add("cl-tdt-hdnc-z-tlo-handler-nth-4");
        /* for (let i = 0; i < hdncY.length; i++) {
          hdncExaBlo[i].dataset.isSensorWidthResized = true;
          hdncExaBlo[i].dataset.isSensorHeightResized = true;
          /*  
          hdncY[i].isSensorResize = false;
          hdncY[i].isResize = true;
        } */
        break;
      }
      case 3: {
        /* for (let i = 0; i < hdncY.length; i++) {
          hdncExaBlo[i].dataset.isSensorWidthResized = true;
          hdncExaBlo[i].dataset.isSensorHeightResized = true;
          /*  
          hdncY[i].isSensorResize = false;
          hdncY[i].isResize = true;
        } */
        break;
      }
    }
    HdncManager.initSensorOnResize();
  }
  /* -------------------------------------------------- */
  static initSensorOnResize() {
    const {
      hdncY
    } = HdncConfig.getHdncGroup();
    /* !!!!! :v1.1.19a-4: !!!!! */
    switch (FwaConfig.currentDisplayType) {
      case 1: {
        for (let ybi = 0; ybi < hdncY.length; ybi++) {
          if (hdncY[ybi].isActive) {
            HdncUtil.updateHdncGigaBloBgroLeft(ybi);
            HdncUtil.updateHdncGigaBloBgroWidth(ybi);
            /*  */
            HdncUtil.setHdncGigaBloBgroLeft(ybi);
            HdncUtil.setHdncGigaBloBgroWidth(ybi, true);
          }
        }
        HdncHandler.mdtHdncRootScroll();
        break;
      }
      case 2: {
        HdncUtil.updateHdncExaBloMaxHeight();
        HdncUtil.setHdncExaBloMaxHeight();
        /*  */
        HdncUtil.updateHdncExaBloSgroLeft();
        HdncUtil.setHdncExaBloSgroLeft();
        /*  */
        HdncUtil.updateHdncExaBloSgroBoTop();
        HdncUtil.setHdncExaBloSgroBoTop();
        break;
      }
      case 3: {
        HdncUtil.updateHdncExaBloMaxHeight();
        HdncUtil.setHdncExaBloMaxHeight();
        /*  */
        HdncUtil.updateHdncExaBloSgroLeft();
        HdncUtil.setHdncExaBloSgroLeft();
        /*  */
        HdncUtil.updateHdncExaBloSgroBoTop();
        HdncUtil.setHdncExaBloSgroBoTop();
        break;
      }
    }
    /*  */
    /* !!!!! ;v1.1.19a-4; !!!!! */
    /* if (FwaConfig.currentDisplayType === 1) {
      /* const hdncGigaBloBgroBuffer = 24; 
      for (let i = 0; i < hdncY.length; i++) {
        /* hdncY[i].isSensorResize = true; 
        if (hdncY[i].isActive) {
          HdncUtil.updateHdncGigaBloBgroLeft(i);
          HdncUtil.updateHdncGigaBloBgroWidth(i);
          /*  
          HdncUtil.setHdncGigaBloBgroLeft(i);
          HdncUtil.setHdncGigaBloBgroWidth(i, true);
          /* !!!!! ;v1.1.19a-2; !!!!! 
          /* hdncY[i].isSensorResize = false; 
        }
      }
      HdncHandler.mdtHdncRootScroll();
    } */
    /*  */
    /* if (FwaConfig.currentDisplayType !== 1) { */
      /* const {
        hdncExaBlo
      } = HdncConfig.getHdncBloGroup(); */
      /*  */
      /* const innerWidth = window.innerWidth;
      const previousInnerWidth = window.previousInnerWidth;
      const innerHeight = window.innerHeight;
      const previousInnerHeight = window.previousInnerHeight; */
      /*  */
      /* for (let i = 0; i < hdncExaBlo.length; i++) {
        if (innerWidth !== previousInnerWidth) {
          hdncExaBlo[i].dataset.isSensorWidthResized = true;
        }
        if (innerHeight !== previousInnerHeight) {
          hdncExaBlo[i].dataset.isSensorHeightResized = true;
        }
      } */
      /*  */
      /* !!!!! :v1.1.19a-3: !!!!! */
      /* HdncUtil.updateHdncExaBloSgroLeft();
      HdncUtil.setHdncExaBloSgroLeft(); */
      /*  */
      /* for (let i = 0; i < hdncExaBlo.length; i++) {
        if (hdncExaBlo[i].dataset.isSensorWidthResized) { */
          /* HdncUtil.setDataHdncExaBloSgroLeft(i);
          HdncUtil.setHdncExaBloSgroLeft(i); */
          /* hdncExaBlo[i].isSensorWidthResized = false;
        }
      } */
      /* !!!!! ;v1.1.19a-3; !!!!! */
      /* window.previousInnerWidth = innerWidth; */
      /* !!!!! :v1.1.19a-3: !!!!! */
      /* HdncUtil.updateHdncExaBloMaxHeight();
      HdncUtil.setHdncExaBloMaxHeight(); */
      /*  */
      /* HdncUtil.updateHdncExaBloSgroBoTop();
      HdncUtil.setHdncExaBloSgroBoTop(); */
      /*  */
      /* for (let i = 0; i < hdncExaBlo.length; i++) {
        if (hdncExaBlo[i].dataset.isSensorHeightResized) { */
          /* HdncUtil.setHdncExaBloMaxHeight(i); */
          /* hdncExaBlo[i].isSensorHeightResized = false;
        }
      } */
      /* !!!!! ;v1.1.19a-3; !!!!! */
      /* window.previousInnerHeight = innerHeight; */
    /* } */
  }
  /* -------------------------------------------------- */
  static event(isActive) {
    const {
      hdncR
    } = HdncConfig.getHdncRoot();
    const {
      hdncY
    } = HdncConfig.getHdncGroup();
    const {
      hdncZettaTlo
    } = HdncConfig.getHdncTloGroup();
    const {
      hdncExaBlo
    } = HdncConfig.getHdncBloGroup();
    /*  */
    let displayType = FwaConfig.previousDisplayType;
    let eventListenerType = "removeEventListener";
    if (isActive) {
      displayType = FwaConfig.currentDisplayType;
      eventListenerType = "addEventListener";
    }
    /*  */
    switch (displayType) {
      case 1: {
        hdncR[eventListenerType]("scroll", HdncHandler.mdtHdncRootScroll);
        for (let ybi = 0; ybi < hdncY.length; ybi++) {
          hdncZettaTlo[ybi][eventListenerType](
            "click",
            HdncHandler.mdtHdncZettaTlo
          );
          hdncExaBlo[ybi][eventListenerType](
            "transitionend",
            HdncHandler.mdtHdncExaBloTransitionEnd
          );
        }
        break;
      }
      case 2: {
        for (let ybi = 0; ybi < hdncY.length; ybi++) {
          hdncZettaTlo[ybi][eventListenerType](
            "click",
            HdncHandler.tdtHdncZettaTlo
          );
          hdncExaBlo[ybi][eventListenerType](
            "transitionend",
            HdncHandler.tdtHdncExaBloTransitionEnd
          );
        }
        break;
      }
      case 3: {
        for (let ybi = 0; ybi < hdncY.length; ybi++) {
          hdncY[ybi][eventListenerType](
            "mouseenter",
            HdncHandler.ddtHdncYotta
          );
          hdncY[ybi][eventListenerType](
            "mouseleave",
            HdncHandler.ddtHdncYotta
          );
          hdncExaBlo[ybi][eventListenerType](
            "transitionend",
            HdncHandler.ddtHdncExaBloTransitionEnd
          );
          /*  */
          const {
            hdncPetaBlo
          } = HdncConfig.getHdncBloEbGroup(ybi);
          for (let ebi = 0; ebi < hdncPetaBlo.length; ebi++) {
            hdncPetaBlo[ebi][eventListenerType](
              "mouseenter",
              HdncHandler.ddtHdncPetaBlo
            );
            hdncPetaBlo[ebi][eventListenerType](
              "mouseleave",
              HdncHandler.ddtHdncPetaBlo
            );
          }
        }
        break;
      }
    }
    /* !!!!! v1.1.18a [temp] !!!!! */
    /* if (displayType === 1) {
      hdncR[eventListenerType]("scroll", HdncHandler.mdtHdncRootScroll);
    } */
    /*  */
  }
}
class HdncHandler {
  static mdtHdncZettaTlo(eventData) {
    const {
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hdnc-y");
    const {
      hdncY
    } = HdncConfig.getHdncGroup();
    const {
      hdncExaTloText,
      hdncExaTloRgro,
      hdncExaTloBgro
    } = HdncConfig.getHdncTloGroup();
    const {
      hdncTeraBlo
    } = HdncConfig.getHdncBloEbGroup(targetIndex);
    /*  */
    let isActive = false;
    let clType = "remove";
    if (!hdncY[targetIndex].isActive) {
      isActive = true;
      clType = "add";
    }
    /*  */
    /* if (isActive) { */
      /*  */
    /* } else { */
      /*  */
      /* clearTimeout(hdncY[targetIndex].timeoutId); */
      /* !!!!! v1.1.19a-4 !!!!! */
      /* HdncUtil.timerHdncGigaBloBgro(targetIndex, false); */
      /* for (let i = 0; i < hdncGigaBloBgro.length; i++) { */
        /* clearTimeout(hdncPetaBlo[i].timeoutId);
      } */
      /*  */
      /* HdncUtil.setHdncGigaBloBgroWidth(targetIndex, false); */
    /* } */
    if (isActive) {
      /* PASS */
    } else {
      HdncUtil.timerHdncGigaBloBgro(targetIndex, false);
      HdncUtil.setHdncGigaBloBgroWidth(targetIndex, false);
    }
    /*  */
    hdncY[targetIndex].classList[clType]("cl-mdt-hdnc-z-tlo-handler");
    hdncExaTloText[targetIndex].classList[clType]("cl-mdt-hdnc-z-tlo-handler");
    hdncExaTloRgro[targetIndex].classList[clType]("cl-mdt-hdnc-z-tlo-handler");
    hdncExaTloBgro[targetIndex].classList[clType]("cl-mdt-hdnc-z-tlo-handler");
    /*  */
    /* HdncUtil.setHdncExaBloGridTemplateRows(isActive, targetIndex); */
    /*  */
    for (let ebi = 0; ebi < hdncTeraBlo.length; ebi++) {
      hdncTeraBlo[ebi].classList[clType]("cl-mdt-hdnc-z-tlo-handler");
    }
    /*  */
    hdncY[targetIndex].isActive = isActive;
    /*  */
    HdncUtil.setHdncExaBloGridTemplateRows(isActive, targetIndex);
    /* !!!!! v1.1.19a-4 {move} (transitionend) !!!!! */
    /* HdncHandler.mdtHdncRootScroll(); */
  }
  /* -------------------------------------------------- */
  static mdtHdncRootScroll() {
    const {
      hdncR
    } = HdncConfig.getHdncRoot();
    const {
      hdncYottaSfroTgro,
      hdncYottaSfroBgro
    } = HdncConfig.getHdncYottaGroup();
    /*  */
    const scrollTop = hdncR.scrollTop;
    const scrollHeight = hdncR.scrollHeight;
    const clientHeight = hdncR.clientHeight;
    const scrollBuffer = 8;
    /*  */
    let tgroType = "";
    let bgroType = "";
    /*  */
    if (scrollTop > scrollBuffer) {
      tgroType = "add";
    } else {
      tgroType = "remove";
    }
    if (scrollTop + clientHeight + scrollBuffer < scrollHeight) {
      bgroType = "add";
    } else {
      bgroType = "remove";
    }
    if (tgroType) {
      hdncYottaSfroTgro.classList[tgroType](
        "cl-mdt-hdnc-r-scroll-handler"
      );
    }
    if (bgroType) {
      hdncYottaSfroBgro.classList[bgroType](
        "cl-mdt-hdnc-r-scroll-handler"
      );
    }
  }
  /* -------------------------------------------------- */
  static mdtHdncExaBloTransitionEnd(eventData) {
    const {
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hdnc-y");
    const {
      hdncY
    } = HdncConfig.getHdncGroup();
    const {
      hdncExaBlo
    } = HdncConfig.getHdncBloGroup();
    if (
      eventData.target === hdncExaBlo[targetIndex] &&
      eventData.propertyName === "grid-template-rows" &&
      hdncY[targetIndex].isActive
    ) {
      /* !!!!! v1.1.19a-3, v1.1.19a-4 !!!!! */
      HdncUtil.updateHdncGigaBloBgroLeft(targetIndex);
      HdncUtil.updateHdncGigaBloBgroWidth(targetIndex);
      HdncUtil.setHdncGigaBloBgroLeft(targetIndex);
      HdncUtil.timerHdncGigaBloBgro(targetIndex, true);
      /*  */
      HdncHandler.mdtHdncRootScroll();
    }
  }
  /* ================================================== */
  static tdtHdncZettaTlo(eventData) {
    const {
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hdnc-y");
    const {
      hdncY
    } = HdncConfig.getHdncGroup();
    const {
      hdncExaTloText,
      hdncExaTloBgro
    } = HdncConfig.getHdncTloGroup();
    const {
      hdncExaBlo,
      hdncExaBloSgroTo,
      hdncExaBloSgroBo
    } = HdncConfig.getHdncBloGroup();
    const {
      hdncTeraBlo
    } = HdncConfig.getHdncBloEbGroup(targetIndex);
    /*  */
    let isActive = false;
    let type = "remove";
    if (!hdncY[targetIndex].isActive) {
      isActive = true;
      type = "add";
    }
    /* TransitionEnd */
    /* !!!!! v1.1.19a-3 !!!!! */
    /* HdncUtil.setHdncExaBlo(isActive, targetIndex); */
    
    /*  */
    /* if (isActive) { */
      /* if (targetIndex === 0) {
        hdncExaBlo[targetIndex].classList.add("cl-tdt-hdnc-z-tlo-handler-nth-1");
      } else if (targetIndex === 3) {
        hdncExaBlo[targetIndex].classList.add("cl-tdt-hdnc-z-tlo-handler-nth-4");
      } */
    /* } else { */
      /* !!!!! v1.1.19a-4 !!!!! */
      /* HdncUtil.timerHdncGigaBloBgro(targetIndex, false);
      /*  
      hdncExaBlo[targetIndex].removeEventListener(
        "scroll",
        HdncHandler.tdtHdncExaBloScroll
      );
      /*  
      hdncExaBloSgroTo[targetIndex].classList.remove(
        "cl-tdt-hdnc-e-blo-scroll-handler"
      );
      hdncExaBloSgroBo[targetIndex].classList.remove(
        "cl-tdt-hdnc-e-blo-scroll-handler"
      ); */
      /* !!!!! v1.1.19a-4 !!!!! */
      /* for (let i = 0; i < hdncGigaBloBgro.length; i++) { */
        /* clearTimeout(hdncGigaBloBgro[i].timeoutId); */
      /* } */
      /*  */
    /* } */
    /*  */
    if (isActive) {
      if (HsncAccessor.isActiveHsnc) {
        HtpncAccessor.htpncZettaHsngoHandler();
      }
      HdncUtil.setHdncHandler(HdncHandler, 2);
    } else {
      HdncUtil.timerHdncGigaBloBgro(targetIndex, false);
      HdncUtil.setHdncGigaBloBgroWidth(targetIndex, false);
      hdncExaBlo[targetIndex].removeEventListener(
        "scroll",
        HdncHandler.tdtHdncExaBloScroll
      );
      hdncExaBloSgroTo[targetIndex].classList.remove(
        "cl-tdt-hdnc-e-blo-scroll-handler"
      );
      hdncExaBloSgroBo[targetIndex].classList.remove(
        "cl-tdt-hdnc-e-blo-scroll-handler"
      );
    }
    /* classList */
    hdncExaTloText[targetIndex].classList[type]("cl-tdt-hdnc-z-tlo-handler");
    hdncExaTloBgro[targetIndex].classList[type]("cl-tdt-hdnc-z-tlo-handler");
    hdncExaBlo[targetIndex].classList[type]("cl-tdt-hdnc-z-tlo-handler");
    for (let ebi = 0; ebi < hdncTeraBlo.length; ebi++) {
      hdncTeraBlo[ebi].classList[type]("cl-tdt-hdnc-z-tlo-handler");
    }
    /*  */
    /* if (isActive) {
      if (HsncAccessor.isActiveHsnc) {
        HtpncAccessor.htpncZettaHsngoHandler();
      } */
      /* HdncUtil.setTdtHdnc(HdncHandler, targetIndex); */
      /* HdncUtil.setHdncHandler(HdncHandler, 2);
    } */
    /*  */
    hdncY[targetIndex].isActive = isActive;
    /*  */
    HdncUtil.setHdncExaBloGridTemplateRows(isActive, targetIndex);
  }
  /* -------------------------------------------------- */
  static tdtHdncExaBloScroll(eventData) {
    const {
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hdnc-y");
    const {
      hdncExaBlo,
      hdncExaBloSgroTo,
      hdncExaBloSgroBo
    } = HdncConfig.getHdncBloGroup();
    /*  */
    const scrollTop = hdncExaBlo[targetIndex].scrollTop;
    const scrollHeight = hdncExaBlo[targetIndex].scrollHeight;
    const clientHeight = hdncExaBlo[targetIndex].clientHeight;
    const scrollBuffer = 8;
    /*  */
    let toType = "";
    let boType = "";
    /*  */
    if (scrollTop > scrollBuffer) {
      toType = "add";
    } else {
      toType = "remove";
    }
    if (scrollTop + clientHeight + scrollBuffer < scrollHeight) {
      boType = "add";
    } else {
      boType = "remove";
    }
    if (toType) {
      hdncExaBloSgroTo[targetIndex].classList[toType](
        "cl-tdt-hdnc-e-blo-scroll-handler"
      );
    }
    if (boType) {
      hdncExaBloSgroBo[targetIndex].classList[boType](
        "cl-tdt-hdnc-e-blo-scroll-handler"
      );
    }
  }
  /* -------------------------------------------------- */
  static tdtHdncExaBloTransitionEnd(eventData) {
    const {
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hdnc-y");
    const {
      hdncY
    } = HdncConfig.getHdncGroup();
    const {
      hdncExaBlo
    } = HdncConfig.getHdncBloGroup();
    /*  */
    if (
      eventData.target === hdncExaBlo[targetIndex] &&
      eventData.propertyName === "grid-template-rows" &&
      hdncY[targetIndex].isActive
    ) {
      /* if (hdncExaBlo[targetIndex].dataset.isSensorWidthResized) {
        hdncExaBlo[targetIndex].dataset.isSensorWidthResized = false;
      }
      if (hdncExaBlo[targetIndex].dataset.isSensorHeightResized) {
        hdncExaBlo[targetIndex].dataset.isSensorHeightResized = false;
      } */
      /* Bgro */
      /* !!!!! v1.1.19a-2 !!!!! */
      HdncUtil.updateHdncGigaBloBgroLeft(targetIndex);
      HdncUtil.updateHdncGigaBloBgroWidth(targetIndex);
      HdncUtil.setHdncGigaBloBgroLeft(targetIndex);
      /* !!!!! v1.1.19a-4 !!!!! */
      /* HdncUtil.setHdncGigaBloBgroWidth(targetIndex, false); */
      /*  */
      /* !!!!! v1.1.19a-3 !!!!!! */
      HdncUtil.timerHdncGigaBloBgro(targetIndex, true);
      /*  */
      /* HdncUtil.setTimerHdncGigaBloBgro(targetIndex); */
      /*  */
      hdncExaBlo[targetIndex].addEventListener(
        "scroll",
        HdncHandler.tdtHdncExaBloScroll
      );
      /* Sgro */
      /* !!!!! v1.1.19a-3 !!!!! */
      HdncUtil.updateHdncExaBloSgroLeft();
      HdncUtil.setHdncExaBloSgroLeft();
      /*  */
      const modifyEventData = {};
      modifyEventData.currentTarget = hdncExaBlo[targetIndex];
      HdncHandler.tdtHdncExaBloScroll(modifyEventData);
    }
    /*  */
    if (
      eventData.target === hdncExaBlo[targetIndex] &&
      eventData.propertyName === "max-height" &&
      hdncY[targetIndex].isActive
    ) {
      const modifyEventData = {};
      modifyEventData.currentTarget = hdncExaBlo[targetIndex];
      HdncHandler.tdtHdncExaBloScroll(modifyEventData);
    }
  }
  /* ================================================== */
  static ddtHdncYotta(eventData) {
    const {
      eventType,
      eventIndex
    } = FwcAccessor.getEventData(eventData);
    const {
      hdncY
    } = HdncConfig.getHdncGroup();
    const {
      hdncPetaBlo,
      hdncTeraBlo
    } = HdncConfig.getHdncBloEbGroup(eventIndex);
    const {
      hdncExaTloText,
      hdncExaTloBgro
    } = HdncConfig.getHdncTloGroup();
    const {
      hdncExaBlo,
      hdncExaBloSgroTo,
      hdncExaBloSgroBo
    } = HdncConfig.getHdncBloGroup();
    /*  */
    let isActive = false;
    let type = "remove";
    if (eventType === "mouseenter") {
      isActive = true;
      type = "add";
    }
    /*  */
    if (isActive) {
      /* !!!!! v1.1.19a-3 !!!!! */
      /* HdncUtil.setHdncExaBlo(isActive, eventIndex); */
      /* !!!!! v1.1.19a-4 !!!!! */
      const hdncYottaLastIndex = hdncY.length - 1;
      if (hdncYottaLastIndex === eventIndex) {
        HdncTool.clDdtHdncYottaNthLast(hdncYottaLastIndex);
        /* const htmlElement = document.documentElement;
        const htmlElementRect = htmlElement.getBoundingClientRect();
        const hdncYottaRect = hdncY[hdncYottaLast].getBoundingClientRect();
        const htmlElementRectCalc = htmlElementRect.right - (21 * 16);
        const hdncYottaRectCalc = 
          (hdncYottaRect.right - (hdncYottaRect.width / 2)) + (10 * 16);
        if (htmlElementRectCalc < hdncYottaRectCalc && HsncAccessor.isActiveHsnc) {
          hdncExaBlo[hdncYottaLast].classList.add("cl-ddt-hdnc-y-handler-nth-4");
        } else {
          hdncExaBlo[hdncYottaLast].classList.remove("cl-ddt-hdnc-y-handler-nth-4");
        } */
      }
    } else {
      HdncTool.resetDdtHdncExaBloScroll(HdncHandler, eventIndex);
      /* hdncExaBlo[eventIndex].removeEventListener(
        "scroll",
        HdncHandler.ddtHdncExaBloScroll
      );
      /*  
      hdncExaBloSgroTo[eventIndex].classList.remove(
        "cl-ddt-hdnc-e-blo-scroll-handler"
      );
      hdncExaBloSgroBo[eventIndex].classList.remove(
        "cl-ddt-hdnc-e-blo-scroll-handler"
      ); */
    }
    /*  */
    hdncExaTloText[eventIndex].classList[type]("cl-ddt-hdnc-y-handler");
    hdncExaTloBgro[eventIndex].classList[type]("cl-ddt-hdnc-y-handler");
    hdncExaBlo[eventIndex].classList[type]("cl-ddt-hdnc-y-handler");
    for (let ebi = 0; ebi < hdncPetaBlo.length; ebi++) {
      hdncTeraBlo[ebi].classList[type]("cl-ddt-hdnc-y-handler");
    }
    /* !!!!! v1.1.19a-3 !!!!! */
    /* HdncUtil.setHdncExaBloGridTemplateRows(eventIndex, hdncExaBloHeight); */
    /*  */
    /* if (isActive) {
      if (eventIndex === 3) {
        const htmlElement = document.documentElement;
        const htmlElementRect = htmlElement.getBoundingClientRect();
        const hdncYottaRect = hdncY[eventIndex].getBoundingClientRect();
        const htmlElementRectCalc = htmlElementRect.right - (21 * 16);
        const hdncYottaRectCalc = 
          (hdncYottaRect.right - (hdncYottaRect.width / 2)) + (10 * 16);
        if (htmlElementRectCalc < hdncYottaRectCalc && HsncAccessor.isActiveHsnc) {
          hdncExaBlo[eventIndex].classList.add("cl-ddt-hdnc-y-handler-nth-4");
        } else {
          hdncExaBlo[eventIndex].classList.remove("cl-ddt-hdnc-y-handler-nth-4");
        }
      }
    } else {
      
    } */
    /*  */
    hdncY[eventIndex].isActive = isActive;
    /*  */
    HdncUtil.setHdncExaBloGridTemplateRows(isActive, eventIndex);
  }
  /* -------------------------------------------------- */
  static ddtHdncPetaBlo(eventData) {
    const {
      eventType,
      eventIndex,
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hdnc-y");
    const {
      hdncGigaBloText,
      hdncGigaBloRgro
    } = HdncConfig.getHdncBloEbGroup(targetIndex);
    /*  */
    const hdncGigaBloClData = "cl-ddt-hdnc-p-blo-handler";
    /* Default: mouseleave */
    let isActive = false;
    let type = "remove";
    if (eventType === "mouseenter") {
      isActive = true;
      type = "add";
    }
    /*  */
    hdncGigaBloText[eventIndex].classList[type](hdncGigaBloClData);
    hdncGigaBloRgro[eventIndex].classList[type](hdncGigaBloClData);
    if (isActive) {
      HdncUtil.setHdncGigaBloBgroLeft(targetIndex);
      HdncUtil.setHdncGigaBloBgroWidth(targetIndex, true, eventIndex);
    } else {
      HdncUtil.setHdncGigaBloBgroLeft(targetIndex);
      HdncUtil.setHdncGigaBloBgroWidth(targetIndex, false);
    }
  }
  /* -------------------------------------------------- */
  static ddtHdncExaBloScroll(eventData) {
    const {
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hdnc-y");
    const {
      hdncExaBlo,
      hdncExaBloSgroTo,
      hdncExaBloSgroBo
    } = HdncConfig.getHdncBloGroup();
    /*  */
    const scrollTop = hdncExaBlo[targetIndex].scrollTop;
    const scrollHeight = hdncExaBlo[targetIndex].scrollHeight;
    const clientHeight = hdncExaBlo[targetIndex].clientHeight;
    const scrollBuffer = 8;
    /*  */
    let toType = "";
    let boType = "";
    /*  */
    if (scrollTop > scrollBuffer) {
      toType = "add";
    } else {
      toType = "remove";
    }
    if (scrollTop + clientHeight + scrollBuffer < scrollHeight) {
      boType = "add";
    } else {
      boType = "remove";
    }
    if (toType) {
      hdncExaBloSgroTo[targetIndex].classList[toType](
        "cl-ddt-hdnc-e-blo-scroll-handler"
      );
    }
    if (boType) {
      hdncExaBloSgroBo[targetIndex].classList[boType](
        "cl-ddt-hdnc-e-blo-scroll-handler"
      );
    }
  }
  /* -------------------------------------------------- */
  static ddtHdncExaBloTransitionEnd(eventData) {
    const {
      targetIndex
    } = FwcAccessor.getEventData(eventData, ".hdnc-y");
    const {
      hdncY
    } = HdncConfig.getHdncGroup();
    const {
      hdncExaBlo
    } = HdncConfig.getHdncBloGroup();
    /*  */
    if (
      eventData.target === hdncExaBlo[targetIndex] &&
      eventData.propertyName === "grid-template-rows" &&
      hdncY[targetIndex].isActive
    ) {
      /* Bgro */
      /* if (hdncExaBlo[targetIndex].dataset.isSensorWidthResized) {
        HdncUtil.updateHdncGigaBloBgroLeft(targetIndex);
        HdncUtil.updateHdncGigaBloBgroWidth(targetIndex);
        /*  
        hdncExaBlo[targetIndex].dataset.isSensorWidthResized = false;
      } */
      HdncUtil.updateHdncGigaBloBgroLeft(targetIndex);
      HdncUtil.updateHdncGigaBloBgroWidth(targetIndex);
      /*  */
      hdncExaBlo[targetIndex].addEventListener(
        "scroll",
        HdncHandler.ddtHdncExaBloScroll
      );
      /* Sgro */
      HdncUtil.updateHdncExaBloSgroLeft();
      HdncUtil.setHdncExaBloSgroLeft();
      /* if (hdncExaBlo[targetIndex].dataset.isSensorHeightResized) {
        hdncExaBlo[targetIndex].dataset.isSensorHeightResized = false;
      } */
      /*  */
      const modifyEventData = {};
      modifyEventData.currentTarget = hdncExaBlo[targetIndex];
      HdncHandler.ddtHdncExaBloScroll(modifyEventData);
    }
  }
  /* -------------------------------------------------- */
}
export {
  HdncAccessor,
  HdncController
};
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */