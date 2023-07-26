const mainContent = document.getElementById("main-container")
const navBar = document.getElementById("nav");
const navBarStyle = navBar.querySelectorAll("p");

window.addEventListener('load', () => {
  setTimeout(() => {
    navBar.style.display = "flex"
  }, 200)
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
//   if (event.deltaY > 0) {
//       // User scrolled down, do something
//       navBar.style.animation = "slide-out 0.5s ease-out";
//       setTimeout(() => {
//           navBar.style.display = `none`;
//       }, 475);
//   }
// });

// window.addEventListener("wheel", function(event) {
//   if (event.deltaY < 0) {
//       // User scrolled up, do something
//       navBar.style.animation = "slide-in 0.3s ease-in";
//       setTimeout(() => {
//           navBar.style.display = `flex`;
//       }, 250);
//   }
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

const textElement1 = document.getElementById("paragraph1");
const textElement2 = document.getElementById("paragraph2");
const textElement3 = document.getElementById("paragraph3");
const textElement4 = document.getElementById("paragraph4");
const textElement5 = document.getElementById("paragraph5");
const textElement6 = document.getElementById("paragraph6");
const textElement7 = document.getElementById("paragraph7");
const text1 = "Hello there! My name is Joo Wee and an aspiring software engineer. I previously worked as a civil engineer for a few years with a Degree in Civil Engineering.";
const text2 = "I am now on a self-learning journey by partaking in online courses, picking up various skillsets on the way.";
const text3 = "I am mainly working with Javacsript/Typescript and ReactJS to make projects while learning backend technologies on the side.";
const text4 = "Currently, I am also trying to hone my skills in algorithms/ data structures by doing coding challenges.";
const text5 = "If you are reading this, chances are you have found my website on my GitHub portfolio or resume. My projects can be found "
const text6 = "Thanks for checking out my portfolio! Feel free to  "
const text7 = ",I will try my best to respond promptly.  "
const projectsLink = `<a href="./projects.html">here.</a>`
const contactLink = `<a href="./contact.html">contact me</a>`
const typingSpeed = 10; // Adjust the typing speed (in milliseconds) as desired
let charIndex = 0;
let charIndex2 = 0;
let charIndex3 = 0;
let charIndex4 = 0;
let charIndex5 = 0;
let charIndex6 = 0;
let charIndex7 = 0;

function typeWriter() { 
  if (charIndex < text1.length) {
    textElement1.innerHTML += text1.charAt(charIndex);
    charIndex++;
  } else if (charIndex2 < text2.length) {
    textElement2.innerHTML += text2.charAt(charIndex2);
    charIndex2++;
  } else if (charIndex3 < text3.length) {
    textElement3.innerHTML += text3.charAt(charIndex3);
    charIndex3++;
  } else if (charIndex4 < text4.length) {
    textElement4.innerHTML += text4.charAt(charIndex4);
    charIndex4++;
  } else if (charIndex5 < text5.length) {
    textElement5.innerHTML += text5.charAt(charIndex5);
    charIndex5++;
  } else if (charIndex5 == text5.length){
    textElement5.innerHTML += projectsLink;
    charIndex5 += projectsLink.length;
  } else if (charIndex6 < text6.length) {
    textElement6.innerHTML += text6.charAt(charIndex6);
    charIndex6++;
  } else if (charIndex6 == text6.length){
    textElement6.innerHTML += contactLink;
    charIndex6 += contactLink.length;
  } else if (charIndex7 < text7.length) {
    textElement7.innerHTML += text7.charAt(charIndex7);
    charIndex7++;
  } 
  if (charIndex7 < text7.length) {
    setTimeout(typeWriter, typingSpeed);
  }

}

typeWriter();
