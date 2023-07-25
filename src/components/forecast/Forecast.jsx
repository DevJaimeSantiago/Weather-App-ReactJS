import {
	Accordion,
	AccordionItem,
	AccordionItemButton,
	AccordionItemHeading,
	AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday",
];
const Forecast = ({ data }) => {
	const dayInWeeek = new Date().getDay();
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
