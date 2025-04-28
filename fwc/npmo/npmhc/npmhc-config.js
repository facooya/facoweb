/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
class NpmhcData {

}
class NpmhcElement {
  static npmhcRoot = [
    {
      elementId: "npmhcR",
      query: {
        querySelector: ".blf-y-npmo .npmhc-r",
        queryType: "single"
      }
    }
  ];
  static npmhcTloGroup = [
    {
      elementId: "npmhcYottaTlo",
      query: {
        querySelector: ".npmhc-y-tlo",
        queryType: "single"
      }
    },
    {
      elementId: "npmhcZettaTloText",
      query: {
        querySelector: ".npmhc-z-tlo-text",
        queryType: "single"
      }
    },
    {
      elementId: "npmhcZettaTloBgro",
      query: {
        querySelector: ".npmhc-z-tlo-bgro",
        queryType: "single"
      }
    }
  ];
  static npmhcTnoGroup = [
    {
      elementId: "npmhcYottaTno",
      query: {
        querySelector: ".npmhc-y-tno",
        queryType: "single"
      }
    },
    {
      elementId: "npmhcZettaTno",
      query: {
        querySelector: ".npmhc-z-tno",
        queryType: "single"
      }
    },
    {
      elementId: "npmhcExaTno",
      query: {
        querySelector: ".npmhc-e-tno",
        queryType: "all"
      }
    },
    {
      elementId: "npmhcPetaTno",
      query: {
        querySelector: ".npmhc-p-tno",
        queryType: "all"
      }
    },
    {
      elementId: "npmhcTeraTnoText",
      query: {
        querySelector: ".npmhc-t-tno-text",
        queryType: "all"
      }
    },
    {
      elementId: "npmhcTeraTnoGro",
      query: {
        querySelector: ".npmhc-t-tno-gro",
        queryType: "all"
      }
    }
  ];
}
class NpmhcConfig {
  static npmhcRoot = NpmhcElement.npmhcRoot;
  static npmhcTloGroup = NpmhcElement.npmhcTloGroup;
  static npmhcTnoGroup = NpmhcElement.npmhcTnoGroup;
}
export {
  NpmhcConfig
};
/* NOTE
 */
/* AUTHORSHIP
 * Founder: Facooya
 */
