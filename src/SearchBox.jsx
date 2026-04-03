import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

// setWeatherInfo is passed down from WeatherApp.jsx to lift state up
export default function SearchBox({ setWeatherInfo }) {
  // API credentials from .env file
  const WEATHER_API_URL = import.meta.env.VITE_WEATHER_API_URL;
  const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  // tracks what the user types in the input
  let [city, setCity] = useState("");

  // fetches weather data from OpenWeatherMap API
  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${WEATHER_API_URL}?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();

      // if city not found API returns cod 404
      if (jsonResponse.cod === "404") {
        alert("City not found. Please try again.");
        return;
      } 
      

      // extract only the fields we need from the API response
      let result = {
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
        icon: jsonResponse.weather[0].icon,
        city: jsonResponse.name,
        country: jsonResponse.sys.country,
        wind: (jsonResponse.wind.speed * 3.6).toFixed(1),
        visibility: (jsonResponse.visibility / 1000).toFixed(1),
        pressure: jsonResponse.main.pressure,
        clouds: jsonResponse.clouds.all,
        sunrise: new Date(jsonResponse.sys.sunrise * 1000).toLocaleTimeString(),
        sunset: new Date(jsonResponse.sys.sunset * 1000).toLocaleTimeString(),
      };

      // send result up to WeatherApp.jsx
      setWeatherInfo(result);
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
    }
  };

  // updates city state as user types
  let handelChange = (event) => {
    setCity(event.target.value);
  };

  // prevents page refresh and triggers API call
  let handelSubmit = (event) => {
    event.preventDefault();
    getWeatherInfo();
    setCity(""); // clear input after search
  };

  return (
    <div className="searchbox">
      <h3>Weather App</h3>
      <p>Search for current weather in any city</p>
      <form className="searchbox-form" onSubmit={handelSubmit}>
        <TextField
          id="cityname"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handelChange}
        />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}