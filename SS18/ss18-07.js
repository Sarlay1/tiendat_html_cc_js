let a = parseFloat(prompt("Nhập số a: "));
let b = parseFloat(prompt("Nhập số b: "));
let operator = prompt("Nhập phép tính (+, -, *, /): ");
let result;
    switch (operator) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = (b !== 0) ? a / b : "Không thể chia cho 0";
            break;
        default:
            result = "Phép tính không hợp lệ";
    }
alert("Kết quả: " + result);
