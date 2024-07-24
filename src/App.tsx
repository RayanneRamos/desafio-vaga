import { useEffect, useState } from "react";
import "./app.css";

export function App() {
  const [weather, setWeather] = useState();
  const cityName = "Rio de Janeiro";
  const url = `https://api.weatherstack.com/historical?access_key=86951229b559f3658b8840775cbe6976&query=${cityName}`;
  const options = { method: "GET" };

  async function handleWeather() {
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      setWeather(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    handleWeather();
  }, []);

  console.log(weather);

  return (
    <div className="container">
      <div className="container-box">
        <strong className="weather-local">
          Nilópolis, Rio de Janeiro, Brasil
        </strong>
        <div className="content-weather">
          <img src={weather} alt="weather-image" className="weather-image" />
          <span className="weather-temperature">{weather?.temperature}ºc</span>
          <div className="weather-info">
            <span className="weather-details">Wind: {weather?.wind} kmph</span>
            <span className="weather-details">
              Precip: {weather?.precip} mm
            </span>
            <span className="weather-details">
              Pressure: {weather?.pressure} mb
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
