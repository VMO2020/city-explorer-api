import React from 'react';
import './weather.css';

export const Weather = ({ locationWeather, locationWeatherData }) => {
	return (
		<>
			{locationWeatherData && (
				<h3>
					Date/Time: <span>{locationWeatherData.localtime}</span>
				</h3>
			)}
			{locationWeather && (
				<p>
					Weather condition: <span>{locationWeather.condition.text}</span>
				</p>
			)}
			<div className="weather-container">
				{locationWeather && <p>Temp: {locationWeather.temp_c} &#x2103;</p>}
				{locationWeather && <p>Humidity: {locationWeather.humidity} %</p>}
				{locationWeather && <p>Wind: {locationWeather.wind_kph} Kph</p>}
			</div>
		</>
	);
};
