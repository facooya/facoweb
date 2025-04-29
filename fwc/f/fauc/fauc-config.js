/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* ================================================== */
class FaucConfigData {
  static titleText = "About Us";
  static itemTexts = [
    "Contact Us",
    "Our Team",
    "Our Work"
  ];
  static itemLinks = [
    "#",
    "#",
    "#"
  ];
}
class FaucConfigManager {
  static generate() {
    const fauc = document.querySelector(".fauc");
    const faucFrag = document.createDocumentFragment();
    /*  */
    const title = document.createElement("h3");
    title.setAttribute("class", "fauc-title");
    title.textContent = FaucConfigData.titleText;
    /*  */
    const list = document.createElement("ul");
    list.setAttribute("class", "fauc-list");
    const itemTexts = FaucConfigData.itemTexts;
    const itemLinks = FaucConfigData.itemLinks;
    for (let i = 0; i < itemTexts.length; i++) {
      const item = document.createElement("li");
      item.setAttribute("class", "fauc-item");
      const itemLink = document.createElement("a");
      itemLink.setAttribute("class", "fauc-item-link");
      itemLink.setAttribute("href", itemLinks[i]);
      const itemText = document.createElement("span");
      itemText.setAttribute("class", "fauc-item-text");
      itemText.textContent = itemTexts[i];
      /*  */
      itemLink.append(itemText);
      item.append(itemLink);
      list.append(item);
    }
    /*  */
    faucFrag.append(title, list);
    fauc.append(faucFrag);
  }
}
class FaucConfig {
  static generate() {
    FaucConfigManager.generate();
  }
}
/* ================================================== */
export { FaucConfig };
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */