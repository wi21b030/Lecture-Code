function calculateResult(operator) {
    let num1 = parseFloat(document.getElementById('num1').value)
    let num2 = parseFloat(document.getElementById('num2').value)

    if (isNaN(num1) || isNaN(num2)) {
        alert("Both number fields must be entered! Try again!");
        return;
    }

    if (operator === '/' && num2 === 0) {
        alert("Can not divide by 0!");
        return;
    }

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            break;
    }

    document.getElementById("result").value = result;
    displayResult(operator, num1, num2, result);
}
function displayResult(operator, num1, num2, result) {
    let resultString = num1 + "" + operator + " " + num2 + " = " + result;
    let newParagraph = document.createElement("p");
    newParagraph.textContent = resultString;
    document.getElementById("previous").appendChild(newParagraph);
}
