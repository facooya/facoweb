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
    DpmscManager.event(true);
  }
  static resizeDisplay() {
    DpmscManager.resizeDisplay();
    DpmscManager.event(false);
    DpmscManager.event();
  }
}
class DpmscManager {
  static init() {

  }
  static load() {
    DpmscHandler.getText();
    DpmscHandler.getLine();
  }
  static resizeDisplay() {

  }
  static event(isActive) {
    const {
      dpmscTeraTlo
    } = DpmscConfig.getDpmscTloGroup();
    /*  */
    let displayType = BlfConfig.previousDisplayType;
    let eventListenerType = "removeEventListener";
    if (isActive) {
      displayType = BlfConfig.currentDisplayType;
      eventListenerType = "addEventListener";
    }
    /*  */
    switch (displayType) {
      case 1: {
        for (let tbi = 0; tbi < dpmscTeraTlo.length; tbi++) {
          dpmscTeraTlo[tbi][eventListenerType](
            "click",
            DpmscHandler.mdtDpmscTeraTlo
          );
        }
        break;
      }
      case 2: {
        break;
      }
      case 3: {
        break;
      }
    }
  }
}
class DpmscHandler {
  static mdtDpmscTeraTlo(eventData) {
    const {
      eventCurrentTarget
    } = BlfUtil.getEventData(eventData);
    /*  */
    const hash = eventCurrentTarget.hash;
    const hashElement = document.querySelector(hash);
    history.replaceState(null, null, hash);
    hashElement.scrollIntoView();
  }
  static getText() {
    /* const {
      dpmscZ
    } = DpmscConfig.getDpmscZbGroup();
    const {
      dpmscGigaText
    } = DpmscConfig.getDpmscPbGroup(2); */
    const dpmscViewerCode = document.querySelectorAll(".dpmsc-viewer-code");
    let getText = dpmscViewerCode[0].innerHTML;
    /*  */
    let regExp = /(".*?(?<!\\)"|\/\*[\s\S]*?\*\/|'.*?')/;
    /* getText = getText.replace(regExp, "<span class='green'>$&</span>");
    regExp = /(\/\*[\s\S]*?\*\/)/g;
    getText = getText.replace(regExp, "<span class='comment'>$&</span>"); */
    let part = getText.split(regExp);
    for (let i = 0; i < part.length; i++) {
      if (part[i][0] === "\"") {
        /* getText = getText.replace(part[i], "<span class='green'>$&</span>"); */
        /* for (let j = 0; j < part[i].length; j++) {
          console.log(part[i][j]);
          if (part[i][j] == "\\") {
            part[i][j].replace(part[i][j], "<span class='green-bold'>$&</span>");
          }
        } */
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
    /* part.join(""); */
    /* part.join(""); */
    /*  */
    /* regExp = /\bint\b/g;
    let setTag = getText.replace(regExp, "<span class='orange'>$&</span>");

    regExp = /\bprintf\b/g;
    setTag = setTag.replace(regExp, "<span class='blue'>$&</span>")
    dpmscGigaText[0].innerHTML = setTag; */
    dpmscViewerCode[0].innerHTML = part.join("");
  }
  static getLine() {
    /* const {
      dpmscGigaText
    } = DpmscConfig.getDpmscPbGroup(2); */
    const dpmscLineList = document.querySelectorAll(".dpmsc-line-list");
    const dpmscViewerCode = document.querySelectorAll(".dpmsc-viewer-code");
    let getText = dpmscViewerCode[0].textContent;
    const parts = getText.split("\n");
    for (let i = 0; i < parts.length; i++) {
      const dpmscLineItem = document.createElement("li");
      const dpmscLineNumber = document.createElement("span");
      dpmscLineItem.setAttribute("class", "dpmsc-line-item");
      dpmscLineNumber.setAttribute("class", "dpmsc-line-number");
      dpmscLineNumber.textContent = (i + 1).toString();
      dpmscLineItem.append(dpmscLineNumber);
      dpmscLineList[0].append(dpmscLineItem);
    }
  }
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