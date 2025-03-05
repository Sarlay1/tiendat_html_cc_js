let check = 1
while (check < 2) {
    let num1 = +prompt("Nhập hệ số a: ")
    let num2 = +prompt("Nhập hệ số b: ")
    let num3 = +prompt("Nhập hệ số c: ")
    let x1 = 0;
    let x2 = 0;
    if (Number.isInteger(num1) !== true || Number.isInteger(num2) !== true || Number.isInteger(num3) !== true) {
        alert("Giá trị vừa nhập không phải số")
    } else {
        if (num1 === 0) {
            if (num2 === 0) {
                if (num3 === 0) {
                    alert("Phương trình vô số nghiệm")
                    check++
                } else {
                    alert("Phuong trình vô nghiệm")
                    check++
                }
            } else {
                x1 = -num3 / num2
                alert("Phương trình có nghiệm duy nhất x = " + x1)
                check++
            }
        } else {
            let delta = num2 * num2 - 4 * num1 * num3
            if (delta < 0) {
                alert("Phương trình vô nghiệm")
                check++
            } else if (delta === 0) {
                x1 = -num2 / (2 * num1)
                alert("Phương trình có nghiệm kép x1 = x2 = " + x1)
                check++
            } else if (delta > 0) {
                x1 = (-num2 + Math.sqrt(delta)) / (2 * num1)
                x2 = (-num2 - Math.sqrt(delta)) / (2 * num1)
                alert("Phương trình có 2 nghiệm pb x1 = " + x1 + " va x2 = " + x2)
                check++
            }
        }
    }

}