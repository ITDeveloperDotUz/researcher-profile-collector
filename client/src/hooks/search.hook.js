import {useState} from "react";

export const useSearch = () => {
	const [searchForm, setSearchForm] = useState({
		phrase: '', eager: false
	});

	return {searchForm, setSearchForm}
}