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
  const dncRoot = document.querySelector(".dnc-root");
  const sncRoot = document.querySelector(".snc-root");

  //const SUB_NAV_CMP = document.getElementById("sub-nav-cmp");
  //const DNC_SUB_CONTAINER = document.getElementsByClassName("dnc-sub-container");
  //const SNC_SUB_CONTAINER = document.getElementsByClassName("snc-sub-container");
  //const DNC_CONTAINER = document.getElementsByClassName("dnc-container");
  //const SNC_CONTAINER = document.getElementsByClassName("snc-container");
  const dncY = document.getElementsByClassName("dnc-y");
  const dncE = document.getElementsByClassName("dnc-e");
  const sncY = document.getElementsByClassName("snc-y");
  const sncE = document.getElementsByClassName("snc-e");
  /* Initial */
  isEnabledDni = 0;
  isEnabledSni = 0;
  /* Initial Css */
  //DEV_NAV_CMP.style.cssText = "";
  //SUB_NAV_CMP.style.cssText = "";
  dncRoot.style.cssText = "";
  sncRoot.style.cssText = "";
  /*for (let i = 0; i < DNC_CONTAINER.length; i++) {
    DNC_CONTAINER[i].style.cssText = "";
    DNC_SUB_CONTAINER[i].style.cssText = "";
  }
  for (let i = 0; i < SNC_CONTAINER.length; i++) {
    SNC_CONTAINER[i].style.cssText = "";
    SNC_SUB_CONTAINER[i].style.cssText = "";
  }*/
  for (let i = 0; i < dncY.length; i++) {
    dncY[i].style.cssText = "";
    dncE[i].style.cssText = "";
  }
  for (let i = 0; i < sncY.length; i++) {
    sncY[i].style.cssText = "";
    sncE[i].style.cssText = "";
  }
  /* TBC */
  /*const _TBC_DNI_SG = document.getElementsByClassName("tbc-dni-sg");
  const _TBC_SNI_SG = document.getElementsByClassName("tbc-sni-sg");
  for (let i = 0; i < _TBC_DNI_SG.length; i++) {
    _TBC_DNI_SG[i].style.cssText = "";
  }
  for (let i = 0; i < _TBC_SNI_SG.length; i++) {
    _TBC_SNI_SG[i].style.cssText = "";
  }*/
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

  logf(0, "wsr/lib/event-lib.js", "setupEventResize", "Done");
  logf(0, "==========", "==========", "Event Resize Done");
}

function setupEventLoad() {
  /* Element */
  const dncRoot = document.querySelector(".dnc-root");
  const dncY = dncRoot.getElementsByClassName("dnc-y");
  const sncRoot = document.querySelector(".snc-root");
  const sncY = sncRoot.getElementsByClassName("snc-y");

  //const DNC_CONTAINER = document.getElementsByClassName("dnc-container");
  //const SNC_CONTAINER = document.getElementsByClassName("snc-container");
  /* Initial */
  isEnabledDni = 0;
  isEnabledSni = 0;
  /*for (let i = 0; i < DNC_CONTAINER.length; i++) {
    DNC_CONTAINER[i].index = i;
    DNC_CONTAINER[i].isActive = 0;
  }*/
  for (let i = 0; i < dncY.length; i++) {
    dncY[i].index = i;
    dncY[i].isActive = 0;
  }
  for (let i = 0; i < sncY.length; i++) {
    sncY[i].index = i;
    sncY[i].isActive = 0;
  }
  /*for (let i = 0; i < SNC_CONTAINER.length; i++) {
    SNC_CONTAINER[i].index = i;
    SNC_CONTAINER[i].isActive = 0;
  }*/
  /* onEvent: event-utils */
  onEventDniSni();
  //onEventDnc(1, DNC_CONTAINER);
  onEventDnc(1, dncY);
  //onEventSnc(SNC_CONTAINER);
  onEventSnc(sncY);

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
