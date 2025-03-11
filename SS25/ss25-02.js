let num1=0;
let num2=0;
let sum;
num1 = +prompt("Nhập số thứ nhất");
num2 = +prompt("Nhập số thứ hai");
if (num1 < 0 || num2 < 0 ) {
    alert("Số nhập vào không được âm");
} else if (isNaN(num1) || isNaN(num2)) {
    alert("Giá trị nhập vào phải là số");
} else {
    sum = num1 + num2
    alert("Tổng của 2 số là:" + sum)
}