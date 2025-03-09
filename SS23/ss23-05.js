let arr = [];
let num = parseInt(prompt("Mời bạn nhập số phần tử trong mảng"), 10);

if (num === 0) {
    alert("Mảng không có phần tử");
} else if (num < 0) {
    alert("Số lượng phần tử không được âm");
} else {
    for (let i = 0; i < num; i++) {
        let char = prompt("Mời bạn nhập ký tự thứ " + (i + 1));
        arr.push(char);
    }

    let result = arr.filter(item => !isNaN(parseFloat(item)) && isFinite(item));
    
    if (result.length === 0) {
        alert("Không có phần tử nào là số");
    } else {
        alert("Các ký tự số trong mảng: " + result.join(" "));
    }
}
