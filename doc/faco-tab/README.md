## Quick Start
```html
<faco-tab></faco-tab>
<script src="./data.js" defer></script>
<script type="module" src="../../ui/faco-tab/index.js"></script>
```

> [!TIP]
> Data: `/doc/faco-tab/data.js`   
> Logic: `/ui/faco-tab/index.js`

---

## Data Usage
Template file: [`data.js`](./data.js).

---

## Data Template
```javascript
const FacoTabData = {
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
