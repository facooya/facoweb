## Quick Start
```html
<faco-header></faco-header>
<script src="./data.js" defer></script>
<script type="module" src="../../ui/faco-header/index.js"></script>
```

> [!TIP]
> Data: `/doc/faco-header/data.js`  
> Logic: `/ui/faco-header/index.js`  

---

## Data Usage
Template file: [`data.js`](./data.js).

---

### Logo Data
```javascript
logoData: {
	link: "/",
	height: "24px",
	items: {
		"main icon": {
			url: `url("./icons/triangle.svg")`,
			width: "24px",
            /* Optional 'height' and 'marginRight'. */
			height: "24px",
			marginRight: "8px",
		},
		"main logo": {
			url: `url("./icons/octagon-5w.svg")`,
			width: "120px",
		},
        /* Add more logo items here. */
	},
},
```
- The `url` field must use `.svg` extension.

> [!NOTE]
> Note that for optional field:  
> If `items.height` is missing, it will equal to `logoData.height`.  
> If `items.marginRight` is missing, it will equal to zero.  

---

### Main Menu Data
```javascript
mainMenuData: {
	"Main menu 1": {
		"Item 1-1": "#item-1-1",
		"Item 1-2": "#item-1-2",
		/* Add more sub items here. */
	},
	"Main menu 2": {
		"Item 2-1": "#item-2-1",
		/* Add more sub items here. */
	},
	/* Add more items here. */
},
```

---

### Drawer Menu Data
```javascript
drawerMenuData: {
	"Drawer menu 1": {
		"Item 1-1": "#item-1-1",
		/* Add more sub items here. */
	},
	"Drawer menu 2": {
		"Item 2-1": "#item-2-1",
		"Item 2-2": "#item-2-2",
		/* Add more sub items here. */
	},
	/* Add more items here. */
},
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
				height: "24px",
				marginRight: "8px",
			},
            /* Add more logo items here. */
		},
	},

	mainMenuData: {
		"Main menu 1": {
			"Item 1-1": "#item-1-1",
			/* Add more sub items here. */
		},
		/* Add more items here. */
	},

	drawerMenuData: {
		"Drawer menu 1": {
			"Item 1-1": "#item-1-1",
			/* Add more sub items here. */
		},
		/* Add more items here. */
	},
};
```

---

> Maintained by Facooya and Fanone Facooya, 2025-2026
