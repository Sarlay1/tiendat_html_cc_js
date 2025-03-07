let title = prompt("Nhập vào dãy số có bất kì")
let arr = [];
let str = title.toString();
let length = str.length;

if (Number.isInteger(Number(title))) {
    for(let i = length - 1; i >= 0; i--){
        arr.push(str[i]);
    }
    let result = arr.join(" ");
    alert("Dãy số sau khi đảo ngược:" + result); 
} else {
    alert("Dãy không hợp lệ");
}
