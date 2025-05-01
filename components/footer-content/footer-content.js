/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* ================================================== */
const FooterContentAccessor = {

};
/* ================================================== */
const FooterContentController = {
  init() {
    FooterContentManager.init();
  }
};
/* ================================================== */
const FooterContentManager = {
  init() {
    FooterContentUtils.generator();
  }
};
const FooterContentHandler = {

};
/* ================================================== */
const FooterContentUtils = {
  generator() {
    const footer = document.querySelector(".footer");
    const footerContent = document.createElement("div");
    footerContent.className = "footer-content";
    footer.prepend(footerContent);
    /*  */
    FooterContentUtils.navGenerator();
    FooterContentUtils.aboutGenerator();
    FooterContentUtils.legalGenerator();
  },
  navGenerator() {
    const navGroups = FooterContentData.navGroups;
    const footerContent = document.querySelector(".footer-content");
    const footerNav = document.createElement("nav");
    footerNav.className = "footer-nav";
    /*  */
    Object.entries(navGroups).forEach(([titleText, items]) => {
      /* Section */
      const section = document.createElement("section");
      section.className = "section";
      /* Title */
      const title = document.createElement("h3");
      title.className = "title";
      title.textContent = titleText;
      /* List */
      const list = document.createElement("ul");
      list.className = "list";
      Object.entries(items).forEach(([itemText, itemLink]) => {
        /* Item */
        const item = document.createElement("li");
        item.className = "item";
        const link = document.createElement("a");
        link.className = "link";
        link.href = itemLink;
        link.target = "_blank";
        const text = document.createElement("span");
        text.className = "text";
        text.textContent = itemText;
        /*  */
        link.append(text);
        item.append(link);
        list.append(item);
      });
      /*  */
      section.append(title, list);
      footerNav.append(section);
    });
    footerContent.append(footerNav);
  },
  aboutGenerator() {
    const aboutGroups = FooterContentData.aboutGroups;
    const footerContent = document.querySelector(".footer-content");
    const footerAbout = document.createElement("div");
    footerAbout.className = "footer-about";
    /* ------------------------------ */
    /* Logo */
    const logo = document.createElement("div");
    logo.className = "logo";
    const logoLink = document.createElement("a");
    logoLink.className = "logo-link";
    logoLink.href = aboutGroups.logoLink;
    /* Logo Item */
    Object.entries(aboutGroups.logoItems).forEach(([itemName, itemMaskImage]) => {
      const logoItem = document.createElement("span");
      logoItem.className = `logo-item ${itemName}-logo-item`;
      logoItem.style.maskImage = itemMaskImage;
      logoLink.append(logoItem);
    });
    /*  */
    logo.append(logoLink);
    /* ------------------------------ */
    /* About Text */
    const aboutText = document.createElement("p");
    aboutText.className = "about-text";
    aboutText.textContent = aboutGroups.aboutText;
    /* ------------------------------ */
    /* Social */
    const social = document.createElement("div");
    social.className = "social";
    Object.entries(aboutGroups.socialItems).forEach(([itemName, itemData]) => {
      const socialLink = document.createElement("a");
      socialLink.className = `social-link ${itemName}-link`;
      socialLink.href = itemData.link;
      socialLink.target = "_blank";
      const socialItem = document.createElement("span");
      socialItem.className = `social-item ${itemName}-item`;
      socialItem.style.maskImage = itemData.maskImage;
      socialLink.append(socialItem);
      social.append(socialLink);
    });
    /* ------------------------------ */
    footerAbout.append(logo, aboutText, social);
    footerContent.append(footerAbout);
  },
  legalGenerator() {
    const legalGroups = FooterContentData.legalGroups;
    const footerContent = document.querySelector(".footer-content");
    const footerLegal = document.createElement("div");
    footerLegal.className = "footer-legal";
    /* ------------------------------ */
    /* Logo */
    const logo = document.createElement("div");
    logo.className = "logo";
    const logoLink = document.createElement("a");
    logoLink.className = "logo-link";
    logoLink.href = legalGroups.logoLink;
    /* Logo Item */
    Object.entries(legalGroups.logoItems).forEach(([itemName, itemMaskImage]) => {
      const item = document.createElement("span");
      item.className = `logo-item ${itemName}-logo-item`;
      item.style.maskImage = itemMaskImage;
      logoLink.append(item);
    });
    logo.append(logoLink);
    /* ------------------------------ */
    /* Copyright Text */
    const copyrightText = document.createElement("p");
    copyrightText.className = "copyright-text";
    copyrightText.textContent = legalGroups.copyrightText;
    /* ------------------------------ */
    /* List */
    const list = document.createElement("ul");
    list.className = "list";
    Object.entries(legalGroups.legalItems).forEach(([itemText, itemLink]) => {
      const item = document.createElement("li");
      item.className = "item";
      const link = document.createElement("a");
      link.className = "link";
      link.target = "_blank";
      link.href = itemLink;
      const text = document.createElement("span");
      text.className = "text";
      text.textContent = itemText;
      /*  */
      link.append(text);
      item.append(link);
      list.append(item);
    });
    /* ------------------------------ */
    footerLegal.append(logo, copyrightText, list);
    footerContent.append(footerLegal);
  }
};
/* ================================================== */
/* ========================= > Code ========================= */
window.addEventListener("DOMContentLoaded", FooterContentController.init);
/* ========================= < Code ========================= */
/* ========================= > FACOOYA ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
/* ========================= < FACOOYA ========================= */