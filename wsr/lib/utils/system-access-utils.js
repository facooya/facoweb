/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
function getActivePage() {
  const _pageValue = {
    "layout-home-container": 1,
    "layout-part-container": 2,
    "layout-doc-container": 3
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
    "(max-width: 600px)": 1,
    "(min-width: 601px) and (max-width: 1024px)": 2,
    "(min-width: 1025px)": 3
  };
  for (let key in _modeValue) {
    if (window.matchMedia(key).matches) {
      return _modeValue[key];
    }
  }
  return -1;
}
/*function getPathSNC() {
  //getCode
  //_code 1 01 01 000
  let _code = document.body.id;
  let _path = "../../../../v1.1.6a/var/lib/nav/snc/"
  switch(_code) {
    case "1101":
      return _path += "programming/c-data-snc.js";
    case "1102":
      return _path += "programming/cpp-data-snc.js";
    case "5555": 
      return 5555;
    case "7777": 
      return _path += "temporary/tmp-data-snc.js";
    default: 
      return 5555;
  }
}*/
export {
  getActivePage,
  getActiveMode
  //getPathSNC
};
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */