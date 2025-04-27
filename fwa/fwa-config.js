/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
class FwaConfig {
  /* Manual Configuration */
  static activeLog = true; /* Default: false */
  /* Auto Configuration */
  static isLoad = false;
  static currentDisplayType = 0;
  static previousDisplayType = 0;
}
export {
  FwaConfig
};
/* DESCRIPTION
 * FWA: Facooya Web Application
 * activeLog: Boolean (false)
 * 
 * isLoad: Boolean (false)
 *   fwa-class.js -> FwaManager -> event()
 * currentDt: Number (0)
 * previousDt: Number (0)
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */