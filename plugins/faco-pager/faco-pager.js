/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Pager main
 */

import { FacoPagerData } from "./faco-pager-data.js";
import { FacoPagerRender } from "./faco-pager-render.js";
import { FacoPagerEvent } from "./faco-pager-event.js";
import { FacoPagerUtils } from "./faco-pager-utils.js";

class FacoPager extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	connectedCallback() {
		const data = FacoPagerData;

		FacoPagerRender.render.call(this, data);
		this.tabIndex = 0;
		this.pageIndex = 0;

		this.dataset.resizeId = 0;

		FacoPagerEvent.initEvents.call(this, FacoPagerUtils);
	}

	set tabIndex(tabIndex) {
		const root = this.shadowRoot;
		const active = "active";

		/* tab */
		const tabItems = root.querySelectorAll(".tab-item");
		const tabTexts = root.querySelectorAll(".tab-text");

		for (let i = 0; i < tabItems.length; i++) {
			tabItems[i].classList.remove(active);
			tabTexts[i].classList.remove(active);
		}

		tabItems[tabIndex].classList.add(active);
		tabTexts[tabIndex].classList.add(active);

		/* panel */
		const panelLists = root.querySelectorAll(".panel-list");

		panelLists.forEach(list => {
			list.classList.remove(active);
		});

		panelLists[tabIndex].classList.add(active);

		this.dataset.tabIndex = tabIndex;

		/* pageMaxIndex */
		const panelItems = panelLists[tabIndex].querySelectorAll(".panel-item");
		let pageMaxIndex = Math.floor(panelItems.length / 5);

		if (panelItems.length % 5 === 0) {
			pageMaxIndex--;
		}

		this.dataset.pageMaxIndex = pageMaxIndex;

		const facoPagerEvent = FacoPagerEvent;
		FacoPagerRender.pageItemRender.call(this, facoPagerEvent);

		FacoPagerUtils.updatePagerWide.call(this);
	}

	set pageIndex(pageIndex) {
		const root = this.shadowRoot;
		const active = "active";

		/* panel */
		const panelLists = root.querySelectorAll(".panel-list");
		const panelItems = panelLists[this.dataset.tabIndex].querySelectorAll(".panel-item");

		panelItems.forEach(item => {
			item.classList.remove(active);
		});

		const startIndex = Number(pageIndex) * 5;
		const endIndex = (Number(pageIndex) + 1) * 5;

		for (let i = startIndex; i < endIndex; i++) {
			if (!panelItems[i]) {
				break;
			}
			panelItems[i].classList.add(active);
		}

		/* page */
		const pageItems = root.querySelectorAll(".page-item");

		pageItems.forEach(item => {
			item.classList.remove(active);
		});

		pageItems[pageIndex].classList.add(active);

		this.dataset.pageIndex = pageIndex;

		FacoPagerUtils.updateControlItem.call(this);
	}
}

customElements.define("faco-pager", FacoPager);
