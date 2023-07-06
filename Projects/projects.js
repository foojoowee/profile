const mainContent = document.getElementById("main-container")
const navBar = document.getElementById("nav");
const navBarStyle = navBar.querySelectorAll("p");

window.addEventListener("scroll", function(){
    const featuredProject1 = document.getElementsByClassName("featured-project-1");
    const featuredProject2 = document.getElementsByClassName("featured-project-2")
    let windowHeight = window.innerHeight;
    let fProject1Position = featuredProject1[0].getBoundingClientRect().top;
    let fProject2Position = featuredProject2[0].getBoundingClientRect().top;
    const otherProject1 = document.getElementsByClassName("other-project-1");
    const otherProject2 = document.getElementsByClassName("other-project-2");
    const otherProject3 = document.getElementsByClassName("other-project-3");
    const otherProject4 = document.getElementsByClassName("other-project-4");
    let oProject1Position = otherProject1[0].getBoundingClientRect().top;
    let oProject2Position = otherProject2[0].getBoundingClientRect().top;
    let oProject3Position = otherProject3[0].getBoundingClientRect().top;
    let oProject4Position = otherProject4[0].getBoundingClientRect().top;

    if(window.innerWidth > 768){
        if (fProject1Position - windowHeight <= -1350){
            featuredProject1[0].style.opacity = 0;
            featuredProject1[0].style.transition = "opacity 0.5s ease-in-out";
        } else{
            featuredProject1[0].style.opacity = 1;
        }
        if (fProject2Position - windowHeight <= -450 && 
            fProject2Position - windowHeight >= -1200){
            featuredProject2[0].style.opacity = 1;
            featuredProject2[0].style.transition = "opacity 0.5s ease-in-out";
        } else {
            featuredProject2[0].style.opacity = 0;
        }
        if (oProject1Position - windowHeight <= -300 &&
            oProject1Position - windowHeight >= -1300){
            otherProject1[0].style.opacity = 1;
            otherProject1[0].style.transform = "translateX(0px)";
            otherProject1[0].style.transition = "opacity 0.5s ease-in-out, transform 1.2s ease-in-out";
        } else{
            otherProject1[0].style.opacity = 0;
            otherProject1[0].style.transform = "translateX(1000px)";
        }
    
        if (oProject2Position - windowHeight <= -400 &&
            oProject2Position - windowHeight >= -1350){
            otherProject2[0].style.opacity = 1;
            otherProject2[0].style.transform = "translateX(0px)";
            otherProject2[0].style.transition = "opacity 0.5s ease-in-out, transform 1.2s ease-in-out";
        } else{
            otherProject2[0].style.opacity = 0;
            otherProject2[0].style.transform = "translateX(-1000px)";
        }
    
        if (oProject3Position - windowHeight <= -150 &&
            oProject3Position - windowHeight >= -1250){
            otherProject3[0].style.opacity = 1;
            otherProject3[0].style.transform = "translateX(0px)";
            otherProject3[0].style.transition = "opacity 0.5s ease-in-out, transform 1.2s ease-in-out";
        } else{
            otherProject3[0].style.opacity = 0;
            otherProject3[0].style.transform = "translateX(1000px)";
        }
    
        if (oProject4Position - windowHeight <= 0 &&
            oProject4Position - windowHeight >= -1150){
            otherProject4[0].style.opacity = 1;
            otherProject4[0].style.transform = "translateX(0px)";
            otherProject4[0].style.transition = "opacity 0.5s ease-in-out, transform 1.2s ease-in-out";
        } else{
            otherProject4[0].style.opacity = 0;
            otherProject4[0].style.transform = "translateX(-1000px)";
        }
    } else{
        featuredProject1[0].style.opacity = 1;
        featuredProject2[0].style.opacity = 1;
        otherProject1[0].style.opacity = 1;
        otherProject2[0].style.opacity = 1;
        otherProject3[0].style.opacity = 1;
        otherProject4[0].style.opacity = 1;
        otherProject1[0].style.transform = "translateX(0px)";
        otherProject2[0].style.transform = "translateX(0px)";
        otherProject3[0].style.transform = "translateX(0px)";
        otherProject4[0].style.transform = "translateX(0px)";
    }

})

let prevScrollPos = window.scrollY;

window.addEventListener("scroll", function() {
    const currentScrollPos = window.scrollY;
  
    if (currentScrollPos > prevScrollPos) {
      // User scrolled down, hide the navigation bar
      navBar.style.animation = "slide-out 0.5s ease-out";
      setTimeout(() => {
        navBar.style.display = "none";
      }, 100);
    } else {
      // User scrolled up, show the navigation bar
      navBar.style.display = "flex";
      navBar.style.animation = "slide-in 0.3s ease-in";
    }
  
    prevScrollPos = currentScrollPos;
  });
  

// window.addEventListener("wheel", function(event) {
//     if (event.deltaY > 0) {
//         // User scrolled down, do something
//         navBar.style.animation = "slide-out 0.5s ease-out";
//         setTimeout(() => {
//             navBar.style.display = `none`;
//         }, 475);
//     }
// });

// window.addEventListener("wheel", function(event) {
//     if (event.deltaY < 0) {
//         // User scrolled up, do something
//         navBar.style.animation = "slide-in 0.5s ease-in";
//         setTimeout(() => {
//             navBar.style.display = `flex`;
//         }, 300);
//     }
// });

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

const project1image = document.getElementById("project-1-image");
const project1imageArray = ["./Assets/Projects/memory-1.png"]
document.addEventListener("DOMContentLoaded", (event) => {
    // Code to execute when the page has finished loading
    console.log(project1imageArray[0])
    let i = 1
    setInterval(() => {
        project1image.src = `./Assets/Projects/memory-${i}.png`;
        if(i > 2){
            i-= 3
        }
        i++;
    }, 5000);

});

const project2image = document.getElementById("project-2-image");
const project2imageArray = ["./Assets/Projects/blackjack-1.png"]
document.addEventListener("DOMContentLoaded", (event) => {
    // Code to execute when the page has finished loading
    console.log(project2imageArray[0])
    let i = 1
    setInterval(() => {
        project2image.src = `./Assets/Projects/blackjack-${i}.png`;
        if(i > 2){
            i-= 3
        }
        i++;
    }, 4000);

});
