let arr = [];
let str = parseInt(prompt("Nhập số phần tử của mảng"))
if (str === 0 ) {
    alert("Mảng không có phần tử nào")
} else {
    for (let i =0; i < str; i ++) {
        let input = parseInt(prompt("Mời bạn nhập số thứ" + (i + 1)), 10);
        arr.push(input);
    }
}
let newArr = arr.filter(function(num) {
    return num > 5;
});
console.log("Mảng đã lọc", newArr);