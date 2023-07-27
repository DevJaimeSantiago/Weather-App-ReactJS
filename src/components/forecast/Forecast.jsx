import {
	Accordion,
	AccordionItem,
	AccordionItemButton,
	AccordionItemHeading,
	AccordionItemPanel,
} from "react-accessible-accordion";

import "./forecast.css";

const WEEK_DAYS = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
const Forecast = ({ data }) => {
	const dayInWeeek = new Date().getDay();
	// console.log(dayInWeeek);
	const forecastDays = WEEK_DAYS.slice(dayInWeeek, WEEK_DAYS.length).concat(
		WEEK_DAYS.slice(0, dayInWeeek)
	);

	// console.log(forecastDays)

	return (
		<>
			<label className="title">Daily</label>
			<Accordion allowZeroExpanded>
				{data.list.slice(0, 7).map((item, index) => (
					<AccordionItem key={index}>
						<AccordionItemHeading>
							<AccordionItemButton>
								<div className="daily-item">
									<img
										src={`icons/${item.weather[0].icon}.png`}
										alt={item.weather[0].description}
										className="icon-small"
									/>
									<label className="day">{forecastDays[index]}</label>
									<label className="description">
										{item.weather[0].description}
									</label>
									<label className="min-max">
										{item.main.temp_min}°C / {item.main.temp_max}°C
									</label>
								</div>
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel></AccordionItemPanel>
					</AccordionItem>
				))}
			</Accordion>
		</>
	);
};
export default Forecast;
