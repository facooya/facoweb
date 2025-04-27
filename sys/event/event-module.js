/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {toggleFMT, toggleRMT} from "./toggle-util.js";
function eventAddTBC() {
  TBC_DMI_CONTAINER.addEventListener("click", toggleFMT);
  TBC_SMI_CONTAINER.addEventListener("click", toggleRMT);
}
function eventAddFMCRMC() {
  _eventAddDropDown(DMC_CONTAINER);
  _eventAddDropDown(SMC_CONTAINER);
}
function _eventAddDropDown(cmp) {
  for (let i = 0; i < cmp.length; i++) {
    cmp[i].addEventListener("click", _itemDropDown);
  }
}
function _itemDropDown(event) {
  if (event.currentTarget.clientHeight == 80) {
    let _tagCount = event.currentTarget.querySelectorAll("li");
    event.currentTarget.style.height = 5.125*(_tagCount.length+1)-0.125+"rem";
    event.currentTarget.style.transition = "300ms";
    event.currentTarget.style.background = "#222222";
  } else {
    event.currentTarget.style.height = "5rem";
    event.currentTarget.style.background = "#000000";
  }
}
export {eventAddTBC, eventAddFMCRMC};