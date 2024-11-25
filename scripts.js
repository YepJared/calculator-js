const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal")

const inputDisplay = document.querySelector(".input");
const resultDisplay = document.querySelector(".result");

let result = null;
let operator = '';
let input = [];

function add(augend, addend) {
    return Number(augend) + Number(addend);
}

function subtract(minuend, subtrahend) {
    return Number(minuend) - Number(subtrahend);
}

function multiply(multiplier, multiplicand) {
    return Number(multiplier) * Number(multiplicand);
}

function divide(dividend, divisor) {
    return divisor != 0 ? Number(dividend) / Number(divisor) : alert("Do not divide by 0!");
}

function updateInput(value) {
    input.push(value);
    inputDisplay.textContent = input.join('');
}

function updateResult(value) {
    result = value;
    resultDisplay.textContent = value;
    input = [];
    inputDisplay.textContent = '';
}

function operate() {
    switch(operator) {
        case 'plus':
            result = add(result, input.join(''));
            updateResult(result);
            break;
        case 'minus':
            result = subtract(result, input.join(''));
            updateResult(result);
            break;
        case 'times':
            result = multiply(result, input.join(''));
            updateResult(result);
            break;
        case 'divide':
            result = divide(result, input.join(''));
            updateResult(result);
            break;
        default:
            break;
    };
}

function addEventListeners() {
    numbers.forEach((button) => {
        button.addEventListener("click", () => {
            updateInput(button.id)
        });
    });

    operators.forEach((button) => {
        button.addEventListener("click", () => {
            if (result === null) {
                updateResult(input.join(''));
            } else if (result !== null  && input.length != 0) {
                if (operator != '') {
                    operate();
                } else {
                    updateResult(input.join(''));
                }
            }
            operator = button.id;
        });
    });

    clear.addEventListener("click", () => {
        result = null;
        operator = '';
        input = [];
        inputDisplay.textContent = '';
        resultDisplay.textContent = '';
    });

    equal.addEventListener("click", () => {
        operate();
        operator = '';
    });
}

function init() {
    addEventListeners();
}

init();