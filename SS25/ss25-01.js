let arr = [];
let num = parseInt(prompt("Mời bạn nhập số lượng phần tử"), 10);
if (num < 0) {
    alert("Số phần tử không được âm");
} else if (isNaN(num)) {
    alert("Giá trị nhập vào phải là số");
} else if(num === 0) {
    alert("Mảng không chứa phần tử");
} else {
    for (let i = 0; i < num; i++) {
        let input = parseInt(prompt("Mời bạn nhập số thứ " + (i + 1)), 10);
        
        if (isNaN(input)) {
            alert("Giá trị nhập vào phải là số");
        } else {
            arr.push(input);
        }
    }

    if (arr.length > 0) {
        let min = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        alert("Phần tử nhỏ nhất trong mảng là:" + min);
    } else {
        alert("Mảng không chứa phần tử");
    }
}
