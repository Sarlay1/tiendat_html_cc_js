let date1 = prompt("Nhập date1: ");
let date2 = prompt("Nhập date2: ");
const d1 = new Date(date1);
const d2 = new Date(date2);
let d3 = Math.abs(d2 - d1) / (1000 * 60 * 60 * 24);
document.write("Số ngày chênh lệch: " + d3);
