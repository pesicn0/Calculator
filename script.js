let btns = document.querySelectorAll('.btn');
let result = document.querySelector('#result');
let operationBtns = document.querySelectorAll('.operation');
let grid = document.querySelector('.grid-container');
let body = document.querySelector('body');
let number1 = '';
let number2 = '';
let currentOperation = '';
let totalResult = 0;
totalResult = parseFloat(totalResult);
let i = false; //operation indicator
btns.forEach(btn => {
    btn.addEventListener('click', e => {
        let currentBtn = e.target;
        result.value += currentBtn.value;
        if (!i) {
            number1 += currentBtn.value;
        } else {
            number2 += currentBtn.value;
        }
    })
})

operationBtns.forEach(obtn => {
    obtn.addEventListener('click', e => {
        i = true;
        currentOperation = e.target.value;
        result.value = '';
        number1 = parseFloat(number1);
        totalResult = number1;
        if (number1 != '' && number2 != '') {
            solve();
        }
    })
})

const solve = () => {
    number2 = parseFloat(number2);
    switch (currentOperation) {
        case '+': totalResult += number2; break;
        case '-': totalResult -= number2; break;
        case '*': totalResult *= number2; break;
        case '/': totalResult /= number2; break;
    }
    result.value = totalResult;
    number1 = totalResult;
    number2 = 0;
}

const deletecharacter = () => {
    if (result.value != '') {
        result.value = result.value.slice(0, -1);
    }
}

const reset = () => {
    number1 = 0;
    number2 = 0;
    currentOperation = '';
    totalResult = 0;
    result.value = '';
    i = false;
}

//theme switch
const switchTheme = () => {
    result.classList.remove('theme1-result');
    result.classList.add('theme2-result');
    grid.classList.remove('theme1-grid');
    grid.classList.add('theme2-grid');
    body.classList.remove('theme1-body');
    body.classList.add('theme2-body');
}

function switchtheme(tema) {
    document.body.classList.remove("tema1", "tema2", "tema3");
    document.body.classList.add(tema);
    let tm1 = document.querySelector('#theme1');
    let tm2 = document.querySelector('#theme2');
    let tm3 = document.querySelector('#theme3');
    if (tema === 'tema1') {
        tm1.style.backgroundColor = 'var(--sum-key-background-color)';
        tm2.style.backgroundColor = 'transparent';
        tm3.style.backgroundColor = 'transparent';
    }
    if (tema === 'tema2') {
        tm2.style.backgroundColor = 'var(--sum-key-background-color)';
        tm1.style.backgroundColor = 'transparent';
        tm3.style.backgroundColor = 'transparent';
    }
    if (tema === 'tema3') {
        tm3.style.backgroundColor = 'var(--sum-key-background-color)';
        tm1.style.backgroundColor = 'transparent';
        tm2.style.backgroundColor = 'transparent';
    }
}