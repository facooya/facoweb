/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  /*genTBCTLI,
  genTBCDNI,
  genTBCSNI*/
  genTpcFli,
  genTpcDni,
  genTpcSni
} from "../../wsr/utils/gen-utils.js";

function setupCoreTpc() {
  const tpcRoot = document.querySelector(".tpc-root");

  /*genTBCTLI("Facooya", tpcRoot);
  genTBCDNI(tpcRoot);
  genTBCSNI(tpcRoot);*/

  genTpcFli("Facooya", tpcRoot);
  genTpcDni(tpcRoot);
  genTpcSni(tpcRoot);

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
