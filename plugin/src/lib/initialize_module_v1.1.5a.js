/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * initialize
 */
import {facooya_menu_toggle,related_menu_toggle} from "./toggle_module_v1.1.5a.js";
function tbc_initialize(){
  tbc_rmt_sg[0].style.top="0%";
  tbc_rmt_sg[1].style.top="43.75%"
  tbc_rmt_sg[2].style.top="87.5%";
  /* --- */
  tbc_fmt_sg[0].style.top="0%";
  tbc_fmt_sg[1].style.top="43.75%";
  tbc_fmt_sg[2].style.top="87.5%";
  /* --- */
  if(isFacooyaMenuOpen){
    facooya_menu_toggle();
  }
  if(isRelatedMenuOpen){
    related_menu_toggle();
  }
}
function top_menu_initialize(){
  if(isDesktopMode){
    related_menu_compose.style.width="20rem";
    related_menu_compose.style.left="-20rem";
    related_menu_compose.style.transition="0ms";
    /* --- */
    facooya_menu_compose.style.width="20rem";
    facooya_menu_compose.style.right="-20rem";
    facooya_menu_compose.style.transition="0ms";
  }else{
    related_menu_compose.style.width="100%";
    related_menu_compose.style.left="-100%";
    related_menu_compose.style.transition="0ms";
    /* --- */
    facooya_menu_compose.style.width="100%";
    facooya_menu_compose.style.right="-100%";
    facooya_menu_compose.style.transition="0ms";
  }
}
export {tbc_initialize,top_menu_initialize};
