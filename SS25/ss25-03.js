let arr = [];
let num = prompt("Mời bạn nhập số lượng phần tử trong mảng");
if (num < 0) {
    alert("Số lượng phần tử không được âm");
} else if (isNaN(num)) {
    alert("Giá trị nhập vào phải là số");
} else {
    for (let i = 0; i < num; i++) {
        let input = parseInt(prompt("Mời bạn nhập phần tử thứ " + (i + 1)));
        if (isNaN(input)) {
            alert("Giá trị nhập vào phải là số");
        } else {
            arr.push(input);
        }
    }

    if (arr.length > 0) {
        let evenNumbers = arr.filter(num => num % 2 === 0);
        if (evenNumbers.length > 0) {
            alert("Các số chẵn trong mảng là: " + evenNumbers.join(", "));
        } else {
            alert("Mảng không chứa số chẵn");
        }
    }
}
