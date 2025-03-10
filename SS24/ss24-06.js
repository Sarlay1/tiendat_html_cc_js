let str = "";
let choice;
let loop = true;
let menu = `
================== MENU ===================
1. Nhập chuỗi
2. Hiển thị chuỗi
3. Tính độ dài của chuỗi
4. Đếm số lần xuất hiện của một ký tự
5. Kiểm tra chuỗi có phải là chuỗi đối xứng không
6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ
7. Thoát chương trình
===========================================

Nhập lựa chọn của bạn
`;

while (loop) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            str = prompt("Nhập chuỗi của bạn: ");
            alert("Đã nhập chuỗi thành công");
            break;
        case 2:
            if (str === "") {
                alert("Chuỗi chưa được nhập!");
            } else {
                alert(`Chuỗi: ${str}`);
            }
            break;
        case 3:
            if (str === "") {
                alert("Chuỗi chưa được nhập!");
            } else {
                alert(`Độ dài của chuỗi: ${str.length}`);
            }
            break;
        case 4:
            if (str === "") {
                alert("Chuỗi chưa được nhập!");
            } else {
                let char = prompt("Nhập ký tự cần đếm: ");
                let count = 0;
                for (let i = 0; i < str.length; i++) {
                    if (str[i] === char) {
                        count++;
                    }
                }
                alert(`Số lần xuất hiện của '${char}' trong chuỗi: ${count}`);
            }
            break;
        case 5:
            if (str === "") {
                alert("Chuỗi chưa được nhập!");
            } else {
                let isPalindrome = true;
                for (let i = 0; i < str.length / 2; i++) {
                    if (str[i] !== str[str.length - 1 - i]) {
                        isPalindrome = false;
                        break;
                    }
                }
                alert(isPalindrome ? "Chuỗi là chuỗi đối xứng" : "Chuỗi không phải chuỗi đối xứng");
            }
            break;
        case 6:
            if (str === "") {
                alert("Chuỗi chưa được nhập!");
            } else {
                let words = str.split(" ");
                for (let i = 0; i < words.length; i++) {
                    if (words[i].length > 0) {
                        words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
                    }
                }
                str = words.join(" ");
                alert(`Chuỗi sau khi chuyển đổi: ${str}`);
            }
            break;
        case 7:
            alert("Kết thúc chương trình. Cảm ơn!");
            loop = false;
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng chọn lại!");
            break;
    }
}
