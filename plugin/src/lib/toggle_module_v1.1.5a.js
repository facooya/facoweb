/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Toggle
 */
function related_menu_toggle(){
  if(!isRelatedMenuOpen){ /* - Related Menu Open - */
    /* --- Graphic --- */
    tbc_rmt_sg[0].style.top="43.75%";
    tbc_rmt_sg[0].style.transform="rotate(-45deg)";
    tbc_rmt_sg[1].style.opacity="0";
    tbc_rmt_sg[2].style.top="43.75%";
    tbc_rmt_sg[2].style.transform="rotate(45deg)";
    /* ------------------------------ */
    /* --- Section --- */
    if(isDesktopMode){ /* - Desktop Mode - */
      if (part_frame) {
        part_frame.style.paddingLeft="21rem";
      } else {
        document_frame.style.paddingLeft="21rem";
      }
    }else{ /* - Mobile Mode - */
      if(isFacooyaMenuOpen){
        facooya_menu_toggle();
      }
    }
    related_menu_compose.style.left="0";
    /* ------------------------------ */
    isRelatedMenuOpen=1;
  }else{ /* - Related Menu Close - */
    /* --- Graphic --- */
    tbc_rmt_sg[0].style.top="0%";
    tbc_rmt_sg[0].style.transform="rotate(0deg)";
    tbc_rmt_sg[1].style.opacity="1";
    tbc_rmt_sg[2].style.top="87.5%";
    tbc_rmt_sg[2].style.transform="rotate(0deg)";
    /* ------------------------------ */
    /* --- Section --- */
    if(isDesktopMode){ /* - Desktop Mode - */
      related_menu_compose.style.left="-20rem";
      if (part_frame) {
        part_frame.style.paddingLeft="1rem";
      } else {
        document_frame.style.paddingLeft="1rem";
      }
    }else{ /* - Mobile Mode - */
      related_menu_compose.style.left="-100%";
    }
    /* ------------------------------ */
    /* --- Related Menu Close ? Related Menu Container Close --- */
    for(let i=0;i<rmc_container.length;i++){
      rmc_container[i].style.background="#000000";
      rmc_container[i].style.height="5rem";
    }
    /* ------------------------------ */
    isRelatedMenuOpen=0;
  }
  /* --- Transition --- */
  for(let i=0;i<3;i++){
    tbc_rmt_sg[i].style.transition="300ms";
  }
  related_menu_compose.style.transition="300ms";
  /* ------------------------------ */
}
function facooya_menu_toggle(){
  if(!isFacooyaMenuOpen){ /* - Facooya Menu Open - */
    /* --- Graphic --- */
    tbc_fmt_sg[0].style.top="43.75%";
    tbc_fmt_sg[0].style.transform="rotate(45deg)";
    tbc_fmt_sg[1].style.opacity="0";
    tbc_fmt_sg[2].style.top="43.75%";
    tbc_fmt_sg[2].style.transform="rotate(-45deg)";
    /* ------------------------------ */
    /* --- Section --- */
    if(isDesktopMode){ /* - Desktop Mode - */
      if (part_frame) {
        part_frame.style.paddingRight="21rem";
      } else {
        document_frame.style.paddingRight="21rem";
      }
    }else{ /* - Mobile Mode - */
      if(isRelatedMenuOpen){
        related_menu_toggle();
      }
    }
    facooya_menu_compose.style.right="0";
    /* ------------------------------ */
    isFacooyaMenuOpen=1;
  }else{ /* - Facooya Menu Close - */
    /* --- Graphic --- */
    tbc_fmt_sg[0].style.top="0%";
    tbc_fmt_sg[0].style.transform="rotate(0deg)";
    tbc_fmt_sg[1].style.opacity="1";
    tbc_fmt_sg[2].style.top="87.5%";
    tbc_fmt_sg[2].style.transform="rotate(0deg)";
    /* ------------------------------ */
    /* --- Section --- */
    if(isDesktopMode){ /* - Desktop Mode - */
      facooya_menu_compose.style.right="-20rem";
        if (part_frame) {
          part_frame.style.paddingRight="1rem";
        } else {
          document_frame.style.paddingRight="1rem";
        }
    }else{ /* - Mobile Mode - */
      facooya_menu_compose.style.right="-100%";
    }
    /* ------------------------------ */
    /* --- Facooya Menu Container Close ? Facooya Menu Container Close --- */
    for(let i=0;i<fmc_container.length;i++){
      fmc_container[i].style.background="#000000";
      fmc_container[i].style.height="5rem";
    }
    /* ------------------------------ */
    isFacooyaMenuOpen=0;
  }
  /* --- Transition  --- */
  for(let i=0;i<3;i++){
    tbc_fmt_sg[i].style.transition="300ms";
  }
  facooya_menu_compose.style.transition="300ms";
  /* ------------------------------ */
}
export{related_menu_toggle,facooya_menu_toggle};
