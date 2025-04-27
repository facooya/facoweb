/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Resize
 */
/* import {
  getMode
} from "../../wsr/bin/mode.js"; */
import {
  genTBC
} from "../../boot/gen/tbc.js";
/**/
function onResize(){
  activeMode = getMode();
  if (activeMode != prevMode) {
    /* TO DO */
    genTBC();
    prevMode = activeMode;
  }
}
/**/
export {
  onResize
};
/* INFORMATION
 * @[Author] {Facooya} (Owner)
 */