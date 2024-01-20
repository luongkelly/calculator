const numbers = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operation');
const allClear = document.getElementById('all-clear');
const clear = document.getElementById('clear');
const sign = document.getElementById('sign');
const percent = document.getElementById('percent');
const point = document.getElementById('point');
const equals = document.getElementById('equals');
const pscreen = document.getElementById('prev');
const cscreen = document.getElementById('current');

let prevInput = '';
let currentInput = '';
let currentOperation = null;

numbers.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.textContent);
        changeDisplay();
    });
});

operator.forEach(button => {
    button.addEventListener('click', () => {
        chooseOperation(button.textContent);
        changeDisplay();
    });
});

allClear.addEventListener('click', () => {
    currentOperation = '';
    prevInput = '';
    currentInput = '';
    changeDisplay();
})

clear.addEventListener('click', () => {
    currentInput = currentInput.slice(0, -1);
    changeDisplay();
})

point.addEventListener('click', () => {
    currentInput += '.';
    changeDisplay();
})

percent.addEventListener('click', () => {
    currentInput = parseFloat(currentInput) / 100;
    changeDisplay();
})

sign.addEventListener('click', () => {
    currentInput = currentInput ? -currentInput : '';
    changeDisplay();
})

function operate (operator, a, b) {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '÷': return a / b;
        default: null;
    }
}

function changeDisplay() {
    cscreen.textContent = currentInput;
    if (currentOperation != null) {
        pscreen.textContent = prevInput + currentOperation;
    } 
    else {
        pscreen.textContent = '';
    }
}

function appendNumber (number) {
    currentInput = currentInput.toString() + number.toString();
}

function chooseOperation(operation) {
    if (currentInput === '') return;
    if (prevInput !== '') {
        calculate();
    }
    currentOperation = operation;
    prevInput = currentInput;
    currentInput = '';
}