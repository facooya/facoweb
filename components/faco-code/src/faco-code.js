/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * The faco-code main
 */

import { FacoCodeData } from "../faco-code-data.js";
import { FacoCodeSyntaxData } from "../faco-code-syntax-data.js";

class FacoCode extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	connectedCallback() {
		Object.keys(FacoCodeData).forEach(classKey => {
			if (this.className === classKey) {
				this.codeData = FacoCodeData[classKey];
			}
		});

		FacoCodeRender.render(this);
		FacoCodeRender.syntaxRender(this);
		FacoCodeRender.codeLineItemRender(this);

		FacoCodeEvent.manager(this);
	}
}

const FacoCodeRender = {
	render(facoCode) {
		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.href = new URL("faco-code.css", import.meta.url).href;

		const codeViewer = document.createElement("div");
		codeViewer.className = "code-viewer";

    const viewerName = document.createElement("h5");
		viewerName.className = "viewer-name";
		viewerName.textContent = facoCode.codeData.fileName;

    const codeBlock = document.createElement("pre");
		codeBlock.className = "code-block";
		codeBlock.textContent = facoCode.codeData.code;

    const viewerHeader = document.createElement("header");
    viewerHeader.className = "viewer-header";
    const viewerTool = document.createElement("ul");
    viewerTool.className = "viewer-tool";
    const viewerToolWide = document.createElement("li");
    viewerToolWide.className = "viewer-tool-wide";
    viewerToolWide.textContent = "wide";
    const viewerToolCopy = document.createElement("li");
    viewerToolCopy.className = "viewer-tool-copy";
    viewerToolCopy.textContent = "copy";
    viewerTool.append(viewerToolWide, viewerToolCopy);
    viewerHeader.append(viewerName, viewerTool);

    const codeContainer = document.createElement("div");
    codeContainer.className = "code-container";
    const codeLineList = document.createElement("ul");
    codeLineList.className = "code-line-list";
    codeContainer.append(codeLineList, codeBlock);

    codeViewer.append(viewerHeader, codeContainer);
		facoCode.shadowRoot.append(link, codeViewer);
	},

	syntaxRender(facoCode) {
		Object.keys(FacoCodeSyntaxData).forEach(syntaxKey => {
			if (facoCode.codeData.syntax === syntaxKey) {
				facoCode.syntaxData = FacoCodeSyntaxData[syntaxKey];
			}
		});
		
		facoCode.syntaxData.syntaxRender(facoCode);
	},

	codeLineItemRender(facoCode) {
    const codeViewer = facoCode.shadowRoot.querySelector(".code-viewer");
    const fragment = document.createDocumentFragment();

    const codeLineList = codeViewer.querySelector(".code-line-list");
    const codeBlock = codeViewer.querySelector(".code-block");
    const codeText = codeBlock.textContent;
    const codeParts = codeText.split("\n");

    for (let i = 0; i < codeParts.length; i++) {
      const codeLineItem = document.createElement("li");
      codeLineItem.className = "code-line-item";
      codeLineItem.textContent = (i + 1).toString();
      fragment.append(codeLineItem);
    }
    codeLineList.append(fragment);
	}
};

const FacoCodeEvent = {
	manager(facoCode) {
		const toolWide = facoCode.shadowRoot.querySelector(".viewer-tool-wide");
		const toolCopy = facoCode.shadowRoot.querySelector(".viewer-tool-copy");
		toolWide.addEventListener("click", this.onViewerToolWideClick);
		toolCopy.addEventListener("click", this.onViewerToolCopyClick);
		toolWide.dataset.isWide = 0;
	},

	onViewerToolWideClick(event) {
    const toolWide = event.currentTarget;
    const codeViewer = toolWide.closest(".code-viewer");
    const codeLineList = codeViewer.querySelector(".code-line-list");
    const codeBlock = codeViewer.querySelector(".code-block");
    const wide = "wide";

    if (Number(toolWide.dataset.isWide)) {
      codeLineList.classList.remove(wide);
      codeBlock.classList.remove(wide);
      toolWide.dataset.isWide = 0;
    } else {
      codeLineList.classList.add(wide);
      codeBlock.classList.add(wide);
      toolWide.dataset.isWide = 1;
    }
	},

	onViewerToolCopyClick(event) {
    const toolCopy = event.currentTarget;
    const codeViewer = toolCopy.closest(".code-viewer");
    const codeBlock = codeViewer.querySelector(".code-block");
    navigator.clipboard.writeText(codeBlock.textContent);
	}
};

const FacoCodeUtils = {
};

customElements.define("faco-code", FacoCode);
