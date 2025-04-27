/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* import {
  setupProgressBar
} from "../../../v1.1.10a/wsr/lib/event-lib.js"; */
// onLoad partSetup(); event-utils.js: _activeTab(event);
function setupPartPage() {
  const PART_TAB_ITEM = document.getElementsByClassName("part-tab-item");
  const CHAPTER_CONTAINER = document.getElementsByClassName("chapter-container");
  const TAB = new URL(location.href).searchParams.get("tab");
  /* Initial */
  for (let i = 0; i < PART_TAB_ITEM.length; i++) {
    PART_TAB_ITEM[i].index = i;
    PART_TAB_ITEM[i].addEventListener("click", _activeTab);
    CHAPTER_CONTAINER[i].style.display = "none";
  }
  /* URL Verify */
  if (TAB) {
    PART_TAB_ITEM[TAB].style.borderColor = "#000000";
    PART_TAB_ITEM[TAB].style.color = "#000000";
    PART_TAB_ITEM[TAB].style.fontWeight = "700";
    CHAPTER_CONTAINER[TAB].style.display = "grid";
  } else {
    PART_TAB_ITEM[0].style.borderColor = "#000000";
    PART_TAB_ITEM[0].style.color = "#000000";
    PART_TAB_ITEM[0].style.fontWeight = "700";
    CHAPTER_CONTAINER[0].style.display = "grid";
  }
  _verifyProgressBar();
  logf(0, "wsr/src/part.js", "setupPart", "Done");
}
function _activeTab(event) {
  const ect = event.currentTarget;
  const PART_TAB_ITEM = document.getElementsByClassName("part-tab-item");
  const CHAPTER_CONTAINER = document.getElementsByClassName("chapter-container");
  /* inactivating */
  for (let i = 0; i < PART_TAB_ITEM.length; i++) {
    PART_TAB_ITEM[i].style.borderColor = "#AAAAAA";
    PART_TAB_ITEM[i].style.color = "#555555";
    PART_TAB_ITEM[i].style.fontWeight = "400";
    CHAPTER_CONTAINER[i].style.display = "none";
  }
  /* Activating */
  ect.style.borderColor = "#000000";
  ect.style.color = "#000000";
  ect.style.fontWeight = "700";
  CHAPTER_CONTAINER[ect.index].style.display = "grid";

  _verifyProgressBar();
}
function _verifyProgressBar() {
  const _HTML = document.documentElement;
  /* const LPB = document.getElementById("lpb"); !!! v1.1.13a [del] (replaced)
  const RPB = document.getElementById("rpb"); */
  const prcYottaScpt = document.querySelector(".prc-r .prc-y-scpt");
  const prcYottaTipt = document.querySelector(".prc-r .prc-y-tipt");

  const height = _HTML.scrollHeight - _HTML.clientHeight;
  if (height == 0) {
    /* LPB.style.height = "100%"; !!! v1.1.13a [del] (replaced)
    RPB.style.height = "100%"; */
    prcYottaScpt.style.height = "100%";
    prcYottaTipt.style.height = "100%";
  } else {
    /* LPB.style.height = "0%"; !!! v1.1.13a [del] (replaced)
    RPB.style.height = "0%"; */
    prcYottaScpt.style.height = "0%";
    prcYottaTipt.style.height = "0%";
  }
}

export {
  setupPartPage
};
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */
