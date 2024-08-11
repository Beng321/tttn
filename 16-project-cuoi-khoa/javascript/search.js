// Đảm bảo DOM đã sẵn sàng trước khi thực thi mã
document.addEventListener('DOMContentLoaded', function() {
    // Gắn sự kiện submit cho form tìm kiếm
    document.getElementById('searchForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn chặn form submit mặc định

        const query = document.querySelector('.search-input').value.trim(); // Lấy giá trị tìm kiếm

        if (query) {
            // Điều hướng đến trang kết quả tìm kiếm với từ khóa
            window.location.href = `/search?query=${encodeURIComponent(query)}`;
        } else {
            alert('Vui lòng nhập từ khóa tìm kiếm!');
        }
    });
});
