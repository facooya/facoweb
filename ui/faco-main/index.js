/* SPDX-License-Identifier: MIT
 *
 * Copyright 2026 Facooya and Fanone Facooya
 */

import {indexStyle} from "./index-style.js";

class FacoMain extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		if (!document.adoptedStyleSheets.includes(indexStyle)) {
			document.adoptedStyleSheets.push(indexStyle);
		}
	}
}

customElements.define("faco-main", FacoMain);
