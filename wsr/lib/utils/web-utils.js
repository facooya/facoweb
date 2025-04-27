/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  getActiveMode
} from "./system-access-utils.js";
import {
  setupEventDNISNI,
  setupEventDNC,
  setupEventSNC
} from "./event-utils.js";

function onLoad() {
  activeMode = getActiveMode();
  prevMode = activeMode;
  /* Once */
  setupEventDNISNI();
  /* Dynamic */
  setupEventDNC(1);
  setupEventSNC();
  //eventAddTBC();
  //eventAddDNI();
  //eventAddSNI();
  logf(0, "wsr/lib/utils/web-utils.js", "onLoad", "Done");
}
function onResize() {
  activeMode = getActiveMode();
  if (activeMode != prevMode) {
    setupEventDNC(0);
    //eventRemoveDNI();
    prevMode = activeMode;
    logf(0, "wsr/lib/utils/web-utils.js", "onResize", "Done");
  }
}

export {
 onLoad,
 onResize
};
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */
