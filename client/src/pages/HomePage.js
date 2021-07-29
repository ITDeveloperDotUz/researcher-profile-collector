import React from 'react'
import {Banner} from "../components/Banner";
import {Features} from "../components/Features";
import {TopResearchers} from "../components/TopResearchers";
import {Partners} from "../components/Partners";


export const  HomePage = () => {
	return (
		<div>
			<Banner />
			<Features />
			<TopResearchers />
			<Partners/>
		</div>
	)
}