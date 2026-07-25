/* SPDX-License-Identifier: MIT
 *
 * Copyright 2026 Facooya and Fanone Facooya
 */

const indexStyle = new CSSStyleSheet({baseURL: import.meta.url});
indexStyle.replaceSync(String.raw`
faco-main {
	display: block;
	padding: 16px;
	background-color: #ffffff;
	transition: margin-right 300ms ease;
}

faco-main.grid-icon-active {
	margin-right: 320px !important;
}

@media (min-width: 768px) {
	faco-main {
		padding: 24px;
	}
}

@media (min-width: 1280px) {
	faco-main {
		padding: 32px;
	}
}
`);

export {indexStyle};
