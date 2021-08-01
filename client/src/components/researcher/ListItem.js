import React from "react";
import VerticalBar from "../VerticalBar";
import {Link} from "react-router-dom";


export const ListItem = ({researcher}) => {
	const gsProfile = researcher.googleScholarProfile
	const pbProfile = researcher.publonsProfile
	const scProfile = researcher.scopuesProfile
	const googleScholarStats = gsProfile && gsProfile.chartData && gsProfile.chartData.years.length > 0
		? <VerticalBar bgColor={"rgba(13,110,253,0.7)"} label={'Citations on Google Scholar'} citations={gsProfile.chartData.citations} years={gsProfile.chartData.years} />
		: <h3 className="font-bold">Google Scholar profile is Not available</h3>

	const publonsStats = pbProfile && pbProfile.chartData && pbProfile.chartData.years.length > 0
		? <VerticalBar bgColor={"rgba(52,101,149,0.7)"} label={'Citations on Web of Science'} publications={pbProfile.chartData.publications} citations={pbProfile.chartData.citations} years={pbProfile.chartData.years} />
		: <h3 className="font-bold">Publons profile Not available</h3>

	const scopusStats = scProfile && scProfile.chartData && scProfile.chartData.years.length > 0
		? <VerticalBar bgColor={"rgba(254,130,0,0.7)"} label={'Citations on Scopus'} publications={scProfile.chartData.publications} citations={scProfile.chartData.citations} years={scProfile.chartData.years}/>
		: <h3 className="font-bold">Scopus profile Not available</h3>
	return (
		<div className="flex my-4">
			<div className="w-full grid place-items-center gap-3 grid-cols-2 lg:grid-cols-10 text-center bg-white dark:bg-gray-800 p-5 dark:text-white">
				<div className="col-span-2 lg:col-span-1">
					<img className="rounded-full overflow-hidden" width="80" style={{maxHeight: 80}} src={researcher.avatar} alt="" />
				</div>
				<div className="col-span-3 lg:text-left w-full">
					<Link to={`/researcher/profile/${researcher.id}`}>
						<h3 className="text-lg font-bold">{researcher.first_name} {researcher.last_name}</h3>
					</Link>
					<p>{researcher.organization}</p>
				</div>
				<div className="col-span-2 lg:place-self-end">
					{publonsStats}
				</div>
				<div className="col-span-2 lg:place-self-end">
					{googleScholarStats}
				</div>
				<div className="col-span-2 lg:place-self-end">
					{scopusStats}
				</div>
			</div>
		</div>
	)
}