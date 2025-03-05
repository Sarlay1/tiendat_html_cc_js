let sole = 0;
let sochan = 0;
for(let i=0; i<5; i++){
    let num = +prompt("Nhập số nguyên bất kì: ")
    if(num % 2 === 0){
        sochan++
    }else{
        sole++
    }
}
alert("Số chẵn và số lẻ là: " + sochan +" va "+ sole )