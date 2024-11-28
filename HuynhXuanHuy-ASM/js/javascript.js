//Form Ảnh

var slideIndex = 1; //xác định stt của slide hiện tại
showSlides(slideIndex); //hiển thị slide này trên giao diện

// Next/Previous 
function nutbam(n) {
    showSlides(slideIndex += n);
}

// Số của slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var SlideNumber = document.getElementById("SlideNumber");
    if (n > slides.length) { slideIndex = 1; } //Quay lại slide đầu
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //cập nhật stt
    SlideNumber.textContent = slideIndex + " / " + slides.length; //hthị số 
    slides[slideIndex - 1].style.display = "block"; //cập nhật số
}



//Form Đăng Ký
function validateForm() {
    var masv = document.getElementById("masv").value;
    var hoten = document.getElementById("hoten").value;
    var email = document.getElementById("email").value;
    var gtinh = document.querySelector('input[name="gtinh"]:checked');
    var sothich = document.querySelectorAll('input[name="sothich"]:checked');
    var quoctich = document.getElementById("quoctich").value;
    var ghichu = document.getElementById("ghichu").value;
    var valid = true;

    // Kiểm tra mã sinh viên
    if (masv === "") {
        valid = false;
        document.getElementById("masv").style.backgroundColor = "yellow";
    } else {
        document.getElementById("masv").style.backgroundColor = "";
    }

    // Kiểm tra họ và tên
    if (hoten === "") {
        valid = false;
        document.getElementById("hoten").style.backgroundColor = "yellow";
    } else {
        document.getElementById("hoten").style.backgroundColor = "";
    }

    // Kiểm tra email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
        valid = false;
        document.getElementById("email").style.backgroundColor = "yellow";
    } else {
        document.getElementById("email").style.backgroundColor = "";
    }

    // Kiểm tra giới tính
    if (!gtinh) {
        valid = false;
        document.querySelector('.checkbox-group-gtinh').style.backgroundColor = "yellow";
    } else {
        document.querySelector('.checkbox-group-gtinh').style.backgroundColor = "";
    }

    // Kiểm tra sở thích
    if (sothich.length === 0) {
        valid = false;
        document.querySelector('.checkbox-group-sothich').style.backgroundColor = "yellow";
    } else {
        document.querySelector('.checkbox-group-sothich').style.backgroundColor = "";
    }

    // Kiểm tra quốc tịch
    if (quoctich === "") {
        valid = false;
        document.getElementById("quoctich").style.backgroundColor = "yellow";
    } else {
        document.getElementById("quoctich").style.backgroundColor = "";
    }

    // Kiểm tra ghi chú
    if (ghichu.length > 200) {
        valid = false;
        document.getElementById("ghichu").style.backgroundColor = "yellow";
    } else {
        document.getElementById("ghichu").style.backgroundColor = "";
    }

    return valid;
}


//Form Bán hàng
    
// Lọc sản phẩm theo mức giá
function locsp() {
    var mucGiaDropdown = document.getElementById("mucgia");
    var mucGiaChon = mucGiaDropdown.value;
    var hangHoaRows = document.querySelectorAll("tbody tr");
    
    hangHoaRows.forEach(function(row) {
      var donGia = parseInt(row.querySelector("td:nth-child(3)").textContent);
      var chonCheckbox = row.querySelector("td:nth-child(1) input");
      
      if (mucGiaChon === "all" ||
          (mucGiaChon === "duoi1trieu" && donGia < 1000000) ||
          (mucGiaChon === "1trieu-2trieu" && donGia >= 1000000 && donGia <= 2000000) ||
          (mucGiaChon === "tren2trieu" && donGia > 2000000)) {
        row.style.display = "table-row";
      } else {
        row.style.display = "none";
        chonCheckbox.checked = false;
        tinhTong();
      }
    });
  }
  
  // Khi thay đổi số lượng hoặc tích vào checkbox
  function tinhTong() {
    var hangHoaRows = document.querySelectorAll("tbody tr");
    var tongTien = 0;
    hangHoaRows.forEach(function(row) {
      var chonCheckbox = row.querySelector("td:nth-child(1) input");
      var soLuongInput = row.querySelector("td:nth-child(4) input");
      var thanhTienCell = row.querySelector("td:nth-child(5)");
      var donGia = parseInt(row.querySelector("td:nth-child(3)").textContent);
      // Bỏ tích checkbox thì vô hiệu hóa ô nhập số lượng và xóa thành tiền
      chonCheckbox.addEventListener("change", function() {
        if (!chonCheckbox.checked) {
          soLuongInput.value = "0"; // Đặt lại giá trị là 0 khi bỏ tích
          soLuongInput.disabled = true;
          thanhTienCell.textContent = 0;
          tinhTong();
        } else {
          soLuongInput.disabled = false;
        }
      });
  
      // Thay đổi số lượng
      soLuongInput.addEventListener("input", function() {
        tinhTong();
      });
      if (chonCheckbox.checked) {
        var soLuong = parseInt(soLuongInput.value);
        var thanhTien = donGia * soLuong;
        thanhTienCell.textContent = thanhTien;
        tongTien += thanhTien;
        soLuongInput.disabled = false;
      } else {
        thanhTienCell.textContent = 0;
        soLuongInput.disabled = true;
      }
    });
    
    // Cập nhật tổng tiền
    var tongTienCell = document.getElementById("tonggiatri");
    tongTienCell.textContent = tongTien;
  }  
  
  // Khi trang được tải, lọc sản phẩm theo mức giá mặc định
  window.onload = function() {
    locsp();
    tinhTong(); // Gọi hàm tinhTong() sau khi trang đã tải để cập nhật tổng tiền
  };
  
  // Gắn sự kiện thay đổi mức giá
  var mucGiaDropdown = document.getElementById("mucgia");
  mucGiaDropdown.addEventListener("change", locsp);

  // Gắn sự kiện thay đổi số lượng hoặc tích vào checkbox
  var soLuongInputs = document.querySelectorAll(".soluong");
  soLuongInputs.forEach(function(input) {
    input.addEventListener("input", tinhTong); // Sử dụng sự kiện input để lắng nghe ngay khi giá trị thay đổi
  });

  // Gắn sự kiện cho checkbox chọn hết
  var chonHetCheckbox = document.getElementById("chonhet");
  chonHetCheckbox.addEventListener("change", function() {
    var chonCheckboxes = document.querySelectorAll(".chon");
    chonCheckboxes.forEach(function(checkbox) {
      checkbox.checked = chonHetCheckbox.checked;
      tinhTong();
    });
  });

  