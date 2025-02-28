let num = +prompt("Nhập số tiền : ")
let time = +prompt("Nhập số tháng : ")
let interestRate = Number(0.043)
let interest = num * interestRate/12 * time

document.write("Số tiền: " + num)
document.write("Số tháng: " + time)
document.write("Lãi suất: 4.3%")
document.write("Tiền thực nhận: " + interest.toFixed(2))