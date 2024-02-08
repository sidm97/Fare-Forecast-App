$(document).ready(function () {
  const apiKey = `359fbb9063e60407b575e9a14683190b`; // Use your actual API key

  $("#flight-btn").on("click", function () {
    // e.preventDefault();
    const city = $("#destination-input").val();
    if (city) {
      getWeather(city, apiKey);
      getForecast(city, apiKey);
    }
  });

  function getWeather(city, apiKey) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        displayWeather(data);
      });
  }

  function getForecast(city, apiKey) {
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    fetch(forecastUrl)
      .then((response) => response.json())
      .then((data) => {
        displayForecast(data);
      });
  }

  function displayWeather(data) {
    const weatherDisplay = $("#Weather");
    $("#Weather").css("color", "rgb(255, 255, 255, 0.7)");
    $("#Weather .h2").css("color", "black");
    $("#Weather").css("padding-left", "30px");
    $("#weather-title").append(`<h2>${data.name}</h2>`)
    if (data.cod !== 200) {
      weatherDisplay.html(`<p>City not found. Please try again.</p>`);
      return;
    }

    // Calculate local time
    const timezoneOffset = data.timezone;
    const localTime = new Date(new Date().getTime() + timezoneOffset * 1000);
    const timeString = localTime.toUTCString().replace(" GMT", "");

    const weatherHtml = `
          <div class="col-12">
              <p>Local Time: ${timeString}</p>
              <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description}">
              <p>Temperature: ${data.main.temp} °C</p>
              <p>Weather: ${data.weather[0].main}</p>
              <p>Wind Speed: ${data.wind.speed} KPH</p>
              <p>Humidity: ${data.main.humidity}%</p>
          </div>
      `;
    weatherDisplay.html(weatherHtml);
  }
});
