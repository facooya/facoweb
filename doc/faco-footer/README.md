## Quick Start
Add tag and related scripts:
```html
<faco-footer></faco-footer>
<script src="./data.js" defer></script>
<script type="module" src="../../ui/faco-footer/index.js"></script>
```

> [!TIP]
> Data: `/doc/faco-footer/data.js`  
> Logic: `/ui/faco-footer/index.js`  

---

## Data Usage
Template file: [`data.js`](./data.js).

---

### Explore Data
```javascript
exploreData: {
	"Category 1": {
		"link text 1-1": "#link-1-1",
		"link text 1-2": "#link-1-2",
		/* Add more items here. */
	},
	"Category 2": {
		"link text 2-1": "#link-2-1",
		/* Add more items here. */
	},
	/* Add more categories here. */
},
```

---

### About Data
```javascript
logoData: {},
description: `Description.
	new line desciprtion.
	ignore space.`,
socialData: {},
```
The `logoData` and `socialData` see Logo Data and Social Data sections.

---

### Legal Data
```javascript
logoData: {},
copyright: "Copyright [YEAR] [AUTHOR]",
linkData: {},
```
The `logoData` and `linkData` see Logo Data and Link Data sections.

---

#### Logo Data
In About Data and Legal Data.
```javascript
logoData: {
	link: "/",
	height: "32px",
	items: {
		"sub logo": {
			url: `url("./icons/octagon-2w.svg")`,
			width: "64px",
            /* Optional: height, marginRight */
			height: "32px",
			marginRight: "0px",
		},
		/* Add more logo items here. */
	},
},
```
The `url` field must use `.svg` extension.  

> [!NOTE]
> Note that for optional field:  
> If `items.height` is missing, it will equal to `logoData.height`.  
> If `items.marginRight` is missing, it will equal to zero.  

---

#### Social Data
In About Data.
```javascript
socialData: {
	size: "24px",
	gap: "24px",
	newTab: false,
	items: {
		"social a": {
			link: "#social-a",
			url: `url("[social/a-icon.svg]")`,
		},
		"social b": {
			link: "#social-b",
			url: `url("[social/b-icon.svg]")`,
		},
		/* Add more social items here. */
	},
},
```
The `url` field must use `.svg` extension.  
The `newTab` field must be `true` or `false`.  

---

#### Link Data
In Legal Data.
```javascript
linkData: {
	newTab: false,
	items: {
		"Legal Link Text": "#legal-link",
		/* Add more bottom link here. */
	},
},
```
The `newTab` field must be `true` or `false`.  

---

## Data Template
```javascript
const FacoFooterData = {
	exploreData: {
		"Category Text": {
			"Link Text": "#link",
			/* Add more items here. */
		},
		/* Add more categories here. */
	},

	aboutData: {
		logoData: {
			link: "/",
			height: "32px",
			items: {
				"sub logo": {
					url: `url("./icons/octagon-2w.svg")`,
					width: "64px",
					height: "32px",
					marginRight: "0px",
				},
				/* Add logo items here. */
			},
		},

		description: `Description.`,

		socialData: {
			size: "24px",
			gap: "24px",
			newTab: false,
			items: {
				"social a": {
					link: "#social-a",
					url: `url("./icons/triangle.svg")`,
				},
                /* Add more social items here. */
			},
		},
	},

	legalData: {
		logoData: {
			link: "/",
			height: "32px",
			items: {
				"main logo": {
					url: `url("./icons/octagon-5w.svg")`,
					width: "160px",
					height: "32px",
					marginRight: "0px",
				},
                /* Add more logo items here. */
			},
		},

		copyright: "Copyright [YEAR] [AUTHOR]",

		linkData: {
			newTab: false,
			items: {
				"Legal Link Text": "#legal-link",
				/* add more bottom link here. */
			},
		},
	},
};
```

---

> Maintained by Facooya and Fanone Facooya, 2025-2026
