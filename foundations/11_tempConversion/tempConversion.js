const convertToCelsius = function(f) {
  const celsius = (f - 32) * 5/9;
  return  Number.isInteger(celsius) ? Number(celsius.toFixed(0)) : Number(celsius.toFixed(1));
};

const convertToFahrenheit = function(c) {
  const fahrenheit = (c * 9/5) + 32;
  return  Number.isInteger(fahrenheit) ? Number(fahrenheit.toFixed(0)) : Number(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
