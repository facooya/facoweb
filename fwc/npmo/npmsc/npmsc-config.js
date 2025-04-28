/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
class NpmscElement {
  static npmscRoot = [
    {
      elementId: "npmscR",
      query: {
        querySelector: ".blf-y-npmo .npmsc-r",
        queryType: "single"
      }
    }
  ];
  static npmscGroup = [
    {
      elementId: "npmscY",
      query: {
        querySelector: ".npmsc-y",
        queryType: "all"
      }
    },
    {
      elementId: "npmscZ",
      query: {
        querySelector: ".npmsc-z",
        queryType: "all"
      }
    },
    {
      elementId: "npmscE",
      query: {
        querySelector: ".npmsc-e",
        queryType: "all"
      }
    },
    {
      elementId: "npmscP",
      query: {
        querySelector: ".npmsc-p",
        queryType: "all"
      }
    },
    {
      elementId: "npmscTeraText",
      query: {
        querySelector: ".npmsc-t-text",
        queryType: "all"
      }
    },
    {
      elementId: "npmscTeraSubText",
      query: {
        querySelector: ".npmsc-t-sub-text",
        queryType: "all"
      }
    }
  ];
}
class NpmscConfig {
  static npmscRoot = NpmscElement.npmscRoot;
  static npmscGroup = NpmscElement.npmscGroup;
}
export {
  NpmscConfig
};
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
