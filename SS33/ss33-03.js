let dish = [
    { id: 1, name: 'Rau sạch', category: 'Đồ ăn' },
    { id: 2, name: 'Thịt lợn', category: 'Đồ ăn' },
    { id: 3, name: 'Pepsi không calo', category: 'Nước' },
    { id: 4, name: 'Cocacola', category: 'Nước' },
    { id: 5, name: 'Cờ lê', category: 'Dụng cụ' },
    { id: 6, name: 'Tuy vít', category: 'Dụng cụ' },
];

const categorySelect = document.getElementById("categorySelect");
const filterBtn = document.getElementById("filterBtn");
const productList = document.getElementById("productList");

function displayProducts(products) {
    productList.innerHTML = "";
    products.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `<b>Tên sản phẩm:</b> ${item.name} - <b>Danh mục:</b> ${item.category}`;
        productList.appendChild(li);
    });
}


filterBtn.addEventListener("click", () => {
    const selectedCategory = categorySelect.value;
    const filteredProducts = dish.filter(item => 
        item.category === selectedCategory || selectedCategory === ""
    );
    displayProducts(filteredProducts);
});


displayProducts(dish);
