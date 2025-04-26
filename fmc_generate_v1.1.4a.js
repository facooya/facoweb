/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Main menu
 */
/* === Variable === */
/* --- Container Name ---!!! Check List A !!! */
var facooya_menu_container_name_list=["Menu 1","Menu 2","Menu 3","Menu 4","Menu 5"];
/* ------------------------------ */
/* --- Item Name List ---!!! Check List B !!! */
var menu_1_item_name_list=["Item 1-1", "Item 1-2"];
var menu_2_item_name_list=["Item 2-1"];
var menu_3_item_name_list=["Item 3-1", "Item 3-2", "Item 3-3"];
var menu_4_item_name_list=["Item 4-1"];
var menu_5_item_name_list=["Item 5-1", "Item 5-2"];
var facooya_menu_item_name_list=[menu_1_item_name_list,
  menu_2_item_name_list,menu_3_item_name_list,menu_4_item_name_list,
  menu_5_item_name_list];
/* ------------------------------ */
/* --- Item Link List ---!!! Check List C !!! */
var menu_1_item_link_list=["#item-1-1", "#item-1-2"];
var menu_2_item_link_list=["#item-2-1"];
var menu_3_item_link_list=["#item-3-1", "#item-3-2", "#item-3-3"];
var menu_4_item_link_list=["#item-4-1"];
var menu_5_item_link_list=["#item-5-1", "#item-5-2"];
var facooya_menu_item_link_list=[menu_1_item_link_list,
  menu_2_item_link_list,menu_3_item_link_list,menu_4_item_link_list,
  menu_5_item_link_list];
/* ------------------------------ */
/* --- Html Generate ---!!! Check List D !!! */
var facooya_menu_container=[];
var facooya_menu_container_name=[];
var facooya_menu_li_tag=[[],[],[],[],[]];
var facooya_menu_item_name_link=[[],[],[],[],[]];
//!!! var facooya_menu_item;
/* ------------------------------ */
var facooya_menu_compose=document.getElementById("facooya_menu_compose");
/* ============================== */
/* === Code === */
for(let i=0;i<facooya_menu_container_name_list.length;i++){
  /* --- Html Create & Setting --- */
  facooya_menu_container[i]=document.createElement("ul");
  facooya_menu_container[i].setAttribute("class","facooya_menu_container");
  facooya_menu_container_name[i]=document.createElement("div");
  facooya_menu_container_name[i].setAttribute("class","facooya_menu_container_name");
  facooya_menu_container_name[i].innerHTML=facooya_menu_container_name_list[i];
  /* ------------------------------ */
  /* --- Append Child --- */
  facooya_menu_compose.appendChild(facooya_menu_container[i]);
  facooya_menu_container[i].appendChild(facooya_menu_container_name[i]);
  /* ------------------------------ */
}
for(let i=0;i<facooya_menu_item_name_list.length;i++){
  for(let j=0;j<facooya_menu_item_name_list[i].length;j++){
    /* --- Html Create & Setting --- */
    facooya_menu_li_tag[i][j]=document.createElement("li");
    facooya_menu_item_name_link[i][j]=document.createElement("a");
    facooya_menu_item_name_link[i][j].setAttribute("class","facooya_menu_item_name_link");
    facooya_menu_item_name_link[i][j].setAttribute("href",facooya_menu_item_link_list[i][j]);
    facooya_menu_item_name_link[i][j].innerHTML=facooya_menu_item_name_list[i][j];
    /* ------------------------------ */
    /* --- Append Child --- */
    facooya_menu_container[i].appendChild(facooya_menu_li_tag[i][j]);
    facooya_menu_li_tag[i][j].appendChild(facooya_menu_item_name_link[i][j]);
    /* ------------------------------ */
  }
}
/* ============================== */
/* === Html Code Reference === */
/* +++ FM == Facooya Menu +++
<nav id="facooya_menu_compose">
  --- JS Generate ---
  <ul class="facooya_menu_container">
    <div class="facooya_menu_container_name">FM Container Name 1</div>
    <li><a class="facooya_menu_item_name_link">FM Item Name 1-1</a></li>
    <li><a class="facooya_menu_item_name_link">FM Item Name 1-2</a></li>
    ...
  </ul>
  <ul class="facooya_menu_container">
    <div class="facooya_menu_container_name">FM Container Name 2</div>
    <li><a class="facooya_menu_item_name_link">FM Item Name 2-1</a></li>
    <li><a class="facooya_menu_item_name_link">FM Item Name 2-2</a></li>
    ...
  </ul>
  ...
  ------------------------------
</nav>
*/
/* ============================== */
