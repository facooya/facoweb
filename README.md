# Facoweb
Reusable web components with plain `JavaScript` and `CSS`. 

**Features**
- No build step.
- Encapsulation.
- Standalone every components.

## Demo
### Preview
- [faco-header](https://facooya.github.io/facoweb/doc/faco-header/) – Header UI with top-bar, main-menu, and drawer-menu.
- [faco-footer](https://facooya.github.io/facoweb/doc/faco-footer/) - Footer UI with navigation links, description, copyright, social links and bottom links.
- [faco-pager](https://facooya.github.io/facoweb/doc/faco-pager/) – Tab UI with page controller.
- [faco-tab](https://facooya.github.io/facoweb/doc/faco-tab/) – Simple tab UI.
- [faco-code](https://facooya.github.io/facoweb/doc/faco-code/) – Code viewer, support custom syntax highlighting that not easy, required skill regular expression.

---

### Demo on Server
Access Demo: `[server]/facoweb/doc/[ui]/`  
Examples: `faco-tab`
- `http://localhost/facoweb/doc/faco-tab/`
- `https://example.com/facoweb/doc/faco-tab/`
- `https://example.com/facoweb/doc/faco-tab/index.html`

---

## Usage
Pick UI: `facoweb/ui/` (e.g., `faco-tab`)   
Add to **HTML**:
```html
<!-- E.g., faco-tab -->
<faco-tab></faco-tab>
<script src="facoweb/doc/faco-tab/data.js" defer></script>
<script type="module" src="facoweb/ui/faco-tab/index.js"></script>
```

```html
<!-- 
<[ui]></[ui]>
<script src="facoweb/doc/[ui]/*data.js" defer></script>
<script type="module" src="facoweb/ui/[ui]/index.js"></script>
-->
```
For details: `facoweb/doc/[ui]/README.md`:
- [faco-header README](doc/faco-header/README.md)
- [faco-footer README](doc/faco-footer/README.md)
- [faco-pager README](doc/faco-pager/README.md)
- [faco-tab README](doc/faco-tab/README.md)
- [faco-code README](doc/faco-code/README.md)

---

### Minimal Setup
E.g., `faco-tab`
Copy and remove:
```bash
cp facoweb/ui/faco-tab/ . # Copy 'faco-tab'
cp facoweb/doc/faco-tab/*data.js . # Copy all '*data.js'
rm -r facoweb/ # Remove Facoweb project
touch test.html # Create 'test.html'
```
Add to `test.html`:  
```html
<faco-tab></faco-tab>
<script src="./data.js" defer></script>
<script type="module" src="./faco-tab/index.js"></script>
```
Test: `[server]/test.html`  

Support renaming UI directory without issues.  
```bash
mv faco-tab/ facooya-tab/
```
```html
<script type="module" src="./facooya-tab/index.js"></script>
```

---

## Directory Structure
- **ui/** - Reusable components.
- **doc/** - Documentation and demo.
- **assets/** - Icons and share `css` and `js`.

---

> FACOWEB: Facooya Web  
> Maintained by Facooya and Fanone Facooya, 2026
