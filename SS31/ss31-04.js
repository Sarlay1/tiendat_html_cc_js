const popup = document.querySelector("#myPopup");

const openPopup = () => {
    popup.style.display = "flex";
};

const closePopup = () => {
    popup.style.display = "none";
};

popup.addEventListener("click", (event) => {
    if (event.target === popup) {
        closePopup();
    }
});
