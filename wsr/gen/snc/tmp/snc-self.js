/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  /*genTBCNav,*/
  genNav
} from "../../../../wsr/utils/gen-utils.js";

/* &&& DATA: Support Navigation Component, R: Root &&& */
class DataSnc {
  sncZettaTitleRS = [ /* YS ZS ES */
    "Tab 1",
    "Tab 2",
    "Tab 3"
  ];
  sncPetaTitleYS = [
    "Version 1.1.9 Alpha",
    "Item 1-2",
    "Item 1-3",
    "Item 1-4",
    "Item 1-5",
    "Item 1-6",
    "Item 1-7",
    "Item 1-8",
    "Item 1-9",
    "Item 1-10",
    "Item 1-11",
  ];
  sncPetaTitleZS = [
    "Item 2-1",
    "Item 2-2"
  ];
  sncPetaTitleES = [
    "Item 3-1",
    "Item 3-2",
    "Item 3-3"
  ];
  sncPetaTitleRS = [
    this.sncPetaTitleYS,
    this.sncPetaTitleZS,
    this.sncPetaTitleES
  ];
  /* !!! Temporary ../.. : e.g., /content/programming/c/tutorial/c-... */
  sncPetaHrefYS = [
    "./doc-page.html",
    "./doc-page.html",
    "./doc-page.html",
    "./doc-page.html",
    "./doc-page.html",
    "./doc-page.html",
    "./doc-page.html",
    "./doc-page.html",
    "./doc-page.html",
    "./doc-page.html",
    "./doc-page.html"
  ];
  sncPetaHrefZS = [
    "./doc-page.html",
    "./doc-page.html"
  ];
  sncPetaHrefES = [
    "./doc-page.html",
    "./doc-page.html",
    "./doc-page.html"
  ];
  sncPetaHrefRS = [
    this.sncPetaHrefYS,
    this.sncPetaHrefZS,
    this.sncPetaHrefES
  ];
};

function setupSnc() {
  //const _DS = new DataSnc();
  //const _PARENT = document.getElementById("sub-nav-cmp");
  const dataSnc = new DataSnc();
  const sncRoot = document.querySelector(".snc-root");
  genNav(
    "snc",
    dataSnc.sncZettaTitleRS,
    dataSnc.sncPetaTitleRS,
    dataSnc.sncPetaHrefRS,
    sncRoot
  );
  
  /*genTBCNav(
    "snc",
    _DS.sncZettaTitleRS,
    _DS.sncPetaTitleRS,
    _DS.sncPetaHrefRS,
    _PARENT
  );*/

  logf(0, "wsr/lib/gen/snc/*/*-snc.js", "setupSnc", "Done");
}
/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */

setupSnc();

/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */