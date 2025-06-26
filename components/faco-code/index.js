/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * The faco-code index
 */

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
    FacoCodeRender.viewLineItemRender(this);

    FacoCodeEvent.manager(this);
  }
}

const FacoCodeRender = {
  render(facoCode) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = new URL("index.css", import.meta.url).href;

    /* header */
    const header = document.createElement("header");
    header.className = "header";

    /* header: title */
    const title = document.createElement("h5");
    title.className = "title";
    title.textContent = facoCode.codeData.fileName;

    /* header: tool */
    const toolList = document.createElement("ul");
    toolList.className = "tool-list";
    const toolItemWide = document.createElement("li");
    toolItemWide.className = "tool-item-wide";
    toolItemWide.textContent = "wide";
    const toolItemCopy = document.createElement("li");
    toolItemCopy.className = "tool-item-copy";
    toolItemCopy.textContent = "copy";
    toolList.append(toolItemWide, toolItemCopy);
    header.append(title, toolList);

    const view = document.createElement("div");
    view.className = "view";
    const viewLineList = document.createElement("ul");
    viewLineList.className = "view-line-list";
    const viewContent = document.createElement("pre");
    viewContent.className = "view-content";
    viewContent.textContent = facoCode.codeData.code;
    view.append(viewLineList, viewContent);

    facoCode.shadowRoot.append(link, header, view);
  },

  syntaxRender(facoCode) {
    Object.keys(FacoCodeSyntaxData).forEach(syntaxKey => {
      if (facoCode.codeData.syntax === syntaxKey) {
        facoCode.syntaxData = FacoCodeSyntaxData[syntaxKey];
      }
    });
    
    facoCode.syntaxData.syntaxRender(facoCode);
  },

  viewLineItemRender(facoCode) {
    const view = facoCode.shadowRoot.querySelector(".view");
    const frag = document.createDocumentFragment();

    const viewLineList = view.querySelector(".view-line-list");
    const viewContent = view.querySelector(".view-content");
    const viewText = viewContent.textContent;
    const viewParts = viewText.split("\n");

    for (let i = 0; i < viewParts.length; i++) {
      const viewLineItem = document.createElement("li");
      viewLineItem.className = "view-line-item";
      viewLineItem.textContent = (i + 1).toString();
      frag.append(viewLineItem);
    }
    viewLineList.append(frag);
  }
};

const FacoCodeEvent = {
  manager(facoCode) {
    facoCode.onToolItemWideClick = this.onToolItemWideClick.bind(facoCode);
    facoCode.onToolItemCopyClick = this.onToolItemCopyClick.bind(facoCode);

    const toolItemWide = facoCode.shadowRoot.querySelector(".tool-item-wide");
    const toolItemCopy = facoCode.shadowRoot.querySelector(".tool-item-copy");
    toolItemWide.addEventListener("click", facoCode.onToolItemWideClick);
    toolItemCopy.addEventListener("click", facoCode.onToolItemCopyClick);

    toolItemWide.dataset.isWide = 0;
  },

  onToolItemWideClick(event) {
    const toolItemWide = event.currentTarget;
    const viewLineList = this.shadowRoot.querySelector(".view-line-list");
    const viewContent = this.shadowRoot.querySelector(".view-content");
    const wide = "wide";

    if (Number(toolItemWide.dataset.isWide)) {
      viewLineList.classList.remove(wide);
      viewContent.classList.remove(wide);
      toolItemWide.dataset.isWide = 0;
    } else {
      viewLineList.classList.add(wide);
      viewContent.classList.add(wide);
      toolItemWide.dataset.isWide = 1;
    }
  },

  onToolItemCopyClick(event) {
    const toolItemCopy = event.currentTarget;
    const viewContent = this.shadowRoot.querySelector(".view-content");
    navigator.clipboard.writeText(viewContent.textContent);
  }
};

customElements.define("faco-code", FacoCode);
