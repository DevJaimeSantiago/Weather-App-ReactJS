import "./App.css";
import Search from "./components/search/Search";
import CurrentWeather from "./components/current-weather/CurrentWeather";

const App = () => {
	const handleOnSearchchange = (searchData) => { 
		console.log(searchData)
	 }

	return (
		<>
			<div className="container">
				<Search onSearchChange={handleOnSearchchange} />
				<CurrentWeather />
			</div>
		</>
	);
};
export default App;
