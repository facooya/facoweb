/* NOTE
 * FacoCodeSyntaxData and FacoCodeColor reference: "README.md"
 * Path from facoweb root: "docs/faco-code/README.md"
 */

const FacoCodeColor = {
  gray: `<span class="color-gray">$&</span>`,
  red: `<span class="color-red">$&</span>`,
  green: `<span class="color-green">$&</span>`,
  lightGreen: `<span class="color-light-green">$&</span>`,
  darkGreen: `<span class="color-dark-green">$&</span>`,
  blue: `<span class="color-blue">$&</span>`,
  lightBlue: `<span class="color-light-blue">$&</span>`,
  orange: `<span class="color-orange">$&</span>`,
  darkOrange: `<span class="color-dark-orange">$&</span>`,
  yellow: `<span class="color-yellow">$&</span>`,
  lightYellow: `<span class="color-light-yellow">$&</span>`,
  darkYellow: `<span class="color-dark-yellow">$&</span>`,
  purple: `<span class="color-purple">$&</span>`,
  pink: `<span class="color-pink">$&</span>`,
  brown: `<span class="color-brown">$&</span>`
  // add more colors
};

const FacoCodeSyntaxData = {
  "syntax-c": {
    split: new RegExp(String.raw`(#.*?\s|&lt;.*?&gt;|".*?(?<!\\)"|\/\*[\s\S]*?\*\/|'.*?'|\/\/[\s\S]*?$)`, "gm"),

    pattern: {
      escapeSequence: new RegExp(String.raw`(\\.|%.*?[dufcsoxXp%])`, "g"),
      number: new RegExp(String.raw`\b(\d+(\.\d+(f|L)?)?|\d+(f|L|U|LL)?|0[bB][01]+|0[oO][0-7]+|0[xX][0-9a-fA-F]+)\b`, "g"),
      type: new RegExp(String.raw
        `\b(${[
          "void", "short", "int", "long", "float", "double", "char", "signed",
          "unsigned", "struct", "FILE", "size_t", "__kernel_size_t", "return",
          "case", "default", "break", "continue", "NULL", "const", "typedef"
        ].join("|")})\b`, "g"
      ),

      control: new RegExp(String.raw`\b(${[
        "if", "else", "switch", "while", "do", "for"
      ].join("|")})\b`, "g"),
      stdio: new RegExp(String.raw`\b(${[
        "printf", "scanf", "sizeof", "fopen", "fclose", "fgets", "fputs", "fprintf",
        "fwrite", "fread", "putchar", "perror", "fseek", "rewind", "ftell"
      ].join("|")})\b`, "g"),
      socket: new RegExp(String.raw`\b(${[
        "socket", "setsockopt", "bind", "listen", "accept", "connect", "close",
        "read", "write", "sendmsg", "recvmsg"
      ].join("|")})\b`, "g")
      // add more patterns
    },

    syntaxRender(facoCode) {
      const pattern = this.pattern;
      const color = FacoCodeColor;

      const viewContent = facoCode.shadowRoot.querySelector(".view-content");
      const getText = viewContent.innerHTML;
      const parts = getText.split(this.split);
      for (let i = 0; i < parts.length; i++) {
        
        if (parts[i].startsWith("\"") || parts[i].startsWith("'")) {
          parts[i] = parts[i].replace(pattern.escapeSequence, color.lightGreen);
          parts[i] = parts[i].replace(parts[i], color.green);

        } else if (parts[i].startsWith("/*") || parts[i].startsWith("//")) {
          parts[i] = parts[i].replace(parts[i], color.darkGreen);

        } else if (parts[i].startsWith("#")) {
          parts[i] = parts[i].replace(parts[i], color.gray);

        } else if (parts[i].startsWith("&lt;")) {
          parts[i] = parts[i].replace(parts[i], color.red);

        } else { // add more `else if (parts[i].startsWith())`
          parts[i] = parts[i].replace(pattern.type, color.orange);
          parts[i] = parts[i].replace(pattern.number, color.lightBlue);
          parts[i] = parts[i].replace(pattern.stdio, color.blue);
          parts[i] = parts[i].replace(pattern.socket, color.blue);
          parts[i] = parts[i].replace(pattern.control, color.purple);
          // add more replaces
        }

      }
      viewContent.innerHTML = parts.join("");
    }
  },

  "syntax-cpp": {
    split: new RegExp(String.raw`(#.*?\s|&lt;.*?&gt;|".*?(?<!\\)"|\/\*[\s\S]*?\*\/|'.*?'|\/\/[\s\S]*?$)`, "gm"),

    pattern: {
      escapeSequence: new RegExp(String.raw`(\\.|%.*?[dufcsoxXp%])`, "g"),
      number: new RegExp(String.raw`\b(\d+(\.\d+(f|L)?)?|\d+(f|L|U|LL)?|0[bB][01]+|0[oO][0-7]+|0[xX][0-9a-fA-F]+)\b`, "g"),

      control: new RegExp(String.raw`\b(${[
        "if", "else", "switch", "while", "do", "for"
      ].join("|")})\b`, "g"),

      type: new RegExp(String.raw
        `\b(${[
          "void", "short", "int", "long", "float", "double", "char", "string", "signed",
          "unsigned", "struct", "FILE", "size_t", "__kernel_size_t", "return",
          "case", "default", "break", "continue", "NULL", "const", "typedef",
          "this", "class", "private", "public", "using", "namespace", "sizeof"
        ].join("|")})\b`, "g"),

      iostream: new RegExp(String.raw
        `\b(${[
          "cout", "cin", "endl"
        ].join("|")})\b`, "g")
      // add more patterns
    },

    syntaxRender(facoCode) {
      const pattern = this.pattern;
      const color = FacoCodeColor;

      const viewContent = facoCode.shadowRoot.querySelector(".view-content");
      const getText = viewContent.innerHTML;
      const parts = getText.split(this.split);
      for (let i = 0; i < parts.length; i++) {

        if (parts[i].startsWith("\"") || parts[i].startsWith("'")) {
          parts[i] = parts[i].replace(pattern.escapeSequence, color.lightGreen);
          parts[i] = parts[i].replace(parts[i], color.green);

        } else if (parts[i].startsWith("/*") || parts[i].startsWith("//")) {
          parts[i] = parts[i].replace(parts[i], color.darkGreen);

        } else if (parts[i].startsWith("#")) {
          parts[i] = parts[i].replace(parts[i], color.gray);

        } else if (parts[i].startsWith("&lt;")) {
          parts[i] = parts[i].replace(parts[i], color.red);

        } else { // add more `else if (parts[i].startsWith())`
          parts[i] = parts[i].replace(pattern.type, color.orange);
          parts[i] = parts[i].replace(pattern.number, color.lightBlue);
          parts[i] = parts[i].replace(pattern.iostream, color.blue);
          parts[i] = parts[i].replace(pattern.control, color.purple);
          // add more replaces
        }

      }
      viewContent.innerHTML = parts.join("");
    }
  }
  // add more syntaxes
};
