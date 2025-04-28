/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
class HeccData {

}
class HeccElement {
  static elementPboGroup = [
    {
      id: "yottaPbo",
      tag: "div",
      selector: "hecc-y-pbo"
    },
    {
      id: "zettaPboLgro",
      tag: "div",
      selector: "hecc-z-pbo hecc-z-pbo-lgro"
    },
    {
      id: "zettaPboRgro",
      tag: "div",
      selector: "hecc-z-pbo hecc-z-pbo-rgro"
    }
  ];
  static elementNooGroup = [
    {
      id: "yottaNoo",
      tag: "div",
      selector: "hecc-y-noo"
    },
    {
      id: "zettaNooSdo",
      tag: "div",
      selector: "hecc-z-noo-sdo"
    }
  ];
}
class HeccConfig {
  static elementPboGroup = HeccElement.elementPboGroup;
  static elementNooGroup = HeccElement.elementNooGroup;
}
export {
  HeccConfig
};
/* DESCRIPTION
 * PBO: Progress Bar Object
 * NOO: Navigation Overlay Object
 * GRO: Geometric Rendering Object
 */
/* INFORMATION
 * @[Author] {Facooya} (Founder)
 */