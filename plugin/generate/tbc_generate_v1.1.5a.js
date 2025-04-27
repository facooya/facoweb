/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Top bar
 */
/* DESCRIPTION
 * +[TBC] {Top Bar Compose} (tbc) tbcGenerate().
 * +[RMT] {Related Menu Toggle} (rmt) "rmt".
 * +[FMT] {Facooya Menu Toggle} (fmt) "fmt".
 * +
 * +[TMG] {Top Menu Graphic} (tmg) tmgGenerate().
 * +[TNG] {Top Name Graphic} (tng) tngGenerate().
 */
/* IMPORT
 * %[Import] {generate_module_v1.1.5a.js} (tmgGenerate, tngGenerate)
 */
import {tmgGenerate, tngGenerate} from "./generate_module_v1.1.5a.js";
/* CODE
 */
tbcGenerate();
/* FUNCTION
 * %[Unit] {Byte}
 * @[Function] {tbcGenerate} DESCRIPTION: "+[TBC]".
 * @
 * @[Local] {Element} (_PARENT) Element ID: "top_bar_compose".
 * @
 * @[Description]
 * Bit function assembly.
 */
function tbcGenerate(){
  const _PARENT = document.getElementById("top_bar_compose");
  tmgGenerate("rmt", _PARENT);
  tngGenerate("Facooya", _PARENT);
  tmgGenerate("fmt", _PARENT);
}
/* HTML
<header id="compose_frame">
  <div id="top_bar_compose">
    <!-- tbcGenerate(); -->
    <!-- tmgGenerate("rmt",_TOP_BAR_COMPOSE); -->
    <div id="tbc_rmt_container">
      <div id="tbc_rmt_bg">
        <span class="tbc_rmt_sg"></span>
        <span class="tbc_rmt_sg"></span>
        <span class="tbc_rmt_sg"></span>
      </div>
    </div>
    <!-- tngGenerate("Facooya",_TOP_BAR_COMPOSE); -->
    <div id="tbc_facooya">
      <a id="tbc_facooya_link" href="/">Facooya</a>
    </div>
    <!-- tmgGenerate("fmt",_TOP_BAR_COMPOSE); -->
    <div id="tbc_fmt_container">
      <div id="tbc_fmt_bg">
        <span class="tbc_fmt_sg"></span>
        <span class="tbc_fmt_sg"></span>
        <span class="tbc_fmt_sg"></span>
      </div>
    </div>
  </div>
  <!-- ... -->
</header>
 */
/* INFORMATION
 * %[File] {tbc_generate_v1.1.5a.js}
 * %[Unit] {Byte}
 * @[Author] {Facooya} (Owner)
 * @[Version] {1.1.5} (Alpha)
 * @[Since] {Dec/13/2023} (UTC+0)
 * @[Update] {Dec/15/2023} (UTC+0) Last update.
 */
