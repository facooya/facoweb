/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* ================================================== */
const HighlighterC = {
  split: /(#.*?\s|&lt;.*?&gt;|".*?(?<!\\)"|\/\*[\s\S]*?\*\/|'.*?'|\/\/[\s\S]*?$)/gm,
  /* -------------------------------------------------- */
  pattern: {
    escapeSequence: /(\\.|%.*?[dufcsoxXp%])/g,
    number: /\b(0[xX][0-9a-fA-F]+|\d+(\.\d+(f|L)?)?|\d+(f|L|U|LL)?|0[bB][01]+)\b/g,
    type: new RegExp(
      `\\b(${[
        "void", "short", "int", "long", "float", "double", "char", "signed",
        "unsigned", "struct", "FILE", "size_t", "__kernel_size_t", "return",
        "case", "default", "break", "continue", "NULL", "const", "typedef"
      ].join("|")})\\b`, "g"
    ),
    control: new RegExp(`\\b(${[
      "if", "else", "switch", "while", "do", "for"
    ].join("|")})\\b`, "g"),
    stdio: new RegExp(`\\b(${[
      "printf", "scanf", "sizeof", "fopen", "fclose", "fgets", "fputs", "fprintf",
      "fwrite", "fread", "putchar", "perror", "fseek", "rewind", "ftell"
    ].join("|")})\\b`, "g"),
    socket: new RegExp(`\\b(${[
      "socket", "setsockopt", "bind", "listen", "accept", "connect", "close",
      "read", "write", "sendmsg", "recvmsg"
    ].join("|")})\\b`, "g")
  },
  /* -------------------------------------------------- */
  highlight: {
    gray: `<span class="code-gray">$&</span>`,
    red: `<span class="red">$&</span>`,
    green: `<span class="code-green">$&</span>`,
    lightGreen: `<span class="code-light-green">$&</span>`,
    darkGreen: `<span class="code-dark-green">$&</span>`,
    blue: `<span class="code-blue">$&</span>`,
    lightBlue: `<span class="code-light-blue">$&</span>`,
    orange: `<span class="code-orange">$&</span>`,
    purple: `<span class="code-purple">$&</span>`
  },
  /* ================================================== */
  generator() {
    const codes = document.querySelectorAll(".code-viewer .code-c");
    const pattern = HighlighterC.pattern;
    const highlight = HighlighterC.highlight;
    /* --------------- */
    codes.forEach(code => {
      const getText = code.innerHTML;
      const parts = getText.split(HighlighterC.split);
      for (let i = 0; i < parts.length; i++) {
        if (parts[i].startsWith("\"") || parts[i].startsWith("'")) {
          parts[i] = parts[i].replace(pattern.escapeSequence, highlight.lightGreen);
          parts[i] = parts[i].replace(parts[i], highlight.green);
        } else if (parts[i].startsWith("/*") || parts[i].startsWith("//")) {
          parts[i] = parts[i].replace(parts[i], highlight.darkGreen);
        } else if (parts[i].startsWith("#")) {
          parts[i] = parts[i].replace(parts[i], highlight.gray);
        } else if (parts[i].startsWith("&lt;")) {
          parts[i] = parts[i].replace(parts[i], highlight.red);
        } else {
          parts[i] = parts[i].replace(pattern.type, highlight.orange);
          parts[i] = parts[i].replace(pattern.number, highlight.lightBlue);
          parts[i] = parts[i].replace(pattern.stdio, highlight.blue);
          parts[i] = parts[i].replace(pattern.socket, highlight.blue);
          parts[i] = parts[i].replace(pattern.control, highlight.purple);
        }
      }
      code.innerHTML = parts.join("");
    });
  }
};
/* ================================================== */
/* ========================= > Code ========================= */
window.addEventListener("load", HighlighterC.generator);
/* ========================= < Code ========================= */
/* NOTE
 * const CodeSyntaxHighlighter = {
 *   split: regularExpression,
 *   pattern: {
 *     pattern: regularExpression
 *   },
 *   highlight: {
 *     highlight: highlightFormat
 *   },
 *   generator() {}
 * }
 * ---------------
 * COPY
 * pattern: new RegExp(`\\b(${[].join("|")})\\b`, "g"),
 * highlight: `<span class="">$&</span>`,
 */
