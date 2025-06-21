/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Header utilities
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

			const gridIcon = facoHeader.shadowRoot.querySelector(".top-bar .grid-icon");
			if (!Number(gridIcon.dataset.isActive)) {
				subList.classList.remove(alignX_Right);
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
      	subList.classList.add(alignX_Right);
    	} else {
      	subList.classList.remove(alignX_Right);
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

		updateHeightSubList(item, shouldOpen) {
			const subList = item.querySelector(".sub-list");
			if (shouldOpen) {
				if (subList.dataset.height == null) {
					const subItems = subList.querySelectorAll(".sub-item");
					subList.dataset.height = subItems.length * 64;
				}
				subList.style.height = `${subList.dataset.height}px`;
			} else {
				subList.style.height = "";
			}
		},

		updateMaxHeightSubList(facoHeader) {
    	const mainMenu = facoHeader.shadowRoot.querySelector(".main-menu");
    	const subLists = mainMenu.querySelectorAll(".sub-list");
    	const screenType = Number(facoHeader.dataset.screenType);
	
    	if (screenType === 1) {
      	subLists.forEach(subList => {
        	subList.style.maxHeight = "";
      	});
    	} else {
      	const topBar = facoHeader.shadowRoot.querySelector(".top-bar");
      	const buffer = 16;
      	const topBarHeight = topBar.clientHeight;
      	let calcMaxHeight = window.innerHeight - (topBarHeight + buffer);
      	subLists.forEach(subList => {
        	subList.style.maxHeight = `${calcMaxHeight}px`;
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
	
    	if (shouldAction) {
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

		updateLeftChevronWrapper(facoHeader, item) {
    	const screenType = Number(facoHeader.dataset.screenType);
    	if (screenType === 1) { return; }
	
    	const itemIndex = Number(item.dataset.index);
    	const subList = item.querySelector(".sub-list");
    	const chevronTopWrapper = item.querySelector(".item-chevron-top-wrapper");
    	const chevronBottomWrapper = item.querySelector(".item-chevron-bottom-wrapper");
	
    	const itemWidth = item.offsetWidth;
    	const subListWidth = subList.offsetWidth;
    	const chevronWrapperWidth = chevronTopWrapper.offsetWidth;
    	let calcLeft = 0;
	
    	if (screenType === 2) {
      	if (itemIndex === 0) {
        	calcLeft = (subListWidth - chevronWrapperWidth) / 2;
      	} else if (itemIndex === 3) {
        	const deltaWidth = subListWidth - itemWidth;
        	calcLeft = (subListWidth - chevronWrapperWidth) / 2 - deltaWidth;
      	} else {
        	calcLeft = (itemWidth - chevronWrapperWidth) / 2;
      	}
    	} else if (screenType === 3) {
      	if (itemIndex === 3) {
        	if (subList.classList.contains("align-x-right")) {
          	const deltaWidth = subListWidth - itemWidth;
          	calcLeft = (subListWidth - chevronWrapperWidth) / 2 - deltaWidth;
        	} else {
          	calcLeft = (itemWidth - chevronWrapperWidth) / 2;
        	}
      	} else {
        	calcLeft = (itemWidth - chevronWrapperWidth) / 2;
      	}
    	}
	
    	chevronTopWrapper.style.left = `${calcLeft}px`;
    	chevronBottomWrapper.style.left = `${calcLeft}px`;
		},

		updateTopChevronBottomWrapper(facoHeader, item) {
    	const screenType = Number(facoHeader.dataset.screenType);
    	if (screenType === 1) { return; }
	
    	const subList = item.querySelector(".sub-list");
    	const chevronBottomWrapper = item.querySelector(".item-chevron-bottom-wrapper");
	
    	const defaultTop = 72;
    	const buffer = 16;
    	const subListHeight = subList.clientHeight;
    	const chevronBottomWrapperHeight = chevronBottomWrapper.offsetHeight;
    	let calcTop = defaultTop + subListHeight;
    	calcTop -= chevronBottomWrapperHeight + buffer;
	
    	chevronBottomWrapper.style.top = `${calcTop}px`;
		},

		updateSubItem(item) {
    	const subItemBoxes = item.querySelectorAll(".sub-item-box");
    	const subItemLabels = item.querySelectorAll(".sub-item-label");
    	const subItemArrowIcons = item.querySelectorAll(".sub-item-arrow-icon");
    	const subItemBottomLines = item.querySelectorAll(".sub-item-bottom-line");
    	const bufferWidth = 24;

    	for (let i = 0; i < subItemBoxes.length; i++) {
      	const boxWidth = subItemBoxes[i].clientWidth;
      	const labelWidth = subItemLabels[i].clientWidth;
      	let calcArrowLeft = (boxWidth + labelWidth) / 2;
      	subItemArrowIcons[i].dataset.left = calcArrowLeft;
      	subItemArrowIcons[i].style.left = `${subItemArrowIcons[i].dataset.left}px`;

      	let calcLineLeft = (boxWidth - (labelWidth + bufferWidth)) / 2;
      	subItemBottomLines[i].dataset.left = calcLineLeft;
      	subItemBottomLines[i].style.left = `${subItemBottomLines[i].dataset.left}px`;

      	let calcLineWidth = labelWidth + bufferWidth;
      	subItemBottomLines[i].dataset.width = calcLineWidth;
    	}
		},

		timerSubItemBox(item, shouldReset) {
    	const subItemBoxes = item.querySelectorAll(".sub-item-box");

    	if (shouldReset) {
      	subItemBoxes.forEach(subItemBox => {
        	clearTimeout(Number(subItemBox.dataset.timerId));
        	FacoHeaderUtils.MainMenu._timeoutSubItemBox(subItemBox, shouldReset);
      	});

    	} else {
      	for (let i = 0; i < subItemBoxes.length; i++) {
        	subItemBoxes[i].dataset.timerId = setTimeout(
          	FacoHeaderUtils.MainMenu._timeoutSubItemBox,
          	i * 150,
          	subItemBoxes[i],
          	shouldReset
        	);
      	}
    	}
		},

		_timeoutSubItemBox(subItemBox, shouldReset) {
    	const subItemLabel = subItemBox.querySelector(".sub-item-label");
    	const subItemArrowIcon = subItemBox.querySelector(".sub-item-arrow-icon");
    	const subItemBottomLine = subItemBox.querySelector(".sub-item-bottom-line");
    	const active = "active";

    	let action = "remove";
    	let setWidth = "";
    	if (!shouldReset) {
      	action = "add";
      	setWidth = `${subItemBottomLine.dataset.width}px`;
    	}
    	subItemBottomLine.style.width = setWidth;

    	subItemLabel.classList[action](active);
    	subItemArrowIcon.classList[action](active);
		}
	},

	DrawerMenu: {
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

    	for (let i = 0; i < subItemBoxes.length; i++) {
      	const boxWidth = subItemBoxes[i].clientWidth;
      	const labelWidth = subItemLabels[i].clientWidth;
      	let calcArrowLeft = (boxWidth + labelWidth) / 2;
      	subItemArrowIcons[i].dataset.left = calcArrowLeft;
      	subItemArrowIcons[i].style.left = `${subItemArrowIcons[i].dataset.left}px`;

      	let calcLineLeft = (boxWidth - (labelWidth + bufferWidth)) / 2;
      	subItemBottomLines[i].dataset.left = calcLineLeft;
      	subItemBottomLines[i].style.left = `${subItemBottomLines[i].dataset.left}px`;

      	let calcLineWidth = labelWidth + bufferWidth;
      	subItemBottomLines[i].dataset.width = calcLineWidth;
    	}
		},

		timerSubItemBox(item, shouldReset) {
    	const subItemBoxes = item.querySelectorAll(".sub-item-box");

    	if (shouldReset) {
      	subItemBoxes.forEach(subItemBox => {
        	clearTimeout(Number(subItemBox.dataset.timerId));
        	FacoHeaderUtils.DrawerMenu._timeoutSubItemBox(subItemBox, shouldReset);
      	});

    	} else {
      	for (let i = 0; i < subItemBoxes.length; i++) {
        	subItemBoxes[i].dataset.timerId = setTimeout(
          	FacoHeaderUtils.DrawerMenu._timeoutSubItemBox,
          	i * 150,
          	subItemBoxes[i],
          	shouldReset
        	);
      	}
    	}
		},

		_timeoutSubItemBox(subItemBox, shouldReset) {
    	const subItemLabel = subItemBox.querySelector(".sub-item-label");
    	const subItemArrowIcon = subItemBox.querySelector(".sub-item-arrow-icon");
    	const subItemBottomLine = subItemBox.querySelector(".sub-item-bottom-line");
    	const active = "active";

    	let action = "remove";
    	let setWidth = "";
    	if (!shouldReset) {
      	action = "add";
      	setWidth = `${subItemBottomLine.dataset.width}px`;
    	}
    	subItemBottomLine.style.width = setWidth;

    	subItemLabel.classList[action](active);
    	subItemArrowIcon.classList[action](active);
		}
	}
};

export { FacoHeaderUtils };
