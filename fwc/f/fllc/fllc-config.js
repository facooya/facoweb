/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* ================================================== */
class FllcConfigData {
  static itemLinks = [
    "#",
    "#",
    "#",
    "#"
  ];
  static itemTexts = [
    "Privacy Policy",
    "Terms of Use",
    "Cookie Settings",
    "Legal"
  ];
  /*  */
  static logoContainerLink = "#facooya.com";
  static copyrightText = "Copyright 2023-2024 Facooya";
}
class FllcConfigManager {
  static generate() {
    const fllc = document.querySelector(".fllc");
    const fllcFrag = document.createDocumentFragment();
    /*  */
    const list = document.createElement("ul");
    list.setAttribute("class", "fllc-list");
    const itemLinks = FllcConfigData.itemLinks;
    const itemTexts = FllcConfigData.itemTexts;
    for (let i = 0; i < itemLinks.length; i++) {
      const item = document.createElement("li");
      item.setAttribute("class", "fllc-item");
      const itemLink = document.createElement("a");
      itemLink.setAttribute("class", "fllc-item-link");
      itemLink.setAttribute("href", itemLinks[i]);
      const itemText = document.createElement("span");
      itemText.setAttribute("class", "fllc-item-text");
      itemText.textContent = itemTexts[i];
      /*  */
      itemLink.append(itemText);
      item.append(itemLink);
      list.append(item);
    }
    /*  */
    const logoWrapper = document.createElement("div");
    logoWrapper.setAttribute("class", "fllc-logo-wrapper");
    const logoContainer = document.createElement("a");
    logoContainer.setAttribute("class", "fllc-logo-container");
    logoContainer.setAttribute("href", FllcConfigData.logoContainerLink);
    const taItem = document.createElement("span");
    taItem.setAttribute("class", "fllc-ta-item fllc-logo-item");
    const facooyaItem = document.createElement("span");
    facooyaItem.setAttribute("class", "fllc-facooya-item fllc-logo-item");
    logoContainer.append(taItem, facooyaItem);
    logoWrapper.append(logoContainer);
    /*  */
    const copyright = document.createElement("p");
    copyright.setAttribute("class", "fllc-copyright");
    copyright.textContent = FllcConfigData.copyrightText;
    /*  */
    fllcFrag.append(list, logoWrapper, copyright);
    fllc.append(fllcFrag);
  }
}
class FllcConfig {
  static generate() {
    FllcConfigManager.generate();
  }
}
/* ================================================== */
export { FllcConfig };
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */