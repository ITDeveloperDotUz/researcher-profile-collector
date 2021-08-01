import {useCallback, useState} from "react";
import {isEmail, isOrcid} from "../utils/helpers";
import {toast} from "react-toastify";
import {useHttp} from "./http.hook";

export const useSearch = () => {
	const {request} = useHttp()
	const [loading, setLoading] = useState(false)
	const [searchForm, setSearchForm] = useState({
		phrase: '', eager: false
	});
	const [searchResult, setSearchResult] = useState([])

	const searchHandler = useCallback(async (searchForm) => {
		setSearchResult([])
		setLoading(true)
		try {
			// set param = email if isEmail returns true or orcid if isOrcid returns true or 'name'
			const param = !isEmail(searchForm.phrase) ? (isOrcid(searchForm.phrase) ? 'orcid' : 'name') : 'email'

			const response = await request(`/api/researcher/search/${param}:${searchForm.phrase}:${searchForm.eager}`)

			if (response.data) {
				setSearchResult(response.data)
			} else setSearchResult([])

			toast.info(response.message)
			setLoading(false)
		} catch (e) {setLoading(false)}
	}, [request,setSearchResult])

	return {searchForm, setSearchForm, searchHandler, searchResult, loading}
}