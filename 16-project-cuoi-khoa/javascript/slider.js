// document.addEventListener('DOMContentLoaded', function() {
//     const prevButton = document.querySelector('.js-btnPrev');
//     const nextButton = document.querySelector('.js-btnNext');
//     const sliderContainer = document.querySelector('.js-sliderItemContainer');
//     const sliderItems = document.querySelectorAll('.js-sliderItem');
//     let currentIndex = 0;
//     const totalItems = sliderItems.length;
//     const slideInterval = 2000; // Thay đổi slide mỗi 5 giây
//     let autoSlideInterval;
  
//     function updateSliderPosition() {
//       const offset = -currentIndex * 100;
//       sliderContainer.style.transform = `translateX(${offset}%)`;
//     }
  
//     function showNextSlide() {
//       currentIndex = (currentIndex + 1) % totalItems;
//       updateSliderPosition();
//     }
  
//     function showPrevSlide() {
//       currentIndex = (currentIndex - 1 + totalItems) % totalItems;
//       updateSliderPosition();
//     }
  
//     function startAutoSlide() {
//       autoSlideInterval = setInterval(showNextSlide, slideInterval);
//     }
  
//     function stopAutoSlide() {
//       clearInterval(autoSlideInterval);
//     }
  
//     nextButton.addEventListener('click', function() {
//       stopAutoSlide();
//       showNextSlide();
//       startAutoSlide();
//     });
  
//     prevButton.addEventListener('click', function() {
//       stopAutoSlide();
//       showPrevSlide();
//       startAutoSlide();
//     });
  
//     // Bắt đầu tự động cuộn khi trang được tải
//     startAutoSlide();
//   });
  

document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.js-btnPrev');
    const nextButton = document.querySelector('.js-btnNext');
    const container = document.querySelector('.js-sliderItemContainer');
    const items = document.querySelectorAll('.js-sliderItem');
    let index = 0;

    function updateSlider() {
        container.style.transform = `translateX(-${index * 100}%)`;
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    prevButton.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : items.length - 1;
        updateSlider();
    });

    nextButton.addEventListener('click', () => {
        index = (index < items.length - 1) ? index + 1 : 0;
        updateSlider();
    });

    // Optional: Auto-slide
    setInterval(() => {
        nextButton.click();
    }, 10000); // Thay đổi hình ảnh mỗi 5 giây
});
