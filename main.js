let input = document.querySelector('.input');
const addBtn = document.querySelector('.addBtn');
const ul = document.querySelector('.ul');
const deleteAllBtn = document.querySelector('.clear_all-btn')

const todos = [];

let list = '';

addBtn.addEventListener('click', () => {
    // if input value is empty, do nothing
    if (input.value === '') {
        return false;
    }

    // store input value in variable
    let newItem = input.value;

    // add input value to an li
    list += `
    <li class="item">${newItem}
    <button class="trashBtn"><i class="far fa-trash-alt"></i></button>
    </li>`
   ;


    // add li with input value to ul
    ul.innerHTML = list;

    // clear input field
    input.value = '';

   
})


// DELETE FUNCTION
ul.addEventListener('click', (e) => {
    const item = e.target;
    if (item.matches('li')) {
    }

    if (item.matches('i')) {
        const parentEl = e.target.parentNode;
        const li = parentEl.parentNode;
        console.log(li);
        li.style.textDecoration = 'line-through';
    }
})

// CLEAR ALL
deleteAllBtn.addEventListener('click', () => {
    console.log('clear all button is working');
})