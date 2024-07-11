const WEATHER_API_KEY = "c362d5f26dedb15cdba537c25d97e9b4";
const lat = 44.34;
const lon = 10.99;
const part = "daily";

const fullUrl =
  "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=daily&appid=66d6dac659158714ecc7ae920d07ddb9";

const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${WEATHER_API_KEY}`;

const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`;

const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/ditto";

// const currentWeatherUrl = https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}

// console.log(url)

async function getWeatherData() {
  try {
    const response = await fetch(currentWeatherUrl);
    const json = await response.json();
    return json;
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    // const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}
// console.log(await getWeatherData());

function getWeatherThen() {
  fetch(currentWeatherUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log("test");
      return data;
    });
}
// getWeatherThen()

async function getPokemonData() {
  try {
    const response = await fetch(pokemonUrl);
    const json = await response.json();
    console.log(json);
    return response;
  } catch (error) {
    console.error(error.message);
  }
}
console.log(await getPokemonData());
