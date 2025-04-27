/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
function transformDni() {
  const dniZettaLine = document.getElementsByClassName("tpc-dni-z-line");
  if (!isEnabledDni) { /* Enableling */
    dniZettaLine[0].style.top = "0.875rem";
    dniZettaLine[0].style.transform = "rotate(45deg)";
    dniZettaLine[1].style.opacity = "0";
    dniZettaLine[1].style.left = "-100%";
    dniZettaLine[2].style.top = "0.875rem";
    dniZettaLine[2].style.transform = "rotate(-45deg)";
  } else { /* Disableling */
    dniZettaLine[0].style.top = "0rem";
    dniZettaLine[0].style.transform = "rotate(0deg)";
    dniZettaLine[1].style.opacity = "1";
    dniZettaLine[1].style.left = "0%";
    dniZettaLine[2].style.top = "1.75rem";
    dniZettaLine[2].style.transform = "rotate(0deg)";
  }
}
function transformSni() {
  const sniZettaLine = document.getElementsByClassName("tpc-sni-z-line");
  if (!isEnabledSni) { /* Enableling */
    sniZettaLine[0].style.top = "0.875rem";
    sniZettaLine[0].style.transform = "rotate(45deg)";
    sniZettaLine[1].style.opacity = "0";
    sniZettaLine[1].style.right = "-100%";
    sniZettaLine[2].style.top = "0.875rem";
    sniZettaLine[2].style.transform = "rotate(-45deg)";
  } else { /* Disableling */
    sniZettaLine[0].style.top = "0rem";
    sniZettaLine[0].style.transform = "rotate(0deg)";
    sniZettaLine[1].style.opacity = "1";
    sniZettaLine[1].style.right = "0%";
    sniZettaLine[2].style.top = "1.75rem";
    sniZettaLine[2].style.transform = "rotate(0deg)";
  }
}
/*function autoInactiveTabletDnc(ect, dncContainer, dncSubContainer) { !!!! DELETE v1.1.11a
  for (let i = 0; i < dncContainer.length; i++) {
    if (dncContainer[i].isActive == 1 && ect.index != i) {
      dncSubContainer[i].style.width = "10rem";
      dncSubContainer[i].style.height = "0rem";
      dncContainer[i].isActive = 0;
    }
  }
}*/
function initialIndexDncE(eIndex) {
  const dncY = document.getElementsByClassName("dnc-y");
  const dncE = document.getElementsByClassName("dnc-e");
  for (let i = 0; i < dncY.length; i++) {
    if (dncY[i].isActive == 1 && eIndex != i) {
      const dncPetaES = dncE[i].getElementsByClassName("dnc-p");
      dncE[i].style.gridTemplateRows = calcGridTemplateData(dncPetaES, 0);
      dncE[i].style.width = "10rem";
      dncY[i].isActive = 0;
    }
  }
}
function calcGridTemplateData(elem, size) {
  let gridTemplateData = "";
  for (let i = 0; i < elem.length; i++) {
    gridTemplateData += size + "rem" + " ";
  }
  return gridTemplateData;
}

export {
  transformDni,
  transformSni,
  initialIndexDncE,
  calcGridTemplateData
};
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */
