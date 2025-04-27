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
  progressHandler
} from "./event-handler-utils.js";

/* ===== onEventDniSni ===== */
function onEventDniSni() {
  const TBC_DNI_CONTAINER = document.getElementById("tbc-dni-container");
  const TBC_SNI_CONTAINER = document.getElementById("tbc-sni-container");
  TBC_DNI_CONTAINER.addEventListener("click", enabledDni);
  TBC_SNI_CONTAINER.addEventListener("click", enabledSni);

  logf(0, "wsr/utils/event-utils.js", "onEventDniSni", "Done");
}
/* ===== onEventDnc ===== */
function onEventDnc(isLoad, dncContainer) {
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
function onEventSnc(sncContainer) {
  for (let i = 0; i < sncContainer.length; i++) {
    sncContainer[i].addEventListener("click", activeItemSnc);
  }

  logf(0, "wsr/utils/event-utils.js", "onEventSnc", "Done");
}
/* ===== onEventProgress ===== */
function onEventProgress() {
  const SECTION_CONTAINER = document.getElementById("section-container");
  SECTION_CONTAINER.addEventListener("scroll", progressHandler);
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
