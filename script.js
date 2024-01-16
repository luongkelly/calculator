const numbers = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operation');
const allClearBtn = document.getElementById('all-clear');
const clearBtn = document.getElementById('clear');
const sign = document.getElementById('sign');
const percent = document.getElementById('percent');
const point = document.getElementById('point');
const equals = document.getElementById('equals');
const pscreen = document.getElementById('prev');
const cscreen = document.getElementById('current');

let prevInput = '';
let currentInput = '';
let currentOperation = null;

function operate (operator, a, b) {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '÷': return a / b;
        default: null;
    }
}

function allClear () {
    pscreen.textContent = '';
    cscreen.textContent = '';
}

function clear () {
    currentInput = '';
}

function addPoint () {
    currentInput += '.';
}

function toPercent () {
    currentInput.textContent = parseFloat(currentInput) / 100;
}

function updateDisplay() {
    cscreen.textContent = currentInput;
    if (currentOperation != null) {
        pscreen.textContent = pscreen + currentOperation;
    } 
    else {
        pscreen.textContent = '';
    }
}

function appendNumber (number) {
    currentInput = currentInput.toString() + number.toString();
}