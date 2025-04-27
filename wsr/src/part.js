/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
// onLoad partSetup(); event-utils.js: _activeTab(event);
for (let i = 0; i < PART_TAB_ITEM.length; i++) {
  PART_TAB_ITEM[i].index = i;
  PART_TAB_ITEM[i].addEventListener("click", _activeTab);
  CHAPTER_CONTAINER[i].style.display = "none";
}
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
function _activeTab(event) {
  const ect = event.currentTarget;
  for (let i = 0; i < PART_TAB_ITEM.length; i++) {
    PART_TAB_ITEM[i].style.borderColor = "#AAAAAA";
    PART_TAB_ITEM[i].style.color = "#555555";
    PART_TAB_ITEM[i].style.fontWeight = "400";
    CHAPTER_CONTAINER[i].style.display = "none";
  }
  ect.style.borderColor = "#000000";
  ect.style.color = "#000000";
  ect.style.fontWeight = "700";
  CHAPTER_CONTAINER[ect.index].style.display = "grid";
}
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */
