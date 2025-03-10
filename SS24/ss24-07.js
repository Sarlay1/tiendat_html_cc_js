let str = "";
let choice;
let loop = true;
let menu = `
================== MENU ===================
1. Nhập chuỗi
2. Hiển thị chuỗi
3. Loại bỏ khoảng trắng đầu và cuối chuỗi
4. Đảo ngược chuỗi ký tự
5. Đếm số lượng từ trong chuỗi
6. Tìm kiếm và thay thế ký tự
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
                alert(`Chuỗi: "${str}"`);
            }
            break;
        case 3:
            if (str === "") {
                alert("Chuỗi chưa được nhập!");
            } else {
                str = str.trim();
                alert(`Chuỗi sau khi loại bỏ khoảng trắng: "${str}"`);
            }
            break;
        case 4:
            if (str === "") {
                alert("Chuỗi chưa được nhập!");
            } else {
                str = str.split("").reverse().join("");
                alert(`Chuỗi sau khi đảo ngược: "${str}"`);
            }
            break;
        case 5:
            if (str === "") {
                alert("Chuỗi chưa được nhập!");
            } else {
                let words = str.trim().split(/\s+/);
                let wordCount = words.length;
                if (str.trim() === "") {
                    wordCount = 0; 
                }
                alert(`Số lượng từ trong chuỗi: ${wordCount}`);
            }
            break;
        case 6:
            if (str === ""){
                alert("Chuỗi chưa được nhập!");
            } else {
                let searchChar = prompt("Nhập ký tự cần tìm: ");
                let charArray = str.split("");
                let found = charArray.includes(searchChar);
                if (found) {
                    alert(`Tìm thấy ký tự '${searchChar}' trong chuỗi`);
                    let replaceChar = prompt("Nhập ký tự thay thế: ");
                    for (let i = 0; i < charArray.length; i++) {
                        if (charArray[i] === searchChar) {
                            charArray[i] = replaceChar;
                        }
                    }
                    str = charArray.join("");
                    alert(`Chuỗi sau khi thay thế: "${str}"`);
                } else {
                    alert(`Không tìm thấy ký tự '${searchChar}' trong chuỗi`);
                }
            }
            break;
        case 7:
            alert("Kết thúc chương trình");
            loop = false;
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng chọn lại");
            break;
    }
}
