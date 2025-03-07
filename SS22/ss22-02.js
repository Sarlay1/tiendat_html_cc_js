let numbers = [2, 5, 7, 4, 1, 8, 6];

function checkNumber() {
    let input = Number(prompt("Nhập một số:")); 

    if (Number.isInteger(input) && numbers.includes(input)) {
        alert("Bingo");
    } else {
        alert("Chúc bạn may mắn lần sau");
    }
}

checkNumber();
