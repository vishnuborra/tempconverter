function convertTemperature() {
    var temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    var unit = document.getElementById('unitSelect').value;
    var result = document.getElementById('result');

    if (isNaN(temperatureInput)) {
        result.innerHTML = 'Please enter a valid number.';
        return;
    }

    var convertedTemperature;
    var convertedUnit;

    if (unit === 'celsius') {
        convertedTemperature = (temperatureInput - 32) * (5 / 9);
        convertedUnit = 'Celsius';
    } else if (unit === 'fahrenheit') {
        convertedTemperature = (temperatureInput * (9 / 5)) + 32;
        convertedUnit = 'Fahrenheit';
    } else if (unit === 'kelvin') {
        convertedTemperature = temperatureInput + 273.15;
        convertedUnit = 'Kelvin';
    }

    result.innerHTML = `Converted temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
}
