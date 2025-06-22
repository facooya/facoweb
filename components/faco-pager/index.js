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
		FacoPagerRender.render.call(this, FacoPagerData);

		FacoPagerEvent.init.call(this);
		FacoPagerUtils.updateTab.call(this, 0);
	}
}

const FacoPagerRender = {
	render(data) {
		const root = this.shadowRoot;

	  /* style */
	  const style = document.createElement("link");
	  style.rel = "stylesheet";
	  style.href = new URL("index.css", import.meta.url).href;

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
  }
};

const FacoPagerEvent = {
	init() {
		/* window */
		this.dataset.resizeId = 0;
		this.setTimerResize = FacoPagerEvent.setTimerResize.bind(this);
		this.onResize = FacoPagerEvent.onResize.bind(this);
		window.addEventListener("resize", this.setTimerResize);

		/* tab */
		this.onTabItemClick = FacoPagerEvent.onTabItemClick.bind(this);
		const tabItems = this.shadowRoot.querySelectorAll(".tab-item");

		for (let i = 0; i < tabItems.length; i++) {
			tabItems[i].dataset.index = i;
			tabItems[i].addEventListener("click", FacoPagerEvent.onTabItemClick.bind(this));
		}

		/* pager: page */
		this.onPageItemClick = FacoPagerEvent.onPageItemClick.bind(this);

		/* pager: control */
		this.onControlItemClick = FacoPagerEvent.onControlItemClick.bind(this);
		const controlItems = this.shadowRoot.querySelectorAll(".control-item");

		for (let i = 0; i < controlItems.length; i++) {
			controlItems[i].dataset.index = i;
			controlItems[i].addEventListener("click", this.onControlItemClick);
		}
	},

	setTimerResize() {
    clearTimeout(Number(this.dataset.resizeId));
    this.dataset.resizeId = setTimeout(
      this.onResize,
      200
    );
	},

	onResize() {
		FacoPagerUtils.updateWidePager.call(this);
	},

	onTabItemClick(event) {
		const tabIndex = Number(event.currentTarget.dataset.index);
		if (tabIndex === Number(this.dataset.tabIndex)) return;

		FacoPagerUtils.updateTab.call(this, tabIndex);
	},

	onPageItemClick(event) {
		const pageIndex = Number(event.currentTarget.dataset.index);
		if (pageIndex === Number(this.dataset.pageIndex)) return;

		FacoPagerUtils.updatePage.call(this, pageIndex);
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

		FacoPagerUtils.updatePage.call(this, pageIndex);
	}
};

const FacoPagerUtils = {
	updateTab(index) {
		const tabIndex = Number(index);

		/* tab */
		const tabItems = this.shadowRoot.querySelectorAll(".tab-item");
		const tabTexts = this.shadowRoot.querySelectorAll(".tab-text");
		const active = "active";

		for (let i = 0; i < tabItems.length; i++) {
			tabItems[i].classList.remove(active);
			tabTexts[i].classList.remove(active);
		}

		tabItems[tabIndex].classList.add(active);
		tabTexts[tabIndex].classList.add(active);

		/* panel */
		const panelLists = this.shadowRoot.querySelectorAll(".panel-list");

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

		this.dataset.pageMaxIndex = calcPageMaxIndex;

		/* render pager: pageItems */
		const frag = document.createDocumentFragment();
		const pageList = this.shadowRoot.querySelector(".page-list");
		const pageItems = pageList.querySelectorAll(".page-item");

		if (pageItems[0]) {
			pageItems.forEach(item => { item.remove(); });
		}

		for (let i = 0; i <= calcPageMaxIndex; i++) {
			const pageItem = document.createElement("li");
			pageItem.className = "page-item";
			pageItem.dataset.index = i;
			pageItem.addEventListener("click", this.onPageItemClick);

			const pageText = document.createElement("span");
			pageText.className = "page-text";
			pageText.textContent = i + 1;

			pageItem.append(pageText);
			frag.append(pageItem);
		}
		pageList.append(frag);

		this.dataset.tabIndex = tabIndex;

		FacoPagerUtils.updateWidePager.call(this);
		FacoPagerUtils.updatePage.call(this, 0);
	},

	updateWidePager() {
		const html = document.documentElement;
		const htmlWidth = html.clientWidth;
		const wideX = "wide-x";

		const paddingX = 16;
		const gap = 16;
		const itemWidth = 40;

		const controlItemCount = 4;
		const pageItemCount = Number(this.dataset.pageMaxIndex) + 1;
		const totalItemCount = controlItemCount + pageItemCount;

		let calcWidth = totalItemCount * itemWidth;
		calcWidth += gap * (totalItemCount - 1);
		calcWidth += paddingX * 2;

		const pager = this.shadowRoot.querySelector(".pager");

		if (calcWidth < htmlWidth) {
			pager.classList.add(wideX);
		} else {
			pager.classList.remove(wideX);
		}
	},

	updatePage(index) {
		const pageIndex = Number(index);
		const tabIndex = Number(this.dataset.tabIndex);
		const panelLists = this.shadowRoot.querySelectorAll(".panel-list");
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
		const pageItems = this.shadowRoot.querySelectorAll(".page-item");
		pageItems.forEach(item => {
			item.classList.remove(active);
		});
		pageItems[pageIndex].classList.add(active);

		/* pager: control */
		const pageMaxIndex = Number(this.dataset.pageMaxIndex);
		const controlItems = this.shadowRoot.querySelectorAll(".control-item");
		const controlIcons = this.shadowRoot.querySelectorAll(".control-icon");
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

		this.dataset.pageIndex = pageIndex;
	}
};

customElements.define("faco-pager", FacoPager);
