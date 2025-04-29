/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* ================================================== */
class FllcConfigData {
  static links = [
    "#",
    "#",
    "#",
    "#"
  ];
  static texts = [
    "Privacy Policy",
    "Terms of Use",
    "Cookie Settings",
    "Legal"
  ];
  /*  */
  static logoLink = "#facooya.com";
  static copyrightText = "Copyright 2023-2024 Facooya";
}
/* ================================================== */
class FllcConfigManager {
  static initGenerate() {
    const frag = document.createDocumentFragment();
    const fllc = document.querySelector(".fllc");
    /*  */
    const list = document.createElement("ul");
    list.setAttribute("class", "fllc-list");
    const links = FllcConfigData.links;
    const texts = FllcConfigData.texts;
    for (let i = 0; i < links.length; i++) {
      const item = document.createElement("li");
      item.setAttribute("class", "item");
      const link = document.createElement("a");
      link.setAttribute("class", "link");
      link.setAttribute("href", links[i]);
      const text = document.createElement("span");
      text.setAttribute("class", "text");
      text.textContent = texts[i];
      /*  */
      link.append(text);
      item.append(link);
      list.append(item);
    }
    /*  */
    const logo = document.createElement("div");
    logo.setAttribute("class", "fllc-logo");
    const logoLink = document.createElement("a");
    logoLink.setAttribute("class", "logo-link");
    logoLink.setAttribute("href", FllcConfigData.logoLink);
    const taIcon = document.createElement("span");
    taIcon.setAttribute("class", "logo-icon ta-icon");
    const facooyaIcon = document.createElement("span");
    facooyaIcon.setAttribute("class", "logo-icon facooya-icon");
    logoLink.append(taIcon, facooyaIcon);
    logo.append(logoLink);
    /*  */
    const copyright = document.createElement("p");
    copyright.setAttribute("class", "fllc-copyright");
    copyright.textContent = FllcConfigData.copyrightText;
    /*  */
    frag.append(list, logo, copyright);
    fllc.append(frag);
  }
}
/* ================================================== */
class FllcConfig {
  static initGenerate() {
    FllcConfigManager.initGenerate();
  }
}
/* ================================================== */
export { FllcConfig };
/* ================================================== */
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
/* ========================= ;FACOOYA; ========================= */