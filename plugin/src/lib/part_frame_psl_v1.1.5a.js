/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Part frame
 */
/*@@@@@ Part @@@@@*/
/*=== Variable ===*/
const part_tab_item=document.getElementsByClassName("part_tab_item");
const chapter_container=document.getElementsByClassName("chapter_container");
const chapter=new URL(location.href).searchParams.get("chapter");
/*==============================*/
/*=== Function ===*/
function section_initialization(){
  for(let i=0;i<part_tab_item.length;i++){
    part_tab_item[i].addEventListener("click",section_menu_click);
    chapter_container[i].style.display="none";
  }
  /*--- URL?chapter=X ---*/
  if(chapter){
    part_tab_item[chapter].style.borderColor="#000000";
    part_tab_item[chapter].style.color="#000000";
    chapter_container[chapter].style.display="block";
  }else{
    part_tab_item[0].style.borderColor="#000000";
    part_tab_item[0].style.color="#000000";
    chapter_container[0].style.display="block";
  }
  /*------------------------------*/
}
/*--- Event ---*/
function section_menu_click(event){
  /*--- Initialization ----*/
  for(let i=0;i<part_tab_item.length;i++){
    part_tab_item[i].style.borderColor="#AAAAAA";
    part_tab_item[i].style.color="#555555";
    chapter_container[i].style.display="none";
  }
  /*------------------------------*/
  /*--- Click Event ---*/
  event.target.style.borderColor="#000000";
  event.target.style.color="#000000";
  chapter_container[event.target.value].style.display="block";
  /*------------------------------*/
}
/*------------------------------*/
/*==============================*/
/* === Code === */
section_initialization();
/* ============================== */