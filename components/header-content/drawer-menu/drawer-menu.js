/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* ================================================== */
const DrawerMenuAccessor = {
  itemCloseAll() {
    DrawerMenuUtils.itemCloseAll();
  }
};
/* ================================================== */
const DrawerMenuController = {
  init() {
    DrawerMenuUtils.generator();
    DrawerMenuManager.init();
  },
  load() {
    DrawerMenuManager.load();
  },
  resizeDisplay() {
    DrawerMenuManager.resizeDisplay();
  },
  resizeSensor() {
    DrawerMenuManager.resizeSensor();
  }
};
/* ================================================== */
const DrawerMenuManager = {
  init() {
    /* Event */
    DrawerMenuManager.initEvent();
    /* Initial */
    const items = document.querySelectorAll(".drawer-menu .item");
    for (let i = 0; i < items.length; i++) {
      items[i].index = i;
      items[i].isOpen = false;
      const subItems = items[i].querySelectorAll(".sub-item");
      const subItemContainers = items[i].querySelectorAll(".sub-item-container");
      for (let j = 0; j < subItems.length; j++) {
        subItems[j].index = j;
        subItemContainers[j].isHover = false;
      }
    }
  },
  /* -------------------------------------------------- */
  load() {
    const items = document.querySelectorAll(".drawer-menu .item");
    items.forEach(item => {
      DrawerMenuUtils.subItemContainerTools(item);
    });
  },
  /* -------------------------------------------------- */
  resizeDisplay() {
    const items = document.querySelectorAll(".drawer-menu .item");
    items.forEach(item => {
      DrawerMenuUtils.subItemContainerTools(item);
    });
    DrawerMenuHandler.scroll();
  },
  /* -------------------------------------------------- */
  resizeSensor() {
    const headerContent = document.querySelector(".header-content");
    const items = document.querySelectorAll(".drawer-menu .item");
    items.forEach(item => {
      if (item.isOpen) {
        DrawerMenuUtils.subItemContainerTools(item);
        if (headerContent.isTouchDevice) {
          const subItemBottomLines = item.querySelectorAll(".sub-item-br");
          subItemBottomLines.forEach(subItemBottomLine => {
            subItemBottomLine.style.width = `${subItemBottomLine.width}px`;
          });
        }
      }
    });
    DrawerMenuHandler.scroll();
  },
  /* ================================================== */
  initEvent() {
    const headerContent = document.querySelector(".header-content");
    const list = document.querySelector(".drawer-menu .list");
    const items = list.querySelectorAll(".item");
    const itemContainers = list.querySelectorAll(".item-container");
    const subLists = list.querySelectorAll(".sub-list");
    /*  */
    itemContainers.forEach(container => {
      container.addEventListener("click", DrawerMenuHandler.itemContainerClick);
    });
    subLists.forEach(list => {
      list.addEventListener("transitionend", DrawerMenuHandler.subListTransitionEnd);
    });
    /*  */
    const drawerMenu = document.querySelector(".drawer-menu");
    drawerMenu.addEventListener("scroll", DrawerMenuHandler.scroll);
    /*  */
    if (!headerContent.isTouchDevice) {
      items.forEach(item => {
        const subItemContainers = item.querySelectorAll(".sub-item-container");
        subItemContainers.forEach(container => {
          container.addEventListener("mouseenter", DrawerMenuHandler.subItemContainerHover);
          container.addEventListener("mouseleave", DrawerMenuHandler.subItemContainerHover);
        });
      });
    }
  }
}
/* ================================================== */
const DrawerMenuHandler = {
  itemContainerClick(event) {
    const headerContent = document.querySelector(".header-content");
    const itemContainer = event.currentTarget;
    const item = itemContainer.closest(".item");
    /*  */
    const itemText = itemContainer.querySelector(".item-text");
    const itemArrowIcon = itemContainer.querySelector(".item-arrow-icon");
    const itemBottomLine = itemContainer.querySelector(".item-bottom-line");
    /*  */
    const subList = item.querySelector(".sub-list");
    const subItems = subList.querySelectorAll(".sub-item");
    /*  */
    const open = "open";
    let shouldOpen = false;
    let action = "remove";
    if (!item.isOpen) {
      shouldOpen = true;
      action = "add";
    }
    if (shouldOpen) {
      const calcSubListHeight = subItems.length * 64;
      subList.style.height = `${calcSubListHeight}px`;
    } else {
      subList.style.height = "";
      if (headerContent.isTouchDevice) {
        DrawerMenuUtils.subItemContainerTimer(item, true);
        const subItemBottomLines = item.querySelectorAll(".sub-item-bottom-line");
        subItemBottomLines.forEach(subItemBottomLine => {
          subItemBottomLine.style.width = "";
        });
      }
    }
    /*  */
    if (!headerContent.isTouchDevice) {
      DrawerMenuUtils.itemContainerSetHoverLock(item, shouldOpen);
    }
    /*  */
    item.classList[action](open);
    itemText.classList[action](open);
    itemArrowIcon.classList[action](open);
    itemBottomLine.classList[action](open);
    subList.classList[action](open);
    /*  */
    item.isOpen = shouldOpen;
  },
  /* -------------------------------------------------- */
  subListTransitionEnd(event) {
    const headerContent = document.querySelector(".header-content");
    const target = event.target;
    const subList = event.currentTarget;
    /*  */
    if (
      target === subList
      && event.propertyName === "height"
    ) {
      const item = subList.closest(".item");
      if (item.isOpen && headerContent.isTouchDevice) {
        DrawerMenuUtils.subItemContainerTools(item);
        DrawerMenuUtils.subItemContainerTimer(item);
      } else if (item.isOpen) {
        /* HMI */
        DrawerMenuUtils.subItemContainerTools(item);
        const subItemContainers = item.querySelectorAll(".sub-item-container");
        subItemContainers.forEach(subItemContainer => {
          if (subItemContainer.isHover) {
            const subItemBottomLine = subItemContainer.querySelector(".sub-item-bottom-line");
            subItemBottomLine.style.width = `${subItemBottomLine.width}px`;
          }
        });
      }
      DrawerMenuHandler.scroll();
    }
  },
  /* -------------------------------------------------- */
  subItemContainerHover(event) {
    const eventType = event.type;
    const subItemContainer = event.currentTarget;
    const subItem = subItemContainer.closest(".sub-item");
    const subItemBottomLine = subItem.querySelector(".sub-item-bottom-line");
    /*  */
    if (eventType === "mouseenter") {
      subItemBottomLine.style.width = `${subItemBottomLine.width}px`;
      subItemContainer.isHover = true;
    } else if (eventType === "mouseleave") {
      subItemBottomLine.style.width = "";
      subItemContainer.isHover = false;
    }
  },
  /* -------------------------------------------------- */
  scroll() {
    const drawerMenu = document.querySelector(".drawer-menu");
    const fogTop = drawerMenu.querySelector(".fog-top");
    const fogBottom = drawerMenu.querySelector(".fog-bottom");
    /*  */
    const innerHeight = window.innerHeight;
    const calcFogHeight = innerHeight / 10;
    const scrollTop = drawerMenu.scrollTop;
    const scrollHeight = drawerMenu.scrollHeight;
    const clientHeight = drawerMenu.clientHeight;
    const scrollBuffer = 8;
    /*  */
    let fogTopHeight = 0;
    let fogBottomHeight = 0;
    /*  */
    if (scrollTop > scrollBuffer) {
      fogTopHeight = calcFogHeight;
    }
    if (scrollTop + clientHeight + scrollBuffer < scrollHeight) {
      fogBottomHeight = calcFogHeight;
    }
    /*  */
    fogTop.style.height = `${fogTopHeight}px`;
    fogBottom.style.height = `${fogBottomHeight}px`;
  }
}
/* ================================================== */
const DrawerMenuUtils = {
  itemCloseAll() {
    const items = document.querySelectorAll(".drawer-menu .item");
    items.forEach(item => {
      if (item.isOpen) {
        const itemContainer = item.querySelector(".item-container");
        const modifyEvent = { currentTarget: itemContainer };
        DrawerMenuHandler.itemContainerClick(modifyEvent);
      }
    });
  },
  /* -------------------------------------------------- */
  itemContainerSetHoverLock(item, shouldLock) {
    const itemText = item.querySelector(".item-text");
    const itemArrowIcon = item.querySelector(".item-arrow-icon");
    const itemBottomLine = item.querySelector(".item-bottom-line");
    /*  */
    const hoverLock = "hover-lock";
    let action = "remove";
    if (shouldLock) {
      action = "add";
    }
    /*  */
    itemText.classList[action](hoverLock);
    itemArrowIcon.classList[action](hoverLock);
    itemBottomLine.classList[action](hoverLock);
  },
  /* -------------------------------------------------- */
  subItemArrowIconLeft(item) {
    const subItemContainers = item.querySelectorAll(".sub-item-container");
    const subItemTexts = item.querySelectorAll(".sub-item-text");
    const subItemArrowIcons = item.querySelectorAll(".sub-item-arrow-icon");
    /*  */
    for (let i = 0; i < subItemArrowIcons.length; i++) {
      const containerWidth = subItemContainers[i].clientWidth;
      const textWidth = subItemTexts[i].clientWidth;
      let calcLeft = (containerWidth + textWidth) / 2;
      subItemArrowIcons[i].left = calcLeft;
      subItemArrowIcons[i].style.left = `${subItemArrowIcons[i].left}px`;
    }
  },
  /* -------------------------------------------------- */
  subItemBottomLineWidth(item) {
    /* Calcualtion Width */
    const subItemTexts = item.querySelectorAll(".sub-item-text");
    const subItemBottomLines = item.querySelectorAll(".sub-item-bottom-line");
    const bufferWidth = 24;
    /*  */
    for (let i = 0; i < subItemBottomLines.length; i++) {
      const textWidth = subItemTexts[i].clientWidth;
      let calcWidth = textWidth + bufferWidth;
      subItemBottomLines[i].width = calcWidth;
    }
  },
  /* -------------------------------------------------- */
  subItemBottomLineLeft(item) {
    const subItemContainers = item.querySelectorAll(".sub-item-container");
    const subItemTexts = item.querySelectorAll(".sub-item-text");
    const subItemBottomLines = item.querySelectorAll(".sub-item-bottom-line");
    const bufferWidth = 24;
    /*  */
    for (let i = 0; i < subItemBottomLines.length; i++) {
      const containerWidth = subItemContainers[i].clientWidth;
      const textWidth = subItemTexts[i].clientWidth;
      let calcLeft = (containerWidth - (textWidth + bufferWidth)) / 2;
      subItemBottomLines[i].left = calcLeft;
      subItemBottomLines[i].style.left = `${subItemBottomLines[i].left}px`;
    }
  },
  /* -------------------------------------------------- */
  subItemContainerTimer(item, shouldReset) {
    const subItemContainers = item.querySelectorAll(".sub-item-container");
    if (shouldReset) {
      subItemContainers.forEach(subItemContainer => {
        clearTimeout(subItemContainer.timerId);
        DrawerMenuUtils.subItemContainerTimeout(subItemContainer, shouldReset);
      });
    } else {
      for (let i = 0; i < subItemContainers.length; i++) {
        subItemContainers[i].timerId = setTimeout(
          DrawerMenuUtils.subItemContainerTimeout,
          i * 150,
          subItemContainers[i],
          shouldReset
        );
      }
    }
  },
  /* -------------------------------------------------- */
  subItemContainerTimeout(subItemContainer, shouldReset) {
    const subItemText = subItemContainer.querySelector(".sub-item-text");
    const subItemArrowIcon = subItemContainer.querySelector(".sub-item-arrow-icon");
    const subItemBottomLine = subItemContainer.querySelector(".sub-item-bottom-line");
    /*  */
    const active = "active";
    let action = "remove";
    let setSubItemBottomLineWidth = "";
    if (!shouldReset) {
      action = "add";
      setSubItemBottomLineWidth = `${subItemBottomLine.width}px`;
    }
    subItemBottomLine.style.width = setSubItemBottomLineWidth;
    /*  */
    subItemText.classList[action](active);
    subItemArrowIcon.classList[action](active);
  },
  /* -------------------------------------------------- */
  subItemContainerTools(item) {
    DrawerMenuUtils.subItemBottomLineLeft(item);
    DrawerMenuUtils.subItemBottomLineWidth(item);
    DrawerMenuUtils.subItemArrowIconLeft(item);
  },
  /* ================================================== */
  generator() {
    const drawerMenuGroups = DrawerMenuData.drawerMenuGroups;
    const headerContent = document.querySelector(".header-content");
    const drawerMenu = document.createElement("nav");
    drawerMenu.className = "drawer-menu";
    /* List */
    const list = document.createElement("ul");
    list.className = "list";
    /* Item */
    Object.entries(drawerMenuGroups).forEach(([itemTextData, subItems]) => {
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
      /*  */
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
        /*  */
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
    headerContent.append(drawerMenu);
  }
}
/* ================================================== */
export { DrawerMenuAccessor, DrawerMenuController };
/* ================================================== */
/* ========================= >FACOOYA ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
/* ========================= <FACOOYA ========================= */