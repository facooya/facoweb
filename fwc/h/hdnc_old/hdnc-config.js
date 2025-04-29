/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
class HdncConfigData {
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
  static subItemTexts = [
    HdncConfigData.subItemTextsMenu1,
    HdncConfigData.subItemTextsMenu2,
    HdncConfigData.subItemTextsMenu3,
    HdncConfigData.subItemTextsMenu4
  ];
  static subContainerLinks = [
    HdncConfigData.subContainerLinksMenu1,
    HdncConfigData.subContainerLinksMenu2,
    HdncConfigData.subContainerLinksMenu3,
    HdncConfigData.subContainerLinksMenu4
  ];
}
class HdncConfigManager {
  static generate() {
    const hdnc = document.querySelector(".hdnc");
    const hdncFrag = document.createDocumentFragment();
    /* list in hdnc */
    const list = document.createElement("ul");
    list.setAttribute("class", "hdnc-list");
    const itemTexts = HdncConfigData.itemTexts;
    for (let i = 0; i < itemTexts.length; i++) {
      const item = document.createElement("li");
      item.setAttribute("class", "hdnc-item");
      /* itemContainer in item */
      const itemContainer = document.createElement("div");
      itemContainer.setAttribute("class", "hdnc-item-container");
      const itemText = document.createElement("span");
      itemText.setAttribute("class", "hdnc-item-text");
      itemText.textContent = itemTexts[i];
      const itemRr = document.createElement("span");
      itemRr.setAttribute("class", "hdnc-item-rr");
      const itemBr = document.createElement("span");
      itemBr.setAttribute("class", "hdnc-item-br");
      const itemContainerSge = document.createElement("div");
      itemContainerSge.setAttribute("class", "hdnc-sge-util hdnc-item-container-sge");
      itemContainer.append(itemText, itemRr, itemBr, itemContainerSge);
      /* subList in item */
      const subList = document.createElement("ul");
      subList.setAttribute("class", "hdnc-sub-list");
      const subItemTexts = HdncConfigData.subItemTexts[i];
      const subContainerLinks = HdncConfigData.subContainerLinks[i];
      for (let j = 0; j < subItemTexts.length; j++) {
        const subItem = document.createElement("li");
        subItem.setAttribute("class", "hdnc-sub-item");
        /* subContainer in subItem */
        const subItemContainer = document.createElement("a");
        subItemContainer.setAttribute("class", "hdnc-sub-item-container");
        subItemContainer.setAttribute("href", subContainerLinks[j]);
        const subItemText = document.createElement("span");
        subItemText.setAttribute("class", "hdnc-sub-item-text");
        subItemText.textContent = subItemTexts[j];
        const subItemRr = document.createElement("span");
        subItemRr.setAttribute("class", "hdnc-sub-item-rr");
        const subItemBr = document.createElement("span");
        subItemBr.setAttribute("class", "hdnc-sub-item-br");
        subItemContainer.append(subItemText, subItemRr, subItemBr);
        subItem.append(subItemContainer);
        /*  */
        subList.append(subItem);
      }
      /* Sge in subList */
      const subListSge = document.createElement("div");
      subListSge.setAttribute("class", "hdnc-sge-util hdnc-sub-list-sge");
      subList.append(subListSge);
      /*  */
      item.append(itemContainer, subList);
      /* Chevron in item */
      const chevronTrWrapper = document.createElement("span");
      chevronTrWrapper.setAttribute("class", "hdnc-chevron-wrapper hdnc-chevron-tr-wrapper");
      const chevronTr = document.createElement("span");
      chevronTr.setAttribute("class", "hdnc-chevron hdnc-chevron-tr");
      chevronTrWrapper.append(chevronTr);
      const chevronBrWrapper = document.createElement("span");
      chevronBrWrapper.setAttribute("class", "hdnc-chevron-wrapper hdnc-chevron-br-wrapper");
      const chevronBr = document.createElement("span");
      chevronBr.setAttribute("class", "hdnc-chevron hdnc-chevron-br");
      chevronBrWrapper.append(chevronBr);
      item.append(chevronTrWrapper, chevronBrWrapper);
      /*  */
      list.append(item);
    }
    /* Etc in hdnc */
    const sge = document.createElement("div");
    sge.setAttribute("class", "hdnc-sge-util hdnc-sge");
    const fogTr = document.createElement("div");
    fogTr.setAttribute("class", "hdnc-fog hdnc-fog-tr");
    const fogBr = document.createElement("div");
    fogBr.setAttribute("class", "hdnc-fog hdnc-fog-br");
    /*  */
    hdncFrag.append(list, sge, fogTr, fogBr);
    hdnc.append(hdncFrag);
  }
}
class HdncConfig {
  static generate() {
    HdncConfigManager.generate();
  }
}
export {
  HdncConfig
};
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */