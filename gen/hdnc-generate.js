/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* ================================================== */
class HdncGenerateData {
  /* ===== itemTexts ===== */
  static itemTexts = [
    "Menu 1",
    "Menu 2",
    "Menu 3",
    "Menu 4"
  ];
  /* ===== subItemText ===== */
  static subItemTextsMenu1 = [
    "Item 1-1"
  ];
  static subItemTextsMenu2 = [
    "Item 2-1",
    "Item 2-2"
  ];
  static subItemTextsMenu3 = [
    "Item 3-1",
    "Item 3-2",
    "Item 3-3"
  ];
  static subItemTextsMenu4 = [
    "Item 4-1",
    "Item 4-2"
  ];
  /* ===== subContainerLink ===== */
  static subContainerLinksMenu1 = [
    "#item-1-1"
  ];
  static subContainerLinksMenu2 = [
    "#item-2-1",
    "#item-2-2"
  ];
  static subContainerLinksMenu3 = [
    "#item-3-1",
    "#item-3-2",
    "#item-3-3"
  ];
  static subContainerLinksMenu4 = [
    "#item-4-1",
    "#item-4-2"
  ];
  /* ===== Compile ===== */
  static subItemTextGroups = [
    HdncGenerateData.subItemTextsMenu1,
    HdncGenerateData.subItemTextsMenu2,
    HdncGenerateData.subItemTextsMenu3,
    HdncGenerateData.subItemTextsMenu4
  ];
  static subContainerLinkGroups = [
    HdncGenerateData.subContainerLinksMenu1,
    HdncGenerateData.subContainerLinksMenu2,
    HdncGenerateData.subContainerLinksMenu3,
    HdncGenerateData.subContainerLinksMenu4
  ];
}
/* ================================================== */
class HdncGenerateManager {
  static selfGenerate() {
    const frag = document.createDocumentFragment();
    /* Find Header */
    const header = document.querySelector(".h");
    /* Create Hdnc */
    const hdnc = document.createElement("nav");
    hdnc.setAttribute("class", "hdnc");
    /* List in HDNC */
    const list = document.createElement("ul");
    list.setAttribute("class", "hdnc-list");
    const itemTexts = HdncGenerateData.itemTexts;
    for (let i = 0; i < itemTexts.length; i++) {
      const item = document.createElement("li");
      item.setAttribute("class", "item");
      /* itemContainer in item */
      const itemContainer = document.createElement("div");
      itemContainer.setAttribute("class", "item-container");
      const itemText = document.createElement("span");
      itemText.setAttribute("class", "item-text");
      itemText.textContent = itemTexts[i];
      const itemRr = document.createElement("span");
      itemRr.setAttribute("class", "item-rr");
      const itemBr = document.createElement("span");
      itemBr.setAttribute("class", "item-br");
      const itemContainerSge = document.createElement("div");
      itemContainerSge.setAttribute("class", "hdnc-sge-group item-container-sge");
      itemContainer.append(itemText, itemRr, itemBr, itemContainerSge);
      /* Sub List in Item */
      const subList = document.createElement("ul");
      subList.setAttribute("class", "sub-list");
      const subItemTexts = HdncGenerateData.subItemTextGroups[i];
      const subContainerLinks = HdncGenerateData.subContainerLinkGroups[i];
      for (let j = 0; j < subItemTexts.length; j++) {
        const subItem = document.createElement("li");
        subItem.setAttribute("class", "sub-item");
        /* Sub Container in Sub Item */
        const subItemContainer = document.createElement("a");
        subItemContainer.setAttribute("class", "sub-item-container");
        subItemContainer.setAttribute("href", subContainerLinks[j]);
        const subItemText = document.createElement("span");
        subItemText.setAttribute("class", "sub-item-text");
        subItemText.textContent = subItemTexts[j];
        const subItemRr = document.createElement("span");
        subItemRr.setAttribute("class", "sub-item-rr");
        const subItemBr = document.createElement("span");
        subItemBr.setAttribute("class", "sub-item-br");
        subItemContainer.append(subItemText, subItemRr, subItemBr);
        subItem.append(subItemContainer);
        /*  */
        subList.append(subItem);
      }
      /* Sge in Sub List */
      const subListSge = document.createElement("li");
      subListSge.setAttribute("class", "hdnc-sge-group sub-list-sge");
      subList.append(subListSge);
      /*  */
      item.append(itemContainer, subList);
      /* Chevron in Item */
      const chevronTrWrapper = document.createElement("span");
      chevronTrWrapper.setAttribute("class", "item-chevron-wrapper item-chevron-tr-wrapper");
      const chevronTr = document.createElement("span");
      chevronTr.setAttribute("class", "item-chevron item-chevron-tr");
      chevronTrWrapper.append(chevronTr);
      const chevronBrWrapper = document.createElement("span");
      chevronBrWrapper.setAttribute("class", "item-chevron-wrapper item-chevron-br-wrapper");
      const chevronBr = document.createElement("span");
      chevronBr.setAttribute("class", "item-chevron item-chevron-br");
      chevronBrWrapper.append(chevronBr);
      item.append(chevronTrWrapper, chevronBrWrapper);
      /*  */
      list.append(item);
    }
    /* Etc in HDNC */
    /* Fog */
    const fogTr = document.createElement("div");
    fogTr.setAttribute("class", "hdnc-fog hdnc-fog-tr");
    const fogBr = document.createElement("div");
    fogBr.setAttribute("class", "hdnc-fog hdnc-fog-br");
    /* SGE */
    const sge = document.createElement("div");
    sge.setAttribute("class", "hdnc-sge-group hdnc-sge");
    /*  */
    hdnc.append(list, fogTr, fogBr, sge);
    frag.append(hdnc);
    header.append(frag);
  }
}
HdncGenerateManager.selfGenerate();
/* ================================================== */
/* ========================= >FACOOYA ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
/* ========================= <FACOOYA ========================= */