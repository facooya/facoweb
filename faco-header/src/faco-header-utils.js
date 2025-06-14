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
		stateMobile(shouldOpen, action) {
			if (shouldOpen) {
				if (Number(this.dataset.drawerMenuState)) {
					this.drawerMenuState = 0;
				}
				FacoHeaderUtils.TopBar.updateOverlay.call(this, 0);
			} else {
				// FacoHeaderUtils.MainMenu.itemCloseAll();
				FacoHeaderUtils.TopBar.updateOverlay.call(this, 1);
			}

			const active = "active";
			const hamburgerItems = this.shadowRoot.querySelectorAll(".hamburger-item");
			hamburgerItems.forEach(item => {
				item.classList[action](active);
			});

			const mainMenu = this.shadowRoot.querySelector(".main-menu");
			const hamburgerIconActive = "hamburger-icon-active";
			mainMenu.classList[action](hamburgerIconActive);
		},

		updateSubListHeight(item, shouldOpen) {
			const subList = item.querySelector(".main-menu .sub-list");
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

		setHoverLockItemContainer(item, shouldLock) {
    	const itemText = item.querySelector(".item-text");
    	const itemArrowIcon = item.querySelector(".item-arrow-icon");
    	const itemBottomLine = item.querySelector(".item-bottom-line");

    	const hoverLockClass = "hover-lock";
    	let action = "remove";
    	if (shouldLock) {
      	action = "add";
    	}

    	itemText.classList[action](hoverLockClass);
    	itemArrowIcon.classList[action](hoverLockClass);
    	itemBottomLine.classList[action](hoverLockClass);
		},

		updateSubItemContainer(item) {
    	const subItemContainers = item.querySelectorAll(".sub-item-container");
    	const subItemTexts = item.querySelectorAll(".sub-item-text");
    	const subItemArrowIcons = item.querySelectorAll(".sub-item-arrow-icon");

    	for (let i = 0; i < subItemArrowIcons.length; i++) {
      	const containerWidth = subItemContainers[i].clientWidth;
      	const textWidth = subItemTexts[i].clientWidth;
      	let calcLeft = (containerWidth + textWidth) / 2;
      	subItemArrowIcons[i].left = calcLeft;
      	subItemArrowIcons[i].style.left = `${subItemArrowIcons[i].left}px`;
    	}

    	const subItemBottomLines = item.querySelectorAll(".sub-item-bottom-line");
    	const bufferWidth = 24;

    	for (let i = 0; i < subItemBottomLines.length; i++) {
      	const textWidth = subItemTexts[i].clientWidth;
      	let calcWidth = textWidth + bufferWidth;
      	subItemBottomLines[i].width = calcWidth;

				const containerWidth = subItemContainers[i].clientWidth;
				let calcLeft = (containerWidth - calcWidth) / 2;
				subItemBottomLines[i].left = calcLeft;
				subItemBottomLines[i].style.left = `${subItemBottomLines[i].left}px`;
				console.log(subItemBottomLines[i].left);
    	}
		},

		timerSubItemContainer(item, shouldReset) {
    	/* type: 2356 */
    	const subItemContainers = item.querySelectorAll(".sub-item-container");

    	if (shouldReset) {
      	subItemContainers.forEach(subContainer => {
        	clearTimeout(subContainer.timerId);
        	FacoHeaderUtils.MainMenu.timeoutSubItemContainer(subContainer, shouldReset);
      	});

    	} else {
      	for (let i = 0; i < subItemContainers.length; i++) {
        	subItemContainers[i].timerId = setTimeout(
          	FacoHeaderUtils.MainMenu.timeoutSubItemContainer,
          	i * 150,
          	subItemContainers[i],
          	shouldReset
        	);
      	}
    	}
		},

		timeoutSubItemContainer(subContainer, shouldReset) {
    	/* Only timerSubItemContainer() */
    	const subItemText = subContainer.querySelector(".sub-item-text");
    	const subItemArrowIcon = subContainer.querySelector(".sub-item-arrow-icon");
    	const subitemBottomLine = subContainer.querySelector(".sub-item-bottom-line");

    	const activeClass = "active";
    	let clAction = "remove";
    	let setSubItemBottomLineWidth = "";
    	if (!shouldReset) {
      	clAction = "add";
      	setSubItemBottomLineWidth = `${subitemBottomLine.width}px`;
    	}
    	subitemBottomLine.style.width = setSubItemBottomLineWidth;

    	subItemText.classList[clAction](activeClass);
    	subItemArrowIcon.classList[clAction](activeClass);
		}
	},

	DrawerMenu: {
		close(FacoHeaderEvent) {
    	const items = this.shadowRoot.querySelectorAll(".drawer-menu .item");
    	items.forEach(item => {
      	if (Number(item.dataset.isOpen)) {
        	const itemBox = item.querySelector(".item-box");
        	const modifyEvent = { currentTarget: itemBox };
        	FacoHeaderEvent.DrawerMenu.onItemBoxClick.call(this, modifyEvent);
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
        	FacoHeaderUtils.DrawerMenu._timeoutSubItem(subItemBox, shouldReset);
      	});

    	} else {
      	for (let i = 0; i < subItemBoxes.length; i++) {
        	subItemBoxes[i].dataset.timerId = setTimeout(
          	FacoHeaderUtils.DrawerMenu._timeoutSubItem,
          	i * 150,
          	subItemBoxes[i],
          	shouldReset
        	);
      	}
    	}
		},

		_timeoutSubItem(subItemBox, shouldReset){
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
