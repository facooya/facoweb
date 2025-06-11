/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Pager Utilities
 */

const FacoPagerUtils = {
	updateTab(index, facoPagerEvent) {
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
			pageItem.addEventListener("click", facoPagerEvent.onPageItemClick.bind(this));

			const pageText = document.createElement("span");
			pageText.className = "page-text";
			pageText.textContent = i + 1;

			pageItem.append(pageText);
			frag.append(pageItem);
		}
		pageList.append(frag);

		this.dataset.tabIndex = tabIndex;
		this.pageIndex = 0;
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
	},

	updatePagerWide() {
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

	updateResize() {
		FacoPagerUtils.updatePagerWide.call(this);
	}
};

export { FacoPagerUtils };
