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
function transformSni() {
  const sniZettaLine = document.querySelectorAll(".tpc-sni-z-line");
  /* !!! v1.1.11a [del]
  const sniZettaLine = document.getElementsByClassName("tpc-sni-z-line");
  if (!isEnabledSni) { /* Enableling 
    sniZettaLine[0].style.top = "0.875rem";
    sniZettaLine[0].style.transform = "rotate(45deg)";
    sniZettaLine[1].style.opacity = "0";
    sniZettaLine[1].style.right = "-100%";
    sniZettaLine[2].style.top = "0.875rem";
    sniZettaLine[2].style.transform = "rotate(-45deg)";
  } else { /* Disableling 
    sniZettaLine[0].style.top = "0rem";
    sniZettaLine[0].style.transform = "rotate(0deg)";
    sniZettaLine[1].style.opacity = "1";
    sniZettaLine[1].style.right = "0%";
    sniZettaLine[2].style.top = "1.75rem";
    sniZettaLine[2].style.transform = "rotate(0deg)";
  }
  /*if (!isEnabledSni) {
    sniZettaLine[1].style.transform = "translateX(0.75rem)";
    sniZettaLine[3].style.transform = "translateY(-0.75rem)";
    sniZettaLine[5].style.transform = "translateY(0.75rem)";
    sniZettaLine[7].style.transform = "translateX(-0.75rem)";
    for (let i = 1; i < sniZettaLine.length; i += 2) {
      sniZettaLine[i].style.opacity = 0;
    }
    for (let i = 0; i < sniZettaLine.length; i += 2) {
      sniZettaLine[i].style.transform = "rotate(45deg)";
    }
    sniZettaLine[0].style.transform = "translate(0.25rem, 0.25rem) rotate(45deg) scale(1.5, 0.8)";
    sniZettaLine[2].style.transform = "translate(-0.25rem, 0.25rem) rotate(45deg) scale(0.8, 1.5)";
    sniZettaLine[6].style.transform = "translate(0.25rem, -0.25rem) rotate(45deg) scale(0.8, 1.5)";
    sniZettaLine[8].style.transform = "translate(-0.25rem, -0.25rem) rotate(45deg) scale(1.5, 0.8)";
    sniZettaLine[4].style.borderRadius = "0.2rem";
  } else {
    sniZettaLine[1].style.transform = "translateX(0rem)";
    sniZettaLine[3].style.transform = "translateY(0rem)";
    sniZettaLine[5].style.transform = "translateX(0rem)";
    sniZettaLine[7].style.transform = "translateY(0rem)";
    for (let i = 1; i < sniZettaLine.length; i += 2) {
      sniZettaLine[i].style.opacity = 1;
    }
    for (let i = 0; i < sniZettaLine.length; i += 2) {
      sniZettaLine[i].style.transform = "";
    }
    sniZettaLine[4].style.borderRadius = "0.1rem";
  }*/
  /* !!! v1.1.11a [pro] */
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
/* function initialIndexDncE(eIndex) { !!! v1.1.11 [del]
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
} */
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
