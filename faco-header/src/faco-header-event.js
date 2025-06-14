/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Header event
 */

import { FacoHeaderUtils } from "./faco-header-utils.js";

const FacoHeaderEvent = {
	initEvents() {
		const screenType = Number(this.dataset.screenType);

		FacoHeaderEvent.TopBar.common.call(this);
		FacoHeaderEvent.MainMenu.common.call(this);
		FacoHeaderEvent.DrawerMenu.common.call(this);

    if (screenType === 1) {
			FacoHeaderEvent.TopBar.mobile.call(this);
			FacoHeaderEvent.MainMenu.mobile.call(this);
    } else if (screenType === 2) {
			FacoHeaderEvent.TopBar.tablet.call(this);
    } else if (screenType === 3) {
			FacoHeaderEvent.TopBar.desktop.call(this);
		}
	},

	resizeEvent() {
	},

	TopBar: {
		common() {
    	const gridIcon = this.shadowRoot.querySelector(".top-bar .grid-icon");
    	gridIcon.addEventListener("click", FacoHeaderEvent.TopBar.onGridIconClick.bind(this));
		},

		mobile() {
      const hamburgerIcon = this.shadowRoot.querySelector(".top-bar .hamburger-icon");
      hamburgerIcon.addEventListener("click", FacoHeaderEvent.TopBar.onHamburgerIconClick.bind(this));

      const overlay = this.shadowRoot.querySelector(".top-bar .overlay");
      overlay.addEventListener("click", FacoHeaderEvent.TopBar.onOverlayClick.bind(this));
		},

		tablet() {
      const gridItem = gridIcon.querySelector(".grid-item");
      gridItem.addEventListener("transitionend", FacoHeaderEvent.TopBar.onGridItemTransitionEnd.bind(this));
		},

		desktop() {
      const gridItem = gridIcon.querySelector(".grid-item");
      gridItem.addEventListener("transitionend", FacoHeaderEvent.TopBar.onGridItemTransitionEnd.bind(this));
		},

		onGridIconClick() {
			const drawerMenuState = Number(this.dataset.drawerMenuState);
			if (drawerMenuState) {
				this.drawerMenuState = 0;
			} else {
				this.drawerMenuState = 1;
			}
		},

		onHamburgerIconClick() {
			const mainMenuState = Number(this.dataset.mainMenuState);
			if (mainMenuState) {
				this.mainMenuState = 0;
			} else {
				this.mainMenuState = 1;
			}
		},

		onOverlayClick() {
			if (Number(this.dataset.mainMenuState)) {
				FacoHeaderEvent.TopBar.onHamburgerIconClick.call(this);
			} else if (Number(this.dataset.drawerMenuState)) {
				FacoHeaderEvent.TopBar.onGridIconClick.call(this);
			}
		},

		onGridItemTransitionEnd(event) {
			/* only desktop */
			const target = event.target;
			const gridItem = event.currentTarget;
	
			if (target === gridItem && event.propertyName === "transform") {
				// ...
			}
		}
	},

	MainMenu: {
		common() {
			const mainMenu = this.shadowRoot.querySelector(".main-menu");
			const items = mainMenu.querySelectorAll(".item");

    	for (let i = 0; i < items.length; i++) {
      	items[i].index = i;
      	items[i].dataset.isOpen = 0;
      	const subItems = items[i].querySelectorAll(".sub-item");
      	const subItemContainers = items[i].querySelectorAll(".sub-item-container");

      	for (let j = 0; j < subItems.length; j++) {
        	subItems[j].index = j;
        	subItemContainers.isHover = 0;
      	}
    	}

			const subLists = mainMenu.querySelectorAll(".sub-list");
			subLists.forEach(subList => {
				subList.addEventListener("transitionend", FacoHeaderEvent.MainMenu.onSubListTransitionEnd.bind(this));
			});

			// updateMainMenuSubListMaxHeight();

			if (!Number(this.dataset.touchType)) {
				const list = mainMenu.querySelector(".list");
				const subItemContainers = list.querySelectorAll(".sub-item-container");
				subItemContainers.forEach(subContainer => {
					subContainer.addEventListener("mouseenter", FacoHeaderEvent.MainMenu.onSubItemContainerHover.bind(this));
					subContainer.addEventListener("mouseleave", FacoHeaderEvent.MainMenu.onSubItemContainerHover.bind(this));
				});
			}
		},

		mobile() {
			const mainMenu = this.shadowRoot.querySelector(".main-menu");
			mainMenu.addEventListener("scroll", FacoHeaderEvent.MainMenu.onScroll.bind(this));

			const list = mainMenu.querySelector(".list");
			const itemContainers = list.querySelectorAll(".item-container");
			itemContainers.forEach(container => {
				container.addEventListener("click", FacoHeaderEvent.MainMenu.onItemContainerClick.bind(this));
			});
		},

		tablet() {
			const subLists = this.shadowRoot.querySelector(".main-menu .sub-list");
			subLists.forEach(subList => {
				//subList.addEventListener("scroll", FacoHeaderEvent.MainMenu.onSubListScroll.bind(this));
			});
		},

		desktop() {
			const subLists = this.shadowRoot.querySelector(".main-menu .sub-list");
			subLists.forEach(subList => {
				//subList.addEventListener("scroll", FacoHeaderEvent.MainMenu.onSubListScroll.bind(this));
			});
		},

		onScroll() {
			const screenType = Number(this.dataset.screenType);

    	if (screenType === 1) {
    		const mainMenu = this.shadowRoot.querySelector(".main-menu");
      	const fogTop = mainMenu.querySelector(".fog-top");
      	const fogBottom = mainMenu.querySelector(".fog-bottom");
	
      	const innerHeight = window.innerHeight;
      	const calcFogHeight = innerHeight / 10;
      	const scrollTop = mainMenu.scrollTop;
      	const scrollHeight = mainMenu.scrollHeight;
      	const clientHeight = mainMenu.clientHeight;
      	const scrollBuffer = 8;
	
      	let fogTopHeight = 0;
      	let fogBottomHeight = 0;
	
      	if (scrollTop > scrollBuffer) {
        	fogTopHeight = calcFogHeight;
      	}
      	if (scrollTop + clientHeight + scrollBuffer < scrollHeight) {
        	fogBottomHeight = calcFogHeight;
      	}
	
      	fogTop.style.height = `${fogTopHeight}px`;
      	fogBottom.style.height = `${fogBottomHeight}px`;
    	}
		},

		onItemContainerClick(event) {
    	/* Only !(Desktop Screen Type, Touched Device) */
    	const itemContainer = event.currentTarget;
    	const item = itemContainer.closest(".item");
    	const itemText = itemContainer.querySelector(".item-text");
    	const itemArrowIcon = itemContainer.querySelector(".item-arrow-icon");
    	const itemBottomLine = itemContainer.querySelector(".item-bottom-line");
    	const subList = item.querySelector(".sub-list");
    	const openClass = "open";

    	let shouldOpen = 0;
    	let action = "remove";
    	let touchType = Number(this.dataset.touchType);
    	let screenType = Number(this.dataset.screenType); // FIXME REQ: privousScreenType

    	if (!Number(item.dataset.isOpen)) {
      	shouldOpen = 1;
      	action = "add";
      	screenType = Number(this.dataset.screenType);
    	}

    	if (shouldOpen) {

      	/* if (screenType === 2) {
        	MainMenuUtils.itemCloseAll();
        	const topBarGridIcon = document.querySelector(".top-bar .grid-icon");
        	if (topBarGridIcon.isActive) {
          	TopBarAccessor.gridIconClick();
        	}
      	} else if (screenType === 3) {
        	if (touchType) {
          	MainMenuUtils.itemCloseAll();
        	}
      	} */

    	} else if (!shouldOpen) {

      	/* if (touchType) {
        	// MainMenuUtils.timerSubItemContainer(item, true);
        	const subItemBottomLines = item.querySelectorAll(".sub-item-bottom-line");
        	subItemBottomLines.forEach(subItemBottomLine => {
          	subItemBottomLine.style.width = "";
        	});
      	} */

      	/* if (screenType >= 2) {
        	MainMenuUtils.subListScrollLogic(item, false);
      	} */
    	}

    	if (!touchType) {
      	FacoHeaderUtils.MainMenu.setHoverLockItemContainer.call(this, item, shouldOpen);
    	}

    	FacoHeaderUtils.MainMenu.updateSubListHeight.call(this, item, shouldOpen);

    	item.classList[action](openClass);
    	itemText.classList[action](openClass);
    	itemArrowIcon.classList[action](openClass);
    	itemBottomLine.classList[action](openClass);
    	subList.classList[action](openClass);

    	item.dataset.isOpen = shouldOpen;
		},

		onSubItemContainerHover(event) {
    	/* type 4-6 */
    	const eventType = event.type;
    	const subItemContainer = event.currentTarget;
    	const subItemBottomLine = subItemContainer.querySelector(".sub-item-bottom-line");
    	const subItemArrowIcon = subItemContainer.querySelector(".sub-item-arrow-icon");
    	const active = "active";

			console.log(subItemBottomLine.width);

    	if (eventType === "mouseenter") {
      	subItemBottomLine.style.width = `${subItemBottomLine.width}px`;
      	subItemArrowIcon.classList.add(active);
      	subItemContainer.isHover = 1;
    	} else if (eventType === "mouseleave") {
      	subItemBottomLine.style.width = "";
      	subItemArrowIcon.classList.remove(active);
      	subItemContainer.isHover = 0;
    	}
		},

		onSubListTransitionEnd(event) {
			/* For All */
    	const target = event.target;
    	const subList = event.currentTarget;

    	if (
      	target === subList
      	&& event.propertyName === "height"
    	) {
      	const item = subList.closest(".item");

      	if (Number(item.dataset.isOpen)) {
					FacoHeaderUtils.MainMenu.updateSubItemContainer(item);

        	if (Number(this.dataset.touchType)) {
          	// MainMenuUtils.timerSubItemContainer(item);
        	} else {
          	const subItemContainers = item.querySelectorAll(".sub-item-container");
          	subItemContainers.forEach(subItemContainer => {
            	if (subItemContainer.isHover) {
              	const subItemBottomLine = subItemContainer.querySelector(".sub-item-bottom-line");
              	subItemBottomLine.style.width = `${subItemBottomLine.width}px`;

              	const hoverClass = "hover";
              	const subItemArrowIcon = subItemContainer.querySelector(".sub-item-arrow-icon");
              	subItemArrowIcon.classList.add(hoverClass);
            	}
          	});
        	}
        	// MainMenuUtils.updateChevronWrapperLeft(item);
        	// MainMenuUtils.updateChevronBottomWrapperTop(item);

        	// MainMenuUtils.subListScrollLogic(item, true);
      	}

      	FacoHeaderEvent.MainMenu.onScroll.call(this);
    	} else if (
      	target === subList
      	&& event.propertyName === "max-height"
    	) {
      	const item = subList.closest(".item");
      	if (item.isOpen) {
        	// MainMenuUtils.updateChevronBottomWrapperTop(item);
        	// MainMenuUtils.subListScrollLogic(item, true);
      	}
    	}
		}
	},

	DrawerMenu: {
		common() {
			const drawerMenu = this.shadowRoot.querySelector(".drawer-menu");
			drawerMenu.addEventListener("scroll", FacoHeaderEvent.DrawerMenu.onScroll.bind(this));

			const items = drawerMenu.querySelectorAll(".item");
	    for (let i = 0; i < items.length; i++) {
      	items[i].dataset.index = i;
      	items[i].dataset.isOpen = 0;

				const itemBox = items[i].querySelector(".item-box");
				itemBox.addEventListener("click", FacoHeaderEvent.DrawerMenu.onItemBoxClick.bind(this));

				const subList = items[i].querySelector(".sub-list");
				subList.addEventListener("transitionend", FacoHeaderEvent.DrawerMenu.onSubListTransitionEnd.bind(this));

      	const subItems = items[i].querySelectorAll(".sub-item");
      	const subItemBoxes = items[i].querySelectorAll(".sub-item-box");
      	for (let j = 0; j < subItems.length; j++) {
        	subItems[j].dataset.index = j;
        	subItemBoxes[j].dataset.isHover = 0;

          subItemBoxes[j].addEventListener("mouseenter", FacoHeaderEvent.DrawerMenu.onSubItemBoxHover.bind(this));
          subItemBoxes[j].addEventListener("mouseleave", FacoHeaderEvent.DrawerMenu.onSubItemBoxHover.bind(this));
      	}

				FacoHeaderUtils.DrawerMenu.updateSubItem(items[i]);
			}
		},

		onScroll() {
    	const drawerMenu = this.shadowRoot.querySelector(".drawer-menu");
    	const fogTop = drawerMenu.querySelector(".fog-top");
    	const fogBottom = drawerMenu.querySelector(".fog-bottom");

    	const innerHeight = window.innerHeight;
    	const calcFogHeight = innerHeight / 10;
    	const scrollTop = drawerMenu.scrollTop;
    	const scrollHeight = drawerMenu.scrollHeight;
    	const clientHeight = drawerMenu.clientHeight;
    	const scrollBuffer = 8;

    	let fogTopHeight = 0;
    	let fogBottomHeight = 0;

    	if (scrollTop > scrollBuffer) {
      	fogTopHeight = calcFogHeight;
    	}
    	if (scrollTop + clientHeight + scrollBuffer < scrollHeight) {
      	fogBottomHeight = calcFogHeight;
    	}

    	fogTop.style.height = `${fogTopHeight}px`;
    	fogBottom.style.height = `${fogBottomHeight}px`;
		},

		onItemBoxClick(event) {
    	const itemBox = event.currentTarget;
    	const item = itemBox.closest(".item");

    	const itemLabel = itemBox.querySelector(".item-label");
    	const itemArrowIcon = itemBox.querySelector(".item-arrow-icon");
    	const itemBottomLine = itemBox.querySelector(".item-bottom-line");

    	const subList = item.querySelector(".sub-list");
    	const subItems = subList.querySelectorAll(".sub-item");

    	const open = "open";
    	let shouldOpen = 0;
    	let action = "remove";
    	if (!Number(item.dataset.isOpen)) {
      	shouldOpen = 1;
      	action = "add";
    	}

    	if (shouldOpen) {
      	const calcSubListHeight = subItems.length * 64;
      	subList.style.height = `${calcSubListHeight}px`;
    	} else {
      	subList.style.height = "";
      	if (Number(this.dataset.touchType)) {
        	FacoHeaderUtils.DrawerMenu.timerSubItem(item, 1);

        	const subItemBottomLines = item.querySelectorAll(".sub-item-bottom-line");
        	subItemBottomLines.forEach(subItemBottomLine => {
          	subItemBottomLine.style.width = "";
        	});
      	}
    	}

    	if (!Number(this.dataset.touchType)) {
      	FacoHeaderUtils.DrawerMenu.setHoverLockItemBox(item, shouldOpen);
    	}

    	item.classList[action](open);
    	itemLabel.classList[action](open);
    	itemArrowIcon.classList[action](open);
    	itemBottomLine.classList[action](open);
    	subList.classList[action](open);

    	item.dataset.isOpen = shouldOpen;
		},

		onSubListTransitionEnd(event) {
    	const target = event.target;
    	const subList = event.currentTarget;

    	if (
      	target === subList
      	&& event.propertyName === "height"
    	) {
      	const item = subList.closest(".item");

      	if (Number(item.dataset.isOpen) && Number(this.dataset.touchType)) {
					FacoHeaderUtils.DrawerMenu.updateSubItem(item);
        	FacoHeaderUtils.DrawerMenu.timerSubItem(item);
				} else if (Number(item.dataset.isOpen)) {
        	/* HMI */
        	FacoHeaderUtils.DrawerMenu.updateSubItem(item);

        	const subItemBoxes = item.querySelectorAll(".sub-item-box");
        	subItemBoxes.forEach(box => {
          	if (Number(box.dataset.isHover)) {
            	const subItemBottomLine = box.querySelector(".sub-item-bottom-line");
            	subItemBottomLine.style.width = `${Number(subItemBottomLine.dataset.width)}px`;
          	}
        	});
      	}
      	FacoHeaderEvent.DrawerMenu.onScroll.call(this);
    	}
		},

		onSubItemBoxHover(event) {
    	const eventType = event.type;
    	const subItemBox = event.currentTarget;
    	const subItem = subItemBox.closest(".sub-item");
    	const subItemBottomLine = subItem.querySelector(".sub-item-bottom-line");

    	if (eventType === "mouseenter") {
      	subItemBottomLine.style.width = `${subItemBottomLine.dataset.width}px`;
      	subItemBox.dataset.isHover = 1;
    	} else if (eventType === "mouseleave") {
      	subItemBottomLine.style.width = "";
      	subItemBox.dataset.isHover = 0;
    	}
		}
	}
};

export { FacoHeaderEvent };
