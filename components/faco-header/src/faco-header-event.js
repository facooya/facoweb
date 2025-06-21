/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Header event
 */

import { FacoHeaderUtils } from "./faco-header-utils.js";

const FacoHeaderEvent = {
	init(facoHeader) {
		facoHeader.setTimerResize = FacoHeaderEvent.setTimerResize.bind(facoHeader);
		facoHeader.onResize = FacoHeaderEvent.onResize.bind(facoHeader);
		window.addEventListener("resize", facoHeader.setTimerResize);

		const topBar = facoHeader.shadowRoot.querySelector(".top-bar");
		topBar.onGridIconClick = FacoHeaderEvent.TopBar.onGridIconClick.bind(facoHeader);
		topBar.onHamburgerIconClick = FacoHeaderEvent.TopBar.onHamburgerIconClick.bind(facoHeader);
		topBar.onOverlayClick = FacoHeaderEvent.TopBar.onOverlayClick.bind(facoHeader);
		topBar.onGridItemTransitionEnd = FacoHeaderEvent.TopBar.onGridItemTransitionEnd.bind(facoHeader);

		const mainMenu = facoHeader.shadowRoot.querySelector(".main-menu");
		mainMenu.onScroll = FacoHeaderEvent.MainMenu.onScroll.bind(facoHeader);
		mainMenu.onItemHover = FacoHeaderEvent.MainMenu.onItemHover.bind(facoHeader);
		mainMenu.onItemBoxClick = FacoHeaderEvent.MainMenu.onItemBoxClick.bind(facoHeader);
		mainMenu.onSubListScroll = FacoHeaderEvent.MainMenu.onSubListScroll.bind(facoHeader);
		mainMenu.onSubListTransitionEnd = FacoHeaderEvent.MainMenu.onSubListTransitionEnd.bind(facoHeader);
		mainMenu.onSubItemBoxHover = FacoHeaderEvent.MainMenu.onSubItemBoxHover.bind(facoHeader);

		const drawerMenu = facoHeader.shadowRoot.querySelector(".drawer-menu");
		drawerMenu.onScroll = FacoHeaderEvent.DrawerMenu.onScroll.bind(facoHeader);
		drawerMenu.onItemBoxClick = FacoHeaderEvent.DrawerMenu.onItemBoxClick.bind(facoHeader);
		drawerMenu.onSubListTransitionEnd = FacoHeaderEvent.DrawerMenu.onSubListTransitionEnd.bind(facoHeader);
		drawerMenu.onSubItemBoxHover = FacoHeaderEvent.DrawerMenu.onSubItemBoxHover.bind(facoHeader);

		const screenType = Number(facoHeader.dataset.screenType);
		FacoHeaderEvent.TopBar.manager(facoHeader, screenType, 1);
		FacoHeaderEvent.MainMenu.manager(facoHeader, screenType, 1);
		FacoHeaderEvent.DrawerMenu.manager(facoHeader, screenType, 2);
	},

	setTimerResize() {
    clearTimeout(this.dataset.resizeId);
    this.dataset.resizeId = setTimeout(
			this.onResize,
      200
    );
	},

	onResize() {
		this.screenType;

		if (Number(this.dataset.screenType) !== Number(this.dataset.prevScreenType)) {
			/* resize display */
			const prevScreenType = Number(this.dataset.prevScreenType);
			const screenType = Number(this.dataset.screenType);

			/* top bar */
			const topBar = this.shadowRoot.querySelector(".top-bar");
			const gridIcon = topBar.querySelector(".grid-icon");

			if (Number(gridIcon.dataset.isActive)) {
				topBar.onGridIconClick();
			}

			if (prevScreenType === 1) {
				const hamburgerIcon = topBar.querySelector(".hamburger-icon");
				if (Number(hamburgerIcon.dataset.isActive)) {
					topBar.onHamburgerIconClick();
				}
			}

			/* main menu */
			const mainMenu = this.shadowRoot.querySelector(".main-menu");
			const mainMenuItems = mainMenu.querySelectorAll(".item");
			mainMenuItems.forEach(item => {
				FacoHeaderUtils.MainMenu.updateSubItem.call(this, item);
			});

			FacoHeaderUtils.MainMenu.closeItem.call(this, FacoHeaderEvent);
			if (prevScreenType >= 2) {
				FacoHeaderUtils.MainMenu.updateMaxHeightSubList.call(this);
			}

			/* drawer menu */
			const drawerMenu = this.shadowRoot.querySelector(".drawer-menu");
    	const drawerMenuItems = drawerMenu.querySelectorAll(".item");
    	drawerMenuItems.forEach(item => {
      	FacoHeaderUtils.DrawerMenu.updateSubItem.call(this, item);
    	});
    	drawerMenu.onScroll();

			/* manager */
			FacoHeaderEvent.TopBar.manager(this, prevScreenType, 0);
			FacoHeaderEvent.TopBar.manager(this, screenType, 1);
			FacoHeaderEvent.MainMenu.manager(this, prevScreenType, 0);
			FacoHeaderEvent.MainMenu.manager(this, screenType, 1);
			FacoHeaderEvent.DrawerMenu.manager(this, prevScreenType, 0);
			FacoHeaderEvent.DrawerMenu.manager(this, screenType, 1);

			this.dataset.prevScreenType = this.dataset.screenType;
		} else {
			/* resize sensor */
			/* main menu */
			const mainMenu = this.shadowRoot.querySelector(".main-menu");
			const mainMenuItems = mainMenu.querySelectorAll(".item");
			mainMenuItems.forEach(item => {
      	if (Number(item.dataset.isOpen)) {
					FacoHeaderUtils.MainMenu.updateSubItem(item);

        	if (Number(this.dataset.touchType)) {
          	const subItemBottomLines = item.querySelectorAll(".sub-item-bottom-line");
          	subItemBottomLines.forEach(subItemBottomLine => {
            	subItemBottomLine.style.width = `${subItemBottomLine.dataset.width}px`;
          	});

        	} else {
          	const subItemBoxes = item.querySelectorAll(".sub-item-box");
          	subItemBoxes.forEach(subItemBox => {
            	if (Number(subItemBox.dataset.isHover)) {
              	const subItemBottomLine = subItemContainer.querySelector(".sub-item-bottom-line");
              	subItemBottomLine.style.width = `${subItemBottomLine.dataset.width}px`
            	}
          	});
        	}
      	}
			});

			if (Number(this.dataset.screenType) === 1) {
				mainMenu.onScroll();
			} else {
				FacoHeaderUtils.MainMenu.updateMaxHeightSubList.call(this);
			}

			/* drawer menu */
			const drawerMenu = this.shadowRoot.querySelector(".drawer-menu");
    	const drawerMenuItems = drawerMenu.querySelectorAll(".item");
    	drawerMenuItems.forEach(item => {
      	if (Number(item.dataset.isOpen)) {
        	FacoHeaderUtils.DrawerMenu.updateSubItem.call(this, item);

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
		manager(facoHeader, screenType, shouldAdd) {
			let listener = "removeEventListener"
			if (shouldAdd) {
				listener = "addEventListener";
			}

			const topBar = facoHeader.shadowRoot.querySelector(".top-bar");

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

		onOverlayClick() {
			/* type: 14 */
			const topBar = this.shadowRoot.querySelector(".top-bar");
			const gridIcon = topBar.querySelector(".grid-icon");
			const hamburgerIcon = topBar.querySelector(".hamburger-icon");

			if (Number(hamburgerIcon.dataset.isActive)) {
				topBar.onHamburgerIconClick();
			} else if (Number(gridIcon.dataset.isActive)) {
				topBar.onGridIconClick();
			}
		},

		onHamburgerIconClick() {
			/* type: 14 */
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
					// FacoHeaderEvent.TopBar.onGridIconClick.call(this);
					topBar.onGridIconClick();
				}
				FacoHeaderUtils.TopBar.updateOverlay.call(this, 0);
			} else {
				FacoHeaderUtils.MainMenu.closeItem.call(this, FacoHeaderEvent);
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
					// FacoHeaderEvent.TopBar.onHamburgerIconClick.call(this);
					topBar.onHamburgerIconClick();
				} else if (screenType === 2) {
					FacoHeaderUtils.MainMenu.closeItem.call(this, FacoHeaderEvent);
				}
				FacoHeaderUtils.TopBar.updateOverlay.call(this, 2);
			} else {
				FacoHeaderUtils.DrawerMenu.closeItem.call(this, FacoHeaderEvent);
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

		onGridItemTransitionEnd(event) {
			/* type: 36 */
			const target = event.target;
			const gridItem = event.currentTarget;
	
			if (target === gridItem && event.propertyName === "transform") {
				const mainMenuItems = this.shadowRoot.querySelectorAll(".main-menu .item");
				const lastIndex = mainMenuItems.length - 1;
				FacoHeaderUtils.MainMenu.setAlignX_RightItem.call(this, mainMenuItems[lastIndex]);
				FacoHeaderUtils.MainMenu.updateLeftChevronWrapper.call(this, mainMenuItems[lastIndex]);
			}
		}
	},

	MainMenu: {
		manager(facoHeader, screenType, shouldAdd) {
			let listener = "removeEventListener"
			if (shouldAdd) {
				listener = "addEventListener";
			}

			const mainMenu = facoHeader.shadowRoot.querySelector(".main-menu");
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

			const list = facoHeader.shadowRoot.querySelector(".main-menu .list");
			if (screenType === 3 && !Number(facoHeader.dataset.touchType)) {
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

			if (!Number(facoHeader.dataset.touchType)) {
      	const subItemBoxes = list.querySelectorAll(".sub-item-box");

      	subItemBoxes.forEach(box => {
        	box[listener]("mouseenter", mainMenu.onSubItemBoxHover);
        	box[listener]("mouseleave", mainMenu.onSubItemBoxHover);
      	});
			}
		},

		onScroll() {
			/* type 14 */
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
      	FacoHeaderUtils.MainMenu.updateScrollSubList.call(this, item, 0);
    	}
    	FacoHeaderUtils.MainMenu.updateHeightSubList.call(this, item, shouldOpen);

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
					FacoHeaderUtils.MainMenu.closeItem.call(this, FacoHeaderEvent);
					const topBar = this.shadowRoot.querySelector(".top-bar");
					const gridIcon = topBar.querySelector(".grid-icon");
					if (Number(gridIcon.dataset.isActive)) {
						topBar.onGridIconClick();
					}
				} else if (screenType === 3) {
					FacoHeaderUtils.MainMenu.closeItem.call(this, FacoHeaderEvent);
				}
    	} else {
      	if (Number(this.dataset.touchType)) {
        	FacoHeaderUtils.MainMenu.timerSubItemBox.call(this, item, 1);

        	const subItemBottomLines = item.querySelectorAll(".sub-item-bottom-line");
        	subItemBottomLines.forEach(subItemBottomLine => {
          	subItemBottomLine.style.width = "";
        	});
      	}

				if (screenType >= 2) {
					FacoHeaderUtils.MainMenu.updateScrollSubList.call(this, item, 0);
				}
    	}

    	if (!Number(this.dataset.touchType)) {
      	FacoHeaderUtils.MainMenu.setHoverLockItemBox.call(this, item, shouldOpen);
    	}
			FacoHeaderUtils.MainMenu.updateHeightSubList.call(this, item, shouldOpen);

    	item.classList[action](open);
    	itemLabel.classList[action](open);
    	itemArrowIcon.classList[action](open);
    	itemBottomLine.classList[action](open);
    	subList.classList[action](open);

    	item.dataset.isOpen = shouldOpen;
		},

		onSubListScroll(event) {
			/* type: 23 */
			const subList = event.currentTarget;
			const item = subList.closest(".item");
			FacoHeaderUtils.MainMenu.updateScrollSubList.call(this, item, 1);
		},

		onSubListTransitionEnd(event) {
			/* type: all */
    	const target = event.target;
    	const subList = event.currentTarget;

    	if (
      	target === subList
      	&& event.propertyName === "height"
    	) {
      	const item = subList.closest(".item");

      	if (Number(item.dataset.isOpen)) {
					FacoHeaderUtils.MainMenu.updateSubItem.call(this, item);
					if (Number(this.dataset.touchType)) {
        		FacoHeaderUtils.MainMenu.timerSubItemBox(item);
					} else {
        		const subItemBoxes = item.querySelectorAll(".sub-item-box");
						const hover = "hover";
        		subItemBoxes.forEach(subItemBox => {
          		if (Number(subItemBox.dataset.isHover)) {
            		const subItemBottomLine = subItemBox.querySelector(".sub-item-bottom-line");
            		subItemBottomLine.style.width = `${Number(subItemBottomLine.dataset.width)}px`;
								const subItemArrowIcon = subItemBox.querySelector(".sub-item-arrow-icon");
								subItemArrowIcon.classList.add(hover);
          		}
        		});
					}

					if (Number(this.dataset.screenType) >= 2) {
						FacoHeaderUtils.MainMenu.updateLeftChevronWrapper.call(this, item);
						FacoHeaderUtils.MainMenu.updateTopChevronBottomWrapper.call(this, item);
						FacoHeaderUtils.MainMenu.updateScrollSubList.call(this, item, 1);
					}
				}

				if (Number(this.dataset.screenType) === 1) {
					const mainMenu = this.shadowRoot.querySelector(".main-menu");
					mainMenu.onScroll();
				}
    	} else if (target === subList && event.propertyName === "max-height") {
				const item = subList.closest(".item");
				if (Number(item.dataset.isOpen)) {
					FacoHeaderUtils.MainMenu.updateTopChevronBottomWrapper.call(this, item);
					FacoHeaderUtils.MainMenu.updateScrollSubList.call(this, item, 1);
				}
			}
		},

		onSubItemBoxHover(event) {
			/* type 456 */
    	const eventType = event.type;
    	const subItemBox = event.currentTarget;
    	const subItemBottomLine = subItemBox.querySelector(".sub-item-bottom-line");
			const subItemArrowIcon = subItemBox.querySelector(".sub-item-arrow-icon");
			const active = "active";

    	if (eventType === "mouseenter") {
      	subItemBottomLine.style.width = `${subItemBottomLine.dataset.width}px`;
				subItemArrowIcon.classList.add(active);
      	subItemBox.dataset.isHover = 1;
    	} else if (eventType === "mouseleave") {
      	subItemBottomLine.style.width = "";
				subItemArrowIcon.classList.remove(active);
      	subItemBox.dataset.isHover = 0;
    	}
		}
	},

	DrawerMenu: {
		manager(facoHeader, screenType, shouldAdd) {
			let listener = "removeEventListener";
			if (shouldAdd) {
				listener = "addEventListener";
			}

			const drawerMenu = facoHeader.shadowRoot.querySelector(".drawer-menu");
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
        	FacoHeaderUtils.DrawerMenu.timerSubItemBox.call(this, item, 1);

        	const subItemBottomLines = item.querySelectorAll(".sub-item-bottom-line");
        	subItemBottomLines.forEach(subItemBottomLine => {
          	subItemBottomLine.style.width = "";
        	});
      	}
    	}

    	if (!Number(this.dataset.touchType)) {
      	FacoHeaderUtils.DrawerMenu.setHoverLockItemBox.call(this, item, shouldOpen);
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
					FacoHeaderUtils.DrawerMenu.updateSubItem.call(this, item);
        	FacoHeaderUtils.DrawerMenu.timerSubItemBox.call(this, item);
				} else if (Number(item.dataset.isOpen)) {
        	FacoHeaderUtils.DrawerMenu.updateSubItem.call(this, item);

        	const subItemBoxes = item.querySelectorAll(".sub-item-box");
        	subItemBoxes.forEach(subItemBox => {
          	if (Number(subItemBox.dataset.isHover)) {
            	const subItemBottomLine = subItemBox.querySelector(".sub-item-bottom-line");
            	subItemBottomLine.style.width = `${subItemBottomLine.dataset.width}px`;
          	}
        	});
      	}
				const drawerMenu = this.shadowRoot.querySelector(".drawer-menu");
      	drawerMenu.onScroll();
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
