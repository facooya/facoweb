/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Load
 */
import {
  getMode
} from "../../../v1.1.6a/wsr/bin/mode.js";
/* import {
  initTBC,
  initFMCRMC
} from "../../../v1.1.6a/sys/init/init-module.js";
import {
  eventAddTBC,
  eventAddFMCRMC
} from "../../../v1.1.6a/sys/event/event-module.js"; */
/**/
function onLoad() {
  activeMode = getMode();
  prevMode = activeMode;
  /**/
  //initTBC();
  //initFMCRMC();
  /**/
  //eventAddTBC();
  //eventAddFMCRMC();
}
/**/
export {
  onLoad
};
/* INFORMATION
 * @[Author] {Facooya} (Owner)
 */