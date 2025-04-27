/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* Mode 0: Desktop, Mode 1: Mobile */
let activeMode = 0;
let prevMode = 0;
/**//* sys/init/share.js */
const TBC_DMI_SG=document.getElementsByClassName("tbc-dmi-sg");
const TBC_SMI_SG=document.getElementsByClassName("tbc-smi-sg");
const DMC=document.getElementById("dev-menu-cmp");
const SMC=document.getElementById("sub-menu-cmp");
/**//* sys/event/event-util.js */
const DMC_CONTAINER=document.getElementsByClassName("dmc-container");
const SMC_CONTAINER=document.getElementsByClassName("smc-container");
/**/
const TBC_DMI_CONTAINER=document.getElementById("tbc-dmi-container");
const TBC_SMI_CONTAINER=document.getElementById("tbc-smi-container");
/* --- Open ? True=1, False=0 - */
let isDMI = 0;
let isSMI = 0;
/**/
const PART_CMP=document.getElementById("part-cmp");
/* --- Get Element --- */


const tbc_rmt_bg=document.getElementById("tbc-rmt-bg");
const tbc_fmt_bg=document.getElementById("tbc-fmt-bg");
/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */
const document_frame=document.getElementById("document-cmp");

console.log("PART VAR DONE");
/* INFORMATION
 * @[Author] {Facooya} (Owner)
 */