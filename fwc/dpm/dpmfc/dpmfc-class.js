/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import { DpmfcConfig } from "./dpmfc-config.js";
import { DpmfcTool } from "./dpmfc-tool.js";
/* -------------------------------------------------- */
import {
  DpmacAccessor
} from "../dpm-hub.js";
/* ================================================== */
class DpmfcAccessor {
  static getDpmfcHandler() {
    return DpmfcHandler;
  }
}
/* ================================================== */
class DpmfcController {
  static init() {
    DpmfcManager.init();
  }
  static load() {
    DpmfcManager.load();
  }
  static resizeDisplay() {
    DpmfcManager.resizeDisplay();
  }
  static resizeSensor() {
    DpmfcManager.resizeSensor();
  }
}
/* ================================================== */
class DpmfcManager {
  static init() {

  }
  static load() {
    /* Tab */
    DpmfcTool.updateTabItem();
    /* Navigation */
    DpmfcTool.updateNavigationList();
    DpmfcTool.updateNavigationItem();
    /* Config */
    DpmfcConfig.updatePageMaxIndex();
    /* Pagiantion */
    DpmfcLogic.paginationNumberItemCreateLogic();
    DpmfcTool.updatePaginationControlItem();
    DpmfcTool.updatePaginationNumberItem();
    DpmfcTool.updateWidePagination();
    /* Event */
    DpmfcManager.loadEvent();
  }
  static resizeDisplay() {
    DpmfcTool.updateWidePagination();
  }
  static resizeSensor() {
    DpmfcTool.updateWidePagination();
  }
  /* -------------------------------------------------- */
  static loadEvent() {
    /* Title */
    const hash = document.querySelector(".dpmfc-title .hash");
    hash.addEventListener("click", DpmfcHandler.titleHashClick);
    /* Tab */
    const tab = document.querySelector(".dpmfc-tab");
    const tabItems = tab.querySelectorAll(".item");
    for (let i = 0; i < tabItems.length; i++) {
      tabItems[i].index = i;
      tabItems[i].addEventListener("click", DpmfcHandler.tabItemClick);
    }
    /* Pagination Control */
    const pagination = document.querySelector(".dpmfc-pagination");
    const leftItems = pagination.querySelectorAll(".left-control .item");
    const rightItems = pagination.querySelectorAll(".right-control .item");
    for (let i = 0; i < 2; i++) {
      leftItems[i].index = i;
      leftItems[i].addEventListener("click", DpmfcHandler.paginationControlItemClick);

      rightItems[i].index = i + 2;
      rightItems[i].addEventListener("click", DpmfcHandler.paginationControlItemClick);
    }
  }
}
/* ================================================== */
class DpmfcHandler {
  /* Title */
  static titleHashClick(event) {
    const titleHash = event.currentTarget;
    const hash = titleHash.hash;
    DpmacAccessor.tocHashReplace(hash);
  }
  /* ================================================== */
  /* Tab */
  static tabItemClick(event) {
    const item = event.currentTarget;
    /* HMI */
    if (item.index === DpmfcConfig.tabIndex) { return; }
    /* Reset */
    DpmfcTool.resetNavigationItem();
    /* Config */
    DpmfcConfig.tabIndex = item.index;
    DpmfcConfig.pageIndex = 0;
    DpmfcConfig.updatePageMaxIndex();
    /* Tab */
    DpmfcTool.updateTabItem();
    /* Naviagation */
    DpmfcTool.updateNavigationList();
    DpmfcTool.updateNavigationItem();
    /* Pagination */
    DpmfcLogic.paginationNumberItemCreateLogic();
    DpmfcTool.updatePaginationControlItem();
    DpmfcTool.updatePaginationNumberItem();
    DpmfcTool.updateWidePagination();
  }
  /* ================================================== */
  /* Pagination Number */
  static paginationNumberItemClick(event) {
    const numberItem = event.currentTarget;
    DpmfcConfig.pageIndex = numberItem.index;
    /*  */
    DpmfcTool.updateNavigationItem();
    DpmfcTool.updatePaginationControlItem();
    DpmfcTool.updatePaginationNumberItem();
  }
  /* -------------------------------------------------- */
  /* Pagination Control */
  static paginationControlItemClick(event) {
    const item = event.currentTarget;
    const itemType = item.index;
    const pageIndex = DpmfcConfig.pageIndex;
    const pageMaxIndex = DpmfcConfig.pageMaxIndex;
    /*  */
    switch (itemType) {
      case 0:
        if (pageIndex !== 0) {
          DpmfcConfig.pageIndex = 0;
        }
        break;
      case 1:
        if (pageIndex > 0) {
          DpmfcConfig.pageIndex--;
        }
        break;
      case 2:
        if (pageIndex < pageMaxIndex) {
          DpmfcConfig.pageIndex++;
        }
        break;
      case 3:
        if (pageIndex !== pageMaxIndex) {
          DpmfcConfig.pageIndex = pageMaxIndex;
        }
        break;
    }
    if (DpmfcConfig.pageIndex !== pageIndex) {
      DpmfcTool.updatePaginationControlItem();
      DpmfcTool.updatePaginationNumberItem();
      DpmfcTool.updateNavigationItem();
    }
  }
}
class DpmfcLogic {
  static paginationNumberItemCreateLogic() {
    const numberItem = document.querySelector(".dpmfc-pagination .number-item");
    if (numberItem) { DpmfcConfig.paginationNumberItemRemove(); }
    DpmfcConfig.paginationNumberItemCreate();
    DpmfcLogic.paginationNumberItemEvent();
  }
  static paginationNumberItemEvent() {
    /* Number Item Add Event */
    const pagination = document.querySelector(".dpmfc-pagination");
    const numberItems = pagination.querySelectorAll(".number-item");
    for (let i = 0; i < numberItems.length; i++) {
      numberItems[i].index = i;
      numberItems[i].addEventListener("click", DpmfcHandler.paginationNumberItemClick);
    }
  }
}
export { DpmfcAccessor, DpmfcController };
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */