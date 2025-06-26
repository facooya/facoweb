## Quick Start
```html
<faco-tab></faco-tab>
<script src="./data.js" defer></script>
<script type="module" src="../../components/faco-tab/index.js"></script>
```
Just add 3 lines in your HTML:
1. Add custom tag
2. Add data script
3. Add logic script

The paths above are written relative to this location.

> Data (**facoweb** root): `docs/faco-tab/data.js`  
> Logic (**facoweb** root): `components/faco-tab/index.js`

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

### tabs
```javascript
tabs: {
  "Tab 1": {
    "Box 1-1": {
      link: "#box-1-1",
      text: "box 1-1"
    },
    "Box 2-1": {
      link: "#box-1-2",
      text: "box 1-2"
    }
    // add more boxes
  },
  "Tab 2": {
    "Box 2-1": {
      link: "#box-2-1",
      text: "box 2-1"
    }
    // add more boxes
  }
  // add more tabs
}
```

## Data Template
```javascript
const FacoTabData = {
  title: "Title",
  tabs: {
    "Tab label": {
      "Box label": {
        link: "#link",
        text: "preview description"
      }
      // add more
    }
    // add more
  }
};
```

Don't forgot the trailing comma`,`.  
Refer to `./data.js` as a guide.  
