document.addEventListener('DOMContentLoaded', function () {
    const detailButtons = document.querySelectorAll('.js-productItemDetailsButton');
  
    detailButtons.forEach(button => {
      button.addEventListener('click', function () {
        const productItem = this.closest('.product__item');
        const additionalInfo = productItem.querySelector('.js-productItemAdditionalInfo');
        const isVisible = additionalInfo.style.display === 'block';
  
        additionalInfo.style.display = isVisible ? 'none' : 'block';
      });
    });
  });
  