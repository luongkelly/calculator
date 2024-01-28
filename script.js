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
    if (currentInput.includes('.')) {
        return;
    }
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

equals.addEventListener('click', () => {
    calculate();
    changeDisplay();
})

function operate (operator, a, b) {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case 'x': return a * b;
        case '÷': 
        if (b == 0) {
            return "Error";
        }
        return a / b;
        default: null;
    }
}

function calculate() {
    let result;
    result = operate(currentOperation, parseFloat(prevInput), parseFloat(currentInput));
    if (Math.abs(result) > 999999999 || result.length > 9) {
        result = result.toExponential(2);
    }
    currentInput = result;
    currentOperation = null;
    prevInput = '';
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
    if (currentInput.length < 10) {
        currentInput = currentInput.toString() + number.toString();
    }
}

function chooseOperation(operation) {
    if (currentInput == '') return;
    if (prevInput !== '') {
        calculate();
    }
    currentOperation = operation;
    prevInput = currentInput;
    currentInput = '';
}