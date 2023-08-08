const burger = document.querySelector('#burger');
const menuburger = document.querySelector('#menuburger');

burger.addEventListener('click', () => {
    burger.classList.toggle('burger-active');
    menuburger.classList.toggle('disp'); // Змініть тут клас на 'disp'
});