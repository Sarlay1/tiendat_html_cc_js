let result = "javascript" + 5;
console.log(result); // "javascript5" (Nối chuỗi)
result = "javascript" - 1;
console.log(result); // NaN là chuỗi nên không trừ được
result = "3" + 2;
console.log(result); // "32" Nối chuỗi vì cùng là số
result = "5" - 4;
console.log(result); // Chuỗi số được chuyển thành số
result = isNaN("123");
console.log(result); // false "123" là số hợp lệ
result = isNaN("hello");
console.log(result); // true "hello" là chuỗi kí tự
result = Number.isNaN("123");
console.log(result); // false "123" không phải NaN
result = Number.isNaN(NaN);
console.log(result); // true (NaN là NaN)