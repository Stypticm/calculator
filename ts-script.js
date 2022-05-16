// Variables
var firstNumber = "";
var secondNumber = "";
var countSymbol = 0;
var symbol = "";
// Field Input
var fieldInput = document.querySelector(".field_for_input");
// Buttons
var numberButton = document.querySelectorAll(".numberBtn");
var symbolButton = document.querySelectorAll(".symbolBtn");
var resultButton = document.querySelector(".resultBtn");
var clearButton = document.querySelector(".clearBtn");
var _loop_1 = function (i) {
    numberButton[i].addEventListener("click", function (e) {
        if (fieldInput.value === "Введите первое число") {
            fieldInput.value = numberButton[i].textContent;
        }
        else {
            fieldInput.value += numberButton[i].textContent;
        }
    });
};
for (var i = 0; i < numberButton.length; i++) {
    _loop_1(i);
}
var _loop_2 = function (i) {
    symbolButton[i].addEventListener("click", function (e) {
        countSymbol += 1;
        if (fieldInput.value === "") {
            fieldInput.value = "Введите первое число";
        }
        else if (fieldInput.value.length > 0 && countSymbol > 0) {
            firstNumber = fieldInput.value;
            fieldInput.value = "";
            symbol = symbolButton[i].textContent;
            for (var i_1 = 0; i_1 < symbolButton.length; i_1++) {
                symbolButton[i_1].disabled = true;
            }
        }
    });
};
for (var i = 0; i < symbolButton.length; i++) {
    _loop_2(i);
}
resultButton.addEventListener("click", function (e) {
    secondNumber = Number(fieldInput.value);
    firstNumber = Number(firstNumber);
    var actions = new Map()
        .set("+", firstNumber + secondNumber)
        .set("-", firstNumber - secondNumber)
        .set("/", firstNumber / secondNumber)
        .set("*", firstNumber * secondNumber);
    (function disbledNumberSymbol() {
        for (var i = 0; i < numberButton.length; i++) {
            numberButton[i].disabled = true;
        }
        for (var i = 0; i < symbolButton.length; i++) {
            symbolButton[i].disabled = true;
        }
        resultButton.disabled = true;
    })();
    return (fieldInput.value = actions.get(symbol));
});
clearButton.addEventListener("click", function (e) {
    fieldInput.value = "";
    for (var i = 0; i < numberButton.length; i++) {
        numberButton[i].disabled = false;
    }
    for (var i = 0; i < symbolButton.length; i++) {
        symbolButton[i].disabled = false;
    }
    resultButton.disabled = false;
});
