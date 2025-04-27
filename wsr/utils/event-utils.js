/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  enabledDni,
  enabledSni,
  activeItemMobileDnc,
  activeItemTabletDnc,
  activeItemDesktopDnc,
  inactiveItemDesktopDnc,
  activeItemSnc,
  progressHandler,
  activeDesktopDncP,
  inactiveDesktopDncP
} from "../../wsr/utils/event-handler-utils.js";

/* ===== onEventDniSni ===== */
function onEventDniSni() {
  const TBC_DNI_CONTAINER = document.getElementById("tbc-dni-container");
  const TBC_SNI_CONTAINER = document.getElementById("tbc-sni-container");
  TBC_DNI_CONTAINER.addEventListener("click", enabledDni);
  TBC_SNI_CONTAINER.addEventListener("click", enabledSni);

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
        dncY[i].removeEventListener("click", activeItemMobileDnc);
      } else if (prevMode == 2) {
        dncY[i].removeEventListener("click", activeItemTabletDnc);
      } else if (prevMode == 3) {
        dncY[i].removeEventListener("mouseenter", activeItemDesktopDnc);
        dncY[i].removeEventListener("mouseleave", inactiveItemDesktopDnc);
      }
    }
    // !!!!!!!!!!!!!!!
    if (prevMode == 3) {
      for (let i = 0; i < dncP.length; i++) {
        dncP[i].removeEventListener("mouseenter", activeDesktopDncP);
        dncP[i].removeEventListener("mouseleave", inactiveDesktopDncP);
      }
    }
  }
  /* Add Event */
  for (let i = 0; i < dncY.length; i++) {
    if (activeMode == 1) {
      dncY[i].addEventListener("click", activeItemMobileDnc);
    } else if (activeMode == 2) {
      dncY[i].addEventListener("click", activeItemTabletDnc);
    } else if (activeMode == 3) {
      dncY[i].addEventListener("mouseenter", activeItemDesktopDnc);
      dncY[i].addEventListener("mouseleave", inactiveItemDesktopDnc);
    }
  }
  //!!!!!!!!!!!!!!!!!!!
  for (let i = 0; i < dncP.length; i++) {
    dncP[i].addEventListener("mouseenter", activeDesktopDncP);
    dncP[i].addEventListener("mouseleave", inactiveDesktopDncP);
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
function onEventDncOld(isLoad, dncContainer) {
  /* Remove Event */
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
  /* Add Event */
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
}
/* ===== onEventSnc ===== */
function onEventSnc(sncY) {
  const sncE = document.getElementsByClassName("snc-e");
  for (let i = 0; i < sncE.length; i++) {
    const classSncP = sncE[i].getElementsByClassName("snc-p");
    sncE[i].style.gridTemplateRows = _helpTemporary(classSncP.length, 0);
  }
  for (let i = 0; i < sncY.length; i++) {
    sncY[i].addEventListener("click", activeItemSnc);
  }
  logf(0, "wsr/utils/event-utils.js", "onEventSnc", "Done");
}
function onEventSncOld(sncContainer) {
  
  for (let i = 0; i < sncContainer.length; i++) {
    sncContainer[i].addEventListener("click", activeItemSnc);
  }

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
