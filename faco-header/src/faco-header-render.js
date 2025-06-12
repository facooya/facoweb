/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Header render
 */

const FacoHeaderRender = {
	render(data) {
		FacoHeaderRender.topBarRender.call(this, data);
		FacoHeaderRender.mainMenuRender.call(this, data);
		FacoHeaderRender.drawerMenuRender.call(this, data);
	},

	topBarRender(data) {
		/* style */
		const style = document.createElement("link");
		style.rel = "stylesheet";
		style.href = new URL("top-bar.css", import.meta.url).href;

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
    for (let i = 0; i < 3; i++) {
      const hamburgerItem = document.createElement("span");
      hamburgerItem.className = "hamburger-item";
      hamburgerIcon.append(hamburgerItem);
    }

    /* grid icon */
    const gridIcon = document.createElement("div");
    gridIcon.className = "grid-icon";
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

    this.shadowRoot.append(style, topBar);
	},

	mainMenuRender(data) {
		/* style */
		const style = document.createElement("link");
		style.rel = "stylesheet";
		style.href = new URL("main-menu.css", import.meta.url).href;

    /* Create Main Menu */
    const mainMenu = document.createElement("nav");
    mainMenu.className = "main-menu";

    /* List */
    const list = document.createElement("ul");
    list.className = "list";
    Object.entries(data.mainMenuGroups).forEach(([itemTextData, subItems]) => {
      const item = document.createElement("li");
      item.className = "item";

      /* Item Container */
      const itemContainer = document.createElement("div");
      itemContainer.className = "item-container";
      const itemText = document.createElement("span");
      itemText.className = "item-text";
      itemText.textContent = itemTextData;
      const itemArrowIcon = document.createElement("span");
      itemArrowIcon.className = "item-arrow-icon";
      const itemBottomLine = document.createElement("span");
      itemBottomLine.className = "item-bottom-line";
      const itemContainerScrollLock = document.createElement("div");
      itemContainerScrollLock.className = "scroll-lock item-container-scroll-lock";
      itemContainer.append(itemText, itemArrowIcon, itemBottomLine, itemContainerScrollLock);

      /* Sub List */
      const subList = document.createElement("ul");
      subList.className = "sub-list";
      Object.entries(subItems).forEach(([subItemTextData, subItemLink]) => {
        const subItem = document.createElement("li");
        subItem.className = "sub-item";

        /* Sub Container */
        const subItemContainer = document.createElement("a");
        subItemContainer.className = "sub-item-container";
        subItemContainer.href = subItemLink;
        const subItemText = document.createElement("span");
        subItemText.className = "sub-item-text";
        subItemText.textContent = subItemTextData;
        const subItemArrowIcon = document.createElement("span");
        subItemArrowIcon.className = "sub-item-arrow-icon";
        const subItemBottomLine = document.createElement("span");
        subItemBottomLine.className = "sub-item-bottom-line";
        subItemContainer.append(subItemText, subItemArrowIcon, subItemBottomLine);
        subItem.append(subItemContainer);

        subList.append(subItem);
      });

      /* Sub List Scroll Lock */
      const subListScrollLock = document.createElement("li");
      subListScrollLock.className = "scroll-lock sub-list-scroll-lock";
      subList.append(subListScrollLock);

      item.append(itemContainer, subList);

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
    this.shadowRoot.append(style, mainMenu);
	},

	drawerMenuRender(data) {
		/* style */
		const style = document.createElement("link");
		style.rel = "stylesheet";
		style.href = new URL("drawer-menu.css", import.meta.url).href;

    const drawerMenu = document.createElement("nav");
    drawerMenu.className = "drawer-menu";

    /* List */
    const list = document.createElement("ul");
    list.className = "list";

    /* Item */
    Object.entries(data.drawerMenuGroups).forEach(([itemTextData, subItems]) => {
      const item = document.createElement("li");
      item.className = "item";

      /* Item Container */
      const itemContainer = document.createElement("div");
      itemContainer.className = "item-container";
      const itemText = document.createElement("span");
      itemText.className = "item-text";
      itemText.textContent = itemTextData;
      const itemArrowIcon = document.createElement("span");
      itemArrowIcon.className = "item-arrow-icon";
      const itemBottomLine = document.createElement("span");
      itemBottomLine.className = "item-bottom-line";
      itemContainer.append(itemText, itemArrowIcon, itemBottomLine);

      const subList = document.createElement("ul");
      subList.className = "sub-list";
      Object.entries(subItems).forEach(([subItemTextData, subItemLink]) => {
        const subItem = document.createElement("li");
        subItem.className = "sub-item";

        /* Sub Item Container */
        const subItemContainer = document.createElement("a");
        subItemContainer.className = "sub-item-container";
        subItemContainer.href = subItemLink;
        const subItemText = document.createElement("span");
        subItemText.className = "sub-item-text";
        subItemText.textContent = subItemTextData;
        const subItemArrowIcon = document.createElement("span");
        subItemArrowIcon.className = "sub-item-arrow-icon";
        const subItemBottomLine = document.createElement("span");
        subItemBottomLine.className = "sub-item-bottom-line";

        subItemContainer.append(subItemText, subItemArrowIcon, subItemBottomLine);
        subItem.append(subItemContainer);
        subList.append(subItem);
      });
      item.append(itemContainer, subList);
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
    this.shadowRoot.append(style, drawerMenu);
	}
};

export { FacoHeaderRender };
