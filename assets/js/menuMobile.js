const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

const sidebarLinks = document.querySelectorAll("#mySidenav a");
sidebarLinks.forEach((link) => {
  link.addEventListener("click", closeNav);
});

document.addEventListener("click", function (event) {
  const sidenav = document.getElementById("mySidenav");
  if (
    sidenav.style.width === "250px" &&
    !sidenav.contains(event.target) &&
    event.target.id !== "buttonSidebar"
  ) {
    closeNav();
  }
});
