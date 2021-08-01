import {useCallback, useState} from "react";
import {useHttp} from "./http.hook";
import {useHistory} from "react-router-dom";


export const useLoadProfile = () => {
	const {request} = useHttp()
	const history = useHistory()
	const [loading, setLoading] = useState(false)
	const [profileData, setProfileData] = useState({})
	const  loadProfile = useCallback(async (id) => {
		setLoading(true)
		try {
			const response = await request(`/api/researcher/profile/${id}`, 'GET')
			if (response.data){
				setProfileData(response.data)
			}
			setLoading(false)
		} catch (e) {
			setLoading(false)
			console.log(e)
			history.push('/')
		}
	}, [request, setProfileData, history])

	return {loadProfile, profileData, loading}
}

export const useLoadTopResearchers = () => {
	const {request} = useHttp()
	const [profiles, setProfiles] = useState([])
	const [loading, setLoading] = useState(false)

	const  loadProfiles = useCallback(async (limit) => {
		setLoading(true)
		try {
			const response = await request(`/api/researcher/top-profiles/${limit}`)
			if (response.data){
				setProfiles(response.data)
			}
			setLoading(false)
		} catch (e) {
			setLoading(false)
			console.log(e)
		}
	}, [request, setProfiles])

	return {loadProfiles, profiles, loading}
}