let arr = [];
let count = +prompt("Nhập số phần tử của chuỗi: ")
let odd = 0;
let even = 0
for (let i = 0; i < count; i++) {
    let input = prompt("Nhập các phần tử trong chuỗi: ");
    arr.push(input);
    if (input % 2 === 0) {
        even += input
    }else{
        odd+=input
    }
}
alert("Tổng các số chẵn là: "+ even)
alert("Tổng các số lẻ là: "+ even)