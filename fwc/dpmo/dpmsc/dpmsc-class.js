/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  BlfUtil,
  BlfConfig,
  DpmscConfig
} from "../../fwc-hub.js";
/*  */
class DpmscAccessor {

}
class DpmscController {
  static init() {
    DpmscManager.init();
  }
  static load() {
    DpmscManager.load();
    DpmscManager.loadEvent();
  }
  static resizeDisplay() {
    DpmscManager.resizeDisplay();
    /* DpmscManager.resizeEvent(true); */
  }
}
class DpmscManager {
  static init() {

  }
  static load() {
    /* DpmscHandler.getText(); */
    DpmscConfig.replaceCodeColor();
    /* DpmscHandler.getLine(); */
    DpmscConfig.lineItemGenerate();
    DpmscHandler.lineWrapper();
  }
  static resizeDisplay() {

  }
  static loadEvent() {
    /* document.addEventListener("copy", DpmscHandler.copyEvent); */
    const dpmscTitleLink = document.querySelectorAll(".dpmsc-title-link");
    for (let tli = 0; tli < dpmscTitleLink.length; tli++) {
      dpmscTitleLink[tli].addEventListener(
        "click",
        DpmscHandler.dpmscTitleLink
      );
    }
    /* const fold = document.querySelectorAll(".fold");
    fold[0].addEventListener(
      "click",
      DpmscHandler.fold
    ); */
  }
}
class DpmscHandler {
  static dpmscTitleLink(eventData) {
    const {
      eventCurrentTarget
    } = BlfUtil.getEventData(eventData);
    /*  */
    const hash = eventCurrentTarget.hash;
    const hashElement = document.querySelector(hash);
    history.replaceState(null, null, hash);
    hashElement.scrollIntoView();
  }
  /* ===== */
  /* static getText() {
    const dpmscViewerCode = document.querySelectorAll(".dpmsc-viewer-code");
    let getText = dpmscViewerCode[0].innerHTML;
    let regExp = /(".*?(?<!\\)"|\/\*[\s\S]*?\*\/|'.*?')/;
    let part = getText.split(regExp);
    for (let i = 0; i < part.length; i++) {
      if (part[i][0] === "\"") {
        part[i] = part[i].replace(/\\./g, "<span class='green-bold'>$&</span>");
        part[i] = part[i].replace(/%./g, "<span class='green-bold'>$&</span>");
        part[i] = part[i].replace(part[i], "<span class='green'>$&</span>");
      } else if (part[i][0] === "'") {
        part[i] = part[i].replace(/\\./g, "<span class='green-bold'>$&</span>");
        part[i] = part[i].replace(part[i], "<span class='green'>$&</span>");
      } else if (part[i][0] === "/" && part[i][1] === "*") {
        part[i] = part[i].replace(part[i], "<span class='comment'>$&</span>");
      } else {
        part[i] = part[i].replace(/\b(int|float|char|return)\b/g, "<span class='orange'>$&</span>");
        part[i] = part[i].replace(/\b(if|else|switch|while|for)\b/g, "<span class='yellow'>$&</span>");
        part[i] = part[i].replace(/\bprintf\b/g, "<span class='blue'>$&</span>");
        part[i] = part[i].replace(/\b(0[xX][0-9a-fA-F]+|\d+(\.\d+f?)?)\b/g, "<span class='blue-light'>$&</span>");
      }
    }
    dpmscViewerCode[0].innerHTML = part.join("");
  }
  static getLine() {
    const fragment = document.createDocumentFragment();
    const dpmscLineList = document.querySelectorAll(".dpmsc-line-list");
    const dpmscViewerCode = document.querySelectorAll(".dpmsc-viewer-code");

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
  /* static fold() {
    const fold = document.querySelectorAll(".fold");
    if (fold[0].isFold) {
      fold[0].style.overflow = "";
      fold[0].style.height = "";
      fold[0].isFold = false;
    } else {
      fold[0].style.overflow = "hidden";
      fold[0].style.height = "1.5rem";
      fold[0].isFold = true;
    }
  } */
  static lineWrapper() {
    const dpmscViewerCode = document.querySelectorAll(".dpmsc-viewer-code");
    dpmscViewerCode[1].original = dpmscViewerCode[1].textContent;
    let innerCode = dpmscViewerCode[1].innerHTML;
    const lines = innerCode.split("\n");
    for (let li = 0; li < lines.length; li++) {
      lines[li] = lines[li].replace(lines[li], "<div class=\"line\">$&</div>");
    }
    for (let li = 0; li < lines.length; li++) {
      lines[li] = lines[li].replace(/void testFoldFunction/, "<span class=\"test-fold\">$&</span>");
      /* lines[li] = lines[li].replace("{", "{ <span class=\"skip\">...</span> }"); */
      /* if (lines[li].match("void testFoldFunction")) {
        /* lines[li].addEventListener("click", this.lineFold); 
        const foldLine = document.querySelectorAll(".line");
        console.log(foldLine);
        foldLine[li].addEventListener("click", DpmscHandler.lineFold);
        for (let i = li; i < lines.length; i++) {
          if (lines[i].match("}")) {
            console.log(li, i);
            break;
          }
        }
      } */
    }
    /* dpmscViewerCode[1].innerHTML = lines.join(""); */
    /* innerCode = lines.join(""); */
    /* if (innerCode.match("testFoldFunction")) {
      console.log("testFold");
    } */
    innerCode = lines.join("");
    dpmscViewerCode[1].innerHTML = innerCode;
    /*  */
    const foldLine = document.querySelectorAll(".line");
    for (let i = 0; i < foldLine.length; i++) {
      const text = foldLine[i].innerHTML;
      foldLine[i].index = i;
      if (text.match(/testFoldFunction\(\) \{$/g)) {
        foldLine[i].i = i;
        for (let j = foldLine[i].i; j < foldLine.length; j++) {
          const text2 = foldLine[j].innerHTML;
          if (text2.match("}")) {
            foldLine[i].j = j;
            break;
          }
        }
        foldLine[0].isFold = false;
        foldLine[i].addEventListener("click", this.lineFold);
      }
    }
    /* if (innerCode.match("void testFoldFunction")) {
      foldLine[0].addEventListener();
    } */
  }
  static lineFold() {
    const foldLine = document.querySelectorAll(".line");
    /* const dpmscViewerCode = document.querySelectorAll(".dpmsc-viewer-code"); */

    /* let getText = dpmscViewerCode[1].innerHTML;
    let parts = getText.split("");
    for (let pi = 0; pi < parts.length; pi++) {
      if (parts[pi] === "{") {
        parts.splice(pi+1, 0, "abc");
        break;
      }
    }
    parts = parts.join(""); */
    
    if (foldLine[0].isFold) {
      for (let i = 0; i < foldLine.length; i++) {
        if (foldLine[i].i) {
          for (let j = i+1; j <= foldLine[i].j; j++) {
            foldLine[j].style.display = "";
          }
          foldLine[i].innerHTML = foldLine[i].original;
        }
      }
      foldLine[0].isFold = false;
    } else {
      for (let i = 0; i < foldLine.length; i++) {
        if (foldLine[i].i) {
          for (let j = i+1; j <= foldLine[i].j; j++) {
            foldLine[j].style.display = "none";
          }
          let getText = foldLine[i].innerHTML;
          foldLine[i].original = getText;
          getText = getText.replace(/{.*/, "{ <span class=\"fold\">...</span> }");
          foldLine[i].innerHTML = getText;
          break;
        }
      }
      foldLine[0].isFold = true;
    }
    /* dpmscViewerCode[1].innerHTML = parts; */
  }

  /* static copyEvent(eventData) {
    const select = window.getSelection();
    const range = select.getRangeAt(0);
    const clone = range.cloneContents();
    const foldLine = document.querySelectorAll(".fold-line");
    const fold = clone.querySelector(".fold");
    /*  
    if (fold) {
      eventData.preventDefault();
      let text = foldLine[0];
      eventData.clipboardData.setData("text/plain", fold.original);
    }
  } */
}
/*  */
export {
  DpmscAccessor,
  DpmscController
};
/* ========================= :FACOOYA: ========================= */
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
 /* ========================= ;FACOOYA; ========================= */