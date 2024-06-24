const WEATHER_API_KEY = "66d6dac659158714ecc7ae920d07ddb9"
const lat = 33.44
const lon = -94.04
const part = "daily"

const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${WEATHER_API_KEY}`

console.log(url)
