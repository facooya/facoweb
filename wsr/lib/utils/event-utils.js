/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  _toggleDNI,
  _toggleSNI,
  _enterDNC,
  _leaveDNC,
  _activeItemDNC,
  _activeItemSNC
} from "../../local/event-local.js";

function setupEventDNISNI() {
  TBC_DNI_CONTAINER.addEventListener("click", _toggleDNI);
  TBC_SNI_CONTAINER.addEventListener("click", _toggleSNI);
}
function setupEventDNC(load) {
  if (activeMode == 1 && (prevMode > 1 || load)) {
    for (let i = 0; i < DNC_CONTAINER.length; i++) {
      if (!load) {
        DNC_CONTAINER[i].removeEventListener("mouseenter", _enterDNC);
        DNC_CONTAINER[i].removeEventListener("mouseleave", _leaveDNC);
      }
      DNC_CONTAINER[i].index = i;
      DNC_CONTAINER[i].addEventListener("click", _activeItemDNC);
    }
  } else if (activeMode > 1 && (prevMode == 1 || load)) {
    if (isOpenDNI) {
      DEV_NAV_CMP.style.left = "0rem";
      isOpenDNI = 0;
    }
    for (let i = 0; i < DNC_CONTAINER.length; i++) {
      if (!load) {
        DNC_CONTAINER[i].removeEventListener("click", _activeItemDNC);
      }
      DNC_CONTAINER[i].index = i;
      DNC_CONTAINER[i].addEventListener("mouseenter", _enterDNC);
      DNC_CONTAINER[i].addEventListener("mouseleave", _leaveDNC);
    }
  }
  logf(0, "wsr/lib/utils/event-utils.js", "setupEventDNC", activeMode);
}
function setupEventSNC() {
  //const identify = 55555555; test = 77777777;
  for (let i = 0; i < SNC_CONTAINER.length; i++) {
    SNC_CONTAINER[i].index = i;
    SNC_CONTAINER[i].isActive = 0;
    SNC_CONTAINER[i].addEventListener("click", _activeItemSNC);
  }
}

export {
  setupEventDNISNI,
  setupEventDNC,
  setupEventSNC
};
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */
