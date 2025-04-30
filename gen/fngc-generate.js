/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* ================================================== */
class FngcConfigData {
  static owTitle = "Our Websites";
  static owTexts = [
    "a.facooya.com [Coming Soon]",
    "b.facooya.com",
    "c.facooya.com [Coming Soon]",
    "d.facooya.com [Coming Soon]"
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
    "Our Team",
    "Contact Us"
  ];
  static auLinks = [
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
class FngcGenerateManager {
  static selfGenerate() {
    const frag = document.createDocumentFragment();
    const footer = document.querySelector(".f");
    /* const fngc = document.querySelector(".fngc"); */
    const fngc = document.createElement("nav");
    fngc.setAttribute("class", "fngc");
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
        link.setAttribute("target", "_blank");
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
      fngc.append(section);
    }
    frag.append(fngc);
    footer.prepend(frag);
  }
}
/* ================================================== */
FngcGenerateManager.selfGenerate();
/* ================================================== */
/* ========================= >FACOOYA ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 * #www.facooya.com/about/
 */
/* ========================= <FACOOYA ========================= */