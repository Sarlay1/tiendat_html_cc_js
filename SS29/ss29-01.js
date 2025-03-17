const contact = [
    {
        id: 1,
        name: "Đạt",
        email: "tiendat@gmail.com",
        phone: "0338281662",
    },
    {
        id: 2,
        name: "Mạnh",
        email: "ducmanh@gmail.com",
        phone: "02344444999",
    },
    {
        id: 3,
        name: "Tùng",
        email: "thetung@gmail.com",
        phone: "0335556600",
    },
];

let menu = `
--------MENU--------
1.Thêm đối tượng Contact vào danh sách liên hệ.
2.Hiển thị danh sách danh bạ.
3.Tìm kiếm thông tin Contact theo số điện thoại.
4.Cập nhật thông tin Contact(name, email, phone) theo id.
5.Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.
6Thoát.

Nhập lựa chọn của bạn: 

`;

let input;
while (input !== 6) {
    input = +prompt(menu)
    switch (input) {
        case 1:
            let name = prompt("Nhập Tên liên hệ : ")
            let email = prompt("Nhập email liên hệ: ")
            let phone = prompt("Nhap sđt liên hệ: ")
            let book = {
                id: Math.random(),
                name,
                email,
                phone,
            };
            contact.push(book);
            console.log(contact)
            break;
        case 2:
            display();
            break;
        case 3:
            let searchPhoneNumber = prompt("Nhập sđt contact cần tìn: ")
            let findIndex = search("phone", searchPhoneNumber)
            if (findIndex === -1) {
                console.log("Sđt không tồn tại: " + searchPhoneNumber)
            } else {
                displayOneContact(contact[findIndex], findIndex)
            }
            break;
        case 4:
            let searchID = +prompt("Nhập ID để cập nhật thông tin: ");
            let updateIndex = search("id", searchID)
            if (updateIndex === -1) {
                console.log("ID không tồn tại")
            } else {
                contact[updateIndex].name = prompt("Nhập tên để cập nhật: ")
                contact[updateIndex].email = prompt("Nhập email để cập nhật: ")
                contact[updateIndex].phone = prompt("Nhập sđt cập nhật: ")
                displayOneContact(contact[updateIndex], updateIndex)
            }
            break;
        case 5:
            let deleteID = +prompt("Nhập ID muốn xóa ");
            let deleteIndex = search("id", deleteID);
            if (deleteIndex === -1) {
                console.log("ID không tồn tại để xóa");
            } else {
                contact.splice(deleteIndex, 1);
                console.log("Xóa thành công liên hệ:" + deleteID);
            }
            break;
        case 6:
            console.log("Kết thúc chương trình");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại")
            break;
    }
}
function display() {
    contact.forEach(function (book, index) {
        console.log(`Liên hệ ${+index + 1}:`);
        console.log("ID: ", book.id);
        console.log("Tên: ", book.name);
        console.log("Email: ", book.email);
        console.log("Sđt: ", book.phone);
    })
}

function displayOneContact(book, index) {
    console.log(`Liên hệ ${+index + 1}:`);
    console.log("ID: ", book.id);
    console.log("Tên: ", book.name);
    console.log("Email: ", book.email);
    console.log("Sđt: ", book.phone);
    console.log("----------------------------")
}
function search(key, value) {
    let findIndex = -1
    for (let i in contact) {
        if (contact[i][key] === value) {
            findIndex = i;
            break;
        }
    }
    return findIndex;
}