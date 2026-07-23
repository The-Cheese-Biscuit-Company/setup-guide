function showSection(name) {
  document
    .querySelectorAll('[id^="dynamicDisplay-"]')
    .forEach((s) => s.classList.add("hidden"));
  document.getElementById("dynamicDisplay-" + name).classList.remove("hidden");
  document
    .querySelectorAll("nav button")
    .forEach((b) => (b.className = "unselected"));
  document.getElementById("btn-" + name).className = "selected";
}

document
  .getElementById("dynamicDisplay-installation")
  .classList.remove("hidden");
