/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Generate
 */
/* DESCRIPTION
 * +[TMG] {Top Menu Graphic} (tmg) tmgGenerate(), _tmgContainer.
 * +[TNG] {Top Name Graphic} (tng) tngGenerate().
 * +[SG] {Shape Graphic} (sg) _sg.
 * +[BG] {Background Graphic} (bg) _bg.
 * +
 * +[RMT] {Related Menu Toggle}
 * +[FMT] {Facooya Menu Toggle}
 * +[RMC] {Related Menu Compose}
 * +[FMC] {Facooya Menu Compose}
 */
/* FUNCTION
 * %[Unit] {Bit}
 * @[Function] {tmgGenerate} (String, Element) DESCRIPTION: "+[TMG]".
 * @
 * @[Parameter] {String} (toggleType) Type: "rmt" or "fmt". DESCRIPTION: "+[RMT]", "+[FMT]".
 * @[Parameter] {Element} (parent) Element ID: "top_bar_compose".
 * @
 * @[Local] {String} (_strTemp) Temporary data: "String".
 * @[Local] {Element} (_tmgContainer) Create element: "div".
 * @[Local] {Element} (_bg) Create element: "div". DESCRIPTION: "+[BG]".
 * @[Local] {Element} (_sg) Create element: "span". DESCRIPTION: "+[SG]".
 * @
 * @[Description]
 * HTML: "%[File] {tbc_generate_v1.1.5a.js} (HTML)".
 */
function tmgGenerate(
  toggleType,
  parent
) {
  let _tmgContainer = document.createElement("div");
  let _strTemp = "tbc_" + toggleType + "_container";
  _tmgContainer.setAttribute("id", _strTemp);
  parent.appendChild(_tmgContainer);
  let _bg = document.createElement("div");
  _strTemp = "tbc_" + toggleType + "_bg";
  _bg.setAttribute("id", _strTemp);
  for (let i = 0; i < 3; i++) {
    let _sg = document.createElement("span");
    _strTemp = "tbc_" + toggleType + "_sg";
    _sg.setAttribute("class", _strTemp);
    _bg.appendChild(_sg);
  }
  _tmgContainer.appendChild(_bg);
  console.log("TMG Generate (" + toggleType + ")");
}
/* FUNCTION
 * %[Unit] {Bit}
 * @[Function] {tngGenerate} (String, Element) DESCRIPTION: "+[TNG]".
 * @
 * @[Parameter] {String} (name) "Facooya".
 * @[Parameter] {Element} (parent) Element ID: "top_bar_compose". 
 * @
 * @[Local] {Element} (_nameContainer) Create element: "div".
 * @[Local] {Element} (_nameLink) Create element: "a".
 * @
 * @[Description]
 * HTML: "%[File] {tbc_generate_v1.1.5a.js} (HTML)".
 */
function tngGenerate(
  name,
  parent
) {
  let _nameContainer = document.createElement("div");
  _nameContainer.setAttribute("id", "tbc_facooya");
  parent.appendChild(_nameContainer);
  let _nameLink = document.createElement("a");
  _nameLink.setAttribute("id", "tbc_facooya_link");
  _nameLink.setAttribute("href", "/");
  _nameLink.textContent = name;
  _nameContainer.appendChild(_nameLink);
  console.log("TNG Generate (" + name + ")");
}
/* FUNCTION
 * %[Unit] {Bit}
 * @[Function] {menuGenerate} (String, List, List, List, Element)
 * @
 * @[Parameter] {String} (composeType) Type: "rmc" or "fmc". DESCRIPTION: "+[RMC]", "+[FMC]".
 * @[Parameter] {List<String>} (containerNameList)
 * @[Parameter] {List<List<String>>} (itemNameList)
 * @[Parameter] {List<List<String>>} (itemLinkList)
 * @[Parameter] {Element} (parent) Element ID: "related_menu_compose" or "facooya_menu_compose".
 * @
 * @[Local] {String} (_strTemp) Temporary data: "String".
 * @[Local] {Element} (_container) Create element: "ul".
 * @[Local] {Element} (_containerName) Create element: "div".
 * @[Local] {Element} (_listTag) Create element: "li".
 * @[Local] {Element} (_item) Create element: "a".
 * @
 * @[Description]
 * "Related menu" or "Facooya menu" UI Generate.
 * HTML: "%[File] {rmc_generate_v1.1.5a.js} (HTML)".
 * HTML: "%[File] {fmc_generate_v1.1.5a.js} (HTML)".
 */
function menuGenerate(
  composeType,
  containerNameList,
  itemNameList,
  itemLinkList,
  parent
) {
  for (let i = 0; i < containerNameList.length; i++) {
    let _container = document.createElement("ul");
    let _strTemp = composeType + "_container";
    _container.setAttribute("class", _strTemp);
    parent.appendChild(_container);
    let _containerName = document.createElement("div");
    _strTemp = composeType + "_container_name";
    _containerName.setAttribute("class", _strTemp);
    _containerName.textContent = containerNameList[i];
    _container.appendChild(_containerName);
    for (let j = 0; j < itemNameList[i].length; j++) {
      let _listTag = document.createElement("li");
      _container.appendChild(_listTag);
      let _item = document.createElement("a");
      _strTemp = composeType + "_item";
      _item.setAttribute("class", _strTemp);
      _item.setAttribute("href", itemLinkList[i][j]);
      _item.textContent = itemNameList[i][j];
      _listTag.appendChild(_item);
    }
  }
}
/* EXPORT
 * %[Export] {tbc_generate_v1.1.5a.js} (tmgGenerate, tngGenerate)
 * %[Export] {rmc_generate_v1.1.5a.js} (menuGenerate)
 * %[Export] {fmc_generate_v1.1.5a.js} (menuGenerate)
 */
export {
  tmgGenerate,
  tngGenerate,
  menuGenerate
};
/* INFORMATION
 * %[File] {generate_module_v1.1.5a.js}
 * %[Unit] {Bit}
 * @[Author] {Facooya} (Owner)
 * @[Version] {1.1.5} (Alpha)
 * @[Since] {Dec/13/2023} (UTC+0)
 * @[Update] {Dec/16/2023} (UTC+0) Last update.
 */
