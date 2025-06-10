/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Pager event
 */

const FacoPagerEvent = {
	initEvents() {
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
	},

	tabItemClick(event) {
		const tabIndex = event.currentTarget.dataset.index;
		if (tabIndex === this.dataset.tabIndex) { return; }

		this.tabIndex = tabIndex;
		this.pageIndex = 0;
	},

	pageItemClick(event) {
		const pageIndex = event.currentTarget.dataset.index;
		if (pageIndex === this.dataset.pageIndex) { return; }

		this.pageIndex = pageIndex;
	},

	controlItemClick(event) {
		const pageIndex = this.dataset.pageIndex;
		const pageMaxIndex = this.dataset.pageMaxIndex;

		switch (controlItem.dataset.index) {
			case 0:
				if (pageIndex !== 0) {
					this.dataset.pageIndex = 0;
				}
				break;

			case 1:
				if (pageIndex > 0) {
					this.dataset.pageIndex = pageIndex--;
				}
				break;

			case 2:
				if (pageIndex < pageMaxIndex) {
					this.dataset.pageIndex = pageIndex++;
				}
				break;

			case 3:
				if (pageIndex !== PageMaxIndex) {
					this.dataset.pageIndex = pageMaxIndex;
				}
				break;
		}
	}
};

export { FacoPagerEvent };
