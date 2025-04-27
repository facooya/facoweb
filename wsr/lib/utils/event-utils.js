/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  _enabledDNI,
  _enabledSNI,
  _enterDNC,
  _leaveDNC,
  _activeItemDNC,
  _activeItemSNC,
  _activeTabletDNC
} from "../../local/event-local.js";

function setupEventDNISNI() {
  TBC_DNI_CONTAINER.addEventListener("click", _enabledDNI);
  TBC_SNI_CONTAINER.addEventListener("click", _enabledSNI);
}

function setupEventDNC(load) {
  /* ### HMI ### */
  if (isEnabledDNI) {
    DEV_NAV_CMP.style.left = "0%";
    isEnabledDNI = 0;
  }

  if (activeMode == 1 && (prevMode > 1 || load)) {
    _eventManagerDNC(load);
    for (let i = 0; i < DNC_CONTAINER.length; i++) {
      DNC_CONTAINER[i].addEventListener("click", _activeItemDNC);
    }
  } else if (activeMode == 2 && (prevMode == 1 || prevMode == 3 || load)) {
    _eventManagerDNC(load);
    for (let i = 0; i < DNC_CONTAINER.length; i++) {
      DNC_CONTAINER[i].addEventListener("click", _activeTabletDNC);
    }
  } else if (activeMode == 3 && (prevMode < 3 || load)) {
    _eventManagerDNC(load);
    for (let i = 0; i < DNC_CONTAINER.length; i++) {
      DNC_CONTAINER[i].addEventListener("mouseenter", _enterDNC);
      DNC_CONTAINER[i].addEventListener("mouseleave", _leaveDNC);
    }
  }
  logf(0, "wsr/lib/utils/event-utils.js", "setupEventDNC", activeMode);
}
function _eventManagerDNC(load) {
  for (let i = 0; i < DNC_CONTAINER.length; i++) {
    DNC_CONTAINER[i].index = i;
    DNC_CONTAINER[i].isActive = 0;
    if (prevMode == 1 && !load) {
      DNC_CONTAINER[i].removeEventListener("click", _activeItemDNC);
    } else if (prevMode == 2 && !load) {
      DNC_CONTAINER[i].removeEventListener("click", _activeTabletDNC);
    } else if (prevMode == 3 && !load) {
      DNC_CONTAINER[i].removeEventListener("mouseenter", _enterDNC);
      DNC_CONTAINER[i].removeEventListener("mouseleave", _leaveDNC);
    }
  }
}
function setupEventSNC() {
  //const identify = 55555555; test = 77777777;
  for (let i = 0; i < SNC_CONTAINER.length; i++) {
    SNC_CONTAINER[i].index = i;
    SNC_CONTAINER[i].isActive = 0;
    SNC_CONTAINER[i].addEventListener("click", _activeItemSNC);
  }
}
function setupResize() {
  isEnabledDNI = 0;
  isEnabledSNI = 0;

  DEV_NAV_CMP.style.cssText = "";
  SUB_NAV_CMP.style.cssText = "";

  for (let i = 0; i < DNC_CONTAINER.length; i++) {
    DNC_CONTAINER[i].style.cssText = "";
    DNC_SUB_CONTAINER[i].style.cssText = "";
  }
  for (let i = 0; i< SNC_CONTAINER.length; i++) {
    SNC_CONTAINER[i].style.cssText = "";
    SNC_SUB_CONTAINER[i].style.cssText = "";
  }
  /* TBC */
  const _TBC_SNI_SG = document.getElementsByClassName("tbc-sni-sg");
  for (let i = 0; i < _TBC_SNI_SG.length; i++) {
    _TBC_SNI_SG[i].style.cssText = "";
  }
  const _TBC_DNI_SG = document.getElementsByClassName("tbc-dni-sg");
  for (let i = 0; i < _TBC_DNI_SG.length; i++) {
    _TBC_DNI_SG[i].style.cssText = "";
  }
}
function setupEventLoad() {
  isEnabledDNI = 0;
  isEnabledSNI = 0;
  for (let i = 0; i < DNC_CONTAINER.length; i++) {
    DNC_CONTAINER[i].index = i;
    DNC_CONTAINER[i].isActive = 0;
  }
}
export {
  setupEventDNISNI,
  setupEventDNC,
  setupEventSNC,
  setupResize
};
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */
