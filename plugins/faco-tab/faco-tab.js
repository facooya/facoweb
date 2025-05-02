/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* ================================================== */
const TabViewAccessor = {

};
/* ================================================== */
const TabViewController = {
  init() {
    TabViewManager.init();
  }
};
/* ================================================== */
const TabViewManager = {
  init() {
    TabViewUtils.generator();
    const tabView = document.querySelector(".tab-view");
    const tabItems = document.querySelectorAll(".tab-header .tab-item");
    tabView.tabIndex = 0;
    for (let i = 0; i < tabItems.length; i++) {
      tabItems[i].index = i;
    }
    TabViewUtils.updateTab();
    TabViewManager.initEvent();
  },
  /* ================================================== */
  initEvent() {
    const tabItems = document.querySelectorAll(".tab-header .tab-item");
    tabItems.forEach(item => {
      item.addEventListener("click", TabViewHandler.tabItemClick);
    });
  }
};
/* ================================================== */
const TabViewHandler = {
  tabItemClick(event) {
    const tabView = document.querySelector(".tab-view");
    const tabItem = event.currentTarget;
    const itemIndex = tabItem.index;
    if (itemIndex !== tabView.tabIndex) {
      tabView.tabIndex = itemIndex;
      TabViewUtils.updateTab();
    }
  }
};
/* ================================================== */
const TabViewUtils = {
  updateTab() {
    const tabView = document.querySelector(".tab-view");
    const tabHeader = document.querySelector(".tab-header");
    const tabItems = tabHeader.querySelectorAll(".tab-item");
    const tabTexts = tabHeader.querySelectorAll(".tab-text");
    const active = "active";
    /*  */
    for (let i = 0; i < tabItems.length; i++) {
      tabItems[i].classList.remove(active);
      tabTexts[i].classList.remove(active);
    }
    tabItems[tabView.tabIndex].classList.add(active);
    tabTexts[tabView.tabIndex].classList.add(active);
    /*  */
    TabViewUtils.updateSection();
  },
  /* ================================================== */
  updateSection() {
    const tabView = document.querySelector(".tab-view");
    const section = tabView.querySelector(".tab-section");
    const lists = section.querySelectorAll(".list");
    const active = "active";
    /*  */
    lists.forEach(list => {
      list.classList.remove(active);
    });
    lists[tabView.tabIndex].classList.add(active);
  },
  generator() {
    const group = TabViewData.group;
    const main = document.querySelector(".main");
    const tabView = document.createElement("div");
    tabView.className = "tab-view";
    /* ------------------------------ */
    /* Tab Header */
    const tabHeader = document.createElement("header");
    tabHeader.className = "tab-header";
    const title = document.createElement("h1");
    title.className = "title";
    title.textContent = TabViewData.title;
    const tab = document.createElement("nav");
    tab.className = "tab";
    const tabList = document.createElement("ul");
    tabList.className = "tab-list";
    /* ------------------------------ */
    /* Tab Section */
    const tabSection = document.createElement("section");
    tabSection.className = "tab-section";
    const navigation = document.createElement("nav");
    navigation.className = "navigation";
    /* ------------------------------ */
    Object.entries(group).forEach(([tabTextData, sectionData]) => {
      const tabItem = document.createElement("li");
      tabItem.className = "tab-item";
      const tabText = document.createElement("h2");
      tabText.className = "tab-text";
      tabText.textContent = tabTextData;
      /* ------------------------------ */
      /* Tab Section */
      const list = document.createElement("ul");
      list.className = "list";
      /* ------------------------------ */
      Object.entries(sectionData).forEach(([itemText, itemData]) => {
        const item = document.createElement("li");
        item.className = "item";
        const link = document.createElement("a");
        link.className = "link";
        link.href = itemData.link;
        const text = document.createElement("p");
        text.className = "text";
        text.textContent = itemText;
        const subText = document.createElement("p");
        subText.className = "sub-text";
        subText.textContent = itemData.subText;
        /*  */
        link.append(text, subText);
        item.append(link);
        list.append(item);
      });
      navigation.append(list);
      /* ------------------------------ */
      tabItem.append(tabText);
      tabList.append(tabItem);
    });
    tab.append(tabList);
    tabHeader.append(title, tab);
    tabSection.append(navigation);
    tabView.append(tabHeader, tabSection);
    /* ------------------------------ */
    main.append(tabView);
  }
};
/* ================================================== */
/* ========================= > Code ========================= */
window.addEventListener("DOMContentLoaded", TabViewController.init);
/* ========================= < Code ========================= */
/* ========================= > FACOOYA ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
/* ========================= < FACOOYA ========================= */