/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* Value: Mode */
let activeMode = 0;
let prevMode = 0;
/* Value: isEnabled */
let isEnabledDNI = 0; /* isEnabledDNI */
let isEnabledSNI = 0;
/* Element: TBC */
const TBC_DNI_CONTAINER = document.getElementById("tbc-dni-container");
const TBC_SNI_CONTAINER = document.getElementById("tbc-sni-container");
/* Element: DNC */
const DEV_NAV_CMP = document.getElementById("dev-nav-cmp");
const DNC_CONTAINER = document.getElementsByClassName("dnc-container");
const DNC_SUB_CONTAINER = document.getElementsByClassName("dnc-sub-container");
/* Element: SNC */
const SUB_NAV_CMP = document.getElementById("sub-nav-cmp");
const SNC_CONTAINER = document.getElementsByClassName("snc-container");
const SNC_SUB_CONTAINER = document.getElementsByClassName("snc-sub-container");
/* Value: Active (Array) */
let isActiveItemDNC = new Array(DNC_CONTAINER.length).fill(0);
//let isActiveItemSNC = new Array(SNC_CONTAINER.length).fill(0);


/* DESCRIPTION
 * @[Value] {Number} (activeMode) 1: Mobile, 2: Tablet, 3: Desktop, Else: Error
 * @[Value] {Number} (prevMode) prevMode = activeMode
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */
