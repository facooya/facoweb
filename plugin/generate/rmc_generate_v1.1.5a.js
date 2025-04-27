/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Related menu (drawer-menu)
 */
/* DESCRIPTION
 * +[RMC] {Related Menu Compose} (RMC,Rmc,rmc) RmcData{}, rmcGenerate(), _RMC_*, _rmc*.
 * +[RD] {RmcData} (RD) _RD.
 */
/* CLASS
 * %[Unit] {Bit}
 * @[Class] {RmcData}
 * @[Return] {Data}
 * @[Data] {List<String>} (_RMC_CONTAINER_NAME_LIST) Related menu container name list.
 * @[Data] {List<String>} (_*_ITEM_NAME_LIST) Each container item name list.
 * @[Data] {List<List<String>>} (_RMC_ITEM_NAME_LIST) List for "*_ITEM_NAME_LIST".
 * @[Data] {List<String>} (_*_ITEM_LINK_LIST) Absolute path list.
 * @[Data] {List<List<String>>} (_RMC_ITEM_LINK_LIST) List for "*_ITEM_LINK_LIST".
 */
class RmcData {
  _RMC_CONTAINER_NAME_LIST = [
    "[V1.1.5A] Chapter A",
    "[V1.1.5A] Chapter 2",
    "[V1.1.5A] Chapter 3"
  ];
  _CN1_item_name_list = [
    "[Chapter 1] Version 1.1.5 Alpha",
    "[Chapter 1] Item 1-2"
  ];
  _CN2_item_name_list = [
    "[Chapter 2] Item 2-1"
  ];
  _CN3_item_name_list = [
    "[Chapter 3] Item 2-1"
  ];
  _RMC_ITEM_NAME_LIST = [
    this._CN1_item_name_list,
    this._CN2_item_name_list,
    this._CN3_item_name_list
  ];
  _CN1_item_link_list = [
    "../../tmp/doc-page.html",
    "../../tmp/doc-page.html"
  ];
  _CN2_item_link_list = [
    "../../tmp/doc-page.html"
  ];
  _CN3_item_link_list = [
    "../../tmp/doc-page.html"
  ];
  _RMC_ITEM_LINK_LIST = [
    this._CN1_item_link_list,
    this._CN2_item_link_list,
    this._CN3_item_link_list
  ];
};
/* IMPORT
 * %[Import] {generate_module_v1.1.5a.js} (menuGenerate)
 */
import {menuGenerate} from "./generate_module_v1.1.5a.js";
/* CODE
 */
rmcGenerate();
/* FUNCTION
 * %[Unit] {Byte}
 * %[Import] {generate_module_v1.1.5a.js} (menuGenerate)
 * @[Function] {rmcGenerate}
 * @[Local] {Class} (_RD) New class: "RmcData".
 * @[Local] {Element} (_RELATED_MENU_COMPOSE) Element ID: "related_menu_compose".
 * @[Description]
 * Bit class and function assembly.
 * Reference HTML in "rmc_generate_v1.1.5a.js".
 */
function rmcGenerate() {
  const _RD = new RmcData();
  const _RELATED_MENU_COMPOSE = document.getElementById("related_menu_compose");
  
  menuGenerate(
    "rmc",
    _RD._RMC_CONTAINER_NAME_LIST,
    _RD._RMC_ITEM_NAME_LIST,
    _RD._RMC_ITEM_LINK_LIST,
    _RELATED_MENU_COMPOSE
  );
  console.log("RMC DONE");
}
/* HTML
<nav id="related_menu_compose">
  <ul class="rmc_container">
    <div class="rmc_container_name">Chapter 1</div>
    <li><a class="rmc_item">Item 1-1</a></li>
    <li><a class="rmc_item">Item 1-2</a></li>
    <!-- ... -->
  </ul>
  <ul class="rmc_container">
    <div class="rmc_container_name">Chapter 2</div>
    <li><a class="rmc_item">Item 2-1</a></li>
    <li><a class="rmc_item">Item 2-2</a></li>
    <!-- ... -->
  </ul>
  <!-- ... -->
</nav>
*/
/* INFORMATION
 * %[File] {rmc_generate_v1.1.5a.js}
 * %[Unit] {Byte}
 * @[Author] {Facooya} (Owner)
 * @[Version] {1.1.5} (Alpha)
 * @[Since] {Dec/13/2023} (UTC+0)
 * @[Update] {Dec/13/2023} (UTC+0) Last update.
 */
