clear();

let firstDigits;
let numbs = 0;
let op;
let secondDigit;
let wait;
let result;

document.getElementById('1').addEventListener('click', () => {
    values(1);
})
document.getElementById('2').addEventListener('click', () => {
    values(2);
})
document.getElementById('3').addEventListener('click', () => {
    values(3);
})
document.getElementById('4').addEventListener('click', () => {
    values(4);
})
document.getElementById('5').addEventListener('click', () => {
    values(5);
})
document.getElementById('6').addEventListener('click', () => {
    values(6);
})
document.getElementById('7').addEventListener('click', () => {
    values(7);
})
document.getElementById('8').addEventListener('click', () => {
    values(8);
})
document.getElementById('9').addEventListener('click', () => {
    values(9);
})
document.getElementById('0').addEventListener('click', () => {
    values(0);
})
document.getElementById('.').addEventListener('click', () => {
    values('.');
})

// ************************************************

document.getElementById('-').addEventListener('click', () => {
    operands('-');
})
document.getElementById('+').addEventListener('click', () => {
    operands('+');
})
document.getElementById('/').addEventListener('click', () => {
    operands('/');
})
document.getElementById('*').addEventListener('click', () => {
    operands('*');
})
document.getElementById('clear').addEventListener('click', () => {
    clear();
})
document.getElementById('DEL').addEventListener('click', () => {
    DEL();
})
document.getElementById('=').addEventListener('click', () => {
    secondDigit = document.getElementById('numb').value
    document.getElementById('numb').value = calc(op);
    wait = null;
})

function values(val) {
    if (val === '.' && firstDigits.includes('.'))
        return;
    else {
        document.getElementById('numb').value += val;
        if (wait == 0) {
            secondDigit += val;
        } else {
            firstDigits += val;
        }
    }
}

function operands(value) {
    firstDigits = document.getElementById("numb").value;
    clear()
    op = value;
    wait = 0;
}

function calc(op) {
    switch (op) {
        case '-':
            result = parseFloat(firstDigits) - parseFloat(secondDigit);
            break
        case '+':
            result = parseFloat(firstDigits) + parseFloat(secondDigit);
            break
        case '/':
            result = parseFloat(firstDigits) / parseFloat(secondDigit);
            break
        case '*':
            result = parseFloat(firstDigits) * parseFloat(secondDigit);
            break

    }
    return result;
}

function clear() {
    document.getElementById('numb').value = ' ';
    // firstDigits = '';
    // secondDigit = '';
}

function DEL() {
    document.getElementById('numb').value = document.getElementById('numb').value.toString().slice(0, -1);
    // Storing it into other variable doesnt work

}