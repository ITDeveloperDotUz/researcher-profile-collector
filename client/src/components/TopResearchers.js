import React from "react";
import VerticalBar from "./VerticalBar";


export const TopResearchers = () => {


	return (
		<div className="flex my-4">
			<div className="w-full grid place-items-center gap-3 grid-cols-2 lg:grid-cols-10 text-center bg-white dark:bg-gray-800 p-5 dark:text-white">
				<div className="col-span-2 lg:col-span-1">
					<img className="rounded-full" width="80" src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg" alt="" />
				</div>
				<div className="col-span-3 lg:text-left">
					<h3 className="text-lg font-bold">Chuck Norris</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque blanditiis.</p>
				</div>
				<div className="col-span-2">
					<VerticalBar bgColor={"rgba(52,101,149,0.7)"} />
				</div>
				<div className="col-span-2">
					<VerticalBar bgColor={"rgba(13,110,253,0.7)"} />
				</div>
				<div className="col-span-2">
					<VerticalBar bgColor={"rgba(254,130,0,0.7)"} />
				</div>
			</div>
		</div>
	)
}