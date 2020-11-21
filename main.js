let input = document.querySelector('.input');
const addBtn = document.querySelector('.addBtn');
const ul = document.querySelector('.ul');
const deleteAllBtn = document.querySelector('.clear_all-btn');
let todoList = [];

// ADD BUTTON EVENT HANDLER
addBtn.addEventListener('click', () => {
    // If input value is empty, do nothing
    const task = input.value;
    if (task === '') {
        return false;
    }

    addItem(task);
})


// ADD NEW ITEM TO TODO LIST AND LOCAL STORAGE
const addItem = (item) => {
    // add item to array (list)
    todoList.push(item);
    addDataToLocalStorage(todoList);

    // clear input field
    input.value = '';
}

// HANDLING TODO ITEMS DISPLAY
const displayTodos = (todos) => {
    ul.innerHTML = '';

    todos.forEach(item => {
        // create li element to add item
        const li = document.createElement('li');

        // create class for li element
        li.classList.add('item');

        // create action buttons
        const buttons = `<span><button class="editBtn"><i class="far fa-edit"></i></button>
        <button class="trashBtn"><i class="far fa-trash-alt"></button></span>`

        li.innerHTML = `<span class="item-text" contenteditable="false">${item}</span> ${buttons}`;
        firstItem = ul.firstChild;
        ul.insertBefore(li, firstItem);
    })
}


// EDITING ITEMS FUNTION
ul.addEventListener('click', (e) => {
    const item = e.target;

    if (item.matches('i')) {
        // Delete item
        if (item.className === 'far fa-trash-alt') {
            const parentEl = e.target.parentNode;
            const spanEl = parentEl.parentNode;
            spanEl.parentNode.remove();
        }

        // Edit item
        if (item.className === 'far fa-edit') {
            const spanTag = document.getElementsByTagName('span');
            const editableText = spanTag[0];
            editableText.contentEditable = true;
            editableText.classList.add('editable-text');
            editableText.focus();

            editableText.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    editableText.contentEditable = false;
                    editableText.classList.remove('editable-text');
                }
            })    
        }
    }
})

// ADDING DATA TO LOCAL STORAGE
const addDataToLocalStorage = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
    displayTodos(todoList);
}

// GET TODO LIST FROM LOCAL STORAGE FOR DISPLAY
const getDataFromLocalStorage = () => {
    const tasks = localStorage.getItem('todos');
    todos = JSON.parse(tasks);

    displayTodos(todoList);
}

// CLEAR ALL
deleteAllBtn.addEventListener('click', () => {
    // clear local storage
    localStorage.clear();

    // clear todos
    todoList = [];

    const list = document.querySelectorAll('.ul li');
    for (let i = 0; li = list[i]; i++) {
        li.parentNode.removeChild(li)
    }
})


getDataFromLocalStorage();
