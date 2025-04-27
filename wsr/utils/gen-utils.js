/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
function genTpnc(tpncR) {
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
}
/* !!! v1.1.13a [del] {genTpcFli(), genTpcDni(), genTpcSni()} (replaced) */
function genTpcFli(
  logo,
  tpcR
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
  /* Compile: fliY, tpcR */
  fliY.appendChild(fliYottaLogo);
  tpcR.appendChild(fliY);
  /* Debugging */
  logf(0, "wsr/utils/gen-utils.js", "genTpcFli", "Done");
}
function genTpcDni(
  tpcR
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
  /* Compile: dniY, tpcR */
  dniY.appendChild(dniZ);
  tpcR.appendChild(dniY);
  /* Debugging */
  logf(0, "wsr/utils/gen-utils.js", "genTpcDni", "Done"); /* !!! v1.1.11a [pro] */
}
function genTpcSni(
  tpcR
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
  /* Compile: sniY, tpcR */
  sniY.appendChild(sniZ);
  tpcR.appendChild(sniY);
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
/* !!! v1.1.13a [test] (naming) */
function genNavTest(
  label,
  zettaBptTitleRS,
  teraTitleRS,
  teraHrefRS,
  labelR
) {
  /* CodePt: ZBZS */
  /* Element: label-y-alpt */
  let selectorData = label + "-y-alpt";
  const yottaAlpt = _genElem("div", selectorData);
  /* Element: label-y */
  for (let i = 0; i < zettaBptTitleRS.length; i++) {
    selectorData = label + "-y";
    const yotta = _genElem("ul", selectorData);
    /* Element: label-z-bpt */
    selectorData = label + "-z-bpt";
    const zettaBpt = _genElem("li", selectorData);
    /* Element: label-z-bpt-title */
    selectorData = label + "-z-bpt-title";
    const zettaBptTitle = _genElem("div", selectorData);
    zettaBptTitle.textContent = zettaBptTitleRS[i];
    /* Element: label-z-bpt-rr */
    selectorData = label + "-z-bpt-rr";
    const zettaBptRr = _genElem("div", selectorData);
    /* Element: label-z-bpt-br */
    selectorData = label + "-z-bpt-br";
    const zettaBptBr = _genElem("div", selectorData);
    /* - - - - - */
    /* Element: label-z */
    selectorData = label + "-z";
    const zetta = _genElem("li", selectorData);
    /* Element: label-e */
    selectorData = label + "-e";
    const exa = _genElem("ul", selectorData);
    /* Element: label-p */
    for (let j = 0; j < teraTitleRS[i].length; j++) {
      selectorData = label + "-p";
      const peta = _genElem("li", selectorData);
      /* Element: label-t */
      selectorData = label + "-t";
      const tera = _genElem("a", selectorData);
      tera.setAttribute("href", teraHrefRS[i][j]);
      /* Element: label-t-title */
      selectorData = label + "-t-title";
      const teraTitle = _genElem("div", selectorData);
      teraTitle.textContent = teraTitleRS[i][j];
      /* Element: label-t-rr */
      selectorData = label + "-t-rr";
      const teraRr = _genElem("div", selectorData);
      /* Element: label-t-br */
      selectorData = label + "-t-br";
      const teraBr = _genElem("div", selectorData);
      /* Compile: tera, peta, exa */
      tera.appendChild(teraTitle);
      tera.appendChild(teraRr);
      tera.appendChild(teraBr);
      peta.appendChild(tera);
      exa.appendChild(peta);
    }
    /* Compile: zetta, zettaBpt, yotta, labelR */
    zetta.appendChild(exa);
    zettaBpt.appendChild(zettaBptTitle);
    zettaBpt.appendChild(zettaBptRr);
    zettaBpt.appendChild(zettaBptBr);
    yotta.appendChild(zettaBpt);
    yotta.appendChild(zetta);
    labelR.appendChild(yotta);
  }
  /* Compile: labelR */
  labelR.appendChild(yottaAlpt);
  /* Debugging */
  logf(0, "wsr/utils/gen-utils.js", "genNav:" + label, "Done");
}

export {
  genTpnc,
  /* genTpcFli, !!! v1.1.13a [del] (replaced)
  genTpcDni,
  genTpcSni, */
  genNavTest
};
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */
