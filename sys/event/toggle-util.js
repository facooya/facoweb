/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Toggle
 */
function toggleFMT() {
  if (!isFMT) {
    _toggleGraphic(isFMT, TBC_FMT_SG, 0);
    /**/
    if (PART_CMP) {
      PART_CMP.style.paddingRight = "21rem";
    } else {
      document_frame.style.paddingRight = "21rem";
    }
    /**/
    FACOOYA_MENU_CMP.style.right = "0";
    isFMT = 1;
  } else {
    _toggleGraphic(isFMT, TBC_FMT_SG, 0);
    /**/
    if (PART_CMP) {
      PART_CMP.style.paddingRight = "1rem";
    } else {
      document_frame.style.paddingRight = "1rem";
    }
    /**/
    FACOOYA_MENU_CMP.style.right = "-20rem";
    for (let i = 0; i < FMC_CONTAINER.length; i++) {
      FMC_CONTAINER[i].style.background = "#000000";
      FMC_CONTAINER[i].style.height = "5rem";
    }
    isFMT = 0;
  }
  /**/
  _toggleTransition(FACOOYA_MENU_CMP, TBC_FMT_SG);
}
function toggleRMT() {
  console.log("toggleRMT");
}
/* option 0: FMT, option 1: RMT */
function _toggleGraphic(isActive, sg, option) {
  if (!isActive) {
    if (option == 0) {
      sg[0].style.transform = "rotate(45deg)";
      sg[2].style.transform = "rotate(-45deg)";
    } else {
      sg[0].style.transform = "rotate(-45deg)";
      sg[2].style.transform = "rotate(45deg)";
    }
    sg[0].style.top = "43.75%";
    sg[1].style.opacity = "0";
    sg[2].style.top = "43.75%";
  } else {
    sg[0].style.top="0%";
    sg[0].style.transform="rotate(0deg)";
    sg[1].style.opacity="1";
    sg[2].style.top="87.5%";
    sg[2].style.transform="rotate(0deg)";
  }
}
function _toggleTransition(cmp, sg) {
  for (let i = 0; i < sg.length; i++) {
    sg[i].style.transition = "300ms";
  }
  cmp.style.transition = "300ms";
}
export {toggleFMT, toggleRMT};