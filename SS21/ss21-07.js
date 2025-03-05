let bankDeposit = +prompt("Nhập số tiền gửi: ");
let interestRate = +prompt("Nhập lãi suất %: ");
let month = +prompt("Nhập số tháng gửi: ");

if (bankDeposit > 0 && interestRate >= 0 && month > 0) {
    let interest = bankDeposit * (interestRate / 100 / 12) * month;
    let totalAmount = bankDeposit + interest;
    alert("Tiền lãi: " + interest + "\nTổng số tiền nhận được: " + totalAmount);
} else {
    alert("Dữ liệu nhập vào không hợp lệ");
}
