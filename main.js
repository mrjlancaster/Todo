const input = document.querySelector(".input");
const addBtn = document.querySelector(".addBtn");
const ul = document.querySelector(".ul");
const deleteAllBtn = document.querySelector(".clear_all-btn");
let myTodos = [];

function listItemFactory(item) {
  // const text = document.createTextNode(item.task);
  const li = document.createElement("li");
  li.setAttribute("id", item.id);
  li.classList.add("item");

  // create action buttons
  const buttons = `<span><button class="editBtn"><i id=${item.id} class="far fa-edit"></i></button>
       <button class="trashBtn"><i id=${item.id} class="far fa-trash-alt"></button></span>`;

  li.innerHTML = `<span id=${item.id} class="item-text" contenteditable="false">${item.task}</span> ${buttons}`;

  return li;
}

function addTodo() {
  addBtn.addEventListener("click", () => {
    const inputValue = input.value;

    if (!inputValue) {
      alert("A value must be entered in the input field");
      return;
    }

    const task = { id: myTodos.length + 1, task: inputValue };
    const li = listItemFactory(task);

    ul.appendChild(li);
    myTodos.push(task);
    input.value = "";
  });
}

function deleteItem(id) {
  const newTodos = myTodos.filter((item) => item.id !== Number(id));
  const todoItems = document.querySelectorAll(".item");

  for (let i = 0; i < todoItems.length; i++) {
    const node = todoItems[i];

    if (node.id === id) {
      ul.removeChild(node);
    }
  }

  myTodos = newTodos;
}

// Handle editing and deletings tasks
function handleEditAndDeleteItem() {
  ul.addEventListener("click", (e) => {
    const item = e.target;

    if (item.matches("i")) {
      // Delete item
      if (item.className === "far fa-trash-alt") {
        deleteItem(item.id);
      }

      // Edit item
      if (item.className === "far fa-edit") {
        const listItems = ul.childNodes;

        for (let i = 0; i < listItems.length; i++) {
          const li = listItems[i];

          if (li.id === item.id) {
            const editableTag = li.childNodes[0];
            editableTag.contentEditable = true;
            editableTag.classList.add("editable-text");
            editableTag.focus();

            editableTag.addEventListener("keydown", (e) => {
              if (e.key === "Enter") {
                editableTag.contentEditable = false;
                editableTag.classList.remove("editable-text");
              }
            });
          }
        }
      }
    }
  });
}

function clearList() {
  deleteAllBtn.addEventListener("click", () => {
    if (myTodos.length) {
      localStorage.clear();
      myTodos.length = 0;

      const list = document.querySelectorAll(".ul li");
      for (let i = 0; (li = list[i]); i++) {
        li.parentNode.removeChild(li);
      }
    }
  });
}

addTodo();
handleEditAndDeleteItem();
clearList();
