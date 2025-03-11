let str = prompt("Nhập vào chuỗ kí tự: ")
function palindrome(str) {
    let arr = str.split("")
    let check = true;
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - 1 - i])
            check = false;
    }
    if (check) {
        alert("CHuỗi là chuỗi đối xứngh")
    } else {
        alert("Chuỗi không phải chuỗi đối xứng")
    }
}
palindrome(str)