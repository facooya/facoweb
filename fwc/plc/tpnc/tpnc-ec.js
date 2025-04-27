/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  handleTpncZettaDni,
  handleTpncZettaSni
} from "./tpnc-hc.js";

function tpncEc() {
  const tpncZettaDni = document.querySelector(".tpnc-r .tpnc-z-dni");
  const tpncZettaSni = document.querySelector(".tpnc-r .tpnc-z-sni");
  
  tpncZettaDni.addEventListener("click", handleTpncZettaDni);
  tpncZettaSni.addEventListener("click", handleTpncZettaSni);
}
tpncEc();
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */