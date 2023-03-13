const convertToCelsius = function (f) {
    let celcius = ((f - 32) * 5) / 9;
    celcius = parseFloat(celcius.toFixed(1));
    return celcius;
};

const convertToFahrenheit = function (c) {
    let fahrenheit = c * (9 / 5) + 32;
    fahrenheit = parseFloat(fahrenheit.toFixed(1));
    return fahrenheit;
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit,
};
