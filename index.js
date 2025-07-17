"use strict";
const input = document.getElementById("input-id");
const form = document.getElementById("form-id");
const ul = document.getElementById("ul-id");
let todos = [];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    todos.push({
        id: Math.random(),
        text: input.value,
    });
    renderTodo();
    input.value = "";
});
function renderTodo() {
    ul.innerHTML = "";
    todos.forEach((todo) => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = todo.text;
        const div = document.createElement("div");
        div.className = "actions";
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "edit";
        editButton.onclick = () => editBtn(todo.id);
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete";
        deleteButton.onclick = () => deleteBtn(todo.id);
        div.appendChild(editButton);
        div.appendChild(deleteButton);
        li.appendChild(span);
        li.appendChild(div);
        ul.appendChild(li);
    });
}
function editBtn(id) {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
        const updatedText = prompt("Enter Updated todo : ", todo === null || todo === void 0 ? void 0 : todo.text);
        if (updatedText) {
            todo.text = updatedText;
            renderTodo();
        }
    }
}
function deleteBtn(id) {
    todos = todos.filter((todo) => todo.id !== id);
    renderTodo();
}
