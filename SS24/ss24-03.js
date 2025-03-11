let arr = [];
let choice;
let loop = true;
let menu = `
================== MENU ===================
1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
4. Tính tổng và trung bình cộng của các số dương trong mảng
5. Đảo ngược mảng
6. Kiểm tra mảng có đối xứng không
7. Thoát chương trình
===========================================

Nhập lựa chọn của bạn
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
                alert("Đã nhập mảng thành công: " + arr);
            }
            break;
        case 2:
            if (arr.length === 0) {
                alert("Không có phần tử trong mảng");
            } else {
                let arrayContent = arr.map((value, index) => `${index}. ${value}`).join('\n');
                alert("Các phần tử trong mảng:\n" + arrayContent);
            }
            break;
        case 3:
            if (arr.length === 0) {
                alert("Mảng rỗng.");
            } else {
                let max = 0;
                let index = 0;
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] > max) {
                        max = arr[i];
                        index = i;
                    }
                }
                alert("Phần tử lớn nhất trong mảng là: " + max + "\nChỉ số của phần tử " + max + " là " + index);
            }
            break;
        case 4:
            if (arr.length === 0) {
                alert("Mảng rỗng.");
            } else {
                let total = 0;
                let counts = 0;
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] > 0) {
                        total += arr[i];
                        counts++;
                    }
                }
                let avg = total / counts;
                alert("Tổng các số dương trong mảng là " + total + "\nTrung bình cộng các số dương trong mảng là " + avg);
            }
            break;
        case 5:
            if (arr.length === 0) {
                alert("Mảng rỗng.");
            } else {
                let newArr = arr.reverse();
                alert("Mảng sau khi đảo ngược là " + newArr);
            }
            break;
        case 6:
            if (arr.length === 0) {
                alert("Mảng rỗng.");
            } else {
                let opposite = true;
                for (let i = 0; i < arr.length / 2; i++) {
                    if (arr[i] !== arr[arr.length - i - 1]) {
                        opposite = false;
                        break;
                    }
                }
                alert(opposite ? "Mảng đối xứng" : "Mảng không đối xứng");
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
