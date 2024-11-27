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
    if (input.length >= 12) {input.pop()}
    input.push(value);
    inputDisplay.textContent = input.join('');
}

function updateResult(value) {
    result = value;
    resultDisplay.textContent = value.toString().length <= 18 ? value : Number(value).toPrecision(14);
    input = [];
    inputDisplay.textContent = '\xa0';
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
            if (result) {
                updateResult(result);
            } else {
                resetPage();
            }
            break;
        default:
            break;
    };
}

function removeHighlights() {
    const highlightedOperator = document.querySelector('.chosen');
    if (highlightedOperator) {
        highlightedOperator.classList.remove("chosen");
    }
}

function resetPage() {
    result = null;
    operator = '';
    input = [];
    inputDisplay.innerText = '\xa0';
    resultDisplay.innerText = '\xa0';
    removeHighlights();
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
            removeHighlights();
            button.classList.add("chosen")
        });
    });

    clear.addEventListener("click", () => {
        resetPage();
    });

    equal.addEventListener("click", () => {
        operate();
        operator = '';
        removeHighlights();
    });
}

function init() {
    addEventListeners();
}

init();