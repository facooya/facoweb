/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
class NplcController {
  static process() {
    NplcManager.setupProcess();
    NplcManager.addEvent();
  }
}
class NplcManager {
  static setupProcess() {
    /* NPTLC */
    const nptlcR = document.querySelector(".nptlc-r-liptp");
    const nptlcExaTno = nptlcR.querySelectorAll(".nptlc-e-tno");
    /* Set Index */
    for (let i = 0; i < nptlcExaTno.length; i++) {
      nptlcExaTno[i].index = i;
    }
    /* Tab */
    NplcUtility.verifyTab();
  }
  static addEvent() {
    /* Window */
    window.addEventListener("hashchange", NplcHandler.onHashChange);
  }
}
class NplcHandler {
  static onHashChange() {
    /* Tab */
    NplcUtility.verifyTab();
  }
}
class NplcUtility {
  static verifyTab() {
    /* NPTLC */
    const nptlcR = document.querySelector(".nptlc-r-liptp");
    const nptlcExaTno = nptlcR.querySelectorAll(".nptlc-e-tno");
    /* ----- */
    if (nptlcExaTno[window.location.hash.slice(1)] === undefined) {
      /* Operation defense */
      console.log("Operation defense: Hash");
      const tabData = 0;
      const hashData = "#" + tabData.toString();
      window.location.hash = hashData;
      NplcUtility.setTab(tabData);
    } else {
      const tabData = parseInt(window.location.hash.slice(1));
      NplcUtility.setTab(tabData);
    }
  }
  static setTab(tab) {
    /* NPTLC */
    const nptlcR = document.querySelector(".nptlc-r-liptp");
    const nptlcTeraTnoTitle = nptlcR.querySelectorAll(".nptlc-t-tno-title");
    const nptlcTeraTnoSgro = nptlcR.querySelectorAll(".nptlc-t-tno-sgro");
    /* NPCLC */
    const npclcR = document.querySelector(".npclc-r-naptp");
    const npclcY = npclcR.querySelectorAll(".npclc-y");
    /* Final defense */
    if (nptlcTeraTnoTitle[tab] === undefined) {
      console.log("Final Defense");
      return;
    }
    /* Set Tab */
    for (let i = 0; i < nptlcTeraTnoTitle.length; i++) {
      if (tab === i) {
        nptlcTeraTnoTitle[i].style.color = "#000000";
        nptlcTeraTnoTitle[i].style.fontWeight = "700";
        nptlcTeraTnoSgro[i].style.borderColor = "#000000";
        npclcY[i].style.display = "grid";
      } else {
        nptlcTeraTnoTitle[i].style.color = "";
        nptlcTeraTnoTitle[i].style.fontWeight = "";
        nptlcTeraTnoSgro[i].style.borderColor = "";
        npclcY[i].style.display = "";
      }
    }
  }
}
export {
  NplcController,
  NplcManager,
  NplcHandler,
  NplcUtility
}
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */