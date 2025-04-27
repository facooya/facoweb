/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/*import {

} from "";*/
function _logf(msg) {
  logf(0, "wsr/lib/gen/tbc.js", msg, "Done");
}
/* function genTBCTLI(
  logo,
  parent
) {
   Element: tbc-logo 
  let _logo = document.createElement("div");
  _logo.setAttribute("id", "tbc-logo");
   Element: tbc-logo-link 
  let _logoLink = document.createElement("a");
  _logoLink.setAttribute("id", "tbc-logo-link");
  _logoLink.setAttribute("class", "container-link flex-center");
  _logoLink.setAttribute("href", "/");
  _logoLink.textContent = logo;
   Append 
  _logo.appendChild(_logoLink);
  parent.appendChild(_logo);
   Log 
  _logf("TLI");
} */
function genTpcFli(
  logo,
  tpcRoot
) {
  /* Element: tpc-fli-y */
  let selectorValue = "tpc-fli-y";
  const fliY = _genElem("div", selectorValue);
  /* Element: tpc-fli-y-logo */
  selectorValue = "tpc-fli-y-logo";
  selectorValue += " " + "facooya-link-class";
  selectorValue += " " + "facooya-center-class";
  const fliYottaLogo = _genElem("a", selectorValue);
  fliYottaLogo.setAttribute("href", "/");
  fliYottaLogo.textContent = logo;
  /* Compile: fliY, tpcRoot */
  fliY.appendChild(fliYottaLogo);
  tpcRoot.appendChild(fliY);
}
/*function genTBCDNI(
  parent
) {
   Element: tbc-dni-container 
  let _container = document.createElement("div");
  _container.setAttribute("id", "tbc-dni-container");
   Element: tbc-dni-bg 
  let _bg = document.createElement("div");
  _bg.setAttribute("id", "tbc-dni-bg");
   Element: tbc-dni-sg, _Append 
  for (let i = 0; i < 3; i ++) {
    let _sg = document.createElement("span");
    _sg.setAttribute("class", "tbc-dni-sg");
     _Append
    _bg.appendChild(_sg);
  }
   Append 
  _container.appendChild(_bg);
  parent.appendChild(_container);
   Log 
  _logf("DNI");
}*/
function genTpcDni(
  tpcRoot
) {
  /* Element: dni-y */
  let selectorValue = "tpc-dni-y";
  const dniY = _genElem("div", selectorValue);
  /* Element: dni-z */
  selectorValue = "tpc-dni-z";
  const dniZ = _genElem("div", selectorValue);
  /* Element: dni-z-line */
  for (let i = 0; i < 3; i++) {
    selectorValue = "tpc-dni-z-line";
    const dniZettaLine = _genElem("span", selectorValue);
    /* Compile: dniZ */
    dniZ.appendChild(dniZettaLine);
  }
  /* Compile: dniY, tpcRoot */
  dniY.appendChild(dniZ);
  tpcRoot.appendChild(dniY);
}
function genTBCSNI(
  parent
) { /* !!! TEMPORARY !!! */
  /* Element: tbc-sni-container */
  let _container = document.createElement("div");
  _container.setAttribute("id", "tbc-sni-container");
  /* Element: tbc-sni-bg */
  let _bg = document.createElement("div");
  _bg.setAttribute("id", "tbc-sni-bg");
  /* Element: tbc-sni-sg, _Append */
  for (let i = 0; i < 3; i ++) {
    let _sg = document.createElement("span");
    _sg.setAttribute("class", "tbc-sni-sg");
    /* _Append */
    _bg.appendChild(_sg);
  }
  /* Append */
  _container.appendChild(_bg);
  parent.appendChild(_container);
  /* Log */
  _logf("SNI");
}

function genTpcSni(
  tpcRoot
) {
  /* Element: sni-y */
  let selectorValue = "tpc-sni-y";
  const sniY = _genElem("div", selectorValue);
  /* Element: sni-z */
  selectorValue = "tpc-sni-z";
  const sniZ = _genElem("div", selectorValue);
  /* Element: sni-z-line */
  for (let i = 0; i < 3; i++) {
    selectorValue = "tpc-sni-z-line";
    const sniZettaLine = _genElem("span", selectorValue);
    /* Compile: sniZ */
    sniZ.appendChild(sniZettaLine);
  }
  /* Compile: sniY, tpcRoot */
  sniY.appendChild(sniZ);
  tpcRoot.appendChild(sniY);
}

function genNav(
  label,
  zettaTitleRS,
  petaTitleRS,
  petaHrefRS,
  labelRoot
) {
  /* Element: label-y */
  for (let i = 0; i < zettaTitleRS.length; i++) {
    let selectorValue = label + "-y";
    const yotta = _genElem("div", selectorValue);
    /* Element: label-z */
    selectorValue = label + "-z";
    const zetta = _genElem("div", selectorValue);
    /* Element: label-z-title */
    selectorValue = label + "-z-title";
    const zettaTitle = _genElem("div", selectorValue);
    zettaTitle.textContent = zettaTitleRS[i];
    /* Element: label-z-bottom-line */
    selectorValue = label + "-z-bottom-line";
    const zettaBottomLine = _genElem("div", selectorValue);
    /* - - - - - */
    /* Element: label-e */
    selectorValue = label + "-e";
    let exa = _genElem("div", selectorValue);
    /* Element: label-p */
    for (let j = 0; j < petaTitleRS[i].length; j++) {
      selectorValue = label + "-p" + " container-link";
      let peta = _genElem("a", selectorValue);
      peta.setAttribute("href", petaHrefRS[i][j]);
      /* Element: label-p-title */
      selectorValue = label + "-p-title";
      let petaTitle = _genElem("div", selectorValue);
      petaTitle.textContent = petaTitleRS[i][j];
      /* Element: label-p-right-icon */
      selectorValue = label + "-p-right-icon";
      let petaRightIcon = _genElem("div", selectorValue);
      /* Element: label-p-bottom-line */
      selectorValue = label + "-p-bottom-line";
      let petaBottomLine = _genElem("div", selectorValue);
      /* Compile: peta, exa */
      peta.appendChild(petaTitle);
      peta.appendChild(petaRightIcon);
      peta.appendChild(petaBottomLine);
      exa.appendChild(peta);
    }
    /* Compile: zetta, yotta, labelRoot */
    zetta.appendChild(zettaTitle);
    zetta.appendChild(zettaBottomLine);
    yotta.appendChild(zetta);
    yotta.appendChild(exa);
    labelRoot.appendChild(yotta);
  }
  /* Debugging */
  _logf(label);
}
function _genElem(elemType, setClass) { /* !!!! Migration gen-local.js */
  const elem = document.createElement(elemType);
  elem.setAttribute("class", setClass);
  return elem;
}

export {
  genTpcFli,
  genTpcDni,
  genTpcSni,
  genNav
};
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */
