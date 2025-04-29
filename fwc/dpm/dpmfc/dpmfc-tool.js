/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import { DpmfcConfig } from "./dpmfc-config.js";
/* ================================================== */
class DpmfcToolTab {
  static updateTabItem() {
    const tabIndex = DpmfcConfig.tabIndex;
    const tab = document.querySelector(".dpmfc-tab");
    const items = tab.querySelectorAll(".item");
    const texts = tab.querySelectorAll(".text");
    const clActive = "active";
    /* All Inactive */
    for(let i = 0; i < items.length; i++) {
      items[i].classList.remove(clActive);
      texts[i].classList.remove(clActive);
    }
    /* Set Active */
    items[tabIndex].classList.add(clActive);
    texts[tabIndex].classList.add(clActive);
  }
}
/* ================================================== */
class DpmfcToolNavigation {
  static updateNavigationList() {
    const tabIndex = DpmfcConfig.tabIndex;
    const navigation = document.querySelector(".dpmfc-navigation");
    const lists = navigation.querySelectorAll(".list");
    const clActive = "active";
    /*  */
    lists.forEach(list => {
      list.classList.remove(clActive);
    });
    lists[tabIndex].classList.add(clActive);
  }
  static updateNavigationItem() {
    const tabIndex = DpmfcConfig.tabIndex;
    const pageIndex = DpmfcConfig.pageIndex;
    const navigation = document.querySelector(".dpmfc-navigation");
    const lists = navigation.querySelectorAll(".list");
    const items = lists[tabIndex].querySelectorAll(".item");
    const clActive = "active";
    /* Reset */
    items.forEach(item => item.classList.remove(clActive));
    /* Active */
    for (let i = pageIndex * 5; i < (pageIndex + 1) * 5 ; i++) {
      if (!items[i]) { break; }
      items[i].classList.add(clActive);
    }
  }
  static resetNavigationItem() {
    const tabIndex = DpmfcConfig.tabIndex;
    const navigation = document.querySelector(".dpmfc-navigation");
    const lists = navigation.querySelectorAll(".list");
    const items = lists[tabIndex].querySelectorAll(".item");
    const clActive = "active";
    items.forEach(item => item.classList.remove(clActive));
  }
}
/* ================================================== */
class DpmfcToolPagination {
  static updateWidePagination() {
    const pageMaxIndex = DpmfcConfig.pageMaxIndex;
    const html = document.documentElement;
    const htmlWidth = html.clientWidth;
    const pagination = document.querySelector(".dpmfc-pagination");
    const clWideX = "wide-x";
    /*  */
    const paddingX = 16;
    const gap = 16;
    const itemWidth = 40;
    /*  */
    const controlItemCount = 4;
    const numberItemCount = pageMaxIndex + 1;
    const totalItemCount = controlItemCount + numberItemCount;
    /*  */
    let calcWidth = totalItemCount * itemWidth;
    calcWidth += gap * (totalItemCount - 1);
    calcWidth += paddingX * 2;
    /*  */
    if (calcWidth < htmlWidth) { pagination.classList.add(clWideX); }
    else { pagination.classList.remove(clWideX); }
  }
  /* -------------------------------------------------- */
  static updatePaginationNumberItem() {
    const pageIndex = DpmfcConfig.pageIndex;
    const pagination = document.querySelector(".dpmfc-pagination");
    const numberItems = pagination.querySelectorAll(".number-item");
    const clActive = "active";
    numberItems.forEach(item => {
      item.classList.remove(clActive);
    });
    numberItems[pageIndex].classList.add(clActive);
  }
  /* -------------------------------------------------- */
  static updatePaginationControlItem() {
    const pageIndex = DpmfcConfig.pageIndex;
    const pageMaxIndex = DpmfcConfig.pageMaxIndex;
    const controls = document.querySelectorAll(".dpmfc-pagination .control");
    const leftItems = controls[0].querySelectorAll(".item");
    const leftIcons = controls[0].querySelectorAll(".icon");
    const rightItems = controls[1].querySelectorAll(".item");
    const rightIcons = controls[1].querySelectorAll(".icon");
    const clEnabled = "enabled";
    /* Reset: All Enabled */
    for (let i = 0; i < 2; i++) {
      leftItems[i].classList.add(clEnabled);
      leftIcons[i].classList.add(clEnabled);
      rightItems[i].classList.add(clEnabled);
      rightIcons[i].classList.add(clEnabled);
    }
    /* Select Disabled */
    if (pageMaxIndex >= 1) {
      if (pageIndex === 0) {
        for (let i = 0; i < 2; i++) {
          leftItems[i].classList.remove(clEnabled);
          leftIcons[i].classList.remove(clEnabled);
        }
      } else if (pageIndex === pageMaxIndex) {
        for (let i = 0; i < 2; i++) {
          rightItems[i].classList.remove(clEnabled);
          rightIcons[i].classList.remove(clEnabled);
        }
      }
    } else {
      for (let i = 0; i < 2; i++) {
        leftItems[i].classList.remove(clEnabled);
        leftIcons[i].classList.remove(clEnabled);
        rightItems[i].classList.remove(clEnabled);
        rightIcons[i].classList.remove(clEnabled);
      }
    }
  }
}
/* ================================================== */
class DpmfcTool {
  static updateTabItem() {
    DpmfcToolTab.updateTabItem();
  }
  /* -------------------------------------------------- */
  static updateNavigationList() {
    DpmfcToolNavigation.updateNavigationList();
  }
  static updateNavigationItem() {
    DpmfcToolNavigation.updateNavigationItem();
  }
  static resetNavigationItem() {
    DpmfcToolNavigation.resetNavigationItem();
  }
  /* -------------------------------------------------- */
  static updateWidePagination() {
    DpmfcToolPagination.updateWidePagination();
  }
  static updatePaginationNumberItem() {
    DpmfcToolPagination.updatePaginationNumberItem();
  }
  static updatePaginationControlItem() {
    DpmfcToolPagination.updatePaginationControlItem();
  }
}
/* ================================================== */
export { DpmfcTool };
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */