/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  transformTpcDniZettaLine,
  transformDni,
  transformSni,
  //initialIndexDncE,
  autoInitTabletDncE,
  calcGridTemplateData
} from "../../wsr/local/event-handler-local.js";

/* ===== DNI ===== */
/* ----- Mobile ----- */ /* FIXME: handleDniY */
function enabledDni() {
  transformTpcDniZettaLine(); /* FIXME: transformDniZettaLine, setTransformDniZettaLine */
  const dncRoot = document.querySelector(".dnc-root");
  if (!isEnabledDni) { /* Active [DNI] FIXME: dniY.isActive */
    /* TODO: comment - = * */
    switch (activeMode) {
      case 1: /* DisplayType: Mobile */
        isEnabledSni && enabledSni(); /* Deactive [SNI] */
        dncRoot.style.left = "0%";
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
    isEnabledDni = 1;
    /* TODO: comment - = * */
  } else { /* Deactive [DNI] */
    /* TODO: comment - = * */
    switch (activeMode) {
      case 1: /* DisplayType: Mobile */
        const dncY = dncRoot.querySelectorAll(".dnc-y");
        const dncZ = dncRoot.querySelectorAll(".dnc-z");
        _resetDncY(dncY, dncZ);
        dncRoot.style.left = "-80%";
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
    isEnabledDni = 0; /* FIXME: dniY.isActive = 0; */
    /* TODO: comment - = * */
  }
}
/* ===== SNI ===== */ /* FIXME: handleSniY() */
function enabledSni() {
  transformSni();
  const sncRoot = document.querySelector(".snc-root");
  const sectionRoot = document.querySelector(".section-root");
  const rpb = document.querySelector("#rpb");
  /* !!! v1.1.11a [tmp] */
  const sncZ = sncRoot.querySelectorAll(".snc-z");

  if (!isEnabledSni) { /* Enabling */
    sncRoot.style.right = "0%";
    if (activeMode === 1) { /* Mobile */
      if (isEnabledDni) {
        enabledDni();
      }
    } else if (activeMode === 2) { /* Tablet */
      sectionRoot.style.margin = "0rem 20rem 0rem 0rem";
      rpb.style.right = "20rem";

      /* !!! v1.1.11 [tmp] */
      let calcTmp = sectionRoot.offsetWidth - 20 * 16;
      if (calcTmp < 768) {
        /* To Do
        console.log(calcTmp);
        */
      }

    } else if (activeMode === 3) { /* Desktop */
      sectionRoot.style.margin = "0rem 20rem 0rem 0rem";
      rpb.style.right = "20rem";
    }
    isEnabledSni = 1;
  } else { /* Disabling & Init */
    if (activeMode == 1) { /* Mobile */
      sncRoot.style.right = "-80%";
      
      _resetSncY(sncZ);
      /*for (let i = 0; i < sncZ.length; i++) { !!! v1.1.11a [del]
        if (sncZ[i].isActive) {
          let eData = {
            currentTarget: sncZ[i]
          };
          handleMobileSncZ(eData);
        }
      }*/
    } else if (activeMode == 2) { /* Tablet */
      sncRoot.style.right = "-20rem";
      sectionRoot.style.margin = "0rem 0rem 0rem 0rem";
      rpb.style.right = "0rem";

      _resetSncY(sncZ);
      /*for (let i = 0; i < sncZ.length; i++) { !!! v1.1.11a [del]
        if (sncZ[i].isActive) {
          let eData = {
            currentTarget: sncZ[i]
          };
          handleTabletSncZ(eData);
        }
      }*/
    } else if (activeMode == 3) { /* Desktop */
      sncRoot.style.right = "-20rem";
      sectionRoot.style.margin = "0rem 0rem 0rem 0rem";
      rpb.style.right = "0rem";
      
      _resetSncY(sncZ);
      /*for (let i = 0; i < sncZ.length; i++) { !!! v1.1.11a [del]
        if (sncZ[i].isActive) {
          let eData = {
            type: "click",
            currentTarget: sncZ[i]
          };
          handleDesktopSncZ(eData);
          eData.type = "mouseleave";
          handleDesktopSncZ(eData);
        }
      }*/
    } else {
      //Error
    }
    isEnabledSni = 0;
  }
}
function _resetSncY(sncZ) { /* !!! v1.1.11a [tmp] */
  for (let i = 0; i < sncZ.length; i++) {
    if (sncZ[i].isActive) {
      let eData = {
        currentTarget: sncZ[i]
      };
      switch (activeMode) {
        case 1:
          handleMobileSncZ(eData);
          break;
        case 2:
          handleTabletSncZ(eData);
          break;
        case 3:
          eData.type = "click";
          handleDesktopSncZ(eData);
          eData.type = "mouseleave";
          handleDesktopSncZ(eData);
          break;
        default:
          /* Error */
          break;
      }
      /* if (activeMode == 1) { !!! v1.1.11a [del]
        handleMobileSncZ(eData);
      } else if (activeMode == 2) {
        handleTabletSncZ(eData);
      } else if (activeMode == 3) {
        eData.type = "click";
        handleDesktopSncZ(eData);
        eData.type = "mouseleave";
        handleDesktopSncZ(eData);
      } else {
        //Error
      } */
    }
  }
}
function _resetDncY(dncY, dncZ) { /* !!! v1.1.11a [tmp] */
  for (let i = 0; i < dncY.length; i++) {
    if (dncY[i].isActive) {
      let eData = {
        currentTarget: dncZ[i]
      };
      switch (activeMode) {
        case 1:
          handleMobileDncZ(eData);
          break;
        default:
          /* Error */
          break;
      }
    }
  }
}
/* ===== DNC ===== */
/* ----- Mobile ----- */
/* function handleMobileDncY(event) { !!! v1.1.11a [del]
  const eCurrentTarget = event.currentTarget;
  const dncExaES = eCurrentTarget.querySelector(".dnc-e");
  const dncPetaTitleES = dncExaES.getElementsByClassName("dnc-p-title");

  if (!eCurrentTarget.isActive) { /* Activate 
    dncExaES.style.gridTemplateRows = calcGridTemplateData(dncPetaTitleES, 4);
    for (let i = 0; i < dncPetaTitleES.length; i++) {
      dncPetaTitleES[i].style.opacity = "1";
    }
    eCurrentTarget.isActive = 1;
  } else { /* Deactivate 
    dncExaES.style.gridTemplateRows = calcGridTemplateData(dncPetaTitleES, 0);
    for (let i = 0; i < dncPetaTitleES.length; i++) {
      dncPetaTitleES[i].style.opacity = "0";
    }
    eCurrentTarget.isActive = 0;
  }
} */
function handleMobileDncZ(event) {
  const eCurrentTarget = event.currentTarget;
  const idx = eCurrentTarget.index;

  const dncZettaTitleZB = eCurrentTarget.querySelector(".dnc-z-title");
  const dncZettaRightIconZB = eCurrentTarget.querySelector(".dnc-z-right-icon");
  const dncZettaBottomLineZB = eCurrentTarget.querySelector(".dnc-z-bottom-line");

  const dncY = document.querySelectorAll(".dnc-root .dnc-y");
  const dncExaEB = dncY[idx].querySelector(".dnc-e");

  const dncPetaTitleEB = dncExaEB.querySelectorAll(".dnc-p-title");
  const dncPetaRightIconEB = dncExaEB.querySelectorAll(".dnc-p-right-icon");
  const dncPetaBottomLineEB = dncExaEB.querySelectorAll(".dnc-p-bottom-line");

  if (!dncY[idx].isActive) { /* Activate */
    dncZettaTitleZB.style.fontWeight = "700";
    dncZettaRightIconZB.style.transform = "rotate(180deg)";
    dncZettaBottomLineZB.style.left = "15%";
    dncZettaBottomLineZB.style.width = "70%";

    dncY[idx].style.backgroundColor = "#333333";
    for (let i = 0; i < dncPetaTitleEB.length; i++) {
      dncPetaTitleEB[i].style.opacity = "1";
      dncPetaRightIconEB[i].style.opacity = "1";
      dncPetaBottomLineEB[i].style.opacity = "1";

      _calcBottomLine(dncPetaTitleEB[i], dncPetaBottomLineEB[i], 20);
    }
    dncExaEB.style.gridTemplateRows = calcGridTemplateData(dncPetaTitleEB, 4);

    dncY[idx].isActive = true;
  } else { /* Deactivate */
    dncZettaTitleZB.style.fontWeight = "";
    dncZettaRightIconZB.style.transform = "";
    dncZettaBottomLineZB.style.left = "";
    dncZettaBottomLineZB.style.width = "";

    dncY[idx].style.backgroundColor = "";
    for (let i = 0; i < dncPetaTitleEB.length; i++) {
      dncPetaTitleEB[i].style.opacity = "";
      dncPetaRightIconEB[i].style.opacity = "";
      dncPetaBottomLineEB[i].style.opacity = "";
    }
    dncExaEB.style.gridTemplateRows = calcGridTemplateData(dncPetaTitleEB, 0);

    dncY[idx].isActive = false;
  }
}
/* ----- Tablet ----- */
/* function handleTabletDncY(event) {
  const eCurrentTarget = event.currentTarget;
  const eIndex = eCurrentTarget.index;

  const dncExaES = eCurrentTarget.querySelector(".dnc-e");
  const dncPetaES = dncExaES.getElementsByClassName("dnc-p-title");

  if (!eCurrentTarget.isActive) { /* Activate 
    initialIndexDncE(eIndex);
    dncExaES.style.gridTemplateRows = calcGridTemplateData(dncPetaES, 4);
    dncExaES.style.width = "18rem";
    if (eIndex == 0) { /* dnc-y[0] Overflow Shield 
      dncExaES.style.left = "0%";
    } else if (eIndex == 4) { /* dnc-y[4] Overflow Shield 
      dncExaES.style.right = "0%";
    }
    for (let i = 0; i < dncPetaES.length; i++) {
      dncPetaES[i].style.opacity = "1";
    }
    eCurrentTarget.isActive = 1;
  } else { /* Deactivate 
    dncExaES.style.gridTemplateRows = calcGridTemplateData(dncPetaES, 0);
    dncExaES.style.width = "10rem";
    for (let i = 0; i < dncPetaES.length; i++) {
      dncPetaES[i].style.opacity = "0";
    }
    eCurrentTarget.isActive = 0;
  }
} */
function handleTabletDncZ(event) {
  const eCurrentTarget = event.currentTarget;
  const idx = eCurrentTarget.index;
  const dncY = document.querySelectorAll(".dnc-root .dnc-y");
  const dncE = document.querySelectorAll(".dnc-root .dnc-e");

  const dncZettaTitleZB = eCurrentTarget.querySelector(".dnc-z-title");
  const dncZettaBottomLineZB = eCurrentTarget.querySelector(".dnc-z-bottom-line");

  const dncExaEB = dncY[idx].querySelector(".dnc-e");
  const dncPetaEB = dncExaEB.querySelectorAll(".dnc-p");
  
  const dncPetaTitleEB = dncExaEB.querySelectorAll(".dnc-p-title");
  const dncPetaRightIconEB = dncExaEB.querySelectorAll(".dnc-p-right-icon");
  const dncPetaBottomLineEB = dncExaEB.querySelectorAll(".dnc-p-bottom-line");

  if (!dncY[idx].isActive) {
    autoInitTabletDncE(dncY, dncE, idx);
    dncExaEB.style.gridTemplateRows = calcGridTemplateData(dncPetaEB, 4);
    dncExaEB.style.width = "18rem";
    for (let i = 0; i < dncPetaTitleEB.length; i++) {
      dncPetaTitleEB[i].style.opacity = "1";
      dncPetaRightIconEB[i].style.opacity = "1";
      dncPetaBottomLineEB[i].style.opacity = "1";
      _calcBottomLine(dncPetaTitleEB[i], dncPetaBottomLineEB[i], 20);
    }
    dncZettaTitleZB.style.fontWeight = "700";
    dncZettaBottomLineZB.style.left = "10%";
    dncZettaBottomLineZB.style.width = "80%";
    /* --- Overflow shield --- */
    switch (idx) {
      case 0:
        dncExaEB.style.left = "0%";
        break;
      case 4:
        dncExaEB.style.right = "0%";
        break;
    }
    /* ------------------------------ */
    /* - Set dncY - */
    dncY[idx].isActive = true;
  } else {
    dncExaEB.style.gridTemplateRows = calcGridTemplateData(dncPetaEB, 0);
    dncExaEB.style.width = "";
    for (let i = 0; i < dncPetaTitleEB.length; i++) {
      dncPetaTitleEB[i].style.opacity = "";
      dncPetaRightIconEB[i].style.opacity = "";
      dncPetaBottomLineEB[i].style.opacity = "";
    }
    /* Reset dncZ */
    dncZettaTitleZB.style.fontWeight = "";
    dncZettaBottomLineZB.style.left = "";
    dncZettaBottomLineZB.style.width = "";
    /* Set dncY */
    dncY[idx].isActive = false;
  }
}
/* ----- Desktop ----- */
/* function handleDesktopDncY(event) { !!! v1.1.11a [del]
  /* Event 
  const eType = event.type;
  const eCurrentTarget = event.currentTarget;
  /* const eIndex = eCurrentTarget.index; !!!!! 
  /* Dnc Z 
  const dncZettaTitleZS = eCurrentTarget.querySelector(".dnc-z-title");
  const dncZettaBottomLineZS = eCurrentTarget.querySelector(".dnc-z-bottom-line");
  /* Dnc E, P 
  const dncExaES = eCurrentTarget.querySelector(".dnc-e");
  const dncPetaES = eCurrentTarget.getElementsByClassName("dnc-p");
  const dncPetaTitleES = eCurrentTarget.getElementsByClassName("dnc-p-title");

  if (eType === "mouseenter") {
    dncZettaTitleZS.style.fontWeight = "700";
    dncZettaBottomLineZS.style.left = "10%";
    dncZettaBottomLineZS.style.width = "80%";
    dncExaES.style.gridTemplateRows = calcGridTemplateData(dncPetaES, 4);
    dncExaES.style.width = "20rem";
    for (let i = 0; i < dncPetaTitleES.length; i++) {
      dncPetaTitleES[i].style.opacity = "1";
    }
  } else if (eType === "mouseleave") {
    dncZettaTitleZS.style.fontWeight = "400";
    dncZettaBottomLineZS.style.left = "50%";
    dncZettaBottomLineZS.style.width = "0%";
    dncExaES.style.gridTemplateRows = calcGridTemplateData(dncPetaES, 0);
    dncExaES.style.width = "10rem";
    for (let i = 0; i < dncPetaTitleES.length; i++) {
      dncPetaTitleES[i].style.opacity = "0";
    }
  }
} */
function handleDesktopDncY(event) {
  /* Event */
  const eType = event.type;
  const eCurrentTarget = event.currentTarget;

  const idx = eCurrentTarget.index;
  const dncY = document.querySelectorAll(".dnc-root .dnc-y");
  /* const eIndex = eCurrentTarget.index; !!!!! */
  /* Dnc Z */
  const dncZettaTitleZS = eCurrentTarget.querySelector(".dnc-z-title");
  const dncZettaBottomLineZS = eCurrentTarget.querySelector(".dnc-z-bottom-line");
  /* Dnc E, P */
  const dncExaEB = eCurrentTarget.querySelector(".dnc-e");
  const dncPetaEB = dncExaEB.querySelectorAll(".dnc-p");
  const dncPetaTitleEB = dncExaEB.querySelectorAll(".dnc-p-title");

  if (eType === "mouseenter") {
    dncZettaTitleZS.style.fontWeight = "700";
    dncZettaBottomLineZS.style.left = "10%";
    dncZettaBottomLineZS.style.width = "80%";
    dncExaEB.style.gridTemplateRows = calcGridTemplateData(dncPetaEB, 4);
    dncExaEB.style.width = "20rem";
    for (let i = 0; i < dncPetaTitleEB.length; i++) {
      dncPetaTitleEB[i].style.opacity = "1";
    }
  } else if (eType === "mouseleave") {
    dncZettaTitleZS.style.fontWeight = "400";
    dncZettaBottomLineZS.style.left = "50%";
    dncZettaBottomLineZS.style.width = "0%";
    dncExaEB.style.gridTemplateRows = calcGridTemplateData(dncPetaEB, 0);
    dncExaEB.style.width = "10rem";
    for (let i = 0; i < dncPetaTitleEB.length; i++) {
      dncPetaTitleEB[i].style.opacity = "0";
    }
  }
}
/* function handleDesktopDncP(event) { v1.1.11a [del]
  const eType = event.type;
  const eCurrentTarget = event.currentTarget;
  const dncPetaTitlePS = eCurrentTarget.querySelector(".dnc-p-title");
  const dncPetaRightIconPS = eCurrentTarget.querySelector(".dnc-p-right-icon");
  const dncPetaBottomLinePS = eCurrentTarget.querySelector(".dnc-p-bottom-line");

  if (eType === "mouseenter") {
    dncPetaTitlePS.style.fontWeight = "700";
    dncPetaRightIconPS.style.margin = "0rem 0rem 0rem 1rem";
    dncPetaRightIconPS.style.borderTop = "0.25rem solid #00000000";
    dncPetaRightIconPS.style.borderBottom = "0.25rem solid #00000000";
    dncPetaRightIconPS.style.borderLeft = "0.5rem solid #FFFFFF";
    dncPetaBottomLinePS.style.width = "60%";
  } else if (eType === "mouseleave") {
    dncPetaTitlePS.style.fontWeight = "400";
    dncPetaRightIconPS.style.margin = "0rem";
    dncPetaRightIconPS.style.borderTop = "0rem solid #00000000";
    dncPetaRightIconPS.style.borderBottom = "0rem solid #00000000";
    dncPetaRightIconPS.style.borderLeft = "0rem solid #00000000";
    dncPetaBottomLinePS.style.width = "0%";
  }
} */
function handleDesktopDncP(event) {
  const eType = event.type;
  const eCurrentTarget = event.currentTarget;

  const dncPetaTitlePB = eCurrentTarget.querySelector(".dnc-p-title");
  const dncPetaRightIconPB = eCurrentTarget.querySelector(".dnc-p-right-icon");
  const dncPetaBottomLinePB = eCurrentTarget.querySelector(".dnc-p-bottom-line");

  if (eType === "mouseenter") {
    dncPetaTitlePB.style.fontWeight = "700";
    dncPetaRightIconPB.style.margin = "0rem 0rem 0rem 1rem";
    dncPetaRightIconPB.style.borderTop = "0.25rem solid #00000000";
    dncPetaRightIconPB.style.borderBottom = "0.25rem solid #00000000";
    dncPetaRightIconPB.style.borderLeft = "0.5rem solid #FFFFFF";
    dncPetaRightIconPB.style.opacity = "1";
    //dncPetaBottomLinePB.style.width = "60%";
    _calcBottomLine(dncPetaTitlePB, dncPetaBottomLinePB, 32);
  } else if (eType === "mouseleave") {
    dncPetaTitlePB.style.fontWeight = "";
    dncPetaRightIconPB.style.margin = "";
    dncPetaRightIconPB.style.borderTop = "";
    dncPetaRightIconPB.style.borderBottom = "";
    dncPetaRightIconPB.style.borderLeft = "";
    dncPetaRightIconPB.style.opacity = "";
    dncPetaBottomLinePB.style.width = "";
  }
}
/* ===== SNC ===== */
/*function handleSncY(event) { !!! v1.1.11a [del]
  const eCurrentTarget = event.currentTarget;
  const sncExaES = eCurrentTarget.querySelector(".snc-e");
  const sncPetaTitleES = sncExaES.getElementsByClassName("snc-p-title");

  if (!eCurrentTarget.isActive) { /* Activate 
    sncExaES.style.gridTemplateRows = calcGridTemplateData(sncPetaTitleES, 4);
    for (let i = 0; i < sncPetaTitleES.length; i++) {
      sncPetaTitleES[i].style.opacity = "1";
    }
    eCurrentTarget.isActive = 1;
  } else { /* Deactivate 
    sncExaES.style.gridTemplateRows = calcGridTemplateData(sncPetaTitleES, 0);
    for (let i = 0; i < sncPetaTitleES.length; i++) {
      sncPetaTitleES[i].style.opacity = "0";
    }
    eCurrentTarget.isActive = 0;
  }
}*/
function handleMobileSncZ(event) {
  const eCurrentTarget = event.currentTarget;
  const idx = eCurrentTarget.idx;

  const sncY = document.querySelectorAll(".snc-root .snc-y");
  const sncExaEB = sncY[idx].querySelector(".snc-e");

  const sncPetaTitleEB = sncExaEB.querySelectorAll(".snc-p-title");
  const sncPetaRightIconEB = sncExaEB.querySelectorAll(".snc-p-right-icon");
  const sncPetaBottomLineEB = sncExaEB.querySelectorAll(".snc-p-bottom-line");
  
  const sncZettaTitleZB = eCurrentTarget.querySelector(".snc-z-title");
  const sncZettaRightIconZB = eCurrentTarget.querySelector(".snc-z-right-icon");
  const sncZettaBottomLineZB = eCurrentTarget.querySelector(".snc-z-bottom-line");

  if (!eCurrentTarget.isActive) { /* Activate */
    sncZettaTitleZB.style.fontWeight = "700";
    sncZettaRightIconZB.style.transform = "rotate(180deg)";
    sncZettaBottomLineZB.style.left = "15%";
    sncZettaBottomLineZB.style.width = "70%";


    sncY[idx].style.backgroundColor = "#333333";

    for (let i = 0; i < sncPetaTitleEB.length; i++) {
      sncPetaTitleEB[i].style.opacity = "1";
      sncPetaRightIconEB[i].style.opacity = "1";
      sncPetaBottomLineEB[i].style.opacity = "1";

      /* !!! v1.1.11a [del]
      const a = sncPetaTitleEB[i].textContent;
      let c = a.length;
      sncPetaBottomLineEB[i].style.left = "calc(50% - " + (a / 3) + "rem)";
      sncPetaBottomLineEB[i].style.width = a / 1.5 + "rem";
      for (let j = 0; j < a.length; j++) {
        const b = a[j];
        if (b === "." || b === " ") {
          c += 4;
        } else {
          c += 12;
        }
      }
      c *= 8;
      c += 24;
      sncPetaBottomLineEB[i].style.left = "calc(50% - " + (c / 2) + "px)";
      sncPetaBottomLineEB[i].style.width = c + "px";*/

      /* !!! v1.1.11a [pro] */
      _calcBottomLine(sncPetaTitleEB[i], sncPetaBottomLineEB[i], 20);
      /*const calcValue = sncPetaTitleEB[i].offsetWidth; !!! v1.1.11a [del]
      const calcLeft = "calc(50% - 0.5rem - " + (calcValue / 2) + "px)";
      const calcWidth = calcValue + 16 + "px";
      sncPetaBottomLineEB[i].style.left = calcLeft;
      sncPetaBottomLineEB[i].style.width = calcWidth;*/
    }
    /*sncPetaTitleEB.forEach(elem => {
      elem.style.opacity = "1";
      const a = elem.textContent.length;
    });
    sncPetaRightIconEB.forEach(elem => { elem.style.opacity = "1"; });
    sncPetaBottomLineEB.forEach(elem => { elem.style.opacity = "1"; });*/
    sncExaEB.style.gridTemplateRows = calcGridTemplateData(sncPetaTitleEB, 4);

    eCurrentTarget.isActive = 1;
  } else { /* Deactivate */
    sncZettaTitleZB.style.fontWeight = "400";
    sncZettaRightIconZB.style.transform = "rotate(0deg)";
    sncZettaBottomLineZB.style.left = "50%";
    sncZettaBottomLineZB.style.width = "0%";

    sncY[idx].style.backgroundColor = "#222222";
    sncPetaTitleEB.forEach(elem => { elem.style.opacity = "0"; });
    sncPetaRightIconEB.forEach(elem => { elem.style.opacity = "0"; });
    sncPetaBottomLineEB.forEach(elem => { elem.style.opacity = "0"; });
    sncExaEB.style.gridTemplateRows = calcGridTemplateData(sncPetaTitleEB, 0);

    eCurrentTarget.isActive = 0;
  }
}
function handleTabletSncZ(event) {
  const eCurrentTarget = event.currentTarget;
  const idx = event.idx;
  let eData = {
    currentTarget: eCurrentTarget,
    idx: idx
  };
  handleMobileSncZ(eData);
}
function handleDesktopSncZ(event) { /* !!! v1.1.11a [tmp] [pro] */
  const eType = event.type;
  const eCurrentTarget = event.currentTarget;
  const idx = eCurrentTarget.idx;

  const sncY = document.querySelectorAll(".snc-root .snc-y");

  const sncZettaTitleZB = eCurrentTarget.querySelector(".snc-z-title");
  const sncZettaRightIconZB = eCurrentTarget.querySelector(".snc-z-right-icon");
  const sncZettaBottomLineZB = eCurrentTarget.querySelector(".snc-z-bottom-line");

  const sncExaEB = sncY[idx].querySelector(".snc-e");
  const sncPetaTitleEB = sncExaEB.querySelectorAll(".snc-p-title");
  
  if (eType === "mouseenter") {
    if (!eCurrentTarget.isActive) {
      sncZettaTitleZB.style.fontWeight = "700";
      sncZettaRightIconZB.style.margin = "0rem 2.5rem 0rem 0rem";
      sncZettaRightIconZB.style.borderTop = "0.5rem solid #FFFFFF";
      sncZettaRightIconZB.style.borderRight = "0.4rem solid #00000000";
      sncZettaRightIconZB.style.borderLeft = "0.4rem solid #00000000";
      sncZettaRightIconZB.style.transform = "rotate(360deg)";
      sncZettaBottomLineZB.style.left = "10%";
      sncZettaBottomLineZB.style.width = "80%";
    }
  } else if (eType === "mouseleave") {
    if (!eCurrentTarget.isActive) {
      sncZettaTitleZB.style.fontWeight = "400";
      sncZettaRightIconZB.style.margin = "0rem";
      sncZettaRightIconZB.style.borderTop = "0rem solid #00000000";
      sncZettaRightIconZB.style.borderRight = "0rem solid #00000000";
      sncZettaRightIconZB.style.borderLeft = "0rem solid #00000000";
      sncZettaRightIconZB.style.transform = "rotate(0deg)";
      sncZettaBottomLineZB.style.left = "50%";
      sncZettaBottomLineZB.style.width = "0%";
    }
  } else if (eType === "click") {
    if (!eCurrentTarget.isActive) { /* Activate */
      sncY[idx].style.backgroundColor = "#333333";
      sncZettaRightIconZB.style.transform = "rotate(540deg)";
      sncExaEB.style.gridTemplateRows = calcGridTemplateData(sncPetaTitleEB, 4);
      sncPetaTitleEB.forEach(elem => { elem.style.opacity = "1"; });
      eCurrentTarget.isActive = 1;
    } else { /* Deactivate */
      sncY[idx].style.backgroundColor = "#222222";
      sncZettaRightIconZB.style.transform = "rotate(360deg)";
      sncExaEB.style.gridTemplateRows = calcGridTemplateData(sncPetaTitleEB, 0);
      sncPetaTitleEB.forEach(elem => { elem.style.opacity = "0"; });
      eCurrentTarget.isActive = 0;
    }
  }
}
function handleDesktopSncP(event) { /* !!! v1.1.11a [tmp] */
  const eType = event.type;
  const eCurrentTarget = event.currentTarget;

  const sncPetaTitlePB = eCurrentTarget.querySelector(".snc-p-title");
  const sncPetaRightIconPB = eCurrentTarget.querySelector(".snc-p-right-icon");
  const sncPetaBottomLinePB = eCurrentTarget.querySelector(".snc-p-bottom-line");

  if (eType === "mouseenter") {
    sncPetaTitlePB.style.fontWeight = "700";
    sncPetaRightIconPB.style.margin = "0rem 0rem 0rem 1rem";
    sncPetaRightIconPB.style.borderTop = "0.25rem solid #00000000";
    sncPetaRightIconPB.style.borderBottom = "0.25rem solid #00000000";
    sncPetaRightIconPB.style.borderLeft = "0.5rem solid #FFFFFF";
    sncPetaRightIconPB.style.opacity = "1";

    _calcBottomLine(sncPetaTitlePB, sncPetaBottomLinePB, 32);
    /*const calcValue = sncPetaTitlePB.offsetWidth; !!! v1.1.11 [del]
    const calcLeft = "calc(50% - 24px - " + (calcValue / 2) + "px)";
    const calcWidth = calcValue + 48 + "px";
    sncPetaBottomLinePB.style.left = calcLeft;
    sncPetaBottomLinePB.style.width = calcWidth;*/
    //sncPetaBottomLinePB.style.width = "60%";
  } else if (eType === "mouseleave") {
    sncPetaTitlePB.style.fontWeight = "";
    sncPetaRightIconPB.style.margin = "";
    sncPetaRightIconPB.style.borderTop = "";
    sncPetaRightIconPB.style.borderBottom = "";
    sncPetaRightIconPB.style.borderLeft = "";
    sncPetaRightIconPB.style.opacity = "";

    sncPetaBottomLinePB.style.width = "0%";
  }
}
function _calcBottomLine(elemValue, elemApply, buffer) {
  const calcValue = elemValue.offsetWidth;
  const calcLeft = "calc(50% - " + (buffer / 2) + "px - " + (calcValue / 2) + "px)";
  const calcWidth = calcValue + buffer + "px";
  elemApply.style.left = calcLeft;
  elemApply.style.width = calcWidth;
}
/* ===== SPC: Scroll Progress Component ===== */
function progressHandler() { /* !!! handleSpc */
  const _HTML = document.documentElement;
  const overflowHeight = _HTML.scrollHeight - _HTML.clientHeight;
  const scrollProgress = (_HTML.scrollTop / overflowHeight) * 100;

  const LPB = document.getElementById("lpb");
  const RPB = document.getElementById("rpb");
  LPB.style.height = Math.round(scrollProgress) + "%";
  RPB.style.height = Math.round(scrollProgress) + "%";

}

export {
  enabledDni,
  enabledSni,

  handleMobileDncZ,
  //handleMobileDncY,
  handleTabletDncZ,
  //handleTabletDncY,
  handleDesktopDncY,
  handleDesktopDncP,

  handleMobileSncZ,
  handleTabletSncZ,
  handleDesktopSncZ,
  handleDesktopSncP,

  progressHandler
};
/* DESCRIPTION
 * e.g., progressHandler();
 * scrollHeight = 500(px); clientHeight = 100(px);
 * overflowHeight = [scrollHeight]500(px) - [clientHeight]100(px) -> 400(px);
 * scrollTop = [Min]0 ~ [Max][overflowHeight]400(px) ->
 *   [Max]400 / 2(50%) -> [currentScrollTop]200(px);
 * scrollProgress = ([currentScrollTop]200(px) / [overflowHeight]400(px)) ->
 *   0.5 * 100 -> 50(%);
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */
