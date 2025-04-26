/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Document page (doc-page)
 */
/* *** Side Menu *** */
/* === Variable === */
/* --- Find Class --- */
var related_menu_container=document.getElementsByClassName("related_menu_container");
var facooya_menu_container=document.getElementsByClassName("facooya_menu_container");
/* --- Graphic - */
var tbc_rmt_sg=document.getElementsByClassName("tbc_rmt_sg");
var tbc_fmt_sg=document.getElementsByClassName("tbc_fmt_sg");
/* ------------------------------ */
/* --- Find Id --- */
var document_frame=document.getElementById("document_frame");
var bottom_bar=document.getElementById("bottom_bar");
/* --- Menu - */
var related_menu_compose=document.getElementById("related_menu_compose");
var facooya_menu_compose=document.getElementById("facooya_menu_compose");
/* --- Graphic - */
var tbc_rmt_bg=document.getElementById("tbc_rmt_bg");
var tbc_fmt_bg=document.getElementById("tbc_fmt_bg");
/* ------------------------------ */
/* --- Switch --- */
/* --- Desktop=1, Mobile=0 - */
var isDesktop=0;
/* --- Open ? True=1, False=0 - */
var isRelatedMenuOpen=0;
var isFacooyaMenuOpen=0;
/* ------------------------------ */
/* !!! */
var isFloatMenuOpen=0;
var isFmTranslateContainerOpen=0;
var isFmScrollMenuOpen=0;
/* !!! */
var wmc_toggle_container=document.getElementById("wmc_toggle_container");
var wmc_translate_toggle_container=document.getElementById("wmc_translate_toggle_container");
var wmc_scroll_toggle_container=document.getElementById("wmc_scroll_toggle_container");

var wmc_translate_tl_container=document.getElementById("wmc_translate_tl_container");

function float_menu_switch(){
  if(!isFloatMenuOpen){ /* - Float Menu Open - */
    wmc_translate_toggle_container.style.opacity="1";
    wmc_translate_toggle_container.style.transform="translateY(4.5rem)";
    wmc_scroll_toggle_container.style.opacity="1";
    wmc_scroll_toggle_container.style.transform="translateY(9rem)";

    wmc_translate_tl_container.style.transform="translateY(4.5rem)";

    isFloatMenuOpen=1;
  }else{ /* - Float Menu Close - */
    wmc_translate_toggle_container.style.opacity="1";
    wmc_translate_toggle_container.style.transform="translateY(0rem)";
    wmc_scroll_toggle_container.style.opacity="1";
    wmc_scroll_toggle_container.style.transform="translateY(0rem)";

    wmc_translate_tl_container.style.transform="translateY(0rem)";

    isFmTranslateContainerOpen=0;
    isFloatMenuOpen=0;
  }
}
function fmg_translate_container_switch(){
  if(isFloatMenuOpen){
    if(!isFmTranslateContainerOpen){ /* - Translate Container Open - */
      wmc_translate_tl_container.style.opacity="1";
      wmc_translate_tl_container.style.transform="translateY(4.5rem) translateX(-4.5rem)";

      isFmTranslateContainerOpen=1;
    }else{ /* - Translate Container Close - */
      wmc_translate_tl_container.style.opacity="1";
      wmc_translate_tl_container.style.transform="translateY(4.5rem) translateX(0rem)";

      isFmTranslateContainerOpen=0;
    }
  }
}

/* ============================== */
/* === Menu Switch === */
/* === Related Menu Switch = */
function related_menu_switch(){
  if(!isRelatedMenuOpen){ /* - Related Menu Open - */
    /* --- Graphic --- */
    tbc_rmt_sg[0].style.top="43.75%";
    tbc_rmt_sg[0].style.transform="rotate(-45deg)";
    tbc_rmt_sg[1].style.opacity="0";
    tbc_rmt_sg[2].style.top="43.75%";
    tbc_rmt_sg[2].style.transform="rotate(45deg)";
    /* ------------------------------ */
    /* --- Section --- */
    if(isDesktop){ /* - Desktop Mode - */
      document_frame.style.paddingLeft="21rem";
    }else{ /* - Mobile Mode - */
      if(isFacooyaMenuOpen){
        facooya_menu_switch();
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
    /* ----------------------------- */
    /* --- Section --- */
    if(isDesktop){ /* - Desktop Mode - */
      related_menu_compose.style.left="-20rem";
    }else{ /* - Mobile Mode - */
      related_menu_compose.style.left="-100%";
    }
    document_frame.style.paddingLeft="1rem";
    /* ------------------------------ */
    /* --- Related Menu Close ? Related Menu Container Close --- */
    for(let i=0;i<related_menu_container.length;i++){
      related_menu_container[i].style.background="#000000";
      related_menu_container[i].style.height="5rem";
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
/* === Facooya Menu Switch = */
function facooya_menu_switch(){
  if(!isFacooyaMenuOpen){ /* - Facooya Menu Open - */
    /* --- Graphic --- */
    tbc_fmt_sg[0].style.top="43.75%";
    tbc_fmt_sg[0].style.transform="rotate(45deg)";
    tbc_fmt_sg[1].style.opacity="0";
    tbc_fmt_sg[2].style.top="43.75%";
    tbc_fmt_sg[2].style.transform="rotate(-45deg)";
    /* ------------------------------ */
    /* --- Section --- */
    if(isDesktop){ /* - Desktop Mode - */
      document_frame.style.paddingRight="21rem";
      /* !!! */
      wmc_toggle_container.style.marginRight="20.5rem";
      wmc_toggle_container.style.transition="300ms";
    }else{ /* - Mobile Mode - */
      if(isRelatedMenuOpen){
        related_menu_switch();
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
    if(isDesktop){ /* - Desktop Mode - */
      facooya_menu_compose.style.right="-20rem";
      /* !!! */
      wmc_toggle_container.style.marginRight="0.5rem";
      wmc_toggle_container.style.transition="300ms";
    }else{ /* - Mobile Mode - */
      facooya_menu_compose.style.right="-100%";
    }
    document_frame.style.paddingRight="1rem";
    /* ------------------------------ */
    /* --- Facooya Menu Container Close ? Facooya Menu Container Close --- */
    for(let i=0;i<facooya_menu_container.length;i++){
      facooya_menu_container[i].style.background="#000000";
      facooya_menu_container[i].style.height="5rem";
    }
    /* ------------------------------ */
    isFacooyaMenuOpen=0;
  }
  /* --- Transition --- */
  for(let i=0;i<3;i++){
    tbc_fmt_sg[i].style.transition="300ms";
  }
  facooya_menu_compose.style.transition="300ms";
  /* ------------------------------ */
}
/* ============================== */
/* === Load, Resize Initialization === */
/* --- System --- */
function load(){ /* - Load - */
  if(matchMedia("all and (min-width:1000px)").matches){
    isDesktop=1;
    desktop();
  }else if(matchMedia("all and (max-width:999px)").matches){
    isDesktop=0;
    mobile();
  }
  side_menu_initialization();
  side_menu_add_event();
}
function resize(){ /* - Resize - */
  if(matchMedia("all and (min-width:1000px)").matches && !isDesktop){
    isDesktop=1;
    side_menu_initialization();
    desktop();
  }else if(matchMedia("all and (max-width:999px)").matches && isDesktop){
    isDesktop=0;
    side_menu_initialization();
    mobile();
  }
}
/* ------------------------------ */
/* === Load = */
function side_menu_add_event(){ /* - Load - */
  tbc_rmt_bg.addEventListener("click",related_menu_switch);
  tbc_fmt_bg.addEventListener("click",facooya_menu_switch);
  for(let i=0;i<related_menu_container.length;i++){
    related_menu_container[i].addEventListener("click",side_item_drop_down);
  }
  for(let i=0;i<facooya_menu_container.length;i++){
    facooya_menu_container[i].addEventListener("click",side_item_drop_down);
  }
  /* !!! */
  wmc_toggle_container.addEventListener("click",float_menu_switch);
  wmc_translate_toggle_container.addEventListener("click",fmg_translate_container_switch);
}
function side_item_drop_down(event){ /*- Switch -*/
  if(event.currentTarget.clientHeight==80){ /* - Related || Facooya Menu Container Open, 80px == 5rem : Current Container Height - */
    let li_tag_count=event.currentTarget.querySelectorAll("li")
    event.currentTarget.style.height=5.125*(li_tag_count.length+1)-0.125+"rem";
    event.currentTarget.style.transition="300ms";
    event.currentTarget.style.background="#222222";
  }else{ /* - Related || Facooya Menu Container Close - */
    event.currentTarget.style.height="5rem";
    event.currentTarget.style.background="#000000";
  }
}
/* === Load, Resize = */
function side_menu_initialization(){
  /*--- Graphic ---*/
  tbc_rmt_sg[0].style.top="0%";
  tbc_rmt_sg[1].style.top="43.75%";
  tbc_rmt_sg[2].style.top="87.5%";
  /* --- */
  tbc_fmt_sg[0].style.top="0%";
  tbc_fmt_sg[1].style.top="43.75%";
  tbc_fmt_sg[2].style.top="87.5%";
  /* --- */
  /*if(isDesktop){
    tbg_scroll_menu_line_graphic[0].style.top="43.5%";
    tbg_scroll_menu_line_graphic[0].style.transformOrigin="95% 50%";
    tbg_scroll_menu_line_graphic[0].style.transform="rotate(45deg)";
    tbg_scroll_menu_line_graphic[1].style.top="43.5%";
    tbg_scroll_menu_line_graphic[1].style.transformOrigin="95% 50%";
    tbg_scroll_menu_line_graphic[1].style.transform="rotate(-45deg)";
  }else{
    tbg_scroll_menu_line_graphic[0].style.top="-12.5%";
    tbg_scroll_menu_line_graphic[0].style.left="43.5%";
    tbg_scroll_menu_line_graphic[0].style.transformOrigin="50% 95%";
    tbg_scroll_menu_line_graphic[0].style.transform="rotate(-45deg)";
    tbg_scroll_menu_line_graphic[1].style.top="-12.5%";
    tbg_scroll_menu_line_graphic[1].style.left="43.5%";
    tbg_scroll_menu_line_graphic[1].style.transformOrigin="50% 95%";
    tbg_scroll_menu_line_graphic[1].style.transform="rotate(45deg)";
  }*/
  /*tbg_scroll_menu_line_graphic[0].style.top="1rem";
  tbg_scroll_menu_line_graphic[0].style.transformOrigin="0% 50%";
  tbg_scroll_menu_line_graphic[0].style.transform="translateY(-20%) rotate(-45deg)";
  tbg_scroll_menu_line_graphic[0].style.transition="0ms"
  tbg_scroll_menu_line_graphic[1].style.bottom="1rem";
  tbg_scroll_menu_line_graphic[1].style.transformOrigin="0% 50%";
  tbg_scroll_menu_line_graphic[1].style.transform="translateY(20%) rotate(45deg)";
  tbg_scroll_menu_line_graphic[1].style.transition="0ms"*/
  /*------------------------------*/
  /* --- isMenuOpen ? Close --- */
  if(isFacooyaMenuOpen){
    facooya_menu_switch();
  }
  if(isRelatedMenuOpen){
    related_menu_switch();
  }
}
function desktop(){ /* - Load, Resize - */
  /* --- Menu Setting Initialization --- */
  related_menu_compose.style.width="20rem";
  related_menu_compose.style.left="-20rem";
  related_menu_compose.style.transition="0ms";
  related_menu_compose.style.marginBottom="3rem";
  /* --- */
  facooya_menu_compose.style.width="20rem";
  facooya_menu_compose.style.right="-20rem";
  facooya_menu_compose.style.transition="0ms";
  facooya_menu_compose.style.marginBottom="3rem";
  /* --- */
  //!!!
  //scroll_menu_section.style.right="-20rem";
  //scroll_menu_section.style.marginBottom="3rem";
  //tbg_scroll_menu_graphic.style.display="block"
  /* ------------------------------ */
}
function mobile(){ /* - Load, Resize - */
  /* --- Menu Setting Initialization --- */
  related_menu_compose.style.width="100%";
  related_menu_compose.style.left="-100%";
  related_menu_compose.style.transition="0ms";
  related_menu_compose.style.marginBottom="0rem";
  /* --- */
  facooya_menu_compose.style.width="100%";
  facooya_menu_compose.style.right="-100%";
  facooya_menu_compose.style.transition="0ms";
  facooya_menu_compose.style.marginBottom="0rem";
  /* --- */
  //!!!
  //scroll_menu_section.style.right="-100%";
  //scroll_menu_section.style.marginBottom="0rem";
  //tbg_scroll_menu_graphic.style.display="block"
  /* ------------------------------ */
}
/* ============================== */
/* === Code == */
window.addEventListener("load",load);
window.addEventListener("resize",resize);
/* ============================== */
/* ****************************** */
/* %%% FACOOYA V1.1.4A %%% */

//!!!
function scroll_menu_switch(){
  if(!isScrollMenuOpen){ /* - Scroll Menu Open - */
    /* --- Graphic --- */
    tbg_scroll_menu_line_graphic[0].style.top="1rem";
    tbg_scroll_menu_line_graphic[0].style.transformOrigin="100% 50%";
    tbg_scroll_menu_line_graphic[0].style.transform="translateY(-20%) rotate(45deg)";
    tbg_scroll_menu_line_graphic[1].style.bottom="1rem";
    tbg_scroll_menu_line_graphic[1].style.transformOrigin="100% 50%";
    tbg_scroll_menu_line_graphic[1].style.transform="translateY(20%) rotate(-45deg)";
    /* ------------------------------ */
    /* --- Section --- */
    if(isDesktop){ /* - Desktop Mode - */
      if(isFacooyaMenuOpen){
        facooya_menu_switch();
      }
      document_frame.style.paddingRight="21rem";
    }else{ /* - Mobile Mode - */
      if(isRelatedMenuOpen){
        related_menu_switch();
      }
      if(isFacooyaMenuOpen){
        facooya_menu_switch();
      }
    }
    scroll_menu_section.style.right="0";
    /* ------------------------------ */
    isScrollMenuOpen=1;
  }else{ /* - Scroll Menu Close - */
    /* --- Graphic --- */
    tbg_scroll_menu_line_graphic[0].style.top="1rem";
    tbg_scroll_menu_line_graphic[0].style.transformOrigin="0% 50%";
    tbg_scroll_menu_line_graphic[0].style.transform="translateY(-20%) rotate(-45deg)";
    tbg_scroll_menu_line_graphic[1].style.bottom="1rem";
    tbg_scroll_menu_line_graphic[1].style.transformOrigin="0% 50%";
    tbg_scroll_menu_line_graphic[1].style.transform="translateY(20%) rotate(45deg)";
    /* ------------------------------ */
    /* --- Section --- */
    if(isDesktop){ /* - Desktop Mode - */
      scroll_menu_section.style.right="-20rem";
      document_frame.style.paddingRight="1rem";
    }else{ /* - Mobile Mode - */
      scroll_menu_section.style.right="-100%";
    }
    /* ------------------------------ */
    isScrollMenuOpen=0;
  }
  /* --- Transition  --- */
  for(let i=0;i<2;i++){
    tbg_scroll_menu_line_graphic[i].style.transition="300ms";
  }
  scroll_menu_section.style.transition="300ms";
  /* ------------------------------ */
}
