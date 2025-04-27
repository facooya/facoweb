/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
function transformDni() {
  const TBC_DNI_SG = document.getElementsByClassName("tbc-dni-sg");
  if (!isEnabledDni) { /* Enableling */
    TBC_DNI_SG[0].style.top = "0.875rem";
    TBC_DNI_SG[0].style.transform = "rotate(45deg)";
    TBC_DNI_SG[1].style.opacity = "0";
    TBC_DNI_SG[1].style.left = "-100%";
    TBC_DNI_SG[2].style.top = "0.875rem";
    TBC_DNI_SG[2].style.transform = "rotate(-45deg)";
  } else { /* Disableling */
    TBC_DNI_SG[0].style.top = "0rem";
    TBC_DNI_SG[0].style.transform = "rotate(0deg)";
    TBC_DNI_SG[1].style.opacity = "1";
    TBC_DNI_SG[1].style.left = "0%";
    TBC_DNI_SG[2].style.top = "1.75rem";
    TBC_DNI_SG[2].style.transform = "rotate(0deg)";
  }
}
function transformSni() {
  const TBC_SNI_SG = document.getElementsByClassName("tbc-sni-sg");
  if (!isEnabledSni) { /* Enableling */
    TBC_SNI_SG[0].style.top = "0.875rem";
    TBC_SNI_SG[0].style.transform = "rotate(45deg)";
    TBC_SNI_SG[1].style.opacity = "0";
    TBC_SNI_SG[1].style.right = "-100%";
    TBC_SNI_SG[2].style.top = "0.875rem";
    TBC_SNI_SG[2].style.transform = "rotate(-45deg)";
  } else { /* Disableling */
    TBC_SNI_SG[0].style.top = "0rem";
    TBC_SNI_SG[0].style.transform = "rotate(0deg)";
    TBC_SNI_SG[1].style.opacity = "1";
    TBC_SNI_SG[1].style.right = "0%";
    TBC_SNI_SG[2].style.top = "1.75rem";
    TBC_SNI_SG[2].style.transform = "rotate(0deg)";
  }
}
function autoInactiveTabletDnc(ect, dncContainer, dncSubContainer) {
  for (let i = 0; i < dncContainer.length; i++) {
    if (dncContainer[i].isActive == 1 && ect.index != i) {
      dncSubContainer[i].style.width = "10rem";
      dncSubContainer[i].style.height = "0rem";
      dncContainer[i].isActive = 0;
    }
  }
}

export {
  transformDni,
  transformSni,
  autoInactiveTabletDnc
};
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */
