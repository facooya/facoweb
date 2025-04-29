/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  BlfUtil,
  BlfConfig,
  DpmhcConfig
} from "../../fwc-hub.js";
/*  */
class DpmhcAccessor {
  
}
class DpmhcController {
  static init() {
    DpmhcManager.init();
  }
  static load() {
    DpmhcManager.load();
    DpmhcManager.loadEvent();
  }
  static resizeDisplay() {
    DpmhcManager.resizeDisplay();
  }
}
class DpmhcManager {
  static init() {

  }
  static load() {
    /* const dpmscIndexLink = document.querySelectorAll(".dpmsc-title-link"); */
    const tocIndex = document.querySelectorAll(".toc-index");
    const scrollY = window.scrollY;
    for (let i = 0; i < tocIndex.length; i++) {
      const rect = tocIndex[i].getBoundingClientRect();
      DpmhcConfig.rectCache["a" + i] = rect.y + scrollY - 64;
    }
    console.log(DpmhcConfig.rectCache);
  }
  static resizeDisplay() {

  }
  static loadEvent() {
    const dpmhcIndexLink = document.querySelectorAll(".dpmhc-index-link");
    /*  */
    for (let tbi = 0; tbi < dpmhcIndexLink.length; tbi++) {
      dpmhcIndexLink[tbi].addEventListener(
        "click",
        DpmhcHandler.dpmhcIndexLink
      );
    }
    /*  */
    /* window.addEventListener("scroll", DpmhcHandler.indexLocation); */
  }
}
class DpmhcHandler {
  static dpmhcIndexLink(eventData) {
    const currentTarget = eventData.currentTarget;
    /*  */
    const hash = currentTarget.hash;
    const hashElement = document.querySelector(hash);
    history.replaceState(null, null, hash);
    hashElement.scrollIntoView();
  }
  static indexLocation_Old() {
    /* const dpmhcIndexLink = document.querySelectorAll(".dpmhc-index-link"); */
    /* let current = null;
    for (let i = 0; i < dpmhcIndexLink.length; i++) {
      const rect = dpmhcIndexLink[i].getBoundingClientRect();
      if (rect.y < 64) {
        current = dpmhcIndexLink[i];
      }
    } */
    /* const dpmhcTitleLink = document.querySelector("#developer-note");
    const dpmhcTitleLinkRect = dpmhcTitleLink.getBoundingClientRect();
    console.log(dpmhcTitleLinkRect);
    console.log("window: ", window.scrollY); */
    const count = Object.keys(DpmhcConfig.rectCache).length;
    for (let i = 0; i < count; i++) {
      const value = DpmhcConfig.rectCache["a" + i];
      if (value > window.scrollY) {
        /* console.log(value);
        console.log(window.scrollY); */
        break;
      }
    }
  }
}
/*  */
export {
  DpmhcAccessor,
  DpmhcController
};
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */