let divResult = document.querySelector(".result");
let firstNumber = "";
let secondNumber = "";
let operator = "";

function getFirstNumber(value) {
  firstNumber += value;
  display(firstNumber);
}

function getSecondNumber(value) {
  secondNumber += value;
  display(firstNumber + " " + operator + " " + secondNumber);
}

function getOperator(value) {
  operator = value;
  display(firstNumber + " " + operator);
}

function isOperator(value) {
  return (
    value === "+" ||
    value === "-" ||
    value === "X" ||
    value === "/" ||
    value === "%"
  );
}

function calculate() {
  let result;
  let num1 = Number(firstNumber);
  let num2 = Number(secondNumber);

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "X":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "Error";
      break;
    case "%":
      result = num1 % num2;
      break;
    default:
      result = "Error";
  }

  display(result);
  reset(result);
}

function display(content) {
  divResult.innerHTML = content;
}

function reset(result) {
  firstNumber = "";
  secondNumber = "";
  operator = "";
}

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.innerHTML.trim();

    if (!isNaN(value)) {
      if (!operator) {
        getFirstNumber(value);
      } else {
        getSecondNumber(value);
      }
    } else if (isOperator(value)) {
      getOperator(value);
    } else if (value === "=") {
      calculate();
    } else if (value === "AC") {
      firstNumber = "";
      secondNumber = "";
      operator = "";
      display("");
    }
  });
});
