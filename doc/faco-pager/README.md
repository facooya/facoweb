## Quick Start
```html
<faco-pager></faco-pager>
<script src="./data.js" defer></script>
<script type="module" src="../../ui/faco-pager/index.js"></script>
```

> [!TIP]
> Data: `/doc/faco-pager/data.js` 
> Logic: `/ui/faco-pager/index.js`

---

## Data Usage
Template file: [`data.js`](./data.js).

---

## Data Template
```javascript
const FacoPagerData = {
    title: "Title",
    tabs: {
        "Tab label": {
            "Box label": {
                link: "#link",
                text: "preview description",
            },
            /* Add more items here. */
        },
        /* Add more tabs here. */
    },
};
```

---

> Maintained by Facooya and Fanone Facooya, 2025-2026
