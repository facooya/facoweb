/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/*import {
  getPathSNC
} from "../../../../v1.1.6a/wsr/lib/utils/system-access-utils.js";*/
import {
  genTBCTLI,
  genTBCDNI,
  genTBCSNI
} from "../gen/tbc.js";
/*
import {
  DataDNC
} from "../../../../v1.1.6a/var/lib/nav/data-dnc.js";*/
/* import {
  DataSNC
} from ".../v1.1.6a/var/lib/nav/snc/.../*-data-snc.js"; */

function setupCoreTBC() {
  const _PARENT = document.getElementById("top-bar-cmp");

  genTBCTLI("Facooya", _PARENT);
  genTBCDNI(_PARENT);
  genTBCSNI(_PARENT);

  logf(0, "wsr/lib/utils/gen-setup-utils.js", "setupCoreTBC", "Done");
}
/*
function setupTBCDNC() {
  const _DD = new DataDNC();
  const _PARENT = document.getElementById("dev-nav-cmp");

  genTBCNav(
    "dnc",
    _DD._DNC_CONTAINER_NAME_LIST,
    _DD._DNC_ITEM_NAME_LIST,
    _DD._DNC_ITEM_LINK_LIST,
    _PARENT
  );

  logf(0, "wsr/lib/utils/gen-setup-utils.js", "setupTBCDNC", "Done");
}*/
/*function setupTBCSNC() {
  const _PARENT = document.getElementById("sub-nav-cmp");
  let _path = getPathSNC();

  if (_path == 5555) {
    logf(0, "wsr/lib/utils/gen-setup-utils.js", "setupTBCSNC", "Home");
  } else {
    import(_path).then(data => {
      const _DS = new data.DataSNC();

      genTBCNav(
        "snc",
        _DS._SNC_CONTAINER_NAME_LIST,
        _DS._SNC_ITEM_NAME_LIST,
        _DS._SNC_ITEM_LINK_LIST,
        _PARENT
      );

      logf(0, "wsr/lib/utils/gen-setup-utils.js", "setupTBCSNC", "Import Done");
    }).catch(error => {
      logf(1, "wsr/lib/utils/gen-setup-utils.js", "setupTBCSNC", error);
    });
  }

  logf(0, "wsr/lib/utils/gen-setup-utils.js", "setupTBCSNC", "Done");
}*/

export {
  setupCoreTBC
  //setupTBCDNC,
  //setupTBCSNC
};
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */
