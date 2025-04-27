/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  genTBCTLI,
  genTBCDNI,
  genTBCSNI
} from "../../wsr/utils/gen-utils.js";

function setupCoreTBC() {
  const _PARENT = document.querySelector(".tpc-root");

  genTBCTLI("Facooya", _PARENT);
  genTBCDNI(_PARENT);
  genTBCSNI(_PARENT);

  logf(0, "wsr/utils/gen-lib.js", "setupCoreTBC", "Done");
}

export {
  setupCoreTBC
};
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */
