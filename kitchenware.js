window.addEventListener("scroll", function(){
    let nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})

// const navSlide = () => {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav-links');
//     const navLinks = document.querySelectorAll('.nav-links li');
//     //toggle nav

//     burger.addEventListener('click', () => {
//         nav.classList.toggle('nav-active');
        
//         //animate links

//     navLinks.forEach((link, index) => {
//         if(link.style.animation) {
//             link.style.animation = ''
//         }     else {
//                 link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
//         }
//     });
//     //burger animation
//     burger.classList.toggle('toggle');

//     });
    
// }
    
// navSlide();


const filterSlide = () => {
    const filter = document.querySelector('.filter');
    const filtered = document.querySelector('.aside');
    
    //toggle nav

    filter.addEventListener('click', () => {
        filtered.classList.toggle('filter-active');
        
    //burger animation
    filter.classList.toggle('toggle');

    });
    
}
    
filterSlide();


// TESTING HOW TO GET FILTER TO STOP
// const filter = document.querySelector('.filter')
// const filterStop = filter.offsetTop

// function fixFilter(){
//     // Use this to see where on the page is the filter
//     console.log(filterStop, window.scrollY)

//     // if(window.scrollY >= filterStop){

//     // } else{

//     // }
// }

// window.addEventListener('scroll', fixFilter)
