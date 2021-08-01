import VerticalBar from "../VerticalBar";
import React from "react";


export const ScopusProfile = () => {


	return (
		<div className="text-center grid grid-cols-2 p-5 animated bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg">
			<div>

			</div>
			<div>
				<VerticalBar bgColor={"rgba(254,130,0,0.7)"} label={'Citations on Scopus'}/>
			</div>
		</div>
	)
}