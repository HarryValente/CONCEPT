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
