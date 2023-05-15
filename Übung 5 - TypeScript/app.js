$(document).ready(function () {
    $('#convertInches').on('click', function () {
        var inchInput = $('#inchInput')[0];
        var resultElement = $('#resultDisplay');
        var inchValue = parseFloat(inchInput.value);
        var cmValue = inchToCm(inchValue);
        if (!isNaN(inchValue) && inchValue >= 0) {
            resultElement.text(inchValue + ' Zoll sind ' + cmValue + ' Zentimeter!');
        }
        else {
            resultElement.text('Bitte geben Sie eine gültige Zahl ein!');
        }
    });
    function inchToCm(inch) {
        return inch * 2.54;
    }
});
