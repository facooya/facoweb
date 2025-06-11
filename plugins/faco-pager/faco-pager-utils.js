/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Pager Utilities
 */

const FacoPagerUtils = {
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

	updateControlItem() {
		const root = this.shadowRoot;
		const controlItems = root.querySelectorAll(".control-item");
		const controlIcons = root.querySelectorAll(".control-icon");
		const enabled = "enabled";

		for (let i = 0; i < 4; i++) {
			controlItems[i].classList.add(enabled);
			controlIcons[i].classList.add(enabled);
		}

		const pageIndex = Number(this.dataset.pageIndex);
		const pageMaxIndex = Number(this.dataset.pageMaxIndex);

		if (pageMaxIndex >= 1) {
			if (pageIndex === 0) {
				for (let i = 0; i < 2; i++) {
					controlItems[i].classList.remove(enabled);
					controlIcons[i].classList.remove(enabled);
				}
			} else if (pageIndex === pageMaxIndex) {
				for (let i = 2; i < 4; i++) {
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
	},

	windowResize() {
		FacoPagerUtils.updatePagerWide.call(this);
	}
};

export { FacoPagerUtils };
