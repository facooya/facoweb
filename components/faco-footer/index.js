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

		FacoFooterRender.exploreRender(facoFooter);
		FacoFooterRender.aboutRender(facoFooter);
		FacoFooterRender.legalRender(facoFooter);
	},

	exploreRender(facoFooter) {
		const exploreData = FacoFooterData.exploreData;
    const explore = document.createElement("nav");
    explore.className = "explore";

    Object.entries(exploreData).forEach(([titleText, itemData]) => {
      const section = document.createElement("section");
      section.className = "section";
      const title = document.createElement("h3");
      title.className = "title";
      title.textContent = titleText;
      const list = document.createElement("ul");
      list.className = "list";

      Object.entries(itemData).forEach(([itemText, itemLink]) => {
        const item = document.createElement("li");
        item.className = "item";
        const link = document.createElement("a");
        link.className = "link";
        link.href = itemLink;
        const text = document.createElement("span");
        text.className = "text";
        text.textContent = itemText;

        link.append(text);
        item.append(link);
        list.append(item);
      });

      section.append(title, list);
      explore.append(section);
    });

    facoFooter.shadowRoot.append(explore);
	},

	aboutRender(facoFooter) {
    const aboutData = FacoFooterData.aboutData;
    const about = document.createElement("div");
    about.className = "about";

    /* about: logo */
		const logoData = aboutData.logoData;
    const logo = document.createElement("div");
    logo.className = "logo";
		logo.style.height = logoData.height;
    const logoLink = document.createElement("a");
    logoLink.className = "logo-link";
    logoLink.href = logoData.link;
		logoLink.style.height = logoData.height;

    Object.entries(logoData.items).forEach(([logoName, itemData]) => {
      const logoItem = document.createElement("span");
      logoItem.className = `logo-item`;
      logoItem.style.maskImage = itemData.url;
			logoItem.style.width = itemData.width;
			if (itemData.height) {
				logoItem.style.height = itemData.height;
			} else {
				logoItem.style.height = logoData.height;
			}
			if (itemData.marginRight) {
				logoItem.style.marginRight = itemData.marginRight;
			}
      logoLink.append(logoItem);
    });
    logo.append(logoLink);

    /* about: description */
    const description = document.createElement("p");
    description.className = "description";
    description.textContent = aboutData.description;

    /* about: social */
		const socialData = aboutData.socialData;
    const social = document.createElement("div");
    social.className = "social";
		social.style.height = socialData.size;
		let marginLeft = 0;
    Object.entries(socialData.items).forEach(([socialName, itemData]) => {
      const socialLink = document.createElement("a");
      socialLink.className = "social-link";
      socialLink.href = itemData.link;
			if (socialData.newTab) {
				socialLink.target = "_blank";
			}
			socialLink.style.height = socialData.size;
			if (marginLeft) {
				socialLink.style.marginLeft = socialData.gap;
			} else {
				marginLeft = 1;
			}
      const socialItem = document.createElement("span");
      socialItem.className = "social-item";
      socialItem.style.maskImage = itemData.url;
			socialItem.style.width = socialData.size;
			socialItem.style.height = socialData.size;
      socialLink.append(socialItem);
      social.append(socialLink);
    });

    about.append(logo, description, social);
    facoFooter.shadowRoot.append(about);
	},

	legalRender(facoFooter) {
    const legalData = FacoFooterData.legalData;
    const legal = document.createElement("div");
    legal.className = "legal";

    /* legal: logo */
		const logoData = legalData.logoData;
    const logo = document.createElement("div");
    logo.className = "logo";
		logo.style.height = logoData.height;
    const logoLink = document.createElement("a");
    logoLink.className = "logo-link";
    logoLink.href = logoData.link;
		logoLink.style.height = logoData.height;

    Object.entries(logoData.items).forEach(([itemName, itemData]) => {
      const item = document.createElement("span");
      item.className = `logo-item`;
      item.style.maskImage = itemData.url;
			item.style.width = itemData.width;
			if (itemData.height) {
				item.style.height = itemData.height;
			} else {
				item.style.height = logoData.height;
			}
			if (itemData.marginRight) {
				item.style.marginRight = itemData.marginRight;
			}
      logoLink.append(item);
    });
    logo.append(logoLink);

    /* legal: copyright */
    const copyright = document.createElement("p");
    copyright.className = "copyright";
    copyright.textContent = legalData.copyright;

    /* legal: link */
		const linkData = legalData.linkData;
    const list = document.createElement("ul");
    list.className = "list";

    Object.entries(linkData.items).forEach(([itemText, itemLink]) => {
      const item = document.createElement("li");
      item.className = "item";
      const link = document.createElement("a");
      link.className = "link";
      link.href = itemLink;
			if (linkData.newTab) {
				link.target = "_blank";
			}
      const text = document.createElement("span");
      text.className = "text";
      text.textContent = itemText;

      link.append(text);
      item.append(link);
      list.append(item);
    });

    legal.append(logo, copyright, list);
    facoFooter.shadowRoot.append(legal);
	}
};

customElements.define("faco-footer", FacoFooter);
