const weatherData = [
  { city: "Kolkata", tempC: 36, condition: "Sunny" },
  { city: "Darjeeling", tempC: 15, condition: "Cloudy" },
  { city: "Delhi", tempC: 42, condition: "Heatwave" },
  { city: "Mumbai", tempC: null, condition: "Rainy" }, // সেন্সর খারাপ!
];

let validWeatherData = weatherData.filter((check) => check.tempC !== null);
let processedWeather = validWeatherData.map(({ city, tempC, condition }) => {
  let tempF = (tempC * 9) / 5 + 32;
  let alert = tempC > 30 ? "Hot" : "Pleasant";
  return {
    city,
    tempC,
    condition,
    tempF: tempF,
    alert: alert,
  };
});

let hottestCity = processedWeather.reduce((acc, current) => {
  return current.tempC > acc.tempC ? current : acc;
});
console.log(processedWeather);
console.log(
  `Hottest City is ${hottestCity.city} with ${hottestCity.tempC}°C (${hottestCity.tempF}°F)`,
);
