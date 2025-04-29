/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* ================================================== */
class FoscConfigData {
  static titleText = "Our Services";
  static itemTexts = [
    "a.facooya.com",
    "b.facooya.com",
    "c.facooya.com"
  ];
  static itemLinks = [
    "#a.facooya.com",
    "#b.facooya.com",
    "#c.facooya.com"
  ];
}
class FoscConfigManager {
  static generate() {
    const fosc = document.querySelector(".fosc");
    const foscFrag = document.createDocumentFragment();
    /*  */
    const title = document.createElement("h3");
    title.setAttribute("class", "fosc-title");
    title.textContent = FoscConfigData.titleText;
    /*  */
    const list = document.createElement("ul");
    list.setAttribute("class", "fosc-list");
    const itemTexts = FoscConfigData.itemTexts;
    const itemLinks = FoscConfigData.itemLinks;
    for (let i = 0; i < itemTexts.length; i++) {
      const item = document.createElement("li");
      item.setAttribute("class", "fosc-item");
      const itemLink = document.createElement("a");
      itemLink.setAttribute("class", "fosc-item-link");
      itemLink.setAttribute("href", itemLinks[i]);
      const itemText = document.createElement("span");
      itemText.setAttribute("class", "fosc-item-text");
      itemText.textContent = itemTexts[i];
      /*  */
      itemLink.append(itemText);
      item.append(itemLink);
      list.append(item);
    }
    /*  */
    foscFrag.append(title, list);
    fosc.append(foscFrag);
  }
}
class FoscConfig {
  static generate() {
    FoscConfigManager.generate();
  }
}
/* ================================================== */
export { FoscConfig };
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */