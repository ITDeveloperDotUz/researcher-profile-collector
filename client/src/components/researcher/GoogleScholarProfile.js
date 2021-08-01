import VerticalBar from "../VerticalBar";
import React from "react";


export const GoogleScholarProfile = ({profile}) => {

	const organization = profile.organization ? <p><strong>Organization:</strong> {profile.organization}</p> : null
	const researchFields = profile.keywords ? <p><strong>Research fields:</strong> {profile.keywords}</p> : null
	return (
		<div className=" grid grid-cols-2 animated place-items-center bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg">
			<div className="place-self-start p-5">
				<img className="w-20 h-20 rounded-full" src={profile.avatar} alt=""/>
				<p><strong>User name:</strong> {profile.name}</p>
				{organization}
				<p><strong>H-Index:</strong> {profile.hIndex}</p>
				<p><strong>H-Index in last 5 years:</strong> {profile.hIndex5year}</p>
				<p><strong>Citations:</strong> {profile.citations}</p>
				<p><strong>Citations in last 5 years:</strong> {profile.citations5year}</p>
				<p><strong>i10-Index:</strong> {profile.i10Index}</p>
				<p><strong>i10-Index in last 5 years:</strong> {profile.i10Index5year}</p>
				{researchFields}
			</div>
			<div className="text-center p-5 w-full h-full">
				<VerticalBar bgColor={"rgba(13,110,253,0.7)"} label={'Citations on Google Scholar'} citations={profile.chartData.citations} years={profile.chartData.years}/>
			</div>
		</div>
	)
}