/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  FwcAccessor
} from "../fwc-hub.js";
import {
  BlfConfig
} from "./blf-config.js";
class BlfAccessor {
  static blfCache = {};
  static getBlfGroup() {
    return BlfGet.getBlfGroup();
  }
}
class BlfController {

}
class BlfGet {
  static getBlfRoot() {
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      BlfAccessor.blfCache,
      BlfConfig.blfRoot
    );
    return saveVerifyGroup;
  }
  static getBlfGroup() {
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      BlfAccessor.blfCache,
      BlfConfig.blfGroup
    );
    return saveVerifyGroup;
  }
}
export {
  BlfAccessor,
  BlfController
};
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
