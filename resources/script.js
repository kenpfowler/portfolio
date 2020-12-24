// DOM Variables
const burger = document.querySelector(".hamburger");
const closer = document.querySelector(".closer");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".mobile-anchor");

// expand burger menu
const hideBurger = () => {
  burger.style.display = "none";
  closer.style.display = "flex";
  menu.style.display = "block";
}
 
 // collapse burger menu
 const burgerBack = () => {
  burger.style.display = "flex";
  closer.style.display = "none";
  menu.style.display = "none";
 }
 

// function calls and event handlers
burger.onclick = function() {
  hideBurger();
}

closer.onclick = function() {
  burgerBack();
}

links.forEach(element => {
  element.onclick = function () {
    burgerBack();
   }
});

