/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import { DpmscConfig } from "./dpmsc-config.js";
/* -------------------------------------------------- */
import {
  DpmacAccessor
} from "../dpm-hub.js";
/* ================================================== */
class DpmscAccessor {

}
/* ================================================== */
class DpmscController {
  static init() {
    DpmscManager.init();
  }
  static load() {
    DpmscManager.load();
  }
  static resizeDisplay() {
    DpmscManager.resizeDisplay();
  }
}
/* ================================================== */
class DpmscManager {
  static init() {
    DpmscManager.initEvent();
  }
  static load() {
    /* DpmscConfig.viewerCodeReplaceColor(); */
    DpmscConfig.viewerLineNumberItemCreate();
  }
  static resizeDisplay() {

  }
  static initEvent() {
    const dpmsc = document.querySelector(".dpmsc");
    const viewers = dpmsc.querySelectorAll(".viewer");
    /*  */
    viewers.forEach(viewer => {
      const toolWide = viewer.querySelector(".viewer-tool-wide");
      const toolCopy = viewer.querySelector(".viewer-tool-copy");
      /*  */
      toolWide.addEventListener("click", DpmscHandler.viewerToolWideClick);
      toolCopy.addEventListener("click", DpmscHandler.viewerToolCopyClick);
      /*  */
      viewer.isWide = false;
    });
    /*  */
    const snippets = dpmsc.querySelectorAll(".snippet");
    snippets.forEach(snippet => {
      const toolCopy = snippet.querySelector(".snippet-tool-copy");
      toolCopy.addEventListener("click", DpmscHandler.snippetToolCopyClick);
    })
    /*  */
    const chapterLinks = dpmsc.querySelectorAll(".chapter-link");
    chapterLinks.forEach(link => {
      link.addEventListener("click", DpmscHandler.chapterLinkClick);
    });
  }
}
/* ================================================== */
class DpmscHandler {
  static chapterLinkClick(event) {
    const currentTarget = event.currentTarget;
    const hash = currentTarget.hash;
    DpmacAccessor.tocHashReplace(hash);
  }
  /* ================================================== */
  static viewerToolWideClick(event) {
    const toolWide = event.currentTarget;
    const viewer = toolWide.closest(".viewer");
    const lineNumberList = viewer.querySelector(".line-number-list");
    /*  */
    if (viewer.isWide) {
      lineNumberList.style.display = "";
      viewer.isWide = false;
    } else {
      lineNumberList.style.display = "none";
      viewer.isWide = true;
    }
  }
  /* -------------------------------------------------- */
  static viewerToolCopyClick(event) {
    const toolCopy = event.currentTarget;
    const viewer = toolCopy.closest(".viewer");
    const code = viewer.querySelector(".code");
    navigator.clipboard.writeText(code.textContent);
  }
  /* ================================================== */
  static snippetToolCopyClick(event) {
    const toolCopy = event.currentTarget;
    const snippet = toolCopy.closest(".snippet");
    const code = snippet.querySelector(".code");
    navigator.clipboard.writeText(code.textContent);
  }
}
/* ================================================== */
export { DpmscAccessor, DpmscController };
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
/* ========================= ;FACOOYA; ========================= */