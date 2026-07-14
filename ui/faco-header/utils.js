/* SPDX-License-Identifier: MIT
 *
 * Copyright 2025-2026 Facooya and Fanone Facooya
 */

const FacoHeaderUtils = {
	// FIXME: updateLogo (topBar) ???
	TopBar: {
		updateOverlay(facoHeader, overlayType) {
			/* type: 14 */
			const overlay = facoHeader.shadowRoot.querySelector(".top-bar .overlay");
			const overlayTypes = [
				"right-open",
				"right-close",
				"left-open"
			];

			/* Reset Default: left-close */
			overlayTypes.forEach(type => {
				overlay.classList.remove(type);
			});

			/* Overlay Type
			* overlayType = null:default, 0:right-open, 1:right-close, 2:left-open
			*/
			if (overlayType != null) {
				overlay.classList.add(overlayTypes[overlayType]);
			}
		}
	},

	MainMenu: {
		updateFogHeight(mainMenu) {
			const fogTop = mainMenu.querySelector(".fog-top");
			const fogBottom = mainMenu.querySelector(".fog-bottom");
			const calcFogHeight = window.innerHeight / 10;
			fogTop.style.height = `${calcFogHeight}px`;
			fogBottom.style.height = `${calcFogHeight}px`;
		},

		closeItem(facoHeader, FacoHeaderEvent) {
			const mainMenu = facoHeader.shadowRoot.querySelector(".main-menu");
			const items = mainMenu.querySelectorAll(".item");
			items.forEach(item => {
				if (Number(item.dataset.isOpen)) {
					const itemBox = item.querySelector(".item-box");
					const modifyEvent = { currentTarget: itemBox };
					mainMenu.onItemBoxClick(modifyEvent);
				}
			});
		},

		setAlignX_RightItem(facoHeader, item) {
			const alignX_Right = "align-x-right";
			const subList = item.querySelector(".sub-list");
			const chevronTopWrapper = item.querySelector(".item-chevron-top-wrapper");
			const chevronBottomWrapper = item.querySelector(".item-chevron-bottom-wrapper");

			const gridIcon = facoHeader.shadowRoot.querySelector(".top-bar .grid-icon");
			if (!Number(gridIcon.dataset.isActive) || Number(facoHeader.dataset.screenType) !== 3) {
				subList.style.transform = "";
				subList.classList.remove(alignX_Right);
				chevronTopWrapper.style.translate = "";
				chevronBottomWrapper.style.translate = "";
				return;
			}

			const buffer = 16;
			const drawerMenuWidth = 320;
			const subListWidth = 320;

			const html = document.documentElement;
			const htmlWidth = html.offsetWidth;
			const drawerMenuLeft = htmlWidth - (drawerMenuWidth + buffer);

			const itemWidth = item.offsetWidth;
			const deltaWidth = subListWidth - itemWidth;
			const itemRect = item.getBoundingClientRect();
			const subListRight = itemRect.right + (deltaWidth / 2);

			if (drawerMenuLeft < subListRight) {
				let calcTranslateX = subListWidth / 2;
				calcTranslateX += deltaWidth / 2;
				calcTranslateX *= -1;
				subList.style.transform = `translateX(${calcTranslateX}px)`;
				subList.classList.add(alignX_Right);

				console.log("add");
				calcTranslateX = deltaWidth / 2;
				chevronTopWrapper.style.translate = `-${calcTranslateX}px 0`;
				chevronBottomWrapper.style.translate = `-${calcTranslateX}px 0`;
			} else {
				subList.style.transform = "";
				subList.classList.remove(alignX_Right);
				chevronTopWrapper.style.translate = "";
				chevronBottomWrapper.style.translate = "";
			}
		},

		setHoverLockItemBox(item, shouldLock) {
			const itemLabel = item.querySelector(".item-label");
			const itemArrowIcon = item.querySelector(".item-arrow-icon");
			const itemBottomLine = item.querySelector(".item-bottom-line");

			const hoverLock = "hover-lock";
			let action = "remove";
			if (shouldLock) {
				action = "add";
			}

			itemLabel.classList[action](hoverLock);
			itemArrowIcon.classList[action](hoverLock);
			itemBottomLine.classList[action](hoverLock);
		},

		setTranslateSubList(mainMenu, isTST) {
			/* T.ST */
			/* Based on 'left: 50%'. */
			const items = mainMenu.querySelectorAll(".item");
			const last = items.length - 1;
			const subListFirst = items[0].querySelector(".sub-list");
			const subListLast = items[last].querySelector(".sub-list");

			if (!isTST) {
				subListFirst.style.transform = "";
				subListLast.style.transform = "";
				return;
			}

			const itemWidth = items[0].offsetWidth;
			const subListWidth = subListFirst.offsetWidth;
			const deltaWidth = subListWidth - itemWidth;

			let calcX = itemWidth / 2;
			subListFirst.style.transform = `translateX(-${calcX}px)`;

			calcX = subListWidth / 2;
			calcX += deltaWidth / 2;
			subListLast.style.transform = `translateX(-${calcX}px)`;
		},

		updateHeightSubList(mainMenu, shouldSetStyle) {
			const subLists = mainMenu.querySelectorAll(".sub-list");
			subLists.forEach((subList) => {
				const subItems = subList.querySelectorAll(".sub-item");
				subList.dataset.height = subItems.length * 64;
				if (shouldSetStyle) {
					subList.style.height = `${subList.dataset.height}px`;
				} else {
					subList.style.height = "";
				}
			});
		},

		updateMaxHeightSubList(mainMenu, topBar, shouldStyle) {
			const list = mainMenu.querySelector(".list");
			const subLists = list.querySelectorAll(".sub-list");
			const topBarHeight = topBar.clientHeight;
			const buffer = 16;

			const calcMaxHeight = window.innerHeight - (topBarHeight + buffer);
			list.dataset.maxHeight = calcMaxHeight;

			if (shouldStyle) {
				subLists.forEach((subList) => {
					subList.style.maxHeight = `${list.dataset.maxHeight}px`;
				});
			} else {
				subLists.forEach((subList) => {
					subList.style.maxHeight = "";
				});
			}
		},

		updateScrollSubList(item, shouldAction) {
			const subList = item.querySelector(".sub-list");
			const chevronTopWrapper = item.querySelector(".item-chevron-top-wrapper");
			const chevronBottomWrapper = item.querySelector(".item-chevron-bottom-wrapper");
			const active = "active";
			if (!shouldAction) {
				chevronTopWrapper.classList.remove(active);
				chevronBottomWrapper.classList.remove(active);
				return;
			}
	
			const buffer = 8;
			const scrollTop = subList.scrollTop;
			const scrollHeight = subList.scrollHeight;
			const clientHeight = subList.clientHeight;
			const calcScrollPosition = scrollTop + clientHeight + buffer;
	
			let clTopAction = "remove";
			let clBottomAction = "remove";
	
			if (shouldAction && clientHeight > buffer) {
				if (scrollTop > buffer) {
					clTopAction = "add";
				}
				if (calcScrollPosition < scrollHeight) {
					clBottomAction = "add";
				}
			}
	
			chevronTopWrapper.classList[clTopAction](active);
			chevronBottomWrapper.classList[clBottomAction](active);
		},

		updateTranslateChevronWrapper(mainMenu, shouldSet) {
			/* T.ST */
			const items = mainMenu.querySelectorAll(".item");
			const subLists = mainMenu.querySelectorAll(".sub-list");
			const chevronTopWrappers = mainMenu.querySelectorAll(".item-chevron-top-wrapper");
			const chevronBottomWrappers = mainMenu.querySelectorAll(".item-chevron-bottom-wrapper");
			const last = items.length - 1;

			if (!shouldSet) {
				chevronTopWrappers[0].style.translate = "";
				chevronBottomWrappers[0].style.translate = "";
				chevronTopWrappers[last].style.translate = "";
				chevronBottomWrappers[last].style.translate = "";
				return;
			}

			const itemWidth = items[0].offsetWidth;
			const subListWidth = subLists[0].offsetWidth;
			const chevronWrapperWidth = chevronTopWrappers[0].clientWidth;
			const deltaWidth = subListWidth - itemWidth;

			let calcX = 0;
			calcX = deltaWidth / 2;
			chevronTopWrappers[0].style.translate = `${calcX}px 0`;
			chevronBottomWrappers[0].style.translate = `${calcX}px 0`;
			chevronTopWrappers[last].style.translate = `-${calcX}px 0`;
			chevronBottomWrappers[last].style.translate = `-${calcX}px 0`;
		},

		updateTopChevronBottomWrapper(mainMenu) {
			const defaultTop = 72;
			const buffer = 16;
			const list = mainMenu.querySelector(".list");
			const chevronBottomWrappers = list.querySelectorAll(".item-chevron-bottom-wrapper");

			let calcTop = defaultTop + Number(list.dataset.maxHeight);
			calcTop -= chevronBottomWrappers[0].clientHeight + buffer;

			chevronBottomWrappers.forEach((chevronBottomWrapper) => {
				chevronBottomWrapper.style.top = `${calcTop}px`;
			});
		},

		updateSubItem(item) {
			const subItemBoxes = item.querySelectorAll(".sub-item-box");
			const subItemLabels = item.querySelectorAll(".sub-item-label");
			const subItemArrowIcons = item.querySelectorAll(".sub-item-arrow-icon");
			const subItemBottomLines = item.querySelectorAll(".sub-item-bottom-line");
			const bufferWidth = 24;

			const canvas = document.createElement("canvas");
			const canvasContext = canvas.getContext("2d");
			const winGet = window.getComputedStyle;
			const subItemLabelFS = winGet(subItemLabels[0]).fontStyle;
			const subItemLabelFW = winGet(subItemLabels[0]).fontWeight;
			const subItemLabelFSZ = winGet(subItemLabels[0]).fontSize;
			const subItemLabelFF = winGet(subItemLabels[0]).fontFamily;
			canvasContext.font = `${subItemLabelFS} ${subItemLabelFW} ${subItemLabelFSZ} ${subItemLabelFF}`;

			for (let i = 0; i < subItemBoxes.length; i++) {
				const boxWidth = subItemBoxes[i].clientWidth;
				let labelWidth = canvasContext.measureText(subItemLabels[i].textContent).width;
				if (labelWidth + bufferWidth > boxWidth) {
					labelWidth = boxWidth - bufferWidth;
				}

				let calcArrowLeft = (boxWidth + labelWidth) / 2;
				subItemArrowIcons[i].dataset.left = Math.ceil(calcArrowLeft);
				subItemArrowIcons[i].style.left = `${subItemArrowIcons[i].dataset.left}px`;

				let calcLineLeft = (boxWidth - (labelWidth + bufferWidth)) / 2;
				subItemBottomLines[i].dataset.left = Math.ceil(calcLineLeft);
				subItemBottomLines[i].style.left = `${subItemBottomLines[i].dataset.left}px`;

				let calcLineWidth = Math.ceil(labelWidth + bufferWidth);
				subItemBottomLines[i].style.width = `${calcLineWidth}px`;
			}
			canvas.remove();
		},

		timerSubItemBox(item, shouldSet) {
			const subItemBoxes = item.querySelectorAll(".sub-item-box");

			if (shouldSet) {
				for (let i = 0; i < subItemBoxes.length; i++) {
					subItemBoxes[i].dataset.timerId = setTimeout(
						FacoHeaderUtils.MainMenu._timeoutSubItemBox,
						i * 150,
						subItemBoxes[i],
						shouldSet
					);
				}

			} else {
				subItemBoxes.forEach(subItemBox => {
					clearTimeout(Number(subItemBox.dataset.timerId));
					FacoHeaderUtils.MainMenu._timeoutSubItemBox(subItemBox, shouldSet);
				});
			}
		},

		_timeoutSubItemBox(subItemBox, shouldSet) {
			const subItemLabel = subItemBox.querySelector(".sub-item-label");
			const subItemArrowIcon = subItemBox.querySelector(".sub-item-arrow-icon");
			const subItemBottomLine = subItemBox.querySelector(".sub-item-bottom-line");
			const active = "active";

			let action = "remove";
			if (shouldSet) {
				action = "add";
			}

			subItemLabel.classList[action](active);
			subItemArrowIcon.classList[action](active);
			subItemBottomLine.classList[action](active);
		}
	},

	DrawerMenu: {
		updateFogHeight(drawerMenu) {
			const fogTop = drawerMenu.querySelector(".fog-top");
			const fogBottom = drawerMenu.querySelector(".fog-bottom");
			const calcFogHeight = window.innerHeight / 10;
			fogTop.style.height = `${calcFogHeight}px`;
			fogBottom.style.height = `${calcFogHeight}px`;
		},

		closeItem(facoHeader, FacoHeaderEvent) {
			const drawerMenu = facoHeader.shadowRoot.querySelector(".drawer-menu");
			const items = drawerMenu.querySelectorAll(".item");
			items.forEach(item => {
				if (Number(item.dataset.isOpen)) {
					const itemBox = item.querySelector(".item-box");
					const modifyEvent = { currentTarget: itemBox };
					drawerMenu.onItemBoxClick(modifyEvent);
				}
			});
		},

		setHoverLockItemBox(item, shouldLock) {
			const itemLabel = item.querySelector(".item-label");
			const itemArrowIcon = item.querySelector(".item-arrow-icon");
			const itemBottomLine = item.querySelector(".item-bottom-line");

			const hoverLock = "hover-lock";
			let action = "remove";
			if (shouldLock) {
				action = "add";
			}

			itemLabel.classList[action](hoverLock);
			itemArrowIcon.classList[action](hoverLock);
			itemBottomLine.classList[action](hoverLock);
		},

		updateSubItem(item) {
			const subItemBoxes = item.querySelectorAll(".sub-item-box");
			const subItemLabels = item.querySelectorAll(".sub-item-label");
			const subItemArrowIcons = item.querySelectorAll(".sub-item-arrow-icon");
			const subItemBottomLines = item.querySelectorAll(".sub-item-bottom-line");
			const bufferWidth = 24;

			const canvas = document.createElement("canvas");
			const canvasContext = canvas.getContext("2d");
			const winGet = window.getComputedStyle;
			const subItemLabelFS = winGet(subItemLabels[0]).fontStyle;
			const subItemLabelFW = winGet(subItemLabels[0]).fontWeight;
			const subItemLabelFSZ = winGet(subItemLabels[0]).fontSize;
			const subItemLabelFF = winGet(subItemLabels[0]).fontFamily;
			canvasContext.font = `${subItemLabelFS} ${subItemLabelFW} ${subItemLabelFSZ} ${subItemLabelFF}`;

			for (let i = 0; i < subItemBoxes.length; i++) {
				const boxWidth = subItemBoxes[i].clientWidth;
				let labelWidth = canvasContext.measureText(subItemLabels[i].textContent).width;
				if (labelWidth + bufferWidth > boxWidth) {
					labelWidth = boxWidth - bufferWidth;
				} 

				let calcArrowLeft = (boxWidth + labelWidth) / 2;
				subItemArrowIcons[i].dataset.left = Math.ceil(calcArrowLeft);
				subItemArrowIcons[i].style.left = `${subItemArrowIcons[i].dataset.left}px`;

				let calcLineLeft = (boxWidth - (labelWidth + bufferWidth)) / 2;
				subItemBottomLines[i].dataset.left = Math.ceil(calcLineLeft);
				subItemBottomLines[i].style.left = `${subItemBottomLines[i].dataset.left}px`;

				let calcLineWidth = Math.ceil(labelWidth + bufferWidth);
				subItemBottomLines[i].style.width = `${calcLineWidth}px`;
			}
			canvas.remove();
		},

		timerSubItemBox(item, shouldSet) {
			const subItemBoxes = item.querySelectorAll(".sub-item-box");

			if (shouldSet) {
				for (let i = 0; i < subItemBoxes.length; i++) {
					subItemBoxes[i].dataset.timerId = setTimeout(
						FacoHeaderUtils.DrawerMenu._timeoutSubItemBox,
						i * 150,
						subItemBoxes[i],
						shouldSet
					);
				}

			} else {
				subItemBoxes.forEach(subItemBox => {
					clearTimeout(Number(subItemBox.dataset.timerId));
					FacoHeaderUtils.DrawerMenu._timeoutSubItemBox(subItemBox, shouldSet);
				});
			}
		},

		_timeoutSubItemBox(subItemBox, shouldSet) {
			const subItemLabel = subItemBox.querySelector(".sub-item-label");
			const subItemArrowIcon = subItemBox.querySelector(".sub-item-arrow-icon");
			const subItemBottomLine = subItemBox.querySelector(".sub-item-bottom-line");
			const active = "active";

			let action = "remove";
			if (shouldSet) {
				action = "add";
			}

			subItemLabel.classList[action](active);
			subItemArrowIcon.classList[action](active);
			subItemBottomLine.classList[action](active);
		}
	}
};

export { FacoHeaderUtils };
