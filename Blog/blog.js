const mainContent = document.getElementById("main-container")
const navBar = document.getElementById("nav");
const navBarStyle = navBar.querySelectorAll("p");

window.addEventListener('load', () => {
  setTimeout(() => {
    navBar.style.display = "flex"
  }, 200)
})

window.addEventListener("scroll", function(){
    const image1 = document.getElementsByClassName("latest-posts");
    const image2 = document.getElementsByClassName("popular-posts")
    let windowHeight = window.innerHeight;
    let image1Position = image1[0].getBoundingClientRect().top;
    let image2Position = image2[0].getBoundingClientRect().top;
    if (window.innerWidth > 1024){
      if (image1Position - windowHeight <= -1250){
          image1[0].style.opacity = 0;
          image1[0].style.transition = "opacity 0.5s ease-in-out";
      } else{
          image1[0].style.opacity = 1;
      }
      if (image2Position - windowHeight <= -50){
          image2[0].style.opacity = 1;
          image2[0].style.transition = "opacity 0.5s ease-in-out";
      } else{
          image2[0].style.opacity = 0;
      }
    } else{
      image1[0].style.opacity = 1;
      image2[0].style.opacity = 1;
    }

    console.log("windowheight is " + windowHeight)
    console.log("image2pos is " + image2Position)
    console.log("image1pos is " + image1Position)
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
