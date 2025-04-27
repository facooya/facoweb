/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  enabledDni,
  enabledSni,
  //activeItemMobileDnc,
  //activeItemTabletDnc,
  //activeItemDesktopDnc,
  //inactiveItemDesktopDnc,
  handleTabletDncY,
  handleDesktopDncY,

  //activeItemSnc,
  handleSncY,
  progressHandler,

  //activateDesktopDncP,
  //deactivateDesktopDncP,
  handleDesktopDncP,
  
  handleMobileDncY
  //activeMobileDncY
} from "../../wsr/utils/event-handler-utils.js";

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
    dncE[i].style.gridTemplateRows = _helpTemporary(classDncP.length, 0);
  }
  /* Remove Event */
  if (!isLoad) {
    for (let i = 0; i < dncY.length; i++) {
      if (prevMode == 1) {
        dncY[i].removeEventListener("click", handleMobileDncY);
      } else if (prevMode == 2) {
        dncY[i].removeEventListener("click", handleTabletDncY);
      } else if (prevMode == 3) {
        dncY[i].removeEventListener("mouseenter", handleDesktopDncY);
        dncY[i].removeEventListener("mouseleave", handleDesktopDncY);

        for (let i = 0; i < dncP.length; i++) {
          dncP[i].removeEventListener("mouseenter", handleDesktopDncP);
          dncP[i].removeEventListener("mouseleave", handleDesktopDncP);
        }
      }
    }
  }
  /* Add Event */
  for (let i = 0; i < dncY.length; i++) {
    if (activeMode == 1) {
      dncY[i].addEventListener("click", handleMobileDncY);
    } else if (activeMode == 2) {
      dncY[i].addEventListener("click", handleTabletDncY);
    } else if (activeMode == 3) {
      dncY[i].addEventListener("mouseenter", handleDesktopDncY);
      dncY[i].addEventListener("mouseleave", handleDesktopDncY);

      for (let i = 0; i < dncP.length; i++) {
        dncP[i].addEventListener("mouseenter", handleDesktopDncP);
        dncP[i].addEventListener("mouseleave", handleDesktopDncP);
      }
    }
  }

  logf(0, "wsr/utils/event-utils.js", "onEventDnc", activeMode + ".Done");
}
// Temporary !!!!!!!!!!!!!!
function _helpTemporary(repeat, size) {
  let str = "";
  for (let i = 0; i < repeat; i++) {
    str += size + "rem ";
  }
  return str;
}
/*function onEventDncOld(isLoad, dncContainer) { !!!!! DELETE v1.1.11a 
   Remove Event 
  if (!isLoad) {
    for (let i = 0; i < dncContainer.length; i++) {
      if (prevMode == 1) {
        dncContainer[i].removeEventListener("click", activeItemMobileDnc);
      } else if (prevMode == 2) {
        dncContainer[i].removeEventListener("click", activeItemTabletDnc);
      } else if (prevMode == 3) {
        dncContainer[i].removeEventListener("mouseenter", activeItemDesktopDnc);
        dncContainer[i].removeEventListener("mouseleave", inactiveItemDesktopDnc);
      }
    }
  }
   Add Event 
  for (let i = 0; i < dncContainer.length; i++) {
    if (activeMode == 1) {
      dncContainer[i].addEventListener("click", activeItemMobileDnc);
    } else if (activeMode == 2) {
      dncContainer[i].addEventListener("click", activeItemTabletDnc);
    } else if (activeMode == 3) {
      dncContainer[i].addEventListener("mouseenter", activeItemDesktopDnc);
      dncContainer[i].addEventListener("mouseleave", inactiveItemDesktopDnc);
    }
  }

  logf(0, "wsr/utils/event-utils.js", "onEventDnc", activeMode + ".Done");
}*/
/* ===== onEventSnc ===== */
function onEventSnc(sncY) {
  const sncE = document.getElementsByClassName("snc-e");
  for (let i = 0; i < sncE.length; i++) {
    const classSncP = sncE[i].getElementsByClassName("snc-p");
    sncE[i].style.gridTemplateRows = _helpTemporary(classSncP.length, 0);
  }
  for (let i = 0; i < sncY.length; i++) {
    sncY[i].addEventListener("click", handleSncY);
  }
  logf(0, "wsr/utils/event-utils.js", "onEventSnc", "Done");
}
/*
function onEventSncOld(sncContainer) { !!!!! DELETE v1.1.11a 
  
  for (let i = 0; i < sncContainer.length; i++) {
    sncContainer[i].addEventListener("click", activeItemSnc);
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
