let number = prompt("Nhập vào số có 3 chữ số: ");
let str = number.toString();
let length = str.length;

if (length === 3 && Number.isInteger(Number(number))) {
    let soDoixung = true;
    for (let i = 0; i < length; i++) {
        if (str[i] !== str[length - i - 1]) {
            soDoixung = false;
            break;
        }
    }
    if (soDoixung) {
        alert("Số vừa nhập là số đối xứng!");
    } else {
        alert("Số vừa nhập không phải là số đối xứng!");
    }
} else {
    alert("Chuỗi vừa nhập không hợp lệ!");
}
