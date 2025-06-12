/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */

import { TopBarAccessor } from "../top-bar/top-bar.js";

const MainMenuAccessor = {
  itemCloseAll() {
    /* TopBarHandler.gridItemClick() <=> this */
    MainMenuUtils.itemCloseAll();
  },
  updateChevronWrapperLeft(item) {
    /* TopBarHandler.gridItemTransitionEnd() => this */
    MainMenuUtils.updateChevronWrapperLeft(item);
  },
  setItemLastAlignX_Right(item) {
    /* TopBarHandler.gridItemTransitionEnd() => this */
    MainMenuUtils.setItemLastAlignX_Right(item);
  }
}

const MainMenuController = {
  init() {
    MainMenuUtils.generator();
    MainMenuManager.init();
  },
  load() {
    MainMenuManager.load();
  },
  resizeDisplay() {
    MainMenuManager.resizeDisplay();
  },
  resizeSensor() {
    MainMenuManager.resizeSensor();
  }
}

const MainMenuManager = {
  init() {
    MainMenuManager.initEvent();
    const items = document.querySelectorAll(".main-menu .item");

    for (let i = 0; i < items.length; i++) {
      items[i].index = i;
      items[i].isOpen = false;
      const subItems = items[i].querySelectorAll(".sub-item");
      const subItemContainers = items[i].querySelectorAll(".sub-item-container");

      for (let j = 0; j < subItems.length; j++) {
        subItems[j].index = j;
        subItemContainers.isHover = false;
      }
    }
  },

  load() {
    MainMenuUtils.updateSubListMaxHeight();
  },

  resizeDisplay() {
    const headerContent = document.querySelector(".header-content");
    if (headerContent.previousScreenType >= 2) {
      MainMenuUtils.itemCloseAll();
    }
    MainMenuManager.resizeEvent();
    MainMenuUtils.updateSubListMaxHeight();
  },

  resizeSensor() {
    const items = document.querySelectorAll(".main-menu .item");
    items.forEach(item => {
      if (item.isOpen) {
        MainMenuUtils.subItemContainerTools(item);
        const headerContent = document.querySelector(".header-content");
        if (headerContent.isTouchDevice) {

          /* HMI: isOpen */
          const subItemBottomLines = item.querySelectorAll(".sub-item-bottom-line");
          subItemBottomLines.forEach(subItemBottomLine => {
            subItemBottomLine.style.width = `${subItemBottomLine.width}px`;
          });
        } else if (!headerContent.isTouchDevice) {

          /* HMI: isOpen && isHover */
          const subItemContainers = item.querySelectorAll(".sub-item-container");
          subItemContainers.forEach(subItemContainer => {
            if (subItemContainer.isHover) {
              const subItemBottomLine = subItemContainer.querySelector(".sub-item-bottom-line");
              subItemBottomLine.style.width = `${subItemBottomLine.width}px`
            }
          });
        }
      }
    });
    MainMenuUtils.updateSubListMaxHeight();
    MainMenuHandler.scroll();
  },

  initEvent() {
    const headerContent = document.querySelector(".header-content");
    const mainMenu = document.querySelector(".main-menu");
    const list = mainMenu.querySelector(".list");
    const screenType = headerContent.screenType;
    const isTouchDevice = headerContent.isTouchDevice;
    const subLists = list.querySelectorAll(".sub-list");

    subLists.forEach(subList => {
      subList.addEventListener("transitionend", MainMenuHandler.subListTransitionEnd);
    });

    if (screenType === 1) {
      mainMenu.addEventListener("scroll", MainMenuHandler.scroll);
    } else if (screenType >= 2) {
      subLists.forEach(subList => {
        subList.addEventListener("scroll", MainMenuHandler.subListScroll);
      });
    }

    if (screenType === 3 && !isTouchDevice) {
      const items = list.querySelectorAll(".item");
      items.forEach(item => {
        item.addEventListener("mouseenter", MainMenuHandler.itemHover);
        item.addEventListener("mouseleave", MainMenuHandler.itemHover);
      });
    } else {
      const itemContainers = list.querySelectorAll(".item-container");
      itemContainers.forEach(container => {
        container.addEventListener("click", MainMenuHandler.itemContainerClick);
      });
    }

    if (!isTouchDevice) {
      const subItemContainers = list.querySelectorAll(".sub-item-container");
      subItemContainers.forEach(subContainer => {
        subContainer.addEventListener("mouseenter", MainMenuHandler.subItemContainerHover);
        subContainer.addEventListener("mouseleave", MainMenuHandler.subItemContainerHover);
      });
    }
  },

  resizeEvent() {
    const headerContent = document.querySelector(".header-content");
    const mainMenu = document.querySelector(".main-menu");
    const list = mainMenu.querySelector(".list");
    const screenType = headerContent.screenType;
    const previousScreenType = headerContent.previousScreenType;
    const isTouchDevice = headerContent.isTouchDevice;

    if (previousScreenType === 1) {
      mainMenu.removeEventListener("scroll", MainMenuHandler.scroll);
      const subLists = list.querySelectorAll(".sub-list");
      subLists.forEach(subList => {
        subList.addEventListener("scroll", MainMenuHandler.subListScroll);
      });
    } else if (screenType === 1) {
      mainMenu.addEventListener("scroll", MainMenuHandler.scroll);
      const subLists = list.querySelectorAll(".sub-list");
      subLists.forEach(subList => {
        subList.removeEventListener("scroll", MainMenuHandler.subListScroll);
      });
    }

    if (previousScreenType === 3 && !isTouchDevice) {
      const items = list.querySelectorAll(".item");
      items.forEach(item => {
        item.removeEventListener("mouseenter", MainMenuHandler.itemHover);
        item.removeEventListener("mouseleave", MainMenuHandler.itemHover);
      });
      const itemContainers = list.querySelectorAll(".item-container");
      itemContainers.forEach(container => {
        container.addEventListener("click", MainMenuHandler.itemContainerClick);
      });
    } else if (screenType === 3 && !isTouchDevice) {
      const itemContainers = list.querySelectorAll(".item-container");
      itemContainers.forEach(container => {
        container.removeEventListener("click", MainMenuHandler.itemContainerClick);
      });
      const items = list.querySelectorAll(".item");
      items.forEach(item => {
        item.addEventListener("mouseenter", MainMenuHandler.itemHover);
        item.addEventListener("mouseleave", MainMenuHandler.itemHover);
      });
    }
  }
}

const MainMenuHandler = {
  itemHover(event) {
    /* Only Desktop Screen Type, Non-touched Device */
    const eventType = event.type;
    const item = event.currentTarget;
    let shouldOpen = false;

    if (eventType === "mouseenter") {
      shouldOpen = true;
    }
    if (!shouldOpen) {
      MainMenuUtils.subListScrollLogic(item, false);
    }
    MainMenuUtils.updateSubListHeight(item, shouldOpen);
    item.isOpen = shouldOpen;
  },

  itemContainerClick(event) {
    /* Only !(Desktop Screen Type, Touched Device) */
    const headerContent = document.querySelector(".header-content");
    const itemContainer = event.currentTarget;
    const item = itemContainer.closest(".item");
    const itemText = itemContainer.querySelector(".item-text");
    const itemArrowIcon = itemContainer.querySelector(".item-arrow-icon");
    const itemBottomLine = itemContainer.querySelector(".item-bottom-line");
    const subList = item.querySelector(".sub-list");
    const openClass = "open";

    let shouldOpen = false;
    let clType = "remove";
    let isTouchDevice = headerContent.isTouchDevice;
    let screenType = headerContent.previousScreenType;

    if (!item.isOpen) {
      shouldOpen = true;
      clType = "add";
      screenType = headerContent.screenType;
    }

    if (shouldOpen) {
      if (screenType === 2) {
        MainMenuUtils.itemCloseAll();
        const topBarGridIcon = document.querySelector(".top-bar .grid-icon");
        if (topBarGridIcon.isActive) {
          TopBarAccessor.gridIconClick();
        }
      } else if (screenType === 3) {
        if (isTouchDevice) {
          MainMenuUtils.itemCloseAll();
        }
      }
    } else if (!shouldOpen) {
      if (headerContent.isTouchDevice) {
        MainMenuUtils.timerSubItemContainer(item, true);
        const subItemBottomLines = item.querySelectorAll(".sub-item-bottom-line");
        subItemBottomLines.forEach(subItemBottomLine => {
          subItemBottomLine.style.width = "";
        });
      }
      if (screenType >= 2) {
        MainMenuUtils.subListScrollLogic(item, false);
      }
    }

    if (!headerContent.isTouchDevice) {
      MainMenuUtils.itemContainerSetHoverLock(item, shouldOpen);
    }

    MainMenuUtils.updateSubListHeight(item, shouldOpen);

    item.classList[clType](openClass);
    itemText.classList[clType](openClass);
    itemArrowIcon.classList[clType](openClass);
    itemBottomLine.classList[clType](openClass);
    subList.classList[clType](openClass);

    item.isOpen = shouldOpen;
  },

  subListTransitionEnd(event) {
    /* For All */
    const headerContent = document.querySelector(".header-content");
    const target = event.target;
    const subList = event.currentTarget;

    if (
      target === subList
      && event.propertyName === "height"
    ) {
      const item = subList.closest(".item");
      if (item.isOpen) {
        MainMenuUtils.subItemContainerTools(item);
        if (headerContent.isTouchDevice) {
          MainMenuUtils.timerSubItemContainer(item);
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
        MainMenuUtils.updateChevronWrapperLeft(item);
        MainMenuUtils.updateChevronBottomWrapperTop(item);

        MainMenuUtils.subListScrollLogic(item, true);
      }

      MainMenuHandler.scroll();
    } else if (
      target === subList
      && event.propertyName === "max-height"
    ) {
      const item = subList.closest(".item");
      if (item.isOpen) {
        MainMenuUtils.updateChevronBottomWrapperTop(item);
        MainMenuUtils.subListScrollLogic(item, true);
      }
    }
  },

  subItemContainerHover(event) {
    /* For Non-touched Device */
    const eventType = event.type;
    const subItemContainer = event.currentTarget;
    const subItemBottomLine = subItemContainer.querySelector(".sub-item-bottom-line");
    const subItemArrowIcon = subItemContainer.querySelector(".sub-item-arrow-icon");
    const activeClass = "active";

    if (eventType === "mouseenter") {
      subItemBottomLine.style.width = `${subItemBottomLine.width}px`;
      subItemArrowIcon.classList.add(activeClass);
      subItemContainer.isHover = true;
    } else if (eventType === "mouseleave") {
      subItemBottomLine.style.width = "";
      subItemArrowIcon.classList.remove(activeClass);
      subItemContainer.isHover = false;
    }
  },

  scroll() {
    /* For Mobile Screen Type */
    const headerContent = document.querySelector(".header-content");
    const mainMenu = document.querySelector(".main-menu");
    const screenType = headerContent.screenType;
    if (screenType === 1) {
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

  subListScroll(event) {
    /* For Tablet, Desktop Screen Type */
    const subList = event.currentTarget;
    const item = subList.closest(".item");
    MainMenuUtils.subListScrollLogic(item, true);
  }
}

const MainMenuUtils = {
  itemCloseAll() {
    const items = document.querySelectorAll(".main-menu .item");
    items.forEach(item => {
      if (item.isOpen) {
        const itemContainer = item.querySelector(".item-container");
        const modifyEvent = { currentTarget: itemContainer };
        MainMenuHandler.itemContainerClick(modifyEvent);
      }
    });
  },

  itemContainerSetHoverLock(item, shouldLock) {
    const itemText = item.querySelector(".item-text");
    const itemArrowIcon = item.querySelector(".item-arrow-icon");
    const itemBottomLine = item.querySelector(".item-bottom-line");
    /*  */
    const hoverLockClass = "hover-lock";
    let clAction = "remove";
    if (shouldLock) {
      clAction = "add";
    }
    /*  */
    itemText.classList[clAction](hoverLockClass);
    itemArrowIcon.classList[clAction](hoverLockClass);
    itemBottomLine.classList[clAction](hoverLockClass);
  },

  subItemContainerTools(item) {
    MainMenuUtils.updateSubItemArrowIconLeft(item);
    MainMenuUtils.updateSubItemBottomLineLeft(item);
    MainMenuUtils.calcSubItemBottomLineWidth(item);
  },

  subListScrollLogic(item, shouldAction) {
    /* Only Tdst For Chevron */
    const subList = item.querySelector(".sub-list");
    const chevronTopWrapper = item.querySelector(".item-chevron-top-wrapper");
    const chevronBottomWrapper = item.querySelector(".item-chevron-bottom-wrapper");
    const activeClass = "active";
    if (!shouldAction) {
      chevronTopWrapper.classList.remove(activeClass);
      chevronBottomWrapper.classList.remove(activeClass);
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

    chevronTopWrapper.classList[clTopAction](activeClass);
    chevronBottomWrapper.classList[clBottomAction](activeClass);
  },

  updateChevronWrapperLeft(item) {
    /* Only Tdst && height > max-height */
    /* HMI */
    const headerContent = document.querySelector(".header-content");
    const screenType = headerContent.screenType;
    if (screenType === 1) { return; }

    const itemIndex = item.index;
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

  updateChevronBottomWrapperTop(item) {
    /* Only Tdst && height > max-height */
    /* HMI */
    const headerContent = document.querySelector(".header-content");
    const screenType = headerContent.screenType;
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

  updateSubListMaxHeight() {
    const headerContent = document.querySelector(".header-content");
    const mainMenu = document.querySelector(".main-menu");
    const subLists = mainMenu.querySelectorAll(".sub-list");
    const screenType = headerContent.screenType;

    if (screenType === 1) {
      subLists.forEach(subList => {
        subList.style.maxHeight = "";
      });
    } else {
      const topBar = document.querySelector(".top-bar");
      const buffer = 16;
      const topBarHeight = topBar.clientHeight;
      let calcMaxHeight = window.innerHeight - (topBarHeight + buffer);
      subLists.forEach(subList => {
        subList.style.maxHeight = `${calcMaxHeight}px`;
      });
    }
  },

  updateSubListHeight(item, shouldOpen) {
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

  timerSubItemContainer(item, shouldReset) {
    /* Only Tablet, Desktop Screen Type */
    const subItemContainers = item.querySelectorAll(".sub-item-container");
    if (shouldReset) {
      subItemContainers.forEach(subContainer => {
        clearTimeout(subContainer.timerId);
        MainMenuUtils.timeoutSubItemContainer(subContainer, shouldReset);
      });
    } else {
      for (let i = 0; i < subItemContainers.length; i++) {
        subItemContainers[i].timerId = setTimeout(
          MainMenuUtils.timeoutSubItemContainer,
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
  },

  updateSubItemBottomLineLeft(item) {
    const subItemContainers = item.querySelectorAll(".sub-item-container");
    const subItemTexts = item.querySelectorAll(".sub-item-text");
    const subItemBottomLines = item.querySelectorAll(".sub-item-bottom-line");
    const bufferWidth = 24;

    for (let i = 0; i < subItemBottomLines.length; i++) {
      const containerWidth = subItemContainers[i].clientWidth;
      const textWidth = subItemTexts[i].clientWidth;
      let calcLeft = (containerWidth - (textWidth + bufferWidth)) / 2;
      subItemBottomLines[i].left = calcLeft;
      subItemBottomLines[i].style.left = `${subItemBottomLines[i].left}px`;
    }
  },

  calcSubItemBottomLineWidth(item) {
    const subItemTexts = item.querySelectorAll(".sub-item-text");
    const subItemBottomLines = item.querySelectorAll(".sub-item-bottom-line");
    const bufferWidth = 24;

    for (let i = 0; i < subItemBottomLines.length; i++) {
      const textWidth = subItemTexts[i].clientWidth;
      let calcWidth = textWidth + bufferWidth;
      subItemBottomLines[i].width = calcWidth;
    }
  },

  updateSubItemArrowIconLeft(item) {
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
  },

  setItemLastAlignX_Right(item) {
    const alignX_RightClass = "align-x-right";
    const gridIcon = document.querySelector(".top-bar .grid-icon");
    const mainMenuSubList = item.querySelector(".sub-list");

    /* Exit */
    if (!gridIcon.isActive) {
      mainMenuSubList.classList.remove(alignX_RightClass);
      return;
    }

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
      mainMenuSubList.classList.add(alignX_RightClass);
    } else {
      mainMenuSubList.classList.remove(alignX_RightClass);
    }
  },

  generator() {
    const headerContent = document.querySelector(".header-content");
    const mainMenuGroups = HeaderContentData.mainMenuGroups;

    /* Create Main Menu */
    const mainMenu = document.createElement("nav");
    mainMenu.className = "main-menu";

    /* List */
    const list = document.createElement("ul");
    list.className = "list";
    Object.entries(mainMenuGroups).forEach(([itemTextData, subItems]) => {
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
    headerContent.append(mainMenu);
  }
}

export { MainMenuAccessor, MainMenuController };
