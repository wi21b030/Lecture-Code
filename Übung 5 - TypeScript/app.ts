$(document).ready(function () {
    $('#convertInches').on('click', function () {
        const inchInput = $('#inchInput')[0] as HTMLInputElement;
        const resultElement = $('#resultDisplay');
        const inchValue = parseFloat(inchInput.value);
        const cmValue = inchToCm(inchValue);
        if (!isNaN(inchValue) && inchValue >= 0) {
            resultElement.text(inchValue + ' Zoll sind ' + cmValue + ' Zentimeter!');
        } else {
            resultElement.text('Bitte geben Sie eine gültige Zahl ein!');
        }
    });

    function inchToCm(inch: number): number {
        return inch * 2.54;
    }
});