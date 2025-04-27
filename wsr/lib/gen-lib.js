/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  /* genTpcFli,
  genTpcDni,
  genTpcSni, */
  genTpnc
} from "../../wsr/utils/gen-utils.js";

function setupCoreTpc() {
  /* !!! v1.1.13a [del] */
  /* const tpcRoot = document.querySelector(".tpc-root"); */
  /* const tpcR = document.querySelector(".tpc-r"); */

  /* genTpcFli("Facooya", tpcR);
  genTpcDni(tpcR);
  genTpcSni(tpcR); */

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
