/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Information (doc-page)
 */
/*@@@@@ Frame @@@@@*/
/**** Variable ****/
/*--- Find Class ---*/
var menu_box_array=document.getElementsByClassName("menu_box");
var detail_menu_box_array=document.getElementsByClassName("detail_menu_box");
var right_menu_line=document.getElementsByClassName("right_menu_line"); /*- Graphic -*/
var left_menu_line=document.getElementsByClassName("left_menu_line"); /*- Graphic -*/

//!!!
var scroll_menu_line=document.getElementsByClassName("scroll_menu_line"); /*- Graphic -*/

/*------------------------------*/
/*--- Find Id ---*/
var menu=document.getElementById("menu");
var detail_menu=document.getElementById("detail_menu");

//!!!
var scroll_menu_section=document.getElementById("scroll_menu_section");

var section=document.getElementById("section");


/* var top_bar_name=document.getElementById("name"); */
var right_menu=document.getElementById("right_menu"); /*- Graphic -*/
var left_menu=document.getElementById("left_menu"); /*- Graphic -*/

//!!!
var scroll_menu=document.getElementById("scroll_menu"); /*- Graphic -*/

var footer_bottom=document.getElementById("footer_bottom");
/*------------------------------*/
/*--- Switch ---*/
var size_load_check=0; /*- Desktop=1 , Mobile=0 */
var right_menu_click_check=0; /*- Click ? Enables=1 , Disabled=0 -*/
var left_menu_click_check=0; /*- Click ? Enables=1 , Disabled=0 -*/

//!!!
var scroll_menu_click_check=0; /*- Click ? Enables=1 , Disabled=0 -*/
/*------------------------------*/
/********************************/
/**** Function ****/
/*=== Side Menu Event Function ===*/
/*--- Side Sub Menu Click Drop Down ---*/
function side_drop_down(event){ /*- Menu || Detail Menu Click Event -*/
  if(event.currentTarget.clientHeight<6*16){ /*- Menu || Detail Menu Box Open -*/
    let li_tag_count=event.currentTarget.querySelectorAll("li");
    event.currentTarget.style.height=5.125*(li_tag_count.length+1)-0.125+"rem";
    event.currentTarget.style.transition="height 300ms";
    event.currentTarget.style.background="#222222";
  }else{ /*- Menu || Detail Menu Box Close -*/
    event.currentTarget.style.height="5rem";
    event.currentTarget.style.background="#000000";
  }
}
/*------------------------------*/
/*--- Side Menu Responsive Footer ----*/
function footer_load(){ //!!! Remove
  if(size_load_check==1){
    if(right_menu_click_check==0){
      footer_bottom.style.marginRight="0rem";
    }else if(left_menu_click_check==0){
      footer_bottom.style.marginLeft="0rem";
    }
    if(right_menu_click_check==1 && left_menu_click_check==1){
      footer_bottom.style.width="calc(100% - 40rem)";
      footer_bottom.style.marginLeft="20rem";
      footer_bottom.style.marginRight="20rem";
    }else if(right_menu_click_check==1 || /* !!! */scroll_menu_click_check==1){
      footer_bottom.style.width="calc(100% - 20rem)";
      footer_bottom.style.marginRight="20rem";
    }else if(left_menu_click_check==1){
      footer_bottom.style.width="calc(100% - 20rem)";
      footer_bottom.style.marginLeft="20rem";
    }else{
      footer_bottom.style.width="100%";
      footer_bottom.style.marginLeft="0rem";
      footer_bottom.style.marginRight="0rem";
    }
  }
}
/*------------------------------*/
/*==============================*/
/*=== Side Menu Close & Initialization ===*/
function side_menu_initialization(){
  /*--- Graphic ---*/
  right_menu_line[0].style.top="0";
  right_menu_line[1].style.top="50%";
  right_menu_line[1].style.transform="translateY(-50%)";
  right_menu_line[2].style.bottom="0";
  /*------------------------------*/
  left_menu_line[0].style.top="0";
  left_menu_line[1].style.top="50%";
  left_menu_line[1].style.transform="translateY(-50%)";
  left_menu_line[2].style.bottom="0";
  /*------------------------------*/
  //!!!
  if(scroll_menu_section && size_load_check==1){
    scroll_menu_line[0].style.top="1rem";
    scroll_menu_line[1].style.bottom="1rem";
    scroll_menu_line[0].style.transformOrigin="0% 50%";
    scroll_menu_line[1].style.transformOrigin="0% 50%";
    scroll_menu_line[0].style.top="1rem";
    scroll_menu_line[0].style.transform="translateY(-20%) rotate(-45deg)";
    scroll_menu_line[1].style.bottom="1rem";
    scroll_menu_line[1].style.transform="translateY(20%) rotate(45deg)";
    scroll_menu_line[0].style.transition="0ms"
    scroll_menu_line[1].style.transition="0ms"
  }

  if(right_menu_click_check==1){ /*= Right Menu Open ? =*/
    right_menu_click();
  }
  if(left_menu_click_check==1){ /*= Left Menu Open ? =*/
    left_menu_click();
  }
  //!!!
  if(scroll_menu_click_check==1 && size_load_check==1){
    scroll_menu_click();
  }

  for(let i=0;i<menu_box_array.length;i++){
    menu_box_array[i].style.background="#000000";
    menu_box_array[i].style.height="5rem";
  }
  for(let i=0;i<detail_menu_box_array.length;i++){
    detail_menu_box_array[i].style.background="#000000";
    detail_menu_box_array[i].style.height="5rem";
  }
}
/*==============================*/
/*=== Right Menu Click ===*/
function right_menu_click(){
  if(size_load_check==1){
    if(right_menu_click_check==1 && /* !!! */scroll_menu_click_check==0){
      section.style.paddingRight="1rem";
    }else if(right_menu_click_check==0 && scroll_menu_click_check==1){
      right_menu_click_check=1;
      scroll_menu_click();
      right_menu_click_check=0;
    }else{
      section.style.paddingRight="21rem";
    }
  }else{
    if(left_menu_click_check==1){
      left_menu_click();
    }
    if(right_menu_click_check==1){
      section.style.visibility="inherit";
    }else{
      section.style.visibility="hidden";
    }
  }
  if(right_menu_click_check==0){ /*= Right Menu Open =*/
    /*--- Graphic ---*/
    right_menu_line[0].style.top="50%";
    right_menu_line[0].style.transform="translateY(-50%) rotate(45deg)";
    right_menu_line[1].style.opacity="0";
    right_menu_line[2].style.bottom="50%";
    right_menu_line[2].style.transform="translateY(50%) rotate(-45deg)";
    /*------------------------------*/
    right_menu_click_check=1; /*- Click ? Enables=1 , Disabled=0 -*/
    if(size_load_check==1){
      menu.style.right="0rem";
      menu.style.transition="right 300ms";
    }else{
      menu.style.right="0%";
      menu.style.transition="right 300ms";
      footer_bottom.style.display="none";
    }
  }else{ /*= Right Menu Close =*/
    /*--- Graphic ---*/
    right_menu_line[0].style.top="0";
    right_menu_line[0].style.transform="rotate(0deg)";
    right_menu_line[1].style.opacity="1";
    right_menu_line[2].style.bottom="0";
    right_menu_line[2].style.transform="rotate(0deg)";
    /*------------------------------*/
    right_menu_click_check=0; /*- Click ? Enables=1 , Disabled=0 -*/
    if(size_load_check==1){
      menu.style.right="-20rem";
      menu.style.transition="right 300ms";
    }else{
      menu.style.right="-100%";
      menu.style.transition="right 300ms";
      footer_bottom.style.display="grid";
    }
    /*--- Right Menu Close ? Right Menu Box Close ---*/
    for(let i=0;i<menu_box_array.length;i++){
      menu_box_array[i].style.background="#000000";
      menu_box_array[i].style.height="5rem";
    }
    /*------------------------------*/
  }
  /*--- Graphic Animation ---*/
  for(let i=0;i<3;i++){
    right_menu_line[i].style.transition="300ms";
  }
  /*------------------------------*/
  //footer_load();
}
/*==============================*/
/*=== Left Menu Click ===*/
function left_menu_click(){
  if(size_load_check==1){ /*- Size Desktop ? Mobile ? -*/
    /*--- Desktop Size IF Left Menu Open ? ---*/
    if(left_menu_click_check==1){
      section.style.paddingLeft="1rem"; /*- Padding Default -*/
    }else{
      section.style.paddingLeft="21rem"; /*- Padding Default + Left Menu Size -*/
    }
    /*------------------------------*/
  }else{
    /*--- Mobile Size IF Right Menu Open ? Close ---*/
    if(right_menu_click_check==1){
      right_menu_click();
    }
    if(left_menu_click_check==1){
      section.style.visibility="inherit";
    }else{
      section.style.visibility="hidden";
    }
    /*------------------------------*/
  }
  if(left_menu_click_check==0){ /*= Left Menu Open =*/
    /*--- Graphic ---*/
    left_menu_line[0].style.top="50%";
    left_menu_line[0].style.transform="translateY(-50%) rotate(-45deg)";
    left_menu_line[1].style.opacity="0";
    left_menu_line[2].style.bottom="50%";
    left_menu_line[2].style.transform="translateY(50%) rotate(45deg)";
    /*------------------------------*/
    left_menu_click_check=1; /*- Click ? Enables=1 , Disabled=0 -*/
    /*--- Left Menu Open Animation ---*/
    if(size_load_check==1){ /*- Size Desktop ? Mobile ? -*/
      detail_menu.style.left="0rem";
      detail_menu.style.transition="left 300ms";
    }else{
      detail_menu.style.left="0%";
      detail_menu.style.transition="left 300ms";
      footer_bottom.style.display="none";
    }
    /*------------------------------*/
    /*------------------------------*/
  }else{ /*= Left Menu Close =*/
    /*--- Graphic ---*/
    left_menu_line[0].style.top="0";
    left_menu_line[0].style.transform="rotate(0deg)";
    left_menu_line[1].style.opacity="1";
    left_menu_line[2].style.bottom="0";
    left_menu_line[2].style.transform="rotate(0deg)";
    /*------------------------------*/
    left_menu_click_check=0; /*- Click ? Enables=1 , Disabled=0 -*/
    /*--- Left Menu Close Animation ---*/
    if(size_load_check==1){ /*- Size Desktop ? Mobile ? -*/
      detail_menu.style.left="-20rem";
      detail_menu.style.transition="left 300ms";
    }else{
      detail_menu.style.left="-100%";
      detail_menu.style.transition="left 300ms";
      footer_bottom.style.display="grid";
    }
    /*------------------------------*/
    /*--- Left Menu Close ? Left Menu Box Close ---*/
    for(let i=0;i<detail_menu_box_array.length;i++){
      detail_menu_box_array[i].style.background="#000000";
      detail_menu_box_array[i].style.height="5rem";
    }
    /*------------------------------*/
    /*--- Name Default Setting ---*/
    //top_bar_name.innerHTML="FACOOYA";
    //top_bar_name.style.color="#FFFFFF";
    /*------------------------------*/
  }
  /*--- Graphic Animation ---*/
  for(let i=0;i<3;i++){
    left_menu_line[i].style.transition="300ms";
  }
  /*------------------------------*/
  //footer_load();
}
//!!!
function scroll_menu_click(){
  if(scroll_menu_section && size_load_check==1){
    if(scroll_menu_click_check==1 && right_menu_click_check==0){ /*- isOpen ? Enables=1 , Disabled=0 -*/
      section.style.paddingRight="1rem"; /*- Padding Default -*/
    }else if(scroll_menu_click_check==0 && right_menu_click_check==1){
      scroll_menu_click_check=1;
      right_menu_click();
      scroll_menu_click_check=0;
    }else{
      section.style.paddingRight="21rem"; /*- Padding Default + Right Menu Size -*/
    }

    if(scroll_menu_click_check==0){ /*= Scroll Menu Open =*/
      /*--- Graphic ---*/
      scroll_menu_line[0].style.transition="300ms"
      scroll_menu_line[1].style.transition="300ms"
      scroll_menu_line[0].style.transformOrigin="100% 50%";
      scroll_menu_line[1].style.transformOrigin="100% 50%";
      scroll_menu_line[0].style.top="1rem";
      scroll_menu_line[0].style.transform="translateY(-20%) rotate(45deg)";
      scroll_menu_line[1].style.bottom="1rem";
      scroll_menu_line[1].style.transform="translateY(20%) rotate(-45deg)";
      /*------------------------------*/
      scroll_menu_click_check=1; /*- Click ? Enables=1 , Disabled=0 -*/
      scroll_menu_section.style.right="0rem";
      //scroll_menu_section.style.transition="300ms"
      /*------------------------------*/
    }else{ /*= Scroll Menu Close =*/
      /*--- Graphic ---*/
      scroll_menu_line[0].style.transition="300ms"
      scroll_menu_line[1].style.transition="300ms"
      scroll_menu_line[0].style.transformOrigin="0% 50%";
      scroll_menu_line[1].style.transformOrigin="0% 50%";
      scroll_menu_line[0].style.top="1rem";
      scroll_menu_line[0].style.transform="translateY(-20%) rotate(-45deg)";
      scroll_menu_line[1].style.bottom="1rem";
      scroll_menu_line[1].style.transform="translateY(20%) rotate(45deg)";
      /*------------------------------*/
      scroll_menu_click_check=0; /*- Click ? Enables=1 , Disabled=0 -*/
      scroll_menu_section.style.right="-20rem";
      //scroll_menu_section.style.transition="300ms"
    }
    //footer_load();
  }
}

/*==============================*/
/*!!! Side Menu Control !!!*/
function side_menu_add(){
  side_menu_initialization();
  right_menu.addEventListener("click",right_menu_click);
  left_menu.addEventListener("click",left_menu_click);
  //!!!
  scroll_menu.addEventListener("click",scroll_menu_click);
  for(let i=0;i<menu_box_array.length;i++){
    menu_box_array[i].addEventListener("click",side_drop_down);
  }
  for(let i=0;i<detail_menu_box_array.length;i++){
    detail_menu_box_array[i].addEventListener("click",side_drop_down);
  }
}
/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
/*=== Refresh & Size Function ===*/
/*--- Refresh Function ---*/
function resize(){ /*- Resize -*/
  if(matchMedia("all and (min-width:1000px)").matches && size_load_check==0){
    side_menu_initialization();
    size_load_check=1; /*- Desktop=1 , Mobile=0 */
    desktop();
  }else if(matchMedia("all and (max-width:999px)").matches && size_load_check==1){
    side_menu_initialization();
    size_load_check=0; /*- Desktop=1 , Mobile=0 */
    mobile();
  }
}
function load(){ /*- First Load -*/
  if(matchMedia("all and (min-width:1000px)").matches){
    size_load_check=1; /*- Desktop=1 , Mobile=0 */
    desktop();
  }else if(matchMedia("all and (max-width:999px)").matches){
    size_load_check=0; /*- Desktop=1 , Mobile=0 */
    mobile();
  }
  side_menu_add();
}
function desktop(){
  /*--- Menu Size & Animation Fix ---*/
  menu.style.width="20rem";
  menu.style.right="-20rem";
  detail_menu.style.width="20rem";
  detail_menu.style.left="-20rem";
  menu.style.transition="right 0ms";
  detail_menu.style.transition="left 0ms";
  /*------------------------------*/
  /* !!!!! Footer */
  menu.style.marginBottom="3.5rem";
  detail_menu.style.marginBottom="3.5rem";
  scroll_menu_section.style.marginBottom="3.5rem";
  scroll_menu.style.display="block"
}
function mobile(){
  /*--- Menu Size & Animation Fix---*/
  menu.style.width="100%";
  menu.style.right="-100%";
  detail_menu.style.width="100%";
  detail_menu.style.left="-100%";
  menu.style.transition="right 0ms";
  detail_menu.style.transition="left 0ms";
  /* !!!!! Footer */
  menu.style.marginBottom="0rem";
  detail_menu.style.marginBottom="0rem";
  scroll_menu.style.display="none"
  //scroll_menu_section.style.marginBottom="0rem";
  /*------------------------------*/
}
/*------------------------------*/
/********************************/
/**** Code ****/
window.addEventListener("load",load);
window.addEventListener("resize",resize);
/********************************/
/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
