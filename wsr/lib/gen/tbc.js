/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
function _logf(msg) {
  logf(0, "wsr/lib/gen/tbc.js", msg, "Done");
}
function genTBCTLI(
  logo,
  parent
) {
  /* Element: tbc-logo */
  let _logo = document.createElement("div");
  _logo.setAttribute("id", "tbc-logo");
  /* Element: tbc-logo-link */
  let _logoLink = document.createElement("a");
  _logoLink.setAttribute("id", "tbc-logo-link");
  _logoLink.setAttribute("class", "container-link flex-center");
  _logoLink.setAttribute("href", "/");
  _logoLink.textContent = logo;
  /* Append */
  _logo.appendChild(_logoLink);
  parent.appendChild(_logo);
  /* Log */
  _logf("TLI");
}
function genTBCDNI(
  parent
) {
  /* Element: tbc-dni-container */
  let _container = document.createElement("div");
  _container.setAttribute("id", "tbc-dni-container");
  /* Element: tbc-dni-bg */
  let _bg = document.createElement("div");
  _bg.setAttribute("id", "tbc-dni-bg");
  /* Element: tbc-dni-sg, _Append */
  for (let i = 0; i < 3; i ++) {
    let _sg = document.createElement("span");
    _sg.setAttribute("class", "tbc-dni-sg");
    /* _Append */
    _bg.appendChild(_sg);
  }
  /* Append */
  _container.appendChild(_bg);
  parent.appendChild(_container);
  /* Log */
  _logf("DNI");
}
function genTBCSNI(
  parent
) { /* !!! TEMPORARY !!! */
  /* Element: tbc-sni-container */
  let _container = document.createElement("div");
  _container.setAttribute("id", "tbc-sni-container");
  /* Element: tbc-sni-bg */
  let _bg = document.createElement("div");
  _bg.setAttribute("id", "tbc-sni-bg");
  /* Element: tbc-sni-sg, _Append */
  for (let i = 0; i < 3; i ++) {
    let _sg = document.createElement("span");
    _sg.setAttribute("class", "tbc-sni-sg");
    /* _Append */
    _bg.appendChild(_sg);
  }
  /* Append */
  _container.appendChild(_bg);
  parent.appendChild(_container);
  /* Log */
  _logf("SNI");
}
function genTBCNav(
  id,
  containerNameList,
  itemNameList,
  itemLinkList,
  parent
) {
  for (let i = 0; i < containerNameList.length; i++) {
    /* Element: id-container */
    let _setId = id + "-container" + " flex-center";
    let _container = document.createElement("div");
    _container.setAttribute("class", _setId);
    /* Element: id-container-title */
    _setId = id + "-container-title" + " flex-center";
    let _containerTitle = document.createElement("div");
    _containerTitle.setAttribute("class", _setId);
    _containerTitle.textContent = containerNameList[i];
    /* Element: id-sub-container */
    _setId = id + "-sub-container";
    let _subContainer = document.createElement("div");
    _subContainer.setAttribute("class", _setId);
    /* Element: id-sub-item */
    _setId = id + "-sub-item" + " container-link" + " flex-center";
    for (let j = 0; j < itemNameList[i].length; j++) {
      let _subItem = document.createElement("a");
      _subItem.setAttribute("class", _setId);
      _subItem.setAttribute("href", itemLinkList[i][j]);
      _subItem.textContent = itemNameList[i][j];
      _subContainer.appendChild(_subItem);
    }
    /* Append */
    _container.appendChild(_containerTitle);
    _container.appendChild(_subContainer);
    parent.appendChild(_container);
  }
  _logf(id);
}
export {
  genTBCTLI,
  genTBCDNI,
  genTBCSNI,
  genTBCNav
};
/* DESCRIPTION
 * +[TBC] {Top Bar Component}
 * +[TLI] {Top Logo Interaction}
 * @[Function] {genTBCTLI} (Generate Tob Bar Component Top Logo Interaction)
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */
