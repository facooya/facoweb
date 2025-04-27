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
