let arr = [];
let choice;
let loop = true;

let menu = `
================== MENU ===================
1. Nhập danh sách sinh viên
2. Hiển thị danh sách sinh viên
3. Tìm sinh viên theo tên
4. Xóa sinh viên khỏi danh sách 
5. Thoát
===========================================

Nhập lựa chọn của bạn?
`;

while (loop) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            let count = +prompt("Mời nhập số lượng sinh viên:");
            if (isNaN(count) || count < 0 || !Number.isInteger(count)) {
                alert("Số lượng sinh viên không được âm");
            } else {
                let i = 0;
                while (i < count) {
                    let value = prompt("Mời nhập tên sinh viên thứ " + (i + 1));
                    arr.push(value);
                    i++;
                }
                alert("Danh sách đã được lưu: " + arr.join(", "));
            }
            break;
        case 2:
            if (arr.length === 0) {
                alert("Không có sinh viên nào được nhập");
            } else {
                let message = "";
                for (let i = 0; i < arr.length; i++) {
                    message += `${i}. ${arr[i]}\n`;
                }
                alert(message);
            }
            break;
        case 3:
            let name = prompt("Nhập tên sinh viên cần tìm:");
            let found = false;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === name) {
                    alert("Sinh viên có trong danh sách");
                    found = true;
                    break;
                }
            }
            if (!found) {
                alert("Không tìm thấy sinh viên đó");
            }
            break;
        case 4:
            // Bạn có thể thêm mã để xóa sinh viên khỏi danh sách tại đây
            break;
        case 5:
            loop = false;
            alert("Cảm ơn bạn đã sử dụng chương trình!");
            break;
        default:
            alert("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
    }
}
