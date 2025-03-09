let arr = [];
let count = 0;
let num = parseInt(prompt("Mời bạn nhập số phần tử"), 10);

if (num <= 0) {
    alert("Số lượng phần tử không hợp lệ");
} else {
    for (let i = 0; i < num; i++) {
        let number = parseFloat(prompt("Mời bạn nhập phần tử"));
        arr.push(number);
    }

    arr.forEach((element) => {
        if (element < 0 && Number.isInteger(element)) {
            count++;
        }
    });

    alert(`Số lượng phần tử âm là: ${count}`);
}
