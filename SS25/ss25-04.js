function isPrimeNumber(a) {
    if (a < 2) return false;
    for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i === 0) return false;
    }
    return true;
}

let number;
while (true) {
    number = parseInt(prompt("Nhập vào một số nguyên dương: "), 10);
    if (number >= 2 && Number.isInteger(number)) {
        break;
    } else {
        alert("Dữ liệu không hợp lệ! Vui lòng nhập một số nguyên dương lớn hơn hoặc bằng 2.");
    }
}

if (isPrimeNumber(number)) {
    alert("Số này là số nguyên tố!");
} else {
    alert("Số này không phải số nguyên tố!");
}
