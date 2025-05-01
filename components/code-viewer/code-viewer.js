/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* ================================================== */
const CodeViewerController = {
  init() {
    CodeViewerManager.init();
  }
};
/* ================================================== */
const CodeViewerManager = {
  init() {
    CodeViewerUtils.generator();
    CodeViewerUtils.codeLineItemGenerator();
    CodeViewerManager.initEvent();
  },
  /* ================================================== */
  initEvent() {
    const codeViewers = document.querySelectorAll(".code-viewer");
    codeViewers.forEach(codeViewer => {
      const toolWide = codeViewer.querySelector(".viewer-tool-wide");
      const toolCopy = codeViewer.querySelector(".viewer-tool-copy");
      toolWide.addEventListener("click", CodeViewerHandler.viewerToolWideClick);
      toolCopy.addEventListener("click", CodeViewerHandler.viewerToolCopyClick);
      codeViewer.isWide = false;
    });
  }
};
/* ================================================== */
const CodeViewerHandler = {
  viewerToolWideClick(event) {
    const viewerToolWide = event.currentTarget;
    const codeViewer = viewerToolWide.closest(".code-viewer");
    const codeLineList = codeViewer.querySelector(".code-line-list");
    const codeBlock = codeViewer.querySelector(".code-block");
    const wide = "wide";
    /*  */
    if (codeViewer.isWide) {
      codeLineList.classList.remove(wide);
      codeBlock.classList.remove(wide);
      codeViewer.isWide = false;
    } else {
      codeLineList.classList.add(wide);
      codeBlock.classList.add(wide);
      codeViewer.isWide = true;
    }
  },
  /* -------------------------------------------------- */
  viewerToolCopyClick(event) {
    const viewerToolCopy = event.currentTarget;
    const codeViewer = viewerToolCopy.closest(".code-viewer");
    const codeBlock = codeViewer.querySelector(".code-block");
    navigator.clipboard.writeText(codeBlock.textContent);
  }
};
/* ================================================== */
const CodeViewerUtils = {
  codeLineItemGenerator() {
    const codeViewers = document.querySelectorAll(".code-viewer");
    codeViewers.forEach(codeViewer => {
      const fragment = document.createDocumentFragment();
      const codeLineList = codeViewer.querySelector(".code-line-list");
      const codeBlock = codeViewer.querySelector(".code-block");
      const codeText = codeBlock.textContent;
      const codeParts = codeText.split("\n");
      /*  */
      for (let i = 0; i < codeParts.length; i++) {
        const codeLineItem = document.createElement("li");
        codeLineItem.className = "code-line-item";
        codeLineItem.textContent = (i + 1).toString();
        fragment.append(codeLineItem);
      }
      codeLineList.append(fragment);
    });
  },
  /* ================================================== */
  generator() {
    const codeViewers = document.querySelectorAll(".code-viewer");
    codeViewers.forEach(codeViewer => {
      const viewerName = codeViewer.querySelector(".viewer-name");
      const codeBlock = codeViewer.querySelector(".code-block");
      /*  */
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
      /*  */
      const codeContainer = document.createElement("div");
      codeContainer.className = "code-container";
      const codeLineList = document.createElement("ul");
      codeLineList.className = "code-line-list";
      codeContainer.append(codeLineList, codeBlock);
      /*  */
      codeViewer.append(viewerHeader, codeContainer);
    });
  }
};
/* ================================================== */
/* ========================= > Code ========================= */
window.addEventListener("DOMContentLoaded", CodeViewerController.init);
/* ========================= < Code ========================= */
/* ========================= > FACOOYA ========================= */
/* NOTE
 * <div class="code-viewer">
 *   <h5 class="viewer-name">test.c</h5>
 * <pre class="code-block code-c"><code>#include &lt;stdio.h&gt;
 * 
 * int main() {
 *   return 0;
 * }</code></pre>
 * </div>
 * 
 * <div class="code-viewer">
 *   <header class="viewer-header">
 *     <h5 class="viewer-name">test.c</h5>
 *     <ul class="viewer-tool">
 *       <li class="viewer-tool-wide">wide</li>
 *       <li class="viewer-tool-copy">copy</li>
 *     </ul>
 *   </header>
 *   <div class="code-container">
 *     <ul class="code-line-list"></ul>
 * <pre class="code-block code-c"><code>#include &lt;stdio.h&gt;
 * 
 * int main() {
 *   return 0;
 * }</code></pre>
 *   </div>
 * </div>
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
/* ========================= < FACOOYA ========================= */