let arr = [];
for (let i = 0; i < 10; i++) {
    let input = prompt("Nhập số nguyên thứ " + (i + 1) + " trong mảng:");
    let number = parseInt(input);
    if (Number.isInteger(number)) {
        arr.push(number);
    } else {
        alert("Vui lòng nhập một số nguyên.");
        i--; 
    }
}

let max = arr[0];
let maxIndex = 0;
let space = " "

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        maxIndex = i;
    }
}

alert("Phần tử có giá trị lớn nhất trong mảng là: " + max);
alert("Vị trí của phần tử đó trong mảng là: " + maxIndex);
alert("Mảng bạn vừa nhập là:" + " " + arr);
