import React from "react";
import {useParams} from "react-router-dom";
import {MainProfile} from "../components/researcher/MainProfile";
import {PublonsProfile} from "../components/researcher/PublonsProfile";
import {GoogleScholarProfile} from "../components/researcher/GoogleScholarProfile";
import {ScopusProfile} from "../components/researcher/ScopusProfile";

export const ResearcherProfilePage = () => {
	const {id} = useParams()

	return (
		<div>
			<div className="grid gap-4 p-5 lg:grid-cols-4 items-start">
				<div className="animated rounded-lg shadow-md hover:shadow-lg bg-gray-200 dark:bg-gray-700">
					<MainProfile />
				</div>
				<div className="lg:col-span-3 grid gap-5">
					<div>
						<PublonsProfile />
					</div>
					<div>
						<GoogleScholarProfile />
					</div>
					<div>
						<ScopusProfile />
					</div>
				</div>
			</div>
		</div>
	)
}