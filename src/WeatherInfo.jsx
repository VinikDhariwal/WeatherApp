import "./WeatherInfo.css";

// receives weather data as props from WeatherApp.jsx
export default function WeatherInfo({ info }) {
  return (
    <div className="weather-card">
      {/* City and country name */}
      <h2>{info.city}, {info.country}</h2>

      {/* Weather icon from OpenWeatherMap */}
      <img
        src={`https://openweathermap.org/img/wn/${info.icon}@2x.png`}
        alt={info.weather}
      />

      {/* Short weather description */}
      <p className="weather-desc">{info.weather}</p>

      {/* Main temperature */}
      <p className="temp">{Math.round(info.temp)}°C</p>

      {/* Grid of individual detail cards */}
      <div className="weather-details">
        <div>
          <span>Min</span>
          <span>{Math.round(info.tempMin)}°C</span>
        </div>
        <div>
          <span>Max</span>
          <span>{Math.round(info.tempMax)}°C</span>
        </div>
        <div>
          <span>Feels Like</span>
          <span>{Math.round(info.feelsLike)}°C</span>
        </div>
        <div>
          <span>Humidity</span>
          <span>{info.humidity}%</span>
        </div>
      </div>
    </div>
  );
}