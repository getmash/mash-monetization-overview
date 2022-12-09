const NAV_DEMO_BTN = "nav-demo-btn";
const NAV_WIDGET_BTN = "nav-widget-btn";
const BTN_OUTLINED_ACTIVE = "button-outlined-active";
const LN_ADDRESS_TEXT = "lightning-address-text";

const widgetsView = document.getElementById("view-widgets");
const demosView = document.getElementById("view-demos");

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
function copyLightningAddress(text) {
  const el = document.getElementById(LN_ADDRESS_TEXT);
  navigator.clipboard.writeText(el.textContent)
    .then(() => toastr.success("Copied lightning address"))
    .catch(e => toastr.error("Could not copy lightning address"))
}

// Set toastr options
toastr.options = { 
  ...toastr.option, 
  positionClass: "tost-bottom-center" 
};