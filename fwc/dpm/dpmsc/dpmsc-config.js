/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  BodyUtil
} from "../../fwc-hub.js";
/* ================================================== */
class DpmscConfigData {
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
    comment: "<span class=\"comment\">$&</span>",
    number: "<span class=\"number\">$&</span>",
    text: "<span class=\"text\">$&</span>",
    textBold: "<span class=\"text-bold\">$&</span>",
    orange: "<span class=\"orange\">$&</span>",
    blue: "<span class=\"blue\">$&</span>",
    yellow: "<span class=\"yellow\">$&</span>"
  };
}
/* ================================================== */
class DpmscConfigManager {
  /* static lineItemGenerate() {
    const fragment = document.createDocumentFragment();
    const dpmscLineList = document.querySelectorAll(".dpmsc-line-list");
    const dpmscViewerCode = document.querySelectorAll(".dpmsc-viewer-code");
    /*  
    for (let vci = 0; vci < dpmscViewerCode.length; vci++) {
      const getText = dpmscViewerCode[vci].textContent;
      const lineCount = getText.split("\n");
      for (let li = 0; li < lineCount.length; li++) {
        const dpmscLineItem = document.createElement("li");
        dpmscLineItem.setAttribute("class", "dpmsc-line-item");
        const dpmscLineNumber = document.createElement("span");
        dpmscLineNumber.setAttribute("class", "dpmsc-line-number");
        dpmscLineNumber.textContent = (li + 1).toString();
        /*  
        dpmscLineItem.append(dpmscLineNumber);
        fragment.append(dpmscLineItem);
      }
      dpmscLineList[vci].append(fragment);
    }
  } */
  static viewerNumberItemCreate() {
    const dpmsc = document.querySelector(".dpmsc");
    const viewerContainers = dpmsc.querySelectorAll(".viewer-container");
    /*  */
    viewerContainers.forEach(container => {
      const frag = document.createDocumentFragment();
      const numberList = container.querySelector(".number-list");
      const code = container.querySelector(".code");
      const codeText = code.textContent;
      const lineCount = codeText.split("\n");
      for (let i = 0; i < lineCount.length; i++) {
        const numberItem = document.createElement("li");
        numberItem.setAttribute("class", "number-item");
        numberItem.textContent = (i + 1).toString();
        frag.append(numberItem);
      }
      numberList.append(frag);
    });
  }
  /* -------------------------------------------------- */
  /* static replaceCodeColor() {
    const dpmscViewerCode = document.querySelectorAll(".dpmsc-viewer-code");
    const textData = DpmscConfig.textData;
    const findData = DpmscConfig.findData;
    const replaceData = DpmscConfig.replaceData;
    /*  */
    /* const splitText = DpmscConfig.findData.splitText; 
    for (let vci = 0; vci < dpmscViewerCode.length; vci++) {
      const getText = dpmscViewerCode[vci].innerHTML;
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
      dpmscViewerCode[vci].innerHTML = parts.join("");
    }
  } */
  static viewerCodeReplaceColor() {
    const dpmsc = document.querySelector(".dpmsc");
    const codes = dpmsc.querySelectorAll(".viewer-container .code");
    /*  */
    const textData = DpmscConfig.textData;
    const findData = DpmscConfig.findData;
    const replaceData = DpmscConfig.replaceData;
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
          parts[pi] = parts[pi].replace(findData.systemFunction, replaceData.yellow);
          parts[pi] = parts[pi].replace(findData.stdioFunction, replaceData.blue);
          parts[pi] = parts[pi].replace(findData.number, replaceData.number);
        }
      }
      codes[i].innerHTML = parts.join("");
    }
  }
}
/* ================================================== */
class DpmscConfig {
  static textData = DpmscConfigData.textData;
  static findData = DpmscConfigData.findData;
  static replaceData = DpmscConfigData.replaceData;
  /* -------------------------------------------------- */
  /* static replaceCodeColor() {
    DpmscConfigManager.replaceCodeColor();
  } */
  /* static lineItemGenerate() {
    DpmscConfigManager.lineItemGenerate();
  } */
  static viewerCodeReplaceColor() {
    DpmscConfigManager.viewerCodeReplaceColor();
  }
  static viewerNumberItemCreate() {
    DpmscConfigManager.viewerNumberItemCreate();
  }
}
/* ================================================== */
export { DpmscConfig };
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */