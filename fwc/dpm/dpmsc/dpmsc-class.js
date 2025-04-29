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
    DpmscConfig.viewerCodeReplaceColor();
    DpmscConfig.viewerNumberItemCreate();
  }
  static resizeDisplay() {

  }
  static initEvent() {
    const dpmsc = document.querySelector(".dpmsc");
    const viewerSections = dpmsc.querySelectorAll(".viewer-section");
    /*  */
    viewerSections.forEach(viewer => {
      const toolWide = viewer.querySelector(".viewer-tool-wide");
      const toolCopy = viewer.querySelector(".viewer-tool-copy");
      /*  */
      toolWide.addEventListener("click", DpmscHandler.viewerToolWideClick);
      toolCopy.addEventListener("click", DpmscHandler.viewerToolCopyClick);
      /*  */
      viewer.isWide = false;
    });
    /*  */
    const articleHashs = dpmsc.querySelectorAll(".article-hash");
    articleHashs.forEach(hash => {
      hash.addEventListener("click", DpmscHandler.articleHashClick);
    });
  }
}
/* ================================================== */
class DpmscHandler {
  /* static dpmscTitleLink(event) {
    const currentTarget = event.currentTarget;
    const hash = currentTarget.hash;
    const hashElement = document.querySelector(hash);
    history.replaceState(null, null, hash);
    hashElement.scrollIntoView();
  } */
  static articleHashClick(event) {
    const currentTarget = event.currentTarget;
    const hash = currentTarget.hash;
    DpmacAccessor.tocHashReplace(hash);
    /* const hashElement = document.querySelector(hash);
    history.replaceState(null, null, hash);
    hashElement.scrollIntoView(); */
  }
  /* -------------------------------------------------- */
  static viewerToolWideClick(event) {
    const toolWide = event.currentTarget;
    const viewerSection = toolWide.closest(".viewer-section");
    const numberList = viewerSection.querySelector(".number-list");
    /*  */
    if (viewerSection.isWide) {
      numberList.style.display = "";
      viewerSection.isWide = false;
    } else {
      numberList.style.display = "none";
      viewerSection.isWide = true;
    }
  }
  /* -------------------------------------------------- */
  static viewerToolCopyClick(event) {
    const toolCopy = event.currentTarget;
    const viewerSection = toolCopy.closest(".viewer-section");
    const code = viewerSection.querySelector(".code");
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