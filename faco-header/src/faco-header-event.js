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
		window.addEventListener("resize", FacoHeaderEvent.setTimerResize.bind(this));

		const topBar = this.shadowRoot.querySelector(".top-bar");
		topBar.onGridIconClick = FacoHeaderEvent.TopBar.onGridIconClick.bind(this);
		topBar.onHamburgerIconClick = FacoHeaderEvent.TopBar.onHamburgerIconClick.bind(this);
		topBar.onOverlayClick = FacoHeaderEvent.TopBar.onOverlayClick.bind(this);
		topBar.onGridItemTransitionEnd = FacoHeaderEvent.TopBar.onGridItemTransitionEnd.bind(this);

		const drawerMenu = this.shadowRoot.querySelector(".drawer-menu");
		drawerMenu.onScroll = FacoHeaderEvent.Menu.onScroll.bind(this, drawerMenu);
		drawerMenu.onItemBoxClick = FacoHeaderEvent.Menu.onItemBoxClick.bind(this);
		drawerMenu.onSubListTransitionEnd = FacoHeaderEvent.Menu.onSubListTransitionEnd.bind(this);
		drawerMenu.onSubItemBoxHover = FacoHeaderEvent.Menu.onSubItemBoxHover.bind(this);

		const mainMenu = this.shadowRoot.querySelector(".main-menu");
		mainMenu.onScroll = FacoHeaderEvent.Menu.onScroll.bind(this, mainMenu);
		mainMenu.onSubListTransitionEnd = FacoHeaderEvent.Menu.onSubListTransitionEnd.bind(this);
		mainMenu.onSubItemBoxHover = FacoHeaderEvent.Menu.onSubItemBoxHover.bind(this);

		mainMenu.onItemHover = FacoHeaderEvent.MainMenu.onItemHover.bind(this);
		mainMenu.onItemBoxClick = FacoHeaderEvent.MainMenu.onItemBoxClick.bind(this);
		mainMenu.onSubListScroll = FacoHeaderEvent.MainMenu.onSubListScroll.bind(this);

		const screenType = Number(this.dataset.screenType);
		FacoHeaderEvent.TopBar.manager.call(this, screenType, 1);
		FacoHeaderEvent.MainMenu.manager.call(this, screenType, 1);
		FacoHeaderEvent.DrawerMenu.manager.call(this, screenType, 1);
	},

	setTimerResize() {
    clearTimeout(this.dataset.resizeId);
    this.dataset.resizeId = setTimeout(
      FacoHeaderEvent._onResize.bind(this),
      200
    );
	},

	_onResize() {
		this.screenType;

		if (Number(this.dataset.screenType) !== Number(this.dataset.prevScreenType)) {
			/* resize display */
			const topBar = this.shadowRoot.querySelector(".top-bar");
			const gridIcon = topBar.querySelector(".grid-icon");

			if (Number(gridIcon.dataset.isActive)) {
				topBar.onGridIconClick();
			}

			if (Number(this.dataset.prevScreenType) === 1) {
				const hamburgerIcon = topBar.querySelector(".hamburger-icon");
				if (Number(hamburgerIcon.dataset.isActive)) {
					topBar.onHamburgerIconClick();
				}
			}

			const drawerMenu = this.shadowRoot.querySelector(".drawer-menu");
    	const drawerMenuItems = drawerMenu.querySelectorAll(".item");
    	drawerMenuItems.forEach(item => {
      	FacoHeaderUtils.Menu.updateSubItem(item);
    	});
    	drawerMenu.onScroll();

			const mainMenu = this.shadowRoot.querySelector(".main-menu");
			const mainMenuItems = mainMenu.querySelectorAll(".item");
			mainMenuItems.forEach(item => {
				FacoHeaderUtils.Menu.updateSubItem(item);
			});
			mainMenu.onScroll();

			const prevScreenType = Number(this.dataset.prevScreenType);
			const screenType = Number(this.dataset.screenType);

			if (prevScreenType >= 2) {
				FacoHeaderUtils.Menu.close.call(this, FacoHeaderEvent, mainMenu);
				// updateSubListMaxHeight();
			}

			/* manager */
			FacoHeaderEvent.TopBar.manager.call(this, prevScreenType, 0);
			FacoHeaderEvent.TopBar.manager.call(this, screenType, 1);
			FacoHeaderEvent.MainMenu.manager.call(this, prevScreenType, 0);
			FacoHeaderEvent.MainMenu.manager.call(this, screenType, 1);
			FacoHeaderEvent.DrawerMenu.manager.call(this, prevScreenType, 0);
			FacoHeaderEvent.DrawerMenu.manager.call(this, screenType, 1);

			this.dataset.prevScreenType = this.dataset.screenType;
		} else {
			/* resize sensor */
			const drawerMenu = this.shadowRoot.querySelector(".drawer-menu");
    	const drawerMenuItems = drawerMenu.querySelectorAll(".item");
    	drawerMenuItems.forEach(item => {
      	if (Number(item.dataset.isOpen)) {
        	FacoHeaderUtils.Menu.updateSubItem(item);

        	if (Number(this.dataset.touchType)) {
          	const subItemBottomLines = item.querySelectorAll(".sub-item-bottom-line");
          	subItemBottomLines.forEach(subItemBottomLine => {
            	subItemBottomLine.style.width = `${subItemBottomLine.dataset.width}px`;
          	});
        	}
      	}
    	});
			drawerMenu.onScroll();
		}
	},

	TopBar: {
		manager(screenType, shouldAdd) {
			let listener = "removeEventListener"
			if (shouldAdd) {
				listener = "addEventListener";
			}

			const topBar = this.shadowRoot.querySelector(".top-bar");

    	const gridIcon = topBar.querySelector(".grid-icon");
    	gridIcon[listener]("click", topBar.onGridIconClick);

    	if (screenType === 1) {
      	const hamburgerIcon = topBar.querySelector(".hamburger-icon");
      	hamburgerIcon[listener]("click", topBar.onHamburgerIconClick);

      	const overlay = topBar.querySelector(".overlay");
      	overlay[listener]("click", topBar.onOverlayClick);

    	} else if (screenType === 3) {
      	const gridItem = gridIcon.querySelector(".grid-item");
      	gridItem[listener]("transitionend", topBar.onGridItemTransitionEnd);
    	}
		},

		onGridIconClick() {
			/* type: all */
			const topBar = this.shadowRoot.querySelector(".top-bar");
			const mainMenu = this.shadowRoot.querySelector(".main-menu");
			const drawerMenu = this.shadowRoot.querySelector(".drawer-menu");
			const gridIcon = topBar.querySelector(".grid-icon");

			let shouldActive = 0;
			let action = "remove";
			let screenType = Number(this.dataset.prevScreenType);
			if (!Number(gridIcon.dataset.isActive)) {
				shouldActive = 1;
				action = "add";
				screenType = Number(this.dataset.screenType);
			}

			if (shouldActive) {
				const hamburgerIcon = topBar.querySelector(".hamburger-icon");
				if (screenType === 1 && Number(hamburgerIcon.dataset.isActive)) {
					FacoHeaderEvent.TopBar.onHamburgerIconClick.call(this);
				} else if (screenType === 2) {
					FacoHeaderUtils.Menu.close.call(this, FacoHeaderEvent, mainMenu);
				}
				FacoHeaderUtils.TopBar.updateOverlay.call(this, 2);
			} else {
				FacoHeaderUtils.Menu.close.call(this, FacoHeaderEvent, drawerMenu);
				FacoHeaderUtils.TopBar.updateOverlay.call(this);
			}

			const active = "active";
			const gridItems = gridIcon.querySelectorAll(".grid-item");
			gridItems.forEach(item => {
				item.classList[action](active);
			});

			const gridIconActive = "grid-icon-active";
			if (screenType === 3) {
				mainMenu.classList[action](gridIconActive);
			}
			drawerMenu.classList[action](gridIconActive);

			gridIcon.dataset.isActive = shouldActive;
		},

		onHamburgerIconClick() {
			/* type: 1 */
			const topBar = this.shadowRoot.querySelector(".top-bar");
			const mainMenu = this.shadowRoot.querySelector(".main-menu");
			const hamburgerIcon = topBar.querySelector(".hamburger-icon");

			let shouldActive = 0;
			let action = "remove";
			if (!Number(hamburgerIcon.dataset.isActive)) {
				shouldActive = 1;
				action = "add";
			}

			if (shouldActive) {
				const gridIcon = topBar.querySelector(".grid-icon");
				if (Number(gridIcon.dataset.isActive)) {
					FacoHeaderEvent.TopBar.onGridIconClick.call(this);
				}
				FacoHeaderUtils.TopBar.updateOverlay.call(this, 0);
			} else {
				FacoHeaderUtils.Menu.close.call(this, FacoHeaderEvent, mainMenu);
				FacoHeaderUtils.TopBar.updateOverlay.call(this, 1);
			}

			const active = "active";
			const hamburgerItems = topBar.querySelectorAll(".hamburger-item");
			hamburgerItems.forEach(item => {
				item.classList[action](active);
			});

			const hamburgerIconActive = "hamburger-icon-active";
			mainMenu.classList[action](hamburgerIconActive);

			hamburgerIcon.dataset.isActive = shouldActive;
		},

		onOverlayClick() {
			/* type: 1 */
			const topBar = this.shadowRoot.querySelector(".top-bar");
			const gridIcon = topBar.querySelector(".grid-icon");
			const hamburgerIcon = topBar.querySelector(".hamburger-icon");

			if (Number(hamburgerIcon.dataset.isActive)) {
				topBar.onHamburgerIconClick();
			} else if (Number(gridIcon.dataset.isActive)) {
				topBar.onGridIconClick();
			}
		},

		onGridItemTransitionEnd(event) {
			/* type: 3 */
			const target = event.target;
			const gridItem = event.currentTarget;
	
			if (target === gridItem && event.propertyName === "transform") {
				const mainMenuItems = this.shadowRoot.querySelectorAll(".main-menu .item");
				const lastIndex = mainMenuItems.length - 1;
				FacoHeaderUtils.MainMenu.setLastItem(mainMenuItems[lastIndex]);
				// TODO
				// updateChevronWrapperLeft(mainMenuItems[lastIndex]);
			}
		}
	},

	MainMenu: {
		manager(screenType, shouldAdd) {
			let listener = "removeEventListener"
			if (shouldAdd) {
				listener = "addEventListener";
			}

			const mainMenu = this.shadowRoot.querySelector(".main-menu");
			const subLists = mainMenu.querySelectorAll(".sub-list");
			subLists.forEach(subList => {
				subList[listener]("transitionend", mainMenu.onSubListTransitionEnd);
			});

			if (screenType === 1) {
				mainMenu[listener]("scroll", mainMenu.onScroll);
			} else if (screenType >= 2) {
				subLists.forEach(subList => {
					subList[listener]("scroll", mainMenu.onSubListScroll);
				});
			}

			const list = this.shadowRoot.querySelector(".main-menu .list");
			if (screenType === 3 && !Number(this.dataset.touchType)) {
      	const items = list.querySelectorAll(".item");
      	items.forEach(item => {
        	item[listener]("mouseenter", mainMenu.onItemHover);
        	item[listener]("mouseleave", mainMenu.onItemHover);
      	});
			} else {
      	const itemBoxes = list.querySelectorAll(".item-box");
      	itemBoxes.forEach(box => {
        	box[listener]("click", mainMenu.onItemBoxClick);
      	});
			}

			if (!Number(this.dataset.touchType)) {
      	const subItemBoxes = list.querySelectorAll(".sub-item-box");

      	subItemBoxes.forEach(box => {
        	box[listener]("mouseenter", mainMenu.onSubItemBoxHover);
        	box[listener]("mouseleave", mainMenu.onSubItemBoxHover);
      	});
			}

			FacoHeaderUtils.MainMenu.updateSubListMaxHeight.call(this);

			const items = this.shadowRoot.querySelectorAll(".main-menu .item");
			for (let i = 0; i < items.length; i++) {
				FacoHeaderUtils.Menu.updateSubItem.call(this, items[i]);
			}
		},

		onItemHover(event) {
    	/* type: 6 */
    	const eventType = event.type;
    	const item = event.currentTarget;

    	let shouldOpen = 0;
    	if (eventType === "mouseenter") {
      	shouldOpen = 1;
    	}

    	if (!shouldOpen) {
      	FacoHeaderUtils.MainMenu.updateSubListScroll.call(this, item, 0);
    	}
    	FacoHeaderUtils.MainMenu.updateSubListHeight.call(this, item, shouldOpen);

    	item.dataset.isOpen = shouldOpen;
		},

		onItemBoxClick(event) {
			/* type: 12345 */
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
			let screenType = Number(this.dataset.prevScreenType);
    	if (!Number(item.dataset.isOpen)) {
      	shouldOpen = 1;
      	action = "add";
				screenType = Number(this.dataset.screenType);
    	}

    	if (shouldOpen) {
				const mainMenu = this.shadowRoot.querySelector(".main-menu");
				if (screenType === 2) {
					FacoHeaderUtils.Menu.close.call(this, FacoHeaderEvent, mainMenu);
					const topBar = this.shadowRoot.querySelector(".top-bar");
					const gridIcon = topBar.querySelector(".grid-icon");
					if (Number(gridIcon.dataset.isActive)) {
						topBar.onGridIconClick();
					}
				} else if (screenType === 3) {
					FacoHeaderUtils.Menu.close.call(this, FacoHeaderEvent, mainMenu);
				}
    	} else {
      	if (Number(this.dataset.touchType)) {
        	FacoHeaderUtils.Menu.timerSubItem(item, 1);

        	const subItemBottomLines = item.querySelectorAll(".sub-item-bottom-line");
        	subItemBottomLines.forEach(subItemBottomLine => {
          	subItemBottomLine.style.width = "";
        	});
      	}

				if (screenType >= 2) {
					FacoHeaderUtils.MainMenu.updateSubListScroll(item, 0);
				}
    	}

    	if (!Number(this.dataset.touchType)) {
      	FacoHeaderUtils.Menu.setHoverLockItemBox.call(this, item, shouldOpen);
    	}
			FacoHeaderUtils.MainMenu.updateSubListHeight.call(this, item, shouldOpen);

    	item.classList[action](open);
    	itemLabel.classList[action](open);
    	itemArrowIcon.classList[action](open);
    	itemBottomLine.classList[action](open);
    	subList.classList[action](open);

    	item.dataset.isOpen = shouldOpen;
		},

		onSubListScroll(event) {
			/* type 23 */
			const subList = event.currentTarget;
			const item = subList.closest(".item");
			FacoHeaderUtils.MainMenu.updateSubListScroll.call(this, item, 1);
		}
	},

	DrawerMenu: {
		manager(screenType, shouldAdd) {
			let listener = "removeEventListener";
			if (shouldAdd) {
				listener = "addEventListener";
			}

			const drawerMenu = this.shadowRoot.querySelector(".drawer-menu");
			drawerMenu[listener]("scroll", drawerMenu.onScroll);

			const items = drawerMenu.querySelectorAll(".item");
	    for (let i = 0; i < items.length; i++) {
				const itemBox = items[i].querySelector(".item-box");
				itemBox[listener]("click", drawerMenu.onItemBoxClick);

				const subList = items[i].querySelector(".sub-list");
				subList[listener]("transitionend", drawerMenu.onSubListTransitionEnd);

      	const subItemBoxes = items[i].querySelectorAll(".sub-item-box");
      	for (let j = 0; j < subItemBoxes.length; j++) {
          subItemBoxes[j][listener]("mouseenter", drawerMenu.onSubItemBoxHover);
          subItemBoxes[j][listener]("mouseleave", drawerMenu.onSubItemBoxHover);
      	}

				FacoHeaderUtils.Menu.updateSubItem(items[i]);
			}
		},
	},

	Menu: {
		onScroll(menu) {
    	const fogTop = menu.querySelector(".fog-top");
    	const fogBottom = menu.querySelector(".fog-bottom");

    	const innerHeight = window.innerHeight;
    	const calcFogHeight = innerHeight / 10;
    	const scrollTop = menu.scrollTop;
    	const scrollHeight = menu.scrollHeight;
    	const clientHeight = menu.clientHeight;
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
        	FacoHeaderUtils.Menu.timerSubItem(item, 1);

        	const subItemBottomLines = item.querySelectorAll(".sub-item-bottom-line");
        	subItemBottomLines.forEach(subItemBottomLine => {
          	subItemBottomLine.style.width = "";
        	});
      	}
    	}

    	if (!Number(this.dataset.touchType)) {
      	FacoHeaderUtils.Menu.setHoverLockItemBox.call(this, item, shouldOpen);
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
					FacoHeaderUtils.Menu.updateSubItem(item);
        	FacoHeaderUtils.Menu.timerSubItem(item);
				} else if (Number(item.dataset.isOpen)) {
        	/* HMI */
        	FacoHeaderUtils.Menu.updateSubItem(item);

        	const subItemBoxes = item.querySelectorAll(".sub-item-box");
        	subItemBoxes.forEach(box => {
          	if (Number(box.dataset.isHover)) {
            	const subItemBottomLine = box.querySelector(".sub-item-bottom-line");
            	subItemBottomLine.style.width = `${Number(subItemBottomLine.dataset.width)}px`;
          	}
        	});
      	}
				const drawerMenu = this.shadowRoot.querySelector(".drawer-menu");
      	FacoHeaderEvent.Menu.onScroll.call(this, drawerMenu);
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
