## Quick Start
```html
<faco-header></faco-header>
<script src="./data.js" defer></script>
<script type="module" src="../../components/faco-header/index.js"></script>
```
Just add 3 lines in your HTML:
1. Add custom tag
2. Add data script
3. Add logic script

The paths above are written relative to this location.

> Data (**facoweb** root): `docs/faco-header/data.js`  
> Logic (**facoweb** root): `components/faco-header/index.js`

---

## Data Usage
You can copy the example from the [**Data Template**](#data-template) section,
or copy and edit the [`data.js`](./data.js) file directly.

If you want to understand how it works, looking at [`data.js`](./data.js) might be even clearer than just reading the **Data Usage** section.


> [!NOTE]
> Don’t forget the comma `,` when adding more items.
> - "first" -> "first", "second"
> - "First": {} -> "First": {}, "Second": {}
>
> Relative paths are resolved based on the `HTML` file location, not `data.js`.
> - `url("./relative/path.svg")`
> - `link: "./relative/path/"`

---

### logoData
```javascript
logoData: {
  link: "/",
  height: "24px",
  items: {
    "main icon": {
      url: `url("./icons/triangle.svg")`,
      width: "24px",
      height: "24px", // optional
      marginRight: "8px" // optional
    },
    "main logo": {
      url: `url("./icons/octagon-5w.svg")`,
      width: "120px"
    }
    // add more logo items
  }
}
```
The `url` field **MUST** use an `.svg` file.
**Optional** lines can be removed.
If `(optional) height` is missing, `logoData.height` is used instead.
If `(optional) marginRight` is missing, it usually behaves like 0.

---

### mainMenuData
```javascript
mainMenuData: {
  "Main menu 1": {
    "Item 1-1": "#item-1-1",
    "Item 1-2": "#item-1-2"
    // add more sub items
  },
  "Main menu 2": {
    "Item 2-1": "#item-2-1"
    // add more sub items
  }
  // add more items
}
```

---

### drawerMenuData
```javascript
drawerMenuData: {
  "Drawer menu 1": {
    "Item 1-1": "#item-1-1"
    // add more sub items
  },
  "Drawer menu 2": {
    "Item 2-1": "#item-2-1",
    "Item 2-2": "#item-2-2"
    // add more sub items
  }
  // add more items
}
```
---

## Data Template
```javascript
const FacoHeaderData = {
  logoData: {
    link: "/",
    height: "24px",
    items: {
      "main logo": {
        url: `url("./icons/octagon-5w.svg")`,
        width: "120px",
        height: "24px", // optional
        marginRight: "8px" // optional
      }
      // add more
    }
  },

  mainMenuData: {
    "Main menu 1": {
      "Item 1-1": "#item-1-1"
      // add more
    }
    // add more
  },

  drawerMenuData: {
    "Drawer menu 1": {
      "Item 1-1": "#"
      // add more
    }
    // add more
  }
};
```
