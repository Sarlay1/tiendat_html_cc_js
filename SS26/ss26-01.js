let arr = [];
let num = parseInt(prompt("Nhập số phần tử của mảng"))
if (num === "0" ) {
    alert("Mảng không có phần tử nào")
} else if(isNaN(num)) {
    alert("Dữ liệu nhập vào phải là số")
} else {
    for (let i =0; i < num; i ++) {
        let input = parseInt(prompt("Mời bạn nhập số thứ" + (i + 1)), 10);
        if (isNaN(input)) {
            alert("Giá trị nhập vào phải là số")
        } else {
            arr.push(input);
        }
    }
}
let newArr = arr.filter(function(num) {
    return num > 9;
});
console.log("Mảng đã lọc", newArr);