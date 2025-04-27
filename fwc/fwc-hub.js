/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
/* ================================================== */
import {
  FwcController,
  FwcUtility
} from "./fwc-class.js";
import {
  TpncController,
  TpncManager,
  TpncHandler,
  TpncUtility
} from "./plc/tpnc/tpnc-class.js";
import {
  DncController,
  DncManager,
  DncHandler,
  DncUtility
} from "./plc/dnc/dnc-class.js";
import {
  SncController,
  SncManager,
  SncHandler,
  SncUtility
} from "./plc/snc/snc-class.js";
import {
  EccController,
  EccManager,
  EccHandler,
  EccUtility
} from "./plc/ecc/ecc-class.js";
import {
  NplcController,
  NplcManager,
  NplcHandler,
  NplcUtility
} from "./nplc/nplc-class.js";
/* ================================================== */
export {
  /* FWC */
  FwcController,
  FwcUtility,
  /* TPNC */
  TpncController,
  TpncManager,
  TpncHandler,
  TpncUtility,
  /* DNC */
  DncController,
  DncManager,
  DncHandler,
  DncUtility,
  /* SNC */
  SncController,
  SncManager,
  SncHandler,
  SncUtility,
  /* ECC */
  EccController,
  EccManager,
  EccHandler,
  EccUtility,
  /* NPLC */
  NplcController,
  NplcManager,
  NplcHandler,
  NplcUtility
};
/* ================================================== */
/* DESCRIPTION
 * Manage import export in FWC.
 * class file only.
 * 
 * C: Component
 * NC: Navigate C
 * FWC: Facooya Web C
 * TPNC: Top Panel NC
 * DNC: Development NC
 * SNC: Support NC
 * ECC: Et Cetera C
 * NPLC: Navigate Page Layout C
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */