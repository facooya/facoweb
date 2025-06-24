/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * The faco-pager index
 */

class FacoPager extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	connectedCallback() {
		FacoPagerRender.render(this);

		FacoPagerEvent.manager(this);
		FacoPagerUtils.updateTab(this, 0);
	}
}

const FacoPagerRender = {
	render(facoPager) {
	  /* style */
	  const style = document.createElement("link");
	  style.rel = "stylesheet";
	  style.href = new URL("index.css", import.meta.url).href;

    /* title */
    const title = document.createElement("h2");
    title.className = "title";
	  title.textContent = FacoPagerData.title;

    /* tab */
    const tab = document.createElement("nav");
    tab.className = "tab";

    const tabList = document.createElement("ul");
    tabList.className = "tab-list";

    /* panel */
    const panel = document.createElement("nav");
    panel.className = "panel";

    Object.entries(FacoPagerData.tabs).forEach(([tabLabelData, panelData]) => {
      /* tab */
      const tabItem = document.createElement("li");
      tabItem.className = "tab-item";

      const tabLabel = document.createElement("div");
      tabLabel.className = "tab-label";
      tabLabel.textContent = tabLabelData;

      tabItem.append(tabLabel);
      tabList.append(tabItem);

      /* panel */
      const panelList = document.createElement("ul");
      panelList.className = "panel-list";

      Object.entries(panelData).forEach(([boxLabelData, boxData]) => {
        const panelItem = document.createElement("li");
        panelItem.className = "panel-item";

        const box = document.createElement("a");
        box.className = "box";
        box.href = boxData.link;

        const boxLabel = document.createElement("p");
        boxLabel.className = "box-label"
        boxLabel.textContent = boxLabelData;

        const boxText = document.createElement("p");
        boxText.className = "box-text";
        boxText.textContent = boxData.text;

        box.append(boxLabel, boxText);
        panelItem.append(box);
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

    facoPager.shadowRoot.append(style, title, tab, panel, pager);
  }
};

const FacoPagerEvent = {
	manager(facoPager) {
		/* bind */
		facoPager.onResize = FacoPagerEvent.onResize.bind(facoPager);
		facoPager._onResize = FacoPagerEvent._onResize.bind(facoPager);
		facoPager.onTabItemClick = FacoPagerEvent.onTabItemClick.bind(facoPager);
		facoPager.onPageItemClick = FacoPagerEvent.onPageItemClick.bind(facoPager);
		facoPager.onControlItemClick = FacoPagerEvent.onControlItemClick.bind(facoPager);

		/* window */
		facoPager.dataset.resizeId = 0;
		window.addEventListener("resize", facoPager.onResize);

		/* tab */
		const tabItems = facoPager.shadowRoot.querySelectorAll(".tab-item");
		for (let i = 0; i < tabItems.length; i++) {
			tabItems[i].dataset.index = i;
			tabItems[i].addEventListener("click", facoPager.onTabItemClick);
		}

		/* pager: control */
		const controlItems = facoPager.shadowRoot.querySelectorAll(".control-item");
		for (let i = 0; i < controlItems.length; i++) {
			controlItems[i].dataset.index = i;
			controlItems[i].addEventListener("click", facoPager.onControlItemClick);
		}
	},

	onResize() {
    clearTimeout(Number(this.dataset.resizeId));
    this.dataset.resizeId = setTimeout(
      this._onResize,
      200
    );
	},

	_onResize() {
		FacoPagerUtils.updateWidePager(this);
	},

	onTabItemClick(event) {
		const tabIndex = Number(event.currentTarget.dataset.index);
		if (tabIndex === Number(this.dataset.tabIndex)) return;

		FacoPagerUtils.updateTab(this, tabIndex);
	},

	onPageItemClick(event) {
		const pageIndex = Number(event.currentTarget.dataset.index);
		if (pageIndex === Number(this.dataset.pageIndex)) return;

		FacoPagerUtils.updatePage(this, pageIndex);
	},

	onControlItemClick(event) {
		const controlIndex = Number(event.currentTarget.dataset.index);
		const pageMaxIndex = Number(this.dataset.pageMaxIndex);
		let pageIndex = Number(this.dataset.pageIndex);

		if (controlIndex === 0 && pageIndex !== 0) {
			pageIndex = 0;
		} else if (controlIndex === 1 && pageIndex > 0) {
			pageIndex--;
		} else if (controlIndex === 2 && pageIndex < pageMaxIndex) {
			pageIndex++;
		} else if (controlIndex === 3 && pageIndex !== pageMaxIndex) {
			pageIndex = pageMaxIndex;
		}

		FacoPagerUtils.updatePage(this, pageIndex);
	}
};

const FacoPagerUtils = {
	updateTab(facoPager, index) {
		const tabIndex = Number(index);

		/* tab */
		const tabItems = facoPager.shadowRoot.querySelectorAll(".tab-item");
		const tabLabels = facoPager.shadowRoot.querySelectorAll(".tab-label");
		const active = "active";

		for (let i = 0; i < tabItems.length; i++) {
			tabItems[i].classList.remove(active);
			tabLabels[i].classList.remove(active);
		}

		tabItems[tabIndex].classList.add(active);
		tabLabels[tabIndex].classList.add(active);

		/* panel */
		const panelLists = facoPager.shadowRoot.querySelectorAll(".panel-list");

		panelLists.forEach(list => {
			list.classList.remove(active);
		});

		panelLists[tabIndex].classList.add(active);

		/* set pageMaxIndex */
		const panelItems = panelLists[tabIndex].querySelectorAll(".panel-item");
		let calcPageMaxIndex = Math.floor(panelItems.length / 5);

		if (panelItems.length % 5 === 0) {
			calcPageMaxIndex--;
		}

		facoPager.dataset.pageMaxIndex = calcPageMaxIndex;

		/* render pager: pageItems */
		const frag = document.createDocumentFragment();
		const pageList = facoPager.shadowRoot.querySelector(".page-list");
		const pageItems = pageList.querySelectorAll(".page-item");

		if (pageItems[0]) {
			pageItems.forEach(item => { item.remove(); });
		}

		for (let i = 0; i <= calcPageMaxIndex; i++) {
			const pageItem = document.createElement("li");
			pageItem.className = "page-item";
			pageItem.dataset.index = i;
			pageItem.addEventListener("click", facoPager.onPageItemClick);

			const pageLabel = document.createElement("span");
			pageLabel.className = "page-label";
			pageLabel.textContent = i + 1;

			pageItem.append(pageLabel);
			frag.append(pageItem);
		}
		pageList.append(frag);

		facoPager.dataset.tabIndex = tabIndex;

		FacoPagerUtils.updateWidePager(facoPager);
		FacoPagerUtils.updatePage(facoPager, 0);
	},

	updateWidePager(facoPager) {
		const html = document.documentElement;
		const htmlWidth = html.clientWidth;
		const wideX = "wide-x";

		const paddingX = 16;
		const gap = 16;
		const itemWidth = 40;

		const controlItemCount = 4;
		const pageItemCount = Number(facoPager.dataset.pageMaxIndex) + 1;
		const totalItemCount = controlItemCount + pageItemCount;

		let calcWidth = totalItemCount * itemWidth;
		calcWidth += gap * (totalItemCount - 1);
		calcWidth += paddingX * 2;

		const pager = facoPager.shadowRoot.querySelector(".pager");

		if (calcWidth < htmlWidth) {
			pager.classList.add(wideX);
		} else {
			pager.classList.remove(wideX);
		}
	},

	updatePage(facoPager, index) {
		const pageIndex = Number(index);
		const tabIndex = Number(facoPager.dataset.tabIndex);
		const panelLists = facoPager.shadowRoot.querySelectorAll(".panel-list");
		const panelItems = panelLists[tabIndex].querySelectorAll(".panel-item");
		const active = "active";

		panelItems.forEach(item => {
			item.classList.remove(active);
		});

		const startIndex = pageIndex * 5;
		const endIndex = (pageIndex + 1) * 5;
		for (let i = startIndex; i < endIndex; i++) {
			if (!panelItems[i]) {
				break;
			}
			panelItems[i].classList.add(active);
		}

		/* pager: page */
		const pageItems = facoPager.shadowRoot.querySelectorAll(".page-item");
		pageItems.forEach(item => {
			item.classList.remove(active);
		});
		pageItems[pageIndex].classList.add(active);

		/* pager: control */
		const pageMaxIndex = Number(facoPager.dataset.pageMaxIndex);
		const controlItems = facoPager.shadowRoot.querySelectorAll(".control-item");
		const controlIcons = facoPager.shadowRoot.querySelectorAll(".control-icon");
		const enabled = "enabled";

		for (let i = 0; i < 4; i++) {
			controlItems[i].classList.add(enabled);
			controlIcons[i].classList.add(enabled);
		}

		if (pageMaxIndex >= 1) {
			if (pageIndex === 0) {
				for (let i = 0; i < 2; i++) { /* left */
					controlItems[i].classList.remove(enabled);
					controlIcons[i].classList.remove(enabled);
				}
			} else if (pageIndex === pageMaxIndex) {
				for (let i = 2; i < 4; i++) { /* right */
					controlItems[i].classList.remove(enabled);
					controlIcons[i].classList.remove(enabled);
				}
			}
		} else {
			for (let i = 0; i < 4; i++) {
				controlItems[i].classList.remove(enabled);
				controlIcons[i].classList.remove(enabled);
			}
		}

		facoPager.dataset.pageIndex = pageIndex;
	}
};

customElements.define("faco-pager", FacoPager);
