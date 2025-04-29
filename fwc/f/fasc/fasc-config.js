/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* ================================================== */
class FascConfigData {
  static logoContainerLink = "#dev.facooya.com";
  /*  */
  static devLinkHtml = `<a href="#dev.facooya.com" class="fasc-text-link-item">dev.facooya.com</a>`
  static textContainerText = `Welcome to ${FascConfigData.devLinkHtml},
    a programming-related site.
    This site provides information promptly.
    We believe our services will assist in launching humanity to space.`;
  static textItemLink = "#dev.facooya.com";
  /*  */
  static ALink = "#facooya";
  static bLink = "#facooya";
  static CLink = "#facooya";
}
class FascConfigManager {
  static generate() {
    const fasc = document.querySelector(".fasc");
    const fascFrag = document.createDocumentFragment();
    /* Logo */
    const logoWrapper = document.createElement("div");
    logoWrapper.setAttribute("class", "fasc-logo-wrapper");
    const logoContainer = document.createElement("a");
    logoContainer.setAttribute("class", "fasc-logo-container");
    logoContainer.setAttribute("href", FascConfigData.logoContainerLink);
    const devItem = document.createElement("span");
    devItem.setAttribute("class", "fasc-dev-item fasc-logo-item");
    const taItem = document.createElement("span");
    taItem.setAttribute("class", "fasc-ta-item fasc-logo-item");
    const facooyaItem = document.createElement("span");
    facooyaItem.setAttribute("class", "fasc-facooya-item fasc-logo-item");
    logoContainer.append(devItem, taItem, facooyaItem);
    logoWrapper.append(logoContainer);
    /* Text */
    const textContainer = document.createElement("p");
    textContainer.setAttribute("class", "fasc-text-container");
    textContainer.innerHTML = FascConfigData.textContainerText;
    /* Social */
    const socialContainer = document.createElement("div");
    socialContainer.setAttribute("class", "fasc-social-container");
    const socialALink = document.createElement("a");
    socialALink.setAttribute("class", "fasc-social-a-link fasc-social-item-link");
    socialALink.setAttribute("href", FascConfigData.ALink);
    socialALink.setAttribute("target", "_blank");
    const socialAIcon = document.createElement("span");
    socialAIcon.setAttribute("class", "fasc-social-a-icon fasc-social-item-icon");
    const socialBLink = document.createElement("a");
    socialBLink.setAttribute("class", "fasc-social-b-link fasc-social-item-link");
    socialBLink.setAttribute("href", FascConfigData.bLink);
    socialBLink.setAttribute("target", "_blank");
    const socialBIcon = document.createElement("span");
    socialBIcon.setAttribute("class", "fasc-social-b-icon fasc-social-item-icon");
    const socialCLink = document.createElement("a");
    socialCLink.setAttribute("class", "fasc-social-c-link fasc-social-item-link");
    socialCLink.setAttribute("href", FascConfigData.CLink);
    socialCLink.setAttribute("target", "_blank");
    const socialCIcon = document.createElement("span");
    socialCIcon.setAttribute("class", "fasc-social-c-icon fasc-social-item-icon");
    /*  */
    socialALink.append(socialAIcon);
    socialBLink.append(socialBIcon);
    socialCLink.append(socialCIcon);
    socialContainer.append(socialALink, socialBLink, socialCLink);
    /*  */
    fascFrag.append(logoWrapper, textContainer, socialContainer);
    fasc.append(fascFrag);
  }
}
class FascConfig {
  static generate() {
    FascConfigManager.generate();
  }
}
/* ================================================== */
export { FascConfig };
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */