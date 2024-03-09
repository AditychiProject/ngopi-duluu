// Hamburger Menu
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Close Outside of Element
const hamburger = document.querySelector("#hamburger-menu");
const searchButton = document.querySelector("#search-button");
document.addEventListener("click", function (e) {
  // Hamburger Menu
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  // Search Bar
  if (!searchButton.contains(e.target) && !searchBar.contains(e.target)) {
    searchBar.classList.remove("active");
  }
});

// Search Bar
const searchBar = document.querySelector(".search-bar");
const searchBox = document.querySelector("#search-box");
document.querySelector("#search-button").onclick = () => {
  searchBar.classList.toggle("active");
  searchBox.focus();
};
