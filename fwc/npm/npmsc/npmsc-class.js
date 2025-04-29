/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* ================================================== */
import { NpmhcConfig } from "../npm-hub.js";
/* ================================================== */
class NpmscAccessor {
  static updateNavList() {
    /* NpmhcLogic.updateTeb => this */
    NpmscLogic.updateNavList();
  }
}
/* ================================================== */
class NpmscController {
  static init() {
    NpmscManager.init();
  }
  static load() {
    NpmscManager.load();
  }
  static resizeDisplay() {
    NpmscManager.resizeDisplay();
  }
  static resizeSensor() {
    NpmscManager.resizeSensor();
  }
}
/* ================================================== */
class NpmscManager {
  static init() {

  }
  static load() {

  }
  static resizeDisplay() {

  }
  static resizeSensor() {

  }
}
/* ================================================== */
class NpmscLogic {
  static updateNavList() {
    const tabIndex = NpmhcConfig.tabIndex;
    const nav = document.querySelector(".npmsc-nav");
    const lists = nav.querySelectorAll(".list");
    const active = "active";
    /*  */
    lists.forEach(list => {
      list.classList.remove(active);
    });
    lists[tabIndex].classList.add(active);
  }
}
/* ================================================== */
export { NpmscAccessor, NpmscController };
/* ================================================== */
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
/* ========================= ;FACOOYA; ========================= */