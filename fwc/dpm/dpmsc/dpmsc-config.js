/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* ================================================== */
class DpmscConfigData {
  /* static textData = {
    split: /(".*?(?<!\\)"|\/\*[\s\S]*?\*\/|'.*?')/,
    newline: /\n/,
    backslash: /\\./g,
    percent: /%./g
  };
  static findData = {
    /* splitText: /(".*?(?<!\\)"|\/\*[\s\S]*?\*\/|'.*?')/, 
    dataType: /\b(void|int|float|char|return)\b/g,
    systemFunction: /\b(if|else|switch|while|for)\b/g,
    stdioFunction: /\bprintf\b/g,
    number: /\b(0[xX][0-9a-fA-F]+|\d+(\.\d+f?)?)\b/g
  };
  static replaceData = {
    comment: "<span class=\"comment\">$&</span>",
    number: "<span class=\"number\">$&</span>",
    text: "<span class=\"text\">$&</span>",
    textBold: "<span class=\"text-bold\">$&</span>",
    orange: "<span class=\"orange\">$&</span>",
    blue: "<span class=\"blue\">$&</span>",
    yellow: "<span class=\"yellow\">$&</span>"
  }; */
}
/* ================================================== */
class DpmscConfigManager {
  static viewerLineNumberItemCreate() {
    const dpmsc = document.querySelector(".dpmsc");
    const viewersMain = dpmsc.querySelectorAll(".viewer-main");
    /*  */
    viewersMain.forEach(main => {
      const frag = document.createDocumentFragment();
      const lineNumberList = main.querySelector(".line-number-list");
      const code = main.querySelector(".code");
      const codeText = code.textContent;
      const lineCount = codeText.split("\n");
      for (let i = 0; i < lineCount.length; i++) {
        const lineNumberItem = document.createElement("li");
        lineNumberItem.setAttribute("class", "line-number-item");
        lineNumberItem.textContent = (i + 1).toString();
        frag.append(lineNumberItem);
      }
      lineNumberList.append(frag);
    });
  }
  /* -------------------------------------------------- */
  /* static viewerCodeReplaceColor() {
    const dpmsc = document.querySelector(".dpmsc");
    const codes = dpmsc.querySelectorAll(".code");
    /*  
    const textData = DpmscConfig.textData;
    const findData = DpmscConfig.findData;
    const replaceData = DpmscConfig.replaceData;
    /*  
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
          parts[pi] = parts[pi].replace(findData.systemFunction, replaceData.yellow);
          parts[pi] = parts[pi].replace(findData.stdioFunction, replaceData.blue);
          parts[pi] = parts[pi].replace(findData.number, replaceData.number);
        }
      }
      codes[i].innerHTML = parts.join("");
    }
  } */
}
/* ================================================== */
class DpmscConfig {
  /* static textData = DpmscConfigData.textData;
  static findData = DpmscConfigData.findData;
  static replaceData = DpmscConfigData.replaceData; */
  /* -------------------------------------------------- */
  /* static viewerCodeReplaceColor() {
    DpmscConfigManager.viewerCodeReplaceColor();
  } */
  static viewerLineNumberItemCreate() {
    DpmscConfigManager.viewerLineNumberItemCreate();
  }
}
/* ================================================== */
export { DpmscConfig };
/* ================================================== */
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
/* ========================= ;FACOOYA; ========================= */