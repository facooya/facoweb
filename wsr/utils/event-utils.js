/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  handleTabletDncZ,
  handleDesktopDncY,
  handleDesktopDncP,

  handleMobileSncZ,
  handleTabletSncZ,
  handleDesktopSncZ,
  handleDesktopSncP,

  onTpncZettaDni,
  onTpncZettaSni,

  onMdtSncZettaBpt,
  onMdtDncZettaBpt,

  progressHandler
} from "../../wsr/utils/event-handler-utils.js";
import {
  calcGridTemplateData
} from "../../wsr/local/event-handler-local.js";

/* ===== onEventDniSni ===== */
function onEventDniSni() {
  /* !!! v1.1.13a [pro] {tpnc: dni, sni} */
  const tpncZettaDni = document.querySelector(".tpnc-z-dni");
  const tpncZettaSni = document.querySelector(".tpnc-z-sni");
  tpncZettaDni.addEventListener("click", onTpncZettaDni);
  tpncZettaSni.addEventListener("click", onTpncZettaSni);

  /* !!! v1.1.12a [test] (scroll-overlap) */
  /* const sncR = document.querySelector(".snc-r");
  sncR.addEventListener("mouseenter", _scrollTest);
  sncR.addEventListener("mouseleave", _scrollTest); */
  /* const sectionR = document.querySelector(".section-r"); */
  const frameYBZS = document.querySelector(".frame-ybzs");
  const bpcR = document.querySelector(".bpc-r");
  frameYBZS.addEventListener("mouseenter", _scrollTest);
  frameYBZS.addEventListener("mouseleave", _scrollTest);
  bpcR.addEventListener("mouseenter", _scrollTest);
  bpcR.addEventListener("mouseleave", _scrollTest);

  logf(0, "wsr/utils/event-utils.js", "onEventDniSni", "Done");
}
function _scrollTest(event) { /* !!! v1.1.12a [test] (scroll-overlap) */
  const eType = event.type;
  /* const coreR = document.querySelector(".core-r"); */
  if (eType === "mouseenter") {
    /* coreR.style.overflowY = "scroll"; */
  } else if (eType === "mouseleave") {
    /* coreR.style.overflowY = "hidden"; */
  }
}
/* ===== onEventDnc ===== */
function onEventDnc(isLoad, dncY) {
  const dncZ = document.querySelectorAll(".dnc-z");
  const dncE = document.querySelectorAll(".dnc-e");

  const dncZettaBpt = document.querySelectorAll(".dnc-z-bpt");

  /* for (let i = 0; i < dncE.length; i++) { !!! v1.1.13a [tmp] [del?]
    const classDncP = dncE[i].getElementsByClassName("dnc-p");
    dncE[i].style.gridTemplateRows = calcGridTemplateData(classDncP, 0);
  } */
  /* Remove Event */
  if (!isLoad) {
    for (let i = 0; i < dncY.length; i++) {
      /* if (prevMode == 1) { !!! v1.1.13a [del] (!replaced)
        /* !!! v1.1.11a [tmp] 
        //dncY[i].removeEventListener("click", handleMobileDncY);
        dncZ[i].removeEventListener("click", handleMobileDncZ);
      } else if (prevMode == 2) {
        dncZ[i].removeEventListener("click", handleTabletDncZ);
      } else if (prevMode == 3) {
        dncY[i].removeEventListener("mouseenter", handleDesktopDncY);
        dncY[i].removeEventListener("mouseleave", handleDesktopDncY);

        const dncPetaEB = dncE[i].querySelectorAll(".dnc-p");
        for (let j = 0; j < dncPetaEB.length; j++) {
          dncPetaEB[j].removeEventListener("mouseenter", handleDesktopDncP);
          dncPetaEB[j].removeEventListener("mouseleave", handleDesktopDncP);
        }
      } */
      switch(prevMode) {
        case 1:
          dncZettaBpt[i].removeEventListener("click", onMdtDncZettaBpt);
          break;
        case 2:
          //dncZettaBpt[i].removeEventListener("click", handleTdtdncZettaBpt);
          break;
        case 3:
          /* dncZettaBpt[i].removeEventListener("mouseenter", handleDdtDncY);
          dncZettaBpt[i].removeEventListener("mouseleave", handleDdtDncY);

          const dncPetaEB = dncE[i].querySelectorAll(".dnc-p");
          for (let j = 0; j < dncPetaEB.length; j++) {
            dncPetaEB[j].removeEventListener("mouseenter", handleDesktopDncP);
            dncPetaEB[j].removeEventListener("mouseleave", handleDesktopDncP);
          } */
          break;
        default:
          /* Error */
          break;
      }
    }
  }
  /* for (let i = 0; i < dncY.length; i++) { !!! v1.1.13a [del]
    dncY[i].isActive = false;
    dncZ[i].index = i;
  } */
  /* Add Event */
  for (let i = 0; i < dncY.length; i++) {
    /* if (dncY[i].isActive) {
      dncY[i].isActive = false;
    } */
    //dncZ[i].index = i;
    /* if (activeMode == 1) { !!! v1.1.13a [del] (!replaced)
      /* !!! v1.1.11a [tmp] 
      //dncY[i].addEventListener("click", handleMobileDncY);
      dncZ[i].addEventListener("click", handleMobileDncZ);
    } else if (activeMode == 2) {
      dncZ[i].addEventListener("click", handleTabletDncZ);
    } else if (activeMode == 3) {
      dncY[i].addEventListener("mouseenter", handleDesktopDncY);
      dncY[i].addEventListener("mouseleave", handleDesktopDncY);

      const dncPetaEB = dncE[i].querySelectorAll(".dnc-p");
      for (let j = 0; j < dncPetaEB.length; j++) {
        dncPetaEB[j].addEventListener("mouseenter", handleDesktopDncP);
        dncPetaEB[j].addEventListener("mouseleave", handleDesktopDncP);
      }
    } */
    const dncPetaEB = dncE[i].querySelectorAll(".dnc-p");
    dncE[i].style.gridTemplateRows = calcGridTemplateData(dncPetaEB, 0);

    dncZettaBpt[i].idx = i;
    dncZettaBpt[i].isActive = 0;
    switch(activeMode) {
      case 1:
        dncZettaBpt[i].addEventListener("click", onMdtDncZettaBpt);
        break;
      case 2:
        //dncZettaBpt[i].addEventListener("click", handleTdtdncZettaBpt);
        break;
      case 3:
        /* dncZ[i].addEventListener("mouseenter", handleDdtDncYotta);
        dncZ[i].addEventListener("mouseleave", handleDdtDncYotta);
        for (let j = 0; j < dncPetaEB.length; j++) {
          dncPetaEB[j].addEventListener("mouseenter", handleDdtDncP);
          dncPetaEB[j].addEventListener("mouseleave", handleDdtDncP);
        } */
        break;
      default:
        break;
    }
  }

  logf(0, "wsr/utils/event-utils.js", "onEventDnc", activeMode + ".Done");
}
/* ===== onEventSnc ===== */
function onEventSnc(isLoad, sncY) {
  const sncZ = document.querySelectorAll(".snc-z");
  const sncE = document.querySelectorAll(".snc-e");

  const sncZettaBpt = document.querySelectorAll(".snc-z-bpt");

  if (!isLoad) { /* Remove Event */
    for (let i = 0; i < sncY.length; i++) {
      switch (prevMode) {
        case 1: /* Mobile */
          sncZettaBpt[i].removeEventListener("click", onMdtSncZettaBpt);
          break;
        case 2: /* Tablet */
          sncZ[i].removeEventListener("click", handleTabletSncZ);
          break;
        case 3: /* Desktop */
          sncZ[i].removeEventListener("mouseenter", handleDesktopSncZ);
          sncZ[i].removeEventListener("mouseleave", handleDesktopSncZ);
          sncZ[i].removeEventListener("click", handleDesktopSncZ);

          const sncPetaEB = sncE[i].querySelectorAll(".snc-p");
          for (let j = 0; j < sncPetaEB.length; j++) {
            sncPetaEB[j].removeEventListener("mouseenter", handleDesktopSncP);
            sncPetaEB[j].removeEventListener("mouseleave", handleDesktopSncP); 
          }
          break;
        default:
          /* Error */
          break;
      }
    }
  }
  /* Add Event */
  for (let i = 0; i < sncY.length; i++) {
    /* Init */
    const sncPetaEB = sncE[i].querySelectorAll(".snc-p");
    /* const sncPetaTitleEB = sncE[i].querySelectorAll(".snc-p-title"); v1.1.11a [del]*/
    sncE[i].style.gridTemplateRows = calcGridTemplateData(sncPetaEB, 0);
    /* sncZ[i].idx = i;
    sncZ[i].isActive = 0; */
    sncZettaBpt[i].idx = i;
    sncZettaBpt[i].isActive = 0;
    /* activeMode */
    if (activeMode == 1) {
      sncZettaBpt[i].addEventListener("click", onMdtSncZettaBpt);
    } else if (activeMode == 2) {
      sncZ[i].addEventListener("click", handleTabletSncZ);
    } else if (activeMode == 3) {
      /* snc-z */
      sncZ[i].addEventListener("mouseenter", handleDesktopSncZ);
      sncZ[i].addEventListener("mouseleave", handleDesktopSncZ);
      sncZ[i].addEventListener("click", handleDesktopSncZ);
      /* snc-p */
      for (let j = 0; j < sncPetaEB.length; j++) {
        sncPetaEB[j].addEventListener("mouseenter", handleDesktopSncP);
        sncPetaEB[j].addEventListener("mouseleave", handleDesktopSncP);
      }
    } else {
      /* Error */
    }
  }
  /* Debugging */
  logf(0, "wsr/utils/event-utils.js", "onEventSnc", "Done");
}
/* ===== onEventProgress ===== */
function onEventProgress() {
  window.addEventListener("scroll", progressHandler);
}

export {
  onEventDniSni,
  onEventDnc,
  onEventSnc,
  onEventProgress
};
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */
