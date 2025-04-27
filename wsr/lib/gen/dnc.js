/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  genTBCNav
} from "./tbc.js";

class DataDNC {
  _DNC_CONTAINER_NAME_LIST = [
    "Menu 1",
    "Menu 2",
    "Menu 3",
    "Menu 4",
    "Menu 5"
  ];
  _MENU_1_ITEM_NAME_LIST = [
    "Item 1-1"
  ];
  _MENU_2_ITEM_NAME_LIST = [
    "Item 2-1",
    "Item 2-2"
  ];
  _MENU_3_ITEM_NAME_LIST = [
    "Item 3-1",
    "Item 3-2",
    "Item 3-3"
  ];
  _MENU_4_ITEM_NAME_LIST = [
    "Item 4-1"
  ];
  _MENU_5_ITEM_NAME_LIST = [
    "Item 5-1"
  ];
  _DNC_ITEM_NAME_LIST = [
    this._MENU_1_ITEM_NAME_LIST,
    this._MENU_2_ITEM_NAME_LIST,
    this._MENU_3_ITEM_NAME_LIST,
    this._MENU_4_ITEM_NAME_LIST,
    this._MENU_5_ITEM_NAME_LIST
  ];
  //!!!!!! /content/programming/c/part.html, .../c/doc/tutorial/condition.html
  _MENU_1_ITEM_LINK_LIST = [
    "#item-1-1"
  ];
  _MENU_2_ITEM_LINK_LIST = [
    "#item-2-1",
    "#item-2-2",
  ];
  _MENU_3_ITEM_LINK_LIST = [
    "#item-3-1",
    "#item-3-2",
    "#item-3-3"
  ];
  _MENU_4_ITEM_LINK_LIST = [
    "#item-4-1"
  ];
  _MENU_5_ITEM_LINK_LIST = [
    "#item-5-1"
  ];
  _DNC_ITEM_LINK_LIST = [
    this._MENU_1_ITEM_LINK_LIST,
    this._MENU_2_ITEM_LINK_LIST,
    this._MENU_3_ITEM_LINK_LIST,
    this._MENU_4_ITEM_LINK_LIST,
    this._MENU_5_ITEM_LINK_LIST
  ];
};

function setupTBCDNC() {
  const _DD = new DataDNC();
  const _PARENT = document.getElementById("dev-nav-cmp");

  genTBCNav(
    "dnc",
    _DD._DNC_CONTAINER_NAME_LIST,
    _DD._DNC_ITEM_NAME_LIST,
    _DD._DNC_ITEM_LINK_LIST,
    _PARENT
  );

  logf(0, "wsr/lib/gen/dnc.js", "setupTBCDNC", "Done");
}

setupTBCDNC();
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */
