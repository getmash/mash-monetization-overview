const NAV_DEMO_BTN = "nav-demo-btn";
const NAV_WIDGET_BTN = "nav-widget-btn";
const BTN_OUTLINED_ACTIVE = "button-outlined-active";
const LN_ADDRESS_TEXT = "lightning-address-text";

// These values match css variables in style.css
const MASH_BANNER_MOBILE_TOP = "246px";
const MASH_BANNER_DESKTOP_TOP = "90px";

// Media query to determine non-small screens. The rem value matches one used in style.css
const MEDIA_QUERY = "(min-width: 48rem)";

const widgetsView = document.getElementById("view-widgets");
const demosView = document.getElementById("view-demos");
const menu = document.querySelector(".navbar-buttons");

// Navbar menu
menu.style.display = "flex";

// Set toastr options
toastr.options = {
  ...toastr.options,
  positionClass: "toast-bottom-center",
};

// Start out with demos hidden
demosView.style.display = "none";
// Start out with widget selected
document.getElementById(NAV_WIDGET_BTN).classList.add(BTN_OUTLINED_ACTIVE);

/** Handles user clicking on demo button  **/
function onClickDemos(e) {
  // Set visibility
  demosView.style.display = "flex";
  widgetsView.style.display = "none";

  // Scroll to top
  window.scrollTo(0, 0);

  // Set to active
  document.getElementById(NAV_DEMO_BTN).classList.add(BTN_OUTLINED_ACTIVE);
  document.getElementById(NAV_WIDGET_BTN).classList.remove(BTN_OUTLINED_ACTIVE);
}

/** Handles user clicking on widgets button  **/
function onClickWidgets(e) {
  // Set visibility
  widgetsView.style.display = "flex";
  demosView.style.display = "none";

  // Scroll to top
  window.scrollTo(0, 0);

  // Set to active
  document.getElementById(NAV_WIDGET_BTN).classList.add(BTN_OUTLINED_ACTIVE);
  document.getElementById(NAV_DEMO_BTN).classList.remove(BTN_OUTLINED_ACTIVE);
}

/** Copies lightning address with a notification **/
function copyLightningAddress() {
  const el = document.getElementById(LN_ADDRESS_TEXT);
  navigator.clipboard.writeText(el.textContent)
    .then(() => toastr.success("Copied lightning address"))
    .catch(e => toastr.error("Could not copy lightning address"))
}

/** Hides/shows navbar button nenu, hamburger/times icon, etc **/
function onClickCollapse() {
  const menu = document.querySelector(".navbar-buttons");
  const container = document.querySelector(".main-container");
  const hamburgerIcon = document.querySelector(".navbar-logo-collapse-hamburger");
  const timesIcon = document.querySelector(".navbar-logo-collapse-times");

  const { display } = menu.style;
  if (display === "none") {
    menu.style.display = "flex";
    container.style.top = MASH_BANNER_MOBILE_TOP;
    hamburgerIcon.style.display = "none";
    timesIcon.style.display = "flex";
    return;
  }
  if (display === "flex") {
    menu.style.display = "none";
    container.style.top = MASH_BANNER_DESKTOP_TOP;
    timesIcon.style.display = "none";
    hamburgerIcon.style.display = "flex";
    return;
  }
}

/** Debounce function **/
function debounce(func, timeout = 25) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

/** Handle window resizes with regard to menu visibility and container top positioning **/
addEventListener("resize", debounce(event => {
  const mql = window.matchMedia(MEDIA_QUERY);
  const menu = document.querySelector(".navbar-buttons");
  const container = document.querySelector(".main-container");
  const hamburgerIcon = document.querySelector(".navbar-logo-collapse-hamburger");
  const timesIcon = document.querySelector(".navbar-logo-collapse-times");

  // Apply dynamic styling for desktop
  if (mql.matches) {
    menu.style.display = "flex";
    hamburgerIcon.style.display = "none";
    timesIcon.style.display = "none";
    container.style.display.top = MASH_BANNER_MOBILE_TOP;
    return;
  }

  // Apply dynamic styling for mobile
  const computedTimes = window.getComputedStyle(timesIcon);
  const computedHamburger = window.getComputedStyle(hamburgerIcon);

  if (computedHamburger.display === "none") {
    timesIcon.style.display = "flex";
  }
  if (computedTimes.display === "none") {
    hamburgerIcon.style.display = "flex";
  }
  container.style.display.top = MASH_BANNER_DESKTOP_TOP;
}));