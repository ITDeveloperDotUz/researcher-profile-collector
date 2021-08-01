import VerticalBar from "../VerticalBar";
import React from "react";


export const ScopusProfile = ({profile}) => {

	console.log(profile)
	const organization = profile.organization ? <p><strong>Organization:</strong> {profile.organization}</p> : null
	const researchFields = profile.keywords ? <p><strong>Research fields:</strong> {profile.keywords}</p> : null
	return (
		<div className=" grid grid-cols-2 animated place-items-center bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg">
			<div className="place-self-start p-5">
				<p><strong>User name:</strong> {profile.name}</p>
				{organization}
				<p><strong>H-Index:</strong> {profile.hIndex}</p>
				<p><strong>Citations:</strong> {profile.citations}</p>
				<p><strong>Publications:</strong> {profile.publications}</p>
				<p><strong>Co-authors:</strong> {profile.coAuthors}</p>
				<p><strong>Cited by:</strong> {profile.citedBy}</p>
				{researchFields}
			</div>
			<div className="text-center p-5 w-full h-full">
				<VerticalBar bgColor={"rgba(254,130,0,0.7)"} label={'Citations on Scopus'} publications={profile.chartData.publications} citations={profile.chartData.citations} years={profile.chartData.years}/>
			</div>
		</div>
	)
}