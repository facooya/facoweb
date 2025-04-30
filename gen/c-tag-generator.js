/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* ================================================== */
class C_TagData {
  static textData = {
    split: /(".*?(?<!\\)"|\/\*[\s\S]*?\*\/|'.*?')/,
    newline: /\n/,
    backslash: /\\./g,
    percent: /%./g
  };
  static findData = {
    /* splitText: /(".*?(?<!\\)"|\/\*[\s\S]*?\*\/|'.*?')/, */
    dataType: /\b(void|int|float|char|return)\b/g,
    systemFunction: /\b(if|else|switch|while|for)\b/g,
    stdioFunction: /\bprintf\b/g,
    number: /\b(0[xX][0-9a-fA-F]+|\d+(\.\d+f?)?)\b/g
  };
  static replaceData = {
    comment: `<span class="c-comment">$&</span>`,
    number: `<span class="c-number">$&</span>`,
    text: `<span class="c-text">$&</span>`,
    textBold: `<span class="c-text-bold">$&</span>`,
    orange: `<span class="c-orange">$&</span>`,
    blue: `<span class="c-blue">$&</span>`,
    purple: `<span class="c-purple">$&</span>`
  };
}
/* ================================================== */
class C_TagManager {
  static selfGenerate() {
    const dpmsc = document.querySelector(".dpmsc");
    const codes = dpmsc.querySelectorAll(".code-c");
    /*  */
    const textData = C_TagData.textData;
    const findData = C_TagData.findData;
    const replaceData = C_TagData.replaceData;
    /*  */
    for (let i = 0; i < codes.length; i++) {
      const getText = codes[i].innerHTML;
      const parts = getText.split(textData.split);
      for (let pi = 0; pi < parts.length; pi++) {
        if (parts[pi][0] === "\"") {
          parts[pi] = parts[pi].replace(textData.backslash, replaceData.textBold);
          parts[pi] = parts[pi].replace(textData.percent, replaceData.textBold);
          parts[pi] = parts[pi].replace(parts[pi], replaceData.text);
        } else if (parts[pi][0] === "'") {
          parts[pi] = parts[pi].replace(textData.backslash, replaceData.textBold);
          parts[pi] = parts[pi].replace(parts[pi], replaceData.text);
        } else if (parts[pi][0] === "/" && parts[pi][1] === "*") {
          parts[pi] = parts[pi].replace(parts[pi], replaceData.comment);
        } else {
          parts[pi] = parts[pi].replace(findData.dataType, replaceData.orange);
          parts[pi] = parts[pi].replace(findData.systemFunction, replaceData.purple);
          parts[pi] = parts[pi].replace(findData.stdioFunction, replaceData.blue);
          parts[pi] = parts[pi].replace(findData.number, replaceData.number);
        }
      }
      codes[i].innerHTML = parts.join("");
    }
  }
}
/* ================================================== */
/* ================================================== */
C_TagManager.selfGenerate();
/* ================================================== */
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
/* ========================= ;FACOOYA; ========================= */