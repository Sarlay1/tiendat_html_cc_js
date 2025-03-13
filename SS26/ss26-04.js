let numbersArray = [];
let arrayLength = parseInt(prompt("Nhập vào độ dài mảng: "), 10);

if (arrayLength === 0) {
    console.log("Mảng rỗng!");
} else {
    for (let i = 0; i < arrayLength; i++) {
        let element = parseInt(prompt("Nhập vào các phần tử: "), 10);
        if (!Number.isInteger(element) || element < 0 || element === '\n' || element === " ") {
            alert("Giá trị không hợp lệ!");
        } else {
            numbersArray.push(element);
        }
    }
}

let primeNumbersArray = numbersArray.filter(function (num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
});

console.log(primeNumbersArray);
