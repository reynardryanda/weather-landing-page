const weather = new Weather();
const ui = new UI();

getWeatherData("Jakarta", "id");

function getWeatherData(cityName, countryId) {
  weather.getData(cityName, countryId)
    .then(data => {
      const threeHourForecast = data.threeHourForecast;
      const currentWeather = data.currentWeather;

      console.log(currentWeather);
      console.log(threeHourForecast);
      ui.showCurrentWeather(currentWeather);
    })
    .catch(err => {
      console.log(err);
    })
}

  // async function addImage(icon) {
    //   const img = document.createElement('img'),
    //     currentWeatherContainer = document.querySelector('.current-weather');

    //   await img.setAttribute('src', `http://openweathermap.org/img/w/${icon}.png`);
    //   img.setAttribute('alt', "Current weather icon");

    //   currentWeatherContainer.appendChild(img);
    // }