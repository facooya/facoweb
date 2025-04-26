/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Drawer menu
 */
/* === Variable === */
/* --- Container Name ---!!! Check List A !!! */
var related_menu_container_name_list=["[V1.1.4A] Chapter 1","[V1.1.4A] Chapter 2","[V1.1.4A] Chapter 3"];
/* ------------------------------ */
/* --- Item Name List ---!!! Check List B !!! *//* + CN == Container Name + */
var _CN1_item_name_list=["[Chapter 1] Version 1.1.4 Alpha","[Chapter 1] Item 1-2"];
var _CN2_item_name_list=["[Chapter 2] Item 2-1"];
var _CN3_item_name_list=["[Chapter 3] Item 2-1"];
var related_menu_item_name_list=[_CN1_item_name_list,_CN2_item_name_list,_CN3_item_name_list];
/* ------------------------------ */
/* --- Item Link List ---!!! Check List C !!! *//* + CN == Container Name + */
var _CN1_item_link_list=["./document_page_v1.1.4a.html","./document_page_v1.1.4a.html"];
var _CN2_item_link_list=["./document_page_v1.1.4a.html"];
var _CN3_item_link_list=["./document_page_v1.1.4a.html"];
var related_menu_item_link_list=[_CN1_item_link_list,_CN2_item_link_list,_CN3_item_link_list];
/* ------------------------------ */
/* --- Html Generate ---!!! Check List D !!! */
var related_menu_container=[];
var related_menu_container_name=[];
var related_menu_li_tag=[[],[],[]];
var related_menu_item=[[],[],[]];
/* ------------------------------ */
var related_menu_compose=document.getElementById("related_menu_compose");
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
  related_menu_compose.appendChild(related_menu_container[i]);
  related_menu_container[i].appendChild(related_menu_container_name[i]);
  /* ------------------------------ */
}
for(let i=0;i<related_menu_item_name_list.length;i++){
  for(let j=0;j<related_menu_item_name_list[i].length;j++){
    /* --- Html Generate & Setting --- */
    related_menu_li_tag[i][j]=document.createElement("li");
    related_menu_item[i][j]=document.createElement("a");
    related_menu_item[i][j].setAttribute("class","related_menu_item");
    related_menu_item[i][j].setAttribute("href",related_menu_item_link_list[i][j]);
    related_menu_item[i][j].innerHTML=related_menu_item_name_list[i][j];
    /* ------------------------------ */
    /* --- Append Child --- */
    related_menu_container[i].appendChild(related_menu_li_tag[i][j]);
    related_menu_li_tag[i][j].appendChild(related_menu_item[i][j]);
    /* ------------------------------ */
  }
}
/* ============================== */
/* === Html Code Reference === */
/* + RM == Related Menu +
<nav id="related_menu_compose">
  --- JS Generate ---
  <ul class="related_menu_container">rmc_container
    <div class="related_menu_container_name">RM Container Name 1</div>rmc_container_name
    <li><a class="related_menu_item">RM Item Name 1-1</a></li>rmc_item
    <li><a class="related_menu_item">RM Item Name 1-2</a></li>
    ...
  </ul>
  <ul class="related_menu_container">
    <div class="related_menu_container_name">RM Container Name 2</div>
    <li><a class="related_menu_item">RM Item Name 2-1</a></li>
    <li><a class="related_menu_item">RM Item Name 2-2</a></li>
    ...
  </ul>
  ...
  ------------------------------
</nav>
*/
/* ============================== */
