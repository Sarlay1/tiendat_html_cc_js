let username = prompt("Nhập tên đăng nhập của bạn:");
if (username === null || username === "") {
    alert("Hủy");
} else if (username === "Tiendat") {
    let password = prompt("Vui lòng nhập mật khẩu của bạn:");
    if (password === "tiendat0208") {
        alert("Chào mừng tiendat!");
    } else if (!password) {
        alert("Bạn đã hủy thao tác.");
    } else {
        alert("Mật khẩu không chính xác. Vui lòng thử lại!");
    }
} else {
    alert(`Xin lỗi, username không hợp lệ.`);
}
