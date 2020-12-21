window.addEventListener("scroll", function(){
    let nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})

const description = document.querySelector('.description')
const description_list = document.querySelector('.Des-list')


description.addEventListener('click', () => {
    description_list.classList.toggle('active')
})

// description.addEventListener('click', () => {
//     description_list.classList.remove('active')
// })