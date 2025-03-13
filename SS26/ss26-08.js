let arr = [];
let count = parseInt(prompt("Nhập số lượng phần tử của mảng (từ 10 đến 20): "), 10);

if (isNaN(count) || count < 10 || count > 20) {
    console.log("Dữ liệu không hợp lệ");
} else {
    for (let i = 0; i < count; i++) {
        let input = parseInt(prompt("Nhập vào số nguyên: "), 10);
        if (!Number.isInteger(input)) {
            console.log("Giá trị không hợp lệ, vui lòng nhập số nguyên");
            i--; 
        } else {
            arr.push(input);
        }
    }

    if (arr.length === 0) {
        console.log("Mảng không có dữ liệu");
    } else {
        let primeOddNumbers = [];
        for (let j = 0; j < arr.length; j++) {
            let num = arr[j];
            let isPrime = num > 1;
            for (let k = 2; k <= Math.sqrt(num); k++) {
                if (num % k === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime && num % 2 !== 0) {
                primeOddNumbers.push(num);
            }
        }

        console.log(primeOddNumbers);
    }
}
