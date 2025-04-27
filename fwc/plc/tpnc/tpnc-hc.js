/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  setTpncZettaDniIr,
  setTpncZettaSniIr
} from "./tpnc-uc.js";
let tempDni = false;
let tempSni = false;
function handleTpncZettaDni() {
  const plcYottaHpt = document.querySelector(".plc-r .plc-y-hpt");
  /* DNC */
  /* const dncR = document.querySelector(".dnc-r"); */
  /* ECC */
  /* const nocR = document.querySelector(".noc-r"); */
  /* TPNC */
  const tpncYottaBept = plcYottaHpt.querySelector(".tpnc-r .tpnc-y-bept");

  if (!tempDni) { /* Active [DNI] FIXME: dniY.isActive */
    /* TODO: comment - = * */
    switch (1) { /* activeMode, activeDt, previousDt */
      case 1: /* DisplayType: Mobile */
        setTpncZettaDniIr(true);
        if (tempSni) { /*isEnabledSni Deactive [SNI] */ 
          handleTpncZettaSni();
        }
        /* dncR.style.left = "0%"; */

        /* !!! v1.1.13a [pro] {nav-overlap} (modified) */
        /* nocR.style.left = "80%";
        nocR.addEventListener("click", onTpncZettaDni); */
        tpncYottaBept.style.display = "block";
        break;
      case 2: /* DisplayType: Tablet */
        /* TODO */
        break;
      case 3: /* DisplayType: Desktop */
        /* TODO */
        break;
      default: /* DisplayType: Error */
        /* TODO: logf Error */
        break;
    }
    tempDni = true;
  /* TODO: comment - = * */
  } else { /* Deactive [DNI] */
    /* TODO: comment - = * */
    switch (1) {
      case 1: /* DisplayType: Mobile */
        setTpncZettaDniIr(false);
        /* _resetDncY(dncY, dncZ); */
        /* _resetDncR();
        dncR.style.left = "-80%"; */

        /* !!! v1.1.12a [tmp] [pro] (nav-overlap) */
        /* nocR.style.left = "100%";
        nocR.removeEventListener("click", onTpncZettaDni); */
        tpncYottaBept.style.display = "";

        break;
      case 2: /* DisplayType: Tablet */
        /* TODO: Tablet */
        break;
      case 3: /* DisplayType: Desktop */
        /* TODO: Desktop */
        break;
      default: /* DisplayType: Error */
        /* TODO: logf Error */
        break;
    }
    tempDni = false; /* FIXME: dniY.isActive = 0; */
    /* TODO: comment - = * */
  }
}
function handleTpncZettaSni() {
  /* const sncR = document.querySelector(".snc-r");
  const rpb = document.querySelector("#rpb"); */
  /* !!! v1.1.12a [tmp] */
  /* const sectionR = document.querySelector(".section-r"); */

  /* !!! v1.1.12a [tmp] [pro] (nav-overlap) */
  /* const nocR = document.querySelector(".noc-r"); */
  /* !!! v1.1.13a [test] (scroll-overlap) */
  const tpncYottaBept = document.querySelector(".tpnc-y-bept");

  if (!tempSni) { /* Enabling */
    /* sncR.style.right = "0%"; */
    if (/* activeMode */1 === 1) { /* Mobile */
      setTpncZettaSniIr(true);
      if (tempDni) { /* Deactive [DNI] */ 
        handleTpncZettaDni();
      }
      /* !!! v1.1.12a [tmp] [pro] (nav-overlap) */
      /* nocR.style.left = "0%";
      nocR.addEventListener("click", onTpncZettaSni); */
      /* !!! v1.1.13a [test] (scroll-overlap) */
      tpncYottaBept.style.display = "block";

    } else if (activeMode === 2) { /* Tablet */
      sectionR.style.margin = "0rem 20rem 0rem 0rem";
      rpb.style.right = "20rem";

      /* !!! v1.1.11 [tmp] */
      let calcTmp = sectionR.offsetWidth - 20 * 16;
      if (calcTmp < 768) {
        /* To Do
        console.log(calcTmp);
        */
      }

    } else if (activeMode === 3) { /* Desktop */
      sectionR.style.margin = "0rem 20rem 0rem 0rem";
      rpb.style.right = "20rem";
    }
    tempSni = true;
  } else { /* Disabling & Init */
    if (/* activeMode */1 == 1) { /* Mobile */
      setTpncZettaSniIr(false);
      /* sncR.style.right = "-80%";
      
      _resetSncR(); */

      /* !!! v1.1.12a [tmp] [pro] (nav-overlap) */
      /* nocR.style.left = "-20%";
      nocR.removeEventListener("click", onTpncZettaSni); */
      /* !!! v1.1.13a [test] (scroll-overlap) */
      tpncYottaBept.style.display = "";

    } else if (activeMode == 2) { /* Tablet */
      sncR.style.right = "-20rem";
      sectionR.style.margin = "0rem 0rem 0rem 0rem";
      rpb.style.right = "0rem";

      _resetSncR();
    } else if (activeMode == 3) { /* Desktop */
      sncR.style.right = "-20rem";
      sectionR.style.margin = "0rem 0rem 0rem 0rem";
      rpb.style.right = "0rem";
      
      _resetSncR();
    } else {
      //Error
    }
    tempSni = false;
  }
}

export {
  handleTpncZettaDni,
  handleTpncZettaSni
};
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */