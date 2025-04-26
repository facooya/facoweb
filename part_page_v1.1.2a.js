/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Part page (nav-page)
 */
/* *** Side Menu *** */
/* === Variable === */
/*--- Find Class ---*/
/* --- Menu - */
var related_menu_container=document.getElementsByClassName("related_menu_container");
var facooya_menu_container=document.getElementsByClassName("facooya_menu_container");
/* --- Graphic - */
var tbg_related_menu_line_graphic=document.getElementsByClassName("tbg_related_menu_line_graphic");
var tbg_facooya_menu_line_graphic=document.getElementsByClassName("tbg_facooya_menu_line_graphic");
/*------------------------------*/
/*--- Find Id ---*/
var part_frame=document.getElementById("part_frame");
/* --- Menu - */
var related_menu_section=document.getElementById("related_menu_section");
var facooya_menu_section=document.getElementById("facooya_menu_section");
/* --- Graphic - */
var tbg_related_menu_graphic=document.getElementById("tbg_related_menu_graphic");
var tbg_facooya_menu_graphic=document.getElementById("tbg_facooya_menu_graphic");
/*------------------------------*/
/*--- Switch ---*/
 /* --- Desktop=1, Mobile=0 - */
var isDesktop=0;
 /* --- Open ? True=1, False=0 - */
var isRelatedMenuOpen=0;
var isFacooyaMenuOpen=0;
/*------------------------------*/
/* ============================== */
/* === Menu Switch === */
/* === Related Menu Switch = */
function related_menu_switch(){
  if(!isRelatedMenuOpen){ /* - Related Menu Open - */
    /* --- Graphic --- */
    tbg_related_menu_line_graphic[0].style.top="50%";
    tbg_related_menu_line_graphic[0].style.transform="translateY(-50%) rotate(-45deg)";
    tbg_related_menu_line_graphic[1].style.opacity="0";
    tbg_related_menu_line_graphic[2].style.bottom="50%";
    tbg_related_menu_line_graphic[2].style.transform="translateY(50%) rotate(45deg)";
    /* ------------------------------ */
    /* --- Section --- */
    if(isDesktop){ /* - Desktop Mode - */
      part_frame.style.paddingLeft="21rem";
    }else{ /* - Mobile Mode - */
      if(isFacooyaMenuOpen){
        facooya_menu_switch();
      }
    }
    related_menu_section.style.left="0";
    /* ------------------------------ */
    isRelatedMenuOpen=1;
  }else{ /* - Related Menu Close - */
    /* --- Graphic --- */
    tbg_related_menu_line_graphic[0].style.top="0";
    tbg_related_menu_line_graphic[0].style.transform="rotate(0deg)";
    tbg_related_menu_line_graphic[1].style.opacity="1";
    tbg_related_menu_line_graphic[2].style.bottom="0";
    tbg_related_menu_line_graphic[2].style.transform="rotate(0deg)";
    /* ------------------------------ */
    /* --- Section --- */
    if(isDesktop){ /* - Desktop Mode - */
      related_menu_section.style.left="-20rem";
      part_frame.style.paddingLeft="1rem";
    }else{ /* - Mobile Mode - */
      related_menu_section.style.left="-100%";
    }
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
    tbg_related_menu_line_graphic[i].style.transition="300ms";
  }
  related_menu_section.style.transition="300ms";
  /* ------------------------------ */
}
/* === Facooya Menu Switch = */
function facooya_menu_switch(){
  if(!isFacooyaMenuOpen){ /* - Facooya Menu Open - */
    /* --- Graphic --- */
    tbg_facooya_menu_line_graphic[0].style.top="50%";
    tbg_facooya_menu_line_graphic[0].style.transform="translateY(-50%) rotate(45deg)";
    tbg_facooya_menu_line_graphic[1].style.opacity="0";
    tbg_facooya_menu_line_graphic[2].style.bottom="50%";
    tbg_facooya_menu_line_graphic[2].style.transform="translateY(50%) rotate(-45deg)";
    /* ------------------------------ */
    /* --- Section --- */
    if(isDesktop){ /* - Desktop Mode - */
      part_frame.style.paddingRight="21rem";
    }else{ /* - Mobile Mode - */
      if(isRelatedMenuOpen){
        related_menu_switch();
      }
    }
    facooya_menu_section.style.right="0";
    /* ------------------------------ */
    isFacooyaMenuOpen=1;
  }else{ /* - Facooya Menu Close - */
    /* --- Graphic --- */
    tbg_facooya_menu_line_graphic[0].style.top="0";
    tbg_facooya_menu_line_graphic[0].style.transform="rotate(0deg)";
    tbg_facooya_menu_line_graphic[1].style.opacity="1";
    tbg_facooya_menu_line_graphic[2].style.bottom="0";
    tbg_facooya_menu_line_graphic[2].style.transform="rotate(0deg)";
    /* ------------------------------ */
    /* --- Section --- */
    if(isDesktop){ /* - Desktop Mode - */
      facooya_menu_section.style.right="-20rem";
      part_frame.style.paddingRight="1rem";
    }else{ /* - Mobile Mode - */
      facooya_menu_section.style.right="-100%";
    }
    /* ------------------------------ */
    /* --- Facooya Menu Container Close ? Facooya Menu Container Close --- */
    for(let i=0;i<facooya_menu_container.length;i++){
      facooya_menu_container[i].style.background="#000000";
      facooya_menu_container[i].style.height="5rem";
    }
    /* ------------------------------ */
    isFacooyaMenuOpen=0;
  }
  /* --- Transition  --- */
  for(let i=0;i<3;i++){
    tbg_facooya_menu_line_graphic[i].style.transition="300ms";
  }
  facooya_menu_section.style.transition="300ms";
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
    side_menu_initialization();
    isDesktop=1;
    desktop();
  }else if(matchMedia("all and (max-width:999px)").matches && isDesktop){
    side_menu_initialization();
    isDesktop=0;
    mobile();
  }
}
/* ------------------------------ */
/* === Load = */
function side_menu_add_event(){ /* - Load - */
  tbg_related_menu_graphic.addEventListener("click",related_menu_switch);
  tbg_facooya_menu_graphic.addEventListener("click",facooya_menu_switch);
  for(let i=0;i<related_menu_container.length;i++){
    related_menu_container[i].addEventListener("click",side_item_drop_down);
  }
  for(let i=0;i<facooya_menu_container.length;i++){
    facooya_menu_container[i].addEventListener("click",side_item_drop_down);
  }
}
function side_item_drop_down(event){ /* - Load - */
  if(event.currentTarget.clientHeight==80){ /* - Related || Facooya Menu Container Open, 80px == 5rem : Current Container Height - */
    console.log(event.currentTarget.clientHeight)
    let li_tag_count=event.currentTarget.querySelectorAll("li");
    event.currentTarget.style.height=5.125*(li_tag_count.length+1)-0.125+"rem";
    event.currentTarget.style.transition="300ms";
    event.currentTarget.style.background="#222222";
  }else{ /* - Related || Facooya Menu Container Close - */
    event.currentTarget.style.height="5rem";
    event.currentTarget.style.background="#000000";
  }
}
/* === Load, Resize = */
function side_menu_initialization(){ /* - Load, Resize - */
  /* --- Graphic Menu Close --- */
  tbg_related_menu_line_graphic[0].style.top="0";
  tbg_related_menu_line_graphic[1].style.top="50%";
  tbg_related_menu_line_graphic[1].style.transform="translateY(-50%)";
  tbg_related_menu_line_graphic[2].style.bottom="0";
  /* --- */
  tbg_facooya_menu_line_graphic[0].style.top="0";
  tbg_facooya_menu_line_graphic[1].style.top="50%";
  tbg_facooya_menu_line_graphic[1].style.transform="translateY(-50%)";
  tbg_facooya_menu_line_graphic[2].style.bottom="0";
  /* ------------------------------ */
  /* --- isMenuOpen ? Close --- */
  if(isFacooyaMenuOpen){
    facooya_menu_switch();
  }
  if(isRelatedMenuOpen){
    related_menu_switch();
  }
  /* ------------------------------ */
}
function desktop(){ /* - Load, Resize - */
  /* --- Menu Setting Initialization --- */
  related_menu_section.style.width="20rem";
  related_menu_section.style.left="-20rem";
  related_menu_section.style.transition="0ms";
  /* --- */
  facooya_menu_section.style.width="20rem";
  facooya_menu_section.style.right="-20rem";
  facooya_menu_section.style.transition="0ms";
  /* ------------------------------ */
}
function mobile(){ /* - Load, Resize - */
  /* --- Menu Setting Initialization --- */
  related_menu_section.style.width="100%";
  related_menu_section.style.left="-100%";
  related_menu_section.style.transition="0ms";
  /* --- */
  facooya_menu_section.style.width="100%";
  facooya_menu_section.style.right="-100%";
  facooya_menu_section.style.transition="0ms";
  /* ------------------------------ */
}
/* ============================== */
/* === Code == */
window.addEventListener("load",load);
window.addEventListener("resize",resize);
/* ============================== */
/* ****************************** */

/*@@@@@ Part @@@@@*/
/*=== Variable ===*/
var chapter_tab_item=document.getElementsByClassName("chapter_tab_item");
var document_container=document.getElementsByClassName("document_container");
var chapter=new URL(location.href).searchParams.get("chapter");
/*==============================*/
/*=== Function ===*/
function section_initialization(){
  for(let i=0;i<chapter_tab_item.length;i++){
    chapter_tab_item[i].addEventListener("click",section_menu_click);
    document_container[i].style.display="none";
  }
  /*--- URL?chapter=X ---*/
  if(chapter){
    chapter_tab_item[chapter].style.borderColor="#000000";
    chapter_tab_item[chapter].style.color="#000000";
    document_container[chapter].style.display="block";
  }else{
    chapter_tab_item[0].style.borderColor="#000000";
    chapter_tab_item[0].style.color="#000000";
    document_container[0].style.display="block";
  }
  /*------------------------------*/
}
/*--- Event ---*/
function section_menu_click(event){
  /*--- Initialization ----*/
  for(let i=0;i<chapter_tab_item.length;i++){
    chapter_tab_item[i].style.borderColor="#AAAAAA";
    chapter_tab_item[i].style.color="#555555";
    document_container[i].style.display="none";
  }
  /*------------------------------*/
  /*--- Click Event ---*/
  event.target.style.borderColor="#000000";
  event.target.style.color="#000000";
  document_container[event.target.value].style.display="block";
  /*------------------------------*/
}
/*------------------------------*/
/*==============================*/
/* === Code === */
section_initialization();
/* ============================== */
