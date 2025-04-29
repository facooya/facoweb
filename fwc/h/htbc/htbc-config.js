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
  static generate() {
    const htbc = document.querySelector(".htbc");
    const htbcFrag = document.createDocumentFragment();
    /* Logo */
    const logoWrapper = document.createElement("div");
    logoWrapper.setAttribute("class", "htbc-logo-wrapper");
    const logoContainer = document.createElement("a");
    logoContainer.setAttribute("class", "htbc-logo-container");
    logoContainer.setAttribute("href", HtbcConfigData.logoLink);
    const devLogoItem = document.createElement("span");
    devLogoItem.setAttribute("class", "htbc-dev-logo-item");
    const taLogoItem = document.createElement("span");
    taLogoItem.setAttribute("class", "htbc-ta-logo-item");
    const facooyaLogoItem = document.createElement("span");
    facooyaLogoItem.setAttribute("class", "htbc-facooya-logo-item");
    logoContainer.append(devLogoItem, taLogoItem, facooyaLogoItem);
    logoWrapper.append(logoContainer);
    /* Dnr */
    const dnrContainer = document.createElement("div");
    dnrContainer.setAttribute("class", "htbc-dnr-container");
    for (let i = 0; i < HtbcConfigData.dnrItemLength; i++) {
      const dnrItem = document.createElement("span");
      dnrItem.setAttribute("class", "htbc-dnr-item");
      dnrContainer.append(dnrItem);
    }
    /* Snr */
    const snrContainer = document.createElement("div");
    snrContainer.setAttribute("class", "htbc-snr-container");
    for (let i = 0; i < HtbcConfigData.snrItemLength; i++) {
      const snrItem = document.createElement("span");
      snrItem.setAttribute("class", "htbc-snr-item");
      snrContainer.append(snrItem);
    }
    /*  */
    htbcFrag.append(logoWrapper, dnrContainer, snrContainer);
    /* Etc */
    const snrSlideText = document.createElement("div");
    snrSlideText.setAttribute("class", "htbc-snr-slide-text");
    snrSlideText.textContent = HtbcConfigData.snrSlideText;
    const sge = document.createElement("div");
    sge.setAttribute("class", "htbc-sge");
    const overlay = document.createElement("div");
    overlay.setAttribute("class", "htbc-overlay");
    const overlaySge = document.createElement("div");
    overlaySge.setAttribute("class", "htbc-overlay-sge");
    overlay.append(overlaySge);
    /*  */
    htbcFrag.append(overlay, snrSlideText, sge);
    htbc.append(htbcFrag);
  }
}
class HtbcConfig {
  static generate() {
    HtbcConfigManager.generate();
  }
}
/* ================================================== */
export { HtbcConfig };
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */