/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  /*genTBCNav,*/
  /* genNav, */
  genNavTest
} from "../../wsr/utils/gen-utils.js";

/* &&& DATA: Developer Navigation Component, R: Root &&& */
/* class DataDnc {
  dncZettaTitleRS = [
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
}; */
/* !!! v1.1.13a [test] */
/* CodePt: ZBZS */
class DataDnc {
  dncZettaBptTitleRS = [
    "Menu 1",
    "Menu 2",
    "Menu 3",
    "Menu 4",
    "Menu 5"
  ];
  dncTeraTitleYS = [
    "Item 1-1"
  ];
  dncTeraTitleZS = [
    "Item 2-1",
    "Item 2-2"
  ];
  dncTeraTitleES = [
    "Item 3-1",
    "Item 3-2",
    "Item 3-3"
  ];
  dncTeraTitlePS = [
    "Item 4-1",
    "Item 4-2"
  ];
  dncTeraTitleTS = [
    "Item 5-1"
  ];
  dncTeraTitleRS = [
    this.dncTeraTitleYS,
    this.dncTeraTitleZS,
    this.dncTeraTitleES,
    this.dncTeraTitlePS,
    this.dncTeraTitleTS
  ];
  dncTeraHrefYS = [
    "#item-1-1"
  ];
  dncTeraHrefZS = [
    "#item-2-1",
    "#item-2-2"
  ];
  dncTeraHrefES = [
    "#item-3-1",
    "#item-3-2",
    "#item-3-3"
  ];
  dncTeraHrefPS = [
    "#item-4-1",
    "#item-4-2"
  ];
  dncTeraHrefTS = [
    "#item-5-1"
  ];
  dncTeraHrefRS = [
    this.dncTeraHrefYS,
    this.dncTeraHrefZS,
    this.dncTeraHrefES,
    this.dncTeraHrefPS,
    this.dncTeraHrefTS
  ];
};
/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */

function setupDnc() {
  const dataDnc = new DataDnc();
  const dncR = document.querySelector(".dnc-r");

  genNavTest(
    "dnc",
    dataDnc.dncZettaBptTitleRS,
    dataDnc.dncTeraTitleRS,
    dataDnc.dncTeraHrefRS,
    dncR
  );
  /* genNav(
    "dnc",
    dataDnc.dncZettaTitleRS,
    dataDnc.dncPetaTitleRS,
    dataDnc.dncPetaHrefRS,
    dncRoot
  ); */

  logf(0, "wsr/lib/gen/dnc.js", "setupDnc", "Done");
}

setupDnc();
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */
