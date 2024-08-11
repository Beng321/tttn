// document.addEventListener('DOMContentLoaded', function() {
//     // Ngày và giờ kết thúc của đếm ngược
//     const endDate = new Date('August  7, 2024 09:14:00').getTime();
//     const endDate = new Date('August 9, 2024 23:59:00').getTime();
  
//     function updateCountdown() {
//       const now = new Date().getTime();
//       const timeLeft = endDate - now;
  
//       if (timeLeft < 0) {
//         // Kết thúc đếm ngược
//         document.querySelector('.countdown__text--secondary').innerText = 'Ưu đãi đã kết thúc!';
//         document.querySelectorAll('.countdown__box__time').forEach(el => el.innerText = '00');
//         return;
//       }
  
//       const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
//       document.querySelector('.countdown__box:nth-child(1) .js-countdownValue').innerText = String(days).padStart(2, '0');
//       document.querySelector('.countdown__box:nth-child(2) .js-countdownValue').innerText = String(hours).padStart(2, '0');
//       document.querySelector('.countdown__box:nth-child(3) .js-countdownValue').innerText = String(minutes).padStart(2, '0');
//       document.querySelector('.countdown__box:nth-child(4) .js-countdownValue').innerText = String(seconds).padStart(2, '0');
//     }
  
//     // Cập nhật đếm ngược mỗi giây
//     setInterval(updateCountdown, 1000);
//   });
  
document.addEventListener('DOMContentLoaded', function() {
    // Ngày và giờ bắt đầu và kết thúc của đếm ngược
    const startDate = new Date('August 7, 2024 00:00:00').getTime();
    const endDate = new Date('August 9, 2024 23:59:00').getTime();
    
    function updateCountdown() {
      const now = new Date().getTime();
      let timeLeft;
  
      if (now < startDate) {
        // Trước khi đếm ngược bắt đầu
        timeLeft = startDate - now;
        document.querySelector('.countdown__text').innerHTML = `Đếm ngược sẽ bắt đầu vào <time>${new Date(startDate).toLocaleDateString('vi-VN')}</time>`;
      } else if (now < endDate) {
        // Trong thời gian đếm ngược
        timeLeft = endDate - now;
        document.querySelector('.countdown__text').innerHTML = `Được <span class="countdown__text--highlighted">Giảm giá 50%</span> Trước khi quá muộn!<br />`;
      } else {
        // Sau khi đếm ngược kết thúc
        document.querySelector('.countdown__text--secondary').innerText = 'Ưu đãi đã kết thúc!';
        document.querySelectorAll('.countdown__box__time').forEach(el => el.innerText = '00');
        return;
      }
  
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
      document.querySelector('.countdown__box:nth-child(1) .js-countdownValue').innerText = String(days).padStart(2, '0');
      document.querySelector('.countdown__box:nth-child(2) .js-countdownValue').innerText = String(hours).padStart(2, '0');
      document.querySelector('.countdown__box:nth-child(3) .js-countdownValue').innerText = String(minutes).padStart(2, '0');
      document.querySelector('.countdown__box:nth-child(4) .js-countdownValue').innerText = String(seconds).padStart(2, '0');
    }
  
    // Cập nhật đếm ngược mỗi giây
    setInterval(updateCountdown, 1000);
  });
  