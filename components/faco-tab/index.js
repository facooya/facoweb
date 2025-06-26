/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * The faco-tab index
 */

class FacoTab extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    FacoTabRender.render(this);

    this.dataset.tabIndex = 0;
    FacoTabEvent.manager(this);
  }
}

const FacoTabRender = {
  render(facoTab) {
    /* style */
    const style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = new URL("index.css", import.meta.url).href;

    /* title */
    const title = document.createElement("h1");
    title.className = "title";
    title.textContent = FacoTabData.title;

    /* tab */
    const tab = document.createElement("nav");
    tab.className = "tab";

    const tabList = document.createElement("ul");
    tabList.className = "tab-list";

    /* panel */
    const panel = document.createElement("nav");
    panel.className = "panel";

    Object.entries(FacoTabData.tabs).forEach(([tabLabelData, panelData], index) => {
      /* tab */
      const tabItem = document.createElement("li");
      tabItem.className = "tab-item";
      tabItem.dataset.index = index;

      const tabLabel = document.createElement("h2");
      tabLabel.className = "tab-label";
      tabLabel.textContent = tabLabelData;

      /* panel */
      const panelList = document.createElement("ul");
      panelList.className = "panel-list";

      Object.entries(panelData).forEach(([boxLabelData, boxData]) => {
        /* panel */
        const panelItem = document.createElement("li");
        panelItem.className = "panel-item";

        const box = document.createElement("a");
        box.className = "box";
        box.href = boxData.link;

        const boxLabel = document.createElement("p");
        boxLabel.className = "box-label";
        boxLabel.textContent = boxLabelData;

        const boxText = document.createElement("p");
        boxText.className = "box-text";
        boxText.textContent = boxData.text;

        box.append(boxLabel, boxText);
        panelItem.append(box);
        panelList.append(panelItem);
      });
      panel.append(panelList);

      /* tab */
      tabItem.append(tabLabel);
      tabList.append(tabItem);
    });
    tab.append(tabList);

    facoTab.shadowRoot.append(style, title, tab, panel);
  }
};

const FacoTabEvent = {
  manager(facoTab) {
    facoTab.onTabItemClick = FacoTabEvent.onTabItemClick.bind(facoTab);

    const tabItems = facoTab.shadowRoot.querySelectorAll(".tab-item");
    tabItems.forEach(item => {
      item.addEventListener("click", facoTab.onTabItemClick);
    });

    facoTab.onTabItemClick({
      currentTarget: tabItems[0]
    });
  },

  onTabItemClick(event) {
    const index = event.currentTarget.dataset.index;
    if (Number(this.dataset.tabIndex) === index) return;

    const root = this.shadowRoot;
    const tabItems = root.querySelectorAll(".tab-item");
    const tabLabels = root.querySelectorAll(".tab-label");
    const panelLists = root.querySelectorAll(".panel-list");
    const active = "active";

    /* tab */
    for (let i = 0; i < tabItems.length; i++) {
      tabItems[i].classList.remove(active);
      tabLabels[i].classList.remove(active);
    }
    tabItems[index].classList.add(active);
    tabLabels[index].classList.add(active);

    /* panel */
    panelLists.forEach(list => {
      list.classList.remove(active);
    });
    panelLists[index].classList.add(active);

    this.dataset.tabIndex = index;
  }
};

customElements.define("faco-tab", FacoTab);
