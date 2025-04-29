/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* ================================================== */
class HtbcConfigData {
  static logoLink = "/";
  static snrSlideText = "Navigation";
  static dnrItemLength = 3;
  static snrItemLength = 9;
}
/* ================================================== */
class HtbcConfigManager {
  static initGenerate() {
    const htbc = document.querySelector(".htbc");
    const htbcFrag = document.createDocumentFragment();
    /* Tob Bar */
    const topBar = document.createElement("div");
    topBar.setAttribute("class", "htbc-top-bar");
    /* Logo */
    const logo = document.createElement("div");
    logo.setAttribute("class", "htbc-logo");
    const logoLink = document.createElement("a");
    logoLink.setAttribute("class", "logo-link");
    logoLink.setAttribute("href", HtbcConfigData.logoLink);
    const logoDev = document.createElement("span");
    logoDev.setAttribute("class", "logo-item logo-dev");
    const logoTa = document.createElement("span");
    logoTa.setAttribute("class", "logo-item logo-ta");
    const logoFacooya = document.createElement("span");
    logoFacooya.setAttribute("class", "logo-item logo-facooya");
    logoLink.append(logoDev, logoTa, logoFacooya);
    logo.append(logoLink);
    /* DNR */
    const dnr = document.createElement("div");
    dnr.setAttribute("class", "htbc-dnr");
    for (let i = 0; i < HtbcConfigData.dnrItemLength; i++) {
      const dnrItem = document.createElement("span");
      dnrItem.setAttribute("class", "dnr-item");
      dnr.append(dnrItem);
    }
    /* SNR */
    const snr = document.createElement("div");
    snr.setAttribute("class", "htbc-snr");
    for (let i = 0; i < HtbcConfigData.snrItemLength; i++) {
      const snrItem = document.createElement("span");
      snrItem.setAttribute("class", "snr-item");
      snr.append(snrItem);
    }
    /* Sge */
    const sge = document.createElement("div");
    sge.setAttribute("class", "htbc-sge-group top-bar-sge");
    topBar.append(logo, dnr, snr, sge);
    /* Append */
    /* htbcFrag.append(logo, dnr, snr); */
    /* :Etc: */
    /* Overlay */
    const overlay = document.createElement("div");
    overlay.setAttribute("class", "htbc-overlay");
    const overlaySge = document.createElement("div");
    overlaySge.setAttribute("class", "htbc-sge-group overlay-sge");
    overlay.append(overlaySge);
    /* ;Etc; */
    /* Append */
    htbcFrag.append(topBar, overlay);
    htbc.append(htbcFrag);
  }
}
/* ================================================== */
class HtbcConfig {
  static initGenerate() {
    HtbcConfigManager.initGenerate();
  }
}
/* ================================================== */
export { HtbcConfig };
/* ================================================== */
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
/* ========================= ;FACOOYA; ========================= */