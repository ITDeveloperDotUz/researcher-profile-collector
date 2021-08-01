import VerticalBar from "../VerticalBar";
import React from "react";


export const ScopusProfile = ({profile}) => {

	const organization = profile.organization ? <p><strong>Organization:</strong> {profile.organization}</p> : null
	const researchFields = profile.keywords ? <p><strong>Research fields:</strong> {profile.keywords}</p> : null
	const chart = profile.chartData ? <VerticalBar bgColor={"rgba(254,130,0,0.7)"} label={'Citations on Scopus'} publications={profile.chartData.publications} citations={profile.chartData.citations} years={profile.chartData.years}/>
		: <h1 style={{color: "rgba(254,130,0,0.7)"}} className="text-2xl font-bold" >Chart data is not available</h1>

	return (

		<div style={{background: "rgba(254,130,0,0.7)"}} className="animated bg-gray-200 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg\">
			<div className="py-2 px-5">
				<h1 className="text-2xl text-white font-bold" >Scopus profile data</h1>
			</div>
			<div className="grid grid-cols-2 animated place-items-center bg-white dark:bg-gray-800 rounded-t-3xl rounded-b-lg">
				<div className="place-self-start p-5">
					<p><strong>User name:</strong> {profile.name}</p>
					{organization}
					<p><strong>H-Index:</strong> {profile.hIndex || 'Not available'}</p>
					<p><strong>Citations:</strong> {profile.citations || 'Not available'}</p>
					<p><strong>Publications:</strong> {profile.publications || 'Not available'}</p>
					<p><strong>Co-authors:</strong> {profile.coAuthors || 'Not available'}</p>
					<p><strong>Cited by:</strong> {profile.citedBy || 'Not available'}</p>
					{researchFields}
				</div>
				<div className="text-center p-5 w-full h-full">
					{chart}
				</div>
			</div>
		</div>
	)
}