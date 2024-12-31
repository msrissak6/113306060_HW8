// Fetching DOM elements
const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const operatorSelect = document.getElementById('operator');
const calculateBtn = document.getElementById('calculate-btn');
const resultDiv = document.getElementById('result');

// Function definitions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return 'Error: Division by zero';
    }
    return a / b;
}

// Event listener for calculate button
calculateBtn.addEventListener('click', () => {
    const number1 = parseFloat(number1Input.value);
    const number2 = parseFloat(number2Input.value);
    const operator = operatorSelect.value;

    if (isNaN(number1) || isNaN(number2)) {
        resultDiv.textContent = 'Please enter valid numbers.';
        return;
    }

    let result;
    switch (operator) {
        case 'add':
            result = add(number1, number2);
            break;
        case 'subtract':
            result = subtract(number1, number2);
            break;
        case 'multiply':
            result = multiply(number1, number2);
            break;
        case 'divide':
            result = divide(number1, number2);
            break;
        default:
            result = 'Invalid operator';
    }

    if (typeof result === 'number') {
        result = result.toFixed(2);
    }

    resultDiv.textContent = `Result: ${result}`;
});
