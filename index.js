let burgerBtn = document.querySelector('.burger-btn');
let burgerMenu = document.querySelector('.burger-menu');
burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.toggle('show');
})