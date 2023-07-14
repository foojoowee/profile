const loadingPage = document.getElementById("loading-page")
const loadingMsg = document.getElementById("loading-message")
const mainContent = document.getElementById("main-container")
const navBar = document.getElementById("nav");
const navBarStyle = navBar.querySelectorAll("p");
// const loadingImg = loadingPage.querySelector("img");

// let prevScrollPos = window.scrollY;

// window.addEventListener("scroll", function() {
//     const currentScrollPos = window.scrollY;
  
//     if (currentScrollPos > prevScrollPos) {
//       // User scrolled down, hide the navigation bar
//       navBar.style.animation = "slide-out 0.5s ease-out";
//       setTimeout(() => {
//         navBar.style.display = "none";
//       }, 100);
//     } else {
//       // User scrolled up, show the navigation bar
//       navBar.style.display = "flex";
//       navBar.style.animation = "slide-in 0.3s ease-in";
//     }
  
//     prevScrollPos = currentScrollPos;
//   });
  
const delayLink = document.getElementsByClassName('delay-link');

for (let i = 0; i < delayLink.length; i++) {
  delayLink[i].addEventListener('click', function(event) {
    event.preventDefault();
    const targetUrl = this.getAttribute('href');
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 1500);
  });
}


// Boolean Flag
let isShow = false;
function showHideMenu(){
    const dropMenu = document.getElementById("drop-down-menu")
    if (isShow){
        dropMenu.style.animation = "slide-out-X 0.5s ease-out";
        setTimeout(() => {
            dropMenu.style.display = "none";
        }, 450);
        isShow = false;
    } else {
        dropMenu.style.display = "flex";
        dropMenu.style.animation = "slide-in-X 0.3s ease-in";
        isShow = true;
    }
}

const mainContainer = document.getElementById("index-main-container");



function fadeOut(){
  mainContainer.style.animation = "";
  void mainContainer.offsetWidth;
  mainContainer.style.animation = "fade-out 2.0s ease-out"
}

const textDisplay3 = document.getElementsByClassName("index-text3")[0];
const textDisplay4 = document.getElementsByClassName("index-button")[0];
const textDisplay5 = document.getElementById("index-icons");

window.addEventListener("load", function(){
  mainContainer.style.display = "none"
  // setTimeout(() =>{
  //   loadingPage.style.animation = "fade-out 0.5s ease-out forwards"
  //   mainContainer.style.display = "block"
  //   setTimeout(()=>{
  //     textDisplay3.style.display = "flex"
  //   }, 5000)
  //   setTimeout(()=>{
  //     textDisplay4.style.display = "flex"
  //     textDisplay5.style.display = "flex"
  //   }, 7000)
  //   setTimeout(()=>{
  //     navBar.style.display = "flex"
  //   }, 15000)
  // }, 5000)
})


//Load page code-to add when deploying website

// window.addEventListener("load", function(){
//     loadingPage.style.animation = "load-page 5s ease-in";
//     // loadingImg.style.animation = "size-up 5s ease-in";
//     console.log("Page is loaded");
//     setTimeout(() => {
//         loadingMsg.style.fontSize = '1.25em';
//         loadingMsg.innerHTML = "<p>Didn't see you there</p>";
//         loadingImg.style.height = "7em";
//     }, 2100);
//     setTimeout(() => {
//         loadingMsg.style.fontSize = '1.5em';
//         loadingMsg.innerHTML = "<p>Welcome to my Website</p>";
//         loadingImg.style.height = "10em";
//     }, 4000);
//     setTimeout(() => {
//         loadingPage.style.animation = "fade-out 1s ease-out";
//     // loadingImg.addEventListener("animationend", function(){
//     //     loadingImg.style.height = "10em";
//     }, 6000);
//     setTimeout(() => {
//         loadingPage.style.animation = "fade-out 1s ease-out";
//         loadingImg.style.height = "25em";
//         loadingMsg.innerHTML = "<p>LIFE IS BUT AN ILLUSION</p>";
//     }, 7000);
//     setTimeout(() => {
//         loadingPage.style.display = "none";
//         mainContent.style.animation = "fade-in 2s ease-in";
//         mainContent.style.display = "flex";
//     }, 7200);
// });



  
  
  
  