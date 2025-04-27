/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  getActiveMode
} from "../../wsr/lib/sys-lib.js";
import {
  setupEventResize,
  setupEventLoad
} from "../../wsr/lib/event-lib.js";
import {
  setupPartPage
} from "../../wsr/src/part-module.js";

function onLoad() {
  activeMode = getActiveMode();
  prevMode = activeMode;

  //identify == part: setupPartPage();
  setupPartPage();
  setupEventLoad();

  logf(0, "wsr/lib/web-lib.js", "onLoad", "Done");
  logf(0, "##########", "##########", "Web Load Done");
}
function onResize() {
  activeMode = getActiveMode();
  if (activeMode != prevMode) { /* Verify: onResize(); */

    setupEventResize();

    prevMode = activeMode;
    logf(0, "wsr/lib/web-lib.js", "onResize", "Done");
    logf(0, "##########", "##########", "Web Resize Done");
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
