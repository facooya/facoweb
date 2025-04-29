/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/*  */
class HsncConfigData {
  static hsncItemText = [
    "Tab 1 long long long long long long long long long long long long long long",
    "Tab 2",
    "Tab 3"
  ];
  /*  */
  static hsncGigaBloTextYs = [
    "item 1-1 long long long long long long long long long long",
    "Item 1-2",
    "Item 1-3",
    "Item 1-4",
    "Item 1-5",
    "Item 1-6",
    "Item 1-7",
    "Item 1-8",
    "Item 1-9",
    "Item 1-10",
    "Item 1-11",
  ];
  static hsncGigaBloTextZs = [
    "Item 2-1",
    "Item 2-2"
  ];
  static hsncGigaBloTextEs = [
    "Item 3-1",
    "Item 3-2",
    "Item 3-3"
  ];
  /*  */
  static hsncTeraBloLinkYs = [
    "../page/doc-page.html",
    "../page/doc-page.html",
    "../page/doc-page.html",
    "../page/doc-page.html",
    "../page/doc-page.html",
    "../page/doc-page.html",
    "../page/doc-page.html",
    "../page/doc-page.html",
    "../page/doc-page.html",
    "../page/doc-page.html",
    "../page/doc-page.html"
  ];
  static hsncTeraBloLinkZs = [
    "../page/doc-page.html",
    "../page/doc-page.html"
  ];
  static hsncTeraBloLinkEs = [
    "../page/doc-page.html",
    "../page/doc-page.html",
    "../page/doc-page.html"
  ];
  /*  */
  static hsncSubItemText = [
    HsncConfigData.hsncGigaBloTextYs,
    HsncConfigData.hsncGigaBloTextZs,
    HsncConfigData.hsncGigaBloTextEs
  ];
  static hsncSubItemLink = [
    HsncConfigData.hsncTeraBloLinkYs,
    HsncConfigData.hsncTeraBloLinkZs,
    HsncConfigData.hsncTeraBloLinkEs
  ];
}
class HsncConfigManager {
  static hsncTocGenerate() {
    const hsnc = document.querySelector(".hsnc");
    const hsncList = hsnc.querySelector(".hsnc-list");
    const first = hsncList.firstChild;
    const getTocItemText = document.querySelector(".dpmac-toc-text");
    /*  */
    const tocItem = document.createElement("li");
    tocItem.setAttribute("class", "hsnc-item");
    const tocItemContainer = document.createElement("div");
    tocItemContainer.setAttribute("class", "hsnc-item-container");
    const tocItemText = document.createElement("span");
    tocItemText.setAttribute("class", "hsnc-item-text");
    tocItemText.textContent = getTocItemText.textContent;
    const tocItemRr = document.createElement("span");
    tocItemRr.setAttribute("class", "hsnc-item-rr");
    const tocItemBr = document.createElement("span");
    tocItemBr.setAttribute("class", "hsnc-item-br");
    /*  */
    const tocSubList = document.createElement("ul");
    tocSubList.setAttribute("class", "hsnc-sub-list");
    const tocIndexLinks = document.querySelectorAll(".dpmac-index-link");
    const tocIndexTexts = document.querySelectorAll(".dpmac-index-text");
    tocIndexLinks.forEach((tocIndexLink, index) => {
      const tocSubItem = document.createElement("li");
      tocSubItem.setAttribute("class", "hsnc-sub-item");
      const tocSubItemContainer = document.createElement("a");
      tocSubItemContainer.setAttribute("class", "hsnc-sub-item-container");
      tocSubItemContainer.setAttribute("href", tocIndexLink.hash);
      const tocSubItemLr = document.createElement("span");
      tocSubItemLr.setAttribute("class", "hsnc-sub-item-lr");
      const tocSubItemText = document.createElement("span");
      tocSubItemText.setAttribute("class", "hsnc-sub-item-text");
      tocSubItemText.textContent = tocIndexTexts[index].textContent;
      /*  */
      tocSubItemContainer.append(tocSubItemLr, tocSubItemText);
      tocSubItem.append(tocSubItemContainer);
      tocSubList.append(tocSubItem);
    });
    tocItemContainer.append(tocItemText, tocItemRr, tocItemBr);
    tocItem.append(tocItemContainer, tocSubList);

    hsncList.insertBefore(tocItem, first);
  }
  /* ================================================== */
  static hsncGenerate() {
    const hsncFragment = document.createDocumentFragment();
    const hsnc = document.querySelector(".hsnc");
    /*  */
    const hsncList = document.createElement("ul");
    hsncList.setAttribute("class", "hsnc-list");
    /*  */
    const itemText = HsncConfigData.hsncItemText;
    for (let ti = 0; ti < itemText.length; ti++) {
      const hsncItem = document.createElement("li");
      hsncItem.setAttribute("class", "hsnc-item");
      /*  */
      const hsncItemContainer = document.createElement("div");
      hsncItemContainer.setAttribute("class", "hsnc-item-container");
      const hsncItemText = document.createElement("span");
      hsncItemText.setAttribute("class", "hsnc-item-text");
      hsncItemText.textContent = itemText[ti];
      const hsncItemRr = document.createElement("span");
      hsncItemRr.setAttribute("class", "hsnc-item-rr");
      const hsncItemBr = document.createElement("span");
      hsncItemBr.setAttribute("class", "hsnc-item-br");
      hsncItemContainer.append(hsncItemText, hsncItemRr, hsncItemBr);
      /*  */
      const hsncSubList = document.createElement("ul");
      hsncSubList.setAttribute("class", "hsnc-sub-list");
      const subItemText = HsncConfigData.hsncSubItemText[ti];
      const subItemLink = HsncConfigData.hsncSubItemLink[ti];
      for (let sti = 0; sti < subItemText.length; sti++) {
        const hsncSubItem = document.createElement("li");
        hsncSubItem.setAttribute("class", "hsnc-sub-item");
        /*  */
        const hsncSubItemContainer = document.createElement("a");
        hsncSubItemContainer.setAttribute("class", "hsnc-sub-item-container");
        hsncSubItemContainer.setAttribute("href", subItemLink[sti]);
        const hsncSubItemText = document.createElement("span");
        hsncSubItemText.setAttribute("class", "hsnc-sub-item-text");
        hsncSubItemText.textContent = subItemText[sti];
        const hsncSubItemRr = document.createElement("span");
        hsncSubItemRr.setAttribute("class", "hsnc-sub-item-rr");
        const hsncSubItemBr = document.createElement("span");
        hsncSubItemBr.setAttribute("class", "hsnc-sub-item-br");
        hsncSubItemContainer.append(hsncSubItemText, hsncSubItemRr, hsncSubItemBr);
        hsncSubItem.append(hsncSubItemContainer);
        hsncSubList.append(hsncSubItem);
      }
      /*  */
      hsncItem.append(hsncItemContainer, hsncSubList);
      hsncList.append(hsncItem);
    }
    /*  */
    const hsncScrollDefence = document.createElement("div");
    hsncScrollDefence.setAttribute("class", "hsnc-scroll-defence");
    const hsncFogTr = document.createElement("div");
    hsncFogTr.setAttribute("class", "hsnc-fog-tr");
    const hsncFogBr = document.createElement("div");
    hsncFogBr.setAttribute("class", "hsnc-fog-br");
    hsncFragment.append(hsncList, hsncScrollDefence, hsncFogTr, hsncFogBr);
    hsnc.append(hsncFragment);
  }
}
class HsncConfig {
  static hsncGenerate() {
    HsncConfigManager.hsncGenerate();
  }
  static hsncTocGenerate() {
    HsncConfigManager.hsncTocGenerate();
  }
}
/*  */
export {
  HsncConfig
};
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */