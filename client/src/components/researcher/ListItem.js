import React from "react";
import VerticalBar from "../VerticalBar";


export const ListItem = ({researcher, avatar}) => {

	return (
		<div className="flex my-4">
			<div className="w-full grid place-items-center gap-3 grid-cols-2 lg:grid-cols-10 text-center bg-white dark:bg-gray-800 p-5 dark:text-white">
				<div className="col-span-2 lg:col-span-1">
					<img className="rounded-full overflow-hidden" width="80" style={{maxHeight: 80}} src={researcher.avatar} alt="" />
				</div>
				<div className="col-span-3 lg:text-left w-full">
					<h3 className="text-lg font-bold">{researcher.first_name} {researcher.last_name}</h3>
					<p>{researcher.organization}</p>
				</div>
				<div className="col-span-2 lg:place-self-end">
					<VerticalBar bgColor={"rgba(52,101,149,0.7)"} label={'Citations on Web of Science'} />
				</div>
				<div className="col-span-2 lg:place-self-end">
					<VerticalBar bgColor={"rgba(13,110,253,0.7)"} label={'Citations on Google Scholar'} />
				</div>
				<div className="col-span-2 lg:place-self-end">
					<VerticalBar bgColor={"rgba(254,130,0,0.7)"} label={'Citations on Scopus'}/>
				</div>
			</div>
		</div>
	)
}