let number = +prompt("Nhập số gnuyeen bất kì: ");
let str = " ";
for (let i = 0; i <= number; i++) {
    if(number % i === 0){
        str = str + i +" ,"
    }
}
alert("Các ước số vừa nahajp: " + str);