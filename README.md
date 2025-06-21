# Facoweb
Reusable UI components built with plain JavaScript and CSS. 

## Preview

- [faco-header](https://facooya.github.io/facoweb/components/faco-header/) – Header UI with top-bar, main-menu, drawer-menu
- [faco-footer](https://facooya.github.io/facoweb/components/faco-footer/) - footer UI
- [faco-pager](https://facooya.github.io/facoweb/components/faco-pager/) – Tabbed UI with page control
- [faco-tab](https://facooya.github.io/facoweb/components/faco-tab/) – Simple tabbed content interface
- [faco-code](https://facooya.github.io/facoweb/components/faco-code/) – code viewer

## Quick Start

Clone the repo:  
```bash
git clone https://github.com/facooya/facoweb.git
```

Choose a component: `facoweb/components/` (e.g., `faco-tab`)  
Test: `[yourSite.com]/facoweb/components/faco-tab/`

It works?
You can change custom data:
Try open and edit `facoweb/components/faco-tab/faco-tab-data.js`

You can custom HTML just include tag and script:  
```html
<faco-tab></faco-tab>
<script type="module" src="facoweb/components/faco-tab/src/faco-tab.js"></script>
```

Require script `type="module"`.

Each component follows the same pattern:

`[component]/src/[component].js`
(Example: `faco-tab/src/faco-tab.js`)

`[component]/[component]-data.js`
(Example: `faco-tab/faco-tab-data.js`)

Not sure how to use the tag or script?  
Check `index.html` in each component for a simple example.  

## Minimal Usage

Clone.

```bash
cp facoweb/components/faco-tab/ .
rm -r facoweb/
```

Test: `[yourSite]/faco-tab/`

You can also rename the component directory without issues.

```bash
mv faco-tab/ facooya-tab/
```

Test: `[yourSite]/facooya-tab/`

## Features
- Uses only plain JavaScript and CSS
- No build step
- Each component is fully standalone
- Encapsulates styles and behavior
- Reduces repetitive HTML
- Easy to drop into any project

---

### Directory Structure
- **components/** - Components
- **docs/** - Documentation
- **shared/** - Not important

---

> Facoweb is a shortened form of “FACOoya WEB”.

