let sum = 0;
for (let i = 0; i < 5; i++) {
    let num = +prompt("Nhập số nguyên bất kì: ")
    if (num % 2 !== 0) {
        sum += num;
    }
}
alert("Tổng các số từ đax nhập : " + sum);