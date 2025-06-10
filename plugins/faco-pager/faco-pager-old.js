/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Copyright 2025 Facooya and Fanone Facooya
 *
 * Pager main
 */

const FacoPagerController = {
  init() {
    FacoPagerManager.init();
  },
  resizeSensor() {
    FacoPagerManager.resizeSensor();
  }
};

const FacoPagerManager = {
  init() {
    /* updatePageMaxIndex => updatePaginationItemGenerator */
    FacoPagerUtils.generator();
    const facoPager = document.querySelector(".faco-pager");
    facoPager.resizeSensorTimerId = 0;
    facoPager.tabIndex = 0;
    facoPager.pageIndex = 0;
    facoPager.pageMaxIndex = 0;

    /* Tab */
    FacoPagerUtils.updateTabItem();

    /* Navigation */
    FacoPagerUtils.updateNavigationList();
    FacoPagerUtils.updateNavigationItem();

    /* Pager */
    FacoPagerUtils.updatePageMaxIndex();
    FacoPagerUtils.updatePaginationItemGenerator();
    FacoPagerUtils.updatePaginationControlItem();
    FacoPagerUtils.updatePaginationItem();
    FacoPagerUtils.updatePaginationWide();

    FacoPagerManager.initEvent();
  },

  resizeSensor() {
    FacoPagerUtils.updatePaginationWide();
  },

  initEvent() {
    const paginationView = document.querySelector(".pagination-view");

    /* Tab */
    const tabItems = paginationView.querySelectorAll(".tab .item");
    for (let i = 0; i < tabItems.length; i++) {
      tabItems[i].index = i;
      tabItems[i].addEventListener("click", FacoPagerHandler.tabItemClick);
    }

    /* Pager Control */
    const controlItems = paginationView.querySelectorAll(".control-item");
    for (let i = 0; i < controlItems.length; i++) {
      controlItems[i].index = i;
      controlItems[i].addEventListener("click", FacoPagerHandler.paginationControlItemClick);
    }
  }
};

const FacoPagerHandler = {
  tabItemClick(event) {
    const paginationView = document.querySelector(".pagination-view");
    const tabIndex = paginationView.tabIndex;
    const tabItem = event.currentTarget;

    /* HMI */
    if (tabItem.index === tabIndex) { return; }

    /* Navigation Reset */
    const navigationLists = paginationView.querySelectorAll(".navigation .list");
    const navigationItems = navigationLists[tabIndex].querySelectorAll(".item");
    const active = "active";

    navigationItems.forEach(item => {
      item.classList.remove(active);
    });

    /* Configuration */
    paginationView.tabIndex = tabItem.index;
    paginationView.pageIndex = 0;
    FacoPagerUtils.updatePageMaxIndex();

    /* Tab */
    FacoPagerUtils.updateTabItem();

    /* Navigation */
    FacoPagerUtils.updateNavigationList();
    FacoPagerUtils.updateNavigationItem();

    /* Pagination */
    FacoPagerUtils.updatePaginationItemGenerator();
    FacoPagerUtils.updatePaginationItem();
    FacoPagerUtils.updatePaginationControlItem();
    FacoPagerUtils.updatePaginationWide();
  },

  paginationItemClick(event) {
    const paginationItem = event.currentTarget;
    const paginationView = document.querySelector(".pagination-view");
    paginationView.pageIndex = paginationItem.index;

    FacoPagerUtils.updateNavigationItem();
    FacoPagerUtils.updatePaginationItem();
    FacoPagerUtils.updatePaginationControlItem();
  },

  paginationControlItemClick(event) {
    const controlItem = event.currentTarget;
    const paginationView = document.querySelector(".pagination-view");
    const pageIndex = paginationView.pageIndex;
    const pageMaxIndex = paginationView.pageMaxIndex;

    switch (controlItem.index) {
      case 0:
        if (pageIndex !== 0) {
          paginationView.pageIndex = 0;
        }
        break;

      case 1:
        if (pageIndex > 0) {
          paginationView.pageIndex--;
        }
        break;

      case 2:
        if (pageIndex < pageMaxIndex) {
          paginationView.pageIndex++;
        }
        break;

      case 3:
        if (pageIndex !== pageMaxIndex) {
          paginationView.pageIndex = pageMaxIndex;
        }
        break;
    }

    if (paginationView.pageIndex !== pageIndex) {
      FacoPagerUtils.updatePaginationItem();
      FacoPagerUtils.updatePaginationControlItem();
      FacoPagerUtils.updateNavigationItem();
    }
  },

  onResize() {
    const paginationView = document.querySelector(".pagination-view");
    clearTimeout(paginationView.resizeSensorTimerId);
    paginationView.resizeSensorTimerId = setTimeout(
      FacoPagerController.resizeSensor,
      100
    );
  }
};

const FacoPagerUtils = {
  /* Pagination View */
  updatePageMaxIndex() {
    const paginationView = document.querySelector(".pagination-view");
    const lists = paginationView.querySelectorAll(".navigation .list");
    const items = lists[paginationView.tabIndex].querySelectorAll(".item");

    /* Calculation */
    let calcPageMaxIndex = Math.floor(items.length / 5);
    if (items.length % 5 === 0) {
      calcPageMaxIndex--;
    }
    paginationView.pageMaxIndex = calcPageMaxIndex;
  },

  /* Tab */
  updateTabItem() {
    const paginationView = document.querySelector(".pagination-view");
    const items = paginationView.querySelectorAll(".tab .item");
    const texts = paginationView.querySelectorAll(".tab .text");
    const active = "active";

    /* All Inactive */
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove(active);
      texts[i].classList.remove(active);
    }

    /* Set Active */
    items[paginationView.tabIndex].classList.add(active);
    texts[paginationView.tabIndex].classList.add(active);
  },

  /* Navigation */
  updateNavigationList() {
    const paginationView = document.querySelector(".pagination-view");
    const lists = paginationView.querySelectorAll(".navigation .list");
    const active = "active";

    lists.forEach(list => {
      list.classList.remove(active);
    });
    lists[paginationView.tabIndex].classList.add(active);
  },

  updateNavigationItem() {
    const paginationView = document.querySelector(".pagination-view");
    const lists = paginationView.querySelectorAll(".navigation .list");
    const items = lists[paginationView.tabIndex].querySelectorAll(".item");
    const active = "active";

    items.forEach(item => {
      item.classList.remove(active);
    });
    const startIndex = paginationView.pageIndex * 5;
    const endIndex = (paginationView.pageIndex + 1) * 5;
    for (let i = startIndex; i < endIndex; i++) {
      if (!items[i]) {
        break;
      }
      items[i].classList.add(active);
    }
  },

  /* Pagination */
  updatePaginationItem() {
    const paginationView = document.querySelector(".pagination-view");
    const items = paginationView.querySelectorAll(".pagination .item");
    const active = "active";
    items.forEach(item => {
      item.classList.remove(active);
    });
    items[paginationView.pageIndex].classList.add(active);
  },

  updatePaginationControlItem() {
    const paginationView = document.querySelector(".pagination-view");
    const leftItems = paginationView.querySelectorAll(".pagination .control.left .control-item");
    const leftIcons = paginationView.querySelectorAll(".pagination .control.left .control-icon");
    const rightItems = paginationView.querySelectorAll(".pagination .control.right .control-item");
    const rightIcons = paginationView.querySelectorAll(".pagination .control.right .control-icon");
    const enabled = "enabled";
    const buttonCount = leftItems.length;

    /* Reset */
    for (let i = 0; i < buttonCount; i++) {
      leftItems[i].classList.add(enabled);
      leftIcons[i].classList.add(enabled);
      rightItems[i].classList.add(enabled);
      rightIcons[i].classList.add(enabled);
    }

    /* Select Disabled */
    if (paginationView.pageMaxIndex >= 1) {
      if (paginationView.pageIndex === 0) {
        for (let i = 0; i < buttonCount; i++) {
          leftItems[i].classList.remove(enabled);
          leftIcons[i].classList.remove(enabled);
        }
      } else if (paginationView.pageIndex === paginationView.pageMaxIndex) {
        for (let i = 0; i < buttonCount; i++) {
          rightItems[i].classList.remove(enabled);
          rightIcons[i].classList.remove(enabled);
        }
      } 
    } else {
      for (let i = 0; i < buttonCount; i++) {
        leftItems[i].classList.remove(enabled);
        leftIcons[i].classList.remove(enabled);
        rightItems[i].classList.remove(enabled);
        rightIcons[i].classList.remove(enabled);
      }
    }
  },

  updatePaginationWide() {
    const paginationView = document.querySelector(".pagination-view");
    const pagination = paginationView.querySelector(".pagination");
    const html = document.documentElement;
    const htmlWidth = html.clientWidth;
    const wideX = "wide-x";

    const paddingX = 16;
    const gap = 16;
    const itemWidth = 40;

    const controlItemCount = 4;
    const paginationItemCount = paginationView.pageMaxIndex + 1;
    const totalItemCount = controlItemCount + paginationItemCount;

    let calcWidth = totalItemCount * itemWidth;
    calcWidth += gap * (totalItemCount - 1);
    calcWidth += paddingX * 2;

    if (calcWidth < htmlWidth) {
      pagination.classList.add(wideX);
    } else {
      pagination.classList.remove(wideX);
    }
  },

  /* Generator */
  updatePaginationItemGenerator() {
    const paginationView = document.querySelector(".pagination-view");
    const pagination = paginationView.querySelector(".pagination");
    const items = pagination.querySelectorAll(".item");

    /* Remove */
    if (items[0]) {
      items.forEach(item => {
        item.remove();
      });
    }

    /* Create AND Event */
    const fragment = document.createDocumentFragment();
    const list = pagination.querySelector(".list");
    for (let i = 0; i <= paginationView.pageMaxIndex; i++) {
      const item = document.createElement("li");
      item.className = "item";
      item.index = i;
      item.addEventListener("click", FacoPagerHandler.paginationItemClick);
      const text = document.createElement("span");
      text.className = "text";
      text.textContent = i + 1;
      item.append(text);
      fragment.append(item);
    }
    list.append(fragment);
  },

  generator() {
    const facoPagerGroup = FacoPagerData.group;
    const facoPager = document.querySelector(".faco-pager");

    /* Title */
    const facoPagerTitle = document.createElement("h2");
    facoPagerTitle.className = "faco-pager-title";
		facoPagerTitle.textContent = FacoPagerData.titleText;

    /* Tab */
    const tab = document.createElement("nav");
    tab.className = "tab";
    const tabList = document.createElement("ul");
    tabList.className = "list";

    /* Navigation */
    const navigation = document.createElement("nav");
    navigation.className = "navigation";

    Object.entries(facoPagerGroup).forEach(([tabTextData, navigationData]) => {
      /* Tab */
      const tabItem = document.createElement("li");
      tabItem.className = "item";
      const tabText = document.createElement("div");
      tabText.className = "text";
      tabText.textContent = tabTextData;
      tabItem.append(tabText);
      tabList.append(tabItem);

      /* Navigation */
      const navigationList = document.createElement("ul");
      navigationList.className = "list";
      Object.entries(navigationData).forEach(([navigationTextData, itemData]) => {
        const navigationItem = document.createElement("li");
        navigationItem.className = "item";
        const navigationLink = document.createElement("a");
        navigationLink.className = "link";
        navigationLink.href = itemData.link;
        const navigationText = document.createElement("p");
        navigationText.className = "text"
        navigationText.textContent = navigationTextData;
        const navigationSubText = document.createElement("p");
        navigationSubText.className = "sub-text";
        navigationSubText.textContent = itemData.subText;

        /* Append */
        navigationLink.append(navigationText, navigationSubText);
        navigationItem.append(navigationLink);
        navigationList.append(navigationItem);
      });
      navigation.append(navigationList);
    });
    tab.append(tabList);

    /* Pager footer */
    const controlGroup = {
      "left": ["first", "previous"],
      "right": ["next", "last"]
    }
    const pagination = document.createElement("nav");
    pagination.className = "pagination";
    const paginationList = document.createElement("ul");
    paginationList.className = "list";
    pagination.append(paginationList);

    /* Control */
    Object.entries(controlGroup).forEach(([position, types]) => {
      const control = document.createElement("div");
      control.className = `control ${position}`;
      types.forEach(type => {
        const controlItem = document.createElement("div");
        controlItem.className = `control-item ${type}`;
        const controlIcon = document.createElement("span");
        controlIcon.className = `control-icon ${type}`;
        controlItem.append(controlIcon);
        control.append(controlItem);
      });
      pagination.append(control);
    });

    facoPager.append(title, tab, navigation, pagination);
  }
};

/* window.addEventListener("DOMContentLoaded", FacoPagerController.init);
window.addEventListener("resize", FacoPagerHandler.onResize); */

