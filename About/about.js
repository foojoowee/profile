const mainContent = document.getElementById("main-container")
const navBar = document.getElementById("nav");
const navBarStyle = navBar.querySelectorAll("p");

window.addEventListener("scroll", function(){
    const image1 = document.getElementsByClassName("latest-posts");
    const image2 = document.getElementsByClassName("popular-posts")
    let windowHeight = window.innerHeight;
    let image1Position = image1[0].getBoundingClientRect().top;
    let image2Position = image2[0].getBoundingClientRect().top;
    if (image1Position - windowHeight <= -1250){
        image1[0].style.opacity = 0;
        image1[0].style.transition = "opacity 0.5s ease-in-out";
    } else{
        image1[0].style.opacity = 1;
    }

    if (image2Position - windowHeight <= -450){
        image2[0].style.opacity = 1;
        image2[0].style.transition = "opacity 0.5s ease-in-out";
    } else{
        image2[0].style.opacity = 0;
    }
    console.log("windowheight is " + windowHeight)
    console.log("image2pos is " + image2Position)
    console.log("image1pos is " + image1Position)
})

window.addEventListener("wheel", function(event) {
    if (event.deltaY > 0) {
        // User scrolled down, do something
        navBar.style.animation = "slide-out 0.5s ease-out";
        setTimeout(() => {
            navBar.style.display = `none`;
        }, 475);
    }
});

window.addEventListener("wheel", function(event) {
    if (event.deltaY < 0) {
        // User scrolled up, do something
        navBar.style.animation = "slide-in 0.5s ease-in";
        setTimeout(() => {
            navBar.style.display = `flex`;
        }, 300);
    }
});

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
const text2 = "I am  currently open to working opportunities as a software engineer or web developer.";
const text3 = "I am now on a self-learning journey by partaking in online courses, picking up various skillsets on the way.";
const text4 = "I am mainly working with Javacsript/Typescript and ReactJS to make projects while learning algorithm and backend technologies on the side.";
const text5 = "If you are reading this, chances are you have found my website on my GitHub portfolio or resume. My projects can be found "
const text6 = "Thanks for checking out my portfolio! Feel free to  "
const text7 = ",I will try my best to respond promptly.  "
const projectsLink = `<a href="projects.html">here.</a>`
const contactLink = `<a href="contact.html">contact me</a>`
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

// const button1 = document.getElementById("about-button-1");
// const button2 = document.getElementById("about-button-2");
// const button3 = document.getElementById("about-button-3");
// const page1 = document.getElementById("about-page-1");
// const page2 = document.getElementById("about-page-2");
// const page3 = document.getElementById("about-page-3");

// function showPage1(){
//     page1.style.display = "block";
//     page2.style.display = "none";
//     page3.style.display = "none";
//     button1.style.backgroundColor = "rgb(211, 192, 192)";
//     button2.style.backgroundColor = "rgb(59, 52, 52)";
//     button3.style.backgroundColor = "rgb(59, 52, 52)";
// }

// function showPage2(){
//     page1.style.display = "none";
//     page2.style.display = "block";
//     page3.style.display = "none";
//     button1.style.backgroundColor = "rgb(59, 52, 52)";
//     button2.style.backgroundColor = "rgb(211, 192, 192)";
//     button3.style.backgroundColor = "rgb(59, 52, 52)";
// }

// function showPage3(){
//     page1.style.display = "none";
//     page2.style.display = "none";
//     page3.style.display = "block";
//     button1.style.backgroundColor = "rgb(59, 52, 52)";
//     button2.style.backgroundColor = "rgb(59, 52, 52)";
//     button3.style.backgroundColor = "rgb(211, 192, 192)";
// }
  
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


