/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Pager event
 */

const FacoPagerEvent = {
	initEvents(facoPagerUtils) {
		/* Tab */
		const tabItems = this.shadowRoot.querySelectorAll(".tab-item");

		for (let i = 0; i < tabItems.length; i++) {
			tabItems[i].dataset.index = i;
			tabItems[i].addEventListener("click", FacoPagerEvent.tabItemClick.bind(this));
		}

		/* control */
		const controlItems = this.shadowRoot.querySelectorAll(".control-item");

		for (let i = 0; i < controlItems.length; i++) {
			controlItems[i].dataset.index = i;
			controlItems[i].addEventListener("click", FacoPagerEvent.controlItemClick.bind(this));
		}

		/* window */
		window.addEventListener("resize", FacoPagerEvent.windowResize.bind(this, facoPagerUtils));
	},

	tabItemClick(event) {
		const tabIndex = Number(event.currentTarget.dataset.index);
		if (tabIndex === Number(this.dataset.tabIndex)) return;

		this.tabIndex = tabIndex;
		this.pageIndex = 0;
	},

	pageItemClick(event) {
		const pageIndex = Number(event.currentTarget.dataset.index);
		if (pageIndex === Number(this.dataset.pageIndex)) return;

		this.pageIndex = pageIndex;
	},

	controlItemClick(event) {
		const controlIndex = Number(event.currentTarget.dataset.index);
		const pageMaxIndex = Number(this.dataset.pageMaxIndex);
		let pageIndex = Number(this.dataset.pageIndex);

		if (controlIndex === 0 && pageIndex !== 0) {
			this.pageIndex = 0;
		} else if (controlIndex === 1 && pageIndex > 0) {
			this.pageIndex = --pageIndex;
		} else if (controlIndex === 2 && pageIndex < pageMaxIndex) {
			this.pageIndex = ++pageIndex;
		} else if (controlIndex === 3 && pageIndex !== pageMaxIndex) {
			this.pageIndex = pageMaxIndex;
		}
	},

	windowResize(facoPagerUtils, event) {
    clearTimeout(Number(this.dataset.resizeId));
    this.dataset.resizeId = setTimeout(
      facoPagerUtils.windowResize.bind(this),
      100
    );
	}
};

export { FacoPagerEvent };
