document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.js-productCategory');
    const productItems = document.querySelectorAll('.js-productItem');
  
    categoryButtons.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.getAttribute('data-name');
  
        // Remove 'is-active' class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('is-active'));
        // Add 'is-active' class to the clicked button
        button.classList.add('is-active');
  
        productItems.forEach(item => {
          if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'grid'; // Show the product item
          } else {
            item.style.display = 'none'; // Hide the product item
          }
        });
      });
    });
  });
