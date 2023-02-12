let input = document.querySelector(".input");
const addBtn = document.querySelector(".addBtn");
const ul = document.querySelector(".ul");
const deleteAllBtn = document.querySelector(".clear_all-btn");
let myTodos = [];

function getTodos() {
  const list = JSON.parse(localStorage.getItem("todos"));

  if (list == null) {
    return;
  } else {
    myTodos = list;
  }
}

function setTodos(list) {
  myTodos = list;
  localStorage.setItem("todos", JSON.stringify(list));
}

function addTodo() {
  addBtn.addEventListener("click", () => {
    const inputValue = input.value;

    if (!inputValue) {
      alert("A value must be entered in the input field");
      return;
    }

    const task = { id: myTodos.length + 1, task: inputValue };
    myTodos.push(task);
    localStorage.setItem("todos", JSON.stringify(myTodos));
    input.value = "";
  });
}

function deleteItem(id) {
  const newTodo = myTodos.filter((item) => item.id !== Number(id));
  setTodos(newTodo);
}

// HANDLING TODO ITEMS DISPLAY
const displayTodos = (todos) => {
  todos.forEach((item) => {
    // create li element to add item
    const li = document.createElement("li");
    li.setAttribute("id", item.id);

    // create class for li element
    li.classList.add("item");

    // create action buttons
    const buttons = `<span><button class="editBtn"><i class="far fa-edit"></i></button>
        <button class="trashBtn"><i id=${item.id} class="far fa-trash-alt"></button></span>`;

    li.innerHTML = `<span id=${item.id} class="item-text" contenteditable="false">${item.task}</span> ${buttons}`;
    firstItem = ul.firstChild;
    ul.insertBefore(li, firstItem);
  });
};

// Handle editing and deletings tasks
function handleEditAndDeleteItem() {
  ul.addEventListener("click", (e) => {
    const item = e.target;

    if (item.matches("i")) {
      // Delete item
      if (item.className === "far fa-trash-alt") {
        deleteItem(item.id);
        // const parentEl = e.target.parentNode;
        // const spanEl = parentEl.parentNode;
        // spanEl.parentNode.remove();
      }

      // Edit item
      if (item.className === "far fa-edit") {
        const spanTag = document.getElementsByTagName("span");
        const editableText = spanTag[0];
        editableText.contentEditable = true;
        editableText.classList.add("editable-text");
        editableText.focus();

        editableText.addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            editableText.contentEditable = false;
            editableText.classList.remove("editable-text");
          }
        });
      }
    }
  });
}

function clearList() {
  deleteAllBtn.addEventListener("click", () => {
    if (myTodos.length) {
      localStorage.clear();
      myTodos = [];

      const list = document.querySelectorAll(".ul li");
      for (let i = 0; (li = list[i]); i++) {
        li.parentNode.removeChild(li);
      }
    }
  });
}

getTodos();
addTodo();
displayTodos(myTodos);
handleEditAndDeleteItem();
clearList();
