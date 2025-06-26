## Quick Start
```html
<faco-footer></faco-footer>
<script src="./data.js" defer></script>
<script type="module" src="../../components/faco-footer/index.js"></script>
```
Just add 3 lines in your HTML:
1. Add custom tag
2. Add data script
3. Add logic script

The paths above are written relative to this location.

> Data (**facoweb** root): `docs/faco-footer/data.js`
> Logic (**facoweb** root): `components/faco-footer/index.js`

## Data Usage
You can copy the example from the [**Data Template**](#data-template) section,
or copy and edit the [`data.js`](./data.js) file directly.

If you want to understand how it works, looking at [`data.js`](./data.js) might be even clearer than just reading the **Data Usage** section.

> [!NOTE]
> Don’t forget the comma `,` when adding more items.
> Examples
- "first" -> "first", "second"
- "First": {} -> "First": {}, "Second": {}

### exploreData
```javascript
exploreData: {
  "Category 1": {
    "link text 1-1": "#link-1-1",
    "link text 1-2": "#link-1-2"
    // add more link items
  },
  "Category 2": {
    "link text 2-1": "#link-2-1"
    // add more link items
  }
  // add more categories
}
```

### aboutData
```javascript
logoData: {},
description: `Description.
  new line desciprtion.
  ignore space.`,
socialData: {}
```

### legalData
```javascript
logoData: {},
copyright: "Copyright © YEAR AUTHOR",
linkData: {}
```

---

### logoData
```javascript
logoData: {
  link: "/",
  height: "32px" // default height
  items: {
    "sub logo": {
      url: `url("./icons/octagon-2w.svg")`,
      width: "64px",
      height: "32px", // optional
      marginRight: "0px" // optional
    }
    // add more items
  }
}
```
**Optional** lines can be removed.
If **(optional) height** is missing, **logoData.height** is used instead.
If **(option) marginRight** is missing, it usually behaves like 0.

### socialData
```javascript
socialData: {
  size: "24px",
  gap: "24px",
  newTab: false,
  items: {
    "social a": {
      link: "#social-a",
      url: `url("[social/a-icon.svg]")`
    },
    "social b": {
      link: "#social-b",
      url: `url("[social/b-icon.svg]")`
    }
    // add more items
  }
}
```
The `url` field **MUST** use an `.svg` file.
The `newTab` field **MUST** be `true` or `false`. If `true`, the link opens in a new tab.

### linkData
```javascript
linkData: {
  newTab: false,
  items: {
    "Legal Link Text": "#legal-link"
    // add more items
  }
}
```
The `newTab` field **MUST** be `true` or `false`. If `true`, the link opens in a new tab.

## Data Template
```javascript
const FacoFooterData = {
  exploreData: {
    "Category Text": {
      "Link Text": "#link"
      // add more
    }
    // add more
  },

  aboutData: {
    logoData: {
      link: "/",
      height: "32px"
      items: {
        "sub logo": {
          url: `url("./icons/octagon-2w.svg")`,
          width: "64px",
          height: "32px", // optional
          marginRight: "0px" // optional
        }
        // add more
      }
    },

    description: `Description.`,

    socialData: {
      size: "24px",
      gap: "24px",
      newTab: false,
      items: {
        "social a": {
          link: "#social-a",
          url: `url("./icons/triangle.svg")`
        }
        // add more
      }
    }
  },

  legalData: {
    logoData: {
      link: "/",
      height: "32px"
      items: {
        "main logo": {
          url: `url("./icons/octagon-5w.svg")`,
          width: "160px",
          height: "32px", // optional
          marginRight: "0px" // optional
        } // add more
      }
    },

    copyright: "© [YEAR] [AUTHOR]",

    linkData: {
      newTab: false,
      items: {
        "Legal Link Text": "#legal-link"
        // add more
      }
    }
  }
};
```
