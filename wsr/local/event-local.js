/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
function _enabledDNI() {
  if (isEnabledDNI) {
    _transformDNI_(isEnabledDNI);
    DEV_NAV_CMP.style.left = "-80%";
    isEnabledDNI = 0;
  } else {
    _transformDNI_(isEnabledDNI);
    DEV_NAV_CMP.style.left = "0%";
    isEnabledDNI = 1;
  }
  logf(0, "wsr/lib/utils/event-utils.js", "_enabledDNI", isEnabledDNI);
}
function _enabledSNI() {
  if (isEnabledSNI) { /* Close: isOpenSNI 1 */
    _transformSNI_(isEnabledSNI);
    if (activeMode == 1) {
      SUB_NAV_CMP.style.right = "-80%";
    } else {
      SUB_NAV_CMP.style.right = "-25rem";
    }
    isEnabledSNI = 0;
  } else { /* Open: isOpenSNI 0 */
    _transformSNI_(isEnabledSNI);
    SUB_NAV_CMP.style.right = "0%";
    isEnabledSNI = 1;
  }
  logf(0, "wsr/lib/utils/event-utils.js", "_enabledSNI", isEnabledSNI);
}
function _enterDNC(event) {
  const ect = event.currentTarget;
  const _DNC_SUB_ITEM_ = ect.querySelectorAll(".dnc-sub-item");
  const _HEIGHT_RESULT_ = 4 * _DNC_SUB_ITEM_.length;
  DNC_SUB_CONTAINER[ect.index].style.height = _HEIGHT_RESULT_ + "rem";
  DNC_SUB_CONTAINER[ect.index].style.width = "18rem";
}
function _leaveDNC(event) {
  const ect = event.currentTarget;
  DNC_SUB_CONTAINER[ect.index].style.height = "0rem";
  DNC_SUB_CONTAINER[ect.index].style.width = "10rem";
}
function _transformDNI_(isEnabled) {
  const _TBC_DNI_SG__ = document.getElementsByClassName("tbc-dni-sg");
  if (isEnabled) { /* Close: isOpenDNI 1 */
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
function _transformSNI_(isEnabled) {
  const _TBC_SNI_SG__ = document.getElementsByClassName("tbc-sni-sg");
  if (isEnabled) { /* Close: isOpenSNI 1 */
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
  if (!ect.isActive) {
    const _DNC_SUB_ITEM_ = event.currentTarget.querySelectorAll(".dnc-sub-item");
    DNC_SUB_CONTAINER[ect.index].style.height = (
      4.125 * (_DNC_SUB_ITEM_.length) - 0.125
    ) + "rem";
    ect.isActive = 1;
  } else { // isActiveItemDNC[ect.index] == 1 && ? snc-container-title ?
    DNC_SUB_CONTAINER[ect.index].style.height = "0rem";
    ect.isActive = 0;
  }
}
function _activeItemSNC(event) {
  const ect = event.currentTarget;
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
function _activeTabletDNC(event) {
  const ect = event.currentTarget;

  /* AUTO: Close. DNC_SUB_CONTAINER */
  for (let i = 0; i < DNC_CONTAINER.length; i++) {
    if (DNC_CONTAINER[i].isActive == 1 && ect.index != i) {
      DNC_SUB_CONTAINER[i].style.height = "0rem";
      DNC_SUB_CONTAINER[i].style.width = "10rem";
      DNC_CONTAINER[i].isActive = 0;
      console.log(DNC_CONTAINER[i].isActive);
    }
  }

  /* SELECT: Open. DNC_SUB_CONTAINER */
  if (!ect.isActive) { /* Open */
    const _DNC_SUB_ITEM_ = event.currentTarget.querySelectorAll(".dnc-sub-item");
    const _HEIGHT_RESULT_ = 4 * _DNC_SUB_ITEM_.length;
    DNC_SUB_CONTAINER[ect.index].style.height = _HEIGHT_RESULT_ + "rem";
    DNC_SUB_CONTAINER[ect.index].style.width = "18rem";

    if (ect.index == 0) {
      DNC_SUB_CONTAINER[ect.index].style.left = "0%";
    } else if (ect.index == 4) {
      DNC_SUB_CONTAINER[ect.index].style.right = "0%";
    }

    ect.isActive = 1;
  } else { /* Close */
    DNC_SUB_CONTAINER[ect.index].style.height = "0rem";
    DNC_SUB_CONTAINER[ect.index].style.width = "10rem";
    ect.isActive = 0;
  }
}

export {
  _enabledDNI,
  _enabledSNI,
  _enterDNC,
  _leaveDNC,
  _activeItemDNC,
  _activeItemSNC,
  _activeTabletDNC
};
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */