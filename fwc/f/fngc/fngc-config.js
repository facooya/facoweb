/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* ================================================== */
class FngcConfigData {
  static owTitle = "Our Websites";
  static owTexts = [
    "a.facooya.com",
    "b.facooya.com",
    "c.facooya.com",
    "d.facooya.com"
  ];
  static owLinks = [
    "#a.facooya.com",
    "#b.facooya.com",
    "#c.facooya.com",
    "#d.facooya.com"
  ];
  /* ================================================== */
  static auTitle = "About Us";
  static auTexts = [
    "Contact Us",
    "Our Team",
    "Our Work"
  ];
  static auLinks = [
    "#",
    "#",
    "#"
  ];
  /* ================================================== */
  static titles = [
    FngcConfigData.owTitle,
    FngcConfigData.auTitle,
  ];
  static textGroups = [
    FngcConfigData.owTexts,
    FngcConfigData.auTexts,
  ];
  static linkGroups = [
    FngcConfigData.owLinks,
    FngcConfigData.auLinks,
  ];
}
/* ================================================== */
class FngcConfigManager {
  static initGenerate() {
    const frag = document.createDocumentFragment();
    const fngc = document.querySelector(".fngc");
    /*  */
    const titles = FngcConfigData.titles;
    for (let i = 0; i < titles.length; i++) {
      /* Section */
      const section = document.createElement("section");
      section.setAttribute("class", "fngc-section");
      /* Title */
      const title = document.createElement("h3");
      title.setAttribute("class", "title");
      title.textContent = titles[i];
      /* List */
      const list = document.createElement("ul");
      list.setAttribute("class", "list");
      const texts = FngcConfigData.textGroups[i];
      const links = FngcConfigData.linkGroups[i];
      for (let j = 0; j < texts.length; j++) {
        /* Item */
        const item = document.createElement("li");
        item.setAttribute("class", "item");
        const link = document.createElement("a");
        link.setAttribute("class", "link");
        link.setAttribute("href", links[j]);
        const text = document.createElement("span");
        text.setAttribute("class", "text");
        text.textContent = texts[j];
        /*  */
        link.append(text);
        item.append(link);
        list.append(item);
      }
      /*  */
      section.append(title, list);
      frag.append(section);
    }
    fngc.append(frag);
  }
}
/* ================================================== */
class FngcConfig {
  static initGenerate() {
    FngcConfigManager.initGenerate();
  }
}
/* ================================================== */
export { FngcConfig };
/* ================================================== */
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
/* ========================= ;FACOOYA; ========================= */