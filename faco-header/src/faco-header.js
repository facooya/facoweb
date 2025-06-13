/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Header main
 */

import { FacoHeaderData } from "../faco-header-data.js";
import { FacoHeaderRender } from "./faco-header-render.js";
import { FacoHeaderEvent } from "./faco-header-event.js";
import { FacoHeaderUtils } from "./faco-header-utils.js";

class FacoHeader extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	connectedCallback() {
		FacoHeaderRender.render.call(this, FacoHeaderData);

		this.dataset.resizeId = 0;

		this.touchType;
		this.screenType;

		this.dataset.mainMenuState = 0;
		this.dataset.drawerMenuState = 0;
		this.mainMenuState = 0;
		this.drawerMenuState = 0;

		// init, load
		// resize

		FacoHeaderEvent.initEvents.call(this);
	}

	get touchType() {
		if (window.matchMedia("(hover: none)").matches) {
			this.dataset.touchType = 1;
		} else {
			this.dataset.touchType = 0;
		}
	}

	get screenType() {
    const screenTypes = [
      "(max-width: 767px)",
      "(min-width: 768px) and (max-width: 1279px)",
      "(min-width: 1280px)"
    ];

    for (let i = 0; i < screenTypes.length; i++) {
      if (window.matchMedia(screenTypes[i]).matches) {
        this.dataset.screenType = i + 1;
        break;
      }
    }
	}

	set mainMenuState(shouldOpen) {
		const mainMenuState = Number(this.dataset.mainMenuState);
		if (mainMenuState === shouldOpen) return;
		const screenType = Number(this.dataset.screenType);

		let action = "remove";
		if (shouldOpen) {
			action = "add";
		}

		if (screenType === 1) {
			FacoHeaderUtils.MainMenu.stateMobile.call(this, shouldOpen, action);
		}

		this.dataset.mainMenuState = shouldOpen;
	}

	set drawerMenuState(shouldOpen) {
		const drawerMenuState = Number(this.dataset.drawerMenuState);
		if (drawerMenuState === shouldOpen) return;
		const screenType = Number(this.dataset.screenType);

		let action = "remove";
		if (shouldOpen) {
			action = "add";
		}

		if (screenType === 1) {
			// FacoHeaderUtils.DrawerMenu.stateMobile.call(this, shouldOpen, action);

			if (shouldOpen) {
				if (Number(this.dataset.mainMenuState)) {
					this.mainMenuState = 0;
				}
				FacoHeaderUtils.TopBar.updateOverlay.call(this, 2);
			} else {
				// drawerMenuItemCloseAll();
				FacoHeaderUtils.TopBar.updateOverlay.call(this);
			}
		} else {
			// Other size ...
		}

		const active = "active";
		const gridItems = this.shadowRoot.querySelectorAll(".grid-item");
		gridItems.forEach(item => {
			item.classList[action](active);
		});

		const drawerMenu = this.shadowRoot.querySelector(".drawer-menu");
		const gridIconActive = "grid-icon-active";
		drawerMenu.classList[action](gridIconActive);

		if (Number(this.dataset.screenType) >= 2) {
			// if main.classList[action](gridIconActive);
      // if footer.classList[action](gridIconActive);
      // topBar.classList[action](gridIconActive);
			if (Number(this.dataset.screenType) === 3) {
				// mainMenu.classList[action](gridIconActive);
			}
		}

		this.dataset.drawerMenuState = shouldOpen;
	}
}

customElements.define("faco-header", FacoHeader);
