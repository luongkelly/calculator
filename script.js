const numbers = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operation');
const allClear = document.getElementById('all-clear');
const clear = document.getElementById('clear');
const sign = document.getElementById('sign');
const percent = document.getElementById('percent');
const point = document.getElementById('point');
const equals = document.getElementById('equals');
const pscreen = document.getElementById('prev');
const cscreen = document.getElementById('cuurent');

let prevInput = '';
let currentInput = '';

function operate (operator, a, b) {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '÷': return a / b;
        default: null;
    }
}

function clear () {
    currentInput = '';
    prevInput = '';
}