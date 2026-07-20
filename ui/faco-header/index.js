/* SPDX-License-Identifier: MIT
 *
 * Copyright 2025-2026 Facooya and Fanone Facooya
 */

import {styleTopBar} from "./style-top-bar.js";
import {styleMainMenu} from "./style-main-menu.js";
import {styleDrawerMenu} from "./style-drawer-menu.js";
import {FacoHeaderRender} from "./render.js";
import {FacoHeaderEvent} from "./event.js";

class FacoHeader extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.adoptedStyleSheets = [styleTopBar, styleMainMenu, styleDrawerMenu];
	}

	connectedCallback() {
		FacoHeaderRender.render(this);

		this.dataset.resizeId = 0;

		this.touchType;
		this.screenType;
		this.dataset.prevScreenType = this.dataset.screenType;

		FacoHeaderEvent.init(this);
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
}

customElements.define("faco-header", FacoHeader);
