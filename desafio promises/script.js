let generatorBtn = document.querySelector('#generator');
let list = document.querySelector('ul');

function randomNum() {
    return Math.round(Math.random() * 10);
}

function createArray() {
    let lenght = randomNum()
    return [...new Array(lenght)]
        .map(randomNum)
}

generatorBtn.addEventListener('click', () => {
    let promises = [
        createRandomPromise(3000),
        createRandomPromise(1000),
        createRandomPromise(1300)
    ];
    promises.forEach(promise => promise.then(addToList))

});


function createRandomPromise(time) {
    let fn = (resolve, reject) => {
        setTimeout(() => resolve(createArray()), time);
    };
    return new Promise(fn);
}

function addToList(arr) {
    let li = document.createElement('li');
    li.textContent = JSON.stringify(arr);
    list.appendChild(li);
}