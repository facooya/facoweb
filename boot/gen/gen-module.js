/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* import {
  getMode
} from "../../wsr/bin/mode.js"; */

function genTBCDMI(parent) {
  /* Hambug Menu Graphic */
  let _tmgContainer = document.createElement("div");
  _tmgContainer.setAttribute("id", "tbc-dmi-container");
  parent.appendChild(_tmgContainer);
  let _bg = document.createElement("div");
  _bg.setAttribute("id", "tbc-dmi-bg");
  for (let i = 0; i < 3; i++) {
    let _sg = document.createElement("span");
    _sg.setAttribute("class", "tbc-dmi-sg");
    _bg.appendChild(_sg);
  }
  _tmgContainer.appendChild(_bg);
  console.log("TMGDMI DONE");
}
function genTBCSMI(parent) {
  let _tmgContainer = document.createElement("div");
    _tmgContainer.setAttribute("id", "tbc-smi-container");
    parent.appendChild(_tmgContainer);
    let _bg = document.createElement("div");
    _bg.setAttribute("id", "tbc-smi-bg");
    for (let i = 0; i < 3; i++) {
      let _sg = document.createElement("span");
      _sg.setAttribute("class", "tbc-smi-sg");
      _bg.appendChild(_sg);
    }
    _tmgContainer.appendChild(_bg);
    console.log("TBCSMI DONE");
}
function genTMG(
  toggleType,
  parent
) {
  let _tmgContainer = document.createElement("div");
  let _strTemp = "tbc-" + toggleType + "-container";
  _tmgContainer.setAttribute("id", _strTemp);
  parent.appendChild(_tmgContainer);
  let _bg = document.createElement("div");
  _strTemp = "tbc-" + toggleType + "-bg";
  _bg.setAttribute("id", _strTemp);
  for (let i = 0; i < 3; i++) {
    let _sg = document.createElement("span");
    _strTemp = "tbc-" + toggleType + "-sg";
    _sg.setAttribute("class", _strTemp);
    _bg.appendChild(_sg);
  }
  _tmgContainer.appendChild(_bg);
  console.log("TMG Generate (" + toggleType + ")");
}
function genTNI(
  name,
  parent
) {
  let _nameContainer = document.createElement("div");
  _nameContainer.setAttribute("id", "tbc-facooya");
  parent.appendChild(_nameContainer);
  let _nameLink = document.createElement("a");
  _nameLink.setAttribute("id", "tbc-facooya-link");
  _nameLink.setAttribute("href", "/");
  _nameLink.textContent = name;
  _nameContainer.appendChild(_nameLink);
  console.log("TNG Generate (" + name + ")");
}
function genMenu(
  composeType,
  containerNameList,
  itemNameList,
  itemLinkList,
  parent
) {
  for (let i = 0; i < containerNameList.length; i++) {
    let _container = document.createElement("ul");
    let _strTemp = composeType + "-container";
    _container.setAttribute("class", _strTemp);
    parent.appendChild(_container);
    let _containerName = document.createElement("div");
    _strTemp = composeType + "-container-name";
    _containerName.setAttribute("class", _strTemp);
    _containerName.textContent = containerNameList[i];
    _container.appendChild(_containerName);
    for (let j = 0; j < itemNameList[i].length; j++) {
      let _listTag = document.createElement("li");
      _container.appendChild(_listTag);
      let _item = document.createElement("a");
      _strTemp = composeType + "-item";
      _item.setAttribute("class", _strTemp);
      _item.setAttribute("href", itemLinkList[i][j]);
      _item.textContent = itemNameList[i][j];
      _listTag.appendChild(_item);
    }
  }
}
export {
  genTMG,
  genTNI,
  genMenu,
  genTBCDMI,
  genTBCSMI
};
/* INFORMATION
 * @[Author] {Facooya} (Owner)
 */