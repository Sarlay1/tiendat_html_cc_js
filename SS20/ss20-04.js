let text = prompt("Mời bạn nhập vào chuỗi bất kì");
let search = prompt("Mời bạn nhập từ khóa muốn tìm ");
for (let i = 0; i < text.length; i + 1) {
    if (text.lastIndexOf(search) > 0) {
        alert("Tồn tại kí tự");
        break;
    } else {
        alert("Không tồn tại");
        break;
    }
}