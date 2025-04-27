/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Event
 */
/* &&& page_frame_psl_v1.1.5a.js &&& */
/* &&& tbc_rmt_bg, tbc_fmt_bg, rmc_container, fmc_container &&& */

import {related_menu_toggle,facooya_menu_toggle} from "./toggle_module_v1.1.5a.js";

function top_menu_event(){
  tbc_rmt_container.addEventListener("click",related_menu_toggle);
  tbc_fmt_container.addEventListener("click",facooya_menu_toggle);
  for(let i=0;i<rmc_container.length;i++){
    rmc_container[i].addEventListener("click",item_drop_down);
  }
  for(let i=0;i<fmc_container.length;i++){
    fmc_container[i].addEventListener("click",item_drop_down);
  }
}
function item_drop_down(event){
  /* - Related || Facooya Menu Container Open, 80px == 5rem : Current Container Height - */
  if(event.currentTarget.clientHeight==80){
    let li_tag_count=event.currentTarget.querySelectorAll("li");
    event.currentTarget.style.height=5.125*(li_tag_count.length+1)-0.125+"rem";
    event.currentTarget.style.transition="300ms";
    event.currentTarget.style.background="#222222";
  }else{ /* - Related || Facooya Menu Container Close - */
    event.currentTarget.style.height="5rem";
    event.currentTarget.style.background="#000000";
  }
}
export {top_menu_event}
