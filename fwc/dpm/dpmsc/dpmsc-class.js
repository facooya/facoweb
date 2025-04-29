/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import { DpmscConfig } from "./dpmsc-config.js";
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
    /* const viewerLineList = document.querySelector(".dpmsc-line-list");
    viewerLineList.isWide = false; */
    /* const dpmsc = document.querySelector(".dpmsc");
    const viewerSections = dpmsc.querySelectorAll(".viewer-section");
    for (let i = 0; i < viewerSections.length; i++) {
      viewerSections[i].isWide = false;
    } */
    DpmscManager.initEvent();
  }
  static load() {
    /* DpmscConfig.replaceCodeColor();
    DpmscConfig.lineItemGenerate(); */
    DpmscConfig.viewerCodeReplaceColor();
    DpmscConfig.viewerNumberItemCreate();
  }
  static resizeDisplay() {

  }
  static initEvent() {
    /* const dpmscTitleLink = document.querySelectorAll(".dpmsc-title-link");
    for (let tli = 0; tli < dpmscTitleLink.length; tli++) {
      dpmscTitleLink[tli].addEventListener(
        "click",
        DpmscHandler.dpmscTitleLink
      );
    }
    const wideElement = document.querySelector(".dpmsc-viewer-wide");
    const copyElement = document.querySelector(".dpmsc-viewer-copy");
    wideElement.addEventListener("click", DpmscHandler.wide);
    copyElement.addEventListener("click", DpmscHandler.copy); */
    /*  */
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
  }
}
/* ================================================== */
class DpmscHandler {
  static dpmscTitleLink(event) {
    const currentTarget = event.currentTarget;
    /*  */
    const hash = currentTarget.hash;
    const hashElement = document.querySelector(hash);
    history.replaceState(null, null, hash);
    hashElement.scrollIntoView();
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
  /* static viewerToolWideClick(eventData) {
    /* const viewerLineList = document.querySelector(".dpmsc-line-list"); 
    const currentTarget = eventData.currentTarget;
    const dpmscViewerItem = currentTarget.closest(".dpmsc-viewer-item");
    const lineList = dpmscViewerItem.querySelector(".dpmsc-line-list");
    /*  
    if (lineList.isWide) {
      lineList.style.display = "";
      lineList.isWide = false;
    } else {
      lineList.style.display = "none";
      lineList.isWide = true;
    }
  } */
  /* static viewerToolCopyClick() {
    const dpmscViewerCode = document.querySelector(".dpmsc-viewer-code");
    console.log(dpmscViewerCode.textContent);
    navigator.clipboard.writeText(dpmscViewerCode.textContent);
  } */
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