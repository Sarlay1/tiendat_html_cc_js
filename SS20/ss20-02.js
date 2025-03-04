let n = +prompt("Nhập vào số nguyên N:");
let total = " ";
for (let i = 1; i <= n; i++) {
    if (i % 5 === 0) {
        total = total + i + " ";
    }
}
alert("Các số chia hết cho 5 trong khoảng từ 1 đến " + n + " là:" + total);