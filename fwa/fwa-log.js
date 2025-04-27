/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  FwaConfig
} from "./fwa-config.js";
class FwaLog {
  static logb(symbol, iteration) {
    if (FwaConfig.activeLog) {
      let loglData = "";
      for (let i = 0; i < iteration; i++) {
        loglData += symbol;
      }
      console.log(loglData);
    }
  }
  static logd(status, path, info, state) {
    if (FwaConfig.activeLog) {
      let logdData = "";
      if (status) {
        logdData = "[OK]";
      } else {
        logdData = "[FAIL]";
      }
      logdData += " " + "{.../" + path + "}" + " ";
      logdData += "(" + info + ")" + " ";
      logdData += ":" + " " + state;
      console.log(logdData);
    }
  }
}
export {
  FwaLog
};
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */