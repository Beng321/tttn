<?php
    // Kết nối tới cơ sở dữ liệu
    $servername = "localhost";
    $username = "root"; 
    $password = ""; 
    $dbname = "movie-user"; 

    $conn = mysqli_connect($servername, $username, $password, $dbname);

    // Kiểm tra kết nối
    if (!$conn) {
        die("Kết nối thất bại: " . mysqli_connect_error());
    }

    // Lấy dữ liệu từ biểu mẫu
    $masv = $_POST['masv'];
    $hoten = $_POST['hoten'];
    $email = $_POST['email'];
    $gtinh = $_POST['gtinh'];
    $sothich = $_POST['sothich'];
    $quoctich = $_POST['quoctich'];
    $ghichu = $_POST['ghichu'];

    // Truy vấn để chèn dữ liệu vào cơ sở dữ liệu
    $sql = "INSERT INTO users (masv, hoten, email, gtinh, sothich, quoctich, ghichu)
            VALUES ('$masv', '$hoten', '$email', '$gtinh', '$sothich', '$quoctich', '$ghichu')";

    if ($conn->query($sql) === TRUE) {
        echo "Đăng ký thành công!";
    } else {
        echo "Lỗi: " . $sql . "<br>" . $conn->error;
    }

    // Đóng kết nối
    $conn->close();
    ?>






