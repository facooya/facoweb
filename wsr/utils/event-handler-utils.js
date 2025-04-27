/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  transformDni,
  transformSni,
  autoInactiveTabletDnc
} from "../local/event-handler-local.js";

/* ===== DNI ===== */
/* ----- Mobile ----- */
function enabledDni() {
  transformDni();
  const DEV_NAV_CMP = document.getElementById("dev-nav-cmp");
  if (!isEnabledDni) { /* Enabling */
    DEV_NAV_CMP.style.left = "0%";
    isEnabledDni = 1;
  } else { /* Disabling */
    DEV_NAV_CMP.style.left = "-80%"; //css -width
    isEnabledDni = 0;
  }
}
/* ===== SNI ===== */
function enabledSni() {
  transformSni();
  const SUB_NAV_CMP = document.getElementById("sub-nav-cmp");
  if (!isEnabledSni) { /* Enabling */
    SUB_NAV_CMP.style.right = "0%";
    isEnabledSni = 1;
  } else { /* Disabling */
    if (activeMode == 1) {
      SUB_NAV_CMP.style.right = "-80%"; //css -width
    } else {
      SUB_NAV_CMP.style.right = "-25rem"; //css -width
    }
    isEnabledSni = 0;
  }
}
/* ===== DNC ===== */
/* ----- Mobile ----- */
function activeItemMobileDnc(event) {
  const ect = event.currentTarget;
  const DNC_SUB_CONTAINER = document.getElementsByClassName("dnc-sub-container");
  if (!ect.isActive) { /* Activating */
    const dncSubItem = ect.querySelectorAll(".dnc-sub-item");
    const heightResult = 4.125 * (dncSubItem.length) -0.125;
    DNC_SUB_CONTAINER[ect.index].style.height = heightResult + "rem";
    ect.isActive = 1;
  } else { /* Inactivating */
    DNC_SUB_CONTAINER[ect.index].style.height = "0rem";
    ect.isActive = 0;
  }
}
/* ----- Tablet ----- */
function activeItemTabletDnc(event) {
  const ect = event.currentTarget;
  const DNC_CONTAINER = document.getElementsByClassName("dnc-container");
  const DNC_SUB_CONTAINER = document.getElementsByClassName("dnc-sub-container");
  autoInactiveTabletDnc(ect, DNC_CONTAINER, DNC_SUB_CONTAINER);

  if (!ect.isActive) { /* Activating */
    const dncSubItem = ect.querySelectorAll(".dnc-sub-item");
    const heightResult = 4 * dncSubItem.length;
    DNC_SUB_CONTAINER[ect.index].style.width = "18rem";
    DNC_SUB_CONTAINER[ect.index].style.height = heightResult + "rem";
    /* Overflow Shield */
    if (ect.index == 0) {
      DNC_SUB_CONTAINER[ect.index].style.left = "0%";
    } else if (ect.index == 4) {
      DNC_SUB_CONTAINER[ect.index].style.right = "0%";
    }
    ect.isActive = 1;
  } else { /* Inactivating */
    DNC_SUB_CONTAINER[ect.index].style.width = "10rem";
    DNC_SUB_CONTAINER[ect.index].style.height = "0rem";
    ect.isActive = 0;
  }
}
/* ----- Desktop ----- */
function activeItemDesktopDnc(event) {
  const ect = event.currentTarget;
  const DNC_SUB_CONTAINER = document.getElementsByClassName("dnc-sub-container");
  const dncSubItem = ect.querySelectorAll(".dnc-sub-item");
  const heightResult = 4 * dncSubItem.length;
  DNC_SUB_CONTAINER[ect.index].style.width = "18rem";
  DNC_SUB_CONTAINER[ect.index].style.height = heightResult + "rem";
}
function inactiveItemDesktopDnc(event) {
  const ect = event.currentTarget;
  const DNC_SUB_CONTAINER = document.getElementsByClassName("dnc-sub-container");
  DNC_SUB_CONTAINER[ect.index].style.width = "10rem";
  DNC_SUB_CONTAINER[ect.index].style.height = "0rem";
}
/* ===== SNC ===== */
function activeItemSnc(event) {
  const ect = event.currentTarget;
  const SNC_SUB_CONTAINER = document.getElementsByClassName("snc-sub-container");
  if (!ect.isActive) { /* Activating */
    const sncSubItem = ect.querySelectorAll(".snc-sub-item");
    const heightResult = 4.125 * (sncSubItem.length) -0.125;
    SNC_SUB_CONTAINER[ect.index].style.height = heightResult + "rem";
    ect.isActive = 1;
  } else { /* Inactivating */
    SNC_SUB_CONTAINER[ect.index].style.height = "0rem";
    ect.isActive = 0;
  }
}
/* ===== Progress ===== */
function progressHandler() {
  const SECTION_CONTAINER = document.getElementById("section-container");
  const overflowHeight = SECTION_CONTAINER.scrollHeight - SECTION_CONTAINER.clientHeight;
  const scrollProgress = (SECTION_CONTAINER.scrollTop / overflowHeight) * 100;

  const LPB = document.getElementById("lpb");
  const RPB = document.getElementById("rpb");
  LPB.style.height = Math.round(scrollProgress) + "%";
  RPB.style.height = Math.round(scrollProgress) + "%";
}

export {
  enabledDni,
  enabledSni,
  activeItemMobileDnc,
  activeItemTabletDnc,
  activeItemDesktopDnc,
  inactiveItemDesktopDnc,
  activeItemSnc,
  progressHandler
};
/* DESCRIPTION
 * e.g., progressHandler();
 * scrollHeight = 500(px); clientHeight = 100(px);
 * overflowHeight = [scrollHeight]500(px) - [clientHeight]100(px) -> 400(px);
 * scrollTop = [Min]0 ~ [Max][overflowHeight]400(px) ->
 *   [Max]400 / 2(50%) -> [currentScrollTop]200(px);
 * scrollProgress = ([currentScrollTop]200(px) / [overflowHeight]400(px)) ->
 *   0.5 * 100 -> 50(%);
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */
