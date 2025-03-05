let password = "0208";
let check=1;
while(check<2){
    let intpass = prompt("Nhập password: ")
    if(intpass == password ){
        check++
    }else{
        alert("Mật khẩu sai, vui lòng thử lại")
    }
}
alert("Mật khẩu đúng")