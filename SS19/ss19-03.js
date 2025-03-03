let choice = +prompt("Chọn đơn vị tiền tệ: 1. USD -> VND  2. VND -> USD");
let money = +prompt("Nhập vào số tiền:");
switch (money) {
    case 1:
        if (money < 0) {
            alert("Số tiền nhập vào phải lớn hơn 0");
        } else {
            let vndMoney = money * 23000;
            alert("Số tiền sau khi chuyển đổi là: " + vndMoney + " VND");
        }
        break;
    case 2:
        if (money < 0) {
            alert("Số tiền nhập vào phải lớn hơn 0");
        } else {
            let usdMoney = money / 23000;
            alert("Số tiền sau khi chuyển đổi là: " + usdMoney + " USD");
        }
        break;
    default:
        alert("Không có lựa chọn này!");
        break;
}
