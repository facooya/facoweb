# Facoweb
Reusable UI components built with plain JavaScript and CSS. 

---

## Features
- Uses only plain JavaScript and CSS
- No build step
- Each component is fully standalone
- Encapsulates styles and behavior
- Reduces repetitive HTML
- Easy to drop into any project

---

## Quick Start

Clone the repo:  
```bash
git clone https://github.com/facooya/facoweb.git
```

Choose a component: `facoweb/components/` (e.g., `faco-tab`)  

Add the tag and script to your HTML:  
```html
<faco-tab></faco-tab>
<script type="module" src="facoweb/components/faco-tab/src/faco-tab.js"></script>
```

Edit content:
`facoweb/components/faco-tab/faco-tab-data.js`

Optional:
Each component is standalone.
You can copy the component you need (e.g., `faco-tab`) to another location and delete the entire `facoweb/` directory.
It will still work.
You can also rename the component directory without issues.
Just don't rename internal files or subdirectories.

---

Not sure how to use the tag or script?  
Check `index.html` in each component for a simple example.  

---

Each component follows the same pattern:

`[component]/src/[component].js`
(Example: `faco-tab/src/faco-tab.js`)

`[component]/[component]-data.js`
(Example: `faco-tab/faco-tab-data.js`)

---

### Components
- **faco-code/** – Code viewer
- **faco-footer/** – Footer UI
- **faco-header/** – Header UI with top-bar, main-menu, drawer-menu
- **faco-pager/** – Tabbed UI with page control
- **faco-tab/** – Simple tabbed content interface

---

### Directory Structure
- **components/** - Components
- **docs/** - Documentation
- **shared/** - Not important

---

> Facoweb is a shortened form of “FACOoya WEB”.
