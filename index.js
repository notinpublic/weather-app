// import jsonImport from "./test.json"
const jsonImport = require("./test.json")
const WEATHER_API_KEY = "c362d5f26dedb15cdba537c25d97e9b4";
const lat = 44.34;
const lon = 10.99;
const part = "daily";

const fullUrl =
  "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=daily&appid=66d6dac659158714ecc7ae920d07ddb9";

const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${WEATHER_API_KEY}`;

const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`;

const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/ditto";

async function getWeatherData() {
  try {
    const response = await fetch(currentWeatherUrl);
    const json = await response.json();
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    console.log(json);
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

// getWeatherData();

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
// console.log(getPokemonData());

let displayList = [];
fetch(currentWeatherUrl)
  .then(function (response) {
    // console.log(response.json());
    return response.json();
  })
  .then((currentWeatherResults) => {
    var list = document.getElementById("myList");
    console.log(currentWeatherResults);
    const parsedCurrentWeatherResult = JSON.parse(currentWeatherResults);
    // debugging here //
    parsedCurrentWeatherResult.forEach((item) => {
      displayList.push(item.name);
      let li = document.createElement("li");
      li.innerText = item.name;
      list.appendChild(li);
    });
    console.log(displayList);
  })
  .catch((err) => {
    console.log(`Error fetching: ${err}`);
  });

[{}, {}];
{
}
console.log(jsonImport.test.test2 + " " + " " + jsonImport.test.test1)

