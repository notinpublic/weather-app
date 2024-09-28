const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/ditto";
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

  const part = "daily";
  const fullUrl =
  "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=daily&appid=66d6dac659158714ecc7ae920d07ddb9";

const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${WEATHER_API_KEY}`;