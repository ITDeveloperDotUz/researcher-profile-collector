import React from 'react';
import { Bar } from 'react-chartjs-2';

const options = {
	plugins: {
		legend: {
			display: false
		},
	},
	responsive: true,
	scales: {
		xAxes: {
			display: false,
			gridLines: {
				display:false
			}
		},
		yAxes: {
			display: false,
			gridLines: {
				display:false
			}
		},
	},
};
let myIterable = {}
myIterable[Symbol.iterator] = function* () {
	for (let num = 0; num < 20; num++){
		yield Math.floor(Math.random() * 10000)
	}
};
const VerticalBar = ({bgColor, label, years, citations, publications}) => {
	const data = {
		labels: years,
		datasets: [
			{
				label: "Publications",
				type: 'bar',
				data: citations,
				backgroundColor: bgColor,
			},
			{
				label: "Citations",
				type: 'line',
				data: publications,
				backgroundColor: bgColor,
				borderColor: bgColor,
				borderWidth: 3
			},
		]
	}
	return (
		<>
			<Bar className="w-full" height={150} data={data} options={options} />
			<h3 className="font-bold">{label}</h3>
		</>
	)
}

export default VerticalBar;