window.addEventListener("scroll", function(){
    let nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})











// Add to bag button
const cartBtn = document.querySelector('.addCartBtn')
const spinner = document.querySelector('.fas fa-spinner fa-spin')
const cartCircle = document.querySelector('.cartAmount')
const cartNum = document.querySelector('.cartNumber')
const bagList = document.querySelector('.bag-items')


cartBtn.addEventListener('click', () => {
    // Adds a class so that the circle to the cart
    cartCircle.classList.add('revealed')

    // Removes the cart text
    cartBtn.innerHTML = ''

    // Runs the function
    getInputValue()

    cartBtn.innerHTML = spinner

    Loadingspinner()

    if(quantity.value > 0){
        // Create a li
        const li = document.createElement('li')
        // Add a class to the li
        li.className = ('bag-list')
        // Append new li t the bag unordered list
        bagList.appendChild(li)
        // Add content to the new li in the bag
        bagList.innerHTML = `
        <img class="bagImg" src="../images/pyramidElectricKettle.jpg" width="100%" height="100%">
        <ul class="bagDes">
          <p>Haden kettle</p>
          <p>Colour: black</p>
          <p>Quantity: ${quantity.value}</p>
          <p><strong>Total: £30</strong></p>
        </ul>
        `
    }
})


// Function to get the value of the input field
function getInputValue(){
    // Selecting the input method and get its value
    let quantity = document.getElementById('quantity').value

    // Adds the quantity of the input into the cart
    cartNum.innerHTML = quantity

}

function addQuantity(){

}

// A function set to a 1sec delay which activates the spinFunc below it
function Loadingspinner(){
    setTimeout(spinFunc, 1000)
}

function spinFunc(){
    
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



// Changing kettle choices
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

