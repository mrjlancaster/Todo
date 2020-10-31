let input = document.querySelector('.input');
const addBtn = document.querySelector('.addBtn');
const ul = document.querySelector('.ul');
const deleteAllBtn = document.querySelector('.clear_all-btn');

addBtn.addEventListener('click', () => {
    // If input value is empty, do nothing
    if (input.value === '') {
        return false;
    }

    // ADD ITEMS FUNCTION
    const addItem = () => {
        const inputValue = input.value;

        const li = document.createElement('li');
        li.classList.add('item');

        const buttons = `<span><button class="editBtn"><i class="far fa-edit"></i></button>
        <button class="trashBtn"><i class="far fa-trash-alt"></button></span>`

        li.innerHTML = `<span class="item-text" contenteditable="false">${inputValue}</span> ${buttons}`;

        // Insert new item to top of the list
        const firstItem = ul.firstChild;
        ul.insertBefore(li, firstItem);    
    }

    addItem(); // Call addItem funtion

    // Clear input field
    input.value = '';
})


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

// CLEAR ALL
deleteAllBtn.addEventListener('click', () => {
    const list = document.querySelectorAll('.ul li');
    for (let i = 0; li = list[i]; i++) {
        li.parentNode.removeChild(li)
    }
})