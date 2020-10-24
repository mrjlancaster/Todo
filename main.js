let input = document.querySelector('.input');
const addBtn = document.querySelector('.addBtn');
const ul = document.querySelector('.ul');

const todos = [];

let list = '';

addBtn.addEventListener('click', () => {
    // store input value in variable
    let newItem = input.value;

    // add input value to an li
    list += `<li class="item">${newItem}</li>`;

    // add li with input value to ul
    ul.innerHTML = list;

    // clear input field
    input.value = '';
})



// DELETE FUNCTION
ul.addEventListener('click', (e) => {
    console.log('ul working');
    if (e.target.matches('li')) {
        e.target.style.textDecoration = 'line-through';
    }
})


