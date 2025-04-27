/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* !!! v1.1.14a [test] [pro] */
function setTpncZettaDniIr(isActive) {
  const dniIr = document.querySelectorAll(".tpnc-z-dni .tpnc-z-dni-ir");
  if (isActive) { /* Active */
    /* gap 0.475rem 0.35rem */
    dniIr[0].style.transform = "translate(0rem, 0.825rem) rotate(45deg) scale(1.3, 1)";
    dniIr[1].style.transform = "translate(-2rem, 0rem)";
    dniIr[2].style.transform = "translate(0rem, -0.825rem) rotate(-45deg) scale(1.3, 1)";

    dniIr[1].style.opacity = "0";
  } else { /* Deactive */
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

    sniIr[4].style.transform = "rotate(45deg) scale(0.7)";
  } else {
    for (let i = 0; i < sniIr.length; i++) {
      sniIr[i].style.transform = "";
    }
  }
}

export {
  setTpncZettaDniIr,
  setTpncZettaSniIr
};
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */