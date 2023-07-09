const mainContent = document.getElementById("main-container")
const navBar = document.getElementById("nav");
const navBarStyle = navBar.querySelectorAll("p");

window.addEventListener('load', () => {
  setTimeout(() => {
    navBar.style.display = "flex"
  }, 200)
})
