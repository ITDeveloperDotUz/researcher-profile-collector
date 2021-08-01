import React, {useCallback, useEffect, useState} from 'react'
import {isEmail, isOrcid} from "../utils/helpers";
import {useHttp} from "../hooks/http.hook";
import {useParams} from "react-router-dom";
import {toast} from "react-toastify";
import {Search} from "../components/Search";
import {SearchResultListItem} from "../components/researcher/SearchResultListItem";

export const SearchPage = () => {
	const {searchPhrase} = useParams()
	const [searchResult, setSearchResult] = useState([])
	const {request} = useHttp()
	const search = searchPhrase.split(':')
	let searchForm = {phrase: search[0], eager:search[1] !== "false"}

	const searchHandler = useCallback( async (searchForm) => {
		setSearchResult([])
		try {
			// set param = email if isEmail returns true or orcid if isOrcid returns true or 'name'
			const param = !isEmail(searchForm.phrase) ? (isOrcid(searchForm.phrase) ? 'orcid' : 'name') : 'email'

			const response = await request(`/api/researcher/search/${param}:${searchForm.phrase}:${searchForm.eager}`)
			if (response.data) {
				setSearchResult(response.data)
			} else setSearchResult([])

			toast.info(response.message)
		} catch (e) {}
	}, [request,setSearchResult])

	useEffect(() => {
		searchHandler((searchForm))
	}, []);


	return (
		<div className="text-center pt-6">
			<div className="lg:px-20 py-10">
				<h1 className="text-5xl font-semibold">Search authors</h1>
				<p className="text-lg mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium commodi corporis ducimus et eveniet fuga illum incidunt, ipsa iusto labore laudantium maxime nesciunt nobis odio officia quam, reprehenderit sequi sunt!</p>
				<div className="lg:px-20">
					<Search value={searchForm} searchCallback={searchHandler} />
				</div>
			</div>
			<div className="grid grid-cols-3">
				{searchResult.map(researcher => <SearchResultListItem researcher={researcher} key={researcher.id} />)}
			</div>
		</div>
	)
}