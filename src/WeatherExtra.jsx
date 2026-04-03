import "./WeatherExtra.css";

// displays additional weather details
export default function WeatherExtra({ info }) {
  return (
    <div className="extra-card">
      <h2>More Details</h2>

      {/* Grid of extra detail cards */}
      <div className="extra-details">
        <div>
          <span>Wind</span>
          <span>{info.wind} km/h</span>
        </div>
        <div>
          <span>Visibility</span>
          <span>{info.visibility} km</span>
        </div>
        <div>
          <span>Pressure</span>
          <span>{info.pressure} hPa</span>
        </div>
        <div>
          <span>Clouds</span>
          <span>{info.clouds}%</span>
        </div>
        <div>
          <span>Sunrise</span>
          <span>{info.sunrise}</span>
        </div>
        <div>
          <span>Sunset</span>
          <span>{info.sunset}</span>
        </div>
      </div>
    </div>
  );
}