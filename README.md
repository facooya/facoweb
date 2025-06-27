# Facoweb
Reusable web components built with plain `JavaScript` and `CSS`. 

## Demo
### Preview
- [faco-header](https://facooya.github.io/facoweb/docs/faco-header/) – Header UI with top-bar, main-menu, drawer-menu (Nice design)
- [faco-footer](https://facooya.github.io/facoweb/docs/faco-footer/) - Footer UI
- [faco-pager](https://facooya.github.io/facoweb/docs/faco-pager/) – Tabbed UI with page control (Very simple design)
- [faco-tab](https://facooya.github.io/facoweb/docs/faco-tab/) – Simple tabbed UI (Very simple desing)
- [faco-code](https://facooya.github.io/facoweb/docs/faco-code/) – Code viewer (Nice design, But data custom is difficult)

---

### Demo in your Server
Access Demo: `[yourServer]/facoweb/docs/[component]/`  
Examples: `faco-tab`
- `http://localhost/facoweb/docs/faco-tab/`
- `https://example.com/facoweb/docs/faco-tab/`
- `https://example.com/facoweb/docs/faco-tab/index.html`

> Assumes the **repository** is in your web root. Adjust paths if needed.

---

## Usage
Pick a component: `facoweb/components/` (e.g., `faco-tab`)  
Add this to your **HTML**:
```html
<!-- E.g., faco-tab -->
<faco-tab></faco-tab>
<script src="facoweb/docs/faco-tab/data.js" defer></script>
<script type="module" src="facoweb/components/faco-tab/index.js"></script>
```
> Script paths assume the **repository** is in the same directory as your `HTML`.
The `data.js` is just for demo. Replace or customize it.

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
- [faco-header README](docs/faco-header/README.md)
- [faco-footer README](docs/faco-footer/README.md)
- [faco-pager README](docs/faco-pager/README.md)
- [faco-tab README](docs/faco-tab/README.md)
- [faco-code README](docs/faco-code/README.md)

---

### Minimal Setup
E.g., `faco-tab`
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
Test: `[yourServer]/test.html`

Each component is fully standalone.

You can also rename the component directory without issues.
```bash
mv faco-tab/ facooya-tab/
```
```html
<script type="module" src="./facooya-tab/index.js"></script>
```

---

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

You can use **issues tab** for **bug report** or **feedback**.

> Facoweb is a shortened from of “FACOoya WEB”.

> My English skills is bad. I am still learning.
> I know many words. But I don't know grammar and sentence structure.
> Long sentences structure and grammar is perfect? Maybe 90% AI assisted me.
> This is my English writing skill. Thank you for reading.
