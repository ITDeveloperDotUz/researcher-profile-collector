import {useCallback, useState} from "react";
import {useHttp} from "./http.hook";
import {useHistory} from "react-router-dom";


export const useLoadProfile = () => {
	const {request} = useHttp()
	const history = useHistory()
	const [profileData, setProfileData] = useState({})
	const  loadProfile = useCallback(async (id) => {
		try {
			const response = await request(`/api/researcher/profile/${id}`, 'GET')
			if (response){
				setProfileData(response.data)
			}
		} catch (e) {
			console.log(e)
			history.push('/')
		}
	}, [request, setProfileData, history])

	return {loadProfile, profileData}
}