// B1:
// Cho 1 biến result = 49
// Cho người dùng nhập vào giá trị cần đoán
// Lặp đi lặp lại quá trình kiểm
// tra xem số người dùng đoán có === result
// Nếu trùng --> In ra là Bingo
// Nếu sai lặp đi lặp lại quá trình trên
let result=49;
let loop = true;
while (loop === true) {
    let guess = prompt("Nhập vào giá trị có 2 chữ số:");
    if (guess == result) {
        alert("Bingo!");
        break;
    } else {
        alert("Sai rồi, thử lại đi");
    }
}
let condition = 1;
do {
    console.log("Hello world");
} while (condition == 0);
