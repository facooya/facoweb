/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
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
  /* Debugging */
  logf(0, "wsr/utils/gen-utils.js", "genTpcFli", "Done");
}
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
  /* Debugging */
  logf(0, "wsr/utils/gen-utils.js", "genTpcDni", "Done"); /* !!! v1.1.11a [pro] */
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
  for (let i = 0; i < 9; i++) {
    selectorValue = "tpc-sni-z-line";
    const sniZettaLine = _genElem("span", selectorValue);
    /* Compile: sniZ */
    sniZ.appendChild(sniZettaLine);
  }
  /* Compile: sniY, tpcRoot */
  sniY.appendChild(sniZ);
  tpcRoot.appendChild(sniY);
  /* Debugging */
  logf(0, "wsr/utils/gen-utils.js", "genTpcSni", "Done"); /* !!! v1.1.11a [pro] */
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
    /* Element: label-z-right-icon !!! v1.1.11a [pro] */
    selectorValue = label + "-z-right-icon";
    const zettaRightIcon = _genElem("div", selectorValue);
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
    zetta.appendChild(zettaRightIcon); /* !!! v1.1.11a [pro] */
    zetta.appendChild(zettaBottomLine);
    yotta.appendChild(zetta);
    yotta.appendChild(exa);
    labelRoot.appendChild(yotta);
  }
  /* Debugging */
  logf(0, "wsr/utils/gen-utils.js", "genNav:" + label, "Done"); /* !!! v1.1.11a [pro] */
}
/* !!! _genElemSetClass() v1.1.11a [pro] */
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
