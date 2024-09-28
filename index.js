const WEATHER_API_KEY = "c362d5f26dedb15cdba537c25d97e9b4";
const lat = 51.51;
const lon = 0.12;

const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`;
async function getWeatherData() {
  try {
    const response = await fetch(currentWeatherUrl);
    const weatherResponse = await response.json();
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const event = new Date(Date.now());
    const time = event.toString();
    const degrees = weatherResponse.main.temp;
    const condition = weatherResponse.weather[0].description;
    const location = weatherResponse.name;
    const result = {
      degrees: degrees,
      condition: condition,
      location: location,
      time: time,
    };
    console.log(result);
    return result;
  } catch (error) {
    console.error(error.message);
  }
}
getWeatherData();
