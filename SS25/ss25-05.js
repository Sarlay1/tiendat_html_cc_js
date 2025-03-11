let arr = [];
let numElements = parseInt(prompt("Mời bạn nhập số lượng phần tử trong mảng"), 10);

if (numElements > 0) {
    for (let i = 0; i < numElements; i++) {
        let element = parseFloat(prompt("Mời bạn nhập phần tử thứ " + (i + 1)));
        arr.push(element);
    }

    let count = arr.filter(num => num > 0 && Number.isInteger(num)).length;
    if (count > 0) {
        alert("Các số nguyên dương trong mảng là: " + count);
    } else {
        alert("Trong mảng không chứa số nguyên dương!");
    }
} else {
    alert("Số lượng phần tử không hợp lệ! Vui lòng nhập một số nguyên dương.");
}
