# Data Format
```html
<faco-code class="CODE_CLASS"></faco-code>
```
```javascript
const FacoCodeData = {
  "CODE_CLASS": {
    fileName: "file.name",
    syntax: "syntax-SYNTAX",
    code: String.raw`code_line_1
testFunc() {
  abc = 123;
}
code_line_3`
  }
  // code_class: add from here
};
```

# Syntax Data Format
```javascript
const FacoCodeSyntaxData = {
  "syntax-SYNTAX": {
    split: new RegExp(String.raw`".*?(?<!\\)"`, "gm"),

    pattern: {
      NUM: new RegExp(String.raw`\b\d+\b`, "g"),
      FUNC: new RegExp(String.raw`\b(${[
        "testFunc"
      ].join("|")})\b`, "g")
    },

    syntaxRender(facoCode) {
      const pattern = this.pattern;
      const color = FacoCodeColor;

      const viewContent = facoCode.shadowRoot.querySelector(".view-content");
      const getText = viewContent.innerHTML;
      const parts = getText.split(this.split);
      for (let i = 0; i < parts.length; i++) {

        /* === MODIFY syntax start === */
        if (parts[i].startsWith("\"")) {
          parts[i] = parts[i].replace(parts[i], color.green);

        } else {
          parts[i] = parts[i].replace(pattern.NUM, color.lightBlue);
          parts[i] = parts[i].replace(pattern.FUNC, color.orange);
        }
        /* === MODIFY syntax end === */

      }
      viewContent.innerHTML = parts.join("");
    }
  }
};
```
---
## Add Syntax Color
Color path: `/facoweb/components/faco-code/index.css`
```css
.color-COLOR: { color: #000000; }
```
```javascript
const FacoCodeColor = {
  COLOR: `<span class="COLOR">$&</span>`
};
```
