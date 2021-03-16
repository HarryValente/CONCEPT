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


// Search function

let products = document.querySelectorAll('.product')
let search = document.querySelector('.searchFilter')

// Listens for the input of the searchbar
search.addEventListener('input', (e) => searchData(e.target.value))

function searchData(searchTerm) {
    // Loops through each products innerText and if it doesnt contain the letters entered add the class of hide
    products.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            item.classList.remove('hide')
        } else{
            item.classList.add('hide')
        }
    })
}


// Refine and sort scroll up when on mobile
const filterBtn = document.querySelector('.refineSort')
const filterPage = document.querySelector('.refinedPage')

filterBtn.addEventListener('click', () => {
    filterPage.classList.toggle('show')
})


