/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
class DpmfcConfigData {

}
class DpmfcConfigManager {
  /* static pageItemCreate() {
    const pageList = document.querySelector(".dpmfc-page-list");
    const pageFrag = document.createDocumentFragment();
    /*  
    for (let i = 0; i < DpmfcConfig.pageMaxIndex; i++) {
      const pageItem = document.createElement("li");
      pageItem.setAttribute("class", "dpmfc-page-item");
      const pageItemText = document.createElement("span");
      pageItemText.setAttribute("class", "dpmfc-page-item-text");
      pageItemText.textContent = i + 1;
      /*  
      pageItem.append(pageItemText);
      pageFrag.append(pageItem);
    }
    /*  
    pageList.append(pageFrag);
  } */
  /* -------------------------------------------------- */
  /* static pageItemRemove() {
    const pageItems = document.querySelectorAll(".dpmfc-page-item");
    pageItems.forEach(item => {
      item.remove();
    });
  } */
  static paginationNumberItemCreate() {
    const dpmfcPagination = document.querySelector(".dpmfc-pagination");
    const numberList = dpmfcPagination.querySelector(".number-list");
    const frag = document.createDocumentFragment();
    for (let i = 0; i <= DpmfcConfig.pageMaxIndex; i++) {
      const item = document.createElement("li");
      item.setAttribute("class", "number-item");
      const text = document.createElement("span");
      text.setAttribute("class", "number-text");
      text.textContent = i + 1;
      item.append(text);
      frag.append(item);
    }
    numberList.append(frag);
  }
  static paginationNumberItemRemove() {
    const dpmfcPagination = document.querySelector(".dpmfc-pagination");
    const numberItems = dpmfcPagination.querySelectorAll(".number-item");
    numberItems.forEach(item => {
      item.remove();
    });
  }
  /* ================================================== */
  /* static updatePageMaxIndex() {
    const lists = document.querySelectorAll(".dpmfc-list");
    const items = lists[DpmfcConfig.tabIndex].querySelectorAll(".dpmfc-item");
    DpmfcConfig.pageMaxIndex = Math.floor(items.length / 5);
    if (items.length % 5 === 0) {
      DpmfcConfig.pageMaxIndex--;
    }
  } */
  static updatePageMaxIndex() {
    const tabIndex = DpmfcConfig.tabIndex;
    const navigation = document.querySelector(".dpmfc-navigation");
    const lists = navigation.querySelectorAll(".list");
    const items = lists[tabIndex].querySelectorAll(".item");
    const itemsLength = items.length;
    /* Calculation */
    let calcPageMaxIndex = Math.floor(itemsLength / 5);
    if (itemsLength % 5 === 0) calcPageMaxIndex--;
    /* Update */
    DpmfcConfig.pageMaxIndex = calcPageMaxIndex;
  }
}
class DpmfcConfig {
  static tabIndex = 0;
  static pageIndex = 0;
  static pageMaxIndex = 0;
  /* -------------------------------------------------- */
  /* static pageItemCreate() {
    DpmfcConfigManager.pageItemCreate();
  }
  static pageItemRemove() {
    DpmfcConfigManager.pageItemRemove();
  } */
  static paginationNumberItemCreate() {
    DpmfcConfigManager.paginationNumberItemCreate();
  }
  static paginationNumberItemRemove() {
    DpmfcConfigManager.paginationNumberItemRemove();
  }
  /*  */
  static updatePageMaxIndex() {
    DpmfcConfigManager.updatePageMaxIndex();
  }
}
export { DpmfcConfig };
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */