window.addEventListener("scroll", function(){
    let nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})

// The description list toggle
const features = document.querySelector('.fa-chevron-down')
const description_list = document.querySelector('.Des-list')
const featuresContent = document.querySelector('.featureDescription')

features.addEventListener('click', () => {
    description_list.classList.toggle('active')
    featuresContent.classList.toggle('active')
    features.classList.toggle('rotate')
})

// DOESNT WORK AND THERE WAS A CSS FIX
// When clicking seeReviews the page scrolls 1300px
// const seeReviews = document.querySelector('.reviewSubHeader')
// const reviews = document.querySelector('.reviews')

// seeReviews.addEventListener('click', () => window.scrollTo({
//     reviews, behavior:"smooth"
// }));

const black = document.querySelector('.black')
const blackKettle = document.querySelector('.blackKettle')
const copper = document.querySelector('.copper')
const copperKettle = document.querySelector('.copperKettle')
const productHeaders = document.querySelector('.productHeaders')

black.addEventListener('click', () => {
    
    if(window.getComputedStyle(blackKettle).display === 'none'){
        blackKettle.display = ''
    } else{
        blackKettle.display = 'none'
    }

})

copper.addEventListener('click', () => {
    
    if(window.getComputedStyle(copperKettle).display === 'none'){

        copperKettle.remove('display')
        copperKettle.add('display = "flex"')
        // copperKettle.display = 'flex'
        blackKettle.remove('display')
        console.log('if')
    } else{
        copperKettle.display = 'none'
        console.log('else')
    }

})

