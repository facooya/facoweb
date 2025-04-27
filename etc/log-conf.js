/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
function logf(status, path, id, result) {
  if (ACTIVE_CONSOLE) {
    let _str = (status == 0) ? "[OK] " : "[FAIL] ";
    _str += "{.../" + path + "} ";
    _str += "(" + id +") ";
    _str += ": " + result;
    console.log(_str);
  }
}
const ACTIVE_CONSOLE = 1;

/* DESCRIPTION
 * @[Function] {logf} (log function) Modular log.
 * @[Param] {Number} (status) 0: OK, 1: FAIL, Else: FAIL
 * @[Param] {String} (path) O: path/..., X: /path/...
 * @[Param] {String} (id) Value name, Any
 * @[Param] {Any} (result) Value, Message 
 * 
 * @[Value] {Const} (ACTIVE_CONSOLE) 0: Inactive, 1: Active, Else: Active
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */
