/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  getActivePage
} from "../wsr/lib/utils/system-access-utils.js";
import {
  setupCoreTBC,
  //setupTBCDNC,
  //setupTBCSNC
} from "../wsr/lib/utils/gen-setup-utils.js";
/*  */
/* Page value */
const ACTIVE_PAGE = getActivePage();
/* ### Start of [Debugging] ### */
if (ACTIVE_PAGE > 0) {
  logf(0, "etc/init-setup.js", "ACTIVE_PAGE", ACTIVE_PAGE);
} else {
  logf(-1, "etc/init-setup.js", "ACTIVE_PAGE", ACTIVE_PAGE);
}
/* ### End of [Debugging] ### */
setupCoreTBC();
//setupTBCDNC();
//setupTBCSNC();
/* DESCRIPTION
 * @[Value] {Const} (ACTIVE_PAGE) 1: Home, 2: Part, 3: Doc, -1: Fail, Else: Error
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */