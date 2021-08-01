import React, {useEffect} from 'react'
import {useParams} from "react-router-dom";
import {Search} from "../components/Search";
import {SearchResultListItem} from "../components/researcher/SearchResultListItem";
import {useSearch} from "../hooks/search.hook";
import {Preloader} from "../components/Preloader";

export const SearchPage = () => {
	const {searchPhrase} = useParams()
	const {searchHandler,searchResult,setSearchForm, searchForm, loading} = useSearch()
	useEffect(() => {
		const search = searchPhrase ? searchPhrase.split(':') : ''
		const searchObject = {phrase: search[0], eager: search[1] === "true"}
		if(search){
			setSearchForm(searchObject)
			searchHandler(searchObject)
		}

	}, [searchHandler, searchPhrase, setSearchForm]);

	const content = loading ? <Preloader /> : (
		<div className="grid lg:grid-cols-3 gap-5 animated">
			{searchResult.map(researcher => <SearchResultListItem researcher={researcher} key={researcher.id} />)}
		</div>
	)
	return (
		<div className="text-center pt-6">
			<div className="lg:px-20 py-10 animated">
				<h1 className="text-5xl font-semibold">Search authors</h1>
				<p className="text-lg mb-5">
					Search from scienceweb databse putting a tick left below (consider that it will take some more time) or just search from native database
				</p>
				<div className="lg:px-20">
					<Search value={searchForm} searchCallback={searchHandler} />
				</div>
			</div>
			{content}
		</div>
	)
}