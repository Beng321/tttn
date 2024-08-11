const leftButton = document.querySelector('.scroll-button.left');
const rightButton = document.querySelector('.scroll-button.right');
const cardsContainer = document.querySelector('.cards-container');

leftButton.addEventListener('click', () => {
    cardsContainer.scrollLeft -= 300; // Scroll left by 300px
});

rightButton.addEventListener('click', () => {
    cardsContainer.scrollLeft += 300; // Scroll right by 300px
});
