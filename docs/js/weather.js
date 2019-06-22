class Weather {
  constructor() {
    this.API_KEY = "0fc567915fb2f6097d4c58a92441303d";
  }

  async getData(cityName, countryCode) {
    const threeHourForecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName},${countryCode}$units=metric&cnt=9&appid=${this.API_KEY}`);

    const currentWeatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}$units=metric&appid=${this.API_KEY}`);

    const threeHourForecast = await threeHourForecastResponse.json();

    const currentWeather = await currentWeatherResponse.json();

    return {
      currentWeather,
      threeHourForecast
    }
  }
}