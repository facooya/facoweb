/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Pager event
 */

const FacoPagerEvent = {
	initEvents(facoPagerUtils) {
		/* tab */
		const tabItems = this.shadowRoot.querySelectorAll(".tab-item");

		for (let i = 0; i < tabItems.length; i++) {
			tabItems[i].dataset.index = i;
			tabItems[i].addEventListener("click", FacoPagerEvent.onTabItemClick.bind(this));
		}

		/* pager: control */
		const controlItems = this.shadowRoot.querySelectorAll(".control-item");

		for (let i = 0; i < controlItems.length; i++) {
			controlItems[i].dataset.index = i;
			controlItems[i].addEventListener("click", FacoPagerEvent.onControlItemClick.bind(this));
		}

		/* window */
		this.dataset.resizeId = 0;
		window.addEventListener("resize", FacoPagerEvent.onResize.bind(this, facoPagerUtils));
	},

	onTabItemClick(event) {
		const tabIndex = Number(event.currentTarget.dataset.index);
		if (tabIndex === Number(this.dataset.tabIndex)) return;

		this.tabIndex = tabIndex;
	},

	onPageItemClick(event) {
		const pageIndex = Number(event.currentTarget.dataset.index);
		if (pageIndex === Number(this.dataset.pageIndex)) return;

		this.pageIndex = pageIndex;
	},

	onControlItemClick(event) {
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

	onResize(facoPagerUtils) {
    clearTimeout(Number(this.dataset.resizeId));
    this.dataset.resizeId = setTimeout(
      facoPagerUtils.updateResize.bind(this),
      100
    );
	}
};

export { FacoPagerEvent };
