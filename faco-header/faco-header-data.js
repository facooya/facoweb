/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Header data
 */

/* NOTE
 * logoGroups: {
 *   logoLink: logoLink,
 *   logoItems: {
 *     itemName: itemMaskImage
 *   }
 * }
 *
 * mainMenuGroups: {
 *   itemText: {
 *     subItemText: subItemLink
 *   }
 * }
 *
 * drawerMenuGroups: {
 *   itemText: {
 *     subItemText: subItemLink
 *   }
 * }
 */

const FacoHeaderData = {
  logoGroups: {
    logoLink: "#facooya",
    logoItems: {
      dev: `url("./src/icons/octagon-2w.svg")`,
      transcendence: `url("./src/icons/triangle.svg")`,
      facooya: `url("./src/icons/octagon-5w.svg")`,
    }
  },

  mainMenuGroups: {
    "Menu 1": {
      "Item 1-1": "#item-1-1",
      "Item 1-2": "#item-1-2",
      "Item 1-3": "#item-1-3",
      "Item 1-4": "#item-1-4",
      "Item 1-5": "#item-1-5",
      "Item 1-6": "#item-1-6",
      "Item 1-7": "#item-1-7"
    },

    "Menu 2": {
      "Item 2-1": "#item-2-1"
    },

    "Menu 3": {
      "Item 3-1": "#item-3-1",
      "Item 3-2": "#item-3-2",
      "Item 3-3": "#item-3-3"
    },

    "Menu 4": {
      "Item 4-1": "#item-4-1"
    }
  },

  drawerMenuGroups: {
    "Drawer menu 1": {
      "sub menu 1-1": "#",
      "sub menu 1-2": "#"
    },

    "Drawer menu 2": {
      "sub menu 2-1": "#",
      "sub menu 2-2": "#",
			"sub menu 2-3": "#"
    }
  }
};

export { FacoHeaderData };
