/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* function transformDni() { !!! v1.1.13a [del] (replaced)
  const dniZettaLine = document.getElementsByClassName("tpc-dni-z-line");
  if (!isEnabledDni) { /* Enableling 
    dniZettaLine[0].style.top = "0.875rem";
    dniZettaLine[0].style.transform = "rotate(45deg)";
    dniZettaLine[1].style.opacity = "0";
    dniZettaLine[1].style.left = "-100%";
    dniZettaLine[2].style.top = "0.875rem";
    dniZettaLine[2].style.transform = "rotate(-45deg)";
  } else { /* Disableling 
    dniZettaLine[0].style.top = "0rem";
    dniZettaLine[0].style.transform = "rotate(0deg)";
    dniZettaLine[1].style.opacity = "1";
    dniZettaLine[1].style.left = "0%";
    dniZettaLine[2].style.top = "1.75rem";
    dniZettaLine[2].style.transform = "rotate(0deg)";
  }
} */
function setTpncZettaDniIr(isActive) {
  const dniIr = document.querySelectorAll(".tpnc-z-dni .tpnc-z-dni-ir");
  if (isActive) { /* Active FIXME: dniY.isActive */
    /* !!! v1.1.13a [del] (replaced)
    dniIr[0].style.top = "0.875rem";
    dniIr[0].style.transform = "rotate(45deg)";
    dniIr[1].style.opacity = "0";
    dniIr[1].style.left = "-100%";
    dniIr[2].style.top = "0.875rem";
    dniIr[2].style.transform = "rotate(-45deg)"; */
    /* gap 0.475rem 0.35rem */
    dniIr[0].style.transform = "translate(0rem, 0.825rem) rotate(45deg) scale(1.3, 1)";
    dniIr[1].style.transform = "translate(-2rem, 0rem)";
    dniIr[2].style.transform = "translate(0rem, -0.825rem) rotate(-45deg) scale(1.3, 1)";

    dniIr[1].style.opacity = "0";
  } else { /* Deactive */
    /* dniIr[0].style.top = "0rem";
    dniIr[0].style.transform = "rotate(0deg)";
    dniIr[1].style.opacity = "1";
    dniIr[1].style.left = "0%";
    dniIr[2].style.top = "1.75rem";
    dniIr[2].style.transform = "rotate(0deg)"; */
    dniIr[0].style.transform = "";
    dniIr[1].style.transform = "";
    dniIr[2].style.transform = "";

    dniIr[1].style.opacity = "";
  }
}
function setTpncZettaSniIr(isActive) {
  /* gap 0.25rem 0.5rem */
  const sniIr = document.querySelectorAll(".tpnc-z-sni .tpnc-z-sni-ir");
  if (isActive) {
    sniIr[1].style.transform = "translate(0.375rem, 0.375rem) rotate(45deg) scale(0.7, 1.8)";
    sniIr[3].style.transform = "translate(0.375rem, -0.375rem) rotate(45deg) scale(1.8, 0.7)";
    sniIr[5].style.transform = "translate(-0.375rem, 0.375rem) rotate(45deg) scale(1.8, 0.7)";
    sniIr[7].style.transform = "translate(-0.375rem, -0.375rem) rotate(45deg) scale(0.7, 1.8)";

    sniIr[0].style.transform = "rotate(45deg) scale(1, 0.7)";
    sniIr[2].style.transform = "rotate(45deg) scale(0.7, 1)";
    sniIr[6].style.transform = "rotate(45deg) scale(0.7, 1)";
    sniIr[8].style.transform = "rotate(45deg) scale(1, 0.7)";

    /* !!! v1.1.13a [del] (not-use)
    sniIr[0].style.borderRadius = "0.25rem 0.1rem 0.1rem 0.25rem";
    sniIr[2].style.borderRadius = "0.25rem 0.25rem 0.1rem 0.1rem";
    sniIr[6].style.borderRadius = "0.1rem 0.1rem 0.25rem 0.25rem";
    sniIr[8].style.borderRadius = "0.1rem 0.25rem 0.25rem 0.1rem"; */

    sniIr[4].style.transform = "rotate(45deg) scale(0.7)";
  } else {
    for (let i = 0; i < sniIr.length; i++) {
      sniIr[i].style.transform = "";
    }
  }
  
}
function autoInitTabletDncE(dncY, dncE, index) { /* FIXME: resetTabletDncE */
  for (let i = 0; i < dncY.length; i++) {
    if (dncY[i].isActive && index !== i) {
      const dncPetaTitleEB = dncE[i].querySelectorAll(".dnc-p-title");
      const dncZettaTitleZB = dncY[i].querySelector(".dnc-z-title");
      const dncZettaBottomLineZB = dncY[i].querySelector(".dnc-z-bottom-line");
      dncE[i].style.gridTemplateRows = calcGridTemplateData(dncPetaTitleEB, 0);
      dncE[i].style.width = "";
      for (let j = 0; j < dncPetaTitleEB.length; j++) {
        dncPetaTitleEB[j].style.opacity = "";
      }
      dncZettaTitleZB.style.fontWeight = "";
      dncZettaBottomLineZB.style.left = "";
      dncZettaBottomLineZB.style.width = "";
      dncY[i].isActive = false;
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
  setTpncZettaDniIr,
  setTpncZettaSniIr,
  autoInitTabletDncE,
  calcGridTemplateData
};
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */
