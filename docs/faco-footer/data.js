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

/* relative paths are based on the HTML file. */

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
    logoLink: "#logo-click-link",
    logoItems: {
      "dev": `url("./icons/octagon-2w.svg")`,
      "transcendence": `url("./icons/triangle.svg")`,
      "facooya-icon": `url("./icons/rectangle.svg")`
    },
    aboutText: `About text for your sites. About text for your sites.
			About text for your sites. About text for your sites.
			About text for your sites. About text for your sites.`,
    socialItems: {
      a: {
        link: "#social-a",
        maskImage: `url("./icons/triangle.svg")`
      },
      b: {
        link: "#social-b",
        maskImage: `url("./icons/rectangle.svg")`
      },
      c: {
        link: "#social-c",
        maskImage: `url("./icons/diamond.svg")`
      }
    }
  },

  legalGroups: {
    logoLink: "#logo-link",
    logoItems: {
      transcendence: `url("./icons/triangle.svg")`,
      facooya: `url("./icons/octagon-5w.svg")`
    },
    copyrightText: "Copyright [year] [name]",
    legalItems: {
      "Legal 1": "#legal-link-1",
      "Legal 2": "#legal-link-2",
      "Legal 3": "#legal-link-3"
    }
  }
};
