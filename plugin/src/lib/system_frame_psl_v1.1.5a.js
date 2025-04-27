/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * System frame
 */
import {tbc_initialize,top_menu_initialize} from "./initialize_module_v1.1.5a.js";
import {top_menu_event} from "./event_module_v1.1.5a.js";
/* === System === */
function load(){ /* - Load - */
  if(matchMedia("all and (min-width:1000px)").matches){ /* - Desktop - */
    isDesktopMode=1;
    //desktop();
  }else if(matchMedia("all and (max-width:999px)").matches){ /* - Mobile - */
    isDesktopMode=0;
    //mobile();
  }
  tbc_initialize();
  top_menu_initialize();
  top_menu_event();
  //side_menu_initialization();
  //side_menu_add_event();
  console.log("System Frame Load Done");
}
function resize(){ /* - Resize - */
  if(matchMedia("all and (min-width:1000px)").matches && !isDesktopMode){ /* - Desktop - */
    isDesktopMode=1;
    tbc_initialize();
    top_menu_initialize();
  }else if(matchMedia("all and (max-width:999px)").matches && isDesktopMode){ /* - Mobile - */
    isDesktopMode=0;
    tbc_initialize();
    top_menu_initialize();
  }
}
/* ============================== */
/* === Code === */
window.addEventListener("load",load);
window.addEventListener("resize",resize);
/* ============================== */
