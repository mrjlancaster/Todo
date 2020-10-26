let input = document.querySelector('.input');
const addBtn = document.querySelector('.addBtn');
const ul = document.querySelector('.ul');
const deleteAllBtn = document.querySelector('.clear_all-btn')

let list = '';

addBtn.addEventListener('click', () => {
    // if input value is empty, do nothing
    if (input.value === '') {
        return false;
    }

    // add new item function
    const addItem = () => {
        const li = document.createElement('li');
        const inputValue = input.value;
        li.classList.add('item');

        li.innerHTML = `${inputValue}
        <button class="trashBtn"><i class="far fa-trash-alt"></button>`;

        // insert item to top of the list
        const firstItem = ul.firstChild;
        ul.insertBefore(li, firstItem);    
    }

    addItem();

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
        li.remove();
    }
})

// CLEAR ALL
deleteAllBtn.addEventListener('click', () => {
    const list = document.querySelectorAll('.ul li');
    for (let i = 0; li = list[i]; i++) {
        li.parentNode.removeChild(li)
        console.log(i);
    }
})