let salary = +prompt("Nhâp vào mức lương 1 tháng của bạn: ");
if(salary < 5000000){
    salary * 0/100;
    alert("Thuế phải trả là:" + salary)
} else if (salary < 10000000) {
    salary=salary * 0.05;
    salary=salary.toLocaleString("vi-VN")
   alert("Thuế phải trả là:" + salary)
} else if (salary < 18000000) {
    salary=salary * 0.1;
    salary=salary.toLocaleString("vi-VN")
    alert("Thuế phải trả là:" + salary)
 } else if (salary < 32000000) {
    salary=salary * 0.15;
    salary=salary.toLocaleString("vi-VN")
    alert("Thuế phải trả là:" + salary)
 } else if (salary > 32000000) {
    salary=salary * 0.2;
    salary=salary.toLocaleString("vi-VN")
    alert("Thuế phải trả là:" + salary)
 }

let status =+prompt("Mời bạn nhập mã trạng thái: ");
switch (status) {
    case 200:
        alert("Thành công");
        break;
    case 201:
        alert("Thêm thành công");
        break;
    case 400:
        alert("Lỗi request");
        break;   
    case 404:
        alert("Không tìm thấy");
        break;
    case 500:
        alert("Lỗi sever");
        break;
    default:
        alert("Không có mã hợp lệ");
        break;    
             
}