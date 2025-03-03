let a = parseFloat(prompt("Nhập hệ số a:"));
let b = parseFloat(prompt("Nhập hệ số b:"));
let c = parseFloat(prompt("Nhập hệ số c:"));
let delta = b ** 2 - 4 * a * c;
let result;
if (delta < 0) {
    result = "Phương trình vô nghiệm";
} else if (delta === 0) {
    let x = -b / (2 * a);
    result = `Phương trình có nghiệm kép x = ${x}`;
} else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    result = `Phương trình có hai nghiệm x1 = ${x1} và x2 = ${x2}`;
}
alert(result);
