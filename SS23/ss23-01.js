let arr = [];
let check = 0;
for (let i = 0; i < 10; i ++) {
    let input = prompt("Nhập lần lượt 10 số nguyên trong mảng");
    arr.push(input);
}
alert(arr);
let str = " "
for (let i = 0; i < 10; i++) {
    if(arr[i] >= 10) {
        check++;
        str = str + arr[i] + " ";
    }
}
if (check>0) {
    alert("các số lớn hơn 10 là:" + str);
} else {
    alert("Không có số nào lớn hơn 10");
}