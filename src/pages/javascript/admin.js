const mobileToggle = document.getElementById("mobileToggle");
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");

function openSidebar() {
  sidebar.classList.remove("max-[900px]:-translate-x-full");
  sidebarOverlay.classList.remove("hidden");
}

function closeSidebar() {
  sidebar.classList.add("max-[900px]:-translate-x-full");
  sidebarOverlay.classList.add("hidden");
}

mobileToggle.addEventListener("click", openSidebar);
sidebarOverlay.addEventListener("click", closeSidebar);