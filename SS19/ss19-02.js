let text= prompt("Nhập các chữ cái bất kì");
if (text.length > 1) {
    alert("Chỉ được nhập 1 kí tự");
} else {
    if (text >='a' && text <='z' || text >='A' && text <='Z') {
        alert("Kí tự "+ text +" là chữ cái");
    } else {
        alert("Kí tự "+ text +" không phải chữ cái");
    }
}