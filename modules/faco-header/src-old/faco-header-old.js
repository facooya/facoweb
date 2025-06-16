/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Header main
 */

import { TopBarController } from "./top-bar/top-bar.js";
import { MainMenuController } from "./main-menu/main-menu.js";
import { DrawerMenuController } from "./drawer-menu/drawer-menu.js";

const HeaderContentController = {
  init() {
    HeaderContentManager.init();
  },
  load() {
    HeaderContentManager.load();
  },
  resizeDisplay() {
    HeaderContentManager.resizeDisplay();
  },
  resizeSensor() {
    HeaderContentManager.resizeSensor();
  }
};

const HeaderContentManager = {
  init() {
    TopBarController.init();
    MainMenuController.init();
    DrawerMenuController.init();
  },
  load() {
    TopBarController.load();
    MainMenuController.load();
    DrawerMenuController.load();
  },
  resizeDisplay() {
    TopBarController.resizeDisplay();
    MainMenuController.resizeDisplay();
    DrawerMenuController.resizeDisplay();
  },
  resizeSensor() {
    TopBarController.resizeSensor();
    MainMenuController.resizeSensor();
    DrawerMenuController.resizeSensor();
  }
};

const HeaderContentHandler = {
  onInit() {
    HeaderContentUtils.generator();

    const headerContent = document.querySelector(".header-content");
    if (window.matchMedia("(hover: none)").matches) {
      headerContent.isTouch = true;
    }
    headerContent.resizeSensorTimerId = 0;

    HeaderContentUtils.updateScreenType();
    headerContent.previousScreenType = headerContent.screenType;

    HeaderContentController.init();
  },

  onLoad() {
    HeaderContentController.load();
  },

  onResize() {
    HeaderContentUtils.updateScreenType();

    const headerContent = document.querySelector(".header-content");
    if (headerContent.screenType !== headerContent.previousScreenType) {
      HeaderContentController.resizeDisplay();
      headerContent.previousScreenType = headerContent.screenType;
      clearTimeout(headerContent.resizeSensorTimerId);
    } else {
      clearTimeout(headerContent.resizeSensorTimerId);
      headerContent.resizeSensorTimerId = setTimeout(
        HeaderContentController.resizeSensor,
        200
      );
    }
  },

  onChange(event) {
    if (event.matches) {
      console.log("touch");
    } else {
      console.log("mouse");
    }
  }
};

const HeaderContentUtils = {
  updateScreenType() {
    const screenTypes = [
      "(max-width: 767px)",
      "(min-width: 768px) and (max-width: 1279px)",
      "(min-width: 1280px)"
    ];
    const headerContent = document.querySelector(".header-content");

    for (let i = 0; i < screenTypes.length; i++) {
      if (window.matchMedia(screenTypes[i]).matches) {
        headerContent.screenType = i + 1;
        break;
      }
    }
  },

  generator() {
    const header = document.querySelector(".header");
    const headerContent = document.createElement("div");
    headerContent.className = "header-content";
    header.append(headerContent);
  }
};

/* window.addEventListener("DOMContentLoaded", HeaderContentHandler.onInit);
window.addEventListener("load", HeaderContentHandler.onLoad);
window.addEventListener("resize", HeaderContentHandler.onResize);
const hoverMediaQuery = window.matchMedia("(hover: none)");
hoverMediaQuery.addEventListener("change", HeaderContentHandler.onChange); */
