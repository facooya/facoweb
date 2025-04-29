/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* ================================================== */
class DpmfcConfigManager {
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
  /* ================================================== */
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
  /* -------------------------------------------------- */
  static paginationNumberItemRemove() {
    const dpmfcPagination = document.querySelector(".dpmfc-pagination");
    const numberItems = dpmfcPagination.querySelectorAll(".number-item");
    numberItems.forEach(item => {
      item.remove();
    });
  }
}
/* ================================================== */
class DpmfcConfig {
  static tabIndex = 0;
  static pageIndex = 0;
  static pageMaxIndex = 0;
  /* -------------------------------------------------- */
  static updatePageMaxIndex() {
    DpmfcConfigManager.updatePageMaxIndex();
  }
  /* -------------------------------------------------- */
  static paginationNumberItemCreate() {
    DpmfcConfigManager.paginationNumberItemCreate();
  }
  static paginationNumberItemRemove() {
    DpmfcConfigManager.paginationNumberItemRemove();
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