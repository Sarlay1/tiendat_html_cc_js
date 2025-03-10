let arr = [];
let choice;
let loop = true;

let menu = `
================== MENU ===================
1. Nhập mảng
2. Hiển thị mảng
3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng
4. Tính tổng các phần tử trong mảng
5. Tìm số lần xuất hiện của một phần tử trong mảng
6. Sắp xếp mảng tăng dần
7. Thoát chương trình
===========================================

Nhập lựa chọn của bạn?
`;

while (loop) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            let count = +prompt("Mời nhập số phần tử:");
            if (isNaN(count) || count < 0 || !Number.isInteger(count)) {
                alert("Số phần tử phải là số nguyên không âm");
            } else {
                let i = 0;
                while (i < count) {
                    let value = +prompt(`Mời nhập phần tử thứ ${i + 1}:`);
                    if (isNaN(value)) {
                        alert("Hãy nhập một số");
                        continue;
                    }
                    if (!Number.isInteger(value)) {
                        alert("Hãy nhập số nguyên");
                        continue;
                    }
                    arr.push(value);
                    i++;
                }
                alert("Đã nhập mảng thành công:", arr);
            }
            break;
        case 2:
            if (arr.length === 0) {
                alert("Không có phần tử trong mảng");
            } else {
                for (let i = 0; i < arr.length; i++) {
                    alert(`${i}. ${arr[i]}`);
                }
            }
            break;
        case 3:
            if (arr.length === 0) {
                alert("Mảng rỗng.");
            } else {
                let max = arr[0];
                let min = arr[0];
                for (let i = 0; i < arr.length; i++) {
                    if (max < arr[i]) {
                        max = arr[i];
                    }
                    if (min > arr[i]) {
                        min = arr[i];
                    }
                }
                alert("Phần tử lớn nhất trong mảng là: " + max);
                alert("Phần tử nhỏ nhất trong mảng là: " + min);
            }
            break;
        case 4:
            if (arr.length === 0) {
                alert("Mảng rỗng.");
            } else {
                let total = 0;
                for (let i = 0; i < arr.length; i++) {
                    total += arr[i];
                }
                alert("Tổng các phần tử trong mảng là " + total);
            }
            break;
        case 5:
            if (arr.length === 0) {
                alert("Mảng rỗng.");
            } else {
                let check = +prompt("Mời bạn nhập vào phần tử muốn đếm số lần xuất hiện:");
                let counts = 0;
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] === check) {
                        counts++;
                    }
                }
                if (counts > 0) {
                    alert("Phần tử " + check + " xuất hiện " + counts + " lần trong mảng");
                } else {
                    alert("Phần tử không tồn tại trong mảng");
                }
            }
            break;
        case 6:
            if (arr.length === 0) {
                alert("Mảng rỗng.");
            } else {
                for (let i = 0; i < arr.length - 1; i++) {
                    for (let j = 0; j < arr.length - i - 1; j++) {
                        if (arr[j] > arr[j + 1]) {
                            let temp = arr[j];
                            arr[j] = arr[j + 1];
                            arr[j + 1] = temp;
                        }
                    }
                }
                alert("Mảng sau khi sắp xếp tăng dần là " + arr);
            }
            break;
        case 7:
            alert("Chương trình kết thúc");
            loop = false;
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng chọn lại");
            break;
    }
}
