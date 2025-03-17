const restaurant = [
    {
        id: 1,
        name: "Canh chua cá",
        price: 45000,
        description: "Món canh đậm đà với cá tươi, dứa, và rau ngò.",
    },
    {
        id: 2,
        name: "Phở bò",
        price: 50000,
        description: "Nước dùng hầm kỹ, thịt bò như tan trong miệng.",
    },
    {
        id: 3,
        name: "Gỏi cuốn",
        price: 25000,
        description: "Rau sống và tôm thịt cuộn trong bánh tráng, ăn kèm nước chấm đặc biệt.",
    },
];

let menu = `
--------MENU--------
1. Thêm món ăn mới.
2. Xóa món ăn dựa trên tên.
3. Cập nhật thông tin món ăn (tên, giá, mô tả).
4. Hiển thị toàn bộ thực đơn hiện tại.
5. Tìm kiếm món ăn theo tên.
6. Thoát chương trình.

Nhập lựa chọn của bạn: 
`;

let input;
while (input !== 6) {
    input = +prompt(menu);
    switch (input) {
        case 1:
            let name = prompt("Nhập tên món ăn mới: ");
            let price = +prompt("Nhập giá bán của món ăn: ");
            let description = prompt("Viết mô tả ngắn gọn về món ăn: ");
            let newDish = {
                id: Math.floor(Math.random() * 10000),
                name,
                price,
                description
            };
            restaurant.push(newDish);
            console.log("Món ăn mới đã được thêm vào thực đơn.", newDish);
            break;
        case 2:
            let deleteName = prompt("Nhập tên món ăn bạn muốn xóa: ");
            let deleteIndex = restaurant.findIndex(dish => dish.name.toLowerCase() === deleteName.toLowerCase());
            if (deleteIndex !== -1) {
                restaurant.splice(deleteIndex, 1);
                console.log(`Món ăn "${deleteName}" đã được xóa khỏi thực đơn.`);
            } else {
                console.log(`Không tìm thấy món ăn có tên "${deleteName}".`);
            }
            break;
        case 3:
            let updateName = prompt("Nhập tên món ăn bạn muốn thay đổi thông tin: ");
            let updateIndex = restaurant.findIndex(dish => dish.name.toLowerCase() === updateName.toLowerCase());
            if (updateIndex !== -1) {
                let newName = prompt("Nhập tên mới cho món ăn (để trống nếu không muốn thay đổi): ");
                let newPrice = +prompt("Nhập giá mới (để trống nếu không muốn thay đổi): ");
                let newDescription = prompt("Nhập mô tả mới (để trống nếu không muốn thay đổi): ");
                
                restaurant[updateIndex].name = newName || restaurant[updateIndex].name;
                restaurant[updateIndex].price = newPrice || restaurant[updateIndex].price;
                restaurant[updateIndex].description = newDescription || restaurant[updateIndex].description;
                
                console.log("Thông tin món ăn đã được cập nhật thành công.");
                displayOneDish(restaurant[updateIndex]);
            } else {
                console.log(`Không tìm thấy món ăn "${updateName}" trong thực đơn.`);
            }
            break;
        case 4:
            display();
            break;
        case 5:
            let searchName = prompt("Nhập tên món ăn mà bạn đang tìm kiếm: ");
            let foundDishes = restaurant.filter(dish => dish.name.toLowerCase().includes(searchName.toLowerCase()));
            if (foundDishes.length > 0) {
                console.log("Kết quả tìm kiếm:");
                foundDishes.forEach(displayOneDish);
            } else {
                console.log(`Không tìm thấy bất kỳ món ăn nào có tên gần giống "${searchName}".`);
            }
            break;
        case 6:
            console.log("Chương trình đã kết thúc.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ.kiểm tra và thử lại.");
            break;
    }
}

function display() {
    console.log("Thực đơn nhà hàng hiện tại:");
    restaurant.forEach(displayOneDish);
}

function displayOneDish(dish) {
    console.log(`\nTên món ăn: ${dish.name}`);
    console.log(`Giá: ${dish.price} VND`);
    console.log(`Mô tả: ${dish.description}`);
    console.log("----------------------------");
}
