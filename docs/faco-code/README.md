## Quick Start
```html
<faco-code class="CODE_CLASS"></faco-code>
<script src="./data.js" defer></script>
<script src="./syntax-data.js" defer></script>
<script type="module" src="../../components/faco-code/index.js"></script>
```
Just add 4 lines in your HTML:
1. Add custom tag and set the class name
2. Add data script
3. Add syntax-data scirpt
4. Add logic script

The `class="CODE_CLASS"` in `HTML` **MUST** match a key `"CODE_CLASS": {}` in `data.js`.

The paths above are written relative to this location.

> Data (**facoweb** root): `docs/faco-code/data.js`  
> Syntax Data (**facoweb** root): `docs/faco-code/syntax-data.js`  
> Logic (**facoweb** root): `components/faco-code/index.js`

---

## Data Usage
You can copy the example from the [**Data Template**](#data-template), [**Syntax Data Template**](#syntax-data-template) section,
or copy and edit the [`data.js`](./data.js), [`syntax-data.js`](./syntax-data.js) file directly.

If you want to understand how it works, looking at [`data.js`](./data.js), [`syntax-data.js`](./syntax-data.js) might be even clearer than just reading the **Data Usage** section.

> [!NOTE]
> Don’t forget the comma `,` when adding more items.
> - "first" -> "first", "second"
> - "First": {} -> "First": {}, "Second": {}
>
> Relative paths are resolved based on the `HTML` file location, not `data.js`.
> - `url("./relative/path.svg")`
> - `link: "./relative/path/"`

---

### codeData
Example `index.html`:
```html
<faco-code class="code-1"></faco-code>
<faco-code class="code-2"></faco-code>
```
> The `class="code-1"` in `index.html` **MUST** match a key `"code-1": {}` in `data.js`.

```javascript
"code-1": {
  fileName: "file.name",
  syntax: "syntax-SYNTAX_1",
  code: String.raw`code_line_1
someFunction() {
  decimal = 111;
  str = "This is code-1";
}`
},
"code-2": {
  fileName: "file.name",
  syntax: "syntax-SYNTAX_2",
  code: String.raw`code_line_1
someFunction() {
  decimal = 222;
  str = "This is code-2";
}`
}
// add more CODE_CLASS
```

The `"code-1"` key name is already define in `index.html`.  

The `syntax` field value `"syntax-SYNTAX"` match key in `syntax-data.js`  

The `code` field **MUST NOT** be indented to match the data structure.
Write it with no leading indent, and handle indentation inside the code content itself.
Code lines **SHOULD** be indented with spaces.
Or you can modify `.view-content { tab-size: 2; }` in `components/faco-code/index.css`.
Default `tab-size` is 2.

---

### codeColor
Add color in `components/faco-code/index.css`.  
Example:
```css
.color-red: { color: #ff0000; }
.color-green: {color: #00ff00; }
.color-blue: { color: #0000ff; }
```

Connect:
```javascript
const FacoCodeColor = {
  red: `<span class="color-red">$&</span>`,
  green: `<span class="color-green">$&</span>`,
  blue: `<span class="color-blue">$&</span>`
  // add more colors
};
```

---

### syntaxData
```javascript
"syntax-SYNTAX_1": {
  split: new RegExp(String.raw`".*?(?<!\\)"`, "gm"),

  pattern: {
    NUM: new RegExp(String.raw`\b\d+\b`, "g"),
    FUNC: new RegExp(String.raw`\b(${[
      "testFunc", "catchMe"
    ].join("|")})\b`, "g")
    // add more patterns
  },

  syntaxRender(facoCode) {}
},

"syntax-SYNTAX_2": {
  split: new RegExp(String.raw`[CUSTOM]`, "gm"),

  pattern: {
    [PATTERN_1]: new RegExp(String.raw`[CUSTOM]`, "g"),
    [PATTERN_2]: new RegExp(String.raw`\b(${[
      "[CUSTOM]", "[CUSTOM]"
    ].join("|")})\b`, "g"),
    [PATTERN_3]: new RegExp(String.raw`\b(${[
      "[CUSTOM]"
    ].join("|")})\b`, "g"),
    // add more patterns
  },

  syntaxRender(facoCode) {}
}
// add more syntax data
```

The `split` field using `syntaxRender()`.

How to `pattern: {}` use in `syntaxRender()` with `"syntax-SYNTAX_2"` Example:
```javascript
parts[i] = parts[i].replace(pattern.[PATTERN_1], color.red);
parts[i] = parts[i].replace(pattern.[PATTERN_2], color.green);
parts[i] = parts[i].replace(pattern.[PATTERN_3], color.blue);
```

---

### syntaxRender
```javascript
syntaxRender(facoCode) {
  const pattern = this.pattern;
  const color = FacoCodeColor;

  const viewContent = facoCode.shadowRoot.querySelector(".view-content");
  const getText = viewContent.innerHTML;
  const parts = getText.split(this.split);
  for (let i = 0; i < parts.length; i++) {

    // === MODIFY start ===
    if (parts[i].startsWith("\"")) {
      parts[i] = parts[i].replace(parts[i], color.green);
      // add more starts with `"` patterns
    } else { // add more conditional (e.g., `else if (parts[i].startWith("//"))`)
      parts[i] = parts[i].replace(pattern.NUM, color.red);
      parts[i] = parts[i].replace(pattern.FUNC, color.blue);
      // add more patterns
    }
    // === MODIFY end ===

  }
  viewContent.innerHTML = parts.join("");
}
```

---

## Data Template
```javascript
const FacoCodeData = {
  "CODE_CLASS": {
    fileName: "file.name",
    syntax: "syntax-SYNTAX",
    code: String.raw`code_line_1
someFunction() {
  decimal = 123;
  str = "String";
}`
  }
  // add more
};
```

---

## Color Data Template
```javascript
const FacoCodeColor = {
  red: `<span class="color-red">$&</span>`,
  green: `<span class="color-green">$&</span>`,
  blue: `<span class="color-blue">$&</span>`
  // add more
};
```
> [!NOTE]
> Recommend copy `FacoCodeColor` in `syntax-data.js` file.
Because all color(`color-*`) values in `index.css` are already mapped in `FacoCodeColor` from `syntax-data.js`.

---

## Syntax Data Template
```javascript
const FacoCodeSyntaxData = {
  "syntax-SYNTAX": {
    split: new RegExp(String.raw`".*?(?<!\\)"`, "gm"),

    pattern: {
      NUM: new RegExp(String.raw`\b\d+\b`, "g"),
      FUNC: new RegExp(String.raw`\b(${[
        "testFunc"
      ].join("|")})\b`, "g")
      // add more
    }
    syntaxRender(facoCode) {
      const pattern = this.pattern;
      const color = FacoCodeColor;

      const viewContent = facoCode.shadowRoot.querySelector(".view-content");
      const getText = viewContent.innerHTML;
      const parts = getText.split(this.split);
      for (let i = 0; i < parts.length; i++) {

        /* === MODIFY start === */
        if (parts[i].startsWith("\"")) {
          parts[i] = parts[i].replace(parts[i], color.green);

        } else {
          parts[i] = parts[i].replace(pattern.NUM, color.lightBlue);
          parts[i] = parts[i].replace(pattern.FUNC, color.orange);
        }
        /* === MODIFY end === */

      }
      viewContent.innerHTML = parts.join("");
    }
  }
  // add more
};
```
