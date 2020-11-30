window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
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
        }     else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
        }
    });
    //burger animation
    burger.classList.toggle('toggle');

    });
    
}
    
navSlide();


const filterSlide = () => {
    const filter = document.querySelector('.filter');
    const filtered = document.querySelector('.aside');
    const filterLinks = document.querySelectorAll('.filter-links li');
    //toggle nav

    filter.addEventListener('click', () => {
        filtered.classList.toggle('filter-active');
        
        //animate links

    filterLinks.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = ''
        }     else {
                link.style.animation = `filterLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
        }
    });
    //burger animation
    filter.classList.toggle('toggle');

    });
    
}
    
filterSlide();