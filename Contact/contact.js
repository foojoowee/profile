const mainContent = document.getElementById("main-container")
const navBar = document.getElementById("nav");
const navBarStyle = navBar.querySelectorAll("p");

window.addEventListener('load', () => {
  setTimeout(() => {
    navBar.style.display = "flex"
  }, 200)
})

let isShow = false;
function showHideMenu(){
    const dropMenu = document.getElementById("drop-down-menu")
    if (isShow){
        dropMenu.style.animation = "slide-out-X 0.5s ease-out";
        setTimeout(() => {
            dropMenu.style.display = "none";;
        }, 450);
        isShow = false;
    } else {
        dropMenu.style.display = "flex";
        dropMenu.style.animation = "slide-in-X 0.3s ease-in";
        isShow = true;
    }
}