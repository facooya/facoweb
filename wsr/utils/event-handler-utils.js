/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  transformDni,
  transformSni,
  initialIndexDncE,
  calcGridTemplateData
} from "../../wsr/local/event-handler-local.js";

/* ===== DNI ===== */
/* ----- Mobile ----- */ /* !!! handleDniY */
function enabledDni() {
  transformDni(); /* !!!! transformDniZettaLine */
  //const DEV_NAV_CMP = document.getElementById("dev-nav-cmp");
  const dncRoot = document.querySelector(".dnc-root");
  if (!isEnabledDni) { /* Enabling */
    //DEV_NAV_CMP.style.left = "0%";
    dncRoot.style.left = "0%";
    isEnabledDni = 1;
  } else { /* Disabling */
    //DEV_NAV_CMP.style.left = "-80%"; //css -width
    dncRoot.style.left = "-80%";
    isEnabledDni = 0;
  }
}
/* ===== SNI ===== */
function enabledSni() {
  transformSni();
  //const SUB_NAV_CMP = document.getElementById("sub-nav-cmp");
  const sncRoot = document.querySelector(".snc-root");
  if (!isEnabledSni) { /* Enabling */
    //SUB_NAV_CMP.style.right = "0%";
    sncRoot.style.right = "0%";
    isEnabledSni = 1;
  } else { /* Disabling */
    if (activeMode == 1) {
      //SUB_NAV_CMP.style.right = "-80%"; //css -width
      sncRoot.style.right = "-80%";
    } else {
      //SUB_NAV_CMP.style.right = "-25rem"; //css -width
      sncRoot.style.right = "-25rem";
    }
    isEnabledSni = 0;
  }
}
/* ===== DNC ===== */
/* ----- Mobile ----- */
function handleMobileDncY(event) {
  const eCurrentTarget = event.currentTarget;
  const dncExaES = eCurrentTarget.querySelector(".dnc-e");
  const dncPetaTitleES = dncExaES.getElementsByClassName("dnc-p-title");

  if (!eCurrentTarget.isActive) { /* Activate */
    dncExaES.style.gridTemplateRows = calcGridTemplateData(dncPetaTitleES, 4);
    for (let i = 0; i < dncPetaTitleES.length; i++) {
      dncPetaTitleES[i].style.opacity = "1";
    }
    eCurrentTarget.isActive = 1;
  } else { /* Deactivate */
    dncExaES.style.gridTemplateRows = calcGridTemplateData(dncPetaTitleES, 0);
    for (let i = 0; i < dncPetaTitleES.length; i++) {
      dncPetaTitleES[i].style.opacity = "0";
    }
    eCurrentTarget.isActive = 0;
  }
}
/*function activeMobileDncY(event) { !!!!! DELETE v1.1.11a 
  const ect = event.currentTarget;
  const dncE = document.getElementsByClassName("dnc-e");
  const currentDncP = dncE[ect.index].getElementsByClassName("dnc-p");

  if (!ect.isActive) { /* Activating 
    dncE[ect.index].style.gridTemplateRows = calcGridTemplateData(currentDncP, 4);
    ect.isActive = 1;
  } else { /* Inactivating 
    dncE[ect.index].style.gridTemplateRows = calcGridTemplateData(currentDncP, 0);
    ect.isActive = 0;
  }
}*/
/*function activeItemMobileDnc(event) { !!!!! DELETE v1.1.11a 
  const ect = event.currentTarget;
  const DNC_SUB_CONTAINER = document.getElementsByClassName("dnc-sub-container");

  const count = DNC_SUB_CONTAINER[ect.index].querySelectorAll(".dnc-sub-item");

  if (!ect.isActive) { /* Activating 
    //const dncSubItem = ect.querySelectorAll(".dnc-sub-item");
    //const heightResult = 4.125 * (dncSubItem.length) -0.125;
    //DNC_SUB_CONTAINER[ect.index].style.height = heightResult + "rem";
    DNC_SUB_CONTAINER[ect.index].style.gridTemplateRows = _sncHelpTemporary(count.length, 4);
    ect.isActive = 1;
  } else { /* Inactivating 
    //DNC_SUB_CONTAINER[ect.index].style.height = "0rem";
    DNC_SUB_CONTAINER[ect.index].style.gridTemplateRows = _sncHelpTemporary(count.length, 0);
    ect.isActive = 0;
  }
}*/
/* ----- Tablet ----- */
function handleTabletDncY(event) {
  const eCurrentTarget = event.currentTarget;
  const eIndex = eCurrentTarget.index;

  const dncExaES = eCurrentTarget.querySelector(".dnc-e");
  const dncPetaES = dncExaES.getElementsByClassName("dnc-p-title");

  if (!eCurrentTarget.isActive) { /* Activate */
    initialIndexDncE(eIndex);
    dncExaES.style.gridTemplateRows = calcGridTemplateData(dncPetaES, 4);
    dncExaES.style.width = "18rem";
    if (eIndex == 0) { /* dnc-y[0] Overflow Shield */
      dncExaES.style.left = "0%";
    } else if (eIndex == 4) { /* dnc-y[4] Overflow Shield */
      dncExaES.style.right = "0%";
    }
    for (let i = 0; i < dncPetaES.length; i++) {
      dncPetaES[i].style.opacity = "1";
    }
    eCurrentTarget.isActive = 1;
  } else { /* Deactivate */
    dncExaES.style.gridTemplateRows = calcGridTemplateData(dncPetaES, 0);
    dncExaES.style.width = "10rem";
    for (let i = 0; i < dncPetaES.length; i++) {
      dncPetaES[i].style.opacity = "0";
    }
    eCurrentTarget.isActive = 0;
  }
}
/*
function activeItemTabletDnc(event) { !!!!! DELETE v1.1.11a 
  const ect = event.currentTarget;
  const DNC_CONTAINER = document.getElementsByClassName("dnc-container");
  const DNC_SUB_CONTAINER = document.getElementsByClassName("dnc-sub-container");
  autoInactiveTabletDnc(ect, DNC_CONTAINER, DNC_SUB_CONTAINER);

  if (!ect.isActive) { /* Activating 
    const dncSubItem = ect.querySelectorAll(".dnc-sub-item");
    const heightResult = 4 * dncSubItem.length;
    DNC_SUB_CONTAINER[ect.index].style.width = "18rem";
    DNC_SUB_CONTAINER[ect.index].style.height = heightResult + "rem";
    /* Overflow Shield 
    if (ect.index == 0) {
      DNC_SUB_CONTAINER[ect.index].style.left = "0%";
    } else if (ect.index == 4) {
      DNC_SUB_CONTAINER[ect.index].style.right = "0%";
    }
    ect.isActive = 1;
  } else { /* Inactivating 
    DNC_SUB_CONTAINER[ect.index].style.width = "10rem";
    DNC_SUB_CONTAINER[ect.index].style.height = "0rem";
    ect.isActive = 0;
  }
}*/
/* ----- Desktop ----- */
function handleDesktopDncY(event) {
  /* Event */
  const eType = event.type;
  const eCurrentTarget = event.currentTarget;
  /* const eIndex = eCurrentTarget.index; !!!!! */
  /* Dnc Z */
  const dncZettaTitleZS = eCurrentTarget.querySelector(".dnc-z-title");
  const dncZettaBottomLineZS = eCurrentTarget.querySelector(".dnc-z-bottom-line");
  /* Dnc E, P */
  const dncExaES = eCurrentTarget.querySelector(".dnc-e");
  const dncPetaES = eCurrentTarget.getElementsByClassName("dnc-p");
  const dncPetaTitleES = eCurrentTarget.getElementsByClassName("dnc-p-title");

  if (eType === "mouseenter") {
    dncZettaTitleZS.style.fontWeight = "700";
    dncZettaBottomLineZS.style.left = "10%";
    dncZettaBottomLineZS.style.width = "80%";
    dncExaES.style.gridTemplateRows = calcGridTemplateData(dncPetaES, 4);
    dncExaES.style.width = "20rem";
    for (let i = 0; i < dncPetaTitleES.length; i++) {
      dncPetaTitleES[i].style.opacity = "1";
    }
  } else if (eType === "mouseleave") {
    dncZettaTitleZS.style.fontWeight = "400";
    dncZettaBottomLineZS.style.left = "50%";
    dncZettaBottomLineZS.style.width = "0%";
    dncExaES.style.gridTemplateRows = calcGridTemplateData(dncPetaES, 0);
    dncExaES.style.width = "10rem";
    for (let i = 0; i < dncPetaTitleES.length; i++) {
      dncPetaTitleES[i].style.opacity = "0";
    }
  }
}
/*function activeItemDesktopDnc(event) { !!!!! DELETE v1.1.11a 
  const ect = event.currentTarget; // dnc-y
  const dncE = document.getElementsByClassName("dnc-e");
  const ectDncP = ect.getElementsByClassName("dnc-p");
  /* dnc-z-title 
  const currentDncZettaTitle = ect.querySelector(".dnc-z-title");
  currentDncZettaTitle.style.fontWeight = "700";
  /* dnc-z-bottom-line 
  const currentDncZettaBottomLine = ect.querySelector(".dnc-z-bottom-line");
  currentDncZettaBottomLine.style.left = "10%";
  currentDncZettaBottomLine.style.width = "80%";
  /* dnc-p-title 
  const ectDncPetaTitle = ect.getElementsByClassName("dnc-p-title");
  for (let i = 0; i < ectDncPetaTitle.length; i++) {
    ectDncPetaTitle[i].style.opacity = "1";
  }

  dncE[ect.index].style.gridTemplateRows = _sncHelpTemporary(ectDncP.length, 4);
  dncE[ect.index].style.width = "20rem"; // 20rem = variable
}
function inactiveItemDesktopDnc(event) { !!!!! DELETE v1.1.11a 
  const ect = event.currentTarget; // dnc-y
  const dncE = document.getElementsByClassName("dnc-e");
  const ectDncP = ect.getElementsByClassName("dnc-p");

  const ectDncPetaTitle = ect.getElementsByClassName("dnc-p-title");
  for (let i = 0; i < ectDncPetaTitle.length; i++) {
    ectDncPetaTitle[i].style.cssText = "";
  }
  const currentDncZettaTitle = ect.querySelector(".dnc-z-title");
  currentDncZettaTitle.style.cssText = "";
  const currentDncZettaBottomLine = ect.querySelector(".dnc-z-bottom-line");
  currentDncZettaBottomLine.style.cssText = "";

  dncE[ect.index].style.gridTemplateRows = _sncHelpTemporary(ectDncP.length, 0);
  dncE[ect.index].style.width = "10rem"; // 10rem = variable
}*/
function handleDesktopDncP(event) {
  const eType = event.type;
  const eCurrentTarget = event.currentTarget;
  const dncPetaTitlePS = eCurrentTarget.querySelector(".dnc-p-title");
  const dncPetaRightIconPS = eCurrentTarget.querySelector(".dnc-p-right-icon");
  const dncPetaBottomLinePS = eCurrentTarget.querySelector(".dnc-p-bottom-line");

  if (eType === "mouseenter") {
    dncPetaTitlePS.style.fontWeight = "700";
    dncPetaRightIconPS.style.margin = "0rem 0rem 0rem 1rem";
    dncPetaRightIconPS.style.borderLeft = "0.5rem solid #FFFFFF";
    dncPetaBottomLinePS.style.width = "60%";
  } else if (eType === "mouseleave") {
    dncPetaTitlePS.style.fontWeight = "400";
    dncPetaRightIconPS.style.margin = "0rem";
    dncPetaRightIconPS.style.borderLeft = "0rem solid #00000000";
    dncPetaBottomLinePS.style.width = "0%";
  }
}
/*function activateDesktopDncP(event) { !!!!! DELETE v1.1.11a 
  const ect = event.currentTarget;
  const currentDncPetaTitle = ect.querySelector(".dnc-p-title");
  const currentDncPetaRightIcon = ect.querySelector(".dnc-p-right-icon");
  const currentDncPetaBottomLine = ect.querySelector(".dnc-p-bottom-line");
  
  currentDncPetaTitle.style.fontWeight = "700";

  currentDncPetaRightIcon.style.margin = "0rem 0rem 0rem 1rem";
  currentDncPetaRightIcon.style.borderLeft = "0.5rem solid #FFFFFF";

  currentDncPetaBottomLine.style.width = "60%";
}
function deactivateDesktopDncP(event) { !!!!! DELETE v1.1.11a 
  const ect = event.currentTarget;
  const currentDncPetaTitle = ect.querySelector(".dnc-p-title");
  const currentDncPetaRightIcon = ect.querySelector(".dnc-p-right-icon");
  const currentDncPetaBottomLine = ect.querySelector(".dnc-p-bottom-line");

  currentDncPetaTitle.style.fontWeight = "";
  currentDncPetaRightIcon.style.cssText = "";
  currentDncPetaBottomLine.style.cssText = "";
}*/
/*function activeItemDesktopDnc(event) { !!!!! DELETE v1.1.11a 
  const ect = event.currentTarget;
  const DNC_SUB_CONTAINER = document.getElementsByClassName("dnc-sub-container");
  const dncSubItem = ect.querySelectorAll(".dnc-sub-item");
  const heightResult = 4 * dncSubItem.length;
  DNC_SUB_CONTAINER[ect.index].style.width = "18rem";
  DNC_SUB_CONTAINER[ect.index].style.height = heightResult + "rem";
}
function inactiveItemDesktopDnc(event) { !!!!! DELETE v1.1.11a 
  const ect = event.currentTarget;
  const DNC_SUB_CONTAINER = document.getElementsByClassName("dnc-sub-container");
  DNC_SUB_CONTAINER[ect.index].style.width = "10rem";
  DNC_SUB_CONTAINER[ect.index].style.height = "0rem";
}*/
/* ===== SNC ===== */
/*function activeItemSnc(event) {
  const ect = event.currentTarget;
  const sncE = document.getElementsByClassName("snc-e");

  const localSncP = sncE[ect.index].getElementsByClassName("snc-p");

  if (!ect.isActive) { /* Activating 
    //const sncSubItem = ect.querySelectorAll(".snc-sub-item");
    //const heightResult = 4.125 * (sncSubItem.length) -0.125;
    //SNC_SUB_CONTAINER[ect.index].style.height = heightResult + "rem";
    sncE[ect.index].style.gridTemplateRows = calcGridTemplateData(localSncP, 4);
    ect.isActive = 1;
  } else { /* Inactivating 
    //SNC_SUB_CONTAINER[ect.index].style.height = "0rem";
    sncE[ect.index].style.gridTemplateRows = calcGridTemplateData(localSncP, 0);
    ect.isActive = 0;
  }
}*/
function handleSncY(event) {
  const eCurrentTarget = event.currentTarget;
  const sncExaES = eCurrentTarget.querySelector(".snc-e");
  const sncPetaTitleES = sncExaES.getElementsByClassName("snc-p-title");

  if (!eCurrentTarget.isActive) { /* Activate */
  sncExaES.style.gridTemplateRows = calcGridTemplateData(sncPetaTitleES, 4);
    for (let i = 0; i < sncPetaTitleES.length; i++) {
      sncPetaTitleES[i].style.opacity = "1";
    }
    eCurrentTarget.isActive = 1;
  } else { /* Deactivate */
  sncExaES.style.gridTemplateRows = calcGridTemplateData(sncPetaTitleES, 0);
    for (let i = 0; i < sncPetaTitleES.length; i++) {
      sncPetaTitleES[i].style.opacity = "0";
    }
    eCurrentTarget.isActive = 0;
  }
}
/* ===== Progress ===== */
function progressHandler() {
  //const SECTION_CONTAINER = document.getElementById("section-container");
  const _HTML = document.documentElement;
  const overflowHeight = _HTML.scrollHeight - _HTML.clientHeight;
  const scrollProgress = (_HTML.scrollTop / overflowHeight) * 100;

  const LPB = document.getElementById("lpb");
  const RPB = document.getElementById("rpb");
  LPB.style.height = Math.round(scrollProgress) + "%";
  RPB.style.height = Math.round(scrollProgress) + "%";

}

export {
  enabledDni,
  enabledSni,
  //activeItemMobileDnc,
  //activeItemTabletDnc,
  //activeItemDesktopDnc,
  //inactiveItemDesktopDnc,
  handleTabletDncY,

  handleDesktopDncY,
  handleDesktopDncP,

  //activeItemSnc,
  progressHandler,
  //activateDesktopDncP,
  //deactivateDesktopDncP,
  //activeMobileDncY
  handleMobileDncY,
  handleSncY
};
/* DESCRIPTION
 * e.g., progressHandler();
 * scrollHeight = 500(px); clientHeight = 100(px);
 * overflowHeight = [scrollHeight]500(px) - [clientHeight]100(px) -> 400(px);
 * scrollTop = [Min]0 ~ [Max][overflowHeight]400(px) ->
 *   [Max]400 / 2(50%) -> [currentScrollTop]200(px);
 * scrollProgress = ([currentScrollTop]200(px) / [overflowHeight]400(px)) ->
 *   0.5 * 100 -> 50(%);
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */
