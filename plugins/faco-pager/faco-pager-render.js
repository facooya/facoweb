/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Pager render
 */

const FacoPagerRender = {
	render(data) {
		const root = this.shadowRoot;

	  /* style */
	  const style = document.createElement("link");
	  style.rel = "stylesheet";
	  style.href = new URL("faco-pager.css", import.meta.url).href;

    /* title */
    const title = document.createElement("h2");
    title.className = "title";
	  title.textContent = data.title;

    /* tab */
    const tab = document.createElement("nav");
    tab.className = "tab";

    const tabList = document.createElement("ul");
    tabList.className = "tab-list";

    /* panel */
    const panel = document.createElement("nav");
    panel.className = "panel";

    Object.entries(data.group).forEach(([tabTextData, panelData]) => {
      /* tab */
      const tabItem = document.createElement("li");
      tabItem.className = "tab-item";

      const tabText = document.createElement("div");
      tabText.className = "tab-text";
      tabText.textContent = tabTextData;

      tabItem.append(tabText);
      tabList.append(tabItem);

      /* panel */
      const panelList = document.createElement("ul");
      panelList.className = "panel-list";

      Object.entries(panelData).forEach(([panelTextData, panelItemData]) => {
        const panelItem = document.createElement("li");
        panelItem.className = "panel-item";

        const panelLink = document.createElement("a");
        panelLink.className = "panel-link";
        panelLink.href = panelItemData.link;

        const panelText = document.createElement("p");
        panelText.className = "panel-text"
        panelText.textContent = panelTextData;

        const panelSubText = document.createElement("p");
        panelSubText.className = "panel-sub-text";
        panelSubText.textContent = panelItemData.subText;

        panelLink.append(panelText, panelSubText);
        panelItem.append(panelLink);
        panelList.append(panelItem);
      });

      panel.append(panelList);
    });

    tab.append(tabList);

	  /* pager */
    const pager = document.createElement("nav");
    pager.className = "pager";

	  /* pager page */
    const pageList = document.createElement("ul");
    pageList.className = "page-list";
	  pager.append(pageList);

	  /* pager control */
    const controlGroup = {
      "left": ["first", "previous"],
      "right": ["next", "last"]
    }

    Object.entries(controlGroup).forEach(([position, types]) => {
      const control = document.createElement("div");
      control.className = `control ${position}`;

      types.forEach(type => {
        const controlItem = document.createElement("div");
        controlItem.className = `control-item ${type}`;

        const controlIcon = document.createElement("span");
        controlIcon.className = `control-icon ${type}`;

        controlItem.append(controlIcon);
        control.append(controlItem);
      });

      pager.append(control);
    });

    root.append(style, title, tab, panel, pager);
  },

	updateRender(facoPagerEvent) {
		const root = this.shadowRoot;
		const pageList = root.querySelector(".page-list");
		const pageItems = pageList.querySelectorAll(".page-item");

		/* remove */
		if (pageItems[0]) {
			pageItems.forEach(item => {
				item.remove();
			});
		}

		/* create */
		for (let i = 0; i <= this.dataset.pageMaxIndex; i++) {
			const pageItem = document.createElement("li");
			pageItem.className = "page-item";
			pageItem.dataset.index = i;
			pageItem.addEventListener("click", facoPagerEvent.pageItemClick.bind(this));

			const pageText = document.createElement("span");
			pageText.className = "page-text";
			pageText.textContent = i + 1;
			
			pageItem.append(pageText);
			pageList.append(pageItem);
		}

		root.append(pageList);
	}
};

export { FacoPagerRender };
