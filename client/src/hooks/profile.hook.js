import {useCallback} from "react";


export const useLoadProfile = () => {
	const  loadProfile = useCallback(async (id) => {
		console.log(id)
	}, [])

	return {loadProfile}
}