/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  /*genTBCNav,*/
  genNav
} from "../../wsr/utils/gen-utils.js";

/* &&& DATA: Developer Navigation Component, R: Root &&& */
class DataDnc {
  dncZettaTitleRS = [ /* YS ZS ES PS TS */
    "Menu 1",
    "Menu 2",
    "Menu 3",
    "Menu 4",
    "Menu 5"
  ];
  dncPetaTitleYS = [
    "Item 1-1"
  ];
  dncPetaTitleZS = [
    "Item 2-1",
    "Item 2-2"
  ];
  dncPetaTitleES = [
    "Item 3-1",
    "Item 3-2",
    "Item 3-3"
  ];
  dncPetaTitlePS = [
    "Item 4-1",
    "Item 4-2"
  ];
  dncPetaTitleTS = [
    "Item 5-1"
  ];
  dncPetaTitleRS = [
    this.dncPetaTitleYS,
    this.dncPetaTitleZS,
    this.dncPetaTitleES,
    this.dncPetaTitlePS,
    this.dncPetaTitleTS
  ];
  dncPetaHrefYS = [
    "#item-1-1"
  ];
  dncPetaHrefZS = [
    "#item-2-1",
    "#item-2-2"
  ];
  dncPetaHrefES = [
    "#item-3-1",
    "#item-3-2",
    "#item-3-3"
  ];
  dncPetaHrefPS = [
    "#item-4-1",
    "#item-4-2"
  ];
  dncPetaHrefTS = [
    "#item-5-1"
  ];
  dncPetaHrefRS = [
    this.dncPetaHrefYS,
    this.dncPetaHrefZS,
    this.dncPetaHrefES,
    this.dncPetaHrefPS,
    this.dncPetaHrefTS
  ];
};
/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */

function setupDnc() {
  const dataDnc = new DataDnc();
  const dncRoot = document.querySelector(".dnc-root");

  /*genTBCNav(
    "dnc",
    _DD._DNC_CONTAINER_NAME_LIST,
    _DD._DNC_ITEM_NAME_LIST,
    _DD._DNC_ITEM_LINK_LIST,
    _PARENT
  );*/
  genNav(
    "dnc",
    dataDnc.dncZettaTitleRS,
    dataDnc.dncPetaTitleRS,
    dataDnc.dncPetaHrefRS,
    dncRoot
  );

  logf(0, "wsr/lib/gen/dnc.js", "setupDnc", "Done");
}

setupDnc();
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */
