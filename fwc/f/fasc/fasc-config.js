/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* ================================================== */
class FascConfigData {
  static logoLink = "#dev.facooya.com";
  /* -------------------------------------------------- */
  static textDevLinkHtml = `<a href="#dev.facooya.com" class="text-dev-link">dev.facooya.com</a>`
  static textHtml = `Welcome to ${FascConfigData.textDevLinkHtml},
    a programming-related site.
    This site provides information promptly.
    We believe our services will assist in launching humanity to space.`;
  /* -------------------------------------------------- */
  static aLink = "#facooya";
  static bLink = "#facooya";
  static cLink = "#facooya";
}
/* ================================================== */
class FascConfigManager {
  static initGenerate() {
    const frag = document.createDocumentFragment();
    const fasc = document.querySelector(".fasc");
    /* ------------------------------ */
    /* Logo */
    const logo = document.createElement("div");
    logo.setAttribute("class", "fasc-logo");
    const logoLink = document.createElement("a");
    logoLink.setAttribute("class", "logo-link");
    logoLink.setAttribute("href", FascConfigData.logoLink);
    const devIcon = document.createElement("span");
    devIcon.setAttribute("class", "logo-icon dev-icon");
    const taIcon = document.createElement("span");
    taIcon.setAttribute("class", "logo-icon ta-icon");
    const facooyaIcon = document.createElement("span");
    facooyaIcon.setAttribute("class", "logo-icon facooya-icon");
    logoLink.append(devIcon, taIcon, facooyaIcon);
    logo.append(logoLink);
    /* ------------------------------ */
    /* Text */
    const text = document.createElement("p");
    text.setAttribute("class", "fasc-text");
    text.innerHTML = FascConfigData.textHtml;
    /* ------------------------------ */
    /* Social */
    const social = document.createElement("div");
    social.setAttribute("class", "fasc-social");
    const aLink = document.createElement("a");
    aLink.setAttribute("class", "social-link a-link");
    aLink.setAttribute("href", FascConfigData.aLink);
    aLink.setAttribute("target", "_blank");
    const aIcon = document.createElement("span");
    aIcon.setAttribute("class", "social-icon a-icon");
    aLink.append(aIcon);
    /* ------------------------------ */
    const bLink = document.createElement("a");
    bLink.setAttribute("class", "social-link b-link");
    bLink.setAttribute("href", FascConfigData.bLink);
    bLink.setAttribute("target", "_blank");
    const bIcon = document.createElement("span");
    bIcon.setAttribute("class", "social-icon b-icon");
    bLink.append(bIcon);
    /* ------------------------------ */
    const cLink = document.createElement("a");
    cLink.setAttribute("class", "social-link c-link");
    cLink.setAttribute("href", FascConfigData.cLink);
    cLink.setAttribute("target", "_blank");
    const cIcon = document.createElement("span");
    cIcon.setAttribute("class", "social-icon c-icon");
    cLink.append(cIcon);
    social.append(aLink, bLink, cLink);
    /* ------------------------------ */
    frag.append(logo, text, social);
    fasc.append(frag);
  }
}
/* ================================================== */
class FascConfig {
  static initGenerate() {
    FascConfigManager.initGenerate();
  }
}
/* ================================================== */
export { FascConfig };
/* ================================================== */
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
/* ========================= ;FACOOYA; ========================= */