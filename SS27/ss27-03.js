let radius, num1, num2;
let choice;
let loop = true;
let menu = `
------ MENU ------
1. Tính diện tích hình tròn.
2. Tính chu vi hình tròn.
3. Tính diện tích hình chữ nhật.
4. Tính chu vi hình chữ nhật.
5. Thoát.

Nhập lựa chọn của bạn
`;

while (loop) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            radius = getNumber("Nhập bán kính hình tròn:");
            console.log("Diện tích hình tròn là:", sCircle(radius));
            break;
        case 2:
            radius = getNumber("Nhập bán kính hình tròn:");
            console.log("Chu vi hình tròn là:", cCircle(radius));
            break;
        case 3:
            num1 = getNumber("Nhập chiều dài:");
            num2 = getNumber("Nhập chiều rộng:");
            console.log("Diện tích hình chữ nhật là:", sRectangle(num1, num2));
            break;
        case 4:
            num1 = getNumber("Nhập chiều dài:");
            num2 = getNumber("Nhập chiều rộng:");
            console.log("Chu vi hình chữ nhật là:", cRectangle(num1, num2));
            break;
        case 5:
            console.log("Kết thúc chương trình. Cảm ơn!");
            loop = false;
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng chọn lại!");
            break;
    }
}

function getNumber(message) {
    let num;
    let check = 0;
    while (check < 1) {
        num = +prompt(message);
        if (num <= 0 || !Number.isInteger(num)) {
            alert("Dữ liệu không hợp lệ!");
        } else {
            check++;
        }
    }
    return num;
}

function sCircle(radius) {
    return radius * radius * 3.1415;
}

function cCircle(radius) {
    return radius * 2 * 3.1415;
}

function sRectangle(num1, num2) {
    return num1 * num2;
}

function cRectangle(num1, num2) {
    return (num1 + num2) * 2;
}
