function addSubject() {
    let subjectInput = document.getElementById("subjectInput");
    let subjectList = document.getElementById("subjectList");
    let subjectName = subjectInput.value.trim();

    if (!subjectName)
        return alert("Tên môn học không được để trống");

    let li = document.createElement("li");
    li.textContent = subjectName;
    subjectList.appendChild(li);
    subjectInput.value = "";
}
