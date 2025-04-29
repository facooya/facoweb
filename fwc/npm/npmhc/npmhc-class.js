/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* ================================================== */
import { NpmscAccessor } from "../npm-hub.js";
/*  */
import { NpmhcConfig } from "./npmhc-config.js";
/* ================================================== */
class NpmhcAccessor {

}
/* ================================================== */
class NpmhcController {
  static init() {
    NpmhcManager.init();
  }
  static load() {
    NpmhcManager.load();
  }
  static resizeDisplay() {
    NpmhcManager.resizeDisplay();
  }
  static resizeSensor() {
    NpmhcManager.resizeSensor();
  }
}
/* ================================================== */
class NpmhcManager {
  static init() {
    const items = document.querySelectorAll(".npmhc-tab .item");
    for (let i = 0; i < items.length; i++) {
      items[i].index = i;
    }
    /*  */
    NpmhcLogic.updateTab();
    /*  */
    NpmhcManager.initEvent();
  }
  static load() {

  }
  static resizeDisplay() {

  }
  static resizeSensor() {

  }
  /* ================================================== */
  static initEvent() {
    const items = document.querySelectorAll(".npmhc-tab .item");
    items.forEach(item => {
      item.addEventListener("click", NpmhcHandler.itemClick);
    });
  }
}
/* ================================================== */
class NpmhcHandler {
  static itemClick(event) {
    const item = event.currentTarget;
    const itemIndex = item.index;
    if (itemIndex !== NpmhcConfig.tabIndex) {
      NpmhcConfig.tabIndex = itemIndex;
      NpmhcLogic.updateTab();
    }
  }
}
/* ================================================== */
class NpmhcLogic {
  static updateTab() {
    const tabIndex = NpmhcConfig.tabIndex;
    const tab = document.querySelector(".npmhc-tab");
    const items = tab.querySelectorAll(".item");
    const texts = tab.querySelectorAll(".text");
    const active = "active";
    /*  */
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove(active);
      texts[i].classList.remove(active);
    }
    /*  */
    items[tabIndex].classList.add(active);
    texts[tabIndex].classList.add(active);
    /*  */
    NpmscAccessor.updateNavList();
  }
}
/* ================================================== */
export { NpmhcAccessor, NpmhcController };
/* ================================================== */
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
/* ========================= ;FACOOYA; ========================= */