import bannerImage from "../assets/images/home-banner.png";
import React from "react";
import {Search} from "./Search";
import {useHistory} from "react-router-dom";

export const Banner = () => {
	const history = useHistory()

	// This is the callback function that gets searchPhrase argument from Search component
	// And redirects to SearchPage
	const searchHandler = (searchPhrase) => {
		history.push(`/search/${searchPhrase}`)
	}

	return (
		<section className="text-blueGray-700">
			<div className="container flex flex-col items-center px-5 py-16 mx-auto  md:flex-row lg:px-28">
				<div
					className="flex flex-col items-start w-full pt-0 mb-16 text-left  lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:mb-0">
					<h1 className="mb-8 text-2xl font-black tracking-tighter text-black dark:text-white md:text-5xl title-font"> Medium
						length display headline. </h1>
					<p className="mb-8 text-base leading-relaxed text-left text-blueGray-600"> Deploy your mvp in
						minutes, not days. WT offers you a a wide selection swapable sections for your landing
						page. </p>
					<Search searchCallback={searchHandler} />
					<p className="w-full mt-2 mb-8 text-sm text-left text-blueGray-600"> I got 99 problems and
						blocks ain't one. </p>
				</div>
				<div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
					<img className="object-cover object-center rounded-lg float-right" alt="hero"
						 src={bannerImage} />
				</div>
			</div>
		</section>
	)
}

