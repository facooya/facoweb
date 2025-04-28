/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 */
class HeccData {

}
class HeccElement {
  static heccRoot = [
    {
      elementId: "heccR",
      generate: {
        htmlTag: "div",
        htmlClass: "hecc-r"
      },
      query: {
        querySelector: ".blf-y-ho .hecc-r",
        queryType: "single"
      }
    }
  ];
  /* static elementPboGroup = [
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
  ]; */
  static heccPboGroup = [
    {
      elementId: "heccYottaPbo",
      generate: {
        htmlTag: "div",
        htmlClass: "hecc-y-pbo"
      },
      query: {
        querySelector: ".hecc-y-pbo",
        queryType: "single"
      }
    },
    {
      elementId: "heccZettaPboLgro",
      generate: {
        htmlTag: "div",
        htmlClass: "hecc-z-pbo hecc-z-pbo-lgro"
      },
      query: {
        querySelector: ".hecc-z-pbo-lgro",
        queryType: "single"
      }
    },
    {
      elementId: "heccZettaPboRgro",
      generate: {
        htmlTag: "div",
        htmlClass: "hecc-z-pbo hecc-z-pbo-rgro"
      },
      query: {
        querySelector: ".hecc-z-pbo-rgro",
        queryType: "single"
      }
    }
  ];
  /* static elementNooGroup = [
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
  ]; */
  static heccNooGroup = [
    {
      elementId: "heccYottaNoo",
      generate: {
        htmlTag: "div",
        htmlClass: "hecc-y-noo"
      },
      query: {
        querySelector: ".hecc-y-noo",
        queryType: "single"
      }
    },
    {
      elementId: "heccZettaNooSdo",
      generate: {
        htmlTag: "div",
        htmlClass: "hecc-z-noo-sdo"
      },
      query: {
        querySelector: ".hecc-z-noo-sdo",
        queryType: "single"
      }
    }
  ];
  static heccAppend(getSaveElement, heccFragment) {
    getSaveElement["heccYottaPbo"].append(
      getSaveElement["heccZettaPboLgro"],
      getSaveElement["heccZettaPboRgro"]
    );
    getSaveElement["heccYottaNoo"].append(
      getSaveElement["heccZettaNooSdo"]
    );
    heccFragment.append(
      getSaveElement["heccYottaPbo"],
      getSaveElement["heccYottaNoo"]
    );
  }
}
class HeccConfig {
  /* static elementPboGroup = HeccElement.elementPboGroup;
  static elementNooGroup = HeccElement.elementNooGroup; */
  static heccRoot = HeccElement.heccRoot;
  static heccPboGroup = HeccElement.heccPboGroup;
  static heccNooGroup = HeccElement.heccNooGroup;
  /*  */
  static heccAppend(getSaveElement, heccFragment) {
    HeccElement.heccAppend(getSaveElement, heccFragment);
  }
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