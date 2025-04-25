/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Main menu
 */
/*=== Variable ===*/
/*--- Main Menu ---*/
var menu_title_array=["Menu 1", "Menu 2"];
/*------------------------------*/
/*--- Sub Menu ---*/
var menu_1_sub_menu_array=["item 1-1"];
var menu_2_sub_menu_array=["item 2-1", "item 2-1"];
var sub_menu_parents_array=[menu_1_sub_menu_array, menu_2_sub_menu_array];
var menu_1_sub_menu_link_array=["#item-1-1"];
var menu_2_sub_menu_link_array=["#item-2-1", "#item-2-2"];
var sub_menu_link_parents_array=[menu_1_sub_menu_link_array, menu_2_sub_menu_link_array];
/*------------------------------*/
/*--- Html Create Array ---*/
var menu_box=[];
var menu_title=[];
var menu_li=[[],[]];
var sub_menu_title=[[],[]];
/*------------------------------*/
var menu=document.getElementById("menu");
/*------------------------------*/
/*==============================*/
/*=== Code ===*/
for(let i=0;i<menu_title_array.length;i++){
  /*--- Html Create & Setting ---*/
  menu_box[i]=document.createElement("ul");
  menu_box[i].setAttribute("class","menu_box");
  menu_title[i]=document.createElement("a");
  menu_title[i].setAttribute("class","menu_title");
  menu_title[i].setAttribute("href","#");
  menu_title[i].innerHTML=menu_title_array[i];
  /*------------------------------*/
  /*--- Append Child ---*/
  menu.appendChild(menu_box[i]);
  menu_box[i].appendChild(menu_title[i]);
  /*------------------------------*/
}
for(let i=0;i<sub_menu_parents_array.length;i++){
  for(let j=0;j<sub_menu_parents_array[i].length;j++){
    /*--- Html Create & Setting ---*/
    menu_li[i][j]=document.createElement("li");
    sub_menu_title[i][j]=document.createElement("a");
    sub_menu_title[i][j].setAttribute("class","sub_menu_title");
    sub_menu_title[i][j].setAttribute("href",sub_menu_link_parents_array[i][j]);
    sub_menu_title[i][j].innerHTML=sub_menu_parents_array[i][j];
    /*------------------------------*/
    /*--- Append Child ---*/
    menu_box[i].appendChild(menu_li[i][j]);
    menu_li[i][j].appendChild(sub_menu_title[i][j]);
    /*------------------------------*/
  }
}
/*==============================*/
/*=== Html Code Reference ===*/
/*
<nav id="menu">
  <ul class="menu_box">
    <a class="menu_title">Menu Title 1</a>
    <li><a class="sub_menu_title">Sub Menu Title 1-1</a></li>
    <li><a class="sub_menu_title">Sub Menu Title 1-2</a></li>
    ...
  </ul>
  <ul class="menu_box">
    <a class="menu_title">Menu Title 2</a>
    <li><a class="sub_menu_title">Sub Menu Title 2-1</a></li>
    <li><a class="sub_menu_title">Sub Menu Title 2-2</a></li>
    ...
  </ul>
  ...
</nav>
*/
/*==============================*/
