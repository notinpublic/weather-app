const WEATHER_API_KEY = "66d6dac659158714ecc7ae920d07ddb9"
const lat = 33.44
const lon = -94.04
const part = "daily"

const fullUrl = 'https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=daily&appid=66d6dac659158714ecc7ae920d07ddb9'

const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${WEATHER_API_KEY}`

// console.log(url)

async function getWeatherData() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }
  console.log(getWeatherData())
  
