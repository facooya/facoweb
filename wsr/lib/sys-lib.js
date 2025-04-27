/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
function getActivePage() {
  const _pageValue = {
    "home-core-layout": 1,
    "frame-rbrs": 2,
    "doc-core-layout": 3
  };
  for (let key in _pageValue) {
    if (document.body.classList.contains(key)) {
      return _pageValue[key];
    }
  }
  return -1;
}
function getActiveMode() {
  const _modeValue = {
    "(max-width: 767px)": 1,
    "(min-width: 768px) and (max-width: 1279px)": 2,
    "(min-width: 1280px)": 3
  };
  for (let key in _modeValue) {
    if (window.matchMedia(key).matches) {
      return _modeValue[key];
    }
  }
  return -1;
}
/* @@@ Alpha Version @@@ */
function getIdentify() {
  const identify = document.body.id;
  /* 7: Alpha, 5: Alpha 2, 3:Beta, 1: Dist */
  switch (identify) {
    case "10000000":
      //[Dist] home-page
      break;
    case "10101000":
      //[Dist] Catagory: 1-1, part-page
      break;
    case "10101101":
      //[Dist] Catagory: 1-1, doc-page-101
      break;
    case "11111111":
      //[Dist] home-page
      break;
    case "70000000":
      //[Alpha] part-page
      logf(0, "wsr/lib/utils/system-utils.js", "identify", identify);
      return;
    case "70000777":
      //[Alpha] doc-page
      logf(0, "wsr/lib/utils/system-utils.js", "identify", identify);
      return;
    case "77777777":
      //[Alpha] home-page
      logf(0, "wsr/lib/utils/system-utils.js", "identify", identify);
      return;
    default:
      logf(1, "wsr/lib/utils/system-utils.js", "identify", identify);
      return;
  }
}
/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
export {
  getActivePage,
  getActiveMode,
  getIdentify
};
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */