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
function transformTpcDniZettaLine() {
  const dniZettaLine = document.querySelectorAll(".tpc-dni-y .tpc-dni-z-line");
  if (!isEnabledDni) { /* Active FIXME: dniY.isActive */
    dniZettaLine[0].style.top = "0.875rem";
    dniZettaLine[0].style.transform = "rotate(45deg)";
    dniZettaLine[1].style.opacity = "0";
    dniZettaLine[1].style.left = "-100%";
    dniZettaLine[2].style.top = "0.875rem";
    dniZettaLine[2].style.transform = "rotate(-45deg)";
  } else { /* Deactive */
    dniZettaLine[0].style.top = "0rem";
    dniZettaLine[0].style.transform = "rotate(0deg)";
    dniZettaLine[1].style.opacity = "1";
    dniZettaLine[1].style.left = "0%";
    dniZettaLine[2].style.top = "1.75rem";
    dniZettaLine[2].style.transform = "rotate(0deg)";
  }
}
function transformSni() { /* !!! v1.1.12 [tmp] setTransformTpcSniZettaLine() */
  const sniZettaLine = document.querySelectorAll(".tpc-sni-z-line");
  if (!isEnabledSni) {
    sniZettaLine[1].style.transform = "translate(0.375rem, 0.375rem) rotate(45deg) scale(0.8, 2)";
    sniZettaLine[3].style.transform = "translate(0.375rem, -0.375rem) rotate(45deg) scale(2, 0.8)";
    sniZettaLine[5].style.transform = "translate(-0.375rem, 0.375rem) rotate(45deg) scale(2, 0.8)";
    sniZettaLine[7].style.transform = "translate(-0.375rem, -0.375rem) rotate(45deg) scale(0.8, 2)";

    sniZettaLine[0].style.transform = "rotate(45deg) scale(1, 0.8)";
    sniZettaLine[2].style.transform = "rotate(45deg) scale(0.8, 1)";
    sniZettaLine[6].style.transform = "rotate(45deg) scale(0.8, 1)";
    sniZettaLine[8].style.transform = "rotate(45deg) scale(1, 0.8)";

    sniZettaLine[0].style.borderRadius = "0.25rem 0.1rem 0.1rem 0.25rem";
    sniZettaLine[2].style.borderRadius = "0.25rem 0.25rem 0.1rem 0.1rem";
    sniZettaLine[6].style.borderRadius = "0.1rem 0.1rem 0.25rem 0.25rem";
    sniZettaLine[8].style.borderRadius = "0.1rem 0.25rem 0.25rem 0.1rem";

    sniZettaLine[4].style.transform = "rotate(45deg) scale(0.8)";
  } else {
    for (let i = 0; i < sniZettaLine.length; i++) {
      sniZettaLine[i].style.transform = "";
      sniZettaLine[i].style.borderRadius = "";
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
  transformDni,
  transformTpcDniZettaLine,
  transformSni,
  //initialIndexDncE,
  autoInitTabletDncE,
  calcGridTemplateData
};
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */
