/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  genTpnc
} from "../../wsr/utils/gen-utils.js";

function setupCoreTpc() {

  const tpncR = document.querySelector(".tpnc-r");

  genTpnc(tpncR);

  logf(0, "wsr/utils/gen-lib.js", "setupCoreTpc", "Done");
}

export {
  setupCoreTpc
};
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */
