/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Facooya menu (main-menu)
 */
/* +++ FMC : Facooya Menu Compose +++ */
function fmc_generate(){
  /* === Variable ===!!! Check List A */
  /* --- Container Name - */
  const fmc_container_name_list=["Menu 1","Menu 2","Menu 3","Menu 4","Menu 5"];
  /* --- Item Name List - */
  const menu_1_item_name_list=["Item 1-1"];
  const menu_2_item_name_list=["Item 2-1", "Item 2-2"];
  const menu_3_item_name_list=["Item 3-1", "Item 3-2", "Item 3-3"];
  const menu_4_item_name_list=["Item 4-1", "Item 4-2"];
  const menu_5_item_name_list=["Item 5-1"];
  /* --- */
  const fmc_item_name_list=[menu_1_item_name_list,
    menu_2_item_name_list,menu_3_item_name_list,menu_4_item_name_list,
    menu_5_item_name_list];
  /* ------------------------------ */
  /* --- Item Link List - */
  const menu_1_item_link_list=["#item-1-1"];
  const menu_2_item_link_list=["#item-2-1", "#item-2-2"];
  const menu_3_item_link_list=["#item-3-1", "#item-3-2", "#item-3-3"];
  const menu_4_item_link_list=["#item-4-1", "#item-4-2"];
  const menu_5_item_link_list=["#item-5-1"];
  /* --- */
  const fmc_item_link_list=[menu_1_item_link_list,
    menu_2_item_link_list,menu_3_item_link_list,menu_4_item_link_list,
    menu_5_item_link_list];
  /* --- Html Generate - */
  let fmc_container;
  let fmc_container_name;
  let fmc_li_tag;
  let fmc_item;
  /* ------------------------------ */
  const facooya_menu_compose=document.getElementById("facooya_menu_compose");
  /* ============================== */
  /* === Generate Code === */
  for(let i=0;i<fmc_container_name_list.length;i++){
    /* --- FMC Container --- */
    fmc_container=document.createElement("ul");
    fmc_container.setAttribute("class","fmc_container");
    facooya_menu_compose.appendChild(fmc_container);
    fmc_container_name=document.createElement("div");
    fmc_container_name.setAttribute("class","fmc_container_name");
    fmc_container_name.innerHTML=fmc_container_name_list[i];
    fmc_container.appendChild(fmc_container_name);
    /* ------------------------------ */
    for(let j=0;j<fmc_item_name_list[i].length;j++){
      /* --- FMC Item --- */
      fmc_li_tag=document.createElement("li");
      fmc_container.appendChild(fmc_li_tag);
      fmc_item=document.createElement("a");
      fmc_item.setAttribute("class","fmc_item");
      fmc_item.setAttribute("href",fmc_item_link_list[i][j]);
      fmc_item.innerHTML=fmc_item_name_list[i][j];
      fmc_li_tag.appendChild(fmc_item);
      /* ------------------------------ */
    }
  }
  /* ============================== */
  console.log("FMC");
}
/* === Html Code Reference === */
/* +++ FM == Facooya Menu +++
<nav id="facooya_menu_compose">
  --- JS Generate ---
  <ul class="fmc_container">
    <div class="fmc_container_name">FM Container Name 1</div>
    <li><a class="fmc_item">FM Item Name 1-1</a></li>
    <li><a class="fmc_item">FM Item Name 1-2</a></li>
    ...
  </ul>
  <ul class="fmc_container">
    <div class="fmc_container_name">FM Container Name 2</div>
    <li><a class="fmc_item">FM Item Name 2-1</a></li>
    <li><a class="fmc_item">FM Item Name 2-2</a></li>
    ...
  </ul>
  ...
  ------------------------------
</nav>
*/
/* ============================== */
/* *** Code *** */
fmc_generate();
/* ****************************** */
