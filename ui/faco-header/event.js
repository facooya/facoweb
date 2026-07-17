/* SPDX-License-Identifier: MIT
 *
 * Copyright 2025-2026 Facooya and Fanone Facooya
 */

import { FacoHeaderUtils } from "./utils.js";

const FacoHeaderEvent = {
	init(facoHeader) {
		facoHeader.setTimerResize = FacoHeaderEvent.setTimerResize.bind(facoHeader);
		facoHeader.onResize = FacoHeaderEvent.onResize.bind(facoHeader);
		window.addEventListener("resize", facoHeader.setTimerResize);
		facoHeader.onLoad = FacoHeaderEvent.onLoad.bind(facoHeader);
		window.addEventListener("load", facoHeader.onLoad);

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

		const drawerMenu = facoHeader.shadowRoot.querySelector(".drawer-menu");
		drawerMenu.onScroll = FacoHeaderEvent.DrawerMenu.onScroll.bind(facoHeader);
		drawerMenu.onItemBoxClick = FacoHeaderEvent.DrawerMenu.onItemBoxClick.bind(facoHeader);
		drawerMenu.onSubListTransitionEnd = FacoHeaderEvent.DrawerMenu.onSubListTransitionEnd.bind(facoHeader);

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

	onLoad() {
		if (Number(this.dataset.screenType) >= 2) {
			const topBar = this.shadowRoot.querySelector(".top-bar");
			const mainMenu = this.shadowRoot.querySelector(".main-menu");
			FacoHeaderUtils.MainMenu.updateMaxHeightSubList(mainMenu, topBar, 1);
			FacoHeaderUtils.MainMenu.updateTopChevronBottomWrapper(mainMenu);

			if (Number(this.dataset.screenType) === 2) {
				FacoHeaderUtils.MainMenu.setTranslateSubList(mainMenu, true);
				FacoHeaderUtils.MainMenu.updateTranslateChevronWrapper(mainMenu, true);
			}
		}

		const mainMenuItems = this.shadowRoot.querySelectorAll(".main-menu .item");
		mainMenuItems.forEach((item) => {
			FacoHeaderUtils.MainMenu.updateSubItem(item);
			FacoHeaderUtils.MainMenu.updateScrollSubList(item, false);
		});
		const drawerMenuItems = this.shadowRoot.querySelectorAll(".drawer-menu .item");
		drawerMenuItems.forEach((item) => {
			FacoHeaderUtils.DrawerMenu.updateSubItem(item);
		});

		const mainMenu = this.shadowRoot.querySelector(".main-menu");
		const subLists = mainMenu.querySelectorAll(".sub-list");
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
				FacoHeaderUtils.MainMenu.updateSubItem(item);
				FacoHeaderUtils.MainMenu.updateScrollSubList(item, false);
			});

			FacoHeaderUtils.MainMenu.closeItem(this, FacoHeaderEvent);

			if (prevScreenType === 2) {
				FacoHeaderUtils.MainMenu.setTranslateSubList(mainMenu, false);
				FacoHeaderUtils.MainMenu.updateTranslateChevronWrapper(mainMenu, false);
			}

			if (screenType === 1) {
				FacoHeaderUtils.MainMenu.updateFogHeight(mainMenu);
				mainMenu.onScroll();
				FacoHeaderUtils.MainMenu.updateHeightSubList(mainMenu, 0);
				FacoHeaderUtils.MainMenu.updateMaxHeightSubList(mainMenu, topBar, 0);
			} else if (screenType >= 2) {
				FacoHeaderUtils.MainMenu.updateHeightSubList(mainMenu, 1);
				FacoHeaderUtils.MainMenu.updateMaxHeightSubList(mainMenu, topBar, 1);
				FacoHeaderUtils.MainMenu.updateTopChevronBottomWrapper(mainMenu);
			}

			const lastIndex = mainMenuItems.length - 1;
			FacoHeaderUtils.MainMenu.setAlignX_RightItem(this, mainMenuItems[lastIndex]);

			if (screenType === 2) {
				FacoHeaderUtils.MainMenu.setTranslateSubList(mainMenu, true);
				FacoHeaderUtils.MainMenu.updateTranslateChevronWrapper(mainMenu, true);
			}

			/* drawer menu */
			const drawerMenu = this.shadowRoot.querySelector(".drawer-menu");
			const drawerMenuItems = drawerMenu.querySelectorAll(".item");
			drawerMenuItems.forEach(item => {
				FacoHeaderUtils.DrawerMenu.updateSubItem(item);
			});
			FacoHeaderUtils.DrawerMenu.updateFogHeight(drawerMenu);
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
			const topBar = this.shadowRoot.querySelector(".top-bar");

			/* main menu */
			const mainMenu = this.shadowRoot.querySelector(".main-menu");
			const mainMenuItems = mainMenu.querySelectorAll(".item");
			mainMenuItems.forEach(item => {
				FacoHeaderUtils.MainMenu.updateSubItem(item);
			});

			if (Number(this.dataset.screenType) === 1) {
				mainMenu.onScroll();
				FacoHeaderUtils.MainMenu.updateFogHeight(mainMenu);
			} else {
				FacoHeaderUtils.MainMenu.updateMaxHeightSubList(mainMenu, topBar, 1);
				FacoHeaderUtils.MainMenu.updateTopChevronBottomWrapper(mainMenu);
				if (Number(this.dataset.screenType) === 2) {
					FacoHeaderUtils.MainMenu.setTranslateSubList(mainMenu, true);
					FacoHeaderUtils.MainMenu.updateTranslateChevronWrapper(mainMenu, true);
				}
			}

			/* drawer menu */
			const drawerMenu = this.shadowRoot.querySelector(".drawer-menu");
			const drawerMenuItems = drawerMenu.querySelectorAll(".item");
			drawerMenuItems.forEach(item => {
				FacoHeaderUtils.DrawerMenu.updateSubItem(item);
			});

			FacoHeaderUtils.DrawerMenu.updateFogHeight(drawerMenu);
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
				const content = mainMenu.querySelector(".content");
				content.scrollTop = 0;
				shouldActive = 1;
				action = "add";
			}

			const mainMenuFogTop = mainMenu.querySelector(".fog-top");
			const mainMenuFogBottom = mainMenu.querySelector(".fog-bottom");
			if (shouldActive) {
				const gridIcon = topBar.querySelector(".grid-icon");
				if (Number(gridIcon.dataset.isActive)) {
					topBar.onGridIconClick();
				}
				FacoHeaderUtils.TopBar.updateOverlay(this, 0);

				setTimeout(() => {
					mainMenuFogTop.style.opacity = "1";
					mainMenuFogBottom.style.opacity = "1";
				}, 300);

			} else {
				FacoHeaderUtils.MainMenu.closeItem(this, FacoHeaderEvent);
				FacoHeaderUtils.TopBar.updateOverlay(this, 1);

				mainMenuFogTop.style.opacity = "";
				mainMenuFogBottom.style.opacity = "";
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
				const content = drawerMenu.querySelector(".content");
				content.scrollTop = 0;
				shouldActive = 1;
				action = "add";
				screenType = Number(this.dataset.screenType);
			}

			const drawerMenuFogTop = drawerMenu.querySelector(".fog-top");
			const drawerMenuFogBottom = drawerMenu.querySelector(".fog-bottom");
			if (shouldActive) {
				const hamburgerIcon = topBar.querySelector(".hamburger-icon");
				if (screenType === 1 && Number(hamburgerIcon.dataset.isActive)) {
					topBar.onHamburgerIconClick();
				} else if (screenType === 2) {
					FacoHeaderUtils.MainMenu.closeItem(this, FacoHeaderEvent);
				}
				FacoHeaderUtils.TopBar.updateOverlay(this, 2);

				/* Fog effect enable. */
				setTimeout(() => {
					drawerMenuFogTop.style.opacity = "1";
					drawerMenuFogBottom.style.opacity = "1";
				}, 300);

			} else {
				FacoHeaderUtils.DrawerMenu.closeItem(this, FacoHeaderEvent);
				FacoHeaderUtils.TopBar.updateOverlay(this);

				/* Fog effect disable. */
				drawerMenuFogTop.style.opacity = "";
				drawerMenuFogBottom.style.opacity = "";
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

			const facoFooter = document.querySelector("faco-footer");
			if (facoFooter && screenType !== 1) {
				facoFooter.classList[action](gridIconActive);
			}

			const facoMain = document.querySelector("faco-main");
			if (facoMain && screenType !== 1) {
				facoMain.classList[action](gridIconActive);
			}

			gridIcon.dataset.isActive = shouldActive;
		},

		onGridItemTransitionEnd(event) {
			/* type: 36 */
			const target = event.target;
			const gridItem = event.currentTarget;
	
			if (target === gridItem && event.propertyName === "transform") {
				const mainMenuItems = this.shadowRoot.querySelectorAll(".main-menu .item");
				const lastIndex = mainMenuItems.length - 1;
				FacoHeaderUtils.MainMenu.setAlignX_RightItem(this, mainMenuItems[lastIndex]);
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
				const content = mainMenu.querySelector(".content");
				content[listener]("scroll", mainMenu.onScroll);
				FacoHeaderUtils.MainMenu.updateHeightSubList(mainMenu, 0);
			} else if (screenType >= 2) {
				subLists.forEach(subList => {
					subList.dataset.scrollLock = true;
					subList.scrollTop = 0;
					subList[listener]("scroll", mainMenu.onSubListScroll);
				});
				FacoHeaderUtils.MainMenu.updateHeightSubList(mainMenu, 1);
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
				FacoHeaderUtils.MainMenu.updateFogHeight(mainMenu);
			}
		},

		onScroll() {
			/* type 14 */
			const mainMenu = this.shadowRoot.querySelector(".main-menu");
			const content = mainMenu.querySelector(".content");
			const fogTop = mainMenu.querySelector(".fog-top");
			const fogBottom = mainMenu.querySelector(".fog-bottom");

			const scrollTop = content.scrollTop;
			const scrollHeight = content.scrollHeight;
			const clientHeight = content.clientHeight;
			const scrollBuffer = 8;

			let active = "active";
			let topAction = "remove";
			let bottomAction = "remove";

			if (scrollTop > scrollBuffer) {
				topAction = "add";
			}
			if (scrollTop + clientHeight + scrollBuffer < scrollHeight) {
				bottomAction = "add";
			}

			fogTop.classList[topAction](active);
			fogBottom.classList[bottomAction](active);
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
				FacoHeaderUtils.MainMenu.updateScrollSubList(item, false);
			} else {
				const subList = item.querySelector(".sub-list");
				subList.scrollTop = 0;
			}

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
				if (screenType === 1) {
					subList.style.height = `${subList.dataset.height}px`;
				} else if (screenType === 2) {
					subList.scrollTop = 0;
					FacoHeaderUtils.MainMenu.closeItem(this, FacoHeaderEvent);
					const topBar = this.shadowRoot.querySelector(".top-bar");
					const gridIcon = topBar.querySelector(".grid-icon");
					if (Number(gridIcon.dataset.isActive)) {
						topBar.onGridIconClick();
					}
				} else if (screenType === 3) {
					subList.scrollTop = 0;
					FacoHeaderUtils.MainMenu.closeItem(this, FacoHeaderEvent);
				}

			} else {
				if (Number(this.dataset.touchType)) {
					FacoHeaderUtils.MainMenu.timerSubItemBox(item, false);

					const subItemBottomLines = item.querySelectorAll(".sub-item-bottom-line");
					subItemBottomLines.forEach(subItemBottomLine => {
						subItemBottomLine.classList.remove("active");
					});
				}

				if (screenType === 1) {
					subList.style.height = "";
				} else if (screenType >= 2) {
					FacoHeaderUtils.MainMenu.updateScrollSubList(item, false);
				}
			}

			if (!Number(this.dataset.touchType)) {
				FacoHeaderUtils.MainMenu.setHoverLockItemBox(item, shouldOpen);
			}

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
			if (subList.dataset.scrollLock === "true") {
				return;
			}

			const item = subList.closest(".item");
			FacoHeaderUtils.MainMenu.updateScrollSubList(item, true);
		},

		onSubListTransitionEnd(event) {
			/* type: all */
			const target = event.target;
			const subList = event.currentTarget;

			if (target === subList) {
				const item = subList.closest(".item");
			}

			if (
				target === subList
				&& event.propertyName === "clip-path"
				|| event.propertyName === "height"
			) {
				const item = subList.closest(".item");

				if (Number(item.dataset.isOpen)) {
					if (Number(this.dataset.touchType)) {
						FacoHeaderUtils.MainMenu.timerSubItemBox(item, true);
					}

					if (Number(this.dataset.screenType) >= 2) {
						FacoHeaderUtils.MainMenu.updateScrollSubList(item, true);
					}
				} else {
					if (Number(this.dataset.screenType) >= 2) {
						FacoHeaderUtils.MainMenu.updateScrollSubList(item, false);
					}
				}

				if (Number(this.dataset.screenType) === 1) {
					const mainMenu = this.shadowRoot.querySelector(".main-menu");
					mainMenu.onScroll();
				}
			}
		},
	},

	DrawerMenu: {
		manager(facoHeader, screenType, shouldAdd) {
			let listener = "removeEventListener";
			if (shouldAdd) {
				listener = "addEventListener";
			}

			const drawerMenu = facoHeader.shadowRoot.querySelector(".drawer-menu");
			const content = drawerMenu.querySelector(".content");
			content[listener]("scroll", drawerMenu.onScroll);

			const items = drawerMenu.querySelectorAll(".item");
			for (let i = 0; i < items.length; i++) {
				const itemBox = items[i].querySelector(".item-box");
				itemBox[listener]("click", drawerMenu.onItemBoxClick);

				const subList = items[i].querySelector(".sub-list");
				subList[listener]("transitionend", drawerMenu.onSubListTransitionEnd);
			}

			FacoHeaderUtils.DrawerMenu.updateFogHeight(drawerMenu);
		},

		onScroll() {
			const drawerMenu = this.shadowRoot.querySelector(".drawer-menu");
			const content = drawerMenu.querySelector(".content");
			const fogTop = drawerMenu.querySelector(".fog-top");
			const fogBottom = drawerMenu.querySelector(".fog-bottom");

			const scrollTop = content.scrollTop;
			const scrollHeight = content.scrollHeight;
			const clientHeight = content.clientHeight;
			const scrollBuffer = 8;

			let active = "active";
			let topAction = "remove";
			let bottomAction = "remove";

			if (scrollTop > scrollBuffer) {
				topAction = "add";
			}
			if (scrollTop + clientHeight + scrollBuffer < scrollHeight) {
				bottomAction = "add";
			}

			fogTop.classList[topAction](active);
			fogBottom.classList[bottomAction](active);
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
					FacoHeaderUtils.DrawerMenu.timerSubItemBox(item, false);

					const subItemBottomLines = item.querySelectorAll(".sub-item-bottom-line");
					subItemBottomLines.forEach(subItemBottomLine => {
						subItemBottomLine.classList.remove("active");
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
					FacoHeaderUtils.DrawerMenu.timerSubItemBox(item, true);
				}
				const drawerMenu = this.shadowRoot.querySelector(".drawer-menu");
				drawerMenu.onScroll();
			}
		},
	},
};

export { FacoHeaderEvent };
