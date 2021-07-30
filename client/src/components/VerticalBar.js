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
const VerticalBar = ({bgColor, label}) => {
	const data = {
		labels: ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021","2021","2021","2021","2021","2021","2021","2021","2021","2021"],
		datasets: [
			{
				label: "Number of Moons",
				type: 'bar',
				data: [...myIterable],
				backgroundColor: bgColor,
			},
		]
	}
	return (
		<>
			<Bar width={250} height={80} data={data} options={options} />
			<h3 className="font-bold">{label}</h3>
		</>
	)
}

export default VerticalBar;