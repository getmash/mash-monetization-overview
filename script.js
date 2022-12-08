const widgetsView = document.getElementById("view-widgets");
const demosView = document.getElementById("view-demos");

// Start out with demos hidden
demosView.style.display = "none";

function onClickDemos() {
  demosView.style.display = "flex";
  widgetsView.style.display = "none";
  window.scrollTo(0, 0);
}

function onClickWidgets() {
  widgetsView.style.display = "flex";
  demosView.style.display = "none";
  window.scrollTo(0, 0);
}

function copyLightningAddress(text) {
  const el = document.getElementById("lightning-address-text");
  navigator.clipboard.writeText(el.textContent)
    .then(() => toastr.success("Copied lightning address"))
    .catch(e => toastr.error("Could not copy lightning address"))
}

// Set toastr options
toastr.options = { ...toastr.options, positionClass: "toast-bottom-center" };