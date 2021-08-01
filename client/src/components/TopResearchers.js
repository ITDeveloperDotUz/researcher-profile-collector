import React, {useEffect} from 'react'
import {useLoadTopResearchers} from "../hooks/profile.hook";
import {ListItem} from "./researcher/ListItem";
import {Preloader} from "./Preloader";

export const TopResearchers = ({limit}) => {
	const {loading, profiles,loadProfiles} = useLoadTopResearchers()

	useEffect(() => {
		loadProfiles(limit)
	}, [loadProfiles, limit])
	const researchers = profiles.length > 0 ? profiles.map(profile => <ListItem key={profile.id} researcher={profile} />): 'No data available'

	return (
		<div>
			{!loading ? researchers : <Preloader />}
		</div>
	)
}