/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* ================================================== */
class DpmscConfigManager {
  static viewerLineNumberItemCreate() {
    const dpmsc = document.querySelector(".dpmsc");
    const viewersMain = dpmsc.querySelectorAll(".viewer-main");
    /*  */
    viewersMain.forEach(main => {
      const frag = document.createDocumentFragment();
      const lineNumberList = main.querySelector(".line-number-list");
      const viewerCode = main.querySelector(".viewer-code");
      const codeText = viewerCode.textContent;
      const codeParts = codeText.split("\n");
      for (let i = 0; i < codeParts.length; i++) {
        const lineNumberItem = document.createElement("li");
        lineNumberItem.setAttribute("class", "line-number-item");
        lineNumberItem.textContent = (i + 1).toString();
        frag.append(lineNumberItem);
      }
      lineNumberList.append(frag);
    });
  }
}
/* ================================================== */
class DpmscConfig {
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