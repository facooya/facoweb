/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Pager main
 */

import { FacoPagerData } from "../faco-pager-data.js";
import { FacoPagerRender } from "./faco-pager-render.js";
import { FacoPagerEvent } from "./faco-pager-event.js";
import { FacoPagerUtils } from "./faco-pager-utils.js";

class FacoPager extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	connectedCallback() {
		FacoPagerRender.render.call(this, FacoPagerData);
		this.tabIndex = 0;

		FacoPagerEvent.initEvents.call(this, FacoPagerUtils);
	}

	set tabIndex(tabIndex) {
		FacoPagerUtils.updateTab.call(this, tabIndex, FacoPagerEvent);
		FacoPagerUtils.updatePagerWide.call(this);
	}

	set pageIndex(pageIndex) {
		FacoPagerUtils.updatePage.call(this, pageIndex);
	}
}

customElements.define("faco-pager", FacoPager);
