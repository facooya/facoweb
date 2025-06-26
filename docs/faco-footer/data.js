/* NOTE
 * FacoFooterData reference: "README.md"
 * README (facoweb root): "docs/faco-footer/README.md"
 */

const FacoFooterData = {
  exploreData: {
    "Category 1": {
      "Item text 1-1": "#link-1-1",
      "Item text 1-2": "#link-1-2"
      // add more
    },

    "Category 2": {
      "Item text 2-1": "#link-2-1",
      "Item text 2-2": "#link-2-2",
      "Item text 2-3": "#link-2-3",
      "Item text 2-4": "#link-2-4",
      "Item text 2-5": "#link-2-5"
      // add more
    },

    "Category 3": {
      "Item text 3-1": "#link-3-1",
      "Item text 3-2": "#link-3-2",
      "Item text 3-3": "#link-3-3"
      // add more
    },

    "Category 4": {
      "Item text 4-1": "#link-4-1",
      "Item text 4-2": "#link-4-2",
      "Item text 4-3": "#link-4-3",
      "Item text 4-4": "#link-4-4"
      // add more
    }
    // add more
  },

  aboutData: {
    logoData: {
      link: "/",
      height: "32px",
      items: {
        "sub logo": {
          url: `url("./icons/octagon-2w.svg")`,
          width: "64px",
          height: "32px", // optional
          marginRight: "8px" // optional
        },
        "small icon": {
          url: `url("./icons/triangle.svg")`,
          width: "8px",
          height: "8px",
          marginRight: "8px"
        },
        "icon": {
          url: `url("./icons/rectangle.svg")`,
          width: "32px"
        }
        // add more
      }
    },

    description: `Long data. This is your site description.
      This is your site description. This is your site description.
      This is your site description. This is your site description.
      This is your site description. This is your site description.
      This is your site description. This is your site description.
      This is your site description. This is your site description.
      This is your site description. This is your site description.
      This is your site description. This is your site description.
      This is your site description. This is your site description.
      This is your site description. This is your site description.
      This is your site description. This is your site description.`,

    socialData: {
      size: "24px",
      gap: "24px",
      newTab: false,
      items: {
        "a": {
          link: "#social-a",
          url: `url("./icons/triangle.svg")`
        },
        "b": {
          link: "#social-b",
          url: `url("./icons/rectangle.svg")`
        },
        "c": {
          link: "#social-c",
          url: `url("./icons/diamond.svg")`
        }
        // add more
      }
    }
  },

  legalData: {
    logoData: {
      link: "/",
      height: "32px",
      items: {
        "main icon": {
          url: `url("./icons/triangle.svg")`,
          width: "32px",
          height: "32px", // optional
          marginRight: "12px" // optional
        },
        "main logo": {
          url: `url("./icons/octagon-5w.svg")`,
          width: "160px"
        }
        // add more
      }
    },

    copyright: "© [YEAR] [AUTHOR]",

    linkData: {
      newTab: false,
      items: {
        "Legal 1": "#legal-link-1",
        "Legal 2": "#legal-link-2",
        "Legal 3": "#legal-link-3"
        // add more
      }
    }
  }
};
