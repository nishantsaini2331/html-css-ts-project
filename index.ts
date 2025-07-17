const input = document.getElementById("input-id") as HTMLInputElement;

const form = document.getElementById("form-id") as HTMLFormElement;
const ul = document.getElementById("ul-id") as HTMLUListElement;

interface Todo {
  id: number;
  text: string;
}

let todos: Todo[] = [];

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

function editBtn(id: number) {
  const todo = todos.find((todo) => todo.id === id);

  if (todo) {
    const updatedText = prompt("Enter Updated todo : ", todo?.text);
    if (updatedText) {
      todo.text = updatedText;
      renderTodo();
    }
  }
}

function deleteBtn(id: number) {
  todos = todos.filter((todo) => todo.id !== id);
  renderTodo();
}
