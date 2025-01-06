const firstNum = document.querySelector(".firstNum");
const secondNum = document.querySelector(".secondNum");
let results = document.querySelector(".Result");

function cal(method) {
    const val1 = firstNum.value;
    const val2 = secondNum.value;

    if (val1 === "" || val2 === "") {
        alert("Error: Both inputs must be filled.");
        return;
    }

    const num1 = Number(val1);
    const num2 = Number(val2);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Error: Please enter valid numbers.");
        return;
    }

    switch (method) {
        case "+":
            results.innerHTML = num1 + num2;
            break;
        case "-":
            results.innerHTML = num1 - num2;
            break;
        case "*":
            results.innerHTML = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Error: Cannot divide by zero.");
            } else {
                results.innerHTML = num1 / num2;
            }
            break;
        case "%":
            results.innerHTML = num1 % num2;
            break;
        default:
            alert("Error: Invalid operation.");
    }

}
function resetCalculator() {
    firstNum.value = "";
    secondNum.value = "";
    results.innerHTML = "";
}