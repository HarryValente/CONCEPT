window.addEventListener("scroll", function(){
    let nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})

// Add to bag button
const cartBtn = document.querySelector('.cartBtn')
const spinner = document.querySelector('.fas fa-spinner fa-spin')
const cartCircle = document.querySelector('.cartAmount')
const cartNum = document.querySelector('.cartNumber')

// Tomorrows notes I'm pretty sure once the innerHTML needs to have the spinner attatched to it but im not sure how start off tomorrow by looking at that

cartBtn.addEventListener('click', () => {
    // Adds a class so that the circle to the cart
    cartCircle.classList.add('revealed')

    // Removes the cart text
    cartBtn.innerHTML = ''

    // Runs the function
    getInputValue()

    cartBtn.innerHTML = spinner

    Loadingspinner()
})

// Function to get the value of the input field
function getInputValue(){
    // Selecting the input method and get its value
    let quantity = document.getElementById('quantity').value

    // Adds the quantity of the input into the cart
    cartNum.innerHTML = quantity
}

// A function set to a 1sec delay which activates the spinFunc below it
function Loadingspinner(){
    setTimeout(spinFunc, 1000)
}

function spinFunc(){
    alert('hi')
}


// The description list toggle
const features = document.querySelector('.fa-chevron-down')
const description_list = document.querySelector('.Des-list')
const featuresContent = document.querySelector('.featureDescription')

features.addEventListener('click', () => {
    description_list.classList.toggle('active')
    featuresContent.classList.toggle('active')
    features.classList.toggle('rotate')
})

// 2nd aside toggle
const weights = document.querySelector('.chevron2')
const weightContent = document.querySelector('.weightDescription')
const weight_table = document.querySelector('table')

weights.addEventListener('click', () => {
    weight_table.classList.toggle('active')
    weightContent.classList.toggle('active')
    weights.classList.toggle('rotate')
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

