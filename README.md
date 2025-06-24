
# Facoweb
Reusable UI components built with plain JavaScript and CSS. 

## Demo
### Preview
- [faco-header](https://facooya.github.io/docs/faco-header/) – Feader UI with top-bar, main-menu, drawer-menu
- [faco-footer](https://facooya.github.io/docs/faco-footer/) - Footer UI
- [faco-pager](https://facooya.github.io/docs/faco-pager/) – Tabbed UI with page control
- [faco-tab](https://facooya.github.io/docs/faco-tab/) – Simple tabbed content interface
- [faco-code](https://facooya.github.io/docs/faco-code/) – Code viewer
---
### Demo in your web
Clone the **repository**.   
Demo path: `[yourSite]/facoweb/docs/[component]/`  
E.g., (`faco-tab`) `[yourSite]/facoweb/docs/faco-tab/` or `[yourSite]/facoweb/docs/faco-tab/index.html`

> It's assumed you're running this on a web server, and that the **repository** was cloned into the root directory of your web server.
We assume the **repository** is in the web root for simpler path examples, but it can be located anywhere on your web server.  


## Usage
Clone the **repository**.
Pick a component: `facoweb/components/` (e.g., `faco-tab`)  
Add this to your **HTML**:
```html
<faco-tab></faco-tab>
<script src="facoweb/docs/faco-tab/data.js" defer></script>
<script type="module" src="facoweb/components/faco-tab/index.js"></script>
```
> [!NOTE]
> These script paths assume the repository was cloned into the same directory as your HTML file.
> The `facoweb/docs/[component]/*data.js` file is just for demo purposes.
Customize the data as needed for your use case.
You can copy it to another location and update the script path to load different data per page.
---
```html
<!-- 
<[component]></[component]>
<script src="facoweb/docs/[component]/*data.js" defer></script>
<script type="module" src="facoweb/components/[component]/index.js"></script>
-->
```
Each component works in a similar way, but not exactly the same.
Please refer to each components `facoweb/docs/[component]/README.md` for usage details.  

---
### Minimal Usage

Copy and remove:
```bash
cp facoweb/components/faco-tab/ . # copy faco-tab here
cp facoweb/docs/faco-tab/*data.js . # copy all data.js here
rm -r facoweb/ # remove facoweb project

touch test.html # create test.html
```
Add this to `test.html`:  
```html
<faco-tab></faco-tab>
<script src="./data.js" defer></script>
<script type="module" src="./faco-tab/index.js"></script>
```

Test: `[yourSite]/test.html`

Each component is fully standalone.

---
You can also rename the component directory without issues.
```bash
mv faco-tab/ facooya-tab/
```
```html
<script type="module" src="./facooya-tab/index.js"></script>
```

## Features
- Uses only plain JavaScript and CSS
- No build step
- Each component is fully standalone
- Encapsulates styles and behavior
- Reduces repetitive HTML
- Easy to drop into any project

## Directory Structure
- **components/** - Components
- **docs/** - Documentation and demo
- **shared/** - Misc, Not important

---

> Facoweb is a shortened form of “FACOoya WEB”.
