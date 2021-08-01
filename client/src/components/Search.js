import React, {useEffect, useState} from "react";
import {toast} from "react-toastify";

export const Search = ({searchCallback, value}) => {
	const [searchForm, setSearchForm] = useState({phrase: '', eager: false});

	// check if initial values passed. If so, set these values to a searchform
	useEffect(() => {
		if(value && value.phrase) {
			setSearchForm({phrase: value.phrase, eager:value.eager});
		}
	}, [])


	const searchHandler = async () => {
		if (!searchForm.phrase) {
			toast.warning('Please enter an email, ORCID or a name of author to search')
			return
		}
		searchCallback(searchForm)
	}


	return (
		<div className="animated flex w-full gap-2 md:justify-start md:flex-row bg-white shadow-md hover:shadow-lg dark:bg-gray-800 dark:text-white px-4 py-3 mb-4 text-base text-black transition ease-in-out transform rounded-lg duration-650">
			<label className="inline-flex items-center">
				<input title="Search from Scienceweb database..." onChange={e => setSearchForm({...searchForm, eager: e.target.checked})} name="eager" type="checkbox" checked={searchForm.eager} className="form-checkbox h-5 w-5 text-blue-600" />
			</label>
			<div className="w-full">
				<input name="phrase" onChange={e => setSearchForm({...searchForm, phrase: e.target.value})}
					   className="animated w-full dark:bg-gray-800 dark:text-white px-4 py-3 text-base text-black focus:outline-none"
					   placeholder="You can search by author name, email or ORCID..." type="text" value={searchForm.phrase}/>
			</div>
			<button onClick={searchHandler}
					className="flex items-center px-6 py-3 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg  hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
				Search
			</button>
		</div>
	)
}