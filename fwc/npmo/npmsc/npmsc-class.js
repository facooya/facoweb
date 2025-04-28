/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
import {
  NpmscConfig
} from "./npmsc-config.js";
import {
  FwcAccessor
} from "../../fwc-hub.js";
class NpmscAccessor {
  static npmscCache = {};
  static getNpmscRoot() {
    return NpmscGet.getNpmscRoot();
  }
  static getNpmscGroup() {
    return NpmscGet.getNpmscGroup();
  }
}
class NpmscController {
  static process() {

  }
  static processOnLoad() {

  }
  static processOnResize() {

  }
}
class NpmscManager {

}
class NpmscHandler {

}
class NpmscGet {
  static getNpmscRoot() {
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      NpmscAccessor.npmscCache,
      NpmscConfig.npmscRoot
    );
    return saveVerifyGroup;
  }
  static getNpmscGroup() {
    const {
      npmscR
    } = NpmscGet.getNpmscRoot();
    const saveVerifyGroup = FwcAccessor.getVerifyCache2(
      NpmscAccessor.npmscCache,
      NpmscConfig.npmscGroup,
      npmscR
    );
    return saveVerifyGroup;
  }
}
class NpmscSet {

}
export {
  NpmscAccessor,
  NpmscController
};
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
