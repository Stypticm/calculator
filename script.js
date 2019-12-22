const sum = (a, b) => {
    return a + b;
}

const sub = (a, b) => {
    return a - b;
}

const multi = (a, b) => {
    return a * b;
}

const div = (a, b) => {
    return a / b;
}

function operate(string, number1, number2) {
    switch (string) {
        case '+':
            return sum(number1, number2);
        case '-':
            return sub(number1, number2);
        case '*':
            return multi(number1, number2);
        case '/':
            return div(number1, number2);
        default:
            return 'Вы не ввели оператор';
    }
}

let allResult = [];
let stringRes = '';

// Реализация кнопок с цифрами
function allButtons(button, number) {
    const a = document.querySelector(button);
    a.addEventListener('click', () => {
        stringRes = stringRes + number;
        document.querySelector('.windowInput').value = stringRes;
    });
}

function numbers() {
    for (let i = 0; i < 10; i++) {
        allButtons(`.number_${i}`,`${i}`)
    }
}
numbers();

// Очистка экрана
function clearWindow() {
    const clear = document.querySelector('.clear');
    clear.addEventListener('click', () => {
        document.querySelector('.windowInput').value = '';
        stringRes = '';
        allResult = [];
    })
}
clearWindow();

// Действия с переменнымии
function getMath() {
    const addition = document.querySelector('.sum');
    const subtraction = document.querySelector('.sub');
    const multiplication = document.querySelector('.multi');
    const division = document.querySelector('.div');

    addition.addEventListener('click', () => {
        allResult.push(document.querySelector('.windowInput').value);
        allResult.push('+');
        document.querySelector('.windowInput').value = '';
        document.querySelector('.windowInput').placeholder = '';
        stringRes = '';
    });

    subtraction.addEventListener('click', () => {
        allResult.push(document.querySelector('.windowInput').value);
        allResult.push('-');
        document.querySelector('.windowInput').value = '';
        document.querySelector('.windowInput').placeholder = '';
        stringRes = '';
    });

    multiplication.addEventListener('click', () => {
        allResult.push(document.querySelector('.windowInput').value);
        allResult.push('*');
        document.querySelector('.windowInput').value = '';
        document.querySelector('.windowInput').placeholder = '';
        stringRes = '';
    });

    division.addEventListener('click', () => {
        allResult.push(document.querySelector('.windowInput').value);
        allResult.push('/');
        document.querySelector('.windowInput').value = '';
        document.querySelector('.windowInput').placeholder = '';
        stringRes = '';
    });
}
getMath();

// Вывод полученного результата
function getResult() {
    const result = document.querySelector('.result');
    result.addEventListener('click', () => {
        if (allResult.length <= 2) {
            allResult.push(document.querySelector('.windowInput').value);
            if ((allResult[0]) || (allResult[2]) === 0) {
                document.querySelector('.windowInput').value = 'Cоздание черной дыры..done';
            } else {
                let expression = operate(allResult[1], +allResult[0], +document.querySelector('.windowInput').value);
                document.querySelector('.windowInput').value = expression;
                allResult = [];
            }
        } else if (allResult.length > 2) {
            allResult.push(document.querySelector('.windowInput').value);
            let result = 0;
            // Поиск умножений в массиве
            for (let i = 0; i < allResult.length; i++) {
                if (allResult[i].search(/[*]/g) > -1) {
                    result = multi(allResult[i - 1], allResult[i + 1]);
                    let index = allResult.indexOf('*');
                    let newRes = String(result);
                    allResult.splice(index - 1, 3, newRes);
                }
            }
            // Поиск делений в массиве
            for (let i = 0; i < allResult.length; i++) {
                if ((allResult[i].search(/['/']/g)) > -1) {
                    if (((allResult[i - 1]) || (allResult[i + 1])) === 0) {
                        document.querySelector('.windowInput').value = 'Cоздание черной дыры..done';
                    } else {
                        result = div(allResult[i - 1], allResult[i + 1]);
                        let index = allResult.indexOf('/');
                        let newRes = String(result);
                        allResult.splice(index - 1, 3, newRes);
                    }
                }
            }
            // Поиск сложений и вычитаний
            for (let i = 0; i < allResult.length; i++) {
                if (allResult[i] === '+') {
                    result = sum(+allResult[i - 1], +allResult[i + 1]);
                    let index = allResult.indexOf('+');
                    let newRes = String(result);
                    allResult.splice(index - 1, 3, newRes);
                } else if (allResult[i] === '-') {
                    result = sub(allResult[i - 1], allResult[i + 1]);
                    let index = allResult.indexOf('-');
                    let newRes = String(result);
                    allResult.splice(index - 1, 3, newRes);
                }
            }
            for (let i = 0; i < allResult.length; i++) {
                if (allResult[i] === '+') {
                    result = sum(+allResult[i - 1], +allResult[i + 1]);
                    let index = allResult.indexOf('+');
                    let newRes = String(result);
                    allResult.splice(index - 1, 3, newRes);
                } else if (allResult[i] === '-') {
                    result = sub(allResult[i - 1], allResult[i + 1]);
                    let index = allResult.indexOf('-');
                    let newRes = String(result);
                    allResult.splice(index - 1, 3, newRes);
                }
            }
            let a = +allResult[0];
            document.querySelector('.windowInput').value = a;
        }
    });
}
getResult();