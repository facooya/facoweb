/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  genTBCNav
} from "../../../utils/gen-tbc-utils.js";

/* &&& DATA: Sub Navigation Component &&& */
class DataSNC {
  _SNC_CONTAINER_NAME_LIST = [
    "Chapter 1",
    "Chapter 2",
    "Chapter 3"
  ];
  _CN1_item_name_list = [
    "Version 1.1.7 Alpha",
    "Item 1-2",
    "Item 1-3",
    "Item 1-4",
    "Item 1-5",
    "Item 1-6",
    "Item 1-7",
    "Item 1-8",
    "Item 1-9",
    "Item 1-10",
    "Item 1-11",
  ];
  _CN2_item_name_list = [
    "Item 2-1"
  ];
  _CN3_item_name_list = [
    "Item 2-1"
  ];
  _SNC_ITEM_NAME_LIST = [
    this._CN1_item_name_list,
    this._CN2_item_name_list,
    this._CN3_item_name_list
  ];
  _CN1_item_link_list = [
    "../../../../tmp/doc-page.html",
    "../../../../tmp/doc-page.html",
    "../../../../tmp/doc-page.html",
    "../../../../tmp/doc-page.html",
    "../../../../tmp/doc-page.html",
    "../../../../tmp/doc-page.html",
    "../../../../tmp/doc-page.html",
    "../../../../tmp/doc-page.html",
    "../../../../tmp/doc-page.html",
    "../../../../tmp/doc-page.html",
    "../../../../tmp/doc-page.html"
  ];
  _CN2_item_link_list = [
    "../../../../tmp/doc-page.html"
  ];
  _CN3_item_link_list = [
    "../../../../tmp/doc-page.html"
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
/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */

setupTBCSNC();

/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */