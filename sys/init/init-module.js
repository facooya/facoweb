/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Init
 */
function initTBC() {
  TBC_DMI_SG[0].style.top = "0%";
  TBC_DMI_SG[1].style.top = "43.75%";
  TBC_DMI_SG[2].style.top = "87.5%";
  /**/
  TBC_SMI_SG[0].style.top = "0%";
  TBC_SMI_SG[1].style.top = "43.75%";
  TBC_SMI_SG[2].style.top = "87.5%";
}
/**/
function initFMCRMC() {
  if (activeMode == 0) {
    DMC.style.width = "20rem";
    DMC.style.right = "-20rem";
    DMC.style.transition = "0ms";
    /**/
    SMC.style.width = "20rem";
    SMC.style.left = "-20rem";
    SMC.style.transition = "0ms";
  } else if (activeMode == 1) {
    DMC.style.width = "100%";
    DMC.style.right = "-100%";
    DMC.style.transition = "0ms";
    /**/
    SMC.style.width = "100%";
    SMC.style.left = "-100%";
    SMC.style.transition = "0ms";
  }
}
export {initTBC, initFMCRMC};