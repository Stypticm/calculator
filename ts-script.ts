// Variables
let firstNumber: any = "";
let secondNumber: any = "";
let countSymbol: number = 0;
let symbol: any = "";

// Field Input
const fieldInput: any = document.querySelector(".field_for_input");

// Buttons
const numberButton: any = document.querySelectorAll(".numberBtn");
const symbolButton: any = document.querySelectorAll(".symbolBtn");
const resultButton: any = document.querySelector(".resultBtn");
const clearButton: any = document.querySelector(".clearBtn");

for (let i = 0; i < numberButton.length; i++) {
  numberButton[i].addEventListener("click", (e: Event) => {
    if (fieldInput.value === "Введите первое число") {
      fieldInput.value = numberButton[i].textContent;
    } else {
      fieldInput.value += numberButton[i].textContent;
    }
  });
}

for (let i = 0; i < symbolButton.length; i++) {
  symbolButton[i].addEventListener("click", (e: Event) => {
    countSymbol += 1;
    if (fieldInput.value === "") {
      fieldInput.value = "Введите первое число";
    } else if (fieldInput.value.length > 0 && countSymbol > 0) {
      firstNumber = fieldInput.value;
      fieldInput.value = "";
      symbol = symbolButton[i].textContent;
      for (let i = 0; i < symbolButton.length; i++) {
        symbolButton[i].disabled = true;
      }
    }
  });
}

resultButton.addEventListener("click", (e: Event) => {
  secondNumber = Number(fieldInput.value);
  firstNumber = Number(firstNumber);

  switch (symbol) {
    case "+":
      fieldInput.value = firstNumber + secondNumber;

      for (let i = 0; i < numberButton.length; i++) {
        numberButton[i].disabled = true;
      }
      for (let i = 0; i < symbolButton.length; i++) {
        symbolButton[i].disabled = true;
      }
      resultButton.disabled = true;
      break;
    case "-":
      fieldInput.value = firstNumber - secondNumber;

      for (let i = 0; i < numberButton.length; i++) {
        numberButton[i].disabled = true;
      }
      for (let i = 0; i < symbolButton.length; i++) {
        symbolButton[i].disabled = true;
      }
      break;
    case "/":
      fieldInput.value = firstNumber / secondNumber;

      for (let i = 0; i < numberButton.length; i++) {
        numberButton[i].disabled = true;
      }
      for (let i = 0; i < symbolButton.length; i++) {
        symbolButton[i].disabled = true;
      }
      break;
    case "*":
      fieldInput.value = firstNumber * secondNumber;

      for (let i = 0; i < numberButton.length; i++) {
        numberButton[i].disabled = true;
      }
      for (let i = 0; i < symbolButton.length; i++) {
        symbolButton[i].disabled = true;
      }
      break;

    default:
      break;
  }
});

clearButton.addEventListener("click", (e: Event) => {
  fieldInput.value = "";
  for (let i = 0; i < numberButton.length; i++) {
    numberButton[i].disabled = false;
  }
  for (let i = 0; i < symbolButton.length; i++) {
    symbolButton[i].disabled = false;
  }
  resultButton.disabled = false;
});
