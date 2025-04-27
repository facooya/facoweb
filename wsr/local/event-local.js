/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
function _toggleDNI() {
  if (isOpenDNI) {
    _transformDNI_(isOpenDNI);
    DEV_NAV_CMP.style.left = "-25rem";
    isOpenDNI = 0;
  } else {
    _transformDNI_(isOpenDNI);
    DEV_NAV_CMP.style.left = "0rem";
    isOpenDNI = 1;
  }
  logf(0, "wsr/lib/utils/event-utils.js", "_toggleDNI", isOpenDNI);
}
function _toggleSNI() {
  if (isOpenSNI) { /* Close: isOpenSNI 1 */
    _transformSNI_(isOpenSNI);
    SUB_NAV_CMP.style.right = "-25rem";
    isOpenSNI = 0;
  } else { /* Open: isOpenSNI 0 */
    _transformSNI_(isOpenSNI);
    SUB_NAV_CMP.style.right = "0rem";
    isOpenSNI = 1;
  }
  logf(0, "wsr/lib/utils/event-utils.js", "_toggleSNI", isOpenSNI);
}
function _enterDNC(event) {
  const _index = event.currentTarget.index;
  const _DNC_SUB_ITEM_ = event.currentTarget.querySelectorAll(".dnc-sub-item");
  DNC_SUB_CONTAINER[_index].style.height = (4 * _DNC_SUB_ITEM_.length) + "rem";
}
function _leaveDNC(event) {
  const _index = event.currentTarget.index;
  DNC_SUB_CONTAINER[_index].style.height = "0rem";
}
function _transformDNI_(isOpen) {
  const _TBC_DNI_SG__ = document.getElementsByClassName("tbc-dni-sg");
  if (isOpen) { /* Close: isOpenDNI 1 */
    _TBC_DNI_SG__[0].style.top = "0rem";
    _TBC_DNI_SG__[0].style.transform = "rotate(0deg)";
    _TBC_DNI_SG__[1].style.opacity = "1";
    _TBC_DNI_SG__[1].style.left = "0%";
    _TBC_DNI_SG__[2].style.top = "1.75rem";
    _TBC_DNI_SG__[2].style.transform = "rotate(0deg)";
  } else { /* Open: isOpenDNI 0 */
    _TBC_DNI_SG__[0].style.top = "0.875rem";
    _TBC_DNI_SG__[0].style.transform = "rotate(45deg)";
    _TBC_DNI_SG__[1].style.opacity = "0";
    _TBC_DNI_SG__[1].style.left = "-100%";
    _TBC_DNI_SG__[2].style.top = "0.875rem";
    _TBC_DNI_SG__[2].style.transform = "rotate(-45deg)";
  }
}
function _transformSNI_(isOpen) {
  const _TBC_SNI_SG__ = document.getElementsByClassName("tbc-sni-sg");
  if (isOpen) { /* Close: isOpenSNI 1 */
    _TBC_SNI_SG__[0].style.top = "0rem";
    _TBC_SNI_SG__[0].style.transform = "rotate(0deg)";
    _TBC_SNI_SG__[1].style.opacity = "1";
    _TBC_SNI_SG__[1].style.right = "0%";
    _TBC_SNI_SG__[2].style.top = "1.75rem";
    _TBC_SNI_SG__[2].style.transform = "rotate(0deg)";
  } else { /* Open: isOpenSNI 0 */
    _TBC_SNI_SG__[0].style.top = "0.875rem";
    _TBC_SNI_SG__[0].style.transform = "rotate(45deg)";
    _TBC_SNI_SG__[1].style.opacity = "0";
    _TBC_SNI_SG__[1].style.right = "-100%";
    _TBC_SNI_SG__[2].style.top = "0.875rem";
    _TBC_SNI_SG__[2].style.transform = "rotate(-45deg)";
  }
}
function _activeItemDNC(event) {
  const ect = event.currentTarget;
  const _index = event.currentTarget.index;
  if (!isActiveItemDNC[_index]) {
    const _DNC_SUB_ITEM_ = event.currentTarget.querySelectorAll(".dnc-sub-item");
    DNC_SUB_CONTAINER[_index].style.height = (
      4.125 * (_DNC_SUB_ITEM_.length) - 0.125
    ) + "rem";
    isActiveItemDNC[_index] = 1;
  } else { // isActiveItemDNC[_index] == 1 && ? snc-container-title ?
    DNC_SUB_CONTAINER[_index].style.height = "0rem";
    isActiveItemDNC[_index] = 0;
  }
}
function _activeItemSNC(event) {
  const ect = event.currentTarget;
  //const _index = evt.index;
  //let _isActive = evt.isActive;
  if (!ect.isActive) {
    const _SNC_SUB_ITEM_ = ect.querySelectorAll(".snc-sub-item");
    const _HEIGHT_CALC_ = 4.125 * (_SNC_SUB_ITEM_.length + 1) - 0.125;
    SNC_CONTAINER[ect.index].style.height = _HEIGHT_CALC_ + "rem";
    ect.isActive = 1;
  } else { // isActiveItemSNC[_index] == 1 && ?
    SNC_CONTAINER[ect.index].style.height = "4rem";
    
    ect.isActive = 0;
  }
}

export {
  _toggleDNI,
  _toggleSNI,
  _enterDNC,
  _leaveDNC,
  _activeItemDNC,
  _activeItemSNC
};
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */