/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Top bar
 */
/*=== Variable ===*/
var top_bar;
var tbg_related_menu_graphic;
var tbg_related_menu_line_graphic=[];
var tbg_facooya;
var tbg_facooya_link;
var tbg_facooya_menu_graphic;
var tbg_facooya_menu_line_graphic=[];
/*==============================*/
/*=== Code ===*/
/*--- TBG Related Menu Graphic ---*/
top_bar=document.getElementById("top_bar");
tbg_related_menu_graphic=document.createElement("div");
tbg_related_menu_graphic.setAttribute("id","tbg_related_menu_graphic");
for(let i=0;i<3;i++){
  tbg_related_menu_line_graphic[i]=document.createElement("span");
  tbg_related_menu_line_graphic[i].setAttribute("class","tbg_related_menu_line_graphic");
  tbg_related_menu_graphic.appendChild(tbg_related_menu_line_graphic[i]);
}
top_bar.appendChild(tbg_related_menu_graphic);
/*------------------------------*/
/*--- TBG Facooya Name ---*/
tbg_facooya=document.createElement("div");
tbg_facooya.setAttribute("id","tbg_facooya");
tbg_facooya_link=document.createElement("a");
tbg_facooya_link.setAttribute("id","tbg_facooya_link");
tbg_facooya_link.setAttribute("href","/");
tbg_facooya_link.innerHTML="Facooya";
tbg_facooya.appendChild(tbg_facooya_link);
top_bar.appendChild(tbg_facooya);
/*------------------------------*/
/*--- TBG Scroll Menu Graphic ---*/
/*!!!! ADD Scroll Menu & Main page Check */
/*------------------------------*/
/*--- TBG Facooya Menu Graphic ---*/
tbg_facooya_menu_graphic=document.createElement("div");
tbg_facooya_menu_graphic.setAttribute("id","tbg_facooya_menu_graphic");
for(let i=0;i<3;i++){
  tbg_facooya_menu_line_graphic[i]=document.createElement("span");
  tbg_facooya_menu_line_graphic[i].setAttribute("class","tbg_facooya_menu_line_graphic");
  tbg_facooya_menu_graphic.appendChild(tbg_facooya_menu_line_graphic[i]);
}
top_bar.appendChild(tbg_facooya_menu_graphic);
/*------------------------------*/
/*==============================*/
/*=== Html Code Reference ===*/
/* tbg = Top bar graphic
<div id="tbg_related_menu_graphic">
  <span class="tbg_related_menu_line_graphic"></span>
  <span class="tbg_related_menu_line_graphic"></span>
  <span class="tbg_related_menu_line_graphic"></span>
</div>
<div id="tbg_facooya">
  <a id="tbg_facooya_link" href="/">Facooya</a>
</div>
<div id="tbg_scroll_menu_graphic">
  <span class="tbg_scroll_menu_line_graphic"></span>
  <span class="tbg_scroll_menu_line_graphic"></span>
</div>
<div id="tbg_facooya_menu_graphic">
  <span class="tbg_facooya_menu_line_graphic"></span>
  <span class="tbg_facooya_menu_line_graphic"></span>
  <span class="tbg_facooya_menu_line_graphic"></span>
</div>
*/
/*==============================*/
