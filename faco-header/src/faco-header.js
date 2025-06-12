/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Header main
 */

import { FacoHeaderData } from "../faco-header-data.js";
import { FacoHeaderRender } from "./faco-header-render.js";

class FacoHeader extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	connectedCallback() {
		FacoHeaderRender.render.call(this, FacoHeaderData);
	}

	set mainMenu(isOpen) {
	}

	set drawerMenu(isOpen) {
	}
}

customElements.define("faco-header", FacoHeader);
