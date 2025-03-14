let arr = []
let count = +prompt("Nhập số lượng phần tử cho mảng: ")
let check = 0
for(let i = 0; i<count; i++){
    let input = +prompt("Nhập phần tử thứ "+ (i + 1))
    if(!Number.isInteger(input)){
        alert("Dữ liệu nhập vào không hợp lệ")
        i--
    }else{
        arr.push(input)
    }
}
function checkArr(arr){
    let n = arr.length + 1;
    let expectedSum = (n * (arr[0] + arr[arr.length - 1])) / 2;
    let actualSum = arr.reduce((sum, num) => sum + num, 0);

    return expectedSum - actualSum;
}
console.log(checkArr(arr))