import React from 'react'
import {Banner} from "../components/Banner";
import {Features} from "../components/Features";
import {Partners} from "../components/Partners";


export const  HomePage = () => {
	return (
		<div>
			<Banner />
			<Features />
			<Partners/>
		</div>
	)
}