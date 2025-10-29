// utils/PushMenu.js
const DATA_KEY = "lte.push-menu";
const EVENT_KEY = `.${DATA_KEY}`;
const EVENT_OPEN = `open${EVENT_KEY}`;
const EVENT_COLLAPSE = `collapse${EVENT_KEY}`;

const CLASS_NAME_SIDEBAR_MINI = "sidebar-mini";
const CLASS_NAME_SIDEBAR_COLLAPSE = "sidebar-collapse";
const CLASS_NAME_SIDEBAR_OPEN = "sidebar-open";
const CLASS_NAME_SIDEBAR_EXPAND = "sidebar-expand";
const CLASS_NAME_MENU_OPEN = "menu-open";

const SELECTOR_SIDEBAR_MENU = ".sidebar-menu";
const SELECTOR_NAV_ITEM = ".nav-item";
const SELECTOR_NAV_TREEVIEW = ".nav-treeview";

const Defaults = { sidebarBreakpoint: 992 };

export default class PushMenu {
  constructor(element, config = {}) {
    this._element = element;
    this._config = { ...Defaults, ...config };
  }

  menusClose() {
    const navTreeview = document.querySelectorAll(SELECTOR_NAV_TREEVIEW);
    navTreeview.forEach((navTree) => {
      navTree.style.removeProperty("display");
      navTree.style.removeProperty("height");
    });

    const navSidebar = document.querySelector(SELECTOR_SIDEBAR_MENU);
    const navItem = navSidebar?.querySelectorAll(SELECTOR_NAV_ITEM);
    navItem?.forEach((navI) => navI.classList.remove(CLASS_NAME_MENU_OPEN));
  }

  expand() {
    const event = new Event(EVENT_OPEN);
    document.body.classList.remove(CLASS_NAME_SIDEBAR_COLLAPSE);
    document.body.classList.add(CLASS_NAME_SIDEBAR_OPEN);
    this._element.dispatchEvent(event);
  }

  collapse() {
    const event = new Event(EVENT_COLLAPSE);
    document.body.classList.remove(CLASS_NAME_SIDEBAR_OPEN);
    document.body.classList.add(CLASS_NAME_SIDEBAR_COLLAPSE);
    this._element.dispatchEvent(event);
  }

  toggle() {
    if (document.body.classList.contains(CLASS_NAME_SIDEBAR_COLLAPSE)) {
      this.expand();
    } else {
      this.collapse();
    }
  }

  addSidebarBreakPoint() {
    const width = window.innerWidth;
    if (width <= this._config.sidebarBreakpoint) {
      this.collapse();
    } else {
      this.expand();
    }
  }

  init() {
    this.addSidebarBreakPoint();
  }
}
