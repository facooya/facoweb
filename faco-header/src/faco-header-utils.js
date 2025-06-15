/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Faco header utilities
 */

const FacoHeaderUtils = {
	TopBar: {
		updateOverlay(overlayType) {
    	const overlay = this.shadowRoot.querySelector(".top-bar .overlay");
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
		updateSubListHeight(item, shouldOpen) {
			/* type: */
			const subList = item.querySelector(".sub-list");
			if (shouldOpen) {
				if (subList.height == null) {
					const subItems = subList.querySelectorAll(".sub-item");
					subList.height = subItems.length * 64;
				}
				subList.style.height = `${subList.height}px`;
			} else {
				subList.style.height = "";
			}
		},

		updateSubListMaxHeight() {
    	const mainMenu = this.shadowRoot.querySelector(".main-menu");
    	const subLists = mainMenu.querySelectorAll(".sub-list");
    	const screenType = Number(this.dataset.screenType);
	
    	if (screenType === 1) {
      	subLists.forEach(subList => {
        	subList.style.maxHeight = "";
      	});
    	} else {
      	const topBar = this.shadowRoot.querySelector(".top-bar");
      	const buffer = 16;
      	const topBarHeight = topBar.clientHeight;
      	let calcMaxHeight = window.innerHeight - (topBarHeight + buffer);
      	subLists.forEach(subList => {
        	subList.style.maxHeight = `${calcMaxHeight}px`;
      	});
    	}
		},

		updateSubListScroll(item, shouldAction) {
			/* type: 23 */
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

		setLastItem(item) {
    	const alignX_Right = "align-x-right";
    	const mainMenuSubList = item.querySelector(".sub-list");

    	/* Define */
    	const buffer = 16;
    	const drawerMenuWidth = 320;
    	const mainMenuSubListWidth = 320;

    	/* Drawer Menu Left */
    	const html = document.documentElement;
    	const htmlWidth = html.offsetWidth;
    	const drawerMenuLeft = htmlWidth - (drawerMenuWidth + buffer);

    	/* Main Menu Sub List Right */
    	const itemWidth = item.offsetWidth;
    	const deltaWidth = mainMenuSubListWidth - itemWidth;
    	const itemRect = item.getBoundingClientRect();
    	const subListRight = itemRect.right + (deltaWidth / 2);

    	/* State */
    	if (drawerMenuLeft < subListRight) {
      	mainMenuSubList.classList.add(alignX_Right);
    	} else {
      	mainMenuSubList.classList.remove(alignX_Right);
    	}
		}
	},

	Menu: {
		close(FacoHeaderEvent, menu) {
    	const items = menu.querySelectorAll(".item");
    	items.forEach(item => {
      	if (Number(item.dataset.isOpen)) {
        	const itemBox = item.querySelector(".item-box");
        	const modifyEvent = { currentTarget: itemBox };
        	FacoHeaderEvent.Menu.onItemBoxClick.call(this, modifyEvent);
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

		timerSubItem(item, shouldReset) {
			/* type 123 */
    	const subItemBoxes = item.querySelectorAll(".sub-item-box");

    	if (shouldReset) {
      	subItemBoxes.forEach(subItemBox => {
        	clearTimeout(Number(subItemBox.dataset.timerId));
        	FacoHeaderUtils.Menu._timeoutSubItem(subItemBox, shouldReset);
      	});

    	} else {
      	for (let i = 0; i < subItemBoxes.length; i++) {
        	subItemBoxes[i].dataset.timerId = setTimeout(
          	FacoHeaderUtils.Menu._timeoutSubItem,
          	i * 150,
          	subItemBoxes[i],
          	shouldReset
        	);
      	}
    	}
		},

		_timeoutSubItem(subItemBox, shouldReset) {
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
