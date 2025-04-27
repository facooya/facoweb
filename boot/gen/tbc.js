/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* import {
  getMode
} from "../../../v1.1.6a/wsr/bin/mode.js"; */
import {
  genTBCDMI,
  genTBCSMI,
  genTNI
} from "./gen-module.js";

//genTBC();
function genTBC() {
  const _PARENT = document.getElementById("top-bar-cmp");
  /*!!!*/
  genTBCDMI(_PARENT);
  genTNI("Facooya", _PARENT);
  /*!!!*/
  if (ACTIVE_PAGE != 0) {
    genTBCSMI(_PARENT);
  }
}

export {
  genTBC
};
/* INFORMATION
 * @[Author] {Facooya} (Owner)
 */