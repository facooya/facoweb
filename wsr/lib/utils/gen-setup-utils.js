/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  genTBCTLI,
  genTBCDNI,
  genTBCSNI
} from "../gen/tbc.js";

function setupCoreTBC() {
  const _PARENT = document.getElementById("top-bar-cmp");

  genTBCTLI("Facooya", _PARENT);
  genTBCDNI(_PARENT);
  genTBCSNI(_PARENT);

  logf(0, "wsr/lib/utils/gen-setup-utils.js", "setupCoreTBC", "Done");
}

export {
  setupCoreTBC
};
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */
