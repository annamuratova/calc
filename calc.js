

let input = document.querySelector('input');
let numbers = document.querySelectorAll('.number');
let key = 0;
let state = true;
let opr = '';
for (let number of numbers) {
    number.addEventListener('click', function (event) {
        inputNumber(event.target.value);
    });
};

let delet = document.querySelector('.delet');
delet.addEventListener('click', () => {
    deleteNumber();
})

let operations = document.querySelectorAll('.opr');
for (let operation of operations) {
    operation.addEventListener('click', function (event) {
        calc(event.target.value);
    });
}

let clear = document.querySelector('.clear');
clear.addEventListener('click', function (event) {
    reset();
});

document.addEventListener('keydown', () => {

    if (event.key >= '0' && event.key <= '9') {
        inputNumber(event.key);
    }

    if (event.key == '+' || event.key == '-' || event.key == '/' || event.key == '*' || event.key == 'Enter') {
        calc(event.key);
    }

    if (event.key == 'Backspace') {
        deleteNumber()
    }

    if (event.key == 'Escape') reset();
})

function calc(operation) {
    if (state == false) {
        switch (opr) {
            case '+':
                input.value = key + parseFloat(input.value);
                break;
            case '-':
                input.value = key - parseFloat(input.value)
                break;
            case '*':
                input.value = key * parseFloat(input.value);
                break;
            case '/':
                input.value = key / parseFloat(input.value);
                break;
        }
        key = +input.value;
    }
    state = true;
    opr = operation;
}

function reset() {
    input.value = 0;
    key = 0;
    state = true;
    opr = '';
}

function inputNumber(value) {
    if (state) {
        input.value = value;
        state = false;
    } else {
        input.value = input.value + value;
    };
}

function deleteNumber() {
    input.value = input.value.slice(0, input.value.length - 1);
    if (input.value === '') {
        key = 0;
        input.value = 0;
        state = true;
    }
}
