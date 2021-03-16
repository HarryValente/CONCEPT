window.addEventListener("scroll", function(){
    let nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
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


// Refine and sort scroll up when on mobile
const filterBtn = document.querySelector('.refineSort')
const filterPage = document.querySelector('.refinedPage')

filterBtn.addEventListener('click', () => {
    filterPage.classList.toggle('show')
})



