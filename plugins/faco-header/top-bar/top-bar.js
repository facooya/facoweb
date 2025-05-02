/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* ================================================== */
import { MainMenuAccessor } from "../main-menu/main-menu.js";
import { DrawerMenuAccessor } from "../drawer-menu/drawer-menu.js";
/* ================================================== */
const TopBarAccessor = {
  gridIconClick() {
    TopBarHandler.gridIconClick();
  }
};
/* ================================================== */
const TopBarController = {
  init() {
    TopBarUtils.generator();
    TopBarManager.init();
  },
  load() {
    TopBarManager.load();
  },
  resizeDisplay() {
    TopBarManager.resizeDisplay();
  },
  resizeSensor() {
    TopBarManager.resizeSensor();
  }
};
/* ================================================== */
const TopBarManager = {
  init() {
    TopBarManager.initEvent();
  },
  load() {
    TopBarUtils.updateLogo();
  },
  resizeDisplay() {
    TopBarManager.resizeEvent();
    TopBarUtils.updateIcon();
  },
  resizeSensor() {
    TopBarUtils.updateLogo();
  },
  /* ============================== */
  initEvent() {
    const headerContent = document.querySelector(".header-content");
    const gridIcon = document.querySelector(".top-bar .grid-icon");
    gridIcon.isActive = false;
    gridIcon.addEventListener("click", TopBarHandler.gridIconClick);
    /*  */
    if (headerContent.screenType === 1) {
      const hamburgerIcon = document.querySelector(".top-bar .hamburger-icon");
      hamburgerIcon.isActive = false;
      hamburgerIcon.addEventListener("click", TopBarHandler.hamburgerIconClick);
      const overlay = document.querySelector(".top-bar .overlay");
      overlay.addEventListener("click", TopBarHandler.overlayClick);
    } else if (headerContent.screenType >= 2) {
      const gridItem = gridIcon.querySelector(".grid-item");
      gridItem.addEventListener("transitionend", TopBarHandler.gridItemTransitionEnd);
    }
  },
  /* ------------------------------ */
  resizeEvent() {
    const headerContent = document.querySelector(".header-content");
    const hamburgerIcon = document.querySelector(".top-bar .hamburger-icon");
    const overlay = document.querySelector(".top-bar .overlay");
    if (headerContent.screenType === 1) {
      hamburgerIcon.isActive = false;
      hamburgerIcon.addEventListener("click", TopBarHandler.hamburgerIconClick);
      overlay.addEventListener("click", TopBarHandler.overlayClick);
    } else if (headerContent.previousScreenType === 1) {
      hamburgerIcon.removeEventListener("click", TopBarHandler.hamburgerIconClick);
      overlay.removeEventListener("click", TopBarHandler.overlayClick);
    }
    /*  */
    const gridItem = document.querySelector(".top-bar .grid-item");
    if (headerContent.screenType >= 2) {
      gridItem.addEventListener("transitionend", TopBarHandler.gridItemTransitionEnd);
    } else if (headerContent.previousScreenType >= 2) {
      gridItem.removeEventListener("transitionend", TopBarHandler.gridItemTransitionEnd);
    }
  }
};
/* ================================================== */
const TopBarHandler = {
  overlayClick() {
    /* Only Mobile Screen Type */
    TopBarUtils.updateIcon();
  },
  /* ------------------------------ */
  hamburgerIconClick() {
    /* Only Mobile Screen Type */
    const mainMenu = document.querySelector(".main-menu");
    const hamburgerIcon = document.querySelector(".top-bar .hamburger-icon");
    const hamburgerItems = hamburgerIcon.querySelectorAll(".hamburger-item");
    const gridIcon = document.querySelector(".top-bar .grid-icon");
    /*  */
    const hamburgerIconActive = "hamburger-icon-active";
    let shouldActive = false;
    let action = "remove";
    if (!hamburgerIcon.isActive) {
      shouldActive = true;
      action = "add";
    }
    /* Logic */
    if (shouldActive) {
      if (gridIcon.isActive) {
        TopBarHandler.gridIconClick();
      }
      TopBarUtils.updateOverlay(0);
    } else {
      MainMenuAccessor.itemCloseAll();
      TopBarUtils.updateOverlay(1);
    }
    /* Hamburger Item */
    const activeClass = "active";
    hamburgerItems.forEach(item => {
      item.classList[action](activeClass);
    });
    /* Main Menu */
    mainMenu.classList[action](hamburgerIconActive);
    /* State */
    hamburgerIcon.isActive = shouldActive;
  },
  /* ------------------------------ */
  gridIconClick() {
    const headerContent = document.querySelector(".header-content");
    const drawerMenu = document.querySelector(".drawer-menu");
    const hamburgerIcon = document.querySelector(".top-bar .hamburger-icon");
    const gridIcon = document.querySelector(".top-bar .grid-icon");
    const gridItems = gridIcon.querySelectorAll(".grid-item");
    /*  */
    const gridIconActive = "grid-icon-active";
    let shouldActive = false;
    let action = "remove";
    let screenType = headerContent.previousScreenType;
    if (!gridIcon.isActive) {
      shouldActive = true;
      action = "add";
      screenType = headerContent.screenType;
    }
    /*  */
    if (shouldActive) {
      if (screenType === 1 && hamburgerIcon.isActive) {
        TopBarHandler.hamburgerIconClick();
      } else if (screenType === 2) {
        MainMenuAccessor.itemCloseAll();
      }
      TopBarUtils.updateOverlay(2);
    } else {
      DrawerMenuAccessor.itemCloseAll();
      TopBarUtils.updateOverlay();
    }
    /* Grid Item */
    const activeClass = "active";
    gridItems.forEach(item => {
      item.classList[action](activeClass);
    });
    /* Drawer Menu */
    drawerMenu.classList[action](gridIconActive);
    /* Screen Type */
    if (screenType >= 2) {
      const main = document.querySelector(".main");
      const footer = document.querySelector(".footer");
      const topBar = document.querySelector(".top-bar");
      main.classList[action](gridIconActive);
      footer.classList[action](gridIconActive);
      topBar.classList[action](gridIconActive);
      if (screenType === 3) {
        const mainMenu = document.querySelector(".main-menu");
        mainMenu.classList[action](gridIconActive);
      }
    }
    /* State */
    gridIcon.isActive = shouldActive;
  },
  /* ============================== */
  gridItemTransitionEnd(event) {
    /* Only Desktop Screen Type */
    const target = event.target;
    const gridItem = event.currentTarget;
    /*  */
    if (
      target === gridItem
      && event.propertyName === "transform"
    ) {
      const headerContent = document.querySelector(".header-content");
      const mainMenuItems = document.querySelectorAll(".main-menu .item");
      const lastItem = mainMenuItems.length - 1;
      mainMenuItems.forEach(item => {
        if (item.index === lastItem) {
          MainMenuAccessor.setItemLastAlignX_Right(item);
          MainMenuAccessor.updateChevronWrapperLeft(item);
        }
      });
    }
  }
};
/* ================================================== */
const TopBarUtils = {
  updateOverlay(overlayType) {
    const overlay = document.querySelector(".top-bar .overlay");
    const overlayTypes = [
      "right-open",
      "right-close",
      "left-open"
    ];
    /* Reset Default:left-close */
    overlayTypes.forEach(type => {
      overlay.classList.remove(type);
    });
    /* Overlay Type
     * overlayType = null:default, 0:right-open, 1:right-close, 2:left-open
     */
    if (overlayType != null) {
      overlay.classList.add(overlayTypes[overlayType]);
    }
  },
  /* ------------------------------ */
  updateIcon() {
    const hamburgerIcon = document.querySelector(".top-bar .hamburger-icon");
    const gridIcon = document.querySelector(".top-bar .grid-icon");
    /* State */
    if (hamburgerIcon.isActive) {
      TopBarHandler.hamburgerIconClick();
    } else if (gridIcon.isActive) {
      TopBarHandler.gridIconClick();
    }
  },
  /* ------------------------------ */
  updateLogo() {
    const headerContent = document.querySelector(".header-content");
    const topBar = document.querySelector(".top-bar");
    const facooyaLogoItem = topBar.querySelector(".facooya-logo-item");
    const miniClass = "mini";
    /* HMI */
    if (headerContent.screenType !== 1) {
      facooyaLogoItem.classList.remove(miniClass);
      return;
    }
    /* Calculation Logo Area Width */
    const topBarWidth = topBar.offsetWidth;
    const iconWidth = 64;
    const gapWidth = 16;
    let calcLogoAreaWidth = topBarWidth;
    calcLogoAreaWidth -= (iconWidth + gapWidth) * 2;
    /* Calculation Logo Width */
    const devWidth = 48;
    const taWidth = 8;
    const facooyaWidth = 120;
    const calcLogoWidth = devWidth + taWidth + facooyaWidth;
    /* State */
    if (calcLogoAreaWidth < calcLogoWidth) {
      facooyaLogoItem.classList.add(miniClass);
    } else {
      facooyaLogoItem.classList.remove(miniClass);
    }
  },
  /* ================================================== */
  generator() {
    const headerContent = document.querySelector(".header-content");
    const logoGroups = HeaderContentData.logoGroups;
    /* Tob Bar */
    const topBar = document.createElement("div");
    topBar.className = "top-bar";
    const layout = document.createElement("div");
    layout.className = "layout";
    /* Logo */
    const logo = document.createElement("div");
    logo.className = "logo";
    const logoLink = document.createElement("a");
    logoLink.className = "logo-link";
    logoLink.href = logoGroups.logoLink;
    /*  */
    Object.entries(logoGroups.logoItems).forEach(([itemName, itemMaskImage]) => {
      const logoItem = document.createElement("span");
      logoItem.className = `logo-item ${itemName}-logo-item`;
      logoItem.style.maskImage = itemMaskImage;
      logoLink.append(logoItem);
    });
    logo.append(logoLink);
    /* Hamburger Icon */
    const hamburgerIcon = document.createElement("div");
    hamburgerIcon.className = "hamburger-icon";
    for (let i = 0; i < 3; i++) {
      const hamburgerItem = document.createElement("span");
      hamburgerItem.className = "hamburger-item";
      hamburgerIcon.append(hamburgerItem);
    }
    /* Grid Icon */
    const gridIcon = document.createElement("div");
    gridIcon.className = "grid-icon";
    for (let i = 0; i < 9; i++) {
      const gridItem = document.createElement("span");
      gridItem.className = "grid-item";
      gridIcon.append(gridItem);
    }
    /* Scroll Lock */
    const topBarScrollLock = document.createElement("div");
    topBarScrollLock.className = "scroll-lock top-bar-scroll-lock";
    /* Append */
    layout.append(logo, hamburgerIcon, gridIcon, topBarScrollLock);
    /* :Etc: */
    /* Overlay */
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    /* Overlay Scroll Lock */
    const overlayScrollLock = document.createElement("div");
    overlayScrollLock.className = "scroll-lock overlay-scroll-lock";
    overlay.append(overlayScrollLock);
    /* ;Etc; */
    /* Append */
    topBar.append(layout, overlay);
    headerContent.append(topBar);
  }
};
/* ================================================== */
export { TopBarAccessor, TopBarController };
/* ================================================== */
/* ========================= >FACOOYA ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
/* ========================= <FACOOYA ========================= */