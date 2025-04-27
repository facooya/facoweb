/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
class SmcData {
  _SMC_CONTAINER_NAME_LIST = [
    "[V1.1.5A] Chapter A",
    "[V1.1.5A] Chapter 2",
    "[V1.1.5A] Chapter 3"
  ];
  _CN1_item_name_list = [
    "[Chapter 1] Version 1.1.6 Alpha",
    "[Chapter 1] Item 1-2"
  ];
  _CN2_item_name_list = [
    "[Chapter 2] Item 2-1"
  ];
  _CN3_item_name_list = [
    "[Chapter 3] Item 2-1"
  ];
  _SMC_ITEM_NAME_LIST = [
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
  _SMC_ITEM_LINK_LIST = [
    this._CN1_item_link_list,
    this._CN2_item_link_list,
    this._CN3_item_link_list
  ];
};
import {genMenu} from "./gen-util";
genSMC();
function genSMC() {
  const _SD = new SmcData();
  const _PARENT = document.getElementById("sub-menu-cmp");
  genMenu(
    "smc",
    _SD._SMC_CONTAINER_NAME_LIST,
    _SD._SMC_ITEM_NAME_LIST,
    _SD._SMC_ITEM_LINK_LIST,
    _PARENT
  );
  console.log("SMC DONE");
}
/* INFORMATION
 * @[Author] {Facooya} (Owner)
 */