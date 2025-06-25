/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * The faco-header index
 */

import { FacoHeaderRender } from "./render.js";
import { FacoHeaderEvent } from "./event.js";

class FacoHeader extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
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
