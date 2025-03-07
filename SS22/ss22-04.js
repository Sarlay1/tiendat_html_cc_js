let str = prompt("nHẠP chuõi số bất kì: ")
let arr = str.split("")
let max = 0;
let check = 0;
for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
        check++
    }
}
if (check < 1) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    alert("SỐ lớn nhất là: " + max)
} else {
    alert("Mảng không hợp lệ")
}