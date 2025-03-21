function checkEmail() {
    let emailInput = document.getElementById("emailInput");
    let email = emailInput.value.trim();
    let result = document.getElementById("result");

    let isValid = email.includes("@") && (email.endsWith(".com") || email.endsWith(".vn"));

    result.textContent = isValid ? "Email hợp lệ!" : "Email không hợp lệ!";
    result.className = isValid ? "valid" : "invalid";
}
