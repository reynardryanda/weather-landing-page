class UI {
  constructor() {
    this.sunrise = document.getElementById("sunrise");
    this.sunset = document.getElementById("sunset");
    this.wind = document.getElementById("wind");
    this.windDirection = document.getElementById("wind-direction");
    this.humidity = document.getElementById("humidity");
    this.cloudiness = document.getElementById("cloudiness");
    this.currentWeather = document.getElementById("current-weather");
    this.temperature = document.getElementById("temperature");
    this.minTemperature = document.getElementById("min-temperature");
    this.maxTemperature = document.getElementById("max-temperature");
  }

  showCurrentWeather(data) {
    const sunriseTimestamp = data.sys.sunrise;
    const sunrise = this.configureTime(new Date(sunriseTimestamp * 1000));

    const sunsetTimestamp = data.sys.sunset;
    const sunset = this.configureTime(new Date(sunsetTimestamp * 1000));

    this.sunrise.innerHTML = sunrise;
    this.sunset.innerHTML = sunset;

    const windSpeed = data.wind.speed;
    this.wind.innerHTML = windSpeed;

    const windDirection = data.wind.deg;
    this.windDirection.style.transform = `rotate(${windDirection}deg)`;

    const humidity = data.main.humidity;
    this.humidity.innerHTML = humidity;

    const cloudiness = data.clouds.all;
    this.cloudiness.innerHTML = cloudiness;

    const currentWeather = this.uppercaseEveryFirstLetter(data.weather[0].description);
    this.currentWeather.innerHTML = currentWeather;

    const temperature = data.main.temp;
    this.temperature.innerHTML = temperature;

  }

  uppercaseEveryFirstLetter(text) {
    const texts = text.split(" ");
    for (let i = 0; i < texts.length; i++) {
      texts[i] = texts[i].charAt(0).toUpperCase() + texts[i].slice(1);
    }
    console.log(texts);
    return texts.join(" ");
  }

  configureTime(date) {
    let time = "";
    if (date.getHours() < 10) {
      time += "0" + date.getHours() + ":";
    } else {
      time += date.getHours() + ":";
    }

    if (date.getMinutes() < 10) {
      time += "0" + date.getMinutes() + ":";
    } else {
      time += date.getMinutes() + ":";
    }

    if (date.getSeconds() < 10) {
      time += "0" + date.getSeconds();
    } else {
      time += date.getSeconds();
    }

    return time;
  }
}