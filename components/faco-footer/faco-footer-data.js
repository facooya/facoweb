/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * The faco-footer data
 */

/* NOTE
 * navGroups: {
 *   titleText: {
 *     itemText: itemLink
 *   }
 * }
 *
 * aboutGroups: {
 *   logoLink: logoLink,
 *   logoItems: {
 *     itemName: itemMaskImage
 *   },
 *   text: text,
 *   socialItems: {
 *     itemName: {
 *       link: itemLink,
 *       maskImage: itemMaskImage
 *     }
 *   }
 * }
 *
 * legalGroups: {
 *   logoLink: logoLink,
 *   logoItems: {
 *     itemName: itemMaskImage
 *   },
 *   copyrightText: copyrightText,
 *   legalItems: {
 *     itemText: itemLink
 *   }
 * }
 */

const FacoFooterData = {
  navGroups: {
    "Nav group 1": {
      "Item 1-1": "#link-1-1",
      "Item 1-2": "#link-1-2"
    },
    "Nav group 2": {
      "Item 2-1": "#link-2-1",
      "Item 2-2": "#link-2-2",
      "Item 2-3": "#link-2-3"
    }
  },

  aboutGroups: {
    logoLink: "#",
    logoItems: {
      "dev": `url("./src/icons/octagon-2w.svg")`,
      "transcendence": `url("./src/icons/triangle.svg")`,
      "facooya-icon": `url("./src/icons/rectangle.svg")`
    },
    aboutText: `About text for your sites. About text for your sites.
			About text for your sites. About text for your sites.
			About text for your sites. About text for your sites.`,
    socialItems: {
      a: {
        link: "#social-a",
        maskImage: `url("./src/icons/triangle.svg")`
      },
      b: {
        link: "#social-b",
        maskImage: `url("./src/icons/rectangle.svg")`
      },
      c: {
        link: "#social-c",
        maskImage: `url("./src/icons/diamond.svg")`
      }
    }
  },

  legalGroups: {
    logoLink: "#logo-link",
    logoItems: {
      transcendence: `url("./src/icons/triangle.svg")`,
      facooya: `url("./src/icons/octagon-5w.svg")`
    },
    copyrightText: "Copyright [year] [name]",
    legalItems: {
      "Legal 1": "#legal-link-1",
      "Legal 2": "#legal-link-2",
      "Legal 3": "#legal-link-3"
    }
  }
};

export { FacoFooterData };
