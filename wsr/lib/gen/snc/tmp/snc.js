/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  genTBCNav
} from "../../tbc.js";

class DataSNC {
  _SNC_CONTAINER_NAME_LIST = [
    "[V1.1.6A] Chapter 1",
    "[V1.1.6A] Chapter 2",
    "[V1.1.6A] Chapter 3"
  ];
  _CN1_item_name_list = [
    "[Chapter 1] Version 1.1.6 Alpha",
    "[Chapter 1] Item 1-2",
    "[Chapter 1] Item 1-3",
    "[Chapter 1] Item 1-4",
    "[Chapter 1] Item 1-5",
    "[Chapter 1] Item 1-6",
    "[Chapter 1] Item 1-7",
  ];
  _CN2_item_name_list = [
    "[Chapter 2] Item 2-1"
  ];
  _CN3_item_name_list = [
    "[Chapter 3] Item 2-1"
  ];
  _SNC_ITEM_NAME_LIST = [
    this._CN1_item_name_list,
    this._CN2_item_name_list,
    this._CN3_item_name_list
  ];
  _CN1_item_link_list = [
    "../../../../../tmp/doc-page.html",
    "../../../../../tmp/doc-page.html",
    "../../../../../tmp/doc-page.html",
    "../../../../../tmp/doc-page.html",
    "../../../../../tmp/doc-page.html",
    "../../../../../tmp/doc-page.html",
    "../../../../../tmp/doc-page.html"
  ];
  _CN2_item_link_list = [
    "../../../../../tmp/doc-page.html"
  ];
  _CN3_item_link_list = [
    "../../../../../tmp/doc-page.html"
  ];
  _SNC_ITEM_LINK_LIST = [
    this._CN1_item_link_list,
    this._CN2_item_link_list,
    this._CN3_item_link_list
  ];
};
function setupTBCSNC() {
  const _DS = new DataSNC();
  const _PARENT = document.getElementById("sub-nav-cmp");

  genTBCNav(
    "snc",
    _DS._SNC_CONTAINER_NAME_LIST,
    _DS._SNC_ITEM_NAME_LIST,
    _DS._SNC_ITEM_LINK_LIST,
    _PARENT
  );

  logf(0, "wsr/lib/gen/snc/*/*-snc.js", "setupTBCSNC", "Done");
}
setupTBCSNC();
/*export {
  DataSNC
};*/
/* DESCRIPTION
 * TEST setupSNC();
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */