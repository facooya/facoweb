/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Top bar
 */
/*=== Variable ===*/
var top_graphic;
var left_menu;
var left_menu_line=[];
var name_var;
var name_link;
var right_menu;
var right_menu_line=[];
/*==============================*/
/*=== Code ===*/
/*--- Left Menu Graphic ---*/
top_graphic=document.getElementById("top_bar");
left_menu=document.createElement("div");
left_menu.setAttribute("id","left_menu");
for(let i=0;i<3;i++){
  left_menu_line[i]=document.createElement("span");
  left_menu_line[i].setAttribute("class","left_menu_line");
  left_menu.appendChild(left_menu_line[i]);
}
top_graphic.appendChild(left_menu);
/*------------------------------*/
/*--- Name ---*/
name_var=document.createElement("div");
name_var.setAttribute("id","name");
name_link=document.createElement("a");
name_link.setAttribute("id","name_link");
name_link.setAttribute("href","/");
name_link.innerHTML="FACOOYA";
name_var.appendChild(name_link);
top_graphic.appendChild(name_var);
/*------------------------------*/
/*--- Right Menu Graphic ---*/
right_menu=document.createElement("div");
right_menu.setAttribute("id","right_menu");
for(let i=0;i<3;i++){
  right_menu_line[i]=document.createElement("span");
  right_menu_line[i].setAttribute("class","right_menu_line");
  right_menu.appendChild(right_menu_line[i]);
}
top_graphic.appendChild(right_menu);
/*------------------------------*/
/*==============================*/
/*=== Html Code Reference ===*/
/*
<div id="left_menu">
  <span class="left_menu_line"></span>
  <span class="left_menu_line"></span>
  <span class="left_menu_line"></span>
</div>
<div id="name">
  <a id="name_link" href="/">Facooya</a>
</div>
<div id="right_menu">
  <span class="right_menu_line"></span>
  <span class="right_menu_line"></span>
  <span class="right_menu_line"></span>
</div>
*/
/*==============================*/
