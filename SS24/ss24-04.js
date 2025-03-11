let arr = [];
let choice;
let loop = true;
let menu = `
================== MENU ===================
1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử trong mảng
4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
5. Tính trung bình cộng các phần tử của một hàng cụ thể
6. Đảo ngược các hàng trong mảng
7. Thoát chương trình
===========================================

Nhập lựa chọn của bạn
`;

while (loop) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            let rows = +prompt("Nhập số hàng: ");
            let cols = +prompt("Nhập số cột: ");
            arr = [];
            for (let i = 0; i < rows; i++) {
                let row = [];
                for (let j = 0; j < cols; j++) {
                    row[j] = +prompt(`Nhập phần tử [${i}][${j}]: `);
                }
                arr.push(row);
            }
            alert("Đã nhập mảng thành công");
            break;
        case 2:
            if (arr.length === 0) {
                alert("Mảng không có phần tử");
            } else {
                let arrayContent = arr.map(row => row.join("\t")).join("\n");
                alert("Mảng 2 chiều:\n" + arrayContent);
            }
            break;
        case 3:
            if (arr.length === 0) {
                alert("Mảng không có phần tử");
            } else {
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    for (let j = 0; j < arr[i].length; j++) {
                        sum += arr[i][j];
                    }
                }
                alert(`Tổng các phần tử trong mảng: ${sum}`);
            }
            break;
        case 4:
            if (arr.length === 0) {
                alert("Mảng không có phần tử");
            } else {
                let max = arr[0][0];
                let maxRow = 0;
                let maxCol = 0;
                for (let i = 0; i < arr.length; i++) {
                    for (let j = 0; j < arr[i].length; j++) {
                        if (arr[i][j] > max) {
                            max = arr[i][j];
                            maxRow = i;
                            maxCol = j;
                        }
                    }
                }
                alert(`Phần tử lớn nhất: ${max} tại vị trí [${maxRow}][${maxCol}]`);
            }
            break;
        case 5:
            if (arr.length === 0) {
                alert("Mảng không có phần tử");
            } else {
                let row = +prompt(`Nhập số hàng cần tính trung bình (0-${arr.length - 1}): `);
                if (row < 0 || row >= arr.length) {
                    alert("Số hàng không hợp lệ");
                } else {
                    let sum = 0;
                    for (let j = 0; j < arr[row].length; j++) {
                        sum += arr[row][j];
                    }
                    let avg = sum / arr[row].length;
                    alert(`Trung bình cộng hàng ${row}: ${avg}`);
                }
            }
            break;
        case 6:
            if (arr.length === 0) {
                alert("Mảng không có phần tử");
            } else {
                arr.reverse();
                let reversedArrayContent = arr.map(row => row.join("\t")).join("\n");
                alert("Đã đảo ngược các hàng!\nMảng sau khi đảo ngược:\n" + reversedArrayContent);
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
