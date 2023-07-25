import "./App.css";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api/api";
import { useState } from "react";
import Search from "./components/search/Search";
import CurrentWeather from "./components/current-weather/CurrentWeather";

const App = () => {
	const [currentWeather, setCurrentWeather] = useState(null);
	const [forecast, setForecast] = useState(null);

	const handleOnSearchchange = (searchData) => {
		// console.log(searchData)
		const [lat, lon] = searchData.value.split(" ");

		const currrentWeatherFetch = fetch(
			`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
		);

		const forecastFetch = fetch(
			`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
		);

		Promise.all([currrentWeatherFetch, forecastFetch])
			.then(async (response) => {
				const weatherResponse = await response[0].json();
				const forecastResponse = await response[1].json();

				setCurrentWeather({ city: searchData.label, ...weatherResponse });
				setForecast({ ciity: searchData.label, ...forecastResponse });
			})
			.catch((err) => console.log(err));
	};

	// console.log(currentWeather);
	// console.log(forecast);

	return (
		<>
			<div className="container">
				<Search onSearchChange={handleOnSearchchange} />
				{currentWeather && <CurrentWeather data={currentWeather} />}
			</div>
		</>
	);
};
export default App;
