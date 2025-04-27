/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  setTpncZettaDniIr,
  setTpncZettaSniIr,
  autoInitTabletDncE,
  calcGridTemplateData
} from "../../wsr/local/event-handler-local.js";
/* ===== DNI ===== */
/* ----- Mobile ----- */
function onTpncZettaDni() {
  /* DNC */
  const dncR = document.querySelector(".dnc-r");
  /* ECC */
  const nocR = document.querySelector(".noc-r");
  /* TPNC */
  const tpncYottaBept = document.querySelector(".tpnc-y-bept");

  if (!isEnabledDni) { /* Active [DNI] FIXME: dniY.isActive */
    /* TODO: comment - = * */
    switch (activeMode) {
      case 1: /* DisplayType: Mobile */
        setTpncZettaDniIr(true);
        if (isEnabledSni) { /* Deactive [SNI] */ 
          onTpncZettaSni();
        }
        dncR.style.left = "0%";

        /* !!! v1.1.13a [pro] {nav-overlap} (modified) */
        nocR.style.left = "80%";
        nocR.addEventListener("click", onTpncZettaDni);
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
    isEnabledDni = 1;
    /* TODO: comment - = * */
  } else { /* Deactive [DNI] */
    /* TODO: comment - = * */
    switch (activeMode) {
      case 1: /* DisplayType: Mobile */
        setTpncZettaDniIr(false);
        /* _resetDncY(dncY, dncZ); */
        _resetDncR();
        dncR.style.left = "-80%";

        /* !!! v1.1.12a [tmp] [pro] (nav-overlap) */
        nocR.style.left = "100%";
        nocR.removeEventListener("click", onTpncZettaDni);
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
    isEnabledDni = 0; /* FIXME: dniY.isActive = 0; */
    /* TODO: comment - = * */
  }
}
/* ===== SNI ===== */ /* FIXME: handleSniY() */
function onTpncZettaSni() {
  const sncR = document.querySelector(".snc-r");
  const rpb = document.querySelector("#rpb");
  /* !!! v1.1.12a [tmp] */
  const sectionR = document.querySelector(".section-r");

  /* !!! v1.1.12a [tmp] [pro] (nav-overlap) */
  const nocR = document.querySelector(".noc-r");
  /* !!! v1.1.13a [test] (scroll-overlap) */
  const tpncYottaBept = document.querySelector(".tpnc-y-bept");

  if (!isEnabledSni) { /* Enabling */
    sncR.style.right = "0%";
    if (activeMode === 1) { /* Mobile */
      setTpncZettaSniIr(true);
      if (isEnabledDni) { /* Deactive [DNI] */ 
        onTpncZettaDni();
      }
      /* !!! v1.1.12a [tmp] */
      /* const scrollPositionY = sectionR.scrollTop;
      sectionR.spy = scrollPositionY;
      sectionR.style.overflowY = "hidden";
      sectionR.style.top = -scrollPositionY + 4 * 16 + "px";
      console.log(scrollPositionY); */
      /* !!! v1.1.12a [tmp] [pro] (nav-overlap) */
      nocR.style.left = "0%";
      nocR.addEventListener("click", onTpncZettaSni);
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
    isEnabledSni = 1;
  } else { /* Disabling & Init */
    if (activeMode == 1) { /* Mobile */
      setTpncZettaSniIr(false);
      sncR.style.right = "-80%";
      
      _resetSncR();

      /* !!! v1.1.12a [tmp] [pro] (nav-overlap) */
      nocR.style.left = "-20%";
      nocR.removeEventListener("click", onTpncZettaSni);
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
    isEnabledSni = 0;
  }
}
/*function _resetSncZ(sncZ) { /* !!! v1.1.11a [tmp] [del] 
  for (let i = 0; i < sncZ.length; i++) {
    if (sncZ[i].isActive) {
      let eData = {
        currentTarget: sncZ[i]
      };
      switch (activeMode) {
        case 1:
          handleMdtSncZettaBept(eData);
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
          /* Error 
          break;
      }
    }
  }
}*/
function _resetSncR() {
  const sncZettaBpt = document.querySelectorAll(".snc-r .snc-z-bpt");
  for (let i = 0; i < sncZettaBpt.length; i++) {
    if (sncZettaBpt[i].isActive) {
      let eData = {
        currentTarget: sncZettaBpt[i]
      };
      switch (activeMode) {
        case 1:
          onMdtSncZettaBpt(eData);
          break;
        case 2:
          //handleTdtSncZettaBpt(eData);
          break;
        case 3:
          //handleDdtSncZettaBpt(eData);
          break;
        default:
          break;
      }
    }
  }
}
function _resetDncR() {
  const dncZettaBpt = document.querySelectorAll(".dnc-r .dnc-z-bpt");
  for (let i = 0; i < dncZettaBpt.length; i++) {
    if (dncZettaBpt[i].isActive) {
      let eData = {
        currentTarget: dncZettaBpt[i]
      };
      switch (activeMode) {
        case 1:
          onMdtDncZettaBpt(eData);
          break;
        case 2:
          //handleTdtSncZettaBpt(eData);
          break;
        case 3:
          //handleDdtSncZettaBpt(eData);
          break;
        default:
          break;
      }
    }
  }
}
/* function _resetDncY(dncY, dncZ) { /* !!! v1.1.11a [tmp] [del]
  for (let i = 0; i < dncY.length; i++) {
    if (dncY[i].isActive) {
      let eData = {
        currentTarget: dncZ[i]
      };
      switch (activeMode) {
        case 1:
          /* handleMobileDncZ(eData); 
          onMdtDncZettaBept(eData);
          break;
        default:
          /* Error 
          break;
      }
    }
  }
} */
/* ===== DNC ===== */
/* ----- Mobile ----- */
/* function handleMobileDncZ(event) { !!! v1.1.13a [del] (replaced)
  const eCurrentTarget = event.currentTarget;
  const idx = eCurrentTarget.index;

  const dncZettaTitleZB = eCurrentTarget.querySelector(".dnc-z-title");
  const dncZettaRightIconZB = eCurrentTarget.querySelector(".dnc-z-right-icon");
  const dncZettaBottomLineZB = eCurrentTarget.querySelector(".dnc-z-bottom-line");

  const dncY = document.querySelectorAll(".dnc-r .dnc-y");
  const dncExaEB = dncY[idx].querySelector(".dnc-e");

  const dncPetaTitleEB = dncExaEB.querySelectorAll(".dnc-p-title");
  const dncPetaRightIconEB = dncExaEB.querySelectorAll(".dnc-p-right-icon");
  const dncPetaBottomLineEB = dncExaEB.querySelectorAll(".dnc-p-bottom-line");

  if (!dncY[idx].isActive) { /* Activate 
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
  } else { /* Deactivate 
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
} */
function onMdtDncZettaBpt(event) {
  const eCurrentTarget = event.currentTarget;
  const idx = eCurrentTarget.idx;

  const dncY = document.querySelectorAll(".dnc-r .dnc-y");
  const dncExaEB = dncY[idx].querySelector(".dnc-e");

  const dncZettaBptTitleZB = dncY[idx].querySelector(".dnc-z-bpt-title");
  const dncZettaBptRrZB = dncY[idx].querySelector(".dnc-z-bpt-rr");
  const dncZettaBptBrZB = dncY[idx].querySelector(".dnc-z-bpt-br");

  const dncTeraTitleEB = dncExaEB.querySelectorAll(".dnc-t-title");
  const dncTeraRrEB = dncExaEB.querySelectorAll(".dnc-t-rr");
  const dncTeraBrEB = dncExaEB.querySelectorAll(".dnc-t-br");

  if (!eCurrentTarget.isActive) { /* Activate */
    dncZettaBptTitleZB.style.fontWeight = "700";
    dncZettaBptRrZB.style.transform = "rotate(180deg)";
    dncZettaBptBrZB.style.left = "15%";
    dncZettaBptBrZB.style.width = "70%";

    dncY[idx].style.backgroundColor = "#333333";

    for (let i = 0; i < dncTeraTitleEB.length; i++) {
      dncTeraTitleEB[i].style.opacity = "1";
      dncTeraRrEB[i].style.opacity = "1";
      dncTeraBrEB[i].style.opacity = "1";

      _calcBottomLine(dncTeraTitleEB[i], dncTeraBrEB[i], 20);
    }
    dncExaEB.style.gridTemplateRows = calcGridTemplateData(dncTeraTitleEB, 4);

    eCurrentTarget.isActive = 1;
  } else { /* Deactivate */
    dncZettaBptTitleZB.style.fontWeight = "400";
    dncZettaBptRrZB.style.transform = "rotate(0deg)";
    dncZettaBptBrZB.style.left = "50%";
    dncZettaBptBrZB.style.width = "0%";

    dncY[idx].style.backgroundColor = "#222222";

    for (let i = 0; i < dncTeraTitleEB.length; i++) {
      dncTeraTitleEB[i].style.opacity = "0";
      dncTeraRrEB[i].style.opacity = "0";
      dncTeraBrEB[i].style.opacity = "0";
    }
    dncExaEB.style.gridTemplateRows = calcGridTemplateData(dncTeraTitleEB, 0);

    eCurrentTarget.isActive = 0;
  }
}
/* ----- Tablet ----- */
function handleTabletDncZ(event) {
  const eCurrentTarget = event.currentTarget;
  const idx = eCurrentTarget.index;
  const dncY = document.querySelectorAll(".dnc-r .dnc-y");
  const dncE = document.querySelectorAll(".dnc-r .dnc-e");

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
function handleDesktopDncY(event) {
  /* Event */
  const eType = event.type;
  const eCurrentTarget = event.currentTarget;

  const idx = eCurrentTarget.index;
  const dncY = document.querySelectorAll(".dnc-r .dnc-y");
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
function handleMobileSncZ(event) {
  const eCurrentTarget = event.currentTarget;
  const idx = eCurrentTarget.idx;

  const sncY = document.querySelectorAll(".snc-r .snc-y");
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

      _calcBottomLine(sncPetaTitleEB[i], sncPetaBottomLineEB[i], 20);
    }
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
/* !!! v1.1.13a [test] */
function onMdtSncZettaBpt(event) {
  const eCurrentTarget = event.currentTarget;
  const idx = eCurrentTarget.idx;

  const sncY = document.querySelectorAll(".snc-r .snc-y");
  const sncExaEB = sncY[idx].querySelector(".snc-e");

  const sncZettaBptTitleZB = sncY[idx].querySelector(".snc-z-bpt-title");
  const sncZettaBptRrZB = sncY[idx].querySelector(".snc-z-bpt-rr");
  const sncZettaBptBrZB = sncY[idx].querySelector(".snc-z-bpt-br");

  const sncTeraTitleEB = sncExaEB.querySelectorAll(".snc-t-title");
  const sncTeraRrEB = sncExaEB.querySelectorAll(".snc-t-rr");
  const sncTeraBrEB = sncExaEB.querySelectorAll(".snc-t-br");

  if (!eCurrentTarget.isActive) { /* Activate */
    sncZettaBptTitleZB.style.fontWeight = "700";
    sncZettaBptRrZB.style.transform = "rotate(180deg)";
    sncZettaBptBrZB.style.left = "15%";
    sncZettaBptBrZB.style.width = "70%";

    sncY[idx].style.backgroundColor = "#333333";

    for (let i = 0; i < sncTeraTitleEB.length; i++) {
      sncTeraTitleEB[i].style.opacity = "1";
      sncTeraRrEB[i].style.opacity = "1";
      sncTeraBrEB[i].style.opacity = "1";

      _calcBottomLine(sncTeraTitleEB[i], sncTeraBrEB[i], 20);
    }
    sncExaEB.style.gridTemplateRows = calcGridTemplateData(sncTeraTitleEB, 4);

    eCurrentTarget.isActive = 1;
  } else { /* Deactivate */
    sncZettaBptTitleZB.style.fontWeight = "400";
    sncZettaBptRrZB.style.transform = "rotate(0deg)";
    sncZettaBptBrZB.style.left = "50%";
    sncZettaBptBrZB.style.width = "0%";

    sncY[idx].style.backgroundColor = "#222222";

    for (let i = 0; i < sncTeraTitleEB.length; i++) {
      sncTeraTitleEB[i].style.opacity = "0";
      sncTeraRrEB[i].style.opacity = "0";
      sncTeraBrEB[i].style.opacity = "0";
    }
    sncExaEB.style.gridTemplateRows = calcGridTemplateData(sncTeraTitleEB, 0);

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

  const sncY = document.querySelectorAll(".snc-r .snc-y");

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

  const prcYottaScpt = document.querySelector(".prc-r .prc-y-scpt");
  const prcYottaTipt = document.querySelector(".prc-r .prc-y-tipt");
  prcYottaScpt.style.height = Math.round(scrollProgress) + "%";
  prcYottaTipt.style.height = Math.round(scrollProgress) + "%";

}

export {
  handleTabletDncZ,
  handleDesktopDncY,
  handleDesktopDncP,

  handleMobileSncZ,
  handleTabletSncZ,
  handleDesktopSncZ,
  handleDesktopSncP,

  /* !!! v1.1.13a [test] */
  /* on Mdt((m)Mobile (dt)Display Type) Snc(Support Navigation Class)
     Zetta Bept((be)Beryllium (pt)Periodic Table)
     onMobileSncZettaBeryllium
  */
  onMdtSncZettaBpt,
  onMdtDncZettaBpt,

  onTpncZettaDni,
  onTpncZettaSni,

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
