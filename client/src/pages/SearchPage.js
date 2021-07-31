import React, {useCallback, useEffect, useState} from 'react'
import {Search} from "../components/Search";
import {isEmail, isOrcid} from "../utils/helpers";
import {useHttp} from "../hooks/http.hook";
import {useParams} from "react-router-dom";
import {ResearcherListItem} from "../components/ResearcherListItem";
import {toast} from "react-toastify";

export const SearchPage = () => {
	const {searchPhrase} = useParams()
	const [searchResult, setSearchResult] = useState([])
	const {request} = useHttp()

	const searchHandler = useCallback( async (searchPhrase) => {
		try {
			// set param = email if isEmail returns true or orcid if isOrcid returns true or ''
			const param = !isEmail(searchPhrase) ? (isOrcid(searchPhrase) ? 'orcid' : 'name') : 'email'

			const response = await request(`/api/researcher/search/${param}:${searchPhrase}`)
			if (response.data) {
				setSearchResult(response.data)
			} else setSearchResult([])

			toast.info(response.message)
		} catch (e) {}
	}, [request,setSearchResult])

	useEffect(() => {
		searchHandler(searchPhrase)
	}, [searchPhrase, searchHandler]);

	return (
		<div className="text-center pt-6">
			<div className="lg:px-20  py-10">
				<h1 className="text-5xl font-semibold">Search authors</h1>
				<p className="text-lg mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium commodi corporis ducimus et eveniet fuga illum incidunt, ipsa iusto labore laudantium maxime nesciunt nobis odio officia quam, reprehenderit sequi sunt!</p>
				<div className="px-20">
					<Search value={searchPhrase} searchCallback={searchHandler} />
				</div>
			</div>

			{searchResult.map(researcher => <ResearcherListItem researcher={researcher} key={researcher.id} />)}

		</div>
	)
}