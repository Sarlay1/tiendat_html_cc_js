let arr = [];
let n = parseInt(prompt("Mời bạn nhập số phần tử trong mảng"), 10);

if (n <= 0) {
    alert("Không có ký tự số");
} else {
    for (let i = 0; i < n; i++) {
        let char = prompt("Mời bạn nhập ký tự thứ " + (i + 1));
        arr.push(char);
    }

    let result = arr.filter(item => !isNaN(parseInt(item, 10)));
    
    if (result.length === 0) {
        alert("Không có ký tự số");
    } else {
        alert("Các ký tự số trong mảng: " + result.join(" "));
    }
}
