let year = parseInt(prompt("Nhập năm bất kì : "));
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    alert(year + " là năm nhuận");
} else {
    alert(year + " không phải năm nhuận");
}