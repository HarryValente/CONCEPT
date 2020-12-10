let header = document.querySelector("header");

// Adding a window event so when the y axis is greater than 0 it adds .sticky to the header
window.addEventListener("scroll", function(){
  
  header.classList.toggle("sticky", window.scrollY > 0);
})

const navSlide = () => {
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

  //toggle nav

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
      
  //animate links

  navLinks.forEach((link, index) => {
    if(link.style.animation) {
      link.style.animation = ''
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
    }
  });

  //burger animation
  burger.classList.toggle('toggle');

  });
  
}
  
navSlide();

// Using swiper.js
var swiper = new Swiper('.swiper-container', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    // when window width is >= 960px
    960: {
      slidesPerView: 3,
      spaceBetween: 50
    },
    // when window width is >= 1450px
    1450: {
      slidesPerView: 4,
      spaceBetween: 60
    },
    // when window width is >= 2000px
    2000: {
      slidesPerView: 5,
      spaceBetween: 70
    }
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev', },

  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
  
})


// // calculate height of browser window 
// let height = $(window).height();  
		  
// //makes the content height equal to the browser window height
// $('#content').css ({
//     'height': height + 'px'
// });