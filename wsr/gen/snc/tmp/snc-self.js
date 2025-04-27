/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  genNavTest
} from "../../../../wsr/utils/gen-utils.js";
/* CodePt: ZBZS */
class DataSnc {
  sncZettaBptTitleRS = [
    "Tab 1",
    "Tab 2",
    "Tab 3"
  ];
  sncTeraTitleYS = [
    "Version 1.1.13 Alpha",
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
  sncTeraTitleZS = [
    "Item 2-1",
    "Item 2-2"
  ];
  sncTeraTitleES = [
    "Item 3-1",
    "Item 3-2",
    "Item 3-3"
  ];
  sncTeraTitleRS = [
    this.sncTeraTitleYS,
    this.sncTeraTitleZS,
    this.sncTeraTitleES
  ];
  sncTeraHrefYS = [
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
  sncTeraHrefZS = [
    "./doc-page.html",
    "./doc-page.html"
  ];
  sncTeraHrefES = [
    "./doc-page.html",
    "./doc-page.html",
    "./doc-page.html"
  ];
  sncTeraHrefRS = [
    this.sncTeraHrefYS,
    this.sncTeraHrefZS,
    this.sncTeraHrefES
  ];
};

function setupSnc() {
  const dataSnc = new DataSnc();
  const sncR = document.querySelector(".snc-r");

  genNavTest(
    "snc",
    dataSnc.sncZettaBptTitleRS,
    dataSnc.sncTeraTitleRS,
    dataSnc.sncTeraHrefRS,
    sncR
  );

  /* genNav(
    "snc",
    dataSnc.sncZettaTitleRS,
    dataSnc.sncPetaTitleRS,
    dataSnc.sncPetaHrefRS,
    sncRoot
  ); */

  logf(0, "wsr/lib/gen/snc/*/*-snc.js", "setupSnc", "Done");
}
/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */

setupSnc();

/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */