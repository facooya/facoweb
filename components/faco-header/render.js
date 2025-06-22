/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * The faco-header render
 */

const FacoHeaderRender = {
	render(facoHeader, data) {
		/* style sheet */
		const frag = document.createDocumentFragment();
		const styles = ["top-bar.css", "main-menu.css", "drawer-menu.css"];
		styles.forEach(style => {
			const link = document.createElement("link");
			link.rel = "stylesheet";
			link.href = new URL(style, import.meta.url).href;
			frag.append(link);
		});
		facoHeader.shadowRoot.append(frag);

		FacoHeaderRender.topBarRender(facoHeader, data);
		FacoHeaderRender.mainMenuRender(facoHeader, data);
		FacoHeaderRender.drawerMenuRender(facoHeader, data);
	},

	topBarRender(facoHeader, data) {
    /* tob bar */
    const topBar = document.createElement("div");
    topBar.className = "top-bar";
    const layout = document.createElement("div");
    layout.className = "layout";

    /* logo */
    const logo = document.createElement("div");
    logo.className = "logo";
    const logoLink = document.createElement("a");
    logoLink.className = "logo-link";
    logoLink.href = data.logoGroups.logoLink;

    Object.entries(data.logoGroups.logoItems).forEach(([itemName, itemMaskImage]) => {
      const logoItem = document.createElement("span");
      logoItem.className = `logo-item ${itemName}-logo-item`;
      logoItem.style.maskImage = itemMaskImage;
      logoLink.append(logoItem);
    });
    logo.append(logoLink);

    /* hamburger icon */
    const hamburgerIcon = document.createElement("div");
    hamburgerIcon.className = "hamburger-icon";
		hamburgerIcon.dataset.isActive = 0;
    for (let i = 0; i < 3; i++) {
      const hamburgerItem = document.createElement("span");
      hamburgerItem.className = "hamburger-item";
      hamburgerIcon.append(hamburgerItem);
    }

    /* grid icon */
    const gridIcon = document.createElement("div");
    gridIcon.className = "grid-icon";
		gridIcon.dataset.isActive = 0;
    for (let i = 0; i < 9; i++) {
      const gridItem = document.createElement("span");
      gridItem.className = "grid-item";
      gridIcon.append(gridItem);
    }

    /* scroll lock */
    const topBarScrollLock = document.createElement("div");
    topBarScrollLock.className = "scroll-lock top-bar-scroll-lock";

    layout.append(logo, hamburgerIcon, gridIcon, topBarScrollLock);

    /* Overlay */
    const overlay = document.createElement("div");
    overlay.className = "overlay";

    /* Overlay Scroll Lock */
    const overlayScrollLock = document.createElement("div");
    overlayScrollLock.className = "scroll-lock overlay-scroll-lock";
    overlay.append(overlayScrollLock);

    topBar.append(layout, overlay);

    facoHeader.shadowRoot.append(topBar);
	},

	mainMenuRender(facoHeader, data) {
    /* Create Main Menu */
    const mainMenu = document.createElement("nav");
    mainMenu.className = "main-menu";

    /* List */
    const list = document.createElement("ul");
    list.className = "list";
    Object.entries(data.mainMenuGroups).forEach(([itemLabelData, subItems], index) => {
      const item = document.createElement("li");
      item.className = "item";
			item.dataset.index = index;
			item.dataset.isOpen = 0;

      /* item box */
      const itemBox = document.createElement("div");
      itemBox.className = "item-box";
      const itemLabel = document.createElement("span");
      itemLabel.className = "item-label";
      itemLabel.textContent = itemLabelData;
      const itemArrowIcon = document.createElement("span");
      itemArrowIcon.className = "item-arrow-icon";
      const itemBottomLine = document.createElement("span");
      itemBottomLine.className = "item-bottom-line";
      const itemBoxScrollLock = document.createElement("div");
      itemBoxScrollLock.className = "scroll-lock item-box-scroll-lock";
      itemBox.append(itemLabel, itemArrowIcon, itemBottomLine, itemBoxScrollLock);

      /* Sub List */
      const subList = document.createElement("ul");
      subList.className = "sub-list";
      Object.entries(subItems).forEach(([subItemLabelData, subItemLink], index) => {
        const subItem = document.createElement("li");
        subItem.className = "sub-item";
				subItem.dataset.index = index;

        /* sub box */
        const subItemBox = document.createElement("a");
        subItemBox.className = "sub-item-box";
        subItemBox.href = subItemLink;
				subItemBox.dataset.isHover = 0;
        const subItemLabel = document.createElement("span");
        subItemLabel.className = "sub-item-label";
        subItemLabel.textContent = subItemLabelData;
        const subItemArrowIcon = document.createElement("span");
        subItemArrowIcon.className = "sub-item-arrow-icon";
        const subItemBottomLine = document.createElement("span");
        subItemBottomLine.className = "sub-item-bottom-line";
        subItemBox.append(subItemLabel, subItemArrowIcon, subItemBottomLine);
        subItem.append(subItemBox);

        subList.append(subItem);
      });

      /* Sub List Scroll Lock */
      const subListScrollLock = document.createElement("li");
      subListScrollLock.className = "scroll-lock sub-list-scroll-lock";
      subList.append(subListScrollLock);

      item.append(itemBox, subList);

      /* Chevron */
      const chevronTopWrapper = document.createElement("span");
      chevronTopWrapper.className = "item-chevron-wrapper item-chevron-top-wrapper";
      const chevronTop = document.createElement("span");
      chevronTop.className = "item-chevron item-chevron-top";
      chevronTopWrapper.append(chevronTop);
      const chevronBottomWrapper = document.createElement("span");
      chevronBottomWrapper.className = "item-chevron-wrapper item-chevron-bottom-wrapper";
      const chevronBottom = document.createElement("span");
      chevronBottom.className = "item-chevron item-chevron-bottom";
      chevronBottomWrapper.append(chevronBottom);
      item.append(chevronTopWrapper, chevronBottomWrapper);

      list.append(item);
    });

    /* Fog */
    const fogTop = document.createElement("div");
    fogTop.className = "fog fog-top";
    const fogBottom = document.createElement("div");
    fogBottom.className = "fog fog-bottom";

    /* Scroll Lock */
    const scrollLock = document.createElement("div");
    scrollLock.className = "scroll-lock";

    mainMenu.append(list, fogTop, fogBottom, scrollLock);
    facoHeader.shadowRoot.append(mainMenu);
	},

	drawerMenuRender(facoHeader, data) {
    const drawerMenu = document.createElement("nav");
    drawerMenu.className = "drawer-menu";

    /* List */
    const list = document.createElement("ul");
    list.className = "list";

    /* Item */
    Object.entries(data.drawerMenuGroups).forEach(([itemLabelData, subItems], index) => {
      const item = document.createElement("li");
      item.className = "item";
			item.dataset.index = index;
			item.dataset.isOpen = 0;

      /* Item Box */
      const itemBox = document.createElement("div");
      itemBox.className = "item-box";
      const itemLabel = document.createElement("span");
      itemLabel.className = "item-label";
      itemLabel.textContent = itemLabelData;
      const itemArrowIcon = document.createElement("span");
      itemArrowIcon.className = "item-arrow-icon";
      const itemBottomLine = document.createElement("span");
      itemBottomLine.className = "item-bottom-line";
      itemBox.append(itemLabel, itemArrowIcon, itemBottomLine);

      const subList = document.createElement("ul");
      subList.className = "sub-list";
      Object.entries(subItems).forEach(([subItemLabelData, subItemLink], index) => {
        const subItem = document.createElement("li");
        subItem.className = "sub-item";
				subItem.dataset.index = index;

        /* Sub Item Box */
        const subItemBox = document.createElement("a");
        subItemBox.className = "sub-item-box";
        subItemBox.href = subItemLink;
				subItemBox.dataset.isHover = 0;
        const subItemLabel = document.createElement("span");
        subItemLabel.className = "sub-item-label";
        subItemLabel.textContent = subItemLabelData;
        const subItemArrowIcon = document.createElement("span");
        subItemArrowIcon.className = "sub-item-arrow-icon";
        const subItemBottomLine = document.createElement("span");
        subItemBottomLine.className = "sub-item-bottom-line";

        subItemBox.append(subItemLabel, subItemArrowIcon, subItemBottomLine);
        subItem.append(subItemBox);
        subList.append(subItem);
      });

      item.append(itemBox, subList);
      list.append(item);
    });

    /* Fog */
    const fogTop = document.createElement("div");
    fogTop.className = "fog fog-top";
    const fogBottom = document.createElement("div");
    fogBottom.className = "fog fog-bottom";

    /* Scroll Lock */
    const scrollLock = document.createElement("div");
    scrollLock.className = "scroll-lock";

    drawerMenu.append(list, fogTop, fogBottom, scrollLock);
    facoHeader.shadowRoot.append(drawerMenu);
	}
};

export { FacoHeaderRender };
