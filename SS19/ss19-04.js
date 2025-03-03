let number = +prompt("Nhập vào 1 số dương: ");
if (number < 0) {
    alert("Nhập số lớn hơn 0");
} else {
    if (number % 3 === 0 && number % 5 === 0) {
        alert(number + " Chia hết cho cả 3 và 5!");
    } else if (number % 3 === 0) {
        alert(number + "Chia hết cho 3!");
    } else if (number % 5 === 0) {
        alert(number + "Chia hết cho 5");
    } else {
        alert("Không chia hết cho cả 3 và 5");
    }
}