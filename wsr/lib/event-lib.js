/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  onEventDniSni,
  onEventDnc,
  onEventSnc,
  onEventProgress
} from "../../wsr/utils/event-utils.js";

function setupEventResize() {
  /* Element */
  const dncR = document.querySelector(".dnc-r");
  /* const sncR = document.querySelector(".snc-root"); */
  const sncR = document.querySelector(".snc-r");
  const sectionR = document.querySelector(".section-r");

  const dncY = document.querySelectorAll(".dnc-y");
  const dncE = document.querySelectorAll(".dnc-e");
  const sncY = document.querySelectorAll(".snc-y");
  const sncE = document.querySelectorAll(".snc-e");
  /* Init */
  isEnabledDni = 0;
  isEnabledSni = 0;
  /* Init CSS */
  dncR.style.cssText = "";
  sncR.style.cssText = "";
  sectionR.style.cssText = "";
  for (let i = 0; i < dncY.length; i++) {
    dncY[i].style.cssText = "";
    dncE[i].style.cssText = "";

    const dncZettaZB = dncY[i].querySelector(".dnc-z");
    const dncZettaTitleZB = dncY[i].querySelector(".dnc-z-title");
    const dncZettaRightIconZB = dncY[i].querySelector(".dnc-z-right-icon");
    const dncZettaBottomLineZB = dncY[i].querySelector(".dnc-z-bottom-line");
    dncZettaZB.style.cssText = "";
    dncZettaTitleZB.style.cssText = "";
    dncZettaRightIconZB.style.cssText = "";
    dncZettaBottomLineZB.style.cssText = "";

    const dncPetaEB = dncE[i].querySelectorAll(".dnc-p");
    const dncPetaTitleEB = dncE[i].querySelectorAll(".dnc-p-title");
    const dncPetaRightIconEB = dncE[i].querySelectorAll(".dnc-p-right-icon");
    const dncPetaBottomLineEB = dncE[i].querySelectorAll(".dnc-p-bottom-line");
    for (let j = 0; j < dncPetaEB.length; j++) {
      dncPetaEB[j].style.cssText = "";
      dncPetaTitleEB[j].style.cssText = "";
      dncPetaRightIconEB[j].style.cssText = "";
      dncPetaBottomLineEB[j].style.cssText = "";
    }
  }
  for (let i = 0; i < sncY.length; i++) {
    sncY[i].style.cssText = "";
    sncE[i].style.cssText = "";

    const sncZettaZB = sncY[i].querySelector(".snc-z");
    const sncZettaTitleZB = sncY[i].querySelector(".snc-z-title");
    const sncZettaRightIconZB = sncY[i].querySelector(".snc-z-right-icon");
    const sncZettaBottomLineZB = sncY[i].querySelector(".snc-z-bottom-line");
    sncZettaZB.style.cssText = "";
    sncZettaTitleZB.style.cssText = "";
    sncZettaRightIconZB.style.cssText = "";
    sncZettaBottomLineZB.style.cssText = "";

    const sncPetaEB = sncE[i].querySelectorAll(".snc-p");
    const sncPetaTitleEB = sncE[i].querySelectorAll(".snc-p-title");
    const sncPetaRightIconEB = sncE[i].querySelectorAll(".snc-p-right-icon");
    const sncPetaBottomLineEB = sncE[i].querySelectorAll(".snc-p-bottom-line");
    for (let j = 0; j < sncPetaEB.length; j++) {
      sncPetaEB[j].style.cssText = "";
      sncPetaTitleEB[j].style.cssText = "";
      sncPetaRightIconEB[j].style.cssText = "";
      sncPetaBottomLineEB[j].style.cssText = "";
    }
  }
  /* TPC */
  const tpcDniZettaLine = document.getElementsByClassName("tpc-dni-z-line");
  const tpcSniZettaLine = document.getElementsByClassName("tpc-sni-z-line");
  for (let i = 0; i < tpcDniZettaLine.length; i++) {
    tpcDniZettaLine[i].style.cssText = "";
  }
  for (let i = 0; i < tpcSniZettaLine.length; i++) {
    tpcSniZettaLine[i].style.cssText = "";
  }

  /* onEvent: event-utils */
  //onEventDnc(0, DNC_CONTAINER);
  onEventDnc(0, dncY);
  onEventSnc(0, sncY);

  logf(0, "wsr/lib/event-lib.js", "setupEventResize", "Done");
  logf(0, "==========", "==========", "Event Resize Done");
}

function setupEventLoad() {
  /* Element */
  const dncR = document.querySelector(".dnc-r");
  const dncY = dncR.querySelectorAll(".dnc-y");
  const sncR = document.querySelector(".snc-r");
  const sncY = sncR.querySelectorAll(".snc-y");

  /* Initial */
  isEnabledDni = 0;
  isEnabledSni = 0;
  for (let i = 0; i < dncY.length; i++) {
    dncY[i].index = i;
    dncY[i].isActive = 0;
  }
  for (let i = 0; i < sncY.length; i++) {
    sncY[i].index = i;
    sncY[i].isActive = 0;
  }
  /* onEvent: event-utils */
  onEventDniSni();
  onEventDnc(1, dncY);
  onEventSnc(1, sncY);

  onEventProgress();

  logf(0, "wsr/lib/event-lib.js", "setupEventLoad", "Done");
  logf(0, "==========", "==========", "Event Load Done");
}
/* Export: /wsr/lib/web-lib.js */
export {
  setupEventResize,
  setupEventLoad
};
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */
