const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");

const inputDisplay = document.querySelector(".input");
const resultDisplay = document.querySelector(".result");

let result = null;
let operator = '';
let input = [];

function add(augend, addend) {
    return augend + addend;
}

function subtract(minuend, subtrahend) {
    return minuend - subtrahend;
}

function multiply(multiplier, multiplicand) {
    return multiplier * multiplicand;
}

function divide(dividend, divisor) {
    return divisor != 0 ? dividend / divisor : alert("Do not divide by 0!");
}

function addEventListeners() {
    numbers.forEach((button) => {
        button.addEventListener("click", () => {
            input.push(Number(button.id));
            inputDisplay.textContent = input.join('');
        });
    });

    operators.forEach((button) => {
        button.addEventListener("click", () => {
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
}

function init() {
    addEventListeners();
}

init();