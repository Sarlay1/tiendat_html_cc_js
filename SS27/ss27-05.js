let arr = []
let count = +prompt("Nhập ssoo lượng phần tử cho mảng: ")
let check = 0
for(let i = 0; i<count; i++){
    let input = +prompt("Nhập phần tử thứ " + (i + 1))
    if(!Number.isInteger(input)){
        alert("Dữ liệu nhập vào không hợp lệ")
        i--
    }else{
        arr.push(input)
    }
}
let cut = +prompt("Nhap kích thước phần tử con muốn tách: ")
function checkArr(arr, n){
    let result = [];
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i, i + n));
    }
    return result;
}
console.log(checkArr(arr, cut))