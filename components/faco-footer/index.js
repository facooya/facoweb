/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * The faco-footer index
 */

class FacoFooter extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	connectedCallback() {
		FacoFooterRender.render(this);
	}
}

const FacoFooterRender = {
	render(facoFooter) {
		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.href = new URL("index.css", import.meta.url).href;
		facoFooter.shadowRoot.append(link);

		FacoFooterRender.navRender(facoFooter);
		FacoFooterRender.aboutRender(facoFooter);
		FacoFooterRender.legalRender(facoFooter);
	},

	navRender(facoFooter) {
    const navGroups = FacoFooterData.navGroups;
    const footerNav = document.createElement("nav");
    footerNav.className = "footer-nav";

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

        link.append(text);
        item.append(link);
        list.append(item);
      });

      section.append(title, list);
      footerNav.append(section);
    });

    facoFooter.shadowRoot.append(footerNav);
	},

	aboutRender(facoFooter) {
    const aboutGroups = FacoFooterData.aboutGroups;
    const footerAbout = document.createElement("div");
    footerAbout.className = "footer-about";

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

    logo.append(logoLink);

    /* About Text */
    const aboutText = document.createElement("p");
    aboutText.className = "about-text";
    aboutText.textContent = aboutGroups.aboutText;

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

    footerAbout.append(logo, aboutText, social);
    facoFooter.shadowRoot.append(footerAbout);
	},

	legalRender(facoFooter) {
    const legalGroups = FacoFooterData.legalGroups;
    const footerLegal = document.createElement("div");
    footerLegal.className = "footer-legal";

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

    /* Copyright Text */
    const copyrightText = document.createElement("p");
    copyrightText.className = "copyright-text";
    copyrightText.textContent = legalGroups.copyrightText;

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

      link.append(text);
      item.append(link);
      list.append(item);
    });

    footerLegal.append(logo, copyrightText, list);
    facoFooter.shadowRoot.append(footerLegal);
	}
};

customElements.define("faco-footer", FacoFooter);
