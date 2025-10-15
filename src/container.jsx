import "./container.css";
const apiKey = "235d60b7d00bbcedd221065067155138";
function Container() {
  async function getWeather() {
    try {
      const cityName = document.getElementById("cityName").value;
      if (cityName === "") {
        alert("Please enter a city name");
        return;
      }
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      document.getElementById(
        "weatherInfo"
      ).innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather-icon"></img>
        <h2>${name}</h2>
        <p>${description.toUpperCase()}</p>
        <p>🌡️ Temperature: ${temp}°C</p>
        <p>💧 Humidity: ${humidity}%</p>
        <p>🌬️ Wind Speed: ${speed} m/s</p>`;
    } catch (error) {
      document.getElementById("weatherInfo").innerHTML = `City Not Found...`;
    }
  }

  return (
    <>
      <div className="container">
        <h1>🌤️ Weather Report</h1>
        <div className="search_box">
          <input type="text" id="cityName" placeholder="Enter city name..." />
          <button id="getWeatherBtn" onClick={getWeather}>
            Get Weather
          </button>
        </div>

        <div className="weather-info" id="weatherInfo"></div>
      </div>
    </>
  );
}
export default Container;
