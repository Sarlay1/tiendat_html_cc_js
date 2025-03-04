let num = +prompt("Nhập một số nguyên bất kì");
let total = 0;
for (let i=0; i <= num; i++) {
    total = total + i;
}
alert("Tổng của tất cả các số nguyên từ 1 đến " + num + " là: " + total);