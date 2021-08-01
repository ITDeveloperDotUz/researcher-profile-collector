import React, {useEffect} from 'react'
import {useParams} from "react-router-dom";
import {Search} from "../components/Search";
import {SearchResultListItem} from "../components/researcher/SearchResultListItem";
import {useSearch} from "../hooks/search.hook";

export const SearchPage = () => {
	const {searchPhrase} = useParams()
	const {searchHandler,searchResult,setSearchForm, searchForm} = useSearch()

	useEffect(() => {
		const search = searchPhrase ? searchPhrase.split(':') : ''
		const searchObject = {phrase: search[0], eager: search[1] === "true"}
		if(search){
			setSearchForm(searchObject)
			searchHandler(searchObject)
		}
	}, [searchHandler, searchPhrase, setSearchForm]);

	return (
		<div className="text-center pt-6">
			<div className="lg:px-20 py-10 animated">
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