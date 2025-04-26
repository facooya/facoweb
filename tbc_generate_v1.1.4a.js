/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Top bar
 */
function tbc_generate(){
  /* === Variable === */
  /* --- Html Generate --- */
  const tbc_rmt_sg_size=3;
  const tbc_fmt_sg_size=3;
  /* --- Related Menu - */
  let tbc_rmt_container;
  let tbc_rmt_bg;
  let tbc_rmt_sg=[];
  /* --- Facooya Name - */
  let tbc_facooya;
  let tbc_facooya_link;
  /* --- Facooya Menu - */
  let tbc_fmt_container;
  let tbc_fmt_bg;
  let tbc_fmt_sg=[];
  /* ------------------------------ */
  /* --- Find Id --- */
  const top_bar_compose=document.getElementById("top_bar_compose");
  /* ------------------------------ */
  /* ============================== */
  /* === Code === */
  /* + TBC : Top Bar Compose + */
  /* --- TBC RMT --- */
  /* + RMT : Related Menu Toggle + */
  tbc_rmt_container=document.createElement("div");
  tbc_rmt_container.setAttribute("id","tbc_rmt_container");
  tbc_rmt_bg=document.createElement("div");
  tbc_rmt_bg.setAttribute("id","tbc_rmt_bg");
  for(let i=0;i<tbc_rmt_sg_size;i++){
    tbc_rmt_sg[i]=document.createElement("span");
    tbc_rmt_sg[i].setAttribute("class","tbc_rmt_sg");
    tbc_rmt_bg.appendChild(tbc_rmt_sg[i]);
  }
  tbc_rmt_container.appendChild(tbc_rmt_bg);
  top_bar_compose.appendChild(tbc_rmt_container);
  /* ------------------------------ */
  /* --- TBC Facooya Name --- */
  tbc_facooya=document.createElement("div");
  tbc_facooya.setAttribute("id","tbc_facooya");
  tbc_facooya_link=document.createElement("a");
  tbc_facooya_link.setAttribute("id","tbc_facooya_link");
  tbc_facooya_link.setAttribute("href","/");
  tbc_facooya_link.innerHTML="Facooya";
  tbc_facooya.appendChild(tbc_facooya_link);
  top_bar_compose.appendChild(tbc_facooya);
  /* ------------------------------ */
  /* --- TBC FMT --- */
  /* + FMT : Facooya Menu Toggle + */
  tbc_fmt_container=document.createElement("div");
  tbc_fmt_container.setAttribute("id","tbc_fmt_container");
  tbc_fmt_bg=document.createElement("div");
  tbc_fmt_bg.setAttribute("id","tbc_fmt_bg");
  for(let i=0;i<tbc_fmt_sg_size;i++){
    tbc_fmt_sg[i]=document.createElement("span");
    tbc_fmt_sg[i].setAttribute("class","tbc_fmt_sg");
    tbc_fmt_bg.appendChild(tbc_fmt_sg[i]);
  }
  tbc_fmt_container.appendChild(tbc_fmt_bg);
  top_bar_compose.appendChild(tbc_fmt_container);
  /* ------------------------------ */
  /* ============================== */
}
/* === Html Code Reference === */
/*
<div id="top_bar_compose">
  --- JS Generate ---
  <div id="tbc_rmt_container">
    <div id="tbc_rmt_bg">
      <span class="tbc_rmt_sg"></span>
      <span class="tbc_rmt_sg"></span>
      <span class="tbc_rmt_sg"></span>
    </div>
  </div>
  <div id="tbc_facooya">
    <a id="tbc_facooya_link" href="/">Facooya</a>
  </div>
  <div id="tbc_fmt_container">
    <div id="tbc_fmt_bg">
      <span class="tbc_fmt_sg"></span>
      <span class="tbc_fmt_sg"></span>
      <span class="tbc_fmt_sg"></span>
    </div>
  </div>
  ------------------------------
</div>
*/
/* ============================== */
/* *** Code *** */
tbc_generate();
/* ****************************** */
