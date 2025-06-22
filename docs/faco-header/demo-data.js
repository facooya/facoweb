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
    logoLink: "#link",
		/* TODO: normal user */
    logoItems: { /* relative paths are based on the HTML file. */
      dev: `url("./icons/octagon-2w.svg")`,
      transcendence: `url("./icons/triangle.svg")`,
      facooya: `url("./icons/octagon-5w.svg")`
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
      "Sub item 1-1": "#",
      "Sub item 1-2": "#"
    },

    "Drawer menu 2": {
      "Sub item 2-1": "#",
      "Sub item 2-2": "#",
			"Sub item 2-3": "#"
    },

    "Drawer menu 3": {
      "Sub item 3-1": "#",
      "Sub item 3-2": "#",
			"Sub item 3-3": "#",
      "Sub item 3-4": "#",
      "Sub item 3-5": "#",
			"Sub item 3-6": "#"
    }
  }
};
