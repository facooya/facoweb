/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
function tpncGc() {
  const tpncR = document.querySelector(".tpnc-r");
  /* Element: tpnc-y */
  let dataYS = "tpnc-y";
  const yotta = _genElem("ul", dataYS);
  /* Element: tpnc-y-Bpt */
  dataYS = "tpnc-y-bept";
  const yottaBept = _genElem("div", dataYS);
  /* Element: tpnc-z-fli */
  dataYS = "tpnc-z-fli";
  const zettaFli = _genElem("li", dataYS);
  /* Element: tpnc-z-fli-link */
  dataYS = "tpnc-z-fli-link"
  const zettaFliLink = _genElem("a", dataYS);
  let dataZS = "/";
  zettaFliLink.setAttribute("href", dataZS);
  dataZS = "Facooya";
  zettaFliLink.textContent = dataZS;
  /* Element: tpnc-z-dni */
  dataYS = "tpnc-z-dni";
  const zettaDni = _genElem("li", dataYS);
  /* Element: tpnc-z-dni-ir */
  let dataES = 3;
  for (let i = 0; i < dataES; i++) {
    dataYS = "tpnc-z-dni-ir";
    const zettaDniIr = _genElem("span", dataYS);
    /* Compile: tpnc-z-dni-ir */
    zettaDni.appendChild(zettaDniIr);
  }
  /* Element: tpnc-z-sni */
  dataYS = "tpnc-z-sni";
  const zettaSni = _genElem("li", dataYS);
  /* Element: tpnc-z-sni-ir */
  dataES = 9;
  for (let i = 0; i < dataES; i++) {
    dataYS = "tpnc-z-sni-ir";
    const zettaSniIr = _genElem("span", dataYS);
    /* Compile: tpnc-z-sni-ir */
    zettaSni.appendChild(zettaSniIr);
  }
  /* Compile: */
  zettaFli.appendChild(zettaFliLink);
  yotta.appendChild(zettaFli);
  yotta.appendChild(zettaDni);
  yotta.appendChild(zettaSni);
  tpncR.appendChild(yotta);
  tpncR.appendChild(yottaBept);
  /* debugf(0, "rc/nc/tpnc/tpnc-gc.js", "tpncGc()", "Done"); */
}
/* !!! _genElemSetClass() v1.1.11a [pro] */
function _genElem(elemType, setClass) {
  const elem = document.createElement(elemType);
  elem.setAttribute("class", setClass);
  return elem;
}
tpncGc();
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */