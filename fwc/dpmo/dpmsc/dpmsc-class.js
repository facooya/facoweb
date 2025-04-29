/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  BlfUtil,
  BlfConfig,
  DpmscConfig
} from "../../fwc-hub.js";
/*  */
class DpmscAccessor {

}
class DpmscController {
  static init() {
    DpmscManager.init();
  }
  static load() {
    DpmscManager.load();
    DpmscManager.loadEvent();
  }
  static resizeDisplay() {
    DpmscManager.resizeDisplay();
  }
}
class DpmscManager {
  static init() {
    const viewerLineList = document.querySelector(".dpmsc-line-list");
    viewerLineList.isWide = false;
  }
  static load() {
    DpmscConfig.replaceCodeColor();
    DpmscConfig.lineItemGenerate();
  }
  static resizeDisplay() {

  }
  static loadEvent() {
    const dpmscTitleLink = document.querySelectorAll(".dpmsc-title-link");
    for (let tli = 0; tli < dpmscTitleLink.length; tli++) {
      dpmscTitleLink[tli].addEventListener(
        "click",
        DpmscHandler.dpmscTitleLink
      );
    }
    const wideElement = document.querySelector(".dpmsc-viewer-wide");
    const copyElement = document.querySelector(".dpmsc-viewer-copy");
    wideElement.addEventListener("click", DpmscHandler.wide);
    copyElement.addEventListener("click", DpmscHandler.copy);
  }
}
class DpmscHandler {
  static dpmscTitleLink(eventData) {
    const {
      eventCurrentTarget
    } = BlfUtil.getEventData(eventData);
    /*  */
    const hash = eventCurrentTarget.hash;
    const hashElement = document.querySelector(hash);
    history.replaceState(null, null, hash);
    hashElement.scrollIntoView();
  }
  static wide(eventData) {
    /* const viewerLineList = document.querySelector(".dpmsc-line-list"); */
    const currentTarget = eventData.currentTarget;
    const dpmscViewerItem = currentTarget.closest(".dpmsc-viewer-item");
    const lineList = dpmscViewerItem.querySelector(".dpmsc-line-list");
    /*  */
    if (lineList.isWide) {
      lineList.style.display = "";
      lineList.isWide = false;
    } else {
      lineList.style.display = "none";
      lineList.isWide = true;
    }
  }
  static copy() {
    const dpmscViewerCode = document.querySelector(".dpmsc-viewer-code");
    console.log(dpmscViewerCode.textContent);
    navigator.clipboard.writeText(dpmscViewerCode.textContent);
  }
}
/*  */
export {
  DpmscAccessor,
  DpmscController
};
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */