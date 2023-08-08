const burger = document.querySelector('#burger');
const menuburger = document.querySelector('#menuburger');

burger.addEventListener('click', () => {
    burger.classList.toggle('burger-active');
    menuburger.classList.toggle('disp'); // Змініть тут клас на 'disp'
});

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const images = document.querySelectorAll('.carousel img');

    let currentIndex = 0;

    prevBtn.addEventListener('click', function() {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = images.length - 1;
      }
      updateCarousel();
    });

    nextBtn.addEventListener('click', function() {
      currentIndex++;
      if (currentIndex >= images.length) {
        currentIndex = 0;
      }
      updateCarousel();
    });

    function updateCarousel() {
      carousel.style.transform = `translateX(-${currentIndex * 100 / images.length}%)`;
    }
  });