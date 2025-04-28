/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
class BlfElement {
  static blfRoot = [
    {
      elementId: "blfR",
      query: {
        querySelector: ".blf-r",
        queryType: "single"
      }
    }
  ];
  static blfGroup = [
    {
      elementId: "blfYottaHo",
      query: {
        querySelector: ".blf-y-ho",
        queryType: "single"
      }
    },
    {
      elementId: "blfYottaNpmo",
      query: {
        querySelector: ".blf-y-npmo",
        queryType: "single"
      }
    },
    {
      elementId: "blfYottaFo",
      query: {
        querySelector: ".blf-y-fo",
        queryType: "single"
      }
    }
  ];
}
class BlfConfig {
  static blfRoot = BlfElement.blfRoot;
  static blfGroup = BlfElement.blfGroup;
}
export {
  BlfConfig
};
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
