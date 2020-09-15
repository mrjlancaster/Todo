const input = document.querySelector('.input');
const output = document.querySelector('.item');

// buttons
const addItem = document.querySelector('.add_item');
const editItem = document.querySelector('.edit_item');
const deleteItem = document.querySelector('.delete_item');

// add value to output
addItem.addEventListener('click', addNew);

function addNew() {
    let p = document.createElement('p');
    let inputValue = input.value;
    p.innerText = inputValue;
    output.appendChild(p);

    // mark item as done
    p.addEventListener('click', () => {
        p.style.textDecoration = 'line-through';
    })

    // remove item from list
    p.addEventListener('dblclick', () => {
        output.removeChild(p);
    })

    input.value = '';

}


// delete button
deleteItem.addEventListener('click', () => {
    if (output.innerText != '') {
        output.innerText = '';
    } else {
        output.innerText = 'It is empty!';
    }
})