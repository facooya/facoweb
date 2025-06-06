/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */

const FacoTabAccessor = {

};

const FacoTabController = {
  init() {
    FacoTabManager.init();
  }
};

const FacoTabManager = {
  init() {
    FacoTabUtils.generator();
    const facoTab = document.querySelector(".faco-tab");
    const facoTabBtnItems = document.querySelectorAll(".faco-tab-hdr .faco-tab-btn-item");
    facoTab.tabIndex = 0;
    for (let i = 0; i < facoTabBtnItems.length; i++) {
      facoTabBtnItems[i].index = i;
    }
    FacoTabUtils.updateTab();
    FacoTabManager.initEvent();
  },

  initEvent() {
    const facoTabBtnItems = document.querySelectorAll(".faco-tab-hdr .faco-tab-btn-item");
    facoTabBtnItems.forEach(item => {
      item.addEventListener("click", FacoTabHandler.tabBtnItemClick);
    });
  }
};

const FacoTabHandler = {
  tabBtnItemClick(event) {
    const facoTab = document.querySelector(".faco-tab");
    const facoTabBtnItem = event.currentTarget;
    const facoTabBtnItemIndex = facoTabBtnItem.index;

    if (facoTabBtnItemIndex !== facoTab.tabIndex) {
      facoTab.tabIndex = facoTabBtnItemIndex;
      FacoTabUtils.updateTab();
    }
  }
};

const FacoTabUtils = {
  updateTab() {
    const facoTab = document.querySelector(".faco-tab");
    const facoTabBtnItems = facoTab.querySelectorAll(".faco-tab-hdr .faco-tab-btn-item");
    const facoTabBtnTexts = facoTab.querySelectorAll(".faco-tab-hdr .faco-tab-btn-text");
    const facoTabPanelLists = facoTab.querySelectorAll(".faco-tab-body .faco-tab-panel-list");
    const facoTabActive = "faco-tab-active";

		/* button */
    for (let i = 0; i < facoTabBtnItems.length; i++) {
      facoTabBtnItems[i].classList.remove(facoTabActive);
      facoTabBtnTexts[i].classList.remove(facoTabActive);
    }
    facoTabBtnItems[facoTab.tabIndex].classList.add(facoTabActive);
    facoTabBtnTexts[facoTab.tabIndex].classList.add(facoTabActive);

		/* panel */
    facoTabPanelLists.forEach(list => {
      list.classList.remove(facoTabActive);
    });
    facoTabPanelLists[facoTab.tabIndex].classList.add(facoTabActive);
  },

  generator() {
    const facoTabGroup = FacoTabData.group;
		const facoTab = document.querySelector(".faco-tab");

    /* Tab Header */
    const facoTabHdr = document.createElement("header");
    facoTabHdr.className = "faco-tab-hdr";
    const facoTabTitle = document.createElement("h1");
    facoTabTitle.className = "faco-tab-title";
    facoTabTitle.textContent = FacoTabData.title;
    const facoTabBtnWrap = document.createElement("nav");
    facoTabBtnWrap.className = "faco-tab-btn-wrap";
    const facoTabBtnList = document.createElement("ul");
    facoTabBtnList.className = "faco-tab-btn-list";

    /* Tab Body */
    const facoTabBody = document.createElement("section");
    facoTabBody.className = "faco-tab-body";
    const facoTabPanelWrap = document.createElement("nav");
    facoTabPanelWrap.className = "faco-tab-panel-wrap";

    Object.entries(facoTabGroup).forEach(([facoTabBtnTextData, facoTabPanelData]) => {
      const facoTabBtnItem = document.createElement("li");
      facoTabBtnItem.className = "faco-tab-btn-item";
      const facoTabBtnText = document.createElement("h2");
      facoTabBtnText.className = "faco-tab-btn-text";
      facoTabBtnText.textContent = facoTabBtnTextData;

      /* Tab Panel */
      const facoTabPanelList = document.createElement("ul");
      facoTabPanelList.className = "faco-tab-panel-list";

      Object.entries(facoTabPanelData).forEach(([facoTabPanelItemText, facoTabPanelItemData]) => {
        const facoTabPanelItem = document.createElement("li");
        facoTabPanelItem.className = "faco-tab-panel-item";
        const facoTabPanelLink = document.createElement("a");
        facoTabPanelLink.className = "faco-tab-panel-link";
        facoTabPanelLink.href = facoTabPanelItemData.link;
        const facoTabPanelText = document.createElement("p");
        facoTabPanelText.className = "faco-tab-panel-text";
        facoTabPanelText.textContent = facoTabPanelItemText;
        const facoTabPanelSubText = document.createElement("p");
        facoTabPanelSubText.className = "faco-tab-panel-sub-text";
        facoTabPanelSubText.textContent = facoTabPanelItemData.subText;

        facoTabPanelLink.append(facoTabPanelText, facoTabPanelSubText);
        facoTabPanelItem.append(facoTabPanelLink);
        facoTabPanelList.append(facoTabPanelItem);
      });
      facoTabPanelWrap.append(facoTabPanelList);

      facoTabBtnItem.append(facoTabBtnText);
      facoTabBtnList.append(facoTabBtnItem);
    });
    facoTabBtnWrap.append(facoTabBtnList);

    facoTabHdr.append(facoTabTitle, facoTabBtnWrap);
    facoTabBody.append(facoTabPanelWrap);

    facoTab.append(facoTabHdr, facoTabBody);
  }
};

window.addEventListener("DOMContentLoaded", FacoTabController.init);
