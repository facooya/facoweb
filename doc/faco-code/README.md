## Quick Start
Add tag and related scripts:
```html
<faco-code class="CODE_CLASS"></faco-code>
<script src="./data.js" defer></script>
<script src="./syntax-data.js" defer></script>
<script type="module" src="../../ui/faco-code/index.js"></script>
```
The `class="CODE_CLASS"` in `HTML`, must match key `"CODE_CLASS": {}` in `data.js`.

> [!TIP]
> Data: `/doc/faco-code/data.js`  
> Syntax Data: `/doc/faco-code/syntax-data.js`  
> Logic: `/ui/faco-code/index.js`  

---

## Data Usage
Template files: [`data.js`](./data.js), [`systax-data.js`](./syntax-data.js).

---

### Code Data
For example: `index.html`:
```html
<faco-code class="code-1"></faco-code>
<faco-code class="code-2"></faco-code>
```

> [!NOTE]
> The `class="code-1"` in `index.html`, must match key `"code-1": {}` in `data.js`.

```js
"code-1": {
    fileName: "file.name",
    syntax: "syntax-SYNTAX_1",
    code: String.raw`someFunction() {
    decimal = 111;
    str = "This is code-1";
}`,
},
"code-2": {
    fileName: "file.name",
    syntax: "syntax-SYNTAX_2",
    code: String.raw`someFunction() {
    decimal = 222;
    str = "This is code-2";
}`,
},
/* Add more CODE_CLASS here. */
```

The `code-1` key name defined in `index.html`.
Syntax value like `syntax-SYNTAX_1` match key in `syntax-data.js`.

Support modifying tab size to `.view-content { tab-size: 2; }` in `/ui/faco-code/index.css`.
Default `tab-size` is `2` for mobile users.

---

### Code Color
Add color definition, in `/ui/faco-code/index.css`. 
For example:
```css
.color-red: { color: #ff0000; }
.color-green: { color: #00ff00; }
.color-blue: { color: #0000ff; }
```

For example to connect color, in `syntax-data.js`:
```js
const FacoCodeColor = {
    red: `<span class="color-red">$&</span>`,
    green: `<span class="color-green">$&</span>`,
    blue: `<span class="color-blue">$&</span>`,
    /* Add more colors here. */
};
```

---

### Syntax Data
```js
"syntax-SYNTAX_1": {
    split: new RegExp(String.raw`".*?(?<!\\)"`, "gm"),

    pattern: {
        NUM: new RegExp(String.raw`\b\d+\b`, "g"),
        FUNC: new RegExp(String.raw`\b(${[
            "testFunc", "catchMe"
        ].join("|")})\b`, "g"),
        /* Add more patterns here. */
    },

    syntaxRender(facoCode) {},
},

/* For example */
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
        /* Add more patterns here. */
    },

    syntaxRender(facoCode) {},
},
/* Add more syntax data here. */
```

---

### Syntax Render
```js
syntaxRender(facoCode) {
    const pattern = this.pattern;
    const color = FacoCodeColor;

    const viewContent = facoCode.shadowRoot.querySelector(".view-content");
    const getText = viewContent.innerHTML;
    const parts = getText.split(this.split);
    for (let i = 0; i < parts.length; i++) {

        /* === MODIFY start === */
        /* Add more conditional (e.g., else if (parts[i].startWith("//")) {} ). */
        if (parts[i].startsWith("\"")) {
            parts[i] = parts[i].replace(parts[i], color.green);
            /* Add more patterns here, for starts with '"'. */
        } else {
            parts[i] = parts[i].replace(pattern.NUM, color.red);
            parts[i] = parts[i].replace(pattern.FUNC, color.blue);
            /* Add more patterns here. */
        }
        /* === MODIFY end === */

    }
    viewContent.innerHTML = parts.join("");
},
```

---

## Data Template
```js
const FacoCodeData = {
    "CODE_CLASS": {
        fileName: "file.name",
        syntax: "syntax-SYNTAX",
        code: String.raw`code_line_1
someFunction() {
    decimal = 123;
    str = "String";
}`
    },
    /* Add more CODE_CLASS here. */
};
```

---

## Syntax Data Template
```js
const FacoCodeColor = {
    red: `<span class="color-red">$&</span>`,
    green: `<span class="color-green">$&</span>`,
    blue: `<span class="color-blue">$&</span>`,
    /* Add more color here. */
};

const FacoCodeSyntaxData = {
    "syntax-SYNTAX": {
        split: new RegExp(String.raw`".*?(?<!\\)"`, "gm"),

        pattern: {
            NUM: new RegExp(String.raw`\b\d+\b`, "g"),
            FUNC: new RegExp(String.raw`\b(${[
                "testFunc"
            ].join("|")})\b`, "g"),
            /* Add more patterns here. */
        },

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
        },
    },
    /* add more synatx here. */
};
```

---

> Maintained by Facooya and Fanone Facooya, 2025-2026
