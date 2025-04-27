/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  genTBCTLI,
  genTBCDNI,
  genTBCSNI
} from "../utils/gen-tbc-utils.js";

function setupCoreTBC() {
  const _PARENT = document.getElementById("top-bar-cmp");

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
