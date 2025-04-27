/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  enabledDni,
  enabledSni,

  //handleMobileDncY,
  handleMobileDncZ,
  //handleTabletDncY,
  handleTabletDncZ,
  handleDesktopDncY,
  handleDesktopDncP,

  handleMobileSncZ,
  handleTabletSncZ,
  handleDesktopSncZ,
  handleDesktopSncP,

  progressHandler
} from "../../wsr/utils/event-handler-utils.js";
import {
  calcGridTemplateData
} from "../../wsr/local/event-handler-local.js";

/* ===== onEventDniSni ===== */
function onEventDniSni() {

  const tpcDniY = document.querySelector(".tpc-dni-y");
  const tpcSniY = document.querySelector(".tpc-sni-y");
  tpcDniY.addEventListener("click", enabledDni);
  tpcSniY.addEventListener("click", enabledSni);

  logf(0, "wsr/utils/event-utils.js", "onEventDniSni", "Done");
}
/* ===== onEventDnc ===== */
function onEventDnc(isLoad, dncY) {
  const dncP = document.getElementsByClassName("dnc-p");
  const dncE = document.getElementsByClassName("dnc-e");
  for (let i = 0; i < dncE.length; i++) {
    const classDncP = dncE[i].getElementsByClassName("dnc-p");
    dncE[i].style.gridTemplateRows = calcGridTemplateData(classDncP, 0);
  }
  /* !!! v1.1.11a [tmp] */
  const dncZ = document.querySelectorAll(".dnc-z");
  /* Remove Event */
  if (!isLoad) {
    for (let i = 0; i < dncY.length; i++) {
      if (prevMode == 1) {
        /* !!! v1.1.11a [tmp] */
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
      }
    }
  } else {
    for (let i = 0; i < dncY.length; i++) {
      dncY[i].isActive = false;
      dncZ[i].index = i;
    }
  }
  /* Add Event */
  for (let i = 0; i < dncY.length; i++) {
    if (dncY[i].isActive) {
      dncY[i].isActive = false;
    }
    //dncZ[i].index = i;
    if (activeMode == 1) {
      /* !!! v1.1.11a [tmp] */
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
    }
  }

  logf(0, "wsr/utils/event-utils.js", "onEventDnc", activeMode + ".Done");
}
/*function _helpTemporary(repeat, size) { !!! v1.1.11 [del]
  let str = "";
  for (let i = 0; i < repeat; i++) {
    str += size + "rem ";
  }
  return str;
}*/
/* ===== onEventSnc ===== */
function onEventSnc(isLoad, sncY) {
  const sncZ = document.querySelectorAll(".snc-z");
  const sncE = document.querySelectorAll(".snc-e");
  /*const sncP = document.querySelectorAll(".snc-p");*/
  if (!isLoad) { /* Remove Event */
    for (let i = 0; i < sncY.length; i++) {
      switch (prevMode) {
        case 1: /* Mobile */
          sncZ[i].removeEventListener("click", handleMobileSncZ);
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
      /*if (prevMode == 1) { !!! v1.1.11a [del]
        sncZ[i].removeEventListener("click", handleMobileSncZ);
      } else if (pervMove == 2) {
        sncZ[i].removeEventListener("click", handleTabletSncZ);
      } else if (prevMode == 3) {
        sncZ[i].removeEventListener("mouseenter", handleDesktopSncZ);
        sncZ[i].removeEventListener("mouseleave", handleDesktopSncZ);
        sncZ[i].removeEventListener("click", handleDesktopSncZ);

        const sncPetaEB = sncE[i].querySelectorAll(".snc-p");
        for (let j = 0; j < sncPetaEB.length; j++) {
          sncP[i].removeEventListener("mouseenter", handleDesktopSncP);
          sncP[i].removeEventListener("mouseleave", handleDesktopSncP); 
        }
      } else {
        /* Error 
      }*/
    }
  }
  /* Add Event */
  for (let i = 0; i < sncY.length; i++) {
    /* Init */
    const sncPetaEB = sncE[i].querySelectorAll(".snc-p");
    /* const sncPetaTitleEB = sncE[i].querySelectorAll(".snc-p-title"); v1.1.11a [del]*/
    sncE[i].style.gridTemplateRows = calcGridTemplateData(sncPetaEB, 0);
    sncZ[i].idx = i;
    sncZ[i].isActive = 0;
    /* activeMode */
    if (activeMode == 1) {
      sncZ[i].addEventListener("click", handleMobileSncZ);
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
/*function onEventSnc(sncY) { !!! v1.1.11a [del]
  const sncE = document.getElementsByClassName("snc-e");
  for (let i = 0; i < sncE.length; i++) {
    const classSncP = sncE[i].getElementsByClassName("snc-p");
    sncE[i].style.gridTemplateRows = _helpTemporary(classSncP.length, 0);
  }
  for (let i = 0; i < sncY.length; i++) {
    sncY[i].addEventListener("click", handleSncY);
  }
  logf(0, "wsr/utils/event-utils.js", "onEventSnc", "Done");
}*/
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
