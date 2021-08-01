import React from 'react'
import {Banner} from "../components/Banner";
import {Features} from "../components/Features";
import {Partners} from "../components/Partners";
import {TopResearchers} from "../components/TopResearchers";


export const  HomePage = () => {
	return (
		<div>
			<Banner />
			<Features />
			<TopResearchers limit={10}/>
			<Partners/>
		</div>
	)
}