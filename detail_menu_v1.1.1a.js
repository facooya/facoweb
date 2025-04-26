/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Drawer menu
 */
/*=== Variable ===*/
/*--- Main Menu ---*/ /*!!!!! Add Title !!!!-*/
var detail_menu_title_array=["[V1.1.0B] Section List 1","[V1.1.0B] Section List 2","[V1.1.0B] Section List 3"];
/*------------------------------*/
/*--- Sub Menu ---*/ /*!!!!! Add Sub Title !!!!-*/
var section_list_1_sub_menu_array=["[Section List 1] Title 1","[Section List 1] Title 2"];
var section_list_2_sub_menu_array=["[Section List 2] Title 1"];
var section_list_3_sub_menu_array=["[Section List 3] Title 1"];

var list_menu_parents_array=[section_list_1_sub_menu_array,section_list_2_sub_menu_array,section_list_3_sub_menu_array]; /* !!!!! Check !!!!!!*/

var section_list_1_sub_menu_link_array=["./information_v1.1.1a.html","./information_v1.1.1a.html"];
var section_list_2_sub_menu_link_array=["./information_v1.1.1a.html"];
var section_list_3_sub_menu_link_array=["./information_v1.1.1a.html"];

var list_menu_link_parents_array=[section_list_1_sub_menu_link_array,section_list_2_sub_menu_link_array,section_list_3_sub_menu_link_array];
  /*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
/*------------------------------*/
/*--- Html Create Array ---*/
var detail_menu_box=[];
var detail_menu_title=[];
var detail_menu_li=[[],[],[]]; /* !!!!! Check !!!!!!*/
var detail_sub_menu_title=[[],[],[]]; /* !!!!! Check !!!!!!*/
/*------------------------------*/
var detail_menu=document.getElementById("detail_menu");
/*------------------------------*/
/*==============================*/
/*=== Code ===*/
for(let i=0;i<detail_menu_title_array.length;i++){
  /*--- Html Create & Setting ---*/
  detail_menu_box[i]=document.createElement("ul");
  detail_menu_box[i].setAttribute("class","detail_menu_box");
  detail_menu_title[i]=document.createElement("a");
  detail_menu_title[i].setAttribute("class","detail_menu_title");
  detail_menu_title[i].setAttribute("href","#");
  detail_menu_title[i].innerHTML=detail_menu_title_array[i];
  /*------------------------------*/
  /*--- Append Child ---*/
  detail_menu.appendChild(detail_menu_box[i]);
  detail_menu_box[i].appendChild(detail_menu_title[i]);
  /*------------------------------*/
}
for(let i=0;i<list_menu_parents_array.length;i++){
  for(let j=0;j<list_menu_parents_array[i].length;j++){
    /*--- Html Create & Setting ---*/
    detail_menu_li[i][j]=document.createElement("li");
    detail_sub_menu_title[i][j]=document.createElement("a");
    detail_sub_menu_title[i][j].setAttribute("class","detail_sub_menu_title");
    detail_sub_menu_title[i][j].setAttribute("href",list_menu_link_parents_array[i][j]);
    detail_sub_menu_title[i][j].innerHTML=list_menu_parents_array[i][j];
    /*------------------------------*/
    /*--- Append Child ---*/
    detail_menu_box[i].appendChild(detail_menu_li[i][j]);
    detail_menu_li[i][j].appendChild(detail_sub_menu_title[i][j]);
    /*------------------------------*/
  }
}
/*==============================*/
/*=== Html Code Reference ===*/
/*
<nav id="detail_menu">
  <ul class="detail_menu_box">
    <a class="detail_menu_title">Detail Menu Title 1</a>
    <li><a class="detail_sub_menu_title">Detail Sub Menu Title 1-1</a></li>
    <li><a class="detail_sub_menu_title">Detail Sub Menu Title 1-2</a></li>
    ...
  </ul>
  <ul class="detail_menu_box">
    <a class="detail_menu_title">Detail Menu Title 2</a>
    <li><a class="detail_sub_menu_title">Detail Sub Menu Title 2-1</a></li>
    <li><a class="detail_sub_menu_title">Detail Sub Menu Title 2-2</a></li>
    ...
  </ul>
  ...
</nav>
*/
/*==============================*/
