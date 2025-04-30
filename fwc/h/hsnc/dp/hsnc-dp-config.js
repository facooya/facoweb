/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* ================================================== */
class HsncConfigData {
  /* Item Text */
  static itemTexts = [
    "Tab 1 long long long long long long long long long long long long long long",
    "Tab 2",
    "Tab 3"
  ];
  /* ================================================== */
  /* Sub Item Text */
  static subItemTextsTab1 = [
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
  static subItemTextsTab2 = [
    "Item 2-1",
    "Item 2-2"
  ];
  static subItemTextsTab3 = [
    "Item 3-1",
    "Item 3-2",
    "Item 3-3"
  ];
  /* ================================================== */
  /* Sub Item Link */
  static subItemLinksTab1 = [
    "./doc-page.html",
    "./doc-page.html",
    "./doc-page.html",
    "./doc-page.html",
    "./doc-page.html",
    "./doc-page.html",
    "./doc-page.html",
    "./doc-page.html",
    "./doc-page.html",
    "./doc-page.html",
    "./doc-page.html"
  ];
  static subItemLinksTab2 = [
    "./doc-page.html",
    "./doc-page.html"
  ];
  static subItemLinksTab3 = [
    "./doc-page.html",
    "./doc-page.html",
    "./doc-page.html"
  ];
  /* ================================================== */
  /* Sub Item Text, Link Group */
  static subItemTextGroups = [
    HsncConfigData.subItemTextsTab1,
    HsncConfigData.subItemTextsTab2,
    HsncConfigData.subItemTextsTab3
  ];
  static subItemLinkGroups = [
    HsncConfigData.subItemLinksTab1,
    HsncConfigData.subItemLinksTab2,
    HsncConfigData.subItemLinksTab3
  ];
}
/* ================================================== */
class HsncConfigManager {
  static initGenerate() {
    const frag = document.createDocumentFragment();
    const hsnc = document.querySelector(".hsnc");
    /* List */
    const list = document.createElement("ul");
    list.setAttribute("class", "hsnc-list");
    /* Item */
    const itemTexts = HsncConfigData.itemTexts;
    for (let i = 0; i < itemTexts.length; i++) {
      const item = document.createElement("li");
      item.setAttribute("class", "item");
      /* Item Container */
      const itemContainer = document.createElement("div");
      itemContainer.setAttribute("class", "item-container");
      const itemText = document.createElement("span");
      itemText.setAttribute("class", "item-text");
      itemText.textContent = itemTexts[i];
      const itemRr = document.createElement("span");
      itemRr.setAttribute("class", "item-rr");
      const itemBr = document.createElement("span");
      itemBr.setAttribute("class", "item-br");
      itemContainer.append(itemText, itemRr, itemBr);
      /*  */
      const subList = document.createElement("ul");
      subList.setAttribute("class", "sub-list");
      const subItemTexts = HsncConfigData.subItemTextGroups[i];
      const subItemLinks = HsncConfigData.subItemLinkGroups[i];
      for (let j = 0; j < subItemTexts.length; j++) {
        const subItem = document.createElement("li");
        subItem.setAttribute("class", "sub-item");
        /* Sub Item Container */
        const subItemContainer = document.createElement("a");
        subItemContainer.setAttribute("class", "sub-item-container");
        subItemContainer.setAttribute("href", subItemLinks[j]);
        const subItemText = document.createElement("span");
        subItemText.setAttribute("class", "sub-item-text");
        subItemText.textContent = subItemTexts[j];
        const subItemRr = document.createElement("span");
        subItemRr.setAttribute("class", "sub-item-rr");
        const subItemBr = document.createElement("span");
        subItemBr.setAttribute("class", "sub-item-br");
        /*  */
        subItemContainer.append(subItemText, subItemRr, subItemBr);
        subItem.append(subItemContainer);
        subList.append(subItem);
      }
      /*  */
      item.append(itemContainer, subList);
      list.append(item);
    }
    /* Fog */
    const fogTr = document.createElement("div");
    fogTr.setAttribute("class", "hsnc-fog hsnc-fog-tr");
    const fogBr = document.createElement("div");
    fogBr.setAttribute("class", "hsnc-fog hsnc-fog-br");
    /* SGE */
    const sge = document.createElement("div");
    sge.setAttribute("class", "hsnc-sge");
    frag.append(list, fogTr, fogBr, sge);
    hsnc.append(frag);
  }
  /* ================================================== */
  static tocCreate() {
    /* Only DPM */
    const frag = document.createDocumentFragment();
    const hsnc = document.querySelector(".hsnc");
    const list = hsnc.querySelector(".hsnc-list");
    const first = list.firstChild;
    const toc = document.querySelector(".dpmac-toc");
    const tocText = toc.querySelector(".title");
    /* TOC Item */
    const tocItem = document.createElement("li");
    tocItem.setAttribute("class", "item");
    /* TOC Item Container */
    const tocItemContainer = document.createElement("div");
    tocItemContainer.setAttribute("class", "item-container");
    const tocItemText = document.createElement("span");
    tocItemText.setAttribute("class", "item-text");
    tocItemText.textContent = tocText.textContent;
    const tocItemRr = document.createElement("span");
    tocItemRr.setAttribute("class", "item-rr");
    const tocItemBr = document.createElement("span");
    tocItemBr.setAttribute("class", "item-br");
    /* TOC Sub List */
    const tocSubList = document.createElement("ul");
    tocSubList.setAttribute("class", "sub-list");
    const tocIndexLinks = toc.querySelectorAll(".link");
    const tocIndexTexts = toc.querySelectorAll(".text");
    /*  */
    for (let i = 0; i < tocIndexLinks.length; i++) {
      /* TOC Sub Item */
      const tocSubItem = document.createElement("li");
      tocSubItem.setAttribute("class", "sub-item");
      const tocSubItemContainer = document.createElement("a");
      /* TOC Sub Container */
      tocSubItemContainer.setAttribute("class", "sub-item-container");
      tocSubItemContainer.setAttribute("href", tocIndexLinks[i].hash);
      const tocSubItemLr = document.createElement("span");
      tocSubItemLr.setAttribute("class", "sub-item-lr");
      const tocSubItemText = document.createElement("span");
      tocSubItemText.setAttribute("class", "sub-item-text");
      tocSubItemText.textContent = tocIndexTexts[i].textContent;
      /*  */
      tocSubItemContainer.append(tocSubItemLr, tocSubItemText);
      tocSubItem.append(tocSubItemContainer);
      tocSubList.append(tocSubItem);
    }
    /*  */
    tocItemContainer.append(tocItemText, tocItemRr, tocItemBr);
    tocItem.append(tocItemContainer, tocSubList);
    frag.append(tocItem);
    list.insertBefore(frag, first);
  }
}
/* ================================================== */
class HsncConfig {
  static initGenerate() {
    HsncConfigManager.initGenerate();
  }
  static tocCreate() {
    /* Only DP */
    HsncConfigManager.tocCreate();
  }
}
/* ================================================== */
export { HsncConfig };
/* ================================================== */
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
/* ========================= ;FACOOYA; ========================= */