const button = document.getElementById("mode");

button.onclick = function () {
    const body = document.body;
    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    } else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
};
