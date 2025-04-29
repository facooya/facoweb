/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
class FngcConfigData {
  static auTitleText = "About Us";
  static auItemTexts = [
    "Contact Us",
    "Our Team",
    "Our Work"
  ];
  static auItemLinks = [
    "#",
    "#",
    "#"
  ];
  /* ================================================== */
  static osTitleText = "Our Services";
  static osItemTexts = [
    "a.facooya.com",
    "b.facooya.com",
    "c.facooya.com",
    "d.facooya.com"
  ];
  static osItemLinks = [
    "#a.facooya.com",
    "#b.facooya.com",
    "#c.facooya.com",
    "#d.facooya.com"
  ];
  /* ================================================== */
  static titleTexts = [
    FngcConfigData.auTitleText,
    FngcConfigData.osTitleText
  ];
  static itemTextGroups = [
    FngcConfigData.auItemTexts,
    FngcConfigData.osItemTexts
  ];
  static itemLinkGroups = [
    FngcConfigData.auItemLinks,
    FngcConfigData.osItemLinks
  ];
}
class FngcConfigManager {
  static generate() {
    const fngc = document.querySelector(".fngc");
    const fngcFrag = document.createDocumentFragment();
    /*  */
    const titleTexts = FngcConfigData.titleTexts;
    for (let i = 0; i < titleTexts.length; i++) {
      /* Container */
      const container = document.createElement("div");
      container.setAttribute("class", "fngc-container");
      /* Title */
      const title = document.createElement("h3");
      title.setAttribute("class", "fngc-title");
      title.textContent = titleTexts[i];
      /* List */
      const list = document.createElement("ul");
      list.setAttribute("class", "fngc-list");
      const itemTexts = FngcConfigData.itemTextGroups[i];
      const itemLinks = FngcConfigData.itemLinkGroups[i];
      for (let j = 0; j < itemTexts.length; j++) {
        /* Item */
        const item = document.createElement("li");
        item.setAttribute("class", "fngc-item");
        const itemLink = document.createElement("a");
        itemLink.setAttribute("class", "fngc-item-link");
        itemLink.setAttribute("href", itemLinks[j]);
        const itemText = document.createElement("span");
        itemText.setAttribute("class", "fngc-item-text");
        itemText.textContent = itemTexts[j];
        /*  */
        itemLink.append(itemText);
        item.append(itemLink);
        list.append(item);
      }
      /*  */
      container.append(title, list);
      fngcFrag.append(container);
    }
    fngc.append(fngcFrag);
  }
  /* static generate_old() {
    const fngc = document.querySelector(".fngc");
    const fngcFrag = document.createDocumentFragment();
    /*  
    const title = document.createElement("h3");
    title.setAttribute("class", "fngc-title");
    title.textContent = FngcConfigData.titleText;
    /*  
    const list = document.createElement("ul");
    list.setAttribute("class", "fngc-list");
    const itemTexts = FngcConfigData.itemTexts;
    const itemLinks = FngcConfigData.itemLinks;
    for (let i = 0; i < itemTexts.length; i++) {
      const item = document.createElement("li");
      item.setAttribute("class", "fngc-item");
      const itemLink = document.createElement("a");
      itemLink.setAttribute("class", "fngc-item-link");
      itemLink.setAttribute("href", itemLinks[i]);
      const itemText = document.createElement("span");
      itemText.setAttribute("class", "fngc-item-text");
      itemText.textContent = itemTexts[i];
      /*  
      itemLink.append(itemText);
      item.append(itemLink);
      list.append(item);
    }
    /*  
    fngcFrag.append(title, list);
    fngc.append(fngcFrag);
  } */
}
class FngcConfig {
  static generate() {
    FngcConfigManager.generate();
  }
}
/* ================================================== */
export { FngcConfig };
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */