/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Drawer menu
 */
/* === Variable === */
/* --- Container Name ---!!! Check List A !!! */
var related_menu_container_name_list=["[V1.1.1A] Section List 1","[V1.1.1A] Section List 2","[V1.1.1A] Section List 3"];
/* ------------------------------ */
/* --- Item Name List ---!!! Check List B !!! *//* +++ CN == Container Name +++ */
var _CN1_item_name_list=["[Section List 1] Title 1","[Section List 1] Title 2"];
var _CN2_item_name_list=["[Section List 2] Title 1"];
var _CN3_item_name_list=["[Section List 3] Title 1"];
var related_menu_item_name_list=[_CN1_item_name_list,_CN2_item_name_list,_CN3_item_name_list];
/* ------------------------------ */
/* --- Item Link List ---!!! Check List C !!! *//* +++ CN == Container Name +++ */
var _CN1_item_link_list=["./information_v1.1.1a.html","./information_v1.1.1a.html"];
var _CN2_item_link_list=["./information_v1.1.1a.html"];
var _CN3_item_link_list=["./information_v1.1.1a.html"];
var related_menu_item_link_list=[_CN1_item_link_list,_CN2_item_link_list,_CN3_item_link_list];
/* ------------------------------ */
/* --- Html Generate ---!!! Check List D !!! */
var related_menu_container=[];
var related_menu_container_name=[];
var related_menu_li_tag=[[],[],[]];
var related_menu_item_name_link=[[],[],[]];
/* ------------------------------ */
var related_menu_section=document.getElementById("related_menu_section");
/* ============================== */
/* === Code === */
for(let i=0;i<related_menu_container_name_list.length;i++){
  /* --- Html Generate & Setting --- */
  related_menu_container[i]=document.createElement("ul");
  related_menu_container[i].setAttribute("class","related_menu_container");
  related_menu_container_name[i]=document.createElement("div");
  related_menu_container_name[i].setAttribute("class","related_menu_container_name");
  related_menu_container_name[i].innerHTML=related_menu_container_name_list[i];
  /* ------------------------------ */
  /* --- Append Child --- */
  related_menu_section.appendChild(related_menu_container[i]);
  related_menu_container[i].appendChild(related_menu_container_name[i]);
  /* ------------------------------ */
}
for(let i=0;i<related_menu_item_name_list.length;i++){
  for(let j=0;j<related_menu_item_name_list[i].length;j++){
    /* --- Html Generate & Setting --- */
    related_menu_li_tag[i][j]=document.createElement("li");
    related_menu_item_name_link[i][j]=document.createElement("a");
    related_menu_item_name_link[i][j].setAttribute("class","related_menu_item_name_link");
    related_menu_item_name_link[i][j].setAttribute("href",related_menu_item_link_list[i][j]);
    related_menu_item_name_link[i][j].innerHTML=related_menu_item_name_list[i][j];
    /* ------------------------------ */
    /* --- Append Child --- */
    related_menu_container[i].appendChild(related_menu_li_tag[i][j]);
    related_menu_li_tag[i][j].appendChild(related_menu_item_name_link[i][j]);
    /* ------------------------------ */
  }
}
/* ============================== */
/* === Html Code Reference === */
/* +++ RM == Related Menu +++
<nav id="related_menu_section">
  --- JS Generate ---
  <ul class="related_menu_container">
    <div class="related_menu_container_name">RM Container Name 1</div>
    <li><a class="related_menu_item_name_link">RM Item Name 1-1</a></li>
    <li><a class="related_menu_item_name_link">RM Item Name 1-2</a></li>
    ...
  </ul>
  <ul class="related_menu_container">
    <div class="related_menu_container_name">RM Container Name 2</div>
    <li><a class="related_menu_item_name_link">RM Item Name 2-1</a></li>
    <li><a class="related_menu_item_name_link">RM Item Name 2-2</a></li>
    ...
  </ul>
  ...
  ------------------------------
</nav>
*/
/* ============================== */
