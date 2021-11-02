let user = document.querySelector('#name');
let addButton = document.querySelector('#add');
let list = document.querySelector('ul');

addButton.addEventListener('click', addUser);

function addUser() {
    let item = createItem(user.value);
    list.appendChild(item);
    clearInput();

}

function clearInput() {
    user.value = '';
}

function createParagraph(name) {
    let paragraph = document.createElement('p');
    paragraph.textContent = name;
    return paragraph;
}

function createButton(callback) {
    let button = document.createElement('button');
    button.textContent = 'Remover';
    button.onclick = callback;
    return button;
}

function createItem(name) {
    let item = document.createElement('li');

    let paragraph = createParagraph(name);
    item.appendChild(paragraph);

    let button = createButton(() => list.removeChild(item));
    item.appendChild(button);

    return item;
}