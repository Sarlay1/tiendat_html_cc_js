let str = prompt("Nhập vào chuỗi ksi rtwj: ")
function upperCase(str) {
    str = str.toLowerCase()
    str = str.split("")
    for (let i = 0; i < str.length; i++) {
        if (i === 0 || str[i - 1] === " ") {
            str[i] = str[i].toUpperCase();
        }
    }
    str = str.join("");
    alert(str);
}
upperCase(str);