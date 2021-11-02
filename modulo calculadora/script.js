let number = document.querySelector('#calcDisplay');
let additionOperator = document.querySelector('#addition');
let subtractionOperator = document.querySelector('#subtraction');
let multiplicationOperator = document.querySelector('#multiplication');
let divisionOperator = document.querySelector('#division');
let enter = document.querySelector('#enter');
let result = document.querySelector('#result');
let body = document.querySelector('body')

let memory = [];

function handleInput() {
    memory = [...memory, +number.value];
    number.value = ''
}

enter.addEventListener('click', handleInput)


function handleResult() {
    let res = 0

    if (additionOperator.checked) {
        res = memory.reduce((acc, cur) => acc + cur)
    }
    if (subtractionOperator.checked) {
        res = memory.reduce((acc, cur) => acc - cur)
    }
    if (multiplicationOperator.checked) {
        res = memory.reduce((acc, cur) => acc * cur)
    }
    if (divisionOperator.checked) {
        res = memory.reduce((acc, cur) => acc / cur)
    }

    displayResult(res)

}

function displayResult(num) {
    let paragraph = document.createElement('p')
    paragraph.textContent = num
    body.appendChild(paragraph)
}

result.addEventListener('click', handleResult)


