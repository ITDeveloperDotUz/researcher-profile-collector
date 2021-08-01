import React from "react";
import {Link} from "react-router-dom";


export const SearchResultListItem = ({researcher, avatar}) => {
	return (
		<div className="flex">
			<div className="w-full grid place-items-center gap-3 grid-cols-2 lg:grid-cols-4 text-center animated bg-white dark:bg-gray-800 p-5 dark:text-white">
				<div className="col-span-2 lg:col-span-1">
					<img className="rounded-full overflow-hidden" width="80" style={{maxHeight: 80}} src={researcher.avatar} alt="" />
				</div>
				<div className="col-span-3 lg:text-left w-full">
					<Link to={`/researcher/profile/${researcher.id}`}>
						<h3 className=" text-lg font-bold">{researcher.first_name} {researcher.last_name}</h3>
					</Link>
					<p>{researcher.organization}</p>
				</div>
			</div>
		</div>
	)
}