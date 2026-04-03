import './WeatherApp.css'
import SearchBox from './SearchBox'
import WeatherInfo from './WeatherInfo'
import WeatherExtra from './WeatherExtra'
import { useState } from 'react'

export default function WeatherApp() {
  // weatherInfo state lives here so all child components can access it
  let [weatherInfo, setWeatherInfo] = useState(null);

  return (
    <>
      {/* SearchBox handles input and API call */}
      <SearchBox setWeatherInfo={setWeatherInfo} />

      {/* Both cards render side by side after a successful search */}
      {weatherInfo && (
        <div className="weather-container">
          <WeatherInfo info={weatherInfo} />
          <WeatherExtra info={weatherInfo} />
        </div>
      )}
    </>
  )
}