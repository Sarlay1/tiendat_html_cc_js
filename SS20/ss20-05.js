let num1 = +prompt("Nhập hệ số a");
let num2 = +prompt("Nhập hệ số b");
let num3 = 1;
if (Number.isInteger(num1) === true && Number.isInteger(num2) === true ) {
    for(let i=0; i<num2; i++) {
        num3 = num3 * num1;
    }
    alert("Lũy thừa 2 số vừa nhập là" + num3)
} else {
    alert("Không")
}