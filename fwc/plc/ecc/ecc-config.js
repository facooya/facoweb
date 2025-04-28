/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
class EccData {

}
class EccElement {
  static elementPrcoGroup = [
    {
      id: "yottaPrco",
      tag: "div",
      selector: "ecc-y-prco"
    },
    {
      id: "zettaPrcoLgro",
      tag: "div",
      selector: "ecc-z-prco ecc-z-prco-lgro"
    },
    {
      id: "zettaPrcoRgro",
      tag: "div",
      selector: "ecc-z-prco ecc-z-prco-rgro"
    }
  ];
  static elementNocoGroup = [
    {
      id: "yottaNoco",
      tag: "div",
      selector: "ecc-y-noco"
    },
    {
      id: "zettaNocoSdo",
      tag: "div",
      selector: "ecc-z-noco-sdo"
    }
  ];
}
class EccConfig {
  static elementPrcoGroup = EccElement.elementPrcoGroup;
  static elementNocoGroup = EccElement.elementNocoGroup;
}
export {
  EccConfig
};
/* DESCRIPTION
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */