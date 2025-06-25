/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * The faco-header render
 */

const FacoHeaderRender = {
	render(facoHeader) {
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

		FacoHeaderRender.topBarRender(facoHeader);
		FacoHeaderRender.mainMenuRender(facoHeader);
		FacoHeaderRender.drawerMenuRender(facoHeader);
	},

	topBarRender(facoHeader) {
    const topBar = document.createElement("div");
    topBar.className = "top-bar";
    const layout = document.createElement("div");
    layout.className = "layout";

    /* topBar: logo */
    const logoData = FacoHeaderData.logoData;
    const logo = document.createElement("div");
    logo.className = "logo";
    logo.style.height = logoData.height;
    const logoLink = document.createElement("a");
    logoLink.className = "logo-link";
    logoLink.href = logoData.link;
    logoLink.style.height = logoData.height;

    Object.entries(logoData.items).forEach(([itemName, itemData]) => {
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

    /* topBar: hamburgerIcon */
    const hamburgerIcon = document.createElement("div");
    hamburgerIcon.className = "hamburger-icon";
		hamburgerIcon.dataset.isActive = 0;
    for (let i = 0; i < 3; i++) {
      const hamburgerItem = document.createElement("span");
      hamburgerItem.className = "hamburger-item";
      hamburgerIcon.append(hamburgerItem);
    }

    /* topBar: gridIcon */
    const gridIcon = document.createElement("div");
    gridIcon.className = "grid-icon";
		gridIcon.dataset.isActive = 0;
    for (let i = 0; i < 9; i++) {
      const gridItem = document.createElement("span");
      gridItem.className = "grid-item";
      gridIcon.append(gridItem);
    }

    const layoutScrollLock = document.createElement("div");
    layoutScrollLock.className = "scroll-lock layout-scroll-lock";
    layout.append(logo, hamburgerIcon, gridIcon, layoutScrollLock);

    /* Overlay */
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    const overlayScrollLock = document.createElement("div");
    overlayScrollLock.className = "scroll-lock overlay-scroll-lock";
    overlay.append(overlayScrollLock);

    topBar.append(layout, overlay);
    facoHeader.shadowRoot.append(topBar);
	},

	mainMenuRender(facoHeader) {
    const mainMenuData = FacoHeaderData.mainMenuData;
    const mainMenu = document.createElement("nav");
    mainMenu.className = "main-menu";

    /* mainMenu: list */
    const list = document.createElement("ul");
    list.className = "list";
    Object.entries(mainMenuData).forEach(([itemLabelData, subItems], index) => {
      const item = document.createElement("li");
      item.className = "item";
			item.dataset.index = index;
			item.dataset.isOpen = 0;

      /* mainMenu: itemBox */
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

      /* mainMenu: subList */
      const subList = document.createElement("ul");
      subList.className = "sub-list";
      Object.entries(subItems).forEach(([subItemLabelData, subItemLink], index) => {
        const subItem = document.createElement("li");
        subItem.className = "sub-item";
				subItem.dataset.index = index;

        /* mainMenu: subItemBox */
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

      const subListScrollLock = document.createElement("li");
      subListScrollLock.className = "scroll-lock sub-list-scroll-lock";
      subList.append(subListScrollLock);
      item.append(itemBox, subList);

      /* mainMenu: Chevron */
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

    const fogTop = document.createElement("div");
    fogTop.className = "fog fog-top";
    const fogBottom = document.createElement("div");
    fogBottom.className = "fog fog-bottom";
    const scrollLock = document.createElement("div");
    scrollLock.className = "scroll-lock";

    mainMenu.append(list, fogTop, fogBottom, scrollLock);
    facoHeader.shadowRoot.append(mainMenu);
	},

	drawerMenuRender(facoHeader) {
    const drawerMenuData = FacoHeaderData.drawerMenuData;
    const drawerMenu = document.createElement("nav");
    drawerMenu.className = "drawer-menu";

    /* drawerMenu: List */
    const list = document.createElement("ul");
    list.className = "list";
    Object.entries(drawerMenuData).forEach(([itemLabelData, subItems], index) => {
      const item = document.createElement("li");
      item.className = "item";
			item.dataset.index = index;
			item.dataset.isOpen = 0;

      /* drawerMenu: itemBox */
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

      /* drawerMenu: subList */
      const subList = document.createElement("ul");
      subList.className = "sub-list";
      Object.entries(subItems).forEach(([subItemLabelData, subItemLink], index) => {
        const subItem = document.createElement("li");
        subItem.className = "sub-item";
				subItem.dataset.index = index;

        /* drawerMenu: subItemBox */
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

    const fogTop = document.createElement("div");
    fogTop.className = "fog fog-top";
    const fogBottom = document.createElement("div");
    fogBottom.className = "fog fog-bottom";
    const scrollLock = document.createElement("div");
    scrollLock.className = "scroll-lock";

    drawerMenu.append(list, fogTop, fogBottom, scrollLock);
    facoHeader.shadowRoot.append(drawerMenu);
	}
};

export { FacoHeaderRender };
