
let month = +prompt("Nhập vào số tháng:")
switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        alert("Tháng này có 31 ngày");
        break;
    case 2:
        alert("Tháng này có 28 hoặc 29 ngày năm nhuận");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        alert("Tháng này có 30 ngày");
        break;             
    default:
        alert("Số tháng nhập vào không hợp lệ")           
}