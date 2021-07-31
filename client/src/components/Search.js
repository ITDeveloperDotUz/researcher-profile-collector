import React, {useEffect, useState} from "react";
import {toast} from "react-toastify";

export const Search = ({searchCallback, value}) => {
	const [searchForm, setSearchForm] = useState('');

	 useEffect(() => {
		if(value) {
			setSearchForm(value)
		}
	}, [value,setSearchForm])


	const searchHandler = async () => {
		if (!searchForm) {
			toast.warning('Please enter an email, ORCID or a name of author to search')
			return
		}
		searchCallback(searchForm)
	}

	const changeHandler = event => {
		setSearchForm(event.target.value)
	}

	return (
		<div className="flex flex-col w-full gap-2 md:justify-start md:flex-row">
			<input name="searchPhrase" onChange={changeHandler}
				   className="flex-grow w-full shadow-md hover:shadow-lg focus:shadow-lg dark:bg-gray-800 dark:text-white px-4 py-3 mb-4 text-base text-black transition ease-in-out transform rounded-lg  duration-650 lg:w-auto bg-blueGray-200 focus:outline-none focus:border-purple-500 sm:mb-0 focus:bg-white focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
				   placeholder="You can search by author name, email or ORCID..." type="text" value={searchForm}/>
			<button onClick={searchHandler}
					className="flex items-center px-6 py-3 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg  hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
				Search
			</button>
		</div>
	)
}