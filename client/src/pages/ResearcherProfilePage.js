import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {MainProfile} from "../components/researcher/MainProfile";
import {PublonsProfile} from "../components/researcher/PublonsProfile";
import {GoogleScholarProfile} from "../components/researcher/GoogleScholarProfile";
import {ScopusProfile} from "../components/researcher/ScopusProfile";
import {useLoadProfile} from "../hooks/profile.hook";

export const ResearcherProfilePage = () => {

	const {id} = useParams()
	const {loadProfile, profileData} = useLoadProfile()

	useEffect(() => {
		loadProfile(id)
	}, [id, loadProfile])

	const publonsProfile = profileData.publonsProfile ? <div><PublonsProfile profile={profileData.publonsProfile} /></div> : null
	const googleScholarProfile = profileData.googleScholarProfile ? <div><GoogleScholarProfile profile={profileData.googleScholarProfile} /></div> : null
	const scopuesProfile = profileData.scopuesProfile ? <div><ScopusProfile profile={profileData.scopuesProfile} /></div> : null
	return (
		<div>
			<div className="grid gap-4 p-5 lg:grid-cols-4 items-start">
				<div className="animated rounded-lg shadow-md hover:shadow-lg bg-gray-200 dark:bg-gray-700">
					<MainProfile profile={profileData} />
				</div>
				<div className="lg:col-span-3 grid gap-5">
					{publonsProfile}
					{googleScholarProfile}
					{scopuesProfile}
				</div>
			</div>
		</div>
	)
}