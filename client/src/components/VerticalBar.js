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

const VerticalBar = ({bgColor}) => {
	const data = {
		labels: ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"],
		datasets: [
			{
				label: "Number of Moons",
				type: 'bar',
				data: [340, 650, 450, 480, 560, 770, 555, 235],
				backgroundColor: bgColor,
			},
		]
	}
	return (
		<>
			<Bar width={200} height={80} data={data} options={options} />
		</>
	)
}

export default VerticalBar;